import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookListItem extends Component {

  render() {
    return (
      <li>{this.props.book.name}</li>
    )
  }
}

BookListItem.prototype = {
  book: PropTypes.object.isRequired
};

export default BookListItem;