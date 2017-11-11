import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import If from './If';


class BooksApp extends React.Component {
  state = {
    query: '',
    showSearchPage: false,
    books: [],
    queryBooks: []
  }

  /*get all the books currently in
   any bookshelf*/
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  //Search for the books when input is given
  searchForBooks = (evt,history) => {
    const query = evt.target.value;

    this.setState((prev) => {
      if(prev.query.length > 0 && query.length === 0)
        history.push('/');
      return {query};
    })

    if(!query || query.length === 0)return;
    BooksAPI.search(query,20).then(
      (queryBooks) => {
        if(queryBooks.items <= 0 ){
          this.setState({ queryBooks:[]});
          return;
        }

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

  /*Refresh the books on search after moving
  a book to a different shelf*/
  refreshSearchPageContent = (id,newShelf) => {
    this.setState(function() {
      let shelfBook = this.state.books.find(b => b.id === id);
      let queryBook = this.state.queryBooks.find(b => b.id === id);

      if(shelfBook) shelfBook.shelf = newShelf;
      if(queryBook) queryBook.shelf = newShelf;
    })
  }

  /*Update the content of the bookshelf
  after a books moving betwen bookshelfs */
  refreshBookshelfs = (id,newShelf) => {
    this.setState(function(){
      for(let book of this.state.books){
        if(book.id === id) book.shelf = newShelf;
      }
    })

  }

  submit = function(evt){
    evt.preventDefault();
    alert('it works!');
  }

  componentDidMount = () => {
    this.getBooks();
  }

  render() {
    const books = this.state.books;
    return (
      <div className="app">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <a href="/" className="navbar-brand">MyReads</a>

          <div className="navbar-collapse collapse justify-content-stretch" id="navbar5">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="https://github.com/victorl2/reactnd-project-myreads-starter">
                  Github
                </a>
              </li>
            </ul>
            <form className="ml-3 my-auto d-inline w-100">
              <div className="input-group">

                <Route path="/" render={({history}) => (
                  <input type="text"
                    className="form-control border-right-0"
                    placeholder="Search by title or author"
                    onSubmit={(evt) => {
                      evt.preventDefault();
                      return false;
                    }}
                    onChange={(evt) => {
                      history.push('/search');
                      this.searchForBooks(evt,history);
                    }}
                    value={this.state.query}
                  />
                )}
                />

                <span className="input-group-btn">
                  <button className="btn btn-outline-primary border-left-0" type="button">GO</button>
                </span>
              </div>
            </form>
          </div>
        </nav>


        <Route exact path="/search" render={() => (
          <If test={this.state.queryBooks.length > 0}
            main={
              <div className="search-books">
                <Bookshelf
                  books={this.state.queryBooks}
                  updateBooksInShelf={this.refreshSearchPageContent}
                />
              </div>
            }
            secondary={
              <div className="alert alert-warning" role="alert">
                {this.state.query !== ''?
                `No results for the query ${this.state.query}`:
                'No results'}
              </div>
            }
          />
        )}/>


        <Route exact path="/" render={() => (
          <If test={books && books.length > 0}
            main={
              <div className='shelfs'>

                <Bookshelf
                  title="Currently Reading"
                  shelf="currentlyReading"
                  books={books.filter(book=>book.shelf === 'currentlyReading')}
                  updateBooksInShelf={this.refreshBookshelfs}
                />

                <Bookshelf
                  title="Want to Read"
                  shelf="wantToRead"
                  books={books.filter(book=>book.shelf === 'wantToRead')}
                  updateBooksInShelf={this.refreshBookshelfs}
                />
                <Bookshelf
                  title="Read"
                  shelf='read'
                  books={books.filter(book=>book.shelf === 'read')}
                  updateBooksInShelf={this.refreshBookshelfs}/>

                <div className="open-search">
                  <Link
                    to="/search"
                    onClick={() =>
                      this.setState({ query: '',queryBooks:[] })}
                  >Add a book</Link>
                </div>
              </div>
            }
            secondary={
              <div className='loading'>Loading...</div>
            }
          />
        )}/>
      </div>
  )}
}

export default BooksApp
