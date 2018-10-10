import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { routes } from '../constants/routes';

class NotFound extends Component {
	render = () => {
		return (
			<div>
				<h1 className='NotFound-title'>Oops! Page not found</h1>
				<Link to={routes.HOME} className='NotFound-link'>Go to home page</Link>
			</div>
		)
	}
}

export default NotFound;