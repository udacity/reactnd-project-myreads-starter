/**
 * Created by jansplichal on 03/08/2017.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import  Bookshelf  from './Bookshelf';

class BookList extends Component {

    filterByShelf(books, shelf) {
        return books.filter(book => {
            return book.shelf === shelf;
        });
    }

    render() {
        const {books} = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title="Currently Reading"
                                   books={this.filterByShelf(books, 'currentlyReading')}/>
                        <Bookshelf title="Want to Read"
                                   books={this.filterByShelf(books, 'wantToRead')}/>
                        <Bookshelf title="Read"
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

