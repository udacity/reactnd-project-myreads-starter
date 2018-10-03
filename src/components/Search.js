import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book.js";
import { search } from "../BooksAPI.js";

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    results: [],
    query: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    // TODO: Interesting
    // Searching for "duck" returns:
    //  results: []
    // Searching for "fork" returns:
    //  query: "fork"results: {error: "empty query", items: Array(0)}

    search(this.state.query).then(value =>
      this.setState({
        results: value
      })
    );
  };

  handleChange = e => {
    this.setState({
        query: e.target.value
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={this.handleChange}
              />
            </form>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.length > 0 &&
              this.state.results.map(book => (
                <li key={book.id}>
                  <Book book={book} updateShelf={this.props.updateShelf} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
