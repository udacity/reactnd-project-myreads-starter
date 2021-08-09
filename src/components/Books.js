import React from 'react';
import noBookImage from '../imgs/1200px-No-Image-Placeholder.png';
import BookShelfOptions from './BooksShelfOptions';

const Books = (props) => {
    return (
        // <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                    style={{
                        width: 128, height: 188,
                        backgroundImage: `url("${props.book.imageLinks ? props.book.imageLinks.thumbnail : noBookImage}")`
                    }}></div>
                <div className="book-shelf-changer">
                    <BookShelfOptions
                        book={props.book}
                        books={props.books}
                        onShelfOptionChange={props.onShelfOptionChange} />
                </div>
            </div>
            <div className="book-title">{props.book.title ? props.book.title : 'No Title found'}</div>
            <div className="book-authors">{props.book.authors ? props.book.authors : 'No Author found'}</div>
        </div>
        // </li>
    )

}

export default Books;