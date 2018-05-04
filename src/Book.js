import React from 'react'

import notImage from './icons/image-not-found.png'

class Book extends React.Component {

  handleChangeShelf = (e) => {
    this.props.onChangeSelf(e.target.value);
  }

  render () {
    const { book } = this.props
    const imageBook = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : notImage;
    return (
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{ width: 128,
                  height: 193,
                  backgroundImage: `url("${imageBook}")`}}></div>
              <div className="book-shelf-changer">
                  <select onChange={this.handleChangeShelf} defaultValue={book.shelf}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.author}</div>
          </div>
        </li>
      
    )
  }
}

export default Book