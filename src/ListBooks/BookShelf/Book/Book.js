import React, { Component } from "react";
import "../../../App.css";
import propTypes from "prop-types";
import SelectList from "./SelectList/SelectList";

class Book extends Component {
  static propTypes = {
    book: propTypes.object.isRequired,
    onMoveShelf: propTypes.func.isRequired,
  };
  render() {
    const title = this.props.book.title;
    let cover;
    if (this.props.book.imageLinks !== undefined) {
      cover = `url("${this.props.book.imageLinks.smallThumbnail}")`;
    }
    // console.log("books in the book render", this.props.book);
    let authors;
    if (this.props.book.authors !== undefined) {
      authors = this.props.book.authors.reduce(
        (acc, author) => (acc += "," + author),
        ""
      );
    }

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: cover,
              }}
            />
            <SelectList
              book={this.props.book}
              shelf={this.props.book.shelf}
              onMoveBook={this.props.onMoveShelf}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </div>
    );
  }
}

export default Book;
