import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from'./ListBooks'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [{
              title: 'To Kill a Mockingbird',
              author: 'Harper Lee',
              width: 128,
              height: 193,
              coverURL: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
              shelf: 'current'}, //current or marked or read
            {
              title: '1776',
              author: 'David McCullough',
              width: 128,
              height: 193,
              coverURL: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
              shelf: 'marked'},
            {
              title: "Harry Potter and the Sorcerer's Stone",
              author: 'J.K. Rowling',
              width: 128,
              height: 193,
              coverURL: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
              shelf: 'marked'},
            {
              title: 'The Hobbit',
              author: 'J.R.R Tolkien',
              width: 128,
              height: 193,
              coverURL: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
              shelf: 'read'},
            {
              title: "Oh, the Places You'll Go!",
              author: 'Seuss',
              width: 128,
              height: 193,
              coverURL: "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
              shelf: 'read'},
            {
              title: 'The adventures of Tom Sawyer',
              author: 'Mark Twain',
              width: 128,
              height: 193,
              coverURL: "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
              shelf: 'read'}
          ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  updateShelf = (selectedShelf,selectedBook) =>{
    const newArray = this.state.books.filter((c) => c.title !== selectedBook.title)
    const newBook = selectedBook;
    newBook.shelf = selectedShelf;
      this.setState((state) => ({
      books: [...newArray,newBook]
  }))

}

  render() {
    return (
      <div>
        <Route path="/" exact render={() =>(
          <ListBooks
            onUpdateShelf={this.updateShelf}
            books = {this.state.books}
          />
        )}/>
        <Route path="/search" render={({history}) =>(
          <AddBook
            />
          )}/>
      </div>

    )
  }
}

export default BooksApp
