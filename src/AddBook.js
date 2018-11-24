import React, {Component} from 'react';
import './App.css'

class AddBook extends Component {
  render() {
    return (
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
      </div>
    )
  }
}

export default AddBook
