import React, { Component } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import { search } from './BooksAPI';
import sortBy from 'sort-by'

class Search extends Component{
  state = {
    availableBooks: [],
    query: '',
    error: '',
  }

  searchBooks(query) {
    this.setState({query: query.trim()})
    search(query, 20).then(books => {
      if (!books || books.error){
        //console.log(books)
        this.setState({
          availableBooks: []
        })
      } else {
        books.map((b) => {
          this.props.currentBooks.map((cb) => {
            if(b.id === cb.id){
              books.splice(books.indexOf(b), 1)
              books.push(cb)
            } else {
              if(!b.shelf){
                b.shelf = 'none'
              }
            }
            return cb
          })
          return books      
        })
        books.sort(sortBy('title'))
        this.setState({ availableBooks: books });
      }
    });
  }

  render(){
    let { availableBooks, query, error } = this.state
    let showBooks
    if (query){
      const match = RegExp(escapeRegExp(query), 'i')
      showBooks = availableBooks.filter((book) => match.test(book.title))
    } else{
      showBooks = availableBooks
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'> Close </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              value={ query } 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event) => this.searchBooks(event.target.value)}
              />

          </div>
        </div>
          <div className="search-books-results">
          {error !== '' ? (
            <h2>{error}</h2>
           ) : 
           <ol className="books-grid">
           {showBooks.map((book) =>
                <Book key={book.id} book={book} newCategory={this.props.update} />
              )}
            </ol>
          }
          
          </div>
      </div>
    )
  }
}

export default Search