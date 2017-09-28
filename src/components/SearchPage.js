import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import {search} from "../BooksAPI";
import {Link} from 'react-router-dom';
import {SHELVES} from '../utils/Enuns';
import _ from 'underscore';

class SearchPage extends Component {

    static propTypes = {
        shelves: PropTypes.object.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    };

    state = {
        books: [],
        query: ''
    };

    onChangeQuery = (query) => {
        this.setState({query});
        search(query, 14).then((books = []) => {
            if (books.error)
                books = [];

            const shelvesBooks = [
                ...this.props.shelves[SHELVES.CURRENTLYREADING],
                ...this.props.shelves[SHELVES.WANTTOREAD],
                ...this.props.shelves[SHELVES.READ]];
            shelvesBooks.forEach((sbook) => {
                const aBook = _.find(books, (book) => book.id === sbook.id);
                if (aBook) {
                    aBook.shelf = sbook.shelf;
                }
            });
            this.setState({books});
        }, (error) => {
            console.error(error);
        });
    };

    render() {
        const {books, query} = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                               value={query} onChange={(evt) => this.onChangeQuery(evt.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <Book book={book}
                                      onChangeShelf={(aBook, shelf) => this.props.onChangeShelf(aBook, shelf)}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchPage;