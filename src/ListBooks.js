import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

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