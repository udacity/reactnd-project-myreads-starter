//* BookLibrary is the main page, it will render three book shelves sorted by the category

import React from "react";
import BookShelf from "./BookShelf";

const BookLibrary = props => {
  return (
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <BookShelf
            books={props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
            moveBook={props.moveBook}
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <BookShelf
            books={props.books.filter(
              book => book.shelf === "wantToRead"
            )}
            moveBook={props.moveBook}
          />
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <BookShelf
            books={props.books.filter(
              book => book.shelf === "read"
            )}
            moveBook={props.moveBook}
          />
        </div>
      </div>
    </div>
  );
};

export default BookLibrary;
