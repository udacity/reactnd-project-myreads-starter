import React, {Component} from "react";
import PropTypes from "prop-types";
import {Rate} from "antd";

class WantToRead extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };


    render() {
        const {books} = this.props;
        let wantToRead;
        wantToRead = books.filter((c) => c.shelf === 'wantToRead');

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToRead.map((book) => (
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
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                                <Rate disabled defaultValue={book.averageRating}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default WantToRead;
