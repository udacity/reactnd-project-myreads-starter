import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Main from './Main'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route exact path='/' render={() => (
            <Main
              /*
              contacts={this.state.contacts}
              onDeleteContact={this.removeContact}
              */
            />
          )} />
          <Route path='/search' render={() => (
            <Search
              /*
              onCreateContact={(contact) => {
                this.createContact(contact)
                history.push('/')
              }}
              */
            />
          )} />
        </div>
      </Router>
      </div>
    )
  }
}

export default BooksApp
