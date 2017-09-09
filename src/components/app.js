import React,{Component} from 'react';
import Routes from '../routes';

import {Link} from 'react-router-dom';

import Header from './Header';

export default class App extends Component {
  render() {
    return (
    	<div>
        <Header />
        <Routes />
        <p>Footer</p>
      </div>
    );
  }
}