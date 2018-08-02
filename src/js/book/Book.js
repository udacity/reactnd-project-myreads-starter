import React, { Component } from "react";
import BookStatus from "./BookStatus";
import "./../../css/App.css";
import Background from "./../../icons/no-image-icon-4.png";

class Book extends Component {
  render() {
    function checkImage(image) {
      if(image === undefined) {
        return Background
      } else {
        return image.smallThumbnail
      }
    }

    return (
      <ol className="books-grid">
        <li key={this.props.book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url("${ checkImage(this.props.book.imageLinks) }")`
                }}
              />
              <BookStatus
                book={this.props.book}
                changeBookStatus={this.props.changeBookStatus}
              />
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.authors}</div>
          </div>
        </li>
      </ol>
    );
  }
}

export default Book;
