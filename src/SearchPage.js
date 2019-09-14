import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'



class SearchBooks extends React.Component {
    state={
        query:'',
        books: [],
        shelf:''
         
    }

updateQuery = (event)=>{
    event.preventDefault();
    const newlist= event.target.value
  this.setState(() => ({
      query: newlist
  }))
    // pass the new quary the user type it.
    this.SearchForBook(this.state.query)
    
    }
 
    // search for books in database the match the query and then return it .
    SearchForBook = (query)=>{
        // check if the query not empty and then search
        // this sentence solved the post problem that i got it.
        if (query.length > 0) {
        BooksAPI.search(query)
        .then((result)=>{
            if (Array.isArray(result)) {
            this.setState(() => ({
                books: result 
            })) }  
        }
        )}
        else {
            // not found
            this.setState({
                books: []

            }) 
        } 

}

    // update the 
    UpdateShelf=(event)=>{
     const newShelf=event.target.value
     this.setState(()=>({

     }))
     console.log(this.state.shelf)

    }


render(){
    const { books, query}=this.state;

    const showingBooks = books.error === "empty query"
        ? <h1>The Result Not Found</h1> : books.filter((c) => (
            c.title.toLowerCase().includes(query.toLowerCase())
        ))

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
                        <input type="text" placeholder="Search by title or author" value={query} onChange={ this.updateQuery} />

                    </div>
                </div>
            
            
                <div className="search-books-results">
                    <ol className="books-grid">
                        { // the books show only if book has book and the search input has query
                            showingBooks.length>0 && query.length>0
                            &&
                            (showingBooks.map((book)=>(
                            <li className="books-grid li" key={book.id}>
                                   <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ 
                                            width: 128,
                                             height: 192,
                                                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail:""} )` }}>
                                         </div>
                                        <div className="book-shelf-changer">
                                            <select value={this.state.shelf} onChange={this.UpdateShelf}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading" defaultValue>Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{`${book.authors ? book.authors : ""}`}</div>
                                </div>
                            </li>)
                             ))}
                        <div>
                            {
                                // if we search for book and the books not found show this massage
                                books.error === "empty query"
                                &&
                                (<h1>The Result Not Found</h1>)

                            }
                        </div>
                        {console.log(books)}
                    </ol>
               
                </div>
            </div>
        </div>
    );
}




}

export default SearchBooks;


