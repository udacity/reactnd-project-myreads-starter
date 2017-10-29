import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class ListBooks extends Component{

	render() {
    const { books, onUpdateBook } = this.props
    

    let currentShelf = books.filter((book) => (
        book.shelf === 'currentlyReading' ))
    
    let wantShelf = books.filter((book) => (
        book.shelf === 'wantToRead'))

    let readShelf = books.filter((book) => (
        book.shelf === 'read'))

		return(
	   <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                {currentShelf.map((book) => (
                      <li key={book.id}>
                        <div  className="book">
                          <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail}`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => onUpdateBook(book, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.join(", ")}</div>
                        </div>
                      </li>
                  )
                  )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantShelf.map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail}`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.props.onUpdateBook(book, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.join(", ")}</div>
                        </div>
                      </li>
                  )
                  )}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {readShelf.map((book) => (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail}`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.props.onUpdateBook(book, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors.join(", ")}</div>
                        </div>
                      </li>
                  )
                  )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link
              to='/search'
              className="add-book"
              >Add a book</Link>
            </div>
          </div>
			)
	}
}

export default ListBooks;