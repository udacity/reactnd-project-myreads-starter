import React from "react";

const SearchPage = () => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => this.setState({ showSearchPage: false })}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  );
};
export default SearchPage;
