import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './searchPage'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [
            {
                title: 'Currently Reading',
                id: 'currentlyReading'
            },
            {
                title: 'Want to Read',
                id: 'wantToRead'
            },
            {
                title: 'Read',
                id: 'read'
            }
      ]
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchPage}/>
          <Route exact path='/' render={() => (
            <ListBooks books={this.state.books} shelves={this.state.shelves}/>
          )}/>
      </div>
    )
  }
}

export default BooksApp
