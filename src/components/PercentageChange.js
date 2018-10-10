import React from 'react';

/**
 * Create a formatted change percentage with direction arrow
 * @param {Number} changePercent 
 */
export const PercentageChange = (changePercent) => {
	if (changePercent > 0) {
		return <span style={{ color: '#689f38' }}>{changePercent}% &uarr;</span>
	} else if (changePercent < 0) {
		return <span style={{ color: '#cd0000' }}>{changePercent}% &darr;</span>
	} else {
		return <span>{changePercent}</span>
	}
}