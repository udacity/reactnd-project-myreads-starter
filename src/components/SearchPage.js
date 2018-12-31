import React from 'react'
import Searchbar from './Searchbar'

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
      }

    render() {
      return (
        <div className='search-books'>
            <Searchbar />
            <h1>Hello, {this.props.name}</h1>
        </div>
      );
    }
  }

export default SearchPage;