import React, { Component } from 'react'


class BookItem extends React.Component {


  render() {
    let { key, book ,changeSelf} = this.props
    console.log('lacra Books')
    console.log(book)

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) =>{ changeSelf(book,e.target.value)}} >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
        </div>
      </li>
    )
  }
}

export default BookItem
