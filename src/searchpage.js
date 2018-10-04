import React from 'react'
import SearchBar from './searchbar.js'
import SearchResults from './searchresults.js'

class SearchPage extends React.Component {
  state = {
    query: '',
    booksFound: []
  }
  render() {
    return (
      <div className="search-books">

          <SearchBar/>
          <SearchResults booksFound={this.state.booksFound}/>

        </div>
    )
  }
}

  export default SearchPage
