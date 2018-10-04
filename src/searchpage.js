import React from 'react'
import SearchBar from './searchbar.js'
import SearchResults from './searchresults.js'
import * as BooksAPI from './BooksAPI'

class SearchPage extends React.Component {
  state = {
    query: '',
    booksFound: []
  }

  onChangeOfQuery = (userInput) => {
    this.setState({
      query: userInput
    })
    // Doesn't call the API if the search bar is a empty string or whitespace
    if (userInput.trim() !== '' && userInput !== null) {
      BooksAPI.search(userInput)
      .then((data) => Array.isArray(data) ? this.setState({booksFound: [...data]}) : this.setState({booksFound: []}) )
    }
  }

  render() {
    return (
      <div className="search-books">

          <SearchBar onChangeOfQuery={this.onChangeOfQuery} query={this.state.query}/>
          <SearchResults booksFound={this.state.booksFound} handleSelection={this.props.handleSelection}/>

        </div>
    )
  }
}

  export default SearchPage
