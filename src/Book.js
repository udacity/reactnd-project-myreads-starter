import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateShelf: PropTypes.func.isRequired
    }

    render() {

        const { onUpdateShelf, book } = this.props

        return(
            <li key = {book.id} >
                <div className="book">
                    <div className="book-top">
                        {
                            book.imageLinks !== undefined ?
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url( ' + book.imageLinks.thumbnail + ')' }}></div>
                            : <div className="book-cover" style={{ width: 128, height: 193, background: 'gray' }}></div>
                        }
                        <div className="book-shelf-changer">
                        
                        <select onChange = {(e) => onUpdateShelf(book, e.target.value)} value={ book.shelf }>
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
                    { 
                        
                        book.authors !== undefined && 
                        book.authors.map((author, i) => (
                            book.authors.length - 1  !== i ? author + ", " : author 
                        ))
                        
                    }
                    </div>
                    
                </div>
            </li>
        )

    }

}

export default Book