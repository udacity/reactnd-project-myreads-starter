import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })

  }


  updateBook = (book, shelf) => {
    
  this.setState((state) => {
      const results = this.state.books.filter(currentbook => currentbook.id === book.id);
      results[0].shelf = shelf

  }
    )

BooksAPI.update(book, shelf)

}

//     Hey @ivan7707 just to get you moving in the right dirction think about using a filter 
// to look through this.state.books and return when this.state.books === books.id

// That will return to you the book that needs to be udpated

// I'm just heading out but if you haven't figured it out or had any more help by the time I log 
// back in tomorrow I'll be happy to help

// Or you could use map to look through this.state.books and update the object where the ID's are the same

//     )
// }

  //     this.setState((state) => {
  //         Books: {book.shelf}

  //     // })
  //     console.log('TEST UPDATE', book.shelf, shelf)


      
            
              
  //     //   }))

  //     BooksAPI.update(book, shelf)

  
  

  render() {
    return (
       <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            onUpdateBook={this.updateBook}
            books={this.state.books}

           />
        )}/>

        <Route exact path='/search' render={() => (
          <SearchBooks />
        )}/>
    
      </div>
      )
  }
}

export default BooksApp
