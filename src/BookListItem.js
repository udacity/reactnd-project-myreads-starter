import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Selector from "./Selector";

class BookListItem extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.coverUrl})`
            }}></div>
            <div className="book-shelf-changer">
              <Selector/>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </li>
    )
  }
}

BookListItem.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListItem;