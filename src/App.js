import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false,
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  update = (id,newShelf) => {
    for(let book of this.state.books){
      if(book.id === id) book.shelf = newShelf;
    }
    this.setState({
      books: this.state.books
    });
  }

  componentDidMount = () => {
    this.getBooks();
  }

  render() {
    const books = this.state.books;

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
          books.length > 0 ?
            <div className='shelfs'>
              <Bookshelf
                shelf='read'
                books={books.filter(book=>book.shelf === 'read')}
                updateBooksInShelf={this.update}/>
              <Bookshelf
                shelf="wantToRead"
                books={books.filter(book=>book.shelf === 'wantToRead')}
                updateBooksInShelf={this.update}
              />
              <Bookshelf
                shelf="currentlyReading"
                books={books.filter(book=>book.shelf === 'currentlyReading')}
                updateBooksInShelf={this.update}
              />
            </div>:
            <div className='loading'>Loading...</div>
        )}
      </div>


    )
  }
}

export default BooksApp
