/**
 * Created by jansplichal on 03/08/2017.
 */
import React, {Component} from 'react';
import ShelfChanger from './ShelfChanger';
import PropTypes from 'prop-types';

class Book extends Component {
    render() {
        const {title, authors, thumbnail, shelf, bookId, onShelfChange} = this.props;
        const imageUrl = `url("${thumbnail}")`;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{width: 128, height: 193, backgroundImage: imageUrl}}>
                    </div>
                    <ShelfChanger bookId={bookId} shelf={shelf} onShelfChange={onShelfChange}/>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(", ")}</div>
            </div>
        );
    }
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    bookId: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    thumbnail: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired,
    shelf: PropTypes.oneOf(['currentlyReading', 'wantToRead', 'read', 'none']).isRequired
};

export default Book;