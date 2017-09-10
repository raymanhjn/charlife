import './style.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Store from '../src/store/store';
import routes from '../src/routes';
import App from './components/app';

const Root = () => {
	return (
		<Provider store={Store}>
			<Router>
				<App />
			</Router>
		</Provider>
	);
}

render(
	<Root />,
	document.getElementById('app')
);
