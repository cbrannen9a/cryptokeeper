import React from 'react';
import PropTypes from 'prop-types';

import TablePagination from '@material-ui/core/TablePagination';


const Pagination = (props) => {
	const { totalItems, page, rowsPerPage, handlePaginationClick, handleChangeRowsPerPage } = props;

	return (
		<TablePagination
			component='div'
			count={totalItems}
			rowsPerPage={rowsPerPage}
			page={page}
			backIconButtonProps={{
				'aria-label': 'Previous Page',
			}}
			nextIconButtonProps={{
				'aria-label': 'Next Page',
			}}
			onChangePage={handlePaginationClick}
			onChangeRowsPerPage={handleChangeRowsPerPage}
		/>
	);
}

Pagination.propTypes = {
	totalItems: PropTypes.number.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	handlePaginationClick: PropTypes.func.isRequired,
	handleChangeRowsPerPage: PropTypes.func.isRequired
};

export default Pagination;