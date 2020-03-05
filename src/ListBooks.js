import React from 'react';
import Bookshelf from './Bookshelf';

const ListBooks = (props) => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf shelfTitle={"Currently Reading"} books={props.books.slice(0, 2)} />
            <Bookshelf shelfTitle={"Want to Read"} books={props.books.slice(2, 4)} />
            <Bookshelf shelfTitle={"Read"} books={props.books.slice(4)} />
          </div>
        </div>
        <div className="open-search">
          <button onClick={props.toSearch}>Add a book</button>
        </div>
      </div>
    );
  };

export default ListBooks;