import React, { Component } from 'react'

class BookShelfChanger extends Component {
  state = {
    shelf: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.toChangeShelf)
      this.props.toChangeShelf(this.props.book, e.target.value, this.props.bookInShelf)
  }
  render() {
    const { book, bookInShelf } = this.props
    // bookInShelf is used to track if book is in shelf or book is in searched results
    const pickerValue = bookInShelf ? book.shelf : "none"
    return (
      <div className="book-shelf-changer">
        <select value={pickerValue} onChange={this.handleSubmit}>
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
