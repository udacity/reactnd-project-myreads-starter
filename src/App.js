import React, { Component } from 'react';
import Header from './components/Header'
import Shelves from './components/Shelves';
import SearchButton from './components/SearchButton';
import * as BooksAPI from './BooksAPI';
import './App.css';

let books = [
    {
      id: '1',
      title: 'Economy',
      author: 'Fayq',
      shelf: 'read'
    },
    {
      id: '2',
      title: 'Marketing',
      author: 'Majdi',
      shelf: 'read'
    },
    {
      id: '3',
      title: 'OB',
      author: 'Saif',
      shelf: 'want'
    },
    {
      id: '4',
      title: 'Finance',
      author: 'Raheel',
      shelf: 'reading'
    }
  ]
  // Filter shelves uniquly
  let shelvesOptions = [...new Set(books.map(book => book.shelf))];

class BooksApp extends Component {
    
  state = {
    
  }

  render() {
    return (   
      <div className="app list-books">
        <Header pageTitle={'My Reads'} />
        <Shelves shelvesOptions={shelvesOptions} books={books}/>
        <SearchButton />
      </div> 
    )
  }
}

export default BooksApp
