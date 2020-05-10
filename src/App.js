import React from 'react'
import BooksList from './Components/BooksList'
import Search from './Components/Search'
import './App.css'
import { Route,Switch } from 'react-router-dom'
import NoMatch from './Components/NoMatch'

export default class App extends React.Component {
  state = {
    books: [],
    currentlyReading: null,
    wantToRead: null,
    read: null,
    showSearchPage: false
  }


render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' render={() => (
          <BooksList
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search
          books={this.state.books}
          />
        )} />
        <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
