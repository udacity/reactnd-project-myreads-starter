/**
 * Created by jansplichal on 03/08/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookGrid from './BookGrid';
import * as BooksAPI from '../BooksAPI';
import _ from 'lodash';

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    componentDidMount() {
        this.findBooks('');
    }

    findBooks(query) {
        Promise.all([BooksAPI.search(query, 20), BooksAPI.getAll()])
            .then(([searchBooks, shelfBooks]) => {
                const shelves = _.mapKeys(shelfBooks, 'id');
                //console.log(shelves);
                let mergedBooks = searchBooks.map((book) => {
                    const shelf = shelves[book.id] ? shelves[book.id]["shelf"] : "none";
                    book.shelf = shelf;
                    return book;
                });
                this.setState({books: mergedBooks});
            }).catch((err) => {
            this.setState({books: []});
        });
    }

    updateQuery(query) {
        const trimmedQuery = query.trim();
        this.setState({query: trimmedQuery});
        this.findBooks(trimmedQuery);
    }

    handleOnShelfChange(bookId, shelf) {
        BooksAPI.update({id: bookId}, shelf).then((book) => {
            this.setState((prevState) => {
                return prevState.books.map(book => {
                    if (book.id === bookId) {
                        book.shelf = shelf;
                    }
                    return book;
                });
            });
        });
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query}
                               onChange={(evt) => this.updateQuery(evt.target.value)}
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid onShelfChange={this.handleOnShelfChange.bind(this)} books={this.state.books}/>
                </div>
            </div>
        );
    }
}

export default Search;