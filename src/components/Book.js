import React, { Component } from 'react'

class Book extends Component {
  getShelf () {
    const { book, allBooks } = this.props
    if (book.shelf) {
      return book
    }
    const defaultShelf = { shelf: 'none' }
    if (!allBooks) {
      return defaultShelf
    }
    return allBooks.filter(b => b.id === book.id)[0] || defaultShelf
  }

  render () {
    const { book } = this.props
    const imageLinks = book.imageLinks || { thumbnail: '' }
    const onShelf = this.getShelf()
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail || ''})` }} />
          <div className='book-shelf-changer'>
            <select id='shelf' defaultValue={onShelf.shelf} onChange={e => this.props.updadeShelf(book, e.target.value)}>
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    )
  }
}

export default Book
