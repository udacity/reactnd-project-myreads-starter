import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  handleShelfChange = (e) => {
    const { book, onShelfChange } = this.props;
    onShelfChange(book, e.target.value);
  }

  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : null
              }}
            ></div>
            <div className="book-shelf-changer">
              <select value={book.shelf || 'none'} onChange={this.handleShelfChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
    )
  }
}

export default Book