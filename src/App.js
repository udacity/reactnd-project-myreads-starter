import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link, Route } from "react-router-dom";

class BooksApp extends React.Component {
  componentDidMount() {
    this.getAllBooks();
}

getAllBooks() {
    BooksAPI.getAll().then((books) => {
        this.setState({books});
    });
}

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <MainPage />
                        <div className="open-search">
                            <Link to="/search">Add a book</Link>
                        </div>
          </div>
        )}/>
        <Route path="/search" render={({ history }) => (
                    <Search
                        books={this.state.searchBooks}
                        updateQuery={this.updateQuery}
                        changeShelf={this.changeShelf}
                    />
                )}/>
      </div>
    )
  }
}

export default BooksApp
