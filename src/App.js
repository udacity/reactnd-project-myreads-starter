import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import HomePage from './Home'
import SearchPage from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksState: {currentlyReading: [], read: [], wantToRead: []}
  }

  updateBookState(states) {
    this.setState({
        booksState: states
    })   
  }

  render() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} updateBookState={this.updateBookState.bind(this)}/>
            <Route path='/search' component={SearchPage} booksState={this.state.booksState}/>
        </Switch>
    )
  }
}

export default BooksApp;
