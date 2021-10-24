import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchEngine from './SearchEngine';
import Book from './Book';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books });
    });
  };

  updateBookShelf = (book) => (event) => {
    const books = this.state.books;
    const shelf = event.target.value;

    const bookIndex = () => {
      return books.findIndex(i => i.id === book.id);
    }

    if (bookIndex(book.id) <= 0) {
      books.push(book);
    }

    books[bookIndex(book.id)].shelf = shelf;

    this.setState( () => ({
      books,
    }));
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            onBookMoved={this.updateBookShelf}
            />
        )}/>
        <Route path="/search" render={() => (
          <SearchEngine
            matchedBooks={this.state.books}
            onBookMoved={this.updateBookShelf}
            />
        )}/>
      </div>
    )
  };
}

export default BooksApp;
