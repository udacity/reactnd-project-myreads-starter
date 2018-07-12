import React from 'react';
import Book from '../../components/Book';
import './styles.css';

const BooksGrid = ({ books, updateBook }) => {
	return (
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <Book
                        infos={book}
                        updateBook={updateBook}
                    />
                </li>
            ))}
        </ol>
	);
}

export default BooksGrid;
