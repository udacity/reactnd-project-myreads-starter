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
      <div className="book-title">{title ? title : 'No Data Available'}</div>
      <div className="book-authors">{author ? author : 'No Data Available'}</div>
    </div>
  );
};
Information.propTypes = {
  title: PropTypes.string,
  author: PropTypes.arrayOf(PropTypes.string),
};
export default Information;
