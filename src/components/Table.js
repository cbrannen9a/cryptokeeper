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

let id = 0;
function createData(name, rank, price, marketCap, percentChange24h) {
	id += 1;
	return { id, name, rank, price, marketCap, percentChange24h };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

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
					{rows.map(currency =>
						<TableRow
							key={currency.id}
							onClick={() => history.push(`/currency/${currency.id}`)}
						>
							<TableCell component='th' scope='row'>
								{currency.name}
							</TableCell>
							<TableCell>{currency.rank}</TableCell>
							<TableCell>{currency.price}</TableCell>
							<TableCell>{currency.marketCap}</TableCell>
							<TableCell>{currency.percentChange24h}</TableCell>
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