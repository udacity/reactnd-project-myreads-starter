import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    query: '',
    showSearchPage: false,
    books: [],
    queryBooks: []
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }


  updateSearchValues = (evt,query='') => {
    if(query ===''){
      query = evt.target.value;
      this.setState({query});
    }

    BooksAPI.search(query,20).then(
      (queryBooks) => {
        queryBooks.map(qbook => {
          qbook.shelf = 'none';
          for(const book of this.state.books){
            if(qbook.id === book.id){
              qbook.shelf = book.shelf;
              break;
            }
          }
          return qbook;
        });
        this.setState({ queryBooks });
      }
    )
  }

  refreshSearchPageContent = (id,newShelf) => {
    let shelfBook = this.state.books.find(b => b.id === id);
    let queryBook = this.state.queryBooks.find(b => b.id === id);

    if(shelfBook) shelfBook.shelf = newShelf;
    if(queryBook) queryBook.shelf = newShelf;

    this.forceUpdate();
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
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => {
                this.setState({ showSearchPage: false});
                this.getBooks();
              }}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-stabooksrter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input
                  value={this.state.query}
                  type="text"
                  placeholder="Search by title or author"
                  onChange={this.updateSearchValues}
                />
              </div>
            </div>
            <div className="search-books-results">
              <Bookshelf
                books={this.state.queryBooks}
                updateBooksInShelf={this.refreshSearchPageContent}
              />
            </div>
          </div>
        ) : (
          books ?
            <div className='shelfs'>
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Bookshelf
                title="Currently Reading"
                shelf="currentlyReading"
                books={books.filter(book=>book.shelf === 'currentlyReading')}
                updateBooksInShelf={this.update}
              />

              <Bookshelf
                title="Want to Read"
                shelf="wantToRead"
                books={books.filter(book=>book.shelf === 'wantToRead')}
                updateBooksInShelf={this.update}
              />
              <Bookshelf
                title="Read"
                shelf='read'
                books={books.filter(book=>book.shelf === 'read')}
                updateBooksInShelf={this.update}/>

              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true, query: '',queryBooks:[] })}>Add a book</a>
              </div>
            </div>:
            <div className='loading'>Loading...</div>
        )}
      </div>


    )
  }
}

export default BooksApp
