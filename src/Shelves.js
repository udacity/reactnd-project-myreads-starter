import React from 'react';
import './App.css';
import Book from './Book'



class Shelves extends React.Component {
    render(){
        const { books, UpdateShelfBook}=this.props
        return(
            <ol className="books-grid">{
                books.map(book=>(
                    <li key={book.id}>
                        <Book title={book.title} authors={book.authors}
                            imageLinks={book.imageLinks}
                            shelf={book.shelf}
                            book={book}
                            UpdateShelfBook={UpdateShelfBook}
                            key={book.id}/>
                    </li>  
                ))
            }
                {console.log(books)}
            </ol>
        )
    }
}

export default Shelves;