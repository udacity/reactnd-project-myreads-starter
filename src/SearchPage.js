import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'


class SearchBooks extends React.Component {
    state={
        query:'',
        books: this.props.books
    }

updateQuery = (query)=>{
  this.setState(() => ({
      query: query
  }))
  // pass the new quary the user type it.
  this.SearchForBook(this.state.query)
    }
 
    // search for books in database the match the query and then return it .
    SearchForBook = (query)=>{
        BooksAPI.search(query) 
        .then((result)=>{
           if (Array.isArray(result)) {
            this.setState(() => ({
                books: result 
            })) }
         else {
              // not found
               this.setState({
                   books: []
               })} 
            
        })
    }


render(){
    
    const { query }= this.state;


    console.log(this.props.books)

      
    return(
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    
                    <Link to="/">
                        <button className="close-search" >Close</button>
                    </Link> 
                        
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
            
            
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.books.map((book)=>(
                            <li className="books-grid li" key={book.id}>
                                   <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ 
                                            width: 128,
                                             height: 192,
                                            backgroundImage: `url(${book.imageLinks.thumbnail} )` }}>
                                         </div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading" defaultValue>Currently Reading</option>
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
        </div>
    );
}




}

export default SearchBooks;
