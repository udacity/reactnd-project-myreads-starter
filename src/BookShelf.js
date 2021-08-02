import React from 'react';
import BookShelfChanger  from './BookShelfChanger';


function BookShelf(props){
	const { books, groupBy, shelfNames, handleShelfChange } = props;

	const groupByShelf = groupBy(books, 'shelf');

	return (
		<div>
			{
				Object.entries(groupByShelf).map(([key, value])=>(
					<div className="bookshelf" key={ key }>
						<h2 className="bookshelf-title">{ shelfNames[key] }</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
								{
									value.map(({ imageLinks: {thumbnail = ''} = {}, title, authors, id, shelf }, index) => {
										return (
											<li key={index}>
												<div className="book">
													<div className="book-top">
														<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${ thumbnail }")` }}></div>
														<BookShelfChanger  handleShelfChange={ handleShelfChange } bookId={ id } currentShelf={ shelf } />
													</div>
													<div className="book-title">{title}</div>
													<div className="book-authors">{authors}</div>
												</div>
											</li>
										)
									})
								}
							</ol>
						</div>
					</div>
				))
			}
		</div>
	);
}

export default BookShelf;