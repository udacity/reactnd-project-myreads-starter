import React, { Component } from "react";

import Book from "./book";

/**
 * rendering search result books
 */
class SearchBooks extends Component {

/**
 * handle shelfs books and defined each shelf for each book
 * @param {*} bookShelf sending Book shelf for shefed books
 * @returns shelf or none if shelf doesn't define
 */
  getShelf = ( bookShelf) => {
    if (!bookShelf)
       return 'none';
    const [shelf] = [...this.props.shelfs.filter(shelf => shelf === bookShelf)];
    console.log(shelf);
    return shelf;
  }

  /**
   * calling parent event handler for shelf chaning
   * @param {*} bookState : current shelf name
   * @param {*} book : book object
   */
  onUpdateBookShelf =( bookState ,book )=>{
    this.props.onUpdateBookShelf( bookState ,book);
  }

  render() {
    const { books } = { ...this.props };
    return (
      <div className="list-books-content">
        <div className="list-books-content">
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => {
                const shelf = this.getShelf(book.shelf);
                return (
                  <li key={book.bookId}>
                    <Book
                      book={book}
                      shelfName = {shelf}
                     // authors={this.getAuthorsByID(book.authors)}
                      onUpdateBookShelf = {this.onUpdateBookShelf}
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
