import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import { search } from './BooksAPI'


class AddToBookList extends Component {
  state = {
    books: [],
    query: '',
  };

  updateQuery = (query) => {
    // reset state if no query exists
    if(query.length === 0) {
      this.setState({books: [], query: ''});
      return;
    }

    search(query, 5).then((books) => {
      this.setState({query: query.trim()});
      if(books.length > 0) {
        this.setState({books});
      } else {
        this.setState({books: []});
      }
    })
  }

  render() {
    const {books} = this.state;
    let showingBooks = books;
  
    
    const Books = showingBooks.map((book) => 
      <Book 
        key={book.id}
        id={book.id}
        cover={book.imageLinks.thumbnail}
        title={book.title}
        authors={book.authors}
        updateShelf={this.props.updateShelf}
      />
    );

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
              type="text" 
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Books}
          </ol>
        </div>
      </div>
    )
  }
}

export default AddToBookList