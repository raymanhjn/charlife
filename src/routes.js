import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Home from './components/home';
import Foods from './components/foods';
import Mail from './components/mail';


export default () => {
  return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/foods" component={Foods}/>
        <Route path="/mail" component={Mail}/>
      </div>
  );
}
