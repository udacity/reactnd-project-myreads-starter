import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Components/Books'
import SearchBook from './Components/SearchBook'
import { Route, Link } from 'react-router-dom'
class BooksApp extends React.Component {
  state = {

    books: [],
    query: [],
    
    
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
        this.setState({
          query: []
        })
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
        
        <Route exact path="/search" render={()=>(
            <SearchBook books={this.state.books} thequery={query} updateQuery={this.updateQuery} changeBook={this.bookChange}/>

        )}/>

        <Route exact path="/" render={()=>(
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
                
                  <Link to='/search'>Add a book</Link>
                
                </div>
              </div>
          )}/>
        
      </div>
    )
  }
}

export default BooksApp
