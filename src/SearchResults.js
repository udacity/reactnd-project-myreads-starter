import React from "react";
import Book from "./Book";

const SearchResults = props => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
