import React from 'react';
import logo from '../../assets/logo.png';

export default () => {

    return (
        <header className="home__header">
        <nav className="home__nav">
            <div className="home__nav_item">
                <img src={logo} class="home__logo" alt="logo" />
            </div>
            <div className="home__nav_item home__menu">
                <a href="/home">Home</a>
                <a href="/home#features">Features</a>
                <a href="/home#plans">Plans</a>
                <a href="/home#contact">Contact</a>
            </div>
            <div className="home__nav_item">
                <a href="/signup" class="home__try">Free trial</a>
                <a href="/login" class="home__login">Login</a>
            </div>
        </nav>
    </header>
    )
}