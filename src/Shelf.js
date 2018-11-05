import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Shelf extends Component {
    render() {
        const { title, books } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ title }</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map(book => (
                            <li key={book.title}>
                                <div className="book">
                                    <div className="book-cover"
                                         style={{
                                             width: 128,
                                             height: 193,
                                             backgroundImage: `url(${book.url})` }}>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.author}</div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array
};

export default Shelf;