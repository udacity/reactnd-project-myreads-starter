//* Book.js renders the book

import React from "react";
import BookChanger from "./BookChanger";

const Book = props => {
  console.log("Book Props", props);
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`
          }}
        />

        <BookChanger
          book={props.book}
          currentShelf={props.book.shelf}
          moveBook={props.moveBook}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      {props.book.authors.map((author, index) => (
        <div className="book-authors" key={index}>
          {author}
        </div>
      ))}
    </div>
  );
};

export default Book;
