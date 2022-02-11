import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Routes,Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  constructor(props) {
    super(props);
 
    this.state = {
      name: '',
      age: ''
    };
  }
 
  componentDidMount() {
    BooksAPI.getAll().then((user) => this.setState({
      // name: user.name,
      // age: user.age
      book: user
    }));
  }
  render() {
    return (
      <div className="app">
        {console.log(this.state)}
        <Routes>
        <Route exact path='/' render={() => (
          
          <p>root page</p>
        )}/>
        <Route exact path='/create' render={() => (
          <p>create page</p>
        )}/>
        </Routes>
      </div>
    )
  }
}

export default BooksApp
