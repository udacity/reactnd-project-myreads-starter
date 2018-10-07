import React from "react";
import PropTypes from "prop-types";
import Shelf from "./Shelf.js";
import ShelvesEnum from "../constants.js";

const Bookcase = (props) => {
  const { books, updateShelf } = props;

  return (
    <React.Fragment>
      {Object.values(ShelvesEnum).map(item => (
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
};

Bookcase.propTypes = {
  books: PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Bookcase;
