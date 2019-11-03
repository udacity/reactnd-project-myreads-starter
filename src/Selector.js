import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Selector extends Component {
  state = {
    value: 'none'
  };

  handleSelectionChangeEvent = (event) => {
    event.preventDefault();
    const selectionValue = event.target.value;

    if (this.props.currentSection !== selectionValue) {
      this.setState({ value: selectionValue })
      this.props.onSelectorClick(selectionValue)
    }
  };


  render() {
    return (
      <select value={this.props.currentSectionKey || this.state.value} onChange={this.handleSelectionChangeEvent}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

Selector.propTypes = {
  currentSection: PropTypes.string.isRequired,
  currentSectionKey: PropTypes.string,
  onSelectorClick: PropTypes.func,
  book: PropTypes.object.isRequired
};

export default Selector;