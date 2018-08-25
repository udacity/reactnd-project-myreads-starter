//* BookShelf renders the list of books in a category

import React from "react";
import Book from "./Book";

const BookShelf = props => {
  console.log("BookShelf Props", props);
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <Book book={book} moveBook={props.moveBook} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BookShelf;
