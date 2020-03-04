import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class Main extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }
    render() {

        const { books, onUpdateShelf } = this.props

        const currentlyReading = books.filter((book) => (
            book.shelf === "currentlyReading"
        ))
        const wantToRead = books.filter((book) => (
            book.shelf === "wantToRead"
        ))
        const read = books.filter((book) => (
            book.shelf === "read"
        ))

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            { currentlyReading.length > 0 &&
                            //Display only if there are books on the "currentlyReading" shelf
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    { currentlyReading.map((book) => (
                                        <Book
                                            key = {book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                        ))} 
                                    </ol>
                                </div>
                            </div>
                            }
                           
                            { wantToRead.length > 0 &&
                            //Display only if there are books on the "wantToRead" shelf
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    { wantToRead.map((book) => (
                                        <Book
                                            key = {book.id}
                                            book={book}
                                            onUpdateShelf={onUpdateShelf}
                                        />
                                        ))} 
                                    </ol>
                                </div>
                            </div>
                            }

                            { wantToRead.length > 0 &&
                            //Display only if there are books on the "wantToRead" shelf
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                    { read.map((book) => (
                                        <Book
                                            key = {book.id}
                                            book = {book}
                                            onUpdateShelf = {onUpdateShelf}
                                        />
                                    ))} 
                                    </ol>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="open-search">
                        <Link 
                            to = "/search">
                            Add a book
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Main