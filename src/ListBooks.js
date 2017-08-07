import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

function Shelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books.map((book) => (
                        (book.shelf === props.id) && (
                            <Book
                                key={book.id}
                                imageURL={book.imageLinks.thumbnail}
                                author={book.authors[0]}
                                title={book.title}
                            />
                        )
                    ))}
                </ol>
            </div>
        </div>
    )
}

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