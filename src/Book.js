import React, { Component } from 'react'

class Book extends Component{
	render() {
		let book = this.props.book

    if(!book.authors)
      book.authors = ["Unknown"]
    if(!book.imageLinks)
      book.imageLinks = {thumbnail: ""}


		return (<div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={ (opt) => book.shelf !== opt.target.value && this.props.changeShelf(book, opt.target.value) } >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors[0]}</div>
                        </div>)
	}

}

export default Book