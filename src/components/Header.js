import React from 'react'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom';
import '../css/header.css';

function Header () {
    return (
        <section className="hero is-small is-warning is-bold">
            <div className="hero-body">
                <div className="container has-text-centered">
                   <img src={logo} alt="logo" />                
                </div>            
            </div>
            <div className="hero-foot">
                <nav className="tabs is-boxed is-fullWidth">
                    <div className="container">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/add">Add Books</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}


export default Header
