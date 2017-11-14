import React from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = (props) => {
  const { update, book } = props
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf || "none"} onChange={evt => update(book, evt.target.value)}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

ShelfChanger.propTypes = {
  update: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
}

export default ShelfChanger
