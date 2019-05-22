import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';


class ShelfTab extends Component {

    handleShelfChanged = (book, shelfId) => {
        if (shelfId !== this.props.shelf.id) {
            this.props.onShelfChanged(book, shelfId);
        }
    }

    render() {
        const { books, shelf, isLoaded } = this.props;
        return (
            <div className="bookshelf">
                {!isLoaded && <label>Loading content</label>}
                {(isLoaded && books.length <= 0) && <label>No book available</label>}
                {
                    books.length > 0 &&
                    <div>
                        <h2 className="bookshelf-title">{shelf.label}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books.map(book => (
                                    <BookCard
                                        key={"book_" + book.id} book={book}
                                        onShelfChanged={this.handleShelfChanged}
                                    />
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
    isLoaded: PropTypes.bool,
    onShelfChanged: PropTypes.func.isRequired
}

export default ShelfTab;