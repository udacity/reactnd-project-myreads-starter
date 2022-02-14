import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Book from './Book';
class SearchBook extends Component{
 
  render() {
    let location = useLocation();
    const { books, onShelfUpdate } = this.props;
    
    console.log(location);
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'>
            <button className="close-search">Close</button>
          </Link> 
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {Object.values(books).map((book)=>(
              <Book key={book.id} book={book} onShelfUpdate={this.props.onShelfUpdate} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}
export default SearchBook