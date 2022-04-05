import React  from 'react'
import './App.css'


const Book = (props) => {

    const { book } = props;
    const backgroundImage = book.imageLinks === undefined
        ? "https://dummyimage.com/128x193/696969/fff.jpg&text=No+Image"
        : book.imageLinks.thumbnail

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                     style={{
                         width: 128,
                         height: 193,
                         backgroundImage: `url(${backgroundImage})` }}
                />
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
            <div className="book-authors">{book.authors}</div>
        </div>
    )
}

export default Book