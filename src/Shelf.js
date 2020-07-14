import React from 'react'
import BooksGrid from './BooksGrid'

class Shelf extends React.Component {
  render() {
    const { name, books, onShelfChange } = this.props;
    return (
      <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
            <BooksGrid
              books={books}
              onShelfChange={onShelfChange}
            />
          </div>
        </div>
    )
  }
}

export default Shelf