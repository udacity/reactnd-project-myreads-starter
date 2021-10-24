import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import { Book } from './Book';

class SearchEngine extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        const { matchedBooks } = this.props;
        this.setState( { query: query });

        BooksAPI.search(query).then((books) => {
            for (let book of books) {
                for (let matchedBook of matchedBooks) {
                    if (book.id === matchedBook.id) {
                        book.shelf = matchedBook.shelf;
                    }
                }
            }
            this.setState( { books });
        });
    }

    render() {
        const { onBookMoved } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <Book
                        books={this.state.books}
                        onBookMoved={onBookMoved}/>
                </div>
            </div>
        );
    }
}

export default SearchEngine;