import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from './Book';

class SearchBook  extends React.Component{
    
    
     getQuery = (query) => {  
         this.props.searchBook(query?query: ' ');
    }
    
    render(){
        const {books, getQuery} = this.props;
        const { imageLinks } = this.props.books; 
        const thumbnail = imageLinks? imageLinks.thumbnail : '';

    return(
        <div className="search-books">
            <div className="search-books-bar">            
            <Link to='/'>
                 <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                     placeholder="Search by title or author" 
                     onChange={(e)=> this.getQuery(e.target.value)}  />

            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
               { books && books.map(book => book.imageLinks && (
                   <li key={book.id}>
                   <div className="book">
                   <div className="book-top">
                       
                   <div className="book-cover"                           
                     style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                       <div className="book-shelf-changer">
                       <select onChange={(e)=>this.props.changeShelf(book,e.target.value)}>
                           <option value="move" disabled>Move to...</option>
                           <option value="" hidden></option>
                           <option value="currentlyReading">Currently Reading</option>
                           <option value="wantToRead">Want to Read</option>
                           <option value="read">Read</option>
                           <option value="none">None</option>
                       </select>
                       </div>
                   </div>
                   <div className="book-title">{book.title}</div>
                   <div className="book-authors">{book.authors}</div>
                   </div>
                </li>
               ))}
            </ol>
            </div>
        </div>
    )
    }
    
}
export default SearchBook;
