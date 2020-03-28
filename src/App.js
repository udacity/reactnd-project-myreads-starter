import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';
import * as API from './BooksAPI';
import LandingPage from './Components/landingpage';
import Search from './Components/Search/search';

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

  logState = () => console.log(this.state);

  addBook = (id, shelf) => {
    console.log('Adding Book');
    API.get(id).then((book) => {
      const { [shelf]: currShelf } = this.state;
      console.log('currShelf: ', currShelf, '\nbook: ', book);
      currShelf.push(book);
      this.setState({
        [shelf]: currShelf,
      });
    });
  };

  handleShelfChange = (book, shelf) => {
    const b = new Object({});
    b.id = book;
    console.log(`Should probably move book ${book} to shelf ${shelf} ¯\_(ツ)_/¯\nBook: ${b.id}`);
    API.update(b, shelf).then((result) => {
      console.log('Update: ', result);
      if (result[shelf].includes(book)) this.addBook(book, shelf);
      // this.setState({
      //   ...result,
      // });
    });

    // FIXME: MOVE BOOK TO OTHER SHELF; UPDATE STATE AND SERVER
  };

  fetchData = () => {
    API.getAll().then((books) => {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];
      books.forEach((book) => {
        if (book.shelf === 'currentlyReading') currentlyReading.push(book);
        else if (book.shelf === 'wantToRead') wantToRead.push(book);
        else if (book.shelf === 'read') read.push(book); // ? adding the evaluation to prevent mistakes from API
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
            <LandingPage
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              history={history}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

BooksApp.propTypes = { history: PropTypes.any.isRequired };

export default withRouter(BooksApp);
