import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import BookStateCtrl from './BookStateCtrl'

class Book extends Component {

	updateCurrentBookState(bookState) {
		if(this.props.onBookStateChange)
			this.props.onBookStateChange(bookState)
	}

	render() {
		let bUrl = 'url(' + this.props.bookUrl + ')'
		
		return <div key={this.props.bookId} className="book">
	              <div className="book-top">
	                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bUrl }}></div>
	                <BookStateCtrl bookId={this.props.bookId} bookState={this.props.bookState} onBookStateChange={(bookState) => (
	                	this.updateCurrentBookState(bookState)
	                  )
	                }
	                />
	              </div>
	              <div className="book-title">{this.props.bookTitle}</div>
	              <div className="book-authors">{this.props.bookAuthor}</div>
	            </div>
	}
}

export default Book 