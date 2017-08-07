import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import Shelf from './Shelf'

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    {this.props.shelves.map((shelf) =>
                        <Shelf
                            shelfTitle={shelf.title}
                            id={shelf.id}
                            books={this.props.books}
                            key={shelf.id}/>
                    )}
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )
    }
}

export default ListBooks