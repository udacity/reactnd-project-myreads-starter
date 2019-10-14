import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookList from "./BookList";

class Section extends Component {

  handleSectionChangePropogation = (updatedSection, currentSection, book) => {
    console.log("Inside Section", updatedSection, currentSection, book);
    this.props.onSectionChange(updatedSection, currentSection, book);
  };

  render() {
    console.log(this.props.section);
    const { section } = this.props;
    return (
      <div>
        <BookList
          bookIds={section.bookIds}
          section={section.name}
          onSectionChange={this.handleSectionChangePropogation}
        />
      </div>
    )
  }
}


Section.propTypes = {
  section: PropTypes.object.isRequired,
  onSectionChange: PropTypes.func
};

export default Section;


// Algorithm:
// Filter the books depending on which section is being displayed
// What do I need in order to do that? I need a way to track which is the self
//
