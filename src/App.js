import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Book from "./book/Book";
import { Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: [
      {
        id: 1,
        status: "currentlyReading",
        bookTitle: "To kill a mockingbird",
        bookAuthors: "Harper Lee",
        bookImage:
          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
      },
      {
        id: 2,
        status: "currentlyReading",
        bookTitle: "Ender's Game",
        bookAuthors: "Orson Scott Card",
        bookImage:
          "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
      },
      {
        id: 3,
        status: "wantToRead",
        bookTitle: "1776",
        bookAuthors: "McCullough",
        bookImage:
          "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
      },
      {
        id: 4,
        status: "wantToRead",
        bookTitle: "Harry Potter and the Sorcerer's Stone",
        bookAuthors: "J. K. Rowling",
        bookImage:
          "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
      },
      {
        id: 5,
        status: "read",
        bookTitle: "The Hobbit",
        bookAuthors: "J.r.r Tolkien",
        bookImage:
          "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
      },
      {
        id: 6,
        status: "read",
        bookTitle: "Oh, places You'll Go!",
        bookAuthors: "Seuss",
        bookImage:
          "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
      },
      {
        id: 7,
        status: "read",
        bookTitle: "The Adventures of Tom Sawyer",
        bookAuthors: "Mark Twain",
        bookImage:
          "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
      }
    ]
  };

  onBookChanged = (value, id) => {
    console.log("I'm app, and the value is:" + value);
    console.log("I'm app, and the id is:" + id);
    debugger;
    // this.state.allBooks.filter(book => book.id == id)[0].status = value;
    this.setState(state => {
      return (state.allBooks.filter(book => book.id === id)[0].status = value);
    });
  };

  render() {
    let books = this.state.allBooks;

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
                        .filter(value => value.status == "currentlyReading")
                        .map(book => (
                          <Book
                            bookId={book.id}
                            bookTitle={book.bookTitle}
                            bookAuthors={book.bookAuthors}
                            bookImage={book.bookImage}
                            changeBookStatus={(value, id) =>
                              this.onBookChanged(value, id)
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
                        .filter(value => value.status == "wantToRead")
                        .map(book => (
                          <Book
                            bookId={book.id}
                            bookTitle={book.bookTitle}
                            bookAuthors={book.bookAuthors}
                            bookImage={book.bookImage}
                            changeBookStatus={(value, id) =>
                              this.onBookChanged(value, id)
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
                        .filter(value => value.status == "read")
                        .map(book => (
                          <Book
                            bookId={book.id}
                            bookTitle={book.bookTitle}
                            bookAuthors={book.bookAuthors}
                            bookImage={book.bookImage}
                            changeBookStatus={(value, id) =>
                              this.onBookChanged(value, id)
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
