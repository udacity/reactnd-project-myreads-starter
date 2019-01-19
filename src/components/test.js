handleSearch(event) {
    if (event) {

        this.setState({
            search: event
        });

        BooksAPI.search(event)
            .then(data => {

                if (data.error) {
                    this.setState({
                        apibooks: []
                    });
                }
                else {
                    let assignShelfById = data.filter(dat => (this.props.books.filter((book) => book.id === dat.id).map(bo => dat.shelf = bo.shelf)));

                    
                    this.setState(

                        { apibooks: assignShelfById });
                }
            })

            .catch(error =>
                console.log(error + " something went wrong"));
    }

}


{this.state.results.map(result => {
    let shelf = 'none';
    this.props.books.map(book => (book.id === result.id ? shelf = book.shelf : ''));		

<li key={result.id}>
<Book
book={result}
            updateShelf={this.props.updateShelf}
            shelf={shelf}
/>
</li>

})}