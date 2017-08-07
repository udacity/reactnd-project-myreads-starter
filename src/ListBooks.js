import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

/* boos need imageUrl title author shelf*/

function Book(props) {
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageURL})` }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{props.title}</div>
                <div className="book-authors">{props.author}</div>
            </div>
        </li>
    )
}
/* ListBooks need books*/
class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.map((book) => (
                            (book.shelf === 'currentlyReading') && (
                                <Book
                                    key={book.id}
                                    imageURL={book.imageLinks.thumbnail}
                                    author={book.authors[0]}
                                    title={book.title}
                                />
                            )
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.map((book) => (
                            (book.shelf === 'wantToRead') && (
                                <Book
                                    key={book.id}
                                    imageURL={book.imageLinks.thumbnail}
                                    author={book.authors[0]}
                                    title={book.title}
                                />
                            )
                        ))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.props.books.map((book) => (
                            (book.shelf === 'read') && (
                                <Book
                                    key={book.id}
                                    imageURL={book.imageLinks.thumbnail}
                                    author={book.authors[0]}
                                    title={book.title}
                                />
                            )
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )
    }
}

export default ListBooks