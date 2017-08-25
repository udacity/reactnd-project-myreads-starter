import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'


class AddBook extends Component{
	static propTypes = {
		books: PropTypes.array.isRequired,
		onAddBook: PropTypes.func.isRequired
	}

	state = {
		query:'',
		books:[]
	}

	updateQuery =(query) => {
		this.setState({ query: query.trim()})
	}

	render(){

		if(this.state.query){
			BooksAPI.search(this.state.query).then((books)=>
			this.setState({ books }))
			}else{
			this.setState({books:[]})
		}
		let showingBooks = this.state.books;
		for(var i=0;i<showingBooks.length;i++){
			let book = showingBooks[i];
			for(var j=0;j<this.props.books.length;j++){
				if(book.title == this.props.books[j].title){
					book.shelf = this.props.books[j].shelf;
					break;
				}else{
					book.shelf = "";
				}
			}
		}

		return(
			<div>
				<div className = 'search-books-bar'>
					<Link to="/" className="close-search">Close search</Link>
					<input
						className='search-books-input-wrapper'
						type='text'
						placeholder='Search books'
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>
				<div className="search-books-results">
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {showingBooks.map((book) => (
						<li key={book.title} className='contact-list-item'>
							<div className="book">
								<div className="book-top">
		                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
		                            <div className="book-shelf-changer">
										<select value= {book.shelf} onChange={(event) => this.props.onAddBook(event.target.value,book)}>
			                                <option value="none" disabled>Move to...</option>
			                                <option value="currentlyReading">Currently Reading</option>
			                                <option value="wantToRead">Want to Read</option>
			                                <option value="read">Read</option>
			                                <option value="none">None</option>
		                              	</select>
		                            </div>
		                            </div>
		                        <div className="book-title">{book.title}</div>
		                        <div className="book-authors">{book.authors}</div>
	                        </div>
						</li>
					))}
                    </ol>
                  </div>
                </div>
	        </div>
		)
	}
}

export default AddBook