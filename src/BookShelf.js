import React from "react";
import Book from "./Book";
export default function Bookshelf(props) {
  var books = props.books;
  var name = props.name;
  var bookComponent = [];
  var onBookShelfChange = props.onBookShelfChange;
  var shelftitle = props.shelftitle;
  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var title = book.title;
    var author = book.author;
    var image = book.image;
    bookComponent.push(
      <li key={i}>
        <Book
          title={title}
          bookShelfName={name}
          onBookShelfChange={onBookShelfChange}
          author={author}
          image={image}
        />
      </li>
    );
  }

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelftitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{bookComponent}</ol>
      </div>
    </div>
  );
}
