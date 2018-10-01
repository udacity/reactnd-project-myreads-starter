import React from 'react'
import SearchBar from './searchbar.js'
import SearchResults from './searchresults.js'

const searchPage = (props) => (
  <div className="search-books">

      <SearchBar/>
      <SearchResults/>

    </div>
  )

  export default searchPage
