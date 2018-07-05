import React from "react";
import * as BooksAPI from "./js/service/BooksAPI";
import BookShelf from "./js/book-shelf/BookShelf";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./css/index.css";
import Search from "./js/search/Search";

class BooksApp extends React.Component {
  state = {
    allBooks: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ allBooks: books });
    });
  }

  onBookChanged = (value, book) => {
    if (
      this.state.allBooks.filter(element => element.id === book.id)[0] !=
      undefined
    ) {
      this.setState(state => {
        return (state.allBooks.filter(
          element => element.id === book.id
        )[0].shelf = value);
      });
    } else {
      book.shelf = value;
      this.setState(state => {
        return state.allBooks.push(book);
      });
    }
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
