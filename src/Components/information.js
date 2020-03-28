import React from 'react';
import PropTypes from 'prop-types';

/**
 * @description Renders Information about the Book
 * @param title
 * @param author
 */
const Information = ({ title, author }) => {
  return (
    <div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author.length <= 1 ? author : `${author[0]} & more`}</div>
    </div>
  );
};
Information.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Information;
