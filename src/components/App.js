import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Detail from './Detail';
import List from './List';
import NotFound from './NotFound';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Header />

					<Switch>
						<Route exact path='/' component={List} />
						<Route exact path='/currency/:id' component={Detail} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
