import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'

class Search extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: true
  }

  render() {
    return (
			<div className="search-books">
				<div className="search-books-bar">
					<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
					<ol className="books-grid"></ol>
				</div>
			</div>
    )
  }
}

export default Search
