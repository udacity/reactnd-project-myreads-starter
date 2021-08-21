import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './components/Home'
import {Route} from "react-router-dom"
import Search from './components/Search'
class App extends React.Component {
  state={
    book:[],
    isloaded: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((res) => {
      this.setState({ 
        book:res ,
        isloaded:true
      })
    })
  }
  updateShelf=(updatebook,shelf)=>{
  BooksAPI.update(updatebook,shelf);
    BooksAPI.getAll().then((res) => {  

      
      this.setState({ 
        book:res ,
        isloaded:true
      })
    })
    this.componentDidMount()
  }
  render() {
    if(this.state.isloaded){
    return (
      <div className="app">
        <Route path="/" exact render={()=>(
          <Home 
          books={this.state.book}
          updateShelf={this.updateShelf}
          />
        ) }></Route>
     <Route path="/search"  render={()=>(
          <Search 
          books={this.state.book}
          updateShelf={this.updateShelf}
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
}

export default App
