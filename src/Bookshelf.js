import React, {Component} from 'react'
import Book from './Book'

class Bookshelf extends Component {
  render() {
    let shelf
    switch (this.props.shelf) {
      case "currentlyReading":
        shelf = "Currently Reading"
        break;
      case "wantToRead":
        shelf = "Want To Read"
        break;
      case "read":
        shelf = "Read"
        break;
      default:
        break;
    }
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => book.shelf === this.props.shelf && <li key={book.id}><Book book={book} shelf={this.props.shelf}/></li>)}
          </ol>
        </div>
      </div>
    )
  }
}
export default Bookshelf