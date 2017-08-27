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

	updateQuery =(query,propsBooks) => {
		let searchResults
		this.setState({ query: query.trim()})
		BooksAPI.search(this.state.query).then((books)=>
			{if(books){
				for(var i=0;i<books.length;i++){
						let book = books[i];
						for(var j=0;j<propsBooks.length;j++){
							if(book.title == propsBooks[j].title){
								book.shelf = propsBooks[j].shelf;
								break;
							}else{
								book.shelf = "none";
							}
						}
					}
				}
				this.setState({books})
			}
		)
	}

	render(){


		return(
			<div>
				<div className = 'search-books-bar'>
					<Link to="/" className="close-search">Close search</Link>
					<input
						className='search-books-input-wrapper'
						type='text'
						placeholder='Search books'
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value,this.props.books)}
					/>
				</div>
				<div className="search-books-results">
                  <div className="bookshelf-books">
                  {this.state.books &&
                    <ol className="books-grid">

                    	{this.state.books.map((book) => (
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
    		                        {book.authors &&
			                        	<div className="book-authors">{book.authors && book.authors.join(', ')}</div>
    				                }
    	                        </div>
    						</li>
    					))}

                    </ol>
                    }
                  </div>
                </div>
	        </div>
		)
	}
}

export default AddBook