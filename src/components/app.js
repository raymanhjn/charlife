import React,{Component} from 'react';
import Routes from '../routes';

import {Link} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
    	<div className='body-content'>
        <Header />
        <Routes />
        <Footer />
      </div>
    );
  }
}
