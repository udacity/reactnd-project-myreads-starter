import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
};

state = {
  searchResults: [],
}

searchBooks = (event) => {
  this.props.searchBooks(event.target.value)
};

  render() {

    
    return (
    <div className="search-page-wrapper">
      <div className="columns">
        <div className="column is-full is-offset-one-quarter field search-field">
          <label class="label">Search for Books</label>
          <div className="control">
            <input
              type="text"
              placeholder="Title or Author"                         
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
              <div className="columns is-multiline">                           
                {this.books.map((book) => (                  
                  <BookCard
                    key={book.id}
                    book={book}                                                                               
                  />                 
                ))}
                
              </div>            

          </div>
          </div>
    );
  }
}
export default SearchBooks