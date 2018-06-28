import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelfList from './BookShelfList';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[]    
  }

  componentDidMount(){
    BooksAPI.getAll().then((books)=>{
      this.setState({books})
      console.log(books)
    }
   )
  }
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>      
          {this.state.showSearchPage ? (
            <SearchBook/>
          ) : (
            <BookShelfList books={this.state.books} />
          )}
        </div>
      </div>
    )
  }
}

export default BooksApp
