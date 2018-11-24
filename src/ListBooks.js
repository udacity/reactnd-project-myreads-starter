import React, {Component} from 'react';
import './App.css'
import Book from './Book'
import BookShelfChanger from './BookShelfChanger'
import AddBook from './AddBook'

class SearchBooks extends Component {

  render() {
    const bookshelf_title = [
      'Currently Reading',
      'Want to Read',
      'Read'
    ];

    const books = [
      {
        id: 0,
        backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
        title: 'To Kill a Mockingbird',
        authors: 'Harper Lee',
        bookshelf_title: 'Currently Reading'
      },
      {
        id: 1,
        backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
        title: "Ender's Game",
        authors: 'Orson Scott Card',
        bookshelf_title: 'Currently Reading'
      },
      {
        id: 2,
        backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
        title: '1776',
        authors: 'David McCullough',
        bookshelf_title: 'Want to Read'
      },
      {
        id: 3,
        backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
        title: "Harry Potter and the Sorcerer's Stone",
        authors: 'J.K. Rowling',
        bookshelf_title: 'Want to Read'
      },
      {
        id: 4,
        backgroundImage: 'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
        title: 'The Hobbit',
        authors: 'J.R.R. Tolkien',
        bookshelf_title: 'Read'
      },
      {
        id: 5,
        backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
        title: "Oh, the Places You'll Go!",
        authors: 'Seuss',
        bookshelf_title: 'Read'
      },
      {
        id: 6,
        backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
        title: 'The Adventures of Tom Sawyer',
        authors: 'Mark Twain',
        bookshelf_title: 'Read'
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelf_title[0]}</h2>
              <div className="bookshelf-books">
                <Book bookshelf_title='Currently Reading'/>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelf_title[1]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: books[2].backgroundImage}}></div>
                        <BookShelfChanger/>
                      </div>
                      <div className="book-title">{books[2].title}</div>
                      <div className="book-authors">{books[2].authors}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: books[3].backgroundImage }}></div>
                        <BookShelfChanger/>
                      </div>
                      <div className="book-title">{books[3].title}</div>
                      <div className="book-authors">{books[3].authors}</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{bookshelf_title[2]}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: books[4].backgroundImage }}></div>
                        <BookShelfChanger/>
                      </div>
                      <div className="book-title">{books[4].title}</div>
                      <div className="book-authors">{books[4].authors}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: books[5].backgroundImage }}></div>
                        <BookShelfChanger/>
                      </div>
                      <div className="book-title">{books[5].title}</div>
                      <div className="book-authors">{books[5].authors}</div>
                    </div>
                  </li>
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: books[6].backgroundImage }}></div>
                        <BookShelfChanger/>
                      </div>
                      <div className="book-title">{books[6].title}</div>
                      <div className="book-authors">{books[6].authors}</div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <AddBook/>
      </div>
    )
  }
}

export default SearchBooks
