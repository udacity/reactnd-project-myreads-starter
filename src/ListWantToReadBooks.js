import React, {Component} from 'react';
import * as BooksAPI from "./BooksAPI";

class ListWantToReadBooks extends Component{
    //TODO: Replace select tag default value with component state value

    render() {
        return (
            <div>
                <ol>
                    <div className="list-books-content">
                        <div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Currently Reading</h2>
                                {this.props.wantToReadBooks.map((book) =>
                                    <li key={book.title}>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                <li>
                                                    <div className="book">
                                                        <div className="book-top">
                                                            {book.imageLinks && book.authors[0] && (
                                                                <div className="book-cover" style={{
                                                                    width: 128,
                                                                    height: 193,
                                                                    backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                                }}/>
                                                            )}
                                                            <div className="book-shelf-changer">
                                                                <select value={book.shelf === undefined ? "none" : book.shelf}
                                                                        onChange={(event) => this.props.updateBookShelf(event, book)}>
                                                                    <option value="notAssigned" disabled>Move to...</option>
                                                                    <option value="currentlyReading">Currently Reading
                                                                    </option>
                                                                    <option value="wantToRead">Want to Read</option>
                                                                    <option value="read">Read</option>
                                                                    <option value="none">None</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="book-title">{book.title}</div>
                                                        <div className="book-authors">{book.authors[0]}</div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </li>
                                )}
                            </div>
                        </div>
                    </div>
                </ol>
            </div>
        )
    }
}

export default ListWantToReadBooks;