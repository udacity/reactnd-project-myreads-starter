import React from 'react'

import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'

// import * as BooksAPI from './BooksAPI'
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

  constructor() {
    super();
    this.navigateToSearchPage = this.navigateToSearchPage.bind(this);
    this.navigateToHomePage = this.navigateToHomePage.bind(this);
  }

  navigateToHomePage() {
    this.setState({
      showSearchPage: false
    })
  }

  navigateToSearchPage() {
    this.setState({
      showSearchPage: true
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ?
          <SearchPage navigateToHomePage={this.navigateToHomePage}/> :
          <HomePage navigateToSearchPage={this.navigateToSearchPage}/>
        }
      </div>
    )
  }
}

export default BooksApp
