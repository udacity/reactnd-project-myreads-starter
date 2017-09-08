import React, { Component } from 'react'
import Header from './Header'
import BookShelf from './BookShelf'
import Book from './Book'
import SearchButton from './SearchButton'

class BookWrapper extends Component {
  render(){
    const {books} = this.props;
    const Books = books.map((book) => 
      <Book 
        key={book.id}
        cover={book.imageLinks.thumbnail}
        title={book.title}
        authors={book.authors}
      />
    )
    console.log(books);
    return(
      <div className="list-books">
        <Header />
        <div className="list-books-content">
          <BookShelf>
            {Books}
          </BookShelf>
        </div>
        <SearchButton />
      </div>
    )
  }
}

export default BookWrapper