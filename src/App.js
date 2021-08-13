import React, {Component} from 'react'
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

        <div className='app'>

          <Route path ='/search' render={ ()=> (

              <SearchBooks
              />
          )} />

            <Route exact path='/' render={ ()=> (
      <div>
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf books={this.state.books} shelf={"currentlyReading"} title={"Currently Reading"}/>
                <Shelf books={this.state.books} shelf={"wantToRead"} title={"Want To Read"}/>
                <Shelf books={this.state.books} shelf={"read"} title={"Read"}/>
          </div>
      </div>
        </div>
          <div className="open-search">
              <Link to='/search'>
                  <button>Add a book</button>
                </Link>
                </div>
      </div>
                )} />

        </div>
    )
  }
}

export default BooksApp
