import React, { Component } from "react";

class Control extends Component {
  handleChange = event => {
    this.props.categorize(this.props.book, event.target.value);
  };

  render() {
    const { book, library } = this.props;
    const shelfs = Object.values(library);
    const bookIds = shelfs.flatMap(shelf => shelf.map(book => book.id));
    const shelf = shelfs
      .flatMap(shelf => shelf.filter(libraryBook => libraryBook.id === book.id))
      .map(result => result.shelf)
      .toString();
    return (
      <div className="book-shelf-changer">
        <select
          value={bookIds.includes(book.id) ? shelf : "none"}
          onChange={this.handleChange}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Control;
