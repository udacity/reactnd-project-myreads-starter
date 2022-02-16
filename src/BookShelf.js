import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component{
  render(){
    const { books, shelfFilter } = this.props;
    return (
      <div className="list-books-content">
        {shelfFilter.map(({shelf, index}) => (
          <section id={shelf} key={index} className="bookshelf">
            <h2 className="books-row">{shelf}</h2>
            <ol className="books-grid">
                {Object.values(books).filter(book => book.shelf === shelf).map((book)=>(
                  <Book key={book.id} book={book} onShelfUpdate={this.props.onShelfUpdate} />
                ))}
            </ol>
          </section>
        ))}
      </div>
    )
  }
}
export default BookShelf