import React from 'react'

class Book extends React.Component {

  handleChangeShelf = (e) => {
    this.props.onChangeSelf(e.target.value);
  }

  render () {
    const { book, books } = this.props
    let currentShelf = 'none';

    for (let new_book of books) {
      if(new_book.id === book.id) {
        currentShelf = new_book.shelf
      }
    }
    return (

        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover"
                style={{ width: 128,
                  height: 193,
                  backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
              <div className="book-shelf-changer">
                  <select onChange={this.handleChangeShelf} value={currentShelf}>
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