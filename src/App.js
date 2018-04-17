import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import ListCurrentlyReadingBooks from './ListCurrentlyReadingBooks';
import ListWantToReadBooks from './ListWantToReadBooks';
import ListReadBooks from './ListReadBooks';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //TODO: Move the book from One Category to the other
      showSearchPage: false,
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: []
  };

  componentDidMount() {
      BooksAPI.getAll().then((books) => {
          this.setState({books: books})
          //categorizing the books pulled from the server
          books.map((book) => {
              console.log(book);
              if(book.shelf === "currentlyReading"){
                  this.setState({
                      currentlyReading: this.state.currentlyReading.concat([book])
                  });
              }
              if(book.shelf === "wantToRead"){
                  this.setState({
                      wantToRead: this.state.wantToRead.concat([book])
                  });
              }
              if(book.shelf === "read"){
                  this.setState({
                      read: this.state.read.concat([book])
                  });
              }
          })
      });
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
              <h1>MyReads</h1>
            </div>
              <ListCurrentlyReadingBooks currentlyReadingBooks={this.state.currentlyReading}/>
              <ListWantToReadBooks wantToReadBooks={this.state.wantToRead}/>
              <ListReadBooks readBooks={this.state.read}/>
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
