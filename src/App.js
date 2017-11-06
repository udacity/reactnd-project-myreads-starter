import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import SearchPage from "./components/SearchPage";

class BooksApp extends React.Component {
  MAX_BOOKS_ON_SEARCH_PAGE = 30;
  
  state = {
          mainPageBooks : [],
          searchPageBooks : []
  };

componentDidMount() {
    this.getAllBooks();
}

getAllBooks() {
    BooksAPI.getAll().then((books) => {
        this.setState({
          mainPageBooks : books
        });
    });
}

searchQuery = (query) => {
  if(query){
      BooksAPI.search(query, this.MAX_BOOKS_ON_SEARCH_PAGE).then((books) => {
          if(books.length){
              this.setState({
                searchPageBooks : books
              });
          }
      });
      } else {
      this.setState({
        searchPageBooks: []
      });
  }
};

changeBookShelf = (book, shelf) => {
  BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        mainPageBooks : state.mainPageBooks.filter(shelfBook => shelfBook.id !== book.id).concat([ book ])
      }));
  });
};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <MainPage books = { this.state.mainPageBooks } changeBookShelf={this.changeBookShelf} />
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
          </div>
        )}/>
        <Route path="/search" render={({ history }) => (
                    <SearchPage
                        books={this.state.searchPageBooks}
                        changeBookShelf={this.changeBookShelf}
                        searchQuery={this.searchQuery}
                    />
                )}/>
      </div>
    )
  }
}

export default BooksApp
