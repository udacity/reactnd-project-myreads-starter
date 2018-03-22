import React from "react";
import PropTypes from "prop-types";

const Book = ({updateShelf, book}) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "http://via.placeholder.com/128x188?text=no+image"
            })`
          }}
        />
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf}
            onChange={e => {
              updateShelf(e.target.value, book);
            }}
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
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.join(", ") : ""}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateShelf: PropTypes.func.isRequired
};

export default Book;