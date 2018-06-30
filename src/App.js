import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfList from './BookShelfList';
import SearchBook from './SearchBook';
import {Link,Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {   
    books:[]    
  }

  componentDidMount= () => {    
    this.getAllBooks()
    
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books})      
    })
    console.log('get all books')
  }


  updateBookShelf(book,shelf) {
    BooksAPI.update(book,shelf).then((books)=>{
      this.getAllBooks()
      console.log(books)
    })
  }

  render() {
    return (
      
      <div className="app">              
        <div className="list-books">          
            <Route exact path="/search" render = {()=>( 
              <SearchBook books={this.state.books} updateBookShelf={this.updateBookShelf} />
            )}/>                                      
            <Route exact path="/" render = {()=>( 
              <BookShelfList books={this.state.books} updateBookShelf={this.updateBookShelf} />
            )}/>                      
        </div>
        <div className="open-search">
          <Link to="/search">Search Books</Link>               
        </div>          
      </div>
    )
  }
}

export default BooksApp
