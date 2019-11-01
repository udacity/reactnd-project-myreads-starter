import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import SearchBar from "./SearchBar";

class AddBooks extends Component {

  render() {
    const { books, history } = this.props;
    const count = books.length;
    return (
      <div className="search-books">
        <SearchBar history={history} onSubmitSearch={(query) => this.props.onSubmitSearch(query)}/>
        <div className="search-books-results">
          <ol className="books-grid">
            {count > 0 ?
              books.map((book, index) => (
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
