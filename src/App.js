import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

// Components
import Currently from './Components/Currently';
import Read from './Components/Read';
import WantTo from './Components/WantTo';


class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: null,
    wantToRead: null,
    read: null,
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      }).then(() => {
        this.setState({
          currentlyReading: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'currentlyReading'
          )),
          read: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'read'
          )),
          wantToRead: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'wantToRead'
          ))
        })
      }).then(() => {
        console.log(this.state)
      })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() =>
        BooksAPI.getAll()
        .then((books) => {
          this.setState(() => ({
            books
          }))
        }).then(() => {
          this.setState({
            currentlyReading: Object.values(this.state.books).filter((smoke) => (
              smoke.shelf === 'currentlyReading'
            )),
            read: Object.values(this.state.books).filter((smoke) => (
              smoke.shelf === 'read'
            )),
            wantToRead: Object.values(this.state.books).filter((smoke) => (
              smoke.shelf === 'wantToRead'
            ))
          })
        })
      )
  }

  render() {
    const readBooks = this.state.read && this.state.read.map((daBooks, index) => {
     return <Read key={index} updateShelf={this.changeShelf} myBook={daBooks} />
    })

    const wantToReadBooks = this.state.wantToRead && this.state.wantToRead.map((daBooks, index) => {
      return <WantTo key={index} updateShelf={this.changeShelf} myBook={daBooks} />
     })

    const currentlyReading = this.state.currentlyReading && this.state.currentlyReading.map((daBooks, index) => {
      return <Currently key={index} updateShelf={this.changeShelf} myBook={daBooks} />
     })


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
            {currentlyReading}
            </ol>
                </div>
                </div>
                <div className="bookshelf">
        <h2 className="bookshelf-title">Want To Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {wantToReadBooks}
                </ol>
                </div>
                </div>
                <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
                {readBooks}
                </ol>
                </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
