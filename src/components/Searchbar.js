import React from 'react'

class Searchbar extends React.Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }


    render() {
      return (
        <div className='search-books-bar'>
            {JSON.stringify(this.state)}
            <div className="search-books-input-wrapper">
            <input
            className=''
            placeHolder='Search for books by title or author'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value )}
            />
            </div>

        </div>
      );
    }
  }

export default Searchbar;
