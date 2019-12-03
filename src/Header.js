import React from 'react'
import logo from './images/logo.png'

function Header () {
    return (
        <section className="hero is-small is-warning is-bold">
            <div className="hero-body is-left">
                <div className="navbar-brand">
                   <img src={logo} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default Header
