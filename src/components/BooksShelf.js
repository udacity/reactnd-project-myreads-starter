import React, { Component } from 'react';
import Books from './Books';

const BookShelf = (props) => {
    
    // render() {
        console.log('Bookshelf', props.books)
        return (
            <ol className='books-grid'>
                {
                    props.books.map((book, i) => (
                        <li key={i}>
                            <Books
                            book={book}
                            books={props.books}
                            key={i}
                            onShelfOptionChange={props.onShelfOptionChange}
                        />
                        </li>
                        
                    ))
                }
            </ol>
        );
    // }
}

export default BookShelf;