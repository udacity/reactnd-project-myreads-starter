import React from 'react'

const BookShelf = (props) => {
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.children}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf