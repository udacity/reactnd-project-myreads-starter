import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Book extends Component {
  handleOnChangeSelect = (event) => {
    const { book, updateBook } = this.props;
    const shelf = event.target.value;
    if (shelf !== 'none') {
      updateBook(book, shelf);
    }
  }

  render() {
    const { title, authors, imageLinks, shelf } = this.props.book;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${imageLinks.thumbnail})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.handleOnChangeSelect} value={shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors && authors.join()}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string, authors: PropTypes.array, imageLinks: PropTypes.object, shelf: PropTypes.string
  }),
  updateBook: PropTypes.func.isRequired
};
