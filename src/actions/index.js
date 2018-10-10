//Create some fake data
let id = 0;
function createData(name, rank, price, marketCap, percentChange24h, symbol, volume24h, totalSupply) {
	id += 1;
	return { id, name, rank, price, marketCap, percentChange24h, symbol, volume24h, totalSupply };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0, '$', 200, 345346),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3, '£', 234, 3456),
	createData('Eclair', 262, 16.0, 24, 6.0, '£', 56, 9785),
	createData('Cupcake', 305, 3.7, 67, -4.3, '@', 3030, 355000),
	createData('Gingerbread', 356, 16.0, 49, 3.9, '$', 44, 45555),
	createData('Honeycomb', 408, 3.2, 21, -3.2, '@', 6788, 4355554),
	createData('Banana Split', 237, 9.0, 68, 3.4, '&', 344, 235326),
	createData('Jelly Bean', 375, 0.0, 10, 22, '$', 45466456, 346445355),
	createData('KitKat', 518, 26.0, 200, -12.6, '£', 9999, 9933999),
	createData('Lollipop', 392, 0.2, 6, 0.2, '£', 344, 23554325),
	createData('Marshmallow', 318, 0, 34, 2.2, '$', 23423, 23423423),
	createData('Nougat', 360, 19.0, 98.9, -5.6, '@', 32555, 55352355),
	createData('Oreo', 437, 18.0, 44, 5.6, '$', 324, 4324455),
];

export const getAllCurrencies = () => {
	return rows;
}

export const getCurrencies = (page, numToReturn) => {
	let start = (page) * numToReturn;
	return rows.slice((start ? start : 0), ((page + 1) * numToReturn));
}

export const getCurrency = (id) => {
	return rows.filter(r => r.id === parseInt(id, 10))[0]
}

export const getFiltered = (text) => {
	return rows.filter(r => r.name.toLowerCase().includes(text))
}