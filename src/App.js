import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI';
import Shelf from './Shelf'
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: [{title: 'Currently Reading', value: 'currentlyReading'},
             {title: 'Read', value: 'read'},
             {title: 'Want to Read', value:'wantToRead'}],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, newShelf) => {
    BooksAPI.update(book,newShelf).then( response => {
      book.shelf = newShelf
      this.setState({
        books: this.state.books.filter(b => b.id !== book.id).concat([book])
    })
  })
}

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search books={this.state.books} onChangeSelf={this.updateShelf} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
              {this.state.shelves.map( shelf => (
                <Shelf title={shelf.title} key={shelf.value} books={this.state.books.filter(book => book.shelf === shelf.value)} onChangeSelf={this.updateShelf} />
              ))}
              
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default BooksApp