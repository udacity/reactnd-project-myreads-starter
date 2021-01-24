import React from 'react'

const Book = props => {

    const { bookDetails, onUpdateShelf } = props
    const currentShelf = bookDetails.shelf ? bookDetails.shelf : 'none'
    const authors = bookDetails.authors ? bookDetails.authors.join(', ') : ''
    const thumbnail = bookDetails.imageLinks ? bookDetails.imageLinks.smallThumbnail : ''

    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${thumbnail})` }}/>
                <div className="book-shelf-changer">
                    <select value={currentShelf} onChange={(e) => onUpdateShelf(e, bookDetails)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{bookDetails.title}</div>
            <div className="book-authors">{authors}</div>
        </div>
    )
}

export default Book;