import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'



class SearchBooks extends React.Component {
    state={
        query:'',
        books: [],
        notFound:''
       
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
 
    // search for books in database that match the query and then return it .
    SearchForBook = (query)=>{
        // check if the query not empty and then search
        // this sentence solved the post problem that i got it.
        if (query.length > 0) {
        BooksAPI.search(query)
        .then((result)=>{
            if (Array.isArray(result)) {
            this.setState(() => ({
                books: result,
                notFound:"correct"
            }))
            } else {
                // Invalid query
                this.setState({
                    notFound:result
                })
            } 

            
            console.log(this.state.notFound)
        }
        )}
        
        else {
            // not found
            this.setState({
                books: [],
            }) 
        } 

}

   

render(){
    const { books, query,notFound}=this.state;
    const { UpdateShelfBook}=this.props;

    const showingBooks = (books.length >= 0 && query.length > 0
        ?  books.filter((c) => (
            c.title.toLowerCase().includes(query.toLowerCase())
        )):"" ) 


    return(
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    
                    <Link to="/">
                        <button className="close-search" >Close</button>
                    </Link> 
                        
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={ this.updateQuery} />
                    </div>
                </div>
            
            
                <div className="search-books-results">

                    <ol className="books-grid">
                      

                        { // the books show only if books has book and the search input has query
                            showingBooks.length>0 && query.length>0
                            &&
                            (showingBooks.map((book)=>(
                            <li className="books-grid li" key={book.id}>
                                 <Book title={book.title} authors={book.authors} 
                                    imageLinks={book.imageLinks}
                                    shelf={book.shelf} 
                                    book={book} 
                                   UpdateShelfBook={UpdateShelfBook}
                                        key={book.id} />
                            </li>)
                             ))}
                         {
                            showingBooks && notFound.error ==="empty query"
                                     &&
                               <h3>The Result Not Found</h3>
                             }
                       

                        {/* {console.log(books)} */}
                    </ol>
               
                </div>
            </div>
        </div>
    );
}

}

export default SearchBooks;


