import React from 'react';
import PropTypes from 'prop-types';

import TablePagination from '@material-ui/core/TablePagination';


const Pagination = (props) => {
	const { totalPages, page, rowsPerPage, handlePaginationClick } = props;

	return (
		<TablePagination
			component='div'
			count={totalPages}
			rowsPerPage={rowsPerPage}
			page={page}
			backIconButtonProps={{
				'aria-label': 'Previous Page',
			}}
			nextIconButtonProps={{
				'aria-label': 'Next Page',
			}}
			onChangePage={handlePaginationClick}

		/>
	);
}

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	handlePaginationClick: PropTypes.func.isRequired,
};

export default Pagination;