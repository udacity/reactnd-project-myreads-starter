import React from 'react'
import BooksList from './Components/BooksList'
import Search from './Components/Search'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

export default class App extends React.Component {
  state = {
    books: [],
    currentlyReading: null,
    wantToRead: null,
    read: null,
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      }).then(() => {
        this.setState({
          currentlyReading: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'currentlyReading'
          )),
          read: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'read'
          )),
          wantToRead: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'wantToRead'
          ))
        })
      }).then(() => {
        console.log(this.state)
      })
  }

render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BooksList
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search
          books={this.state.books}
          />
        )} />
      </div>
    )
  }
}
