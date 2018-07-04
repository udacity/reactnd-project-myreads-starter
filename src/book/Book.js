import React, { Component } from "react";
import BookStatus from "./BookStatus";

class Book extends Component {

  render() {
    return (
      <ol className="books-grid">
        <li key={this.props.bookId}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url("${this.props.bookImage}")`
                }}
              />
              <BookStatus bookId={this.props.bookId} changeBookStatus={this.props.changeBookStatus}/>
            </div>
            <div className="book-title">{this.props.bookTitle}</div>
            <div className="book-authors">{this.props.bookAuthors}</div>
          </div>
        </li>
      </ol>
    );
  }
}

export default Book;
