import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookShelf from "./BookShelf";

const categories = ["currentlyReading", "wantToRead", "read"];

class Library extends Component {
  state = {
    library: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => this.shelfBooks(data));
  }

  shelfBooks = data => {
    categories.forEach(category => {
      let books = data.filter(book => book.shelf === category);
      this.setState(prevState => ({
        library: {
          ...prevState.library,
          [category]: books
        }
      }));
    });
  };

  fetchBooks = categories => {
    let data = [];
    Object.values(categories)
      .flat()
      .forEach(bookId => {
        BooksAPI.get(bookId)
          .then(book => {
            data.push(book);
          })
          .then(() => this.shelfBooks(data));
      });
  };

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(categories => {
      this.fetchBooks(categories);
    });
  };

  render() {
    const { library } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Object.entries(library).map(shelf => {
            return (
              <div key={shelf[0]}>
                <BookShelf
                  category={shelf[0]}
                  books={shelf[1]}
                  updateShelf={this.updateShelf}
                />
              </div>
            );
          })}
        </div>
        <Link to="/search" className="open-search">
          <button />
        </Link>
      </div>
    );
  }
}

export default Library;
