import React from 'react'
import { Link } from "react-router-dom";

function Searchbar(props) {

	return (
		<div className="search-books-bar">
			<Link to="/" className="close-search">
				Close
        </Link>
			<div className="search-books-input-wrapper">
				<input
					placeholder="Search for books by title or author"
					value={props.query}
					onChange={props.updateQuery}
				/>
			</div>
		</div>
	)


}

export default Searchbar;
