
import React from 'react'
import { Link } from 'react-router-dom'
import { BookGrid } from './BookGrid';
import * as BooksAPI from '../BooksAPI'

export class SearchBook extends React.Component {
  state = {
    query: '',
    books: []
  }

  searchBooks = (query) => {
    this.setState({query: query.replace(/^\s+/,'')})
    query = this.state.query
    if(query !== ''){
      BooksAPI.search(query, 20).then(booksFound => {
        if(!booksFound.error) {
        this.setState({books: booksFound})
        } else {
          console.log(booksFound)
          this.setState({books: []})
        }
      })
    } else {
      this.setState({books: []})
    }
  }

  render() {
    let {query} = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.searchBooks(event.target.value)} />
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