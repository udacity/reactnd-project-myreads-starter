import React from "react"
import { Link } from "react-router-dom"
import ListingBooks from "./ListingBooks"
import * as BooksAPI from '../BooksAPI'
class Search extends React.Component{
    state={
        query: '',
        tab: [],
        empty: false
    }
    search=(query)=>{
        this.setState({
            query:query
        })
         this.SearchQuery(query)
    }
    SearchQuery=(query)=>{
      if(query.length !==0){
         BooksAPI.search(query).then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ tab: []}) 
                }
                    else {
                    this.setState({ tab: searchedBooks,empty:false})
                   }
            }
            )
        } 
        else {
            this.setState ({ empty:true})  
               }
      }    
    render(){
      const{books,updateShelf}=this.props
        return(
            <div className="search-books">
             
            <div className="search-books-bar">
                <Link to="/">
              <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input  placeholder="Search by title"
                 value={this.state.query}
                 type="text"
                 onChange={(event)=>{this.search(event.target.value)   
                   }}/>
              </div>
            </div>
                   <div className="search-books-results">
              <ol className="books-grid">
                    {   
                        this.state.tab.map(searchedBook => {
                          
                            let shelf = "none"
                            books.forEach(book => {
                                if (book.id !== searchedBook.id) {
                                    searchedBook.shelf = "none"
                                } else {
                                    shelf = book.shelf
                                }
                            })
                          if(this.state.empty===false){   
                            return(
                                <li key={searchedBook.id}>
                                 <ListingBooks 
                               books={searchedBook} 
                            updateShelf={updateShelf}
                            currentShelf={shelf}
                                />
                            </li>
                            )
                        }
                        else{
                          return(
                                  <li key={searchedBook.id}>
                            </li>
                          )
                        }
                        }
                        )
                    }
              </ol>
            </div>
            </div>
        )
    }
}
export default Search