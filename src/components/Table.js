import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { PercentageChange } from './PercentageChange';

const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
});


const CurrencyTable = (props) => {
	const { classes, history, currencies } = props;

	return (
		<Paper className={classes.root}>
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell>Cryptocurrency</TableCell>
						<TableCell>Rank</TableCell>
						<TableCell>Price</TableCell>
						<TableCell>Market Cap</TableCell>
						<TableCell>24H Change</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{currencies.map(currency =>
						<TableRow
							key={currency.id}
							onClick={() => history.push(`/cryptokeeper/currency/${currency.id}`)}
						>
							<TableCell component='th' scope='row'>
								{currency.name}
							</TableCell>
							<TableCell>{currency.rank}</TableCell>
							<TableCell>{currency.price}</TableCell>
							<TableCell>{currency.marketCap}</TableCell>
							<TableCell>{PercentageChange(currency.percentChange24h)}</TableCell>
						</TableRow>)}
				</TableBody>
			</Table>

		</Paper>
	);
}

CurrencyTable.propTypes = {
	currencies: PropTypes.array.isRequired,
	history: PropTypes.object.isRequired,
}

export default withStyles(styles)(withRouter(CurrencyTable));