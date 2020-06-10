import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import SuccessModal from "./SuccessModal";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    loading: false,
    error: false,
    modal: false,
    books: [],
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired,
  };

  searchBook(book) {
    if (book) {
      this.setState({ loading: true, error:false, books: [] });
      BooksAPI.search(book).then(
        (data) => {
          const mappedData = this.map(data);
          this.setState({ loading: false, books: mappedData });
        }
      )
      .catch(error => {
        console.error('Error fetching API:', error);
        this.setState({ loading: false, error: true, books: [] })
    });
    }
  }

  onShelfChange = (book, shelf) => {
    const { onShelfChange } = this.props;

    this.setState({ loading: true });
    BooksAPI.update(book, shelf).then((data) => {
      //success
      book.shelf = shelf;
      this.setState({
        loading: false,
        modal: true,
      });
      onShelfChange(book, shelf);
    });
  };

  map = (data) => {
    const { books } = this.props;

    if (data && data.length) {
      return data.map((book) => {
        const found = books.find((item) => item.id === book.id);
        if (found) {
          book.shelf = found.shelf;
        } else {
          book.shelf = "none";
        }
        return book;
      });
    }
  };

  render() {
    return (
      <div className="search-books">
      <SuccessModal />
        <div className="search-books-bar">
          <Link className="close-search" to="/"></Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchBook(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.loading && <div className="loader"></div>}
          {this.state.error && <div className="error"></div>}
          {!this.state.loading && !this.state.error && 
          <ol className="books-grid">
          {!this.state.books && <p>No results were found</p>}
            {this.state.books &&
              !!this.state.books.length &&
              this.state.books.map((book, index) => (
                <Book
                  book={book}
                  key={index}
                  onShelfChange={this.onShelfChange}
                />
              ))}
          </ol>}
        </div>
      </div>
    );
  }
}

export default Search;
