import React from "react";
import "./../../css/App.css";
import Book from "./../book/Book";
import { Link } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    let books = this.props.bookShelf;

    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf == "currentlyReading")
                      .map(book => (
                        <Book
                          book={book}
                          changeBookStatus={(value, book) =>
                            this.props.changeBookStatus(value, book)
                          }
                        />
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf == "wantToRead")
                      .map(book => (
                        <Book
                          book={book}
                          changeBookStatus={(value, book) =>
                            this.props.changeBookStatus(value, book)
                          }
                        />
                      ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf == "read")
                      .map(book => (
                        <Book
                          book={book}
                          changeBookStatus={(value, book) =>
                            this.props.changeBookStatus(value, book)
                          }
                        />
                      ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
