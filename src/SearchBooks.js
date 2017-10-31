import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
	
  state = {
    query: '',
    returnedbooks: []
  }

  searchBooks = (query) => {
    
    this.setState({query: query.trim()})
    if (query){
          BooksAPI.search(query, 10).then((newbooks) => {
            if (!newbooks.error){
              const results = newbooks.map((book) => {
                book.shelf = 'none'
                return book
               })
              // console.log(this.props.workingBooks[0])
             // results = results.filter(currentbook => this.props.workingBooks.indexOf(currentbook) === -1);

             this.setState({ returnedbooks: !newbooks.error ? results : []})
        
            }

            
          }) 

    }
    else {
      this.setState({ returnedbooks: [] })
    }
  }


  render() {
    const { onUpdateBook, workingBooks } = this.props
    const { returnedbooks } = this.state


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
              {returnedbooks.map((book) => ( 
                  <li key={book.id}>
                        <div  className="book">
                          <div className="book-top">
                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:  `url(${book.imageLinks.thumbnail}`}}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event) => onUpdateBook(book, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{(book.authors ? book.authors.join(", ") : '')}</div>
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