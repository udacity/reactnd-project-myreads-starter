import React from 'react';
import PropTypes from 'prop-types';

const BookButton = props => {
  const { book, changeShelf } = props;

 const updateShelf = event => {
    changeShelf(book, event.target.value); 
 }

    
    return (
      <div className="book-shelf-changer has-background-dark is-bold">
        <select onChange={updateShelf}>
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
  }
  BookButton.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

export default BookButton;