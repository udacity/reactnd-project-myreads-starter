/**
 * Created by jansplichal on 03/08/2017.
 */

import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookGrid extends Component {
    render() {
        const { books } = this.props;

        return (
            <ol className="books-grid">
                { books.map(book => (
                    <li key={book.id}>
                        <Book shelf={book.shelf} authors={book.authors} title={book.title}
                              thumbnail={book.imageLinks.thumbnail}/>
                    </li>
                ))}

            </ol>
        );
    }
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired
};

export default BookGrid;
