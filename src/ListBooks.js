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

    clearQuery = () => {
    this.setState({ query: '' })
  }


  render() {
    const { books, onDeleteBook } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }
    showingBooks.sort(sortBy('name'))
    return (
            <div className='list-contacts'>
      <div className='list-contacts-top'>
         <input
          className='search-contacts'
          type='text'
          placeholder='Search contacts'
          value={query}
           onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

       {showingBooks.length !== books.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingBooks.length} of {books.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
         </div>
      )}

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
                      <option onClick={() => onDeleteBook(book)} value="none">None</option>
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
