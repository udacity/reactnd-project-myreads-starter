import React, { Component } from 'react'
import Header from './Header'
import BookShelf from './BookShelf'
import Book from './Book'
import SearchButton from './SearchButton'

class BookWrapper extends Component {

  renderBook = (book) => {
    return (<Book 
      key={book.id}
      id={book.id}
      cover={book.imageLinks.thumbnail}
      title={book.title}
      authors={book.authors}
      shelf={book.shelf}
      updateShelf={this.props.updateShelf}
    />);
  }

  render() {
    const books = this.props.myBooks;
    const CurrentlyReading = books.filter((book => book.shelf === "currentlyReading")).map(this.renderBook)
    const WantToRead = books.filter((book => book.shelf === "wantToRead")).map(this.renderBook)
    const Read = books.filter((book => book.shelf === "read")).map(this.renderBook)
    
    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <BookShelf shelfName="Currently Reading">
            {CurrentlyReading}
          </BookShelf>
          <BookShelf shelfName="Want To Read">
            {WantToRead}
          </BookShelf>          
          <BookShelf shelfName="Read">
            {Read}
          </BookShelf>
        </div>
        <SearchButton />
      </div>
    )
  }
}

export default BookWrapper