import React from 'react'
import './App.css'
import SearchPage from './searchPage'
import ListBooks from './ListBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
          <Route path='/search' component={SearchPage}/>
          <Route exact path='/' component={ListBooks}/>
      </div>
    )
  }
}

export default BooksApp
