import React, { Component } from "react";
import Control from "./Control.js";

class Book extends Component {
  categorize = (book, shelf) => {
    this.props.reorganize(book, shelf);
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks &&
                book.imageLinks.thumbnail})`
            }}
          />
          <Control book={book} categorize={this.categorize} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors &&
            book.authors.map(author => {
              return <div key={author}>{author}</div>;
            })}
        </div>
      </div>
    );
  }
}

export default Book;
