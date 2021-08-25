import React,{useEffect,useState} from "react"
import { Link } from "react-router-dom"
import ListingBooks from "./ListingBooks"
import * as BooksAPI from '../BooksAPI'
function Search(props){
  const{books,updateShelf}=props
  const [query,setQuery]=useState('')
  const [result,setResult]=useState([])
  const [empty,setEmpty]=useState(true)
useEffect(() => {
    const  SearchQuery=()=>{
          BooksAPI.search(query).then((searchedBooks) => {
            if (searchedBooks.error) {
                setResult([])
                setEmpty(true)
            }
                else {
             setResult(searchedBooks)
             setEmpty(false)
               }
        }
        )
                }
                const throttleid = setTimeout(()=>{
                  if(query.length !== 0){
                    SearchQuery()
                  }
                  else{
                    setEmpty(true)
                  }

                },100)
                return()=>{
                  clearTimeout(throttleid)
                };
              
               
}, [query])

        return(
            <div className="search-books">
             
            <div className="search-books-bar">
                <Link to="/">
              <button className="close-search" >Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input  placeholder="Search by title"
                 value={query}
                 type="text"
                 onChange={(event)=>{setQuery(event.target.value)   
                   }}/>
              </div>
            </div>
                   <div className="search-books-results">
              <ol className="books-grid">
                    {   
                        result.map(searchedBook => {
                            let shelf = "none"
                            books.forEach(book => {
                                if (book.id !== searchedBook.id) {
                                    searchedBook.shelf = "none"
                                } else {
                                    shelf = book.shelf
                                }
                            })
                          if(empty===false){   
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
                            <li key={searchedBook.id}></li>
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
export default Search