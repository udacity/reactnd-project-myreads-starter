import React, { Component } from 'react'
import { getAll } from '../BooksAPI'
import BookShelf from '../components/BookShelf'

export class Main extends Component {
  state = { books: [] }
  componentDidMount() {
    getAll()
      .then(books => this.setState({ books }))
      .catch(error => console.log('error', error))
  }

  filterBooksByShelf = (shelf) => {
    const { books } = this.state;
    return books.filter(book => book.shelf === shelf);
  }

  render() {
    const currentlyReading = this.filterBooksByShelf('currentlyReading');
    const wantToRead = this.filterBooksByShelf('wantToRead');
    const read = this.filterBooksByShelf('read');
    const { updateBook } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf updateBook={updateBook} bookList={currentlyReading} title={'Currently Reading'} />
            <BookShelf updateBook={updateBook} bookList={wantToRead} title={'Want to Read'} />
            <BookShelf updateBook={updateBook} bookList={read} title={'Read'} />
          </div>
        </div>
      </div>
    )
  }
}

export default Main
