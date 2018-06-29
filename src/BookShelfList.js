import React,{Component} from 'react'
import BookShelf from './BookShelf';

class BookShelfList extends Component {    
    state = {
        shelfs:[]        
    }

    render() {
        return(
          <div>
          <div className="list-books-title">
            <h1>MyReads</h1>  
          </div>        
          <div className="list-books-content">   
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <BookShelf books={this.props.books.filter((book) => book.shelf === 'currentlyReading')}
                            shelfList = {this.props.books.map(book => book.shelf) } />
              </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <BookShelf books={this.props.books.filter((book) => book.shelf === 'wantToRead')}
                             shelfList = {this.props.books.map(book => book.shelf) } />
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <BookShelf books={this.props.books.filter((book) => book.shelf === 'read')} 
                             shelfList = {this.props.books.map(book => book.shelf) }/>
                </div>
              </div>
          </div>     
          </div>
                           
    )
    }
}

export default BookShelfList