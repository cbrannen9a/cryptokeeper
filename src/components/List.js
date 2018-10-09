import React from 'react';

import Pagination from './Pagination';
import Loading from './Loading';
import Table from './Table';

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

		//Create some fake data
		let id = 0;
		function createData(name, rank, price, marketCap, percentChange24h) {
			id += 1;
			return { id, name, rank, price, marketCap, percentChange24h };
		}

		const rows = [
			createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
			createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
			createData('Eclair', 262, 16.0, 24, 6.0),
			createData('Cupcake', 305, 3.7, 67, -4.3),
			createData('Gingerbread', 356, 16.0, 49, 3.9),
			createData('Honeycomb', 408, 3.2, 21, -3.2),
			createData('Banana Split', 237, 9.0, 68, 3.4),
			createData('Jelly Bean', 375, 0.0, 10, 22),
			createData('KitKat', 518, 26.0, 200, -12.6),
			createData('Lollipop', 392, 0.2, 6, 0.2),
			createData('Marshmallow', 318, 0, 34, 2.2),
			createData('Nougat', 360, 19.0, 98.9, -5.6),
			createData('Oreo', 437, 18.0, 44, 5.6),
		];

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