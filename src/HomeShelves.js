import React from 'react';
import Book from './Book';
import { PropTypes } from 'prop-types';

const HomeShelves = props => {
  const { shelf, books, move } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">          
          {books.length > 0 ? books.map(book => (
            <Book
              key={book.id}
              book={book}
              move={move}
            />
          )) : (<p>No Books is Available Here</p>)
          }
        </ol>
      </div>
    </div>
  )
};
  
//proptypes books,shelf, move from mainPage
HomeShelves.prototypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.object.isRequired,
  move: PropTypes.func.isRequired
};
export default HomeShelves;