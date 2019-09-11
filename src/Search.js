import React, {Component} from 'react'
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

class Search extends Component {

  render() {
    return(
      <div>
        <SearchBar />
        <SearchResults />
      </div>
    )
  }
}

export default Search;