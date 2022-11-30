import React, { Component } from 'react'

// This component iterates through the list of books to return books on different shelves, 
// shelf name and the value of each shelves. It persist data of books and their functionality
class SingleShelf extends Component {
  // add fallbacks for missing cover images and title
  render(){
    const noCover = 'This Book Has No Cover'

      const booksInShelf = this.props.books
       
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksInShelf.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" 
                      style={{ width: 128, height: 193, 
                      backgroundImage: `url(${ book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail: noCover})` 
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
                  <div className="book-title">{book.title ? book.title : 'No title available'}</div>
                  {book.authors &&
                    book.authors.map((authors, index) => (
                      <div className="book-authors" key='index'>{authors}</div>
                    ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SingleShelf