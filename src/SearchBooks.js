import React, { Component } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';


class SearchBooks extends Component {
static defaultProps = {
  resultBooks: [],
}
  
state = {
query: '',
resultBooks: [],

};

componentDidMount() {
  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
      books
    }))
  })}

updateQuery(query) {
  this.setState(() => ({
    query
  }))
  BooksAPI.search(query)
  .then((resultBooks) => {
    this.setState(() => ({
      resultBooks: resultBooks
    }))
  })} 

  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
 const {query, resultBooks = []} = this.state;
 
    return (
    <div className="search-page-wrapper">
      <div className="columns">
        <div className="column is-full is-offset-one-quarter">
        <div className="field search-field">
          <label className="label">Search for Books</label>
          <div className="control">
            <input
              type="text"
              placeholder="Title or Author"                    
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
              className="book-search-input"
            />
            <Link to="/"><div className="close-search"></div></Link>
            </div>
            </div>
            </div>
            </div>
          <div>
          <article className="message is-small is-dark">
            <div className="message-header">
              <span>Search Info</span>              
              <button className="button is-small is-outlined is-danger" onClick={this.clearQuery}>Clear Search</button>
            </div>
            <div className="message-body">
            Your search returned {resultBooks.length} books matching {query}
            </div>
          </article></div>
          <h2 className="search-results-title title has-text-centered"> Search Results: </h2>           
          <hr />          
          <div className="container">   
                     
              <div className="columns is-multiline">
                {resultBooks.map((book) => (                  
                  <BookCard
                    key={book.id}
                    book={book}    
                    bookUpdate={this.bookUpdate}                                                                          
                  />                 
                ))}
                
              </div>            
            </div>
          </div>
    );
  }
}

export default SearchBooks