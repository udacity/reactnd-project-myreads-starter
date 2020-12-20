import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  state = {
    query: ''
  }
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  render() {
    const { query } = this.state
    const { books } = this.props

    const showingBooks = query === ''
      ? books
      : books.filter((c) => (
          c.name.toLowerCase().includes(query.toLowerCase())

        ))


    return (
        <div className="list-books-content">
        {showingBooks.length !== books.length && (
          <div className='showing-books'>
            <span>Now showing {showingBooks.length} of {books.length}</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <ol className="books-grid">
        {showingBooks.map((book) => (
        

            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.smallThumbnail : ''})` }}></div>
                        <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                    {(book.authors!==undefined && book.authors.length>0) ? book.authors.map(author=> author).join('\n') : ''}
                    </div>
                </div>
            </li>
        ))}
        </ol>

            
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                            test
                            </li> 
                        </ol>
                    </div>
                </div>
            </div>

</div>
      
    )
  }

}

export default ListBooks