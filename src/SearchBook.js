import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBook = ({updateShelf, searchBook, results}) => {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={e => searchBook(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            {results.length > 0 ? (
              <ol className="books-grid">
                {results.map(book => (
                  <li key={book.id}>
                    <Book book={book} updateShelf={updateShelf} />
                  </li>
                ))}
              </ol>
            ) : (
              <h1 style={{ textAlign: "center" }}>No results</h1>
            )}
          </div>
        </div>
      );
}

SearchBook.propTypes = {
  updateShelf: PropTypes.func.isRequired,
  searchBook: PropTypes.func.isRequired,
  results: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default SearchBook;