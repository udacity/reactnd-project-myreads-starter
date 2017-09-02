import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'


import './App.css'

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

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      //console.log('got books', books)
    })
  }

  updateCategory = (book, category) => {
    let shelfMove = this.state.books[book.shelf]
    console.log(shelfMove, category)
    console.log('updateCategory Fired')
    this.setState({books: shelfMove.shelf = category})
    console.log(this.state.books)
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>James Reads</h1>
            </div>
            <ListBooks 
              shelfName="Currently Reading" 
              availableBooks={this.state.books.filter((books) => books.shelf === 'currentlyReading')}
              update={this.updateCategory}
            />
            <ListBooks 
              shelfName="Want to Read" 
              availableBooks={this.state.books.filter((books) => books.shelf === 'wantToRead')}
              update={this.updateCategory}
            />
            <ListBooks 
              shelfName="Read" 
              availableBooks={this.state.books.filter((books) => books.shelf === 'read')}
              update={this.updateCategory}
            />

            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
