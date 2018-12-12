import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from '../src/pages/Main'

class BooksApp extends React.Component {
  state = { showSearchPage: false }

  render() {
    return (
      <Main />
    )
  }
}

export default BooksApp
