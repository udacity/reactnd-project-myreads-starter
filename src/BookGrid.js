import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookGrid extends Component {
    static propTypes = {
        books: PropTypes.array || PropTypes.object,
    };
    render() {
        const { books } = this.props;
        return (
            <ol className="books-grid">
                {Array.isArray(books) ? books.map((book)=>(
                    <li key={book.infoLink}>
                        <Book bookDetails={book} />
                    </li>
                )): (<li></li>)}
            </ol>
        );
    }
}

export default BookGrid;