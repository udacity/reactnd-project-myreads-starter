import React, { Component } from "react";


class Book extends Component {
  ShelfChanger = e => {
    const shelf = e.target.value;
    this.props.moveBookTo(this.props.book, shelf);
  };
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.ShelfChanger} value={book.shelf}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "  Author Unknown "}
        </div>
      </div>
    );
  }
}

export default Book;
