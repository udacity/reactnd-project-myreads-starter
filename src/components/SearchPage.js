import React, { Component } from "react";
import Book from "./Book";
import Searchbar from "./Searchbar";
import * as BooksAPI from ".././BooksAPI";

class SearchPage extends Component {
	state = {
		query: "",
		results: []
	};

/* ---- Gets the value of the query input and calls the getResults() to display books ----- */
	updateQuery = ({ target: { value: query } }) =>
		this.setState({ query }, () => this.getResults());

/* ---- Gets the books based on updateQuery() ----- */		
	getResults = () => {
		const { query } = this.state;

		// If the input has a value then display results. 
		if (query) {
			BooksAPI.search(query).then(results => {

		// If the query is an invalid value or has an error, clean array and display none		
				if (results.error) {
					return this.setState({ results: [] });
				}
				
		// Set state to the results after query	
				this.setState({ results });
			});

		// If there is no query, then set query and results state to empty values
		} else {
			this.setState({ results: [], query: "" });
		}

	};

	render() {
		return (
			<div className="search-books">

{/* ---- Import SearchBar Component ----- */}

				<Searchbar
					query={this.state.query}
					updateQuery={this.updateQuery}
				/>

				<div className="search-books-results">
					<ol className="books-grid">

{/* ---- Filters and maps the results to display correct shelf on dropdown by comparing the books array, then maps to generate the UI ----- */}

						{this.state.results.filter(result => this.props.books.map(book => (book.id === result.id ? result.shelf = book.shelf : '')),
						)
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