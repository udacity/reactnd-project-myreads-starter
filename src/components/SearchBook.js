import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';

class SearchBook extends Component{

    state = {
        query: '',
        books: this.props.books,
        hasError: false,
    }

    handleQuery = (event) => {
        this.setState({query: event.target.value});
        this.searchBook(this.state.query);
    }

    searchBook = (query) => {
        BooksAPI.search(query)
        .then((fetchedData) => {
          if(typeof fetchedData !== 'undefined') {
            const books = Array.isArray(fetchedData) ? fetchedData : fetchedData.items;
            this.setState({
              books: books,
              hasError: books.length === 0
            })
          }
        })
    }

    // lifting up the state
    handleUpdate = (book, shelf) => {
      this.props.updateShelf(book, shelf);
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link to='/' className='close-search'> Close </Link>
              <div className="search-books-input-wrapper">
                <input type="text" onChange={this.handleQuery} value={this.state.query} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                this.state.hasError && 'No record found.'
              }
              {this.state.books.map((result, index) => (
                  <li key={index}>
                      <Book
                          title={result.title}
                          authors={result.authors}
                          url={result.imageLinks}
                          book={result}
                          handleUpdate={this.handleUpdate}
                          shelf={result.shelf}
                      />
                  </li>
              ))}   
              </ol>
            </div>
          </div>
        );
    }
}

export default SearchBook;