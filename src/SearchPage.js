import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import './App.css'


class SearchPage extends Component{


  /**
  * @description Represents the seach Page
  * @constructor Initializes let timeout to 0
  * @param {string} props from app.js page.
  */

constructor(props){
  super(props)
  this.timeout = 0;

}
//holds the state of books display
state = {
  books:[]
}
  // searches the API for a search term, then updates the search starter
  clearArray = (array) => {
    this.setState({books:[]})
  }

// searches for event changes in search bar
  search = (event) => {
  //  update(event.target.value.trim())

  let test = event.target.value

  if(this.timeout) clearTimeout(this.timeout);
  this.timeout = setTimeout(() => {

    if(test==="") return(
      this.setState( {
      books: []}
      )
    )



  BooksAPI.search(test, 20).then(response => {
    if(response.error==="empty query")
    {

      return(
        this.setState({books: []})
      )

  }
    //let frontBooks = this.props.books;
    console.log(this.state.books)
     this.props.books.forEach(function(rElement){
       response.forEach(function(fElement){
          if(rElement.id === fElement.id) // if searched book is on a shelf then update the books status on the search page
          {
            fElement.shelf = rElement.shelf

            //this.props.updateShelf(fElement.shelf,)
          }
       }
     )
    }
  );
    // sets the search page state with the updated books
    this.setState( {
    books: [...response]}
    )

})

}, 800) // response time in ms for a new search after there is a change on the search bar
}


// if book has no thumbnail return null to catch an error if thumbnail does not exist
catchError = (book) => {
if(book.imageLinks == null)
return(null)
else return (book.imageLinks.thumbnail)
}

  render(){
    return(
          <div className="search-books">
            <div className="search-books-bar">
            <Link className="close-search" to='/'/>
              <div className="search-books-input-wrapper">
                {



                  /*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.search}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
{ // loops through state and displays each book in state
              this.state.books.map(book => (

  <Book key={book.id} id={book.id} book={book} title={book.title} image={this.catchError(book)} onUpdateShelf={this.props.onUpdateShelf} shelf={book.shelf}/>))
}

              </ol>
            </div>
          </div>


    )//return

  }//render



}
export default SearchPage
