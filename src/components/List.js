import React from 'react';

import Pagination from './Pagination';
import Loading from './Loading';
import Table from './Table';

import { getCurrencies, getAllCurrencies } from '../actions';

class List extends React.Component {
	constructor() {
		super();

		this.state = {
			page: 0,
			perPage: 5,
			currencies: [],
			loading: false,
			error: '',
		};

		this.handlePaginationClick = this.handlePaginationClick.bind(this);
		this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
	}

	componentWillMount = () => {
		this.fetchCurrencies();
	}

	fetchCurrencies = () => {
		this.setState({ loading: true });

		const rows = getCurrencies(this.state.page, this.state.perPage);

		this.setState({
			currencies: rows,
			loading: false
		})

	}

	handlePaginationClick = (e, page) => {
		this.setState({
			currencies: getCurrencies(page, this.state.perPage),
			page
		});
	}

	handleChangeRowsPerPage = (e) => {
		this.setState({
			currencies: getCurrencies(this.state.page, e.target.value),
			perPage: e.target.value
		})
	}

	render = () => {
		const { currencies, loading, error, page, perPage } = this.state;

		// Render only loading component, if it's set to true
		if (loading) {
			return <Loading />
		}

		// Render only error message, if error occured while fetching data
		if (error) {
			return <div className='error'>{error}</div>
		}

		return (
			<div>
				<Table currencies={currencies} />
				<Pagination
					page={page}
					rowsPerPage={perPage}
					totalItems={getAllCurrencies().length}
					handlePaginationClick={this.handlePaginationClick}
					handleChangeRowsPerPage={this.handleChangeRowsPerPage}
				/>
			</div>
		);
	}
}

export default List;