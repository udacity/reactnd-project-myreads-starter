import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class SearchBooks extends React.Component {

  state = {
    searchResults: [],
    searchValue: ''
  }

  searchBooks = (e) => {
    this.setState({searchValue: e.target.value});
    if (e.target.value.length < 1) {
      this.setState({searchResults: []});
    }
    BooksAPI.search(e.target.value, 10).then((books) => {
      if (books && books.error === undefined) {
        this.setState({searchResults: books});
      } else {
        console.log('error throw')
        this.setState({searchResults: []});
      }
    });
  }


  render() {

    const { searchResults } = this.state;

    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">

              <input type="text" placeholder="Search by title or author"
                     value={this.state.searchValue}
                     onChange={this.searchBooks} />

            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {searchResults.map((book) => (
                <li key={book.id}>
                  <Book book={book} changeBookShelf={this.props.onSelectShelf} />
                </li>
              ))}
            </ol>
          </div>
        </div>
    );
  }
}

export default SearchBooks;