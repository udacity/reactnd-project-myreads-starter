import React, { Component } from 'react'

class Header extends Component {
    render(){
        return (
            <div className="list-books-title">
            <h1>{this.props.pageTitle}</h1>
        </div>
        )
    }
}

export default Header