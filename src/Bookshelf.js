import React from 'react'
import Book from './Book.js'
import * as BookAPI from './BooksAPI.js'

class Bookshelf extends React.Component{


//needs a method
	state = {
		shelfContents: []
	}

	componentDidMount(){
		BookAPI.getAll().then((shelfContents) => {
			this.setState({ shelfContents })
		})
	}

	fillShelf() {
		return(<ol className="books-grid">
			{this.state.shelfContents.map(book => (
				<li><Book key={book.id} title={book.title} author={book.authors} image={book.imageLinks.thumbnail}/></li>
				))}
		</ol>)
	}

	render(){
		return(
			<div className="bookshelf">
	          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
	          <div className="bookshelf-books">
	            {this.fillShelf()}
	          </div>
	        </div>
		)
	}
	
}

export default Bookshelf