import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'


class Search extends Component{
  state = {
    books: [],
    query: ''
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})
  }

  clearQuery = () => {
    this.setState({query: ''})
  }

  render(){
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
            <input type="text" placeholder="Search by title or author"/>

          </div>
        </div>
          <div className="search-books-results">
          <ol className="books-grid">
          <ListBooks 
          shelfName="Available Books" 
          availableBooks={this.state.books}
          update={this.props.update}
          />
          </ol>
          </div>
      </div>
    )
  }
}

export default Search