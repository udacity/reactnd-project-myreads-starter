import React from "react";
import PropTypes from "prop-types";

class Shelf extends React.PureComponent {
  render() {
    const { bookShelfName, children } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{children}</ol>
        </div>
      </div>
    );
  }
}

Shelf.propTypes = {
  bookShelfName: PropTypes.string,
  children: PropTypes.array
};

export default Shelf;
