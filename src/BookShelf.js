import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  reorganize = (book, shelf) => {
    this.props.updateShelf(book, shelf);
  };

  render() {
    const { books, category } = this.props;

    const readableCategory = category
    .split(/(?=[A-Z])/)
    .map((word, index) => {
      return (<span className="capitalize" key={index}>{word}&nbsp;</span>)
    });

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{readableCategory}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} reorganize={this.reorganize} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
