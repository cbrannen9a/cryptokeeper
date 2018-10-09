import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
	flex: {
		flexGrow: 1,
		flex: 1
	},
};

class Header extends Component {
	render() {
		const { classes } = this.props;

		return (
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Typography variant='h5' className={classes.flex} >
						Cryptokeeper
					</Typography>
				</Toolbar>
			</AppBar>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Header);