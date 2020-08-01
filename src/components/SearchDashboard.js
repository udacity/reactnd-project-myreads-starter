import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import * as BooksAPI from '../BooksAPI'
import BooksListing from './BooksListing';

class SearchDashboard extends React.Component {
    state = {
        query: '',
        searchResults: []
    };

    updateSearchResults = (results=[]) => {
        this.setState({searchResults: results})
    };

    handleInputChange = (event) => {
        const query = event.target.value;
        this.setState({query: query});
        if (query === '') {
            this.updateSearchResults();
        } else {
            this.fetchSearchResults(query);
        }
    };

    updateBookShelf = (books) => {
        return books.map((book) => {
            const ShelfItem = this.props.books.find((b) => b.id === book.id);
            return ({
                ...book,
                ...ShelfItem
            })
        })
    };

    fetchSearchResults = (query) => {
        BooksAPI.search(query)
            .then((response) => {
                if (response.error) {
                    this.updateSearchResults()
                } else {
                    this.updateSearchResults(this.updateBookShelf(response));
                }
            })
    };

    render() {
        const {handleShelfUpdate} = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by Title or Author"
                            onChange={this.handleInputChange}
                            value={this.state.query}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BooksListing books={this.state.searchResults} handleShelfUpdate={handleShelfUpdate} />
                    </ol>
                </div>
            </div>
        )
    }
}

SearchDashboard.propTypes = {
    handleShelfUpdate: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
};

export default SearchDashboard
