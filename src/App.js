import React, {Component} from 'react'
import './App.css'
import Shelf from './Shelf.js';
import {Link, Route} from 'react-router-dom';
import SearchBooks from "./SearchBooks";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {

    state={
        currentlyReading: [],
        wantToRead: [],
        read: [],
    }

    componentDidMount(){
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
                        currentlyReading: currentlyRead,
                        wantToRead: want,
                        read: readarr
                    }
                ))})}



    render() {

        const shelves =[
            {books: this.state.currentlyReading, title:"Currently Reading"},
            {books: this.state.wantToRead, title: "Want To Read"},
            {books: this.state.read, title: "Read"}
        ];

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
                      {shelves.map((shelf, index)=>(
                          <Shelf books={shelf.books} title={shelf.title} key={index}/>)
                      )}

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
