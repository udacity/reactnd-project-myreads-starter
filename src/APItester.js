import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';

class APItester extends Component {

    state = {
        bookShelves: [],
    }

componentDidMount() {
    BooksAPI.getAll().then(bookShelves => this.setState({bookShelves}))
}

    render() {
        let {bookShelves} = this.state;

    return  (
              
            <li key={bookShelves} />
 

    );
}
}

export default APItester;