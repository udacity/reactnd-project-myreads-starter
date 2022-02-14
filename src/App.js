import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Routes,Route } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';
import SearchBook from './SearchBook';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  constructor(props) {
    super(props);
 
    this.state = {
      books: ''
    };
  }
 
  componentDidMount() {
    BooksAPI.getAll().then((data) => this.setState({
      // name: user.name,
      // age: user.age
      books: data
    }));
  }
  addBookButtonClick = () => (
    this.setState({showSearchPage: true})
  )
  backButtonClick = () => (
    this.setState({showSearchPage: false})
  )

  updateBookShelf = (book, shelf) => {
    if(book.shelf === shelf)
      return;
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    }).catch(err => console.log(err))

    
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Routes>
          <Route exact path='/' element={
            <MainPage
              books={books} 
              onShelfUpdate={this.updateBookShelf}
            />
          }/>
          <Route exact path='/search' element={
            <SearchBook 
              books={books}
              onShelfUpdate={this.updateBookShelf}
            />
          }/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
