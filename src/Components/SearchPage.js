import React from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchPage extends React.PureComponent {
  render() {
    const { searchBooks, searchList, updateBook } = this.props;
    let searchView;
    if (searchList.length > 0) {
      searchView = searchList.map(book => {
        return <Book updateBook={updateBook} key={book.id} book={book} />;
      });
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"}>
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => searchBooks(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{searchView}</ol>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchBooks: PropTypes.func,
  searchList: PropTypes.array,
  updateBook: PropTypes.func
};
export default SearchPage;
