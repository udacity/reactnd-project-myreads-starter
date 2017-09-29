import React, {Component} from "react";
import Book from "./Book";
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }
  render () {
      const books = this.props.books
      return (
          <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.shelfName}</h2>
              <div className="bookshelf-books">
                  <ol className="books-grid">
                      {books.map((book) => (
                          <li key={book.title}>
                              <Book
                                  book={book}
                                  onMoveBook={this.props.onMoveBook}
                              />
                        </li>
                      ))}
                  </ol>
              </div>
          </div>

  )
  }
}

export default Bookshelf