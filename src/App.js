import React from 'react'
import BooksList from './Components/BooksList'
import Search from './Components/Search'
import './App.css'
import { Route } from 'react-router-dom'

 function App() {

    return (
      <div>
        <Route exact path='/' render={() => (
          <BooksList
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search
          />
        )} />
      </div>
    )
  }

export default App
