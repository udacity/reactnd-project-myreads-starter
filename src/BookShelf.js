import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksShelf extends Component {
  static propTypes = {
    booksInShelf: PropTypes.array.isRequired
  }

  state = {
    shelves: ['currentlyReading', 'wantToRead', 'read'],
    shelveNames: ['Currently Reading', 'Want To Read', 'Read']
  }

  render() {
    return (
      <li>
        <div>
          {this.state.shelves.map((shelf, index) => {
            return (
              <div className="bookshelf" key={index}>
                <h2 className="bookshelf-title">{this.state.shelveNames[index]}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    { this.props.booksInShelf.filter(book => book.shelf === shelf).map(bookInfo => {return <Book bookInfo={bookInfo} key={bookInfo.id}/>})
                    }
                  </ol>
                </div>
              </div>
            )
          })}
        </div>
      </li>
    )
  }
}

export default BooksShelf
