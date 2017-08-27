import React from 'react'
import {Switch,Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from'./ListBooks'
import AddBook from './AddBook'
import EmptyPage from './EmptyPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
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
        <Switch>
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
          <Route  render={({history}) =>(
            <EmptyPage

            />
          )}/>
        </Switch>
      </div>

    )
  }
}

export default BooksApp
