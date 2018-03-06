import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {

	static propTypes = {
		book: PropTypes.object.isRequired,
		books: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired,
	}

	render() {	
		const { books,  book, changeShelf } = this.props
		console.log(book)
		return (
			<li>
				<div className='book'>
					<div className='book-top'>
					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
					<ShelfChanger
						book={ book }
						books={ books }
						changeShelf={ changeShelf }
						/>
					</div>
					<div className='book-title'>{book.title}</div>
					<div className='book-authors'>{book.authors}</div>
				</div>
			</li>
		);
	}
}

export default Book