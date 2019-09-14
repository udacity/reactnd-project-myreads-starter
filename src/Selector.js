import React, {Component} from 'react'

class Selector extends Component{
  state = {
    newSelection: ''
  };


  render() {
    return(
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

// Selector.propTypes={
//   currentSelector: PropTypes.string.isRequired
// }
export default Selector;

//Algorithm:
// Props will send currentSelector.
//Match currentSelector to new selector.
// if selector is changed raise the newSelection state up tp the parent to inform that the selection has been updated.
