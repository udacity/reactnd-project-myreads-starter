import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      count: 0
    };
  }

  onSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    console.log(query);
    if (query !== "") {
      BooksAPI.search(query).then(books => {
        this.setState({
          results: books,
          count: books.length,
          query: ""
        });
      });
    }
  };

  onChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { history } = this.props;
    const { results, count } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={() => history.push("/")}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.onChange}
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {count > 0 ?
              results.map((book, index) => (
              <Book key={index} book={book} />
            ))
              : <p>No results.</p>
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default AddBooks;
