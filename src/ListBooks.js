import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'


class ListBooks extends Component{
	static propTypes = {
		books: PropTypes.array.isRequired,
		onUpdateShelf: PropTypes.func.isRequired
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
		                      {this.props.books.filter(book => book.shelf ==="currentlyReading").map((book) => (
								<li key={book.title} className='contact-list-item'>
									<div className="book">
										<div className="book-top">
											{book.imageLinks ?(
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
												):(
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png" }}></div>
												)
											}
				                            <div className="book-shelf-changer">
												<select value= {book.shelf} onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="currentlyReading">Currently Reading</option>
					                                <option value="wantToRead">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
				                              	</select>
				                            </div>
				                            </div>
				                        <div className="book-title">{book.title}</div>
				                        {book.authors &&
				                        	<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
				                        }
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
		                      {this.props.books.filter(book => book.shelf ==="wantToRead").map((book) => (
								<li key={book.title} className='contact-list-item'>
									<div className="book">
										<div className="book-top">
											{book.imageLinks ?(
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
												):(
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png" }}></div>
												)
											}
				                            <div className="book-shelf-changer">
												<select value= {book.shelf} onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="currentlyReading">Currently Reading</option>
					                                <option value="wantToRead">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
				                              	</select>
				                            </div>
				                            </div>
				                        <div className="book-title">{book.title}</div>
				                        {book.authors &&
				                        	<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
				                        }
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
											{book.imageLinks ?(
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
												):(
												<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png" }}></div>
												)
											}
				                            <div className="book-shelf-changer">
												<select value= {book.shelf} onChange={(event) => this.props.onUpdateShelf(event.target.value,book)}>
					                                <option value="none" disabled>Move to...</option>
					                                <option value="currentlyReading">Currently Reading</option>
					                                <option value="wantToRead">Want to Read</option>
					                                <option value="read">Read</option>
					                                <option value="none">None</option>
				                              	</select>
				                            </div>
				                            </div>
				                        <div className="book-title">{book.title}</div>
				                        {book.authors &&
				                        	<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
				                        }
			                        </div>
								</li>
							))}
		                    </ol>
		                  </div>
		                </div>
		              </div>
		            </div>
		            <div className="open-search">
		              <Link to="/search">Add a book</Link>
		            </div>
		          </div>
		    </div>
		)
	}
}

export default ListBooks