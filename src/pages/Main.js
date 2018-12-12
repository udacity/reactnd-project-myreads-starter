import React, { Component } from 'react'
import { getAll } from '../BooksAPI'
import Book from '../components/Book'

export class Main extends Component {
  state = { books: [] }
  componentDidMount() {
    getAll()
      .then(books => this.setState({ books }))
      .catch(error => console.log('error', error))
  }

  render() {
    const { books } = this.state;
    return (
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
                  {books.map(book => (
                    <li key={book.id}><Book {...book} /></li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
