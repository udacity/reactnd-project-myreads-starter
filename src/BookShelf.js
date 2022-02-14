import React, { Component } from 'react'
import Book from './Book'

const ShelfFilter = [
  {shelf: 'read', index: 1}, 
  {shelf: 'currentlyReading', index: 2},
  {shelf: 'wantToRead', index: 3}
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
                  <Book key={book.id} book={book}/>
                ))}
            </ol>
          </div>
        ))}
      </div>
    )
  }
}
export default BookShelf