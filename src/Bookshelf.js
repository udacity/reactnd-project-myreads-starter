import React from 'react';
import BooksGrid from './BooksGrid';

const Bookshelf = (props) => {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={props.books} />
        </div>
      </div>
    );
  };

export default Bookshelf;