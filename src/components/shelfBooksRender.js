import React, { Component } from "react";

import Book from "./book";

/**
 * rendering the shefls books in main page
 */
class ShelfsBooks extends Component {
  /**
   *
   * @param {*} shelfName hold shelf name as wantToRead no spaces
   * @returns more readable style with spaces for shelf nams
   */
  setShelfHeadName = (shelfName) => {
    let shelfHeadText = "";
    if (shelfName === "currentlyReading") shelfHeadText = "current Reading";
    else if (shelfName === "wantToRead") shelfHeadText = "want to Read";
    else shelfHeadText = "Read";
    return shelfHeadText;
  };

  /**
   * calling parent event handler for shelf chaning
   * @param {*} bookState : current shelf name
   * @param {*} book : book object
   */
  onUpdateBookShelf = (bookState, book) => {
    this.props.onUpdateBookShelf(bookState, book);
  };

  render() {
    const { books, shelfs } = { ...this.props };
    return (
      <div>
        <div className="list-books-content">
          {shelfs.map((shelf) => {
            return (
              <div className="list-books-content" key={shelf}>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">
                    {this.setShelfHeadName(shelf)}
                  </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map((book) => {
                        return (
                          shelf === book.shelf && (
                            <li key={book.id}>
                              <Book
                                book={book}
                                shelfName={shelf}
                                onUpdateBookShelf={this.onUpdateBookShelf}
                              />
                            </li>
                          )
                        );
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShelfsBooks;
