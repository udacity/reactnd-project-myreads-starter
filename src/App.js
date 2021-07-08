import React,{ useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Search from './components/Search';
import ListBooks from './components/ListBooks';

const shelves = [
  {
    id:1,
    name: 'Currently Reading',
  },
  {
    id:2,
    name: 'Want to Read'
  },
  {
    id:3,
    name: 'Read'
  }
];

const App = () => {
  const [books, setBooks] = useState();
  const [search, setSearch] = useState();

  const [error, setError] = useState(false);

const bookData = async ()=> {
    try {
        const response = await BooksAPI.getAll()
        console.log(response)
    const books = await response.json()
    setBooks(books)
    } catch (error) {
        console.log(error)
    }
}
    useEffect(() => {
       bookData()
    }, [])
   

    return (
      <div className="app">
        
          <Search />
          
          <ListBooks />
      </div>
    )
  
}

export default App
