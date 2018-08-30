//* BookChanger component changes the specific book's shelf (currently reading, want to read, read, none)

import React from "react";

const BookChanger = props => {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={event =>
          props.moveBook(props.book, event.target.value)
        }
        value={props.currentShelf}
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
};

export default BookChanger;
