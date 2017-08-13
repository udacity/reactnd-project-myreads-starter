import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
    state = {
        books: []
    }

    fetchBooks = (event) => {
        (event.target.value !== '')?
        BooksAPI.search(event.target.value, 20).then((books) => {
          let booksWithShelf = []
          for(let i = 0; i < books.length; i++) {
            BooksAPI.get(books[i].id).then((book) => {
              booksWithShelf.push(book);
              (books.length === booksWithShelf.length)?
                this.setState({books: booksWithShelf})
                : this.setState({books: []})
            })
          }
        }): this.setState({
            books: []
        })
    }

    updateBookShelf = (value, id) => {
        BooksAPI.update({id: id}, value)
    }

    render() {
        const {books} = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                        >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"

                            onChange={this.fetchBooks}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(books) && (
                            books.map((book, index) => (
                                <Book
                                    handleSelect={this.updateBookShelf}
                                    book={book}
                                    key={index}
                                />
                            ))
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage