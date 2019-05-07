import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchResults from "./SearchResults";

class BookSearch extends Component {
  state = {
    query: "",
    books: []
  };

  handleChange = event => {
    this.setState({ query: event.target.value }, () => {
      this.findBooks(this.state.query);
    });
  };

  findBooks = query => {
    BooksAPI.search(query).then(results => {
      results && !results.error
        ? this.setState({
            books: results
          })
        : this.setState({
            books: []
          });
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
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <SearchResults books={this.state.books} />
      </div>
    );
  }
}
export default BookSearch;
