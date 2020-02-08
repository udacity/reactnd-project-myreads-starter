import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelfs from './Shelfs'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BookItem from './BookItem'

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
  changeSelf = (book, shelfId) => {
    let {books} = this.state;
    console.log('shelf change : ' + book.title + " / " + shelfId)

    let newBooks= books.map(oldBook =>{
      if (oldBook.id === book.id) {
        oldBook.shelf = shelfId;
      }
      return oldBook
    })
    console.log("new books")
    console.log(newBooks)

    BooksAPI.update(book,shelfId).then((bookResponse) =>{
      this.setState({
        books:newBooks
      })
    })
  }

  //<div> {shelves }</div>
  render() {
    console.log("My message")
    console.log(this.state.books)

    const groupedBooks = this.groupBy(this.state.books, 'shelf');
    console.log("goobed books")
    console.log(groupedBooks);

    const shelves = Object.keys(groupedBooks).map(key => {

      return (
        <Shelfs shelfKey={key}
          shelfNames={this.shelfNames[key]}
          bookList={groupedBooks[key]}
          allBooks={this.state.books}
          changeSelf = {this.changeSelf}
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
        <Route path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
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
              <ol className="books-grid"></ol>
            </div>
          </div>

        )} />

      </div>
    )
  }
}

export default BooksApp
