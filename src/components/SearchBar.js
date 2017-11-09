import React, {Component} from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from '../BooksAPI';
import {Link} from 'react-router-dom';


/**
 * Component for book searching input field
 */
class SearchBar extends Component {

    state = {
        query: '',
        books: []
    };

    //on initial load, add all books from API to state.books
    componentDidMount() {
        BooksAPI.getAll().then((books) =>
            this.setState({ books }))
    }


    updateQuery = (query) => {
        this.setState({query: query.trim()});

        //if user updates query, do a search with query and max returned results.
        if(query) {
            BooksAPI.search(query, 20).then((books) => {
                //only change state if books are actually found
                if(books.length > 0) {
                    this.setState({books})
                }
            })
        } else {
            // If input string is empty, show no books
            this.setState({books: []})
        }
    };

    render() {
        //get array from state
        const showingBooks = this.state.books;

        return(

            <div className="search-books">
                <div className="search-books-bar">

                    <Link
                        to="/"
                        className="close-search"
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        {

                        }
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail}` }}>
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
                                </div>
                                <div className="book-title">{`${book.title}`}</div>
                                <div className="book-authors">{`${book.authors}`}</div>
                            </div>
                        </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBar;