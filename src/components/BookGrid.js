/**
 * Created by jansplichal on 03/08/2017.
 */
import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class BookGrid extends Component {
    render() {
        const {books, onShelfChange} = this.props;
        //console.log(books);
        return (
            <ol className="books-grid">
                { books.map(book => (
                    <li key={book.id}>
                        <Book onShelfChange={onShelfChange} bookId={book.id}
                              shelf={book.shelf} authors={book.authors} title={book.title}
                              thumbnail={book.imageLinks.thumbnail}/>
                    </li>
                ))}

            </ol>
        );
    }
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
};

export default BookGrid;
