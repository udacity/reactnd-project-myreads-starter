import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    showSearchPage: false,
    showListBooks: true
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          <ListBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp
