import React from 'react'
import SearchPage from './SearchPage.js'
import Bookshelf from './Bookshelf.js'
import {Link} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class ShelfScreen extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
    
  }

  render() {
    return (
     

          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf shelfTitle="Currently Reading"/>
                <Bookshelf shelfTitle="Want To Read"/>
                <Bookshelf shelfTitle="Read"/>

    
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"/>
            </div>
          </div>
    )
  }
}

export default ShelfScreen
