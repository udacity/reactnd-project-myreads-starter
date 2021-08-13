import React, {Component} from 'react'
import './App.css'
import Shelf from './Shelf.js';
import {Link, Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {

    render() {
    return (

        <div className='app'>

          <Route path ='/search' render={ ({history})=> (

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
                <Shelf shelf={"currentlyReading"} title={"Currently Reading"}/>
                <Shelf shelf={"wantToRead"} title={"Want To Read"}/>
                <Shelf shelf={"read"} title={"Read"}/>
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
