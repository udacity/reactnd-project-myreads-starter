/**
 * Created by jansplichal on 03/08/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import * as BooksAPI from '../BooksAPI';

class BookList extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({books});
        });
    }

    filterByShelf(books, shelf) {
        return books.filter(book => {
            return book.shelf === shelf;
        });
    }

    handleOnShelfChange(bookId, shelf) {
        //console.log('Moving ' + bookId + ' to ' + shelf);
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
        const {books} = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf onShelfChange={this.handleOnShelfChange.bind(this)}
                                   title="Currently Reading"
                                   books={this.filterByShelf(books, 'currentlyReading')}/>
                        <Bookshelf onShelfChange={this.handleOnShelfChange.bind(this)}
                                   title="Want to Read"
                                   books={this.filterByShelf(books, 'wantToRead')}/>
                        <Bookshelf onShelfChange={this.handleOnShelfChange.bind(this)}
                                   title="Read"
                                   books={this.filterByShelf(books, 'read')}/>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;

