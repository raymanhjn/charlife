import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='auto-hide-header'>
        <div className="logo">
          <a href="#0">
            <img src="img/cd-logo.svg" alt="Logo" />
          </a>
        </div>
        <nav className='primary-nav'>
          <ul>
      			<li><Link to="/">Home</Link></li>
      			<li><Link to="/foods">Foods</Link></li>
            <li><Link to="/mail">Mail</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
      		</ul>
        </nav>
      </header>
    );
  }
}
