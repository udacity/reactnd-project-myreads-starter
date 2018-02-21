import React from 'react'

const books = (props) => {

return (
    <div className="book">
    <div className="book-top">
        <div className="book-cover">
        <img src={props.book.imageLinks.thumbnail}
            style={{ width: 128,
            height: 193}}>
        </img>
        </div>
        <div className="book-shelf-changer">
        <select onChange={(e) => props.onChangeShelf(props.book, e.target.value)} value={props.book.shelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
        </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors[0]}</div>
    </div>
    )
  };


export default books