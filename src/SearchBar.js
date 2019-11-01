import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    if (query !== "") {
      this.props.onSubmitSearch(query);
      this.setState({ query: "" });
    }
  };

  onChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    const { history } = this.props;
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => history.push("/")}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar