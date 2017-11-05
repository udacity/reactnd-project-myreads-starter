import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books});
      console.log(books);
    })
  }

  render() {
    return (
      <div className="app">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-stabooksrter/blob/master/SEARCH_TERMS.md

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
          <div>
            <Bookshelf books={this.state.books} shelf="read"/>
            <Bookshelf books={this.state.books} shelf="wantToRead"/>
            <Bookshelf books={this.state.books} shelf="currentlyReading"/>
          </div>
        )}
      </div>


    )
  }
}

export default BooksApp
