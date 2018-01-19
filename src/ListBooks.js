import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

    // let showingBooks
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   showingBooks = books.filter((book) => match.test(book.title))
    // } else {
    //   showingBooks = books
    // }
    // showingBooks.sort(sortBy('name'))
    // return (
    //         <div className='list-contacts'>
    //   <div className='list-contacts-top'>
    //      <input
    //       className='search-contacts'
    //       type='text'
    //       placeholder='Search contacts'
    //       value={query}
    //        onChange={(event) => this.updateQuery(event.target.value)}
    //       />
    //                <Link
    //                  to='/create'
    //         className='add-contact'>
    //         Add Contact</Link>
    //     </div>
    //
    //    {showingBooks.length !== books.length && (
    //       <div className='showing-contacts'>
    //         <span>Now showing {showingBooks.length} of {books.length} total</span>
    //         <button onClick={this.clearQuery}>Show all</button>
    //      </div>
    //   )}
return (
  <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
  <div className='list-contacts'>
      <ol className="books-grid">
      {books.map((book) =>(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover">
                    <img src={book.imageLinks.thumbnail}
                    style={{ width: 128,
                             height: 193}}>
                    </img>
                    </div>

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
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
              </div>
          </li>
        ))}
      </ol>
      </div>
      </div>
    )
  }
}



export default ListBooks
