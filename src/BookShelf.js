import React, { Component } from 'react'
import Book from './Book'

const ShelfFilter = [
  {shelf: 'currentlyReading', index: 1}, 
  {shelf: 'wantToRead', index: 2},
  {shelf: 'read', index: 3}
]

class BookShelf extends Component{
  render(){
    const { books } = this.props;
    return (
      <div className="list-books-content">
        {ShelfFilter.map(({shelf, index}) => (
          <div key={index} className="bookshelf">
            <h2>{shelf}</h2>
            <ol className="books-grid">
                {Object.values(books).filter(book => book.shelf === shelf).map((book)=>(
                  <Book key={book.id} book={book} onShelfUpdate={this.props.onShelfUpdate} />
                ))}
            </ol>
          </div>
        ))}
      </div>
    )
  }
}
export default BookShelf