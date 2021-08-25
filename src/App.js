import React,{useState,useEffect} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './components/Home'
import {Route} from "react-router-dom"
import Search from './components/Search'

function App(){
  const [book,setBook]=useState([]);
  const [isloaded,setIsloaded]=useState(false);
  useEffect(() => {

    BooksAPI.getAll().then((res) => {
    setBook(res);
    setIsloaded(true);
    })
  }, [book]);
  const updateShelf=(updatebook,shelf)=>{
    BooksAPI.update(updatebook,shelf); 
  }
  if(isloaded){
    return (
      <div className="app">
        <Route path="/" exact render={()=>(
          <Home 
          books={book}
          updateShelf={ updateShelf}
          />
        ) }></Route>
     <Route path="/search"  render={()=>(
          <Search 
          books={book}
          updateShelf={updateShelf}
          />
        ) }></Route> 
      </div>
    )
     }
     return(
       <div>
         <h1>Loading</h1>

       </div>
     )
}
export default App;

