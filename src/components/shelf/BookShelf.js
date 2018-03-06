import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from '../shared/Book'

class BookShelf extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	};

	render() {
		const { books, changeShelf } = this.props

		return (
			<ol className="books-grid">
				{books.map((book) => (
					<Book
						book={ book }
						books={ books }
						key={ book.id }
						changeShelf={ changeShelf }
					/>
				))}
			</ol>
		)
	}
}

export default BookShelf
