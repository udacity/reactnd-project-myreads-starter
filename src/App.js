import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './BookCard.css'
import BookCard from './BookCard.js'
import Header from './Header'
import { Route, Link } from 'react-router-dom'


class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookcover: '',
    query: '',
  }


  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState((currentState) => ({
          book: ''          
        }))
      })
  }


  render() {
    return (
    <div>
      <Header />
      <Route path='/add' render={() => (
        <div className="container">
               
              <div className="field">
                <div className="control">
                  <Link className="back-button" to="/"><span class="icon is-large has-text-dark"><i className="fas fa-lg fa-chevron-left" title="close search"></i></span></Link>
                                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" placeholder="Search by title or author" className="book-search-input input is-medium is-dark" />
                </div>
              </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
        </div>
        ) } />
        <Route exact path='/' render={() => (
            <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      <BookCard />                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                                          
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
             
                    </ol>
                  </div>
                </div>
              <div className="open-search">
                <Link to="/add" className="button is-dark is-bold is-rounded" id="add-book-button"></Link>
              </div>     
            </div>  )} /> 
          </div>
    )
  }
}

export default App
