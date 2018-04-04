import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        bookDetails: PropTypes.object.isRequired,
    };
    render() {
        const { bookDetails } = this.props;
        return bookDetails.length !== 0 ? (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${bookDetails.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                    <select>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{bookDetails.title}</div>
                <div className="book-authors">{bookDetails.authors ? bookDetails.authors.map((author)=>(<span key={author}>{author}<br/></span>)) : (<div></div>)}</div>
            </div>
        ) : (
            <div className="book"></div>
        );
    }
}

export default Book;