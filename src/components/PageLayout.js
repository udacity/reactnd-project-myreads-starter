import React, { Component } from 'react';
import logo from '../assets/logo.png'


class PageLayout extends Component {
    render() {
        return (
            <div className='app'>
                <div className='list-books'>
                    <div className='list-books-title'>
                        <h1><img src={logo} alt='MyReads Logo' style={{ height: "2rem", verticalAlign: "middle" }} /> MyReads</h1>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}


export default PageLayout