import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class BookShelf extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(results => {
      const books = results.filter(result => {
        return result.shelf === this.props.shelf;
      });
      this.setState(() => ({
        books
      }));
    });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
