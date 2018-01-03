import React from 'react'
import Bookshelf from './Bookshelf.js'
import {Link} from 'react-router-dom'
import './App.css'

class ShelfScreen extends React.Component {

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
