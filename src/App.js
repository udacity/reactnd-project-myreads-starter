import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main'
import Search from './Search'
import {BrowserRouter as Router , Route} from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books : []
  }

  async componentDidMount()
  {
    this.updatebook();
  }



  async updatebook(e)
  {
    const fetchapi = BooksAPI.getAll();
    fetchapi.then((data) =>
    {
      
      this.setState({books : data});
    });
  }


   updatebookshelf = async (id,shelf) =>
  {
     console.log(id);
     console.log(shelf);

     BooksAPI.update(id,shelf).then((data) =>
     {
       
       this.updatebook();
     }
     )
  }

 



  render() {

    if(this.state.books.length === 0)
    {
      return <h1>loading ....</h1>
    }
    return (

      <div>
        <Router>
          <Route path="/" exact render = { () =>
          (
            <Main books = {this.state.books} updatebookshelf = {this.updatebookshelf}/>
          )}/>
          <Route path="/search" exact render = { () => (
            <Search updatebookshelf = {this.updatebookshelf}/>
          )} />

          
        </Router>
      </div>
    );
  }
}

export default BooksApp
