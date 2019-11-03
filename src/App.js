import React from 'react'
import './App.css';
import BookShelf from "./BookShelf";
import Search from './Search';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  state = {
    sections: []
  };

  updateSelection = (newSection, book) => {
    BooksAPI.update(book, newSection)
      .then(response => this.updateAppState(response))
      .then(() => this.loadBooks());
  };

  handleSectionChange = (newSection, oldSection, book) => {
    this.updateSelection(newSection, book)
  };

  updateAppState = (newState) => {
    const { sections } = this.state;

    this.setState({
      sections: Object.assign(sections, newState, {})
    })
  };

  buildSection = (response) => {
    let sectionBooks = [];

    let readSection = {
      name: 'Read',
      key: 'read',
      books: []
    };

    let currentlyReading = {
      name: 'Currently Reading',
      key: 'currentlyReading',
      books: []
    };

    let wantToRead = {
      name: 'Want To Read',
      key: 'wantToRead',
      books: []
    };

    currentlyReading['books'] = this.filterBooksForSection(response, 'currentlyReading');
    sectionBooks.push(currentlyReading);

    wantToRead['books'] = this.filterBooksForSection(response, 'wantToRead');
    sectionBooks.push(wantToRead);

    readSection['books'] = this.filterBooksForSection(response, 'read')
    sectionBooks.push(readSection);

    return sectionBooks
  };

  filterBooksForSection = (response, key) => {
    return response.filter(book => book.shelf === key);
  };

  loadBooks = () => {
    BooksAPI.getAll()
      .then(resp => this.buildSection(resp))
      .then(result => this.updateAppState(result))
  };

  componentDidMount() {
    this.loadBooks();
  }

  render() {
    return (
      <BrowserRouter class='app'>
        <Switch>
          <Route exact path='/' component={() => <BookShelf bookshelf={this.state.sections}
                                                            onSectionChange={this.handleSectionChange}/>}/>
          <Route exact path='/search' component={() => <Search onSectionChange={this.handleSectionChange}
                                                               bookshelf={this.state.sections}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BooksApp
