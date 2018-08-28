import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class SearchBooks extends Component {

    handleClick(book, shelf){
        this.props.onUpdateShelfOnSearch(book, shelf)
    }

    clearQuery(){
        this.props.query = ''
    }

    render() {
        const { books, searchBooks, query } = this.props

        if (searchBooks instanceof Array) {
            for (let searchedBook of searchBooks) {
                for (let book of books) {
                    if (book.id === searchedBook.id) {
                        searchedBook.shelf = book.shelf
                    };
                };
            }
        }

        let searchBooksItem = []
        if (searchBooks.length > 0) {
            searchBooksItem = (searchBooks || []).map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks ? book.imageLinks.smallThumbnail : ""}")` }}></div>
                            <div className="book-shelf-changer">
                                <select value={book.shelf ? book.shelf : "none"} onChange={(e) => this.handleClick(book, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
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
                </li>
            ))
        } else {
            searchBooksItem = <div className="book-title">No Items was found</div>
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" onClick={this.clearQuery}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.props.query} onChange={(e) => this.props.updateQuery(e.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {query !== '' ? searchBooksItem : ''}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks