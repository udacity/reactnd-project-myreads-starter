import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AddToBookList from './AddToBookList'
import BookWrapper from './BookWrapper'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
    currentlyReading: [],
    wantToRead: [],
    read: [],
  };


  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      let currentlyReading = [];
      let wantToRead = [];
      let read = [];

      books.map((book) => {
        if(book.shelf === "currentlyReading") {
          currentlyReading.push(book);
        }
        if(book.shelf === "wantToRead") {
          wantToRead.push(book);
        }
        if(book.shelf === "read") {
          read.push(book);
        }
        return book;
      })

      this.setState({currentlyReading, wantToRead, read});
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookWrapper 
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
          />
        )}/>

        <Route exact path="/search" render={() => (
          <AddToBookList/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
