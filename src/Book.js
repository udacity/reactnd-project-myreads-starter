import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    bookInfo: PropTypes.object.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }

  render() {
    return (
      <li>
        {console.log(this.props.bookInfo)}
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookInfo.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => this.props.onBookUpdate(this.props.bookInfo, e.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.bookInfo.title}</div>
        <div className="book-authors">{this.props.bookInfo.authors.map(author => <p>{author}<br /></p>)}</div>
      </li>
    )
  }
}

export default Book
