import React from 'react';
import PropTypes from 'prop-types';
import { update } from '../BooksAPI';

const BookChanger = ({ status, bookId, bookShelfUpdate }) => {

  const onChangeHandler = (bookId, status) => {
    update(bookId, status)
      .then(book => bookShelfUpdate(book))
  }

  return (
    <div className="book-shelf-changer">
      <select value={status} onChange={(event) => onChangeHandler(bookId, event.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead" >Want to Read</option>
        <option value="read" >Read</option>
        <option value="none" >None</option>
      </select>
    </div>
  )
}

BookChanger.propTypes = {
  status: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
  bookShelfUpdate: PropTypes.func.isRequired
}

BookChanger.defaultProps = {
  status: '',
  bookId: '',
  bookShelfUpdate: () => {}
}

export default BookChanger;
