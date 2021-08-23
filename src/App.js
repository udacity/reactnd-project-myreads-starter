import React, { Component } from 'react'
import MyShelf from './myShelves'
import SearchPage from './searchPage'
import SearchBooks from './searchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  componentDidMount(){  // This react lifecycle function ensures that our empty books array is populated with all the books on our BooksAPI
    BooksAPI.getAll()
    .then((books)=>{
      this.setState(() =>({
        books
      }))
    })
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={()=>( //This uses react router dom element to navigate our page with url instead of state variable. it also ensures that our seach page is displayed
          <div>
          <MyShelf
            getBooks = {this.state.books}
          />
          <SearchPage
          />
        </div>
        )}/>
        <Route path='/search' component={SearchBooks} 
        />
      </div>
    )
  }
}

export default BooksApp
