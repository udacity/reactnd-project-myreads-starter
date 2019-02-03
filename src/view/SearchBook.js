import React, { Component } from 'react'
import SearchBookBar from './components/SearchBookBar'

export default class SearchBook extends Component {

  /*
    NOTES: The search from BooksAPI is limited to a particular set of search terms.
    You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
    you don't find a specific author or title. Every search is limited by search terms.
  */

  //TODO: Talvez books grid seja um componente
  render() {
    return (
      <div className="search-books">
        <SearchBookBar 
          link="/"
        />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}