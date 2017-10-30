import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
	
  state = {
    query: '',
    books: [],


  }



  searchBooks = (query) => {
    this.setState({query: query.trim()})

    if (query){
          BooksAPI.search(query, 1).then((books) => {
            if (!books.error){
              books.map((book) => {
                return (book.shelf ? book.shelf : 'none')
               })

            }
            
            this.setState({ books: !books.error ? books : []})

  
    })
    }
    else {
      this.setState({books: []})
    }
  }



  updateNewBook = (book, shelf) => {
  
  const results = this.state.books.filter(currentbook => currentbook.id === book.id);
      results[0].shelf = shelf

  this.setState((state) => {
    state: results
      
  }
    )

BooksAPI.update(book, shelf)

}



  render() {
    const { onUpdateBook } = this.props
    const { books } = this.state


		return(
          <div className="search-books">
            <div className="search-books-bar">
              <Link 
              className="close-search" 
              to='/'

              >Close</Link>
              <div className="search-books-input-wrapper">

                <input onChange={(event) => this.searchBooks(event.target.value)} type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map((book) => ( 

                     <li key={book.id}>
                        <div  className="book">
                          <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail}`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => this.updateNewBook(book, event.target.value)}>
                                <option value="na" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors ? book.authors.join(", ") : ""}</div>
                        </div>
                      </li>
                  )
                  )}

              </ol>
            </div>
          </div>
    
			)
	}
}

export default SearchBooks;