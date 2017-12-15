export default (arr, hasher) => {
	if (!Array.isArray(arr)) {
		throw new Error('expects an array as first argument');
	}

	if (arr.length <= 1) {
		return arr.concat();
	}

	hasher = hasher || JSON.stringify;

	const res = [];
	const storage = {};

	for (let value of arr) {
		var hashed = hasher(value);

		if (!storage[hashed]) {
			res.push(value);
			storage[hashed] = true;
		}
	}

	return res;
}