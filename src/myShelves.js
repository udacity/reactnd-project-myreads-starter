import React, { Component } from 'react'
import SingleShelf from './singleShelf'
import PropTypes from 'prop-types'

class MyShelf extends Component {
  static propTypes ={
    books: PropTypes.array.isRequired
  }

  render(){
    const { getBooks } = this.props
    const currentlyReading = getBooks.filter((book) => book.shelf === 'currentyReading');
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
            books = {currentlyReading}
            shelfName = {'Currently Reading'}
          />
          <SingleShelf
            books = {wantToRead}
            shelfName = {'Want To Read'}
          />
          <SingleShelf
            books = {read}
            shelfName = {'Read'}
          />
         </div>
        </div>
      </div>
    );
  }
}
export default MyShelf