import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class Bookshelf extends Component {


    //<select onChange={(e) => this.handleChange(e, book)}>


    state= {
        books: []
    };

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
    };

    //on initial load, add all books from API to state.books
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    render() {

        let currentlyReading = this.state.books.filter(function (book) {
            return book.shelf === "currentlyReading";
        });

        let wantToRead = this.state.books.filter(function (book) {
            return book.shelf === "wantToRead";
        });

        let read = this.state.books.filter(function (book) {
            return book.shelf === "read";
        });

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
                                    {currentlyReading.map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail}` }}>
                                                        <div className="book-shelf-changer">
                                                            <select value={book.shelf} onChange={(event) => this.changeShelf(book, event.target.value)}>
                                                                <option value="none" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="book-title">{`${book.title}`}</div>
                                                <div className="book-authors">{`${book.authors}`}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail}` }}>
                                                        <div className="book-shelf-changer">
                                                            <select value={book.shelf} onChange={(event) => this.changeShelf(book, event.target.value)}>
                                                                <option value="none" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="book-title">{`${book.title}`}</div>
                                                <div className="book-authors">{`${book.authors}`}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map((book) => (
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail}` }}>
                                                        <div className="book-shelf-changer">
                                                            <select value={book.shelf} onChange={(event) => this.changeShelf(book, event.target.value)}>
                                                                <option value="none" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="book-title">{`${book.title}`}</div>
                                                <div className="book-authors">{`${book.authors}`}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <Link
                to="/search"
                className="open-search"
                >Find a book</Link>
            </div>
        )
    }
}

export default Bookshelf;