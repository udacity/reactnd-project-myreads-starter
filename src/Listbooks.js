import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

class Listbooks extends Component {
  render() {
    const { moveBookTo, books } = this.props;
    const currentlyReading = books.filter(
      book => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter(
      book => book.shelf === "wantToRead"
    );
    const read = books.filter(
      book => book.shelf === "read"
    );
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <Shelf
                shelfTitle="Currently Reading"
                booksInShelf={currentlyReading}
                moveBookTo={moveBookTo}
              />
              <Shelf
                shelfTitle="Want to Read"
                booksInShelf={wantToRead}
                moveBookTo={moveBookTo}
              />
              <Shelf
                shelfTitle="Read"
                booksInShelf={read}
                moveBookTo={moveBookTo}
              />
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Listbooks;
