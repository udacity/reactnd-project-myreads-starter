import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import Bookshelf from "./components/Bookshelf";

import {Route} from 'react-router-dom';


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
            <SearchBar/>
        )}/>

        <Route exact path="/" render={() => (
            <Bookshelf/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
