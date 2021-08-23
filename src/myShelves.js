import React, { Component } from 'react'
import SingleShelf from './singleShelf'

class MyShelf extends Component {

  render(){
    // This component displays the home page
    // This filters books into their various shelfs
    const { getBooks } = this.props
    const currentlyReading = getBooks.filter((book) => book.shelf === 'currentlyReading');
    const wantToRead = getBooks.filter(book => book.shelf === 'wantToRead');
    const read = getBooks.filter(book => book.shelf === 'read');
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
         <div>
          <SingleShelf
            books = {currentlyReading} //filtered books according to shelve title
            shelfName = {'Currently Reading'} //shelf title
            shelfUpdate={this.props.shelfUpdate} // Updates individual shelves
          />
          <SingleShelf
            books = {wantToRead}
            shelfName = {'Want To Read'}
            shelfUpdate={this.props.shelfUpdate}
          />
          <SingleShelf
            books = {read}
            shelfName = {'Read'}
            shelfUpdate={this.props.shelfUpdate}
          />
         </div>
        </div>
      </div>
    );
  }
}
export default MyShelf