import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Book from './Book';
import { PropTypes } from 'prop-types';

class Search extends Component {

  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }))
    this.props.searchForBooks(this.state.query)
  };
  
  render() {    
    const { query } = this.state;
    const { searchBooks, books } = this.props;
    
    //book is assigned to a shelf on the main page, the correct shelf should be selected on the search page
    books.forEach(book => {
      const getID = searchBooks.findIndex(sb => sb.id === book.id)
      if (searchBooks[getID]) {
        searchBooks[getID].shelf = book.shelf
      }
    });
      return (
        <div >                  
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to ='/'>Close</Link>
              <div className="search-books-input-wrapper">                          
                <input 
                  type="text" 
                  placeholder="Search by title or author"
                 
                  value={query}
                  onChange={event => this.updateQuery(event.target.value)}                        
                 />      
            </div>
          </div>
          <div className="search-books-results">
           <ul className="books-grid">                 
            {query === '' ? (<p>Please, Start Your Journey</p>) 
              : searchBooks.length !== 0 ? searchBooks.map(book => (
                <Book
                  key={book.id}
                  book={book}
                  move={this.props.move}
                />
              )):(<p>Result Not Found</p>) 
            }                           
            </ul>
          </div>
          </div>                                      
        </div>  
        );
    }
};

Search.prototypes = {
  searchForBooks: PropTypes.func.isRequired,
  move:PropTypes.func.isRequired,
  searchBooks:PropTypes.array.isRequired,
  books:PropTypes.array.isRequired
};
export default Search;
