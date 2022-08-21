import React from 'react'
 import * as BooksAPI from './BooksAPI'
import './App.css'
// import Shelf from './components/Shelf';
import { Book } from './components/Book';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SearchBook from './components/SearchBook';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    currentlyReading:[],
    read:[],
    wantToRead: [],
    searchedBooks: []
    
  }
  //TODO: ADD COMPONENT DID MOUNT AND GET STATE OF BOOKS 
   componentDidMount() {
    BooksAPI.getAll().then(books => {  
      this.setState(()=>({
        books,
        
      }))
     })   
 
  }
  //https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
  
  changeShelf = (book, shelf)=> {    
   
    BooksAPI.update(book, shelf).then(updateBooks => {
      this.setState((prevState)=>({
        books: prevState.books.filter((updatedBook)=> updatedBook.id !== book.id).concat({...book, shelf}),
      }));
    }) 
  }
  searchBook=(query) => {
    BooksAPI.search(query).then(books =>{
      
      let booksToArray = [];
      const filteredBooks = booksToArray.concat(books).filter((book) => 
      book.name.includes(query) || 
      book.authors.some(author => author.includes(query))
    );
       
      this.setState((prevState)=>({
        searchedBooks: filteredBooks
        
      }))
    

    })

    
   }

  render() {  
    
    const { books, searchedBooks} = this.state; 
    console.log(JSON.stringify(searchedBooks.length));
    const currentlyReading= books.filter(book => book.shelf === 'currentlyReading');
    const read = books.filter(book => book.shelf === 'read');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    return (
      <BrowserRouter>
        <div className="app">
           {/* Search page was here */}
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    
                    <Book books={currentlyReading} changeShelf={this.changeShelf}/>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <Book books={wantToRead} changeShelf={this.changeShelf}/>
                      
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <Book books={read} changeShelf={this.changeShelf}/>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="open-search">
                <Link to='search' books={books}> 
                      <button>Add a book</button>
                </Link>
                
                
              </div>
            </div>
         
          
        </div>
       <Route path="/search" render={()=>( searchedBooks &&
           <SearchBook books={searchedBooks} searchBook={this.searchBook} changeShelf={this.changeShelf} />
       ) } />
       <Route path="/" exact />
      </BrowserRouter>
    )
  }
}

export default BooksApp
