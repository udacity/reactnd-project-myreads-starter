import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from '../BooksAPI'



/**
 * Component for book searching input field
 */
class SearchBar extends Component {

    state = {
        query: '',
        books: []
    };

    componentDidMount() {
        //on initial load, add all books from API to state.books
        BooksAPI.getAll().then((books) =>
            this.setState({ books }))
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };

    render() {
        //get array from state
        const showingBooks = this.state.books;

        return(

            <div className="search-books">
                <div className="search-books-bar">

                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
                        {showingBooks.map((books) => (
                        <li key={books.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${books.imageLinks.smallThumbnail}` }}>
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
                                <div className="book-title">To Kill a Mockingbird</div>
                                <div className="book-authors">Harper Lee</div>
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