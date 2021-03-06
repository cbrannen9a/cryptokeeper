import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
	canvas: {
		position: 'fixed',
		top: '46%',
		left: '46%',
	},
	progress: {
		margin: theme.spacing.unit * 2,
	},
});

const Loading = (props) => {
	const { classes } = props;
	return (
		<div className={classes.canvas}>
			<CircularProgress className={classes.progress} size={50} />
		</div>
	);
}

Loading.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);