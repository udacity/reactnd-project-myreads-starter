import React from 'react';
import { Route } from 'react-router-dom';
import Bookshelves from './Bookshelves';
import BookSearch from './BookSearch';
// import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelves books={this.state.books} />
        )}/>
        <Route path="/search-books" component={BookSearch}/>
      </div>
    )
  }
}

export default BooksApp;
