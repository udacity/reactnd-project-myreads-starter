import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ this.props.title }</h2>
        <BooksGrid
          books={[{title: "To Kill a Mockingbird", author: "Harper Lee", id: 1}, 
          {title: "Ender's Game", author: "Orsons Scott Card", id: 2}]}
        />
      </div>
    )
  }
}

export default BookShelf
