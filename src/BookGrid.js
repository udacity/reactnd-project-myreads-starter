import React, {Component} from 'react';
import Book from './Book';

class BookGrid extends Component {

    render(){

        let books = this.props.data;
        return (
        <div className="books-grid-container">
            <ol className="books-grid">
                {books.map( ( book ) => 
                    <li key={book.id}>
                        <Book author={book.authors.join(', ')} title={book.title} coverUrl={book.imageLinks.thumbnail}  />
                    </li>
                ) }
            </ol>    
        </div>
        );
    }
}

export default BookGrid;