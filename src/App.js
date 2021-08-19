import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Components/Books'

class BooksApp extends React.Component {
  state = {

    books: [],
    query: '',
    
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
    this.setState(()=>({
      query: quer.trim()
    }))
  }
  

  render() {

    const { query, books } = this.state

    const showingBooks = query === ''
    ? books
    : books.filter((ser) => (
      ser.title.toLowerCase().includes(query.toLowerCase())
    ))

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text"
                 value={query}
                 onChange={(event)=>this.updateQuery(event.target.value)}
                 placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  showingBooks.map((searchedBook)=>(
                    <li key={searchedBook.id}>
                      <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${searchedBook.imageLinks.thumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={searchedBook.shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{searchedBook.title}</div>
                          <div className="book-authors">{searchedBook.authors}</div>
                        </div>
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>

        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>
                  <Books books={this.state.books} changeBook={this.bookChange}/>
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
