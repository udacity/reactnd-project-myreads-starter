import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import AddToBookList from './AddToBookList'
import BookWrapper from './BookWrapper'
import './App.css'

class BooksApp extends React.Component {
  /**
   * TODO: Create controlled select box on Book component
   */
  
  state = {
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
