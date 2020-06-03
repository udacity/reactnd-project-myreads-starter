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

  async updatebook()
  {
    const fetchapi = BooksAPI.getAll();
    fetchapi.then((data) =>
    {
      console.log(data);
      this.setState({books : data});
    });
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
            <Main books = {this.state.books}/>
          )}/>
          <Route path="/search" exact render = { () => (
            <Search />
          )} />

          
        </Router>
      </div>
    );
  }
}

export default BooksApp
