import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import Search from './search'
import Route from 'react-router-dom'

class Bookshelf extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      //console.log('got books', books)
    })
  }

  updateCategory = (book, category) => {
    let books=this.state.books;
    let shelfMove=this.state.books.findIndex((b) => b.id === book.id);
    books[shelfMove].shelf = category
    let newBook = books[shelfMove]
    books.splice(shelfMove, 1)
    books.push(newBook)
    this.setState({
      books: books
    })
    BooksAPI.update(newBook, category)
  }


  render() {
    return (
      <div>
        <ListBooks 
        shelfName="Currently Reading" 
        availableBooks={this.state.books.filter((b) => b.shelf === 'currentlyReading')}
        update={this.updateCategory}
      />
      <ListBooks 
        shelfName="Want to Read" 
        availableBooks={this.state.books.filter((b) => b.shelf === 'wantToRead')}
        update={this.updateCategory}
      />
      <ListBooks 
        shelfName="Read" 
        availableBooks={this.state.books.filter((b) => b.shelf === 'read')}
        update={this.updateCategory}
      />
    </div>
  )
}
}
export default Bookshelf