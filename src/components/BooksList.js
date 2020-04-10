import React, { Component } from 'react'
import { PropTypes  }  from 'prop-types'
import formatShelf from '../helpers/formatShelf.js'

export default class BooksList extends Component {
    static propTypes = {
        books: PropTypes.object.isRequired,
    };

    render() {
        const { books } = this.props;
        console.log(books);

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads : {new Date().getFullYear()}</h1>
                </div>
                <div className="list-books-content">
                    {Object.keys(books).map(shelf =>
                        <div key={shelf} className="bookshelf">
                            <h2 className="bookshelf-title">{formatShelf(shelf)}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books[shelf].map((book) =>
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className='book-cover'
                                                         style={{backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                                                    >
                                                    </div>
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
                                                <div className="book-authors">{book.authors[0]}</div>
                                            </div>
                                        </li>
                                    )}
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
