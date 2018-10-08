import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import Book from "./Book";
import BookShelf from "./BookShelf";
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    currentlyReading: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image:
          'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        image:
          'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
      }
    ],
    wantToRead: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image:
          'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        image:
          'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
      }
    ],
    read: [
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image:
          'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")'
      },
      {
        title: "Oh, the Places You'll Go!",
        author: "Seuss",
        image:
          'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")'
      },
      {
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        image:
          'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")'
      }
    ]
  };

  handleBookShelfChange(bookName, fromBookShelf, toBookShelf) {
    const {
      [fromBookShelf]: fromBookShelfData,
      [toBookShelf]: toBookShelfData
    } = this.state;
    let bookIndex,
      foundBook,
      newFromBookShelfData = fromBookShelfData,
      newToBookShelfData = toBookShelfData;
    for (let index = 0; index < fromBookShelfData.length; index++) {
      const book = fromBookShelfData[index];
      if (bookName == book.title) {
        bookIndex = index;
        foundBook = book;
        break;
      }
    }

    if (bookIndex >= 0 && foundBook) {
      newFromBookShelfData = [
        ...fromBookShelfData.slice(0, bookIndex),
        ...fromBookShelfData.slice(bookIndex + 1)
      ];

      newToBookShelfData = [...toBookShelfData, foundBook];
    }

    this.setState({
      [fromBookShelf]: newFromBookShelfData,
      [toBookShelf]: newToBookShelfData
    });
  }

  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid" />
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  name="currentlyReading"
                  onBookShelfChange={(bookName, fromBookShelf, toBookShelf) =>
                    this.handleBookShelfChange(
                      bookName,
                      fromBookShelf,
                      toBookShelf
                    )
                  }
                  books={currentlyReading}
                  shelftitle="Currently Reading"
                />
                <BookShelf
                  onBookShelfChange={(bookName, fromBookShelf, toBookShelf) =>
                    this.handleBookShelfChange(
                      bookName,
                      fromBookShelf,
                      toBookShelf
                    )
                  }
                  name="wantToRead"
                  books={wantToRead}
                  shelftitle="Want to Read"
                />
                <BookShelf
                  onBookShelfChange={(bookName, fromBookShelf, toBookShelf) =>
                    this.handleBookShelfChange(
                      bookName,
                      fromBookShelf,
                      toBookShelf
                    )
                  }
                  name="read"
                  books={read}
                  shelftitle="Read"
                />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
