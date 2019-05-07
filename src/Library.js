import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class Library extends Component {
  updateShelf = (book, shelf) => {
    this.props.updateLibrary(book, shelf);
  };
  render() {
    const { library } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Object.entries(library).map(shelf => {
            return (
              <div key={shelf[0]}>
                <BookShelf
                  category={shelf[0]}
                  books={shelf[1]}
                  library={library}
                  updateShelf={this.updateShelf}
                />
              </div>
            );
          })}
        </div>
        <Link to="/search" className="open-search">
          <button />
        </Link>
      </div>
    );
  }
}

export default Library;
