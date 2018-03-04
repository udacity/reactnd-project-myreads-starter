import React, {Component} from "react";
import {Rate} from "antd";

class Read extends Component {

    render() {

        const {books} = this.props;
        let read;
        read = books.filter((c) => c.shelf === 'read');

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {read.map((book) => (
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
                                    <div className="book-authors">{book.authors[0]} && {book.authors[1]}</div>
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

export default Read;