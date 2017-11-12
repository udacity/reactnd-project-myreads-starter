import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';

class Bookshelf extends Component {

    state= {
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    changeShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.refreshBookList();
    };

     refreshBookList = () => {
        BooksAPI.getAll().then((books) => {

            const currentlyReading = books.filter((book) => {
                return book.shelf === "currentlyReading";
            });

            const wantToRead = books.filter((book) => {
                return book.shelf === "wantToRead";
            });

            const read = books.filter((book) => {
                return book.shelf === "read";
            });

            this.setState({currentlyReading});
            this.setState({wantToRead});
            this.setState({read});
        });
    };


    //on initial load, add all books from API and filter them to their respective shelf
    componentDidMount() {
        this.refreshBookList();
    }

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
                                    {this.state.currentlyReading.map((book) => (
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
                                    {this.state.wantToRead.map((book) => (
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
                                    {this.state.read.map((book) => (
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