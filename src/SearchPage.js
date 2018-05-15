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
  books:[{"hi":"hello"}]
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
alert(test)
  BooksAPI.search(test, 20).then(response => {

    this.clearArray()

    this.setState({
    ...response}
    )
/*
      this.setState({
        books:
      })
*/
  console.log(this.state)})

  }, 3000)

  //alert(this.timeout)

  //this.setInterval(alert(test), 3000)


  //alert(test)



  }

update = (query) => {

  BooksAPI.search(query).then(

  )
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
              //  displays books in state with updated search/
              </ol>
            </div>
          </div>


    )//return

  }//render



}
export default SearchPage
