import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import CurrentlyReading from './components/CurrentlyReading'
import Read from './components/Read'
import SearchPage from './components/SearchPage'
import WantToRead from './components/WantToRead'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.bookShelfTitle = ['Currently Reading', 'Want to Read', 'Read']
  }
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading bookshelfTitle={this.bookShelfTitle[0]} />
                <WantToRead bookShelfTitle={this.bookShelfTitle[1]} />
                <Read bookShelfTitle={this.bookShelfTitle[2]} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
