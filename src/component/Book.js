import React from 'react'
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger'

const Book = (props) => {
  const { bookInfo } = props
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${bookInfo.imageLinks.thumbnail})`
          }}>
        </div>
        <ShelfChanger book={props.bookInfo} update={props.update} />
      </div>
      <div className="book-title">{bookInfo.title}</div>
      <div className="book-authors">{bookInfo.authors}</div>
    </div>
  )
}

Book.propTypes = {
  update: PropTypes.func.isRequired,
  bookInfo: PropTypes.object.isRequired,
}

export default Book
