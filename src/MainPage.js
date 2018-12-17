import React from 'react';
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI'
import { Link } from "react-router-dom";


class MainPage extends React.Component {
    state = {
        apiBooks: []
    }

    async componentDidMount() {
        let apiBooks = await BooksAPI.getAll();
        console.log(apiBooks)
    
        this.setState({
          apiBooks
        });
    }


    render() {
        const { apiBooks } = this.state;

        let sampleBookList = [
            {
              imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
                thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
              },
              title: "To Kill A Mockingbird",
              authors: ["Harper Lee"]
            },
            {
              imageLinks: {
                smallThumbnail: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
                thumbnail:"http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
              },
              title: "Harry Potter and the Sorcerer's Stone",
              authors: ["J.K. Rowling"]
            }
          ];

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>

                        <Bookshelf 
                            bookshelfTitle={"Currently Reading"}
                            books={apiBooks}
                        />

                        <Bookshelf 
                            bookshelfTitle={"Want To Read"}
                            books={apiBooks}
                        />

                        <Bookshelf 
                            bookshelfTitle={"Read"}
                            books={apiBooks}
                        />

                    </div>
                </div>

                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        );
    }

}

export default MainPage;