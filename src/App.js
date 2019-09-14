import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from "./BookShelf";
import Search from './Search';
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div>
            <div className="search-books">
              <div className="search-books-bar">
                <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                <SearchBar />
              </div>
              <div className="search-books-results">
                <SearchResults/>
              </div>
            </div>
          </div>
        ) : (
          <div className="list-books">
            {
              <BookShelf/>
            }
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
