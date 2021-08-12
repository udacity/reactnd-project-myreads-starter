import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf.js';
import {Link, Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {
  state={
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
        .then((books)=>{
          this.setState(()=>({
                    books
                  }
              )
          )
        })
  }


  render() {
    return (
        <div>
          <Route exact path ='/search' render={ ()=> (
              <SearchBooks
                        books={this.state.books}
                           // onSearchBooks={}
              />
          )} >

          </Route>

            <Route path='/'>
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books={this.state.books} shelf={"currentlyReading"}/>
                <Shelf books={this.state.books} shelf={"wantToRead"}/>
                <Shelf books={this.state.books} shelf={"read"}/>
          </div>
      </div>
        </div>
      </div>
            </Route>
            <div className="open-search">
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
  }
}

export default BooksApp
