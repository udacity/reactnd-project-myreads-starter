/*
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

/*
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
*/
/*
import Bookshelf from './Bookshelf' 

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onDeleteBook: PropTypes.func.isRequired
    // onChange: PropTypes.func.isRequired
  }

  state = {
    query: '',
    currentlyReading: [],

    name: ['currentlyReading', 'read', 'wantToRead']
  }

  updateQuery = (query) => {
    this.setState({query: query.trim() })
  }

    clearQuery = () => {
    this.setState({ query: '' })
  }
  changeShelf = (book) => {
    //this.setState({ book.shelf = 'read'})
  }

  render() {
    const { books, onDeleteBook, onChange } = this.props
    const { query } = this.state
*/
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
/*
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          {this.state.name.map((shelf) =>(
            <Bookshelf
            key={shelf}
            onChangeShelf={this.changeShelf}
            books={books.filter((book) => book.shelf === shelf)} name={shelf}/>
          ))}
        </div>
      </div>
    )
  }
}



export default ListBooks
*/

import React from 'react'
import Bookshelf from './Bookshelf'

const listbooks = (props) => {

return (
  <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className='list-books-content'>
    {props.shelf.map(shelf =>(
      <Bookshelf
      key={shelf}
      onChangeShelf={props.onChangeShelf}
      books={props.books.filter((book) => book.shelf === shelf)} name={shelf}/>
    ))}
  </div>
</div>
    )
  };


export default listbooks;