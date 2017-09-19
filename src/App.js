import React from "react";
import "./App.css";
import HomePage from "./containers/HomePage";
import {Route} from "react-router-dom";


class BooksApp extends React.Component {

    render() {
        return (
            <div className="app">
              <Route exact path='/search' render={() => (
                  <div className="search-books">
                    <div className="search-books-bar">
                      <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                      <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                      </div>
                    </div>
                    <div className="search-books-results">
                      <ol className="books-grid"></ol>
                    </div>
                  </div>
              )} />
              <Route exact path='/' render={() => (
                  <HomePage/>
              )}
              />
            </div>
        )
    }

}

export default BooksApp
