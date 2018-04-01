import React from "react";
import PropTypes from "prop-types";

const ShelfChanger = ({ updateShelf, currentShelf, book }) => {
  return (
    <div className="book-shelf-changer">
      <select
        defaultValue={currentShelf}
        onChange={(e) => updateShelf(e.target.value, book)}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
    updateShelf: PropTypes.func.isRequired,
    currentShelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired
}

export default ShelfChanger;
