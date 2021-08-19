import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Components/Books'
import SearchBook from './Components/SearchBook'

class BooksApp extends React.Component {
  state = {

    books: [],
    query: [],
    
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }


  componentDidMount(){
    BooksAPI.getAll()
    .then((response)=>{
      this.setState(()=>({
        books: response
        
      }))
      console.log("Books",this.state.books)
    })
    
  }

  bookChange =(shelf,book)=> {

    BooksAPI.update(book,shelf)
    .then((response)=>{
      this.setState(()=>({
        books: Object.values(response)
      }))
      window.location.reload()
    console.log("shelfs",this.state.books)
    })
  }

  updateQuery = (quer)=>{
    BooksAPI.search(quer)
    .then((response)=>{
      if (response != null) {
        this.setState(()=>({
          query: Object.values(response)
        }))
      }
      else{
        this.setState(()=>({
          query: []
        }))
      }
      
      console.log("my Query",this.state.query)
    })
    
  }
  

  render() {

    const { query } = this.state

    // const showingBooks = query === ''
    // ? books
    // : books.filter((ser) => (
    //   ser.title.toLowerCase().includes(query.toLowerCase()) 
    //   || ser.authors.includes(query.toLowerCase())
    // ))

    return (
      <div className="app">
        {this.state.showSearchPage ? (

          <SearchBook thequery={query} updateQuery={this.updateQuery} changeBook={this.bookChange}/>

        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                  <Books books={this.state.books} changeBook={this.bookChange} />
              </div>
             </div>

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
