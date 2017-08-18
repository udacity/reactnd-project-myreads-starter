import React from 'react';
import { Route } from 'react-router-dom';
import Bookshelves from './Bookshelves';
import BookSearch from './BookSearch';
import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(shelves => {
      this.setState((prevState, props) => ({
        ...prevState,
        books: prevState.books.map(b => {
          if (b.id !== book.id) {
            return b;
          }
          return {
            ...b,
            shelf
          };
        })
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Bookshelves books={this.state.books} onUpdate={this.update} />
        )}/>
        <Route path="/search" render={() => (
          <BookSearch books={this.state.books} onUpdate={this.update} />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
