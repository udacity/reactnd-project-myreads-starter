import React, {Component} from 'react'
import Book from './Book'
import * as BooksAPI from '.././BooksAPI'
import { Link } from 'react-router-dom';

class SearchPage extends Component {
    state={
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
        if (query) {
            BooksAPI.search(query).then((results) => {
                if (results.error) {
                    return this.setState({results: []});
                  }
                this.setState({results: results})
            })
        } else {
            this.setState({results: []});
            this.setState({query: ''});
        }
    }

    updateShelf = (result, shelf) => { BooksAPI.update(result,shelf).then(()=>{
        result.shelf = shelf;
        const reorderedBooks = this.state.results.filter((fb) => fb.id !== result.id).splice([result])
        this.setState({results: reorderedBooks})


    }) } 

    render() {

      return (
        <div className='search-books'>
            {/* <Searchbar /> */}
            <div className='search-books-bar'>
                <Link
                    to="/"
                    className="close-search"
                >
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                <input
                placeholder='Search for books by title or author'
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
                       value={result.shelf}
                       updateShelf={this.updateShelf}
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
