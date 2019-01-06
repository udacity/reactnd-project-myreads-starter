import React from 'react'
import Book from './Book'
import * as BooksAPI from '.././BooksAPI'

class SearchPage extends React.Component {
  state={
    query: '',
    results: []
  };

  // Use of destructuring the params. Also use of callback function on setState.
  updateQuery = ({target: {value: query}}) => this.setState({query}, () => this.getResults());

  getResults = () =>  {
    const {query} = this.state;
    if (query) {
      BooksAPI
        .search(query)
        .then(results => {
          if (results.error) {
            return this.setState({results: []});
          }
          this.setState({results})
        })
    } else {
      this.setState({results: [], query: ''});
    }
  };

  render() {
    return (
      <div className='search-books'>
        {/* <Searchbar /> */}
        {/* Look up BEM, (block, element, modifier)  http://getbem.com/naming/
          its a way to help keep your classNames details and separate so you can
          just look at it and know what, where, and why
        */}
        <div className='search-books-bar'>
          <div className="search-books-input-wrapper">
            <input
              name="query"
              type="text"
              placeholder='Search for books by title or author'
              value={this.state.query}
              onChange={this.updateQuery}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.results.map(result => (
            <li key={result.id}>
              <Book
               book={result}
              />
            </li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;