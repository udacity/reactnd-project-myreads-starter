import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from "./BookShelf";
import Search from './Search';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class BooksApp extends React.Component {
  render() {
    return (
      <BrowserRouter class='app'>
        <Switch>
          <Route exact path='/' component={BookShelf}/>
          <Route exact path='/search' component={Search}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BooksApp
