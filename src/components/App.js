import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import Detail from './Detail';
import List from './List';
import NotFound from './NotFound';

import { routes } from '../constants/routes';

class App extends Component {
	render = () => {
		return (
			<BrowserRouter>
				<div>
					<Header />

					<Switch>
						<Route exact path={routes.HOME} component={List} />
						<Route exact path={routes.DETAIL} component={Detail} />
						<Route component={NotFound} />
						<Redirect from={routes.BASE} to={routes.HOME} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
