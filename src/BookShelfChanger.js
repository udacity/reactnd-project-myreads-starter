import React, { Component } from 'react'

class BookShelfChanger extends Component {
  state = {
    shelf: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.toChangeShelf)
      this.props.toChangeShelf(this.props.book, e.target.value)
  }
  render() {
    const { book, toChangeShelf } = this.props
    return (
      <div className="book-shelf-changer">
        <select value = {book.shelf} onChange={this.handleSubmit}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookShelfChanger
