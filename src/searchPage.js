import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
  render(){
    return(
      // The link element makes navigating between pages home page and search seamless. this component opens the search page
      <div className="open-search">
        <Link 
          to='/search'
        ><button>Add a book</button></Link>
      </div>
    );
  }
}
export default SearchPage