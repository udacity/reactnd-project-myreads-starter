import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book';

class ListBooks extends Component {

    render() {
        const { books, onBookMoved } = this.props;
        let currentlyReading, wantToRead, alreadyRead;

        if (books !== 'undefined') {
            currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
            wantToRead = books.filter((book) => book.shelf === "wantToRead");
            alreadyRead = books.filter((book) => book.shelf === "alreadyRead");
        }

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <Book
                                books={currentlyReading}
                                onBookMoved={onBookMoved}/>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <Book
                                books={wantToRead}
                                onBookMoved={onBookMoved}/>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <Book
                                books={alreadyRead}
                                onBookMoved={onBookMoved}/>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;