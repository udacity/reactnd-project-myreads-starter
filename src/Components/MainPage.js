import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Book from "./Book";
import Shelf from "./Shelf";

class MainPage extends React.PureComponent {
  render() {
    const { updateBook, clearSearch, books } = this.props;
    let read;
    let wantToRead;
    let currentlyReading;

    read = books
      .filter(book => book.shelf === "read")
      .map(book => {
        return <Book updateBook={updateBook} key={book.title} book={book} />;
      });

    wantToRead = books
      .filter(book => book.shelf === "wantToRead")
      .map(book => {
        return <Book updateBook={updateBook} key={book.title} book={book} />;
      });

    currentlyReading = books
      .filter(book => book.shelf === "currentlyReading")
      .map(book => {
        return <Book updateBook={updateBook} key={book.title} book={book} />;
      });

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf bookShelfName="Currently Reading">{currentlyReading}</Shelf>
            <Shelf bookShelfName="Want to Read">{wantToRead}</Shelf>
            <Shelf bookShelfName="Read">{read}</Shelf>
          </div>
        </div>
        <div className="open-search">
          <Link to={"/search"}>
            <button onClick={clearSearch}>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  updateBook: PropTypes.func,
  clearSearch: PropTypes.func,
  books: PropTypes.array
};

export default MainPage;
