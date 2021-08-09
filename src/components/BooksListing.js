import React from 'react';
import BooksShelf from './BooksShelf';
import PropTypes from 'prop-types';

const BookListing = (props) => {
    const bookShelfCategory = [
        {
            category: 'currentlyReading',
            title: 'Currently Reading'
        },
        {
            category: 'wantToRead',
            title: 'Want to Read'
        },
        {
            category: 'read',
            title: 'Read'
        }
    ];

    const { books, onShelfOptionChange } = props;

    return (
        <div className="list-books-content">
            {
                bookShelfCategory.map((category, index) => {
                    const booksOnShelf = books.filter((book) => book.shelf === category.type);
                    return (
                        <div className="bookshelf" key={index}>
                            <h2 className="bookshelf-title">{category.title}</h2>
                            <div className="bookshelf-books">
                                <BooksShelf
                                    books={booksOnShelf}
                                    onShelfOptionChange={onShelfOptionChange}
                                    key={index}
                                />
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default BookListing;