import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

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
                                        <li key = {book.id} >
                                            <div className="book">
                                                <div className="book-top">
                                                    {
                                                        book.imageLinks !== undefined ?
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
                                                        : <div className="book-cover" style={{ width: 128, height: 193, background: 'gray' }}></div>
                                                    }                                                    
                                                    <div className="book-shelf-changer">
                                                        <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={book.shelf}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">
                                                {
                                                    book.authors !== undefined && 
                                                    book.authors.map((author, i) => (
                                                        book.authors.length - 1  !== i ? author + ", " : author 
                                                    ))
                                                }
                                                </div>
                                            </div>
                                        </li>
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
                                        <li key = {book.id} >
                                            <div className="book">
                                                <div className="book-top">
                                                    {
                                                        book.imageLinks !== undefined ?
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
                                                        : <div className="book-cover" style={{ width: 128, height: 193, background: 'gray' }}></div>
                                                    } 
                                                    <div className="book-shelf-changer">
                                                        <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={book.shelf}>
                                                            <option value="move" disabled>Move to...</option>
                                                            <option value="currentlyReading">Currently Reading</option>
                                                            <option value="wantToRead">Want to Read</option>
                                                            <option value="read">Read</option>
                                                            <option value="none">None</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">
                                                {
                                                    book.authors !== undefined && 
                                                    book.authors.map((author, i) => (
                                                        book.authors.length - 1  !== i ? author + ", " : author 
                                                    ))
                                                }
                                                </div>
                                            </div>
                                        </li>
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
                                        <li key = {book.id} >
                                            <div className="book">
                                                <div className="book-top">
                                                    {
                                                        book.imageLinks !== undefined ?
                                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
                                                        : <div className="book-cover" style={{ width: 128, height: 193, background: 'gray' }}></div>
                                                    } 
                                                    <div className="book-shelf-changer">
                                                    <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={book.shelf}>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">
                                                {
                                                    book.authors !== undefined && 
                                                    book.authors.map((author, i) => (
                                                        book.authors.length - 1  !== i ? author + ", " : author 
                                                    ))
                                                }
                                                </div>
                                            </div>
                                        </li>
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