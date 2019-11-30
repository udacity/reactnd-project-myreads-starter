import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired,
    searchResults: PropTypes.array.isRequired,
   };

  constructor(props){
  super(props);
    this.state = {
      searchErr: false,
      searchResults: [],
      query: '',    
      };
  }

  searchBooks = event => {
    const query = event.target.value;
    this.setState({ query });
    
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ searchResults: books, searchErr: false })
          : this.setState({ searchResults: [], searchErr: true });
      });
      
    } else this.setState({ searchResults: [], searchErr: false });
  };

  render() {

    const { changeShelf, books } = this.props;
    const { query, searchResults, searchErr } = this.state;
    
    return (
    <div className="search-page-wrapper">
      <div className="columns">
        <div className="column is-full is-offset-one-quarter field search-field">
          <label class="label">Search for Books</label>
          <div className="control">
            <input
              type="text"
              placeholder="Title or Author"
              value={query}             
              onChange={this.searchBooks}
              className="book-search-input"
            />
            <Link to="/"><div className="close-search"></div></Link>
            </div>
            </div>
            </div>      
          <h2 className="search-results-title"> Search Results: </h2> 
          <hr />
          <div className="container">               
            {searchResults.length > 0 && (
              <div>
              <h3>Search returned {searchResults.length} books </h3>
              
              {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>            
          )}   
          </div>              
          )}
              <div className="columns is-multiline">
                {searchResults.map(book => (
                  <BookCard
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </div>            

          </div>
          </div>
    );
  }
}
export default SearchBooks