import React from 'react'
import { Routes,Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI' // I removed the comment from this line
import './App.css'
import Homepage from './Components/Homepage'
import Searchpage from './Components/Searchpage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    booksArr:[]
  }
  // here i'm using componentDidMount() and getAll() to get the books array and assign it to setState().
  componentDidMount() {
    BooksAPI.getAll().then((booksArr) =>{
      this.setState({booksArr})
      console.log("xxs",booksArr)
    })
}

  render() {
    return (
      <div className="app">
        <Routes>

          {/* this the replacement to the state that was here and here I will apply the specification of the project rubric to make the home page' URL displayed in the address bar is /. */}
          <Route path = {'/'} element = {<Homepage />}/>

          {/* this the replacement to the state that was here and here I will apply the specification of the project rubric to make the search page' URL displayed in the address bar is /search. */}
          <Route path = {'/search'} element = {<Searchpage/>}/>

        </Routes>
        
      </div>
    )
  }
}

export default BooksApp
