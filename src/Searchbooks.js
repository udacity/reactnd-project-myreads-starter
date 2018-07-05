import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from './Book';


class Searchbooks extends Component {

  state = {
    query: "",
    filteredBooks: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));

    BooksAPI.search(query, 20).then(filteredBooks => {
      if (!filteredBooks || filteredBooks.error) {
        this.setState({filteredBooks: []});
        return;
    }
      filteredBooks = filteredBooks.map((books) => {
        const bookOnShelf = this
            .props
            .books
            .find(b => b.id === books.id);
        books.shelf = bookOnShelf
            ? bookOnShelf.shelf
            : "none";
        return books;
    });
    this.setState({ filteredBooks });
    });
  };

  render() {
    const { query, filteredBooks } = this.state;
    const {moveBookTo} = this.props
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {filteredBooks && filteredBooks.length > 0 ? (
              filteredBooks.map(book => (
                <li key={book.id}>
                <Book book={book} moveBookTo={moveBookTo}/>
                </li>
              ))
            ) : (
              <p>No books match your search criteria</p>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Searchbooks;
