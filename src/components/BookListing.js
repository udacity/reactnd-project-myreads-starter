import React from 'react';
import BookOptions from './BookOptions';

const BookListing = (props) => {
    return (
        props.books.map((book, index) =>
            <li key={index}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                        <div className="book-shelf-changer">
                            <BookOptions />
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    )
}

export default BookListing;