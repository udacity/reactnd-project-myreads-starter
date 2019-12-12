import React, { Component } from 'react';
import BookCard from './BookCard';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class SearchBooks extends Component {
  static propTypes = {
    resultBooks: PropTypes.array.isRequired,
  };


  static defaultProps = {
    resultBooks: [],
  }
  
state = {
query: '',
resultBooks: [],
books:[]
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

/*   searchBooks = (query) => {
    BooksAPI.search(query)
    .then(books => {this.setState({books})})
    
} */


  clearQuery = () => {
    this.updateQuery('')
  }



  render() {

 const {query, resultBooks = []} = this.state;
 const {bookUpdate} = this.props;

    return (
    <div className="search-page-wrapper">        
        <div className="columns is-grouped-centered">     
          <div className="column is-full">
          <div className="field search-field has-text-centered">
          <label className="label">Book Search</label>
          <div className="control has-text-centered">
            <input
              type="text"              
              placeholder="Search by Title or Author"
              value={query}                    
              onChange={(event) => this.updateQuery(event.target.value)}
              className="book-search-input"
            />            
            </div>
            </div>                        
              <div className="search-helper-actions has-text-centered">
              <button className="button is-small is-outlined is-danger" onClick={this.clearQuery}>clear search</button>
              </div>
              <div className="search-helper-text has-text-centered">              
              <p>Found {resultBooks.length} books</p> <br />
              {query.length ?<p>Terms: {query} </p> :<p>Search Terms: none</p>}
              </div>
            </div>            
            </div>
            <div className="columns">
            <div className="column is-full">
              <h2 className="search-results-title title has-text-left"> Search Results </h2>                         
            </div>
            </div>                 
            <hr />   
          <div className="container">                        
              <div className="columns is-multiline">              
                {resultBooks.length 
                  ? resultBooks.map((book) => (                  
                  <BookCard
                    book={book}    
                    key={book.id}                    
                    bookUpdate={bookUpdate}
                  //  shelf={book.shelf}     
                  />                 
                ))
                : <div className="column">
                <div className="no-books-text">
                <h4 className="subtitle">No Books to Display</h4></div>
                <br />
                <Link to="/"><button className="button is-outlined">exit search</button></Link>
                </div>
                }                
              </div>            
            </div>
    </div>
    );
  }
}

export default SearchBooks