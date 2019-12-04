import React, { Component } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ErrorBoundary from './ErrorBoundary';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    currentShelf: PropTypes.object.isRequired,
    resultBooks: PropTypes.array.isRequired,
  };


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

  searchBooks = (query) => {
    BooksAPI.search(query)
    .then(books => {this.setState({books})})
}


  clearQuery = () => {
    this.updateQuery('')
  }

componentWillUnmount() {
  this.clearQuery()
}


  render() {

 const {query, resultBooks = []} = this.state;
 const {bookUpdate} = this.props;

    return (
    <div className="search-page-wrapper">
        <div className="field search-field">
        <div className="columns is-grouped-centered">
        <div className="column is-one-fifth"></div>        
            <div className="column">
          <label className="label">Book Search</label>
          <div className="control">
            <input
              type="text"              
              placeholder="Search by Title or Author"
              value={query}                    
              onChange={(event) => this.updateQuery(event.target.value)}
              className="book-search-input"
            />
            <Link to="/"><div className="close-search"></div></Link>
            </div>
            </div>                        
            <div className="column is-one-fifth">
              <article className="message is-small is-dark has-text-centered">
              <div className="message-header">
                <h4 className="message-header">Search Helper</h4>       
                <button className="button is-small is-outlined is-danger" onClick={this.clearQuery}>Clear Search</button>
              </div>
              <div className="message-body">
              <p>Found {resultBooks.length} books</p> <br />
              {query.length ?<p>Terms: {query} </p> :<p>Search Terms: none</p>}
              </div>
            </article>
            </div>            
            </div>
            <div className="columns">
            <div className="column is-full">
              <h2 className="search-results-title title has-text-left"> Search Results </h2>                         
            </div>  
            </div>     
            </div>
            <hr />   
          <div className="container">                        
              <div className="columns is-multiline">
              <ErrorBoundary>
                {resultBooks.length 
                  ? resultBooks.map((book) => (                  
                  <BookCard
                    book={book}    
                    key={resultBooks.id}                    
                    bookUpdate={bookUpdate}                                                                 
                  />                 
                ))
                : <div className="column">
                <div className="no-books-text">
                <h4 className="subtitle">No Books to Display</h4></div>
                </div>
                }
                </ErrorBoundary>
              </div>            
            </div>
          </div>
    );
  }
}

export default SearchBooks