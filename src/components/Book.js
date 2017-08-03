/**
 * Created by jansplichal on 03/08/2017.
 */


import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

class Book extends Component {
    render(){
        const { title, authors, thumbnail, shelf } = this.props;
        const imageUrl = `url("${thumbnail}")`;

        return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: imageUrl }}>
                </div>
                <ShelfChanger shelf={shelf}/>
              </div>
              <div className="book-title">{title}</div>
              <div className="book-authors">{authors.join(", ")}</div>
            </div>
        );
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    thumbnail: PropTypes.string.isRequired,
    shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none']).isRequired
};

export default Book;