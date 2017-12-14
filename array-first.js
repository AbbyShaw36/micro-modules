export default (arr, num) => {
	if (!Array.isArray(arr)) {
		throw new Error('Array-first expects an array as first argument.');
	}

	if (arr.length === 0) {
		return null;
	}

	num = isNaN(+num) ? 1 : num;

	return arr.slice(0, num);
}