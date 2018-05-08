import React, {Component} from "react";
import * as BooksAPI from "./BooksAPI";

class FooComponent extends Component{
    state = {
        name: "",
        books: []
    };
    componentDidMount(){
        console.log("ComponentDidMount called");
        this.setState({
            name: "foo"
        });
        console.log("this.state.name"+ this.state.name);

        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
            //categorizing the books pulled from the server
            books.map((book) => {
                console.log(book);
            })
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log("ComponentWillReceiveProps called");
        console.log("nextProps:"+nextProps.name);
    }

    shouldComponentUpdate(){
        console.log("ShouldComponentUpdate called");
        console.log("this.state.name: "+ this.state.name);
        const shouldUpdate = this.state.name === "foo";
        console.log("shouldUpdate"+ shouldUpdate);
        return shouldUpdate;
    }

    componentDidUpdate(){
        console.log("ComponentDidUpdate called");
    }

    render(){
        {console.log("render called")}
        return (
            <div className="search-books-results">Hello Foo Here!</div>
        )
    }
}

export default FooComponent;