export default (a, b) => {
	if (!Array.isArray(a) || !Array.isArray(b)) {
		throw new Error('expects two arrays as arguments.');
	}

	const res = [];

	for (let value of a) {
		done(b, value);
	}

	for (let value of b) {
		done(a, value);
	}

	function done(arr, value) {
		if (arr.indexOf(value) === -1) {
			res.push(value);
		}
	}

	return res;
}