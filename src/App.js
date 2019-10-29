import React from 'react'
import './App.css';
import BookShelf from "./BookShelf";
import Search from './Search';
import { BrowserRouter, Route, Switch } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
     sectionChange: false,
     updatedSectionDetails: {
       updatedSection: '',
       currentSection: '',
       book: {}
     }
  }

  onSectionChange = (updatedSection, currentSection, book) => {
    console.log("Inside App", updatedSection, currentSection, book);
    this.setState({
      sectionChange: !this.state.sectionChange,
      updatedSectionDetails: {
        updatedSection: updatedSection,
        currentSection: currentSection,
        book: book
      }
    }, () => console.log('state', this.state) )
  }

  render() {
    return (
      <BrowserRouter class='app'>
        <Switch>
          <Route exact path='/' component={() => <BookShelf updateSection={this.state}/>}/>
          <Route exact path='/search' component={() => <Search onSectionChange={this.onSectionChange}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default BooksApp
