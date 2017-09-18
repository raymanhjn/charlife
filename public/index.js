import 'bootstrap-loader';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Store from './store';
import App from './components/app';
import Foods from './components/foods';
import Home from './components/home';


const Root = () => {
	return (
		<Provider store={Store}>
			<BrowserRouter>
				<div>
					<switch>
						<Route exact path="/" component={App}/>
            <Route path="/food" component={Foods}/>
						<Route path="/home" component={Home}/>
					</switch>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

render(
	<Root />,
	document.getElementById('app')
);
