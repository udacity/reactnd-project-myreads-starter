import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'

class Selector extends Component {
  state = {
    newSelection: ''
  };

  updateSelection = (section) => {
    const { book } = this.props;
    console.log('here', book.id, section);
    BooksAPI.update(book, section)
      .then(response => {
          console.log('here too?', response);
        this.setState({
            newSelection: section
          },
          () => this.props.onSelectorClick(response)
        )
        }
      ).catch(error => console.log(error))
  };

  handleSelection = (event) => {
    event.preventDefault();
    const selectionValue = event.target.value;
    if (this.props.currentSelection !== selectionValue) {
      this.updateSelection(selectionValue)
    }
  };

  render() {
    return (
      <select onChange={this.handleSelection}>
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
  onSelectorClick: PropTypes.func,
  book: PropTypes.object.isRequired
}
export default Selector;

//Algorithm:
// Props will send currentSelector.
//Match currentSelector to new selector.
// if selector is changed raise the newSelection state up tp the parent to inform that the selection has been updated.
