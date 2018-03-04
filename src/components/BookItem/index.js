import React, {Component} from "react";
import PropTypes from 'prop-types';

class BookItem extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.array.isRequired
    };


    render() {
        const {book} = this.state;
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}></div>
                        <div className="book-shelf-changer">
                            <select>
                                <option value="none" disabled>Move to...</option>
                                <option selected={book.shelf === 'currentlyReading'} value="currentlyReading">Currently Reading</option>
                                <option selected={book.shelf === 'wantToRead'} value="wantToRead">Want to Read</option>
                                <option selected={book.shelf === 'read'} value="read">Read</option>
                                <option selected={book.shelf === ''} value="none">None</option>
                            </select>
                        </div>
                    </div>

                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }
}

export default BookItem;