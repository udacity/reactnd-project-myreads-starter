import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Loader from 'react-loader';
import './App.css';
import Header from './components/Header/';
import Bookshelf from './components/Bookshelf/';
import AddBook from './components/Addbook/';
import Search from './components/Search/';

class BooksApp extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			books: [],
			searchResults: [],
			loaded: false
		}
		this.getAllBooks = this.getAllBooks.bind(this);
		this.updateBook = this.updateBook.bind(this);
		this.searchBooks = this.searchBooks.bind(this);
		this.clearResults = this.clearResults.bind(this);
	}

	componentDidMount() {
		this.getAllBooks();
	}

	getAllBooks() {
		BooksAPI.getAll().then(books => this.setState({ books, loaded: true }));
	}

	updateBook(book, shelf) {
		const { searchResults } = this.state;
		searchResults.map(b => {
			if (b.id === book.id) {
				b.shelf = shelf;
			}
			return b;
		});
		this.setState({ searchResults });
		BooksAPI.update(book, shelf).then(() => this.getAllBooks());
	}

	searchBooks(e) {
		e.preventDefault();

		const query = e.target.value;
		const { books } = this.state;

		this.setState({ searchResults: [], loaded: true })

		if (query != null && query.length > 2) {
			this.setState({ loaded: false })
			BooksAPI.search(query, 10).then(searchResults => {
				console.log("searchResults: ", searchResults);
				searchResults.map(b => {
					books.map(_ => {
						if (_.id === b.id) {
							b.shelf = _.shelf;
						}
						return b;
					});
					return b;
				});
				this.setState({ searchResults, loaded: true })
			});
		}
	}

	clearResults(e) {
		this.setState({ searchResults: [] });
	}

	render() {
		const { books, searchResults, loaded } = this.state;
		const shelves = [
			{ title: 'Currently Reading', books: books.filter(book => book.shelf === 'currentlyReading') },
			{ title: 'Want to Read', books: books.filter(book => book.shelf === 'wantToRead') },
			{ title: 'Read', books: books.filter(book => book.shelf === 'read') }
		];

		return (
			<div className="app">
				<Route path="/search" render={() => (
					<Search
						searchBooks={this.searchBooks}
						searchResults={searchResults}
						updateBook={this.updateBook}
						clearResults={this.clearResults}
						loaded={loaded}
					/>
				)} />
				<Route exact path="/" render={() => (
					<div>
						<Header />
						<Loader loaded={loaded}>
						</Loader>
						{shelves.map(shelf => (
							<Bookshelf
								key={shelf.title}
								shelf={shelf}
								updateBook={this.updateBook}
							/>
						))}
						<AddBook />
					</div>
				)} />
			</div>
		)
	}
}

export default BooksApp;
