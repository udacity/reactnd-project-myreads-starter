import React, { Component } from 'react'
import BookList from "./BookList";

class SearchResults extends Component {

  render(){
    return(
      <div>
        <ol className="books-grid"></ol>
      </div>
    )
  }
}

export default SearchResults;