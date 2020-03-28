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
      currShelf.push(book);
      this.setState({
        [shelf]: currShelf,
      });
    });
  };

  moveBook = (id, currShelf, toShelf) => {
    let { [currShelf]: shelf } = this.state;
    shelf = shelf.filter((book) => book.id !== id);
    this.setState({
      [currShelf]: shelf,
    });
    this.addBook(id, toShelf);
  };

  handleShelfChange = (book, fromShelf, toShelf) => {
    const b = {};
    b.id = book;
    console.log(
      `Should probably move book ${book} from shelf ${fromShelf} to shelf ${toShelf} ¯\_(ツ)_/¯\nBook: ${b.id}`,
    );
    API.update(b, toShelf).then((result) => {
      if (result[toShelf].includes(book)) this.moveBook(book, fromShelf, toShelf);
    });
  };

  fetchData = () => {
    API.getAll().then((books) => {
      const currentlyReading = [];
      const wantToRead = [];
      const read = [];
      books.forEach((book) => {
        if (book.shelf === 'currentlyReading') currentlyReading.push(book);
        else if (book.shelf === 'wantToRead') wantToRead.push(book);
        else if (book.shelf === 'read') read.push(book); // ? adding the evaluation to prevent errors from API
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
