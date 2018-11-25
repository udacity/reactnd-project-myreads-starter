import React, {Component} from 'react';
import './App.css'

class Book extends Component {

  state = {
    selectValue: 'Start'
  }

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.filter((book) => (book.bookshelf_title === this.props.bookshelf_title)).map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.backgroundImage}}></div>
                  <div  className="book-shelf-changer">
                    <select value={book.bookshelf_title_value} onChange={(e) => this.props.onUpdateBookshelfTitle(book, e.target.value)} >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>

              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        ))}
      </ol>
    )
  }
}
// onChange={() => this.props.onUpdateBookshelfTitle(book, this.option.value)}
// onClick={() => this.props.onUpdateBookshelfTitle(book, 'Want to Read')}
export default Book
