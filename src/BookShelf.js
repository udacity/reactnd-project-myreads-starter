import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksShelf extends Component {
  static propTypes = {
    booksInShelf: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  }

  state = {
    shelves: ['currentlyReading', 'wantToRead', 'read'],
    shelveNames: ['Currently Reading', 'Want To Read', 'Read']
  }

  render() {
    return (
        <div>
          {this.state.shelves.map((shelf, index) => {
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{this.state.shelveNames[index]}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.props.booksInShelf.filter(book => book.shelf === shelf).map(bookInfo =>  <Book bookInfo={bookInfo} key={bookInfo.id} onBookUpdate={this.props.onBookUpdate}/>)
                    }
                  </ol>
                </div>
              </div>
            )
          })}
        </div>
    )
  }
}

export default BooksShelf
