import React from 'react'
import { Route, Link } from 'react-router-dom'
import BookShelf from './components/BookShelf'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    Books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({Books: books})
    });
  }

  changeBookShelf = (e) => {
    console.log(e);
    BooksAPI.update({id: e.target.id}, e.target.value).then((response) => {
       BooksAPI.getAll().then((books) => {
        this.setState({Books: books})
      });
    });
  }


  render() {

    const { Books } = this.state;

    return (
      <div className="app">

          <Route path='/' exact render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf shelfName='Currently Reading' books={Books.filter((book) => book.shelf === 'currentlyReading')} changeBookShelf={this.changeBookShelf} />
                  <BookShelf shelfName='Want to Read' books={Books.filter((book) => book.shelf === 'wantToRead')} changeBookShelf={this.changeBookShelf} />
                  <BookShelf shelfName='Read' books={Books.filter((book) => book.shelf === 'read')} changeBookShelf={this.changeBookShelf} />
                </div>
              </div>

              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>

            </div>
          )} />

          <Route path='/search' exact render={( {history} ) => (
            <SearchBooks onSelectShelf={(e) => {
                this.changeBookShelf(e)
                /* to redirect to list page after adding contact */
                history.push('/')
              }}
             />
          )} />

      </div>
    )
  }
}

export default BooksApp
