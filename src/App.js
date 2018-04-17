import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import HomePage from './Home'
import SearchPage from './Search'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/search' component={SearchPage} />
        </Switch>
    )
  }
}

export default BooksApp;
