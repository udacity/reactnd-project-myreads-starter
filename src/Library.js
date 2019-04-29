import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

const categories = ["currentlyReading", "wantToRead", "read"];

class Library extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {categories.map(category => (
            <div key={category}>
              <BookShelf shelf={category} />
            </div>
          ))}
        </div>
        <Link to="/search" className="open-search" />
      </div>
    );
  }
}

export default Library;
