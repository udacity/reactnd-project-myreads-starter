import React from 'react'
import { PropTypes } from 'prop-types';

const Book = props => {
    
    const { book, move } = props;
    const onChange = (event) => {
        //call move func with book and shelf
        move(props.book, event.target.value)
    };

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={onChange}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(' & ')}</div>
            </div>
        </li>
    )
};

//proptypes book,move from homeShelves
Book.prototypes = {
    book: PropTypes.array.isRequired,
    move: PropTypes.func.isRequired
};
export default Book;
