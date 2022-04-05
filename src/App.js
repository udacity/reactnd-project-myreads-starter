import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookSearch from "./BookSearch";
import BookList from "./BookList";
import * as BooksAPI from "./BooksAPI";


class BooksApp extends Component {
  state = {
      bookList: []
  }
  componentDidMount() {
    BooksAPI.getAll()
        .then(
            bookList => this.setState(
                () => (
                    {bookList}
                )
            )
        )
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={() =>
            <BookList bookList={this.state.bookList}/>
          } />
        <Route path='/search' render={() =>
            <BookSearch />
          } />
      </div>
    )
  }
}

export default BooksApp
