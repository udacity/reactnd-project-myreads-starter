import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import BooksList from './components/BooksList';
import LoadingScreen from './components/LoadingScreen';
import partitionBooks from './helpers/partitionBooks';


const loadingText = 'Loading your books...';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    showLoadingScreen: true,
    books: {},
  };

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState(() => ({
              books: partitionBooks(books),
              showLoadingScreen: false,
          }))
      });
  }

  render() {
    return  (
      <div className="app">
        {this.state.showLoadingScreen && (
            <LoadingScreen isLoading={this.state.showLoadingScreen} text={loadingText}></LoadingScreen>
        )}
        {!this.state.showLoadingScreen && !this.state.showSearchPage  && (
            <div className="books-list-container">
              <BooksList books={this.state.books}></BooksList>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
        )}
        {this.state.showSearchPage && (
            <SearchBooks></SearchBooks>
        )}
      </div>
    )
  }
}

export default BooksApp
