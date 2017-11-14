import React from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input';

import Book from './Book'

const SearchPage = (props) => {
  return(
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <DebounceInput
            minLength={2}
            debounceTimeout={500}
            placeholder="Search by title or author"
            onChange={event => props.search(event.target.value)}
          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.queryBooks.map(book => (
              <li key={book.id}>
                <Book bookInfo={book} update={props.update}/>
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}



export default SearchPage
