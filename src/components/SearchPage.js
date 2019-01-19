import React, { Component } from "react";
import Book from "./Book";
import Searchbar from "./Searchbar";
import * as BooksAPI from ".././BooksAPI";
import { Link } from "react-router-dom";

class SearchPage extends Component {
	state = {
		query: "",
		results: []
	};

		updateQuery = ({ target: { value: query } }) =>
		  this.setState({ query }, () => this.getResults());

	getResults = () => {
	  const { query } = this.state;
	  if (query) {
	    BooksAPI.search(query).then(results => {
				console.log(results)
	      if (results.error) {
	        return this.setState({ results: [] });
				}
					this.setState({ results });

	    });
	  } else {

			
			
			this.setState({ results: [], query: "" });
			


	  }
	};


	render() {
		return (
			<div className="search-books">
				<Searchbar
					query = {this.state.query}
					updateQuery={this.updateQuery}
				/>
				<div className="search-books-results">
					<ol className="books-grid">
					{this.state.results.filter(result => result.shelf !== 'none')
							.map(result => (
              <li key={result.id}>
                <Book
                  book={result}
									updateShelf={this.props.updateShelf}
                />
              </li>
            ))}
					</ol>
				</div>
			</div>
		);
	}
}

export default SearchPage;