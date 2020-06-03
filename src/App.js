import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main'
import Search from './Search'
import {BrowserRouter as Router , Route} from 'react-router-dom'

class BooksApp extends React.Component {
  

  render() {
    return (

      <div>
        <Router>
          <Route path="/" exact render = { () =>
          (
            <Main />
          )}/>
          <Route path="/search" exact render = { () => (
            <Search />
          )} />

          
        </Router>
      </div>
    );
  }
}

export default BooksApp
