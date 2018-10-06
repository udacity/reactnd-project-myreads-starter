import React, { Component } from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf.js";

class Bookcase extends Component {
  render() {
    const { books, shelvesEnum, updateShelf } = this.props;

    return (
      <React.Fragment>
        {Object.values(shelvesEnum).map(item => (
          <Shelf
            key={item.key}
            books={books}
            shelf={item.key}
            title={item.str}
            updateShelf={updateShelf}
          />
        ))}
      </React.Fragment>
    );
  }
}

Bookcase.propTypes = {
  books: PropTypes.array.isRequired,
  shelvesEnum: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Bookcase;
