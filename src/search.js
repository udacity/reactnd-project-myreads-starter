import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'

class Search extends Component{
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render(){
    return (
      <ListBooks 
      shelfName="Available Books" 
      availableBooks={this.state.books}
      update={this.props.update}
    />
    )
  }
}

export default Search