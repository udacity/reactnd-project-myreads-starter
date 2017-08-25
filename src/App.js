import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from'./ListBooks'
import AddBook from './AddBook'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>
      this.setState({ books }))
  }

  updateShelf = (selectedShelf,selectedBook) =>{
    BooksAPI.update(selectedBook,selectedShelf)
    const newArray = this.state.books.filter((c) => c.title !== selectedBook.title);
    const newBook = selectedBook;
    newBook.shelf = selectedShelf;
      this.setState((state) => ({
      books: [...newArray,newBook]
    }))
  }

  addBook = (selectedShelf,selectedBook) =>{
    selectedBook.shelf = selectedShelf
    BooksAPI.update(selectedBook,selectedShelf)
    const newArray = this.state.books.filter((c) => c.title !== selectedBook.title)

      this.setState((state) => ({
      books: [...newArray,selectedBook]
    }))
  }



  render() {
    return (
      <div>
        <Route path="/" exact render={() =>(
          <ListBooks
            onUpdateShelf={this.updateShelf}
            books = {this.state.books}
          />
        )}/>
        <Route path="/search" render={({history}) =>(
          <AddBook
            onAddBook={this.addBook}
            books = {this.state.books}

            />
          )}/>
      </div>

    )
  }
}

export default BooksApp
