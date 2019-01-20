import React from "react";

function ShelfSelector(props) {
  return (
    <select value={props.book.shelf || 'none'} onChange={(event) => props.updateShelf(props.book, event.target.value)}>
      <option value="move" disabled>
        Move to...
        </option>
      <option value="wantToRead">Want to Read</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  );
}

export default ShelfSelector;
