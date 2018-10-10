import React from 'react';

import Pagination from './Pagination';
import Loading from './Loading';
import Table from './Table';

import { getCurrencies } from '../actions';

class List extends React.Component {
	constructor() {
		super();

		this.state = {
			page: 1,
			totalPages: 0,
			// NOTE: Don't set it greater than 50, because maximum perPage for API is 50
			perPage: 5,
			currencies: [],
			loading: false,
			error: '',
		};

		this.handlePaginationClick = this.handlePaginationClick.bind(this);
	}

	componentWillMount() {
		this.fetchCurrencies();
	}

	fetchCurrencies() {
		this.setState({ loading: true });

		const rows = getCurrencies();

		this.setState({
			currencies: rows,
			loading: false
		})

	}

	handlePaginationClick(direction) {
		let nextPage = this.state.page;

		// Increment nextPage if direction variable is next, otherwise decrement it
		nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

		// Call fetchCurrencies function inside setState's callback
		// Because we have to make sure first page state is updated
		this.setState({ page: nextPage }, () => {
			this.fetchCurrencies();
		});
	}

	render() {
		const { currencies, loading, error, page, totalPages, perPage } = this.state;

		// Render only loading component, if it's set to true
		if (loading) {
			return <div className='loading-container'><Loading /></div>
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
					totalPages={totalPages}
					totalItems={currencies.length}
					handlePaginationClick={this.handlePaginationClick}
				/>
			</div>
		);
	}
}

export default List;