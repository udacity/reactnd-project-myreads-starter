import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookGrid from './BookGrid';

class BookShelf extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
    };
    render() {
        const {title, books} = this.props;
        return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookGrid books={books}/>
            </div>
        </div>);
    }
}

export default BookShelf;