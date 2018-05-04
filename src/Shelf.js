import React from 'react'

import Book from './Book'

class Shelf extends React.Component {

handleUpdate = (book,shelf) => {
  this.props.onChangeSelf(book,shelf);
}

  render() {
    const { books } = this.props
    return (
      
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book,index) => (
              <Book book={book} books={books} key={index} onChangeSelf={(shelf) => {this.handleUpdate(book,shelf)}}/>
            ))}
          </ol>
        </div>
      </div>
      
    )
  }
}

export default Shelf;
  