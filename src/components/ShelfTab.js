import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';


class ShelfTab extends Component {

    render() {
        const { books, shelf, isLoaded } = this.props;
        return (
            <div className="bookshelf">
                {!isLoaded && <p>Loading content</p>}
                {(isLoaded && books.length <= 0) && <p>No book available</p>}
                {
                    books.length > 0 &&
                    <div>
                        <h2 className="bookshelf-title">{shelf.label}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map(book => (
                                    <BookCard key={"book_" + book.id} book={book} />
                                ))}
                            </ol>
                        </div>
                    </div>

                }
            </div >
        );
    }
}

ShelfTab.propTypes = {
    books: PropTypes.array.isRequired,
    shelf: PropTypes.object.isRequired,
    isLoaded: PropTypes.bool
}
export default ShelfTab;