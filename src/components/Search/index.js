import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Rate} from "antd";
import * as BooksAPI from '../../BooksAPI'
import escapeRegExp from 'escape-string-regexp';
import PropTypes from "prop-types";

class Search extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    };

    state = {
        query: ''
    };

    getShelf(book) {
        const myBookIds = this.state.books.map(myBook => myBook.id)
        if (myBookIds.indexOf(book.id) === -1) {
            return ''
        } else {
            return this.state.books[myBookIds.indexOf(book.id)].shelf
        }
    }

    handleSearch = (event) => {
        const query = event.target.value
        BooksAPI.search(query).then(books => {
            this.setState({
                books: books.map(book => {
                    console.log(book);
                    return {
                        ...book,
                        shelf: this.getShelf(book)
                    }
                }),
                searchField: query
            })
        })
    };

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               onChange={this.handleSearch}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.books.map((book) => (
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
                </div>
            </div>
        )
    }
}

export default Search;