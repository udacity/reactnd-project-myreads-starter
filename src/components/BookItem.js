import React from 'react';
import PropTypes from 'prop-types';

const BookItem = (props) => {
  const { book, handleShelfUpdate } = props;
  const backgroundImage = book.imageLinks
    ? `url(${book.imageLinks.thumbnail})`
    : null;
  const book_authors = book.authors ? book.authors.join(', ') : '';

  const onSelectChange = (e) => {
    handleShelfUpdate(book, e.target.value);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: backgroundImage
            }}
          >
            {' '}
          </div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : 'none'}
              onChange={onSelectChange}
            >
              <option value="move" disabled>
                Move to... {book.shelf}
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book_authors}</div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfUpdate: PropTypes.func.isRequired
};

export default BookItem;
