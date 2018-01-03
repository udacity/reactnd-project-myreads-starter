import React from 'react'
import SearchPage from './SearchPage.js'
import ShelfScreen from './ShelfScreen.js'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
       
        <Route exact path="/" render={() => (
            <ShelfScreen/>
          )}
        />

        <Route path="/search" component={SearchPage}/>
      </div>
    )
  }
}

export default BooksApp
