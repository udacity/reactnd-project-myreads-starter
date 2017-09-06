import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
	state = {
		query: '',
		newBooks: []
	}
	searchBooks = (query) => {
		//search BooksAPI for new books to add
		this.setState({ query: query.trim() })
		BooksAPI.search(query.trim(),20)
		.then( (books) => {
			let { myLibrary, getBookShelf } = this.props
			if (!books || books.error) {
				//if no books and error then show error in console and don't show any books as results
				console.error(books.error)
				this.setState({ newBooks: [] })

			} else {
				//set state if books are available with search term
				//sort found books by title before displaying
				books.sort(sortBy('title'))
				// Compare each book on the search result with the books on your shelves.
				//If the book exists in any of your shelves use that shelf instead and if doesn't set the shelf as none.
				for ( let book of books ) {
					for ( let myBook of myLibrary ){
						if ( book.id === myBook.id) {
							//update books with shelf from myBook.shelf
							book.shelf = myBook.shelf
						} else {
							book.shelf = "none"
						}
					}
				}
				//update newBooks with shelf details in existing library
		  		this.setState({ newBooks: books })
			}
		})
	}
	clearQuery = () => {
	  this.setState({ query: '' })
	}
	render() {
		const { query,newBooks } = this.state
		const { changeStatus, getBookShelf } = this.props
		return (

			<div className="search-books">
			  <div className="search-books-bar">
			  	<Link
			  		className="close-search" to="/">Close</Link>
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
			      		value={query}
			      		onChange={ (event) => this.searchBooks( event.target.value )}
			      		placeholder="Search by title or author"/>
			    </div>
			  </div>
			  <div className="search-books-results">

			      <ol className="books-grid">
			      	{ newBooks && newBooks.map((book)=> (
					  		<li key={book.id} className="book-list-item">
					  			<Book book={book} changeStatus={changeStatus} getBookShelf={getBookShelf}/>
					  		</li>
					  	))
			    	}

			      </ol>
			    </div>
			</div>
		)

	}
}
export default SearchBooks


// WEBPACK FOOTER //
// ./src/SearchBooks.js