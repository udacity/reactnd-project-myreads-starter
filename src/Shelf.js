import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Shelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const { title } = this.props;
        let { shelf, books, updateShelf } = this.props;

        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books
                    .filter(book => book.shelf === shelf)
                    .map(book => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div
                              className="book-cover"
                              style={{
                                width: 128,
                                height: 188,
                                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://via.placeholder.com/128x188?text=no+image'})`
                              }}
                            />
                            <div className="book-shelf-changer">
                              <select
                                defaultValue={book.shelf}
                                onChange={e => {
                                  updateShelf(e, book)
                                }}
                              >
                                <option value="none" disabled>
                                  Move to...
                                </option>
                                <option value="currentlyReading">
                                  Currently Reading
                                </option>
                                <option value="wantToRead">
                                  Want to Read
                                </option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">
                            {book.authors.join(", ")}
                          </div>
                        </div>
                      </li>
                    ))}
                </ol>
              </div>
            </div>
        )
    }
}

export default Shelf