import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './components/BooksCurrentlyReading'
import Read from './components/BooksRead'
import SearchPage from './components/SearchPage'
import WantToRead from './components/BooksWantToRead'
import { Link, Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import * as Callbacks from './components/Callbacks';
class BooksApp extends React.Component {
  constructor(props) {

    super(props);

    this.bookShelfTitle = ['Currently Reading', 'Want to Read', 'Read']
    this.shelfCategory = ['currentlyReading', 'wantToRead', 'read']

    this.state = {
      books: [],
      queryText: '',
      bookShelf: {
        currentlyReading: [],
        wantToRead: [],
        read: [],
      }
    }
    
  }

  componentDidMount = () => {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books: [books]
      }))
      this.categorizeBooks(this.state.books)
    })
  }

  /**
   * Categorizes all books into the three (3) categories of;
   * `1. currentlyReading`
   * `2. wantToRead` and 
   * `3. read`
   * and set the respective state to the appropriate data
   * @param {*} booksData 
   */
  categorizeBooks = (booksData) => {
    for (const bookData of booksData) {
      Object.keys(bookData).filter((index) => {

        // filter only books `currentlyReadign` category
        if(bookData[index].shelf === this.shelfCategory[0]){
          this.setState(currentState => ({
            bookShelf:{
              ...currentState.bookShelf,
              currentlyReading: [...currentState.bookShelf.currentlyReading, bookData[index]]
            }
          }))
        } 

        // filter only books `wantToRead` category
        if(bookData[index].shelf === this.shelfCategory[1]){
          this.setState((currentState) => ({
            bookShelf: {
              ...currentState.bookShelf,
              wantToRead: [...currentState.bookShelf.wantToRead, bookData[index]]
            }
          }))
        } 

        // filter books by those have been `read` category
        if(bookData[index].shelf === this.shelfCategory[2]) {
          this.setState((currentState) => ({
            bookShelf: {
              ...currentState.bookShelf,
              read: [...currentState.bookShelf.read, bookData[index]]
            }
          }))
        }
        return null
      })
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchPage
            books={this.state.books} />
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading 
                  bookshelfTitle={this.bookShelfTitle[0]}
                  books={this.state.bookShelf.currentlyReading} 
                />
                <WantToRead 
                  bookShelfTitle={this.bookShelfTitle[1]}
                  books={this.state.bookShelf.wantToRead}
                />
                <Read 
                  bookShelfTitle={this.bookShelfTitle[2]}
                  books={this.state.bookShelf.read}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
