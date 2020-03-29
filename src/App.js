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
      searchQuery: '',
      queryResult: [],
    };
  }

  logState = () => console.log(this.state);

  varToString = (varObj) => Object.keys(varObj)[0];

  filterResult = (booksInShelves, queryResult) => {
    const filtered = booksInShelves.filter((stateBook) => {
      const temp = queryResult.map((r) => r.id);
      return temp.includes(stateBook.id);
    });
    console.log('F: ', filtered);
    queryResult.forEach((book) => {
      filtered.forEach((inState) => {
        if (book.id === inState.id) {
          /* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["book"] }] */
          book.shelf = inState.shelf;
          console.log('Adding shelf');
        }
      });
    });
    this.setState({ queryResult });
  };

  fetchQuery = () => {
    const { currentlyReading, wantToRead, read, queryResult } = this.state;
    API.search('Artificial Intelligence').then((result) => {
      // console.log('SHELF: ', resultInShelf);
      // this.filterResult([...currentlyReading, ...wantToRead, ...read], queryResult);
      this.setState({ queryResult: result });
      console.log('QueryResult: ', result);
    });
  };

  /**
   * @description Adds book to Shelf in state
   * @param  {} id Book ID
   * @param  {} shelf New Shelf of Book
   */
  addBook = (id, shelf) => {
    console.log('Adding Book');
    API.get(id).then((book) => {
      const { [shelf]: currShelf } = this.state;
      currShelf.push(book);
      this.setState({
        [shelf]: currShelf,
      });
      // FIXME : ADD SHELFNAME TO BOOK IN STATE
    });
  };

  /**
   * @description Updates State: Removes Book from Current Shelf and Adds book to new Shelf
   * @param  {} id Book ID
   * @param  {} currShelf current Shelf
   * @param  {} toShelf new Shelf
   */
  moveBook = (id, currShelf, toShelf) => {
    if (currShelf !== 'none') {
      let { [currShelf]: shelf } = this.state;
      shelf = shelf.filter((book) => book.id !== id);
      this.setState({
        [currShelf]: shelf,
      });
    }
    if (toShelf !== 'none') this.addBook(id, toShelf);
  };

  handleShelfChange = (book, fromShelf, toShelf) => {
    const b = {};
    b.id = book;
    console.log(
      // eslint-disable-next-line no-useless-escape
      `Should probably move book ${book} from shelf ${fromShelf} to shelf ${toShelf} ¯\_(ツ)_/¯\nBook: ${b.id}`,
    );
    API.update(b, toShelf).then((result) => {
      if (toShelf === 'none' || result[toShelf].includes(book))
        this.moveBook(book, fromShelf, toShelf);
    });
  };

  wait = (ms) => {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
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
    const { fetchData, fetchQuery } = this;
    fetchData();
    fetchQuery();
  };

  render() {
    const { history } = this.props;
    const { currentlyReading, wantToRead, read, queryResult } = this.state;
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search
              goHome={() => history.push('/')}
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              handleShelfChange={this.handleShelfChange}
              queryResult={queryResult}
              stateShelves={[...currentlyReading, ...wantToRead, ...read]}
              filterResult={this.filterResult}
            />
          )}
        />
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
