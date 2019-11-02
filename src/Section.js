import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from "./BookList";

class Section extends Component {

  handleSectionChangePropogation = (updatedSection, currentSection, book) => {
    this.props.onSectionChange(updatedSection, currentSection, book);
  };

  render() {
    const { section } = this.props;
    return (
      <BookList
        books={section.books}
        section={section.name}
        onSectionChange={this.handleSectionChangePropogation}
      />
    )
  }
}


Section.propTypes = {
  section: PropTypes.object.isRequired,
  onSectionChange: PropTypes.func
};

export default Section;
