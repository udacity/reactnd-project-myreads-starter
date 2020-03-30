import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Removes Boilerplate Code.
 * @returns <option /> Component for Selector
 */
const Option = ({ label, currShelf }) => {
  return (
    <option value={label}>
      {currShelf ? '✔' : `  `}
      {label}
    </option>
  );
};
Option.defaultProps = {
  currShelf: false,
};
Option.propTypes = {
  currShelf: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

/**
 * @description Adds Option Button to Move Book to Another Shelf.
 * @param  {} changeShelf - Function which handles Shelf Changing
 * @param  {} currShelf Current Shelf Of the Book.
 */
const ShelfChanger = ({ changeShelf, currShelf, id }) => {
  const shelves = [
    'currentlyReading',
    currShelf === 'currentlyReading',
    'wantToRead',
    currShelf === 'wantToRead',
    'read',
    currShelf === 'read',
    'none',
    currShelf === 'none',
  ];
  return (
    <div className="book-shelf-changer">
      <select
        value="move"
        onChange={
          (event) =>
            event.target.value !== currShelf ? changeShelf(id, currShelf, event.target.value) : null
          // eslint-disable-next-line react/jsx-curly-newline
        }
      >
        <option value="move" disabled>
          Move to...
        </option>
        <Option currShelf={shelves[1]} label={shelves[0]} />
        <Option currShelf={shelves[3]} label={shelves[2]} />
        <Option currShelf={shelves[5]} label={shelves[4]} />
        <Option currShelf={shelves[7]} label={shelves[6]} />
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  changeShelf: PropTypes.func.isRequired,
  currShelf: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ShelfChanger;
