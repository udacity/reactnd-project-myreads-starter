import React from 'react'
// import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import './App.css'

class HomePage extends React.Component {
    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <BookShelf bookType='readingBooks'/>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <BookShelf bookType='toReadBooks'/>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <BookShelf bookType='readBooks'/>
                </div>
              </div>
            </div>

            <div className="open-search">
                <Link to='/search'>Add a book</Link>
            </div>
          </div>
    )}
}

export default HomePage;