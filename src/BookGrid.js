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
                        <Book 
                            book={book}
                            onUpdate={this.props.onUpdate}
                        />
                    </li>
                ) }
            </ol>    
        </div>
        );
    }
}

export default BookGrid;