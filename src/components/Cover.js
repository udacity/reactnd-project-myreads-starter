import React from "react";
import PropTypes from "prop-types";

const Cover = props => {
  const { book } = props;
  const hasThumbnail = book.imageLinks && book.imageLinks.thumbnail;

  const coverStyle = {
    width: 128,
    height: 193,
    backgroundImage: hasThumbnail && `url(${book.imageLinks.thumbnail})`
  }

  return (
    <div className="book-cover" style={coverStyle}></div>
  );
};

Cover.propTypes = {
    book: PropTypes.object.isRequired
}

export default Cover;
