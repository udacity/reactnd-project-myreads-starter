import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  state = {
    books: []
  };

  render() {
    return (
      <div>
        <h3>{this.props.section}</h3>
        <BookList  />
      </div>
    )
  }
}

Section.prototype = {
  section: PropTypes.text.isRequired
};

export default Section;