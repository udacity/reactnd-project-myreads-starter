import React from 'react'
import logo from './images/logo.png'

function Header () {
    return (
        <section className="hero is-dark is-bold">
            <div class="hero-body">
                <div className="container has-text-centered">
                   <img src={logo} alt="logo" />
                </div>
            </div>
        </section>
    );
}

export default Header
