import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
// import BookShelf from "../ListBooks/BookShelf/BookShelf";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";
import Book from "../ListBooks/BookShelf/Book/Book";

class Search extends Component {
  static propTypes = {
    onMoveBook: propTypes.func.isRequired,
    myBooks: propTypes.array.isRequired,
  };

  state = {
    query: "",
    books: [],
  };

  searchBook = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
    if (query.length > 0) {
      BooksAPI.search(query).then((results) => {
        // console.log("results", results);
        const myBooks = this.props.myBooks;
        if (results !== undefined && results.length) {
          for (let j = 0; j < myBooks.length; j++) {
            for (let i = 0; i < results.length; i++) {
              if (results[i].id === myBooks[j].id)
                results[i].shelf = myBooks[j].shelf;
            }
          }
          this.setState(() => ({
            books: [...results],
          }));
        } else {
          this.setState(() => ({
            books: [],
          }));
        }
        // console.log("books", this.state.books);
      });
    } else {
      this.setState(() => ({
        books: [],
      }));
    }
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
              {/* <button onClick={() => this.setState({ screen: "" })}>
                Close
              </button> */}
            </Link>

            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.searchBook(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            {this.state.books !== undefined && this.state.books.length ? (
              <ol className="books-grid">
                {this.state.books.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onMoveShelf={this.props.onMoveBook} />
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
