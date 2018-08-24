
import React from 'react';
import { Link } from 'react-router-dom';
import { BookGrid } from './BookGrid';
import * as BooksAPI from '../BooksAPI';
import {DebounceInput} from 'react-debounce-input';

export class SearchBook extends React.Component {
  state = {
    query: '',
    books: []
  }

  updateBookShelfState = (booksFound, existingBooks) => {
    booksFound.map(bookFound => { 
      let filteredBooks = existingBooks.filter(eb => eb.id === bookFound.id)
      if (filteredBooks[0]) {bookFound.shelf = filteredBooks[0].shelf}
      return bookFound
    })
  }

  searchBooks = (query) => {
    this.setState({query: query.replace(/^\s+/,'')})
    query = this.state.query
    if(query !== ''){
      BooksAPI.search(query, 20).then(booksFound => {
        console.log(booksFound)
        if(!booksFound.error && query !== '') {
         this.updateBookShelfState(booksFound, this.props.existingBooks)
          this.setState({books: booksFound})
        } else {
          this.setState({books: []})
        }
      })
    } else {
      this.setState({books: []})
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              placeholder="Search by title or author"
              minLength={2}
              debounceTimeout={300}
              onChange={event => this.searchBooks(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <BookGrid 
            books={this.state.books}
            onShelfChange={this.props.onShelfChange}/>
        </div>
      </div>
    )
  }
}