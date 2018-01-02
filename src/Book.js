import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    bookInfo: PropTypes.object.isRequired
  }

  render() {
    return (
      <li>
        {console.log(this.props.bookInfo)}
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookInfo.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.bookInfo.title}</div>
        <div className="book-authors">{this.props.bookInfo.authors}</div>
      </li>
    )
  }
}

export default Book
