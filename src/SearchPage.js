import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book.js'
import './App.css'


class SearchPage extends Component{

constructor(props){
  super(props)
  this.timeout = 0;

}

state = {
  books:[]
}

  // searches the API for a search term, then updates the search starter


  clearArray = (array) => {
    this.setState({books:[]})
  }

  search = (event) => {
  //  update(event.target.value.trim())

  var test = event.target.value




  if(this.timeout) clearTimeout(this.timeout);
  this.timeout = setTimeout(() => {

    if(test==="") return(
      this.setState( {
      books: []}
      )
    )


    //alert('blank!')
  BooksAPI.search(test, 20).then(response => {


    //console.log(response);
    //console.log(this.props.books)
    var frontBooks = this.props.books;
    console.log(response)
    console.log(this.props.books)
    //var i = 0
     this.props.books.forEach(function(rElement){
      // console.log(JSON.stringify(rElement))

       response.forEach(function(fElement){
          if(rElement.id == fElement.id)
          {
          //  alert("we have a match!")
            fElement.shelf = rElement.shelf
          }
       }
     )

    }
  );

    this.setState( {
    books: [...response]}
    )

})

}, 800)

  //alert(this.timeout)

  //this.setInterval(alert(test), 3000)


  //alert(test)



  }

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
{
              this.state.books.map(book => (

  <Book key={book.id} id={book.id} book={book} title= {book.title} image={this.catchError(book)} onUpdateShelf={this.props.onUpdateShelf} shelf={book.shelf} />

              ) )
}

              </ol>
            </div>
          </div>


    )//return

  }//render



}
export default SearchPage
