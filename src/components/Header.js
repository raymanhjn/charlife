import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='logo'>LOGO</div>
        <nav className='primary-nav'>
          <ul>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/foods'>Food</Link></li>
            <li className='nav-item'><Link to='/mail'>Mail</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}
