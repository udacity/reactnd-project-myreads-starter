import React, { Component } from 'react'


class BookItem extends React.Component {


  render() {
    let { key, book } = this.props
    console.log('lacra Books')
    console.log(book)

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          </div>
          <div className="book-title">{book.title}</div>
        </div>
      </li>
    )
  }
}

export default BookItem
