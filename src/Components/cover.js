import React from 'react';
import PropTypes from 'prop-types';
/**
 * @description Returns the rendered Cover of the Book
 * @param  {url} url to the image
 */
const Cover = ({ url }) => {
  return (
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${url}")`,
      }}
    />
  );
};

Cover.propTypes = {
  url: PropTypes.string,
};

export default Cover;
