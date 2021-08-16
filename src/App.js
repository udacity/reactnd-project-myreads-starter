import React, {Component} from 'react'
import './App.css'
import Shelf from './Shelf.js';
import {Link, Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {
    state={
        books: [],
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books)=>
                this.setState(()=>({
                books: books}
                )
             ))}

    updateBook=(book, shelf)=>{
        BooksAPI.update(book, shelf)
            .then()
        BooksAPI.getAll()
            .then((books)=>
                this.setState(()=>({
                            books: books}
                    )
                ))
    }


    render() {

        const {books} = this.state

    return (

        <div className='app'>

          <Route path ='/search' render={ ({history})=> (

              <SearchBooks
                  onUpdateBook={(book, shelf)=>{
                      this.updateBook(book,shelf)
                      history.push('/')}
                  }
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
                      <Shelf books={books.filter((book)=> book.shelf === "currentlyReading")} title={"Currently Reading"} shelf={"currentlyReading"}
                             onUpdateBook={this.updateBook}/>
                      <Shelf books={books.filter((book)=> book.shelf === "wantToRead")} title={"Want To Read"} shelf = {"wantToRead"}
                             onUpdateBook={this.updateBook}/>
                      <Shelf books={books.filter((book)=> book.shelf === "read")} title={"Read"} shelf={"read"}
                             onUpdateBook={this.updateBook}/>


                  </div>
              </div>
          <div className="open-search">
              <Link to='/search'>
                  <button>Add a book</button>
                </Link>
                </div>
      </div>
      </div>
                )} />

        </div>
    )
  }
}

export default BooksApp
