import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import ArrowBack from '@material-ui/icons/ArrowBack';

import Loading from './Loading';
import { PercentageChange } from './PercentageChange';

import { getCurrency } from '../actions';
import { routes } from '../constants/routes';

const styles = theme => ({
	card: {
		margin: 12,
		maxWidth: 400,
	},
})

class Detail extends Component {
	constructor() {
		super();

		this.state = {
			currency: {},
			error: '',
			loading: false,
		}
	}

	componentWillMount = () => {
		// Get id from url params
		const currencyId = this.props.match.params.id;

		// Fetch currency
		this.fetchCurrency(currencyId);
	}

	componentWillReceiveProps = (nextProps) => {
		if (this.props.location.pathname !== nextProps.location.pathname) {
			// Get id from new url params
			const currencyId = nextProps.match.params.id;

			// Fetch currency
			this.fetchCurrency(currencyId);
		}
	}

	fetchCurrency = (currencyId) => {

		// Set loading to true, while we are fetching data from server
		this.setState({ loading: true });

		const currency = getCurrency(this.props.match.params.id);

		this.setState({
			currency,
			error: '',
			loading: false,
		})

	}

	render = () => {
		const { currency, loading, error } = this.state;
		const { classes, history } = this.props;

		// Render only loading component, if loading state is set to true
		if (loading) {
			return <Loading />
		}

		// Render only error message, if error occured while fetching data
		if (error) {
			return <div className="error">{error}</div>
		}

		return (
			<Card className={classes.card}>
				<CardHeader
					action={
						<IconButton className={classes.button}
							onClick={() => history.push(routes.HOME)}
							aria-label='Back'>
							<ArrowBack />
						</IconButton>}
					title={
						<Typography variant='h6' >
							{currency.name} ({currency.symbol})
						</Typography>}
				/>
				<CardContent>
					<Typography variant='h6' >
						Price  {currency.price}
					</Typography>
					<Typography variant='h6' >
						Rank {currency.rank}
					</Typography>
					<Typography variant='h6' >
						24H change {PercentageChange(currency.percentChange24h)}
					</Typography>
					<Divider />
					<Typography variant='subtitle1' gutterBottom>
						Market cap {currency.symbol} {currency.marketCap}
					</Typography>
					<Typography variant='subtitle1' gutterBottom>
						24H Volume {currency.symbol} {currency.volume24h}
					</Typography>
					<Typography variant='subtitle1' gutterBottom>
						Total supply {currency.totalSupply}
					</Typography>
				</CardContent>
			</Card>
		);
	}
}

export default withStyles(styles)(withRouter(Detail));