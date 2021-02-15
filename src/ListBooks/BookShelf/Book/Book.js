import React, { Component } from "react";
import "../../../App.css";
import propTypes from "prop-types";
import SelectList from "./SelectList/SelectList";

class Book extends Component {
  static propTypes = {
    book: propTypes.object.isRequired,
    onChange: propTypes.func.isRequired,
  };
  state = {
    selectStatus: true,
  };
  changeSelectStatus = () => {
    this.setState((currentState) => ({
      selectStatus: !currentState.selecStatus,
    }));
  };
  render() {
    const title = this.props.book.title;
    const cover = `url("${this.props.book.imageLinks.smallThumbnail}")`;
    const authors = this.props.book.authors.reduce(
      (acc, author) => (acc += "," + author),
      ""
    );
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
              shelf={this.props.shelf}
              onMoveBook={this.props.moveBook}
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
