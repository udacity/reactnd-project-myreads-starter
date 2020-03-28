import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';
import * as API from './BooksAPI';
import BookShelf from './Components/bookshelf';
import Header from './Components/header';
import Search from './Components/Search/search';
import SearchButton from './Components/Search/searchbutton';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSearchPage: false,
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };
  }

  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */

  // };

  logState = () => console.log(this.state);

  handleShelfChange = () => {
    console.log(`Should probably change the shelf ¯\_(ツ)_/¯`);
  };

  fetchData = () => {
    API.getAll().then((books) => {
      console.log('Books recieved: ', books);
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];
      books.forEach((book) => {
        console.log('Book: ', book.shelf);
        if (book.shelf === 'currentlyReading') currentlyReading.push(book);
        else if (book.shelf === 'wantToRead') wantToRead.push(book);
        else if (book.shelf === 'read') read.push(book); // ? adding this line to prevent mistakes from API
      });
      this.setState({
        currentlyReading,
        wantToRead,
        read,
      });
      this.logState();
    });
  };

  componentDidMount = () => {
    const { fetchData } = this;
    fetchData();
  };

  render() {
    const { history } = this.props;
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="app">
        <Route path="/search" render={() => <Search goHome={() => history.push('/')} />} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <BookShelf
                title="Currently Reading"
                books={currentlyReading}
                handleShelfChange={this.handleShelfChange}
              />
              <BookShelf
                title="Want to Read"
                books={wantToRead}
                handleShelfChange={this.handleShelfChange}
              />
              <BookShelf title="Read" books={read} handleShelfChange={this.handleShelfChange} />
              <SearchButton goBack={() => history.push('/search')} />
            </div>
          )}
        />
      </div>
    );
  }
}

BooksApp.propTypes = { history: PropTypes.any };

export default withRouter(BooksApp);
