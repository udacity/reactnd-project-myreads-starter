import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

	state = {
		shelfType: '',
		currentBooks: []
	}

	updateBookState(bk, bookState) {
    console.log(bookState);
    if(this.props.onBookUpdate)
      this.props.onBookUpdate(bookState, bk)
	}

  getStateHeader(bookState) {
    if(bookState === "currentlyReading")
      return "Currently Reading";
    else if(bookState === "wantToRead")
      return "Want to Read";
    else if(bookState === "read")
      return "Read";
    else 
      return "Unknown";
  }

	render() {
    let showingBooks = this.props.books
    console.log(showingBooks);
		return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.getStateHeader(this.props.bookState)}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {showingBooks.map((book) => (
                      <li key={book.id} >
                        <Book bookId={book.id} bookTitle={book.title} bookAuthor={book.author} bookUrl={book.imageLinks.thumbnail} bookState={this.props.bookState} onBookStateChange={(bookState) => ( this.updateBookState(book, bookState) ) } 
                        />
                      </li>
                      
                    )) 
                  }
                    </ol>
                  </div>
                </div>
              )
	}
}

export default BookShelf