import React from 'react'
import Searchbar from './Searchbar'
import Book from './Book'
import * as BooksAPI from '.././BooksAPI'

class SearchPage extends React.Component {
    state={
        books:[],
        query: '',
        results: []
    }
    
    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.getResults(query);
    }

    getResults = (query) =>  {
        if (query > 0) {
            BooksAPI.search(query).then((results) => {
                this.setState({results: results})
                console.log(results)
            })
        } else {
            this.setState({ results: [] })
            
        }
        
    }

    render() {
        
      return (
        <div className='search-books'>
            {/* <Searchbar /> */}
            <div className='search-books-bar'>
                {JSON.stringify(this.state)}
                <div className="search-books-input-wrapper">
                <input
                className=''
                placeHolder='Search for books by title or author'
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value )}
                />
                </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
                  this.state.results.map(result => (
                      <li key={result.id}>
                      <Book
                       book={result}
                      />
                      </li>
                  )) 
              }
              </ol>
            </div>
        </div>
      );
    }
  }

export default SearchPage;