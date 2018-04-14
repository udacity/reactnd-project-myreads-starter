import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class BookShelf extends React.Component {
    constructor(props) {
        super(props);
    }

    switchBookShelf(event) {

    }    

    render() {
        const books = this.props.books;
        return (
                    <ol className="books-grid">
                      {
                        books.map((book) => {
                            return (
                                <li key={book.id}>
                                    <div className="book">
                                      <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks.smallThumbnail }}></div>
                                            <div className="book-shelf-changer">
                                              <select onChange={(e) => this.props.switchBookShelf(book, e)}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                              </select>
                                            </div>        
                                      </div>
                                      <div className="book-title">{book.title}</div>
                                      <div className="book-authors">{book.authors}</div>
                                    </div>
                                </li>
                                )
                            })
                      }
                    </ol>
        )
    }
}

export default BookShelf