import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookList extends Component {
  render() {
    return (
      <ul>
        {
          this.props.books.map(book => (
            <BookListItem book={book} key={book.name} />
          ))

        }
      </ul>
    )
  }
}

Section.prototype = {
  books: PropTypes.array.isRequired
};

export default BookList;