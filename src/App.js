  import React from 'react'
  // import * as BooksAPI from './BooksAPI'
  import './App.css'
  import Shelf from './Shelf';
  import SearchResults from './SearchResults'
  import SearchBar from './SearchBar'

  class BooksApp extends React.Component {
    state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: false
    }

    render() {
      return (
        <div className="app">
          {this.state.showSearchPage ? (
            <div className="search-books">
              <SearchBar />
              <SearchResults />
            </div>
          ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf />
                  <Shelf />
                  <Shelf />
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
        </div>
      )
    }
  }

  export default BooksApp
