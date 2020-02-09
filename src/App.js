import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelfs from './Shelfs'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchMain from './SearchMain'

class BooksApp extends React.Component {
  state = {


    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        })
        )
      })
  }
  groupBy(objeectArray, property) {
    return objeectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  }

  shelfNames = {
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want To Read',
    'read': 'Read'
  }

  addNewBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((bookResponse) => {
        book.shelf = shelf
        let newBooks = this.state.books.concat([book])
        this.setState({
          books: newBooks
        })
      })
  }

  changeSelf = (bookItem, shelfId) => {
    let { books } = this.state;
    let isNewBook = true;
    let newBooks = books.map(book => {
      if (book.id === bookItem.id) {
        book.shelf = shelfId;
        isNewBook = false; //is not a new book wee found it on the shelfs
      }
      return book;
    })
    if (isNewBook) {
      this.addNewBook(bookItem, shelfId)
    } else {
      BooksAPI.update(bookItem, shelfId).then((bookResponse) => {
        this.setState({
          books: newBooks
        })
      })
    }
  }

  //<div> {shelves }</div>
  render() {

    const groupedBooks = this.groupBy(this.state.books, 'shelf');

    const shelves = Object.keys(groupedBooks).map(key => {

      return (
        <Shelfs
          key={key}
          shelfKey={key}
          shelfNames={this.shelfNames[key]}
          bookList={groupedBooks[key]}
          allBooks={this.state.books}
          changeSelf={this.changeSelf}
        />



      )
    });


    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {shelves}
            </div>

            <div className="open-search">

              <Link className="button"
                to='/search'>
                <button type="button">
                  Add Book
              </button></Link>
            </div>
          </div>
        )} />
        <Route exact path='/search' render={(props) => (
          <SearchMain {...props}
            addBookToShelf={this.changeSelf}
            allBooks={this.state.books}
          />

        )} />

      </div>
    )
  }
}

export default BooksApp
