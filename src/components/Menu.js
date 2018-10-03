import React, { Component } from "react";
import PropTypes from "prop-types";

class Menu extends Component {
  handleChange = e => {
    const { book, updateShelf } = this.props;
    updateShelf(book, e.target.value);
  };

  // TODO: I want the menus to reflect the shelf accurately on the search page,
  // but the books in search results don't have a shelf property.
  checkShelf = book => {
    console.log("checkShelf", book, book.shelf);
    return book.shelf === undefined ? "move" : book.shelf;
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value="move" onChange={this.handleChange}>
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

Menu.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Menu;
