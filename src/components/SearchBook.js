
import React from 'react';
import { Link } from 'react-router-dom';
import { BookGrid } from './BookGrid';
import * as BooksAPI from '../BooksAPI';
import {DebounceInput} from 'react-debounce-input';
import PropTypes from 'prop-types';

export class SearchBook extends React.Component {
  state = {
    noResult: false,
    books: []
  }

  updateBookShelfState = (booksFound, booksOnShelf) => {
    booksFound.map(bookFound => { 
      let filteredBooks = booksOnShelf.filter(eb => eb.id === bookFound.id)
      if (filteredBooks[0]) {bookFound.shelf = filteredBooks[0].shelf}
      return bookFound
    })
  }

  handleChange = (event) => {
    let query = event.target.value
    query = query.replace(/^\s+/,'')
    if(query === ""){
      this.setState({noResult: false, books: []})
    } else {
      this.searchBook(query)
    }
  }

  searchBook = (query) => {
    BooksAPI.search(query, 20).then(booksFound => {
      console.log(booksFound)
      if(!booksFound.error && booksFound.length > 0) { 
        this.updateBookShelfState(booksFound, this.props.booksOnShelf)
        this.setState({books: booksFound})
      } else {
        this.setState({noResult: true, books: []})
      }
    })
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
              value={this.state.query}
              debounceTimeout={500}
              onChange={this.handleChange} />
          </div>
        </div>
        <div className="search-books-results">
          { this.state.noResult && <div>No result</div>}
          <BookGrid 
            books={this.state.books}
            onShelfChange={this.props.onShelfChange}/>
        </div>
      </div>
    )
  }
}

SearchBook.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
  booksOnShelf: PropTypes.array.isRequired,
}