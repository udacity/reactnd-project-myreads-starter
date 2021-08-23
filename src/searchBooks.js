import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import SingleShelf from './singleShelf'

class SearchBooks extends Component {

  state = {
    query: '',
    newBooks: [],
    searchErr: false
  };
  getBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // if user input => run the search
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchErr: false })
          : this.setState({ newBooks: [], searchErr: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ newBooks: [], searchErr: false });
  };
  render(){
    const noCover = 'This Book Has No Cover'
    const { query, newBooks, searchErr } = this.state;

    // This component renders the search page and its functionalities.
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
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
              value={query}
              onChange={this.getBooks}
              />
          </div>
        </div>
        <div className="search-books-results">
        {newBooks.length > 0 && (
            <div>
              <h3>Search returned {newBooks.length} books </h3>
              <ol className="books-grid">
                {newBooks.map((book) => (
                 <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover" 
                       style={{ width: 128, height: 193, 
                       backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail: noCover})` 
                       }}
                     />
                     <div className="book-shelf-changer">
                         <select value={book.shelf} onChange={event => this.props.shelfUpdate(book, event.target.value)}>
                           <option value="move" disabled>Move to...</option>
                           <option value="currentlyReading">Currently Reading</option>
                           <option value="wantToRead">Want to Read</option>
                           <option value="read">Read</option>
                           <option value="none">None</option>
                         </select>
                     </div>
                   </div>
                   <div className="book-title">{book.title}</div>
                   <div className="book-authors">{book.authors}</div>
                 </div>
                </li>
                ))}
              </ol>
            </div>
          )}
          {searchErr && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default SearchBooks