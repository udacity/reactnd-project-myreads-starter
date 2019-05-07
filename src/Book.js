import React from "react";
import Control from "./Control.js";

const Book = props => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.book.imageLinks &&
              props.book.imageLinks.thumbnail})`
          }}
        />
        <Control
          book={props.book}
          library={props.library}
          categorize={props.updateLibrary}
        />
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">
        {props.book.authors &&
          props.book.authors.map(author => {
            return <div key={author}>{author}</div>;
          })}
      </div>
    </div>
  );
};

export default Book;
