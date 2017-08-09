import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render(){
        let shelfBooks = this.props.shelfBooks;
        let shelfName = this.props.shelfName;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelfBooks.map((book) => {return <Book title={book.title} author={book.author}/>})}
                    </ol>
                </div>
            </div>
        )
    }
        
}

export default Shelf