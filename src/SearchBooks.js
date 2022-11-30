import React, { Component } from "react";
import DisplayBooks from "./DisplayBooks";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
class SearchBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedBooks: []
    };
  }
  search = query => {
    BooksAPI.search(query)
      .then(async searchedBooks => {
        searchedBooks.error === undefined &&
          (await Promise.all(
            searchedBooks.map(async book => {
              await BooksAPI.get(book.id).then(b => {
                return (book.shelf = b.shelf);
              });
              return book;
            })
          ));
        return searchedBooks;
      })
      .then(searchedBooks => {
        this.setState(() => ({
          searchedBooks
        }));
      });
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e =>
                e.target.value !== "" && this.search(e.target.value)
              }
            />
          </div>
        </div>
        <div className="search-books-results">
          {
            <DisplayBooks
              books={this.state.searchedBooks}
              updateBooks={this.props.updateBooks}
            />
          }
        </div>
      </div>
    );
  }
}
export default SearchBooks;
