
import React from 'react'
import Books from './Books'

const bookshelf = (props) => {

return (
  <div className="bookshelf">
  <h2 className="bookshelf-title">{props.name}</h2>
  <div className="bookshelf-books">
    <ol className="books-grid">
      {props.books.map((book) =>(
        <li key={book.id}>
          <Books 
            book={book}
            onChangeShelf={props.onChangeShelf}/>
        </li>
        ))}
      </ol>
    </div>
  </div>
    )
  };


export default bookshelf;