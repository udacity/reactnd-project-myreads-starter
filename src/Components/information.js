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
      {/* <div className="book-authors">{author.length <= 1 ? author : `${author[0]} & more`}</div> */}
      <div className="book-authors">{author.join(', ')}</div>
    </div>
  );
};

Information.defaultProps = {
  title: '',
  author: '',
};

Information.propTypes = {
  title: PropTypes.string,
  author: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string).isRequired, PropTypes.string]),
};
export default Information;
