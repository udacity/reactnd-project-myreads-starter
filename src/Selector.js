import React, {Component} from 'react'
import PropTypes from 'prop-types';

class Selector extends Component{
  state = {
    newSelection: ''
  };

  updateSelection = (value) => {
    this.setState({
      newSelection: value
    });
  };

  handleSelection = (event) => {
    event.preventDefault();
    const selectionValue = event.target.value;
    if(this.props.currentSelection !== selectionValue ){
      this.updateSelection(selectionValue)
      this.props.onSelectorClick(selectionValue)
    }
  };

  render() {
    return(
      <select onChange={this.handleSelection}>
        <option value="move" disabled>Move to...</option>
        <option value="Currently Reading">Currently Reading</option>
        <option value="Want To Read">Want to Read</option>
        <option value="Read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

Selector.propTypes={
  currentSection: PropTypes.string.isRequired,
  onSelectorClick: PropTypes.func
}
export default Selector;

//Algorithm:
// Props will send currentSelector.
//Match currentSelector to new selector.
// if selector is changed raise the newSelection state up tp the parent to inform that the selection has been updated.
