import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'

class ListBooks extends Component {
	state = { books: [] }

	shelfRepr() {
		if (this.props.shelf === "currentlyReading")
			return "Currently Reading"
		else if (this.props.shelf === "wantToRead")
			return "Want to Read"
		else if (this.props.shelf === "read")
			return "Read"
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			books = books.filter((b) => b.shelf === this.props.shelf)
			this.setState({books: books})
		})
	}

	render() {
		return (
<div className="bookshelf">
	<h2 className="bookshelf-title">{this.shelfRepr()}</h2>
	<div className="bookshelf-books">
		<ol className="books-grid">
			{this.state.books.map((b) => (
  			<li key={b.id}>
    			<Book book={b} />
  			</li>))}
		</ol>
	</div>
</div>)
	}
}

export default ListBooks