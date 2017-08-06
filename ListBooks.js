import React, { Component } from 'react'

class ListBooks extends Component {
  render() {
    return (
      <ol className='book-list'>
        {this.props.books.map((book) => (
          <li key={book.title}>
            {book.author}
          </li>
        ))}
      </ol>
    )
  }
}

export default ListBooks