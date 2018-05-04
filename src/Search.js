import React from 'react'
import * as BooksAPI from './BooksAPI';

import Book from './Book';

class Search extends React.Component {
  state = {
    all_books: [],
    query: '',
    search_error: false
  }

  updateQuery = (event) => {
    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query,10).then((books) => { 
        books.length > 0 ? this.setState({all_books: books, search_error: false}) : 
        this.setState({all_books: [], search_error:true });
      })
    } else this.setState({all_books: [], search_error: false})
  }

  handleUpdate = (book,shelf) => {
    this.props.onChangeSelf(book,shelf);
  }
  


  render() {
    const { books, onChangeSelf  } = this.props
    const { query, all_books,search_error } = this.state
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className="search-books-input-wrapper">
            {/*
              
            */}
            <input type="text" placeholder="Search by title or author" value={query} onChange={this.updateQuery}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {all_books.map(book => (
              <Book book={book} books={books} key={book.id} onChangeSelf={(shelf) => {this.handleUpdate(book,shelf)}}/>
            ))}
            {search_error && (
              <div>
                <h3>A busca retornou 0 resultados! tente novamente</h3>
              </div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;