import React, { Component } from "react";
import BookStatus from "./BookStatus";
import "./../../css/App.css"

class Book extends Component {

  render() {
    return (
      <ol className="books-grid">
        {/* {console.log(this.props.book.id)} */}
        {/* {console.log(this.props)} */}
        <li key={this.props.book.id}>
          <div className="book">
            <div className="book-top">
              <div
                className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")`
                }}
              />
              <BookStatus book={this.props.book} changeBookStatus={this.props.changeBookStatus}/>
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
