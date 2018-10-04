import React from 'react';
import * as BooksAPI from './BooksAPI'
import Shelf from './shelf.js'

class BookShelf extends React.Component {
    state = {
      books: []
      // currentlyReading: [],
      // wantToRead: [],
      // read: []
    }

  componentDidMount() {
    BooksAPI.getAll().then((data) => this.setState({
      books: data
      // currentlyReading: data.filter(book => book['shelf'] === "currentlyReading"),
      // wantToRead: data.filter(book => book['shelf'] === "wantToRead"),
      // read: data.filter(book => book['shelf'] === "read")
    }))
    BooksAPI.getAll().then((data) => console.log(data))
  }

  filterBook(array, removeThisBook) {
    return array.filter(book => book['id'] !== removeThisBook['id'])
  }

  handleSelection = (changedBook) => event => {
    const newShelf = event.target.value
    changedBook['shelf'] = newShelf
    this.setState((prevState) => ( {
      books: [...this.filterBook(prevState.books, changedBook), changedBook]
    } ) )

    BooksAPI.update(changedBook, newShelf)
  }

  render(){
    return(
      <div className="list-books-content">
        <div>
          <Shelf name={"Currently Reading"} books={this.state.books.filter(book => book['shelf'] === "currentlyReading")} handleSelection={this.handleSelection}/>
          <Shelf name={"Want to Read"} books={this.state.books.filter(book => book['shelf'] === "wantToRead")} handleSelection={this.handleSelection}/>
          <Shelf name={"Read"} books={this.state.books.filter(book => book['shelf'] === "read")} handleSelection={this.handleSelection}/>
        </div>
      </div>
    )
  }
}
  export default BookShelf;
