import React, { Component } from 'react'
import Book from './Book'


class ListBooks extends Component {

  render(){
    const { availableBooks, shelfName, update} = this.props
    return(
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              {availableBooks.map((book) =>
                <Book key={book.id} book={book} newCategory={update} />
              )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ListBooks