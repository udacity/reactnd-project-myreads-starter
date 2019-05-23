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
            <div>
                {!isLoaded && <label>Loading content</label>}
                {(isLoaded && books.length <= 0) && <label>No book available</label>}
                {
                    books.length > 0 &&
                    <div>
                        <h2>{shelf.label}</h2>
                        {books.map(book => (
                            <BookCard
                                key={"book_" + book.id} book={book}
                                onShelfChanged={this.handleShelfChanged}
                            />
                        ))}
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