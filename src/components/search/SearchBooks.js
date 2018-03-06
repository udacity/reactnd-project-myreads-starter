import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


import Book from '../shared/Book'
import * as BooksAPI from '../../BooksAPI'


class SearchBooks extends Component {

	state = {
		query: '',
		newBooks: []
	}

	static propTypes = {
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired,
	}

	updateQuery = (query) => {
		this.setState(() => {
			return {query: query}
		});
		this.searchBooks(query)
	}
	searchBooks = (query) => {
		if (query.length !== 0) {
			BooksAPI.search(query, 10).then((books) => {
				if (books.length > 0) {
					books = books.filter((book) => book.imageLinks && book.imageLinks.thumbnail);					
					this.setState(() => {
						return {newBooks: books}
					})
				}
			});
			this.setState({
				query: query.trim()
			});
		} else {
			this.setState({newBooks: [], query: ''})
		}
	}

	render() {
		const { books, changeShelf } = this.props
		const {newBooks, query} = this.state
		return (
			<div className="search-books">
				<div className="search-books-bar">
				<Link className="close-search"  to="/">Close</Link>
					<div className="search-books-input-wrapper">
							<input type="text" placeholder="Search by title or author" 
										value={query}
										onChange={event => this.updateQuery(event.target.value)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{newBooks.map( (book) => (
							<Book
								key={ `${book.id}#${book.title}` }
								book={ book }
								changeShelf={ changeShelf }
								books={ books }
							/>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchBooks
