import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { searchBookRecords } from '../utilities';
import BooksListing from './BooksListing';

class SearchDashboard extends React.Component {
  state = {
    query: '',
    searchResults: []
  };

  updateSearchResults = (results = []) => {
    this.setState({ searchResults: results });
  };

  handleInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query });
    this.fetchSearchResults(query);
  };

  updateBookShelf = (books) => {
    return books.map((book) => {
      return {
        ...book,
        ...this.props.books.find((b) => b.id === book.id)
      };
    });
  };

  fetchSearchResults = (query) => {
    searchBookRecords(query)
      .then((response) => {
        if (response.error) {
          this.updateSearchResults();
        } else {
          this.updateSearchResults(this.updateBookShelf(response));
        }
      })
      .catch((error) => {
        setTimeout(() => {
          this.updateSearchResults([]);
        }, 400);
      });
  };

  render() {
    const { handleShelfUpdate } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
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
            {this.state.searchResults.length > 0 && (
              <BooksListing
                books={this.state.searchResults}
                handleShelfUpdate={handleShelfUpdate}
              />
            )}
          </ol>
        </div>
      </div>
    );
  }
}

SearchDashboard.propTypes = {
  handleShelfUpdate: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default SearchDashboard;
