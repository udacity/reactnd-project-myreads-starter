import React, { Component } from 'react'
import Book from './Book.js'

class ListBooks extends Component {

	render() {
		return (
<div className="bookshelf">
	<h2 className="bookshelf-title">{this.props.shelf}</h2>
	<div className="bookshelf-books">
		<ol className="books-grid">
			{this.props.books.map((b) => (
  			<li key={b.id}>
    			<Book changeShelf={this.props.changeShelf} book={b} />
  			</li>))}
		</ol>
	</div>
</div>)
	}
}

export default ListBooks