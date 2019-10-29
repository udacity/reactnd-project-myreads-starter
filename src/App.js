import React from 'react'
import './App.css';
import BookShelf from "./BookShelf";
import Search from './Search';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    section: []
  };

  updateAppState = (newState) => {
    console.log("Inside App", newState);
    this.setState({
      section: newState
    }, () => console.log('state', this.state))
  };

  updateSelection = (newSection, book) => {
    BooksAPI.update(book, newSection)
      .then(response => {
          console.log("This is updates response", response)
          return this.updateAppState(response)
        }
      );
  };

  handleSectionChange = (newSection, oldSection, book) => {
    this.updateSelection(newSection, book)
  };

  render() {
    return (
      <BrowserRouter class='app'>
        <Switch>
          <Route exact path='/' component={() => <BookShelf onSectionChange={this.handleSectionChange}/>}/>
          <Route exact path='/search' component={() => <Search onSectionChange={this.handleSectionChange} bookShelfState={this.state}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BooksApp
