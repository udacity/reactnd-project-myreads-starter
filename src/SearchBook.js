import React, { Component } from "react";
import { PropTypes } from "prop-types";
// import escapeRegExp from 'escape-string-regexp';
// import sortby from 'sort-by';
import { Link } from "react-router-dom";

class SearchBook extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    searchBook: PropTypes.func.isRequired,
    results: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  };

  render() {
    const { updateShelf, searchBook, results } = this.props;

    return <div className="search-books">
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
            <input type="text" placeholder="Search by title or author" onChange={e => searchBook(e.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          {results.length > 0 ? <ol className="books-grid">
              {results.map(book => <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 188,
                          backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x188?text=no+image'})`
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select defaultValue={book.shelf || "none"} onChange={e => {
                          updateShelf(e, book);
                        }}>
                        <option value="none" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                      {book.authors}
                      {/* {book.authors.join(", ")} */}
                    </div>
                  </div>
                </li>)}
            </ol> : <h1 style={{ textAlign: "center" }}>No results</h1>}
        </div>
      </div>;
  }
}

export default SearchBook;
