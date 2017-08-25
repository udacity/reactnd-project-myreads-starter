import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

class ListBooks extends Component{
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
	}

	changeFunc =(selectedValue,title) => {

		// let selectedValue = (selectBox.target.value);
		console.log(selectedValue);
		console.log(title);

	}



	render(){
		this.props.books.sort(sortBy('title'));
		return(
			<div className="app">
		          <div className="list-books">
		            <div className="list-books-title">
		              <h1>MyReads</h1>
		            </div>
		            <div className="list-books-content">
		              <div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Currently Reading</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">

		                    {this.props.books.filter(book => book.shelf ==="current").map((book) => (
								<li key={book.title} className='contact-list-item'>
									<div className="book">
										<div className="book-top">
				                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.coverURL})` }}></div>
				                            <div className="book-shelf-changer">
												<select onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="current" selected="selected">Currently Reading</option>
					                                <option value="marked">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
				                              	</select>
				                            </div>
				                            </div>
				                        <div className="book-title">{book.title}</div>
				                        <div className="book-authors">{book.author}</div>
			                        </div>
								</li>
							))}
		                    </ol>
		                  </div>
		                </div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Want to Read</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                      {this.props.books.filter(book => book.shelf ==="marked").map((book) => (
								<li key={book.title} className='contact-list-item'>
									<div className="book">
										<div className="book-top">
				                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.coverURL})` }}></div>
				                            <div className="book-shelf-changer">
												<select onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="current">Currently Reading</option>
					                                <option value="marked" selected="selected">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
				                              	</select>
				                            </div>
				                            </div>
				                        <div className="book-title">{book.title}</div>
				                        <div className="book-authors">{book.author}</div>
			                        </div>
								</li>
							))}
		                    </ol>
		                  </div>
		                </div>
		                <div className="bookshelf">
		                  <h2 className="bookshelf-title">Read</h2>
		                  <div className="bookshelf-books">
		                    <ol className="books-grid">
		                      {this.props.books.filter(book => book.shelf ==="read").map((book) => (
								<li key={book.title} className='contact-list-item'>
									<div className="book">
										<div className="book-top">
				                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.coverURL})` }}></div>
				                            <div className="book-shelf-changer">
												<select onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="current">Currently Reading</option>
					                                <option value="marked">Want to Read</option>
					                                <option value="read" selected="selected">Read</option>
					                                <option value="none">None</option>
				                              	</select>
				                            </div>
				                            </div>
				                        <div className="book-title">{book.title}</div>
				                        <div className="book-authors">{book.author}</div>
			                        </div>
								</li>
							))}
		                    </ol>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="open-search">
		              <a Link to="/add" onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
		            </div>
		          </div>
		        )}
		    </div>
		)
	}
}

export default ListBooks