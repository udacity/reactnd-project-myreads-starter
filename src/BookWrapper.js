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
      updateShelf={this.props.updateShelf}
    />);
  }

  render() {
    const {currentlyReading, wantToRead, read} = this.props;
    const CurrentlyReading = currentlyReading.map(this.renderBook);
    const WantToRead = wantToRead.map(this.renderBook);
    const Read = read.map(this.renderBook);
    
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