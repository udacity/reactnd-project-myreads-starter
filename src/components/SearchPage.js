import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';
import Books from './Books';

class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    switchShelfOption: PropTypes.func.isRequired
  };

  state = {
    searchWord: '',
    booksFound: [],
    isSearchError: false
  };

  getBooks = event => {
    const searchWord = event.target.value;
    this.setState({ searchWord: searchWord });

    if (searchWord) {
      BooksAPI.search(searchWord.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ 
            booksFound: books, 
            isSearchError: false 
          })
          : this.setState({ 
            booksFound: [], 
            isSearchError: true 
          });
      });

    } else this.setState({ booksFound: [], isSearchError: false });
  };

  render() {
    const { searchWord, booksFound, isSearchError } = this.state;
    const { books, switchShelfOption } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={searchWord}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {booksFound.length > 0 && (
            <div>
              <h3 style={{color: 'blue'}}>A total of <span style={{color: 'red'}}>{booksFound.length}</span> books found! </h3>
              <ol className="books-grid">
                {booksFound.map(book => (
                  <Books
                    book={book}
                    books={books}
                    key={book.id}
                    switchShelfOption={switchShelfOption}
                  />
                ))}
              </ol>
            </div>
          )}
          { isSearchError ? 
            <h3 style={{color: 'red'}}>No results found for your search book <span style={{color: 'blue'}}>{searchWord.toUpperCase()}</span></h3>
            : null
          }
        </div>
      </div>
    );
  }
}
export default SearchPage;
