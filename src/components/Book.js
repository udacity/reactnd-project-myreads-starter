import React from 'react'

function Book(props) {

    const style={
        width: 128,
        height: 188,
        backgroundImage: props.book.imageLinks ? props.book.imageLinks.thumbnail : ''
    }
/*
    const handleChange = (event) => {
        props.book.shelf= event.target.value })
        console.log(this.state)
      } */


    const changeToShelf = (event) => {
        //props.shelf({shelf: event.target.value});
        props.updateShelf(props.book, event.target.value)
        event.preventDefault();
      }

        return(
        <div className='book'>
            <div className="book-top">
                <div className="book-cover" style={style}>
                <img src={style.backgroundImage} style={style} alt={props.book.title} /></div>
                <div className="book-shelf-changer">
                    <select value={props.shelf} onChange={changeToShelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                    </select>
                </div>
            </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
        </div>
        )
    
}

export default Book;