import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookShelf from "./js/book-shelf/BookShelf";
import Search from "./js/search/Search";
import * as BooksAPI from "./js/service/BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(allBooks => {
      this.setState({ allBooks });
    });
  }

  onBookChanged = (shelf, book) => {

    BooksAPI.update(shelf, book).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        allBooks: state.allBooks.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact={true}
            render={() => (
              <BookShelf
                changeBookStatus={(value, book) =>
                  this.onBookChanged(value, book)
                }
                bookShelf={this.state.allBooks}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <Search
                changeBookStatus={(value, book) =>
                  this.onBookChanged(value, book)
                }
                bookShelf={this.state.allBooks}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default BooksApp;