import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'


// Components
import Currently from './Components/Currently';
import Read from './Components/Read';
import WantTo from './Components/WantTo';


class BooksApp extends React.Component {
  state = {
    currentlyReading: null,
    wantToRead: null,
    read: null,
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      }).then(() => {
        this.setState({
          currentlyReading: Object.values(this.state.books).filter((smoke) => (
            smoke.shelf === 'currentlyReading'
          ))
        })
      })
  }
  // removeContact = (contact) => {
  //   this.setState((currentState) => ({
  //     contacts: currentState.contacts.filter((c) => {
  //       return c.id !== contact.id
  //     })
  //   }))

  //   BooksAPI.remove(contact)
  // }
  // createContact = (contact) => {
  //   BooksAPI.create(contact)
  //     .then((contact) => {
  //       this.setState((currentState) => ({
  //         contacts: currentState.contacts.concat([contact])
  //       }))
  //     })
  // }

  render() {
    const currentReads = this.state.books && Object.values(this.state.books).filter((smoke) => (
      smoke.shelf === 'currentlyReading'
    ))
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Currently currentBooks={this.state.currentlyReading} />
               
                <WantTo />
                <Read />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
