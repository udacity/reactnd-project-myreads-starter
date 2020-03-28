import React from 'react';
import PropTypes from 'prop-types';
import GoBackButton from './gobackbutton';
import { search } from '../../BooksAPI';
import BooksGrid from '../booksgrid';

const Search = ({
  goHome,
  currentlyReading,
  // FIXME:  ADD AS SINGLE ARRAY ITERATE OVER IT
  wantToRead,
  read,
  queryResult,
  setQuery,
  handleShelfChange,
  stateShelves,
}) => {
  const sShelves = [...currentlyReading, ...wantToRead, ...read];

  const filtered = sShelves.filter((stateBook) => {
    const temp = queryResult.map((r) => r.id);
    return temp.includes(stateBook.id);
  });
  console.log('F: ', filtered);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <GoBackButton goBack={goHome} />
        <div className="search-books-input-wrapper">
          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
        <BooksGrid books={queryResult} handleShelfChange={handleShelfChange} />
      </div>
    </div>
  );
};

Search.defaultProps = {
  setQuery: () => console.log('SetQuery!'),
  stateShelves: [],
};

Search.propTypes = {
  goHome: PropTypes.func.isRequired,
  currentlyReading: PropTypes.arrayOf(PropTypes.object).isRequired,
  wantToRead: PropTypes.arrayOf(PropTypes.object).isRequired,
  read: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryResult: PropTypes.arrayOf(PropTypes.object).isRequired,
  setQuery: PropTypes.func,
  handleShelfChange: PropTypes.func.isRequired,
  stateShelves: PropTypes.arrayOf(PropTypes.object),
};

export default Search;
