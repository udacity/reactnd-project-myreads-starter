import React from 'react'
import Book from './Book'

function Shelf(props) {
    return (
        <div className='bookshelf'>
            <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            <div className='bookshelf-books'>
            <div className='books-grid'>
                <ol className="books-grid">
                    {props.books.filter(book => book.shelf === props.shelf).map(book =>
                        <li key={book.id}>
                            <Book 
                            book={book}/>
                        </li>
                    )}
                </ol>
            </div>
            </div>
        </div>
    )
}

export default Shelf;