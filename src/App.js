import React from 'react'
import Router from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Bookshelf from './bookshelf.js'
import SearchBar from './SearchBar.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBar />
        ) : (
          <Bookshelf />
        )}
      </div>
    )
  }
}

export default BooksApp
