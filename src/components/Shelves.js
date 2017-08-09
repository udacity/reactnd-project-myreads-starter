import React, { Component } from 'react'
import Shelf from './Shelf'

class Shelves extends Component {
    render(){
        
        let allBooks = this.props.books;
        let shelvesOptions = this.props.shelvesOptions;

        return (
            <div className="list-books-content">
                {shelvesOptions.map((shelf) => {return <Shelf shelfName={shelf} shelfBooks={allBooks.filter((book) => (book.shelf === shelf))}/>})}
            </div>
        )
    }
        
}

export default Shelves