import React, {Component} from 'react'
import './App.css'
import Shelf from './Shelf.js';
import {Link, Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {
    state={
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: [],
    }

    componentDidMount() {
        const currentlyRead = [];
        const want = [];
        const readarr = [];
        BooksAPI.getAll()
            .then((books)=>{
                books.map((book)=> {
                    switch (book.shelf) {
                        case "currentlyReading":
                            currentlyRead.push(book);
                            break;
                        case"wantToRead":
                            want.push(book);
                            break;
                        case"read":
                            readarr.push(book);
                            break;
                    }
                })
                this.setState(()=>({
                        books: books,
                        currentlyReading: currentlyRead,
                        wantToRead: want,
                        read: readarr
                    }
                ))})}

    moveBook = (book, value) => {
        console.log("book equals", book, "value equals", book.shelf);

        // this.setState((prevState)=>({
        //         [book.shelf]: prevState[book.shelf].concat([book]),
        //     }
        // ))
    }


    componentDidUpdate(prevProps, prevState, snapshot){
        // if(this.state !== prevState){
        //     const currentlyRead = [];
        //     const want = [];
        //     const readarr = [];
        //     BooksAPI.getAll()
        //         .then((books)=>{
        //             books.map((book)=> {
        //                 switch (book.shelf) {
        //                     case "currentlyReading":
        //                         currentlyRead.push(book);
        //                         break;
        //                     case"wantToRead":
        //                         want.push(book);
        //                         break;
        //                     case"read":
        //                         readarr.push(book);
        //                         break;
        //                 }
        //             })
        //             this.setState(()=>({
        //                     books: books,
        //                     currentlyReading: currentlyRead,
        //                     wantToRead: want,
        //                     read: readarr
        //                 }
        //             ))})}
                    }


    render() {
        const {books, currentlyReading, read, wantToRead} = this.state
        console.log(currentlyReading)

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
                <Shelf books={currentlyReading} shelf={"currentlyReading"} title={"Currently Reading"} onMove={this.moveBook}/>
                <Shelf books={wantToRead} shelf={"wantToRead"} title={"Want To Read"} onMove={this.moveBook}/>
                <Shelf books={read} shelf={"read"} title={"Read"} onMove={this.moveBook}/>
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
