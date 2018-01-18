import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState({query: query.trim() })
  }

  render() {
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }
    showingBooks.sort(sortBy('name'))
    return (
            <div className='list-contacts'>
      <div className='list-contacts-top'>
         <input
          className='search-contacts'
          type='text'
          placeholder='Search contacts'
          value={this.state.query}
           onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
      <ol className="books-grid">
      {showingBooks.map((book) =>(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option onClick={() => this.props.onDeleteBook(book)} value="none">None</option>
                    </select>
                  </div>
                </div>
                <div  className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
              </div>
          </li>
        ))}
      </ol>
      </div>
    )
  }
}



export default ListBooks
