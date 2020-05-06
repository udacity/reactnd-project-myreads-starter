import React from 'react'
// import * as BooksAPI from './BooksAPI'
import '../App.css'

export default function Currently(props) {

  const { currentBooks } = props

    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
    {
      currentBooks && currentBooks.map((smoke, index) => (
        <li key={index}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+smoke.imageLinks.smallThumbnail+')' }}></div>
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
          <div className="book-title">{smoke.title}</div>
<div className="book-authors">{smoke.authors}</div>
</div>
</li>

    ))
    }
        </ol>
      </div>
    </div>
    )
  }
