import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Routes,Route } from 'react-router-dom';
import './App.css'
import MainPage from './MainPage';
import SearchBook from './SearchBook';
import bg from './images/bg.jfif';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: '',
    query: '',    
    searchResults: [],
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
    console.log(book);
    console.log(shelf);
    if(book.shelf === shelf)
      return;
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    }).catch(err => console.log(err))
  }

  onUpdateQuery = (query) => {
    // console.log(content)
    this.setState(() => ({
      query: query
    }))
    if(query) BooksAPI.search(query).then((result) => {
      this.setState(() => ({
        searchResults: !result.error ? result : []
      }));
    }).catch(err => console.log(err));
    else this.setState(() => ({searchResults: []}));
  }

  onLabelClick = (content) => {
    this.setState(() => ({
      query: content
    }))
    this.onUpdateQuery(content);
  }

  render() {
    return (
      <div className="app" >
        <Routes>
          <Route exact path='/' element={
            <MainPage
              books={this.state.books} 
              onShelfUpdate={this.updateBookShelf}
            />
          }/>
          <Route exact path='/search' element={
            <SearchBook
              books={this.state.searchResults}
              onShelfUpdate={this.updateBookShelf}
              query={this.state.query}
              onUpdateQuery={this.onUpdateQuery}
              onLabelClick={this.onLabelClick}
            />
          }/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
