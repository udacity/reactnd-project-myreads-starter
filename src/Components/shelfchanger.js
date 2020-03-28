import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Removes Boilerplate Code.
 * @returns <option /> Tag for Selector
 */
const Option = ({ currShelf, label }) => {
  return currShelf !== label ? <option value={label}>{label}</option> : null;
};

/**
 * @description Adds Option Button to Move Book to Another Shelf.
 * @param  {} changeShelf - Function which handles Shelf Changing (updating state)
 * @param  {{} currShelf='none' Current Shelf Of the Book. Default Value "none"
 */
const ShelfChanger = ({ changeShelf, currShelf }) => {
  console.log('CurrShelf: ', currShelf);
  return (
    <div className="book-shelf-changer">
      <select onChange={(value) => changeShelf(value)}>
        <option value="move" disabled>
          Move to...
        </option>
        <Option currShelf={currShelf} label="currentlyReading" />
        <Option currShelf={currShelf} label="wantToRead" />
        <Option currShelf={currShelf} label="read" />
        <Option currShelf={currShelf} label="none" />
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  currShelf: PropTypes.string,
};

export default ShelfChanger;
