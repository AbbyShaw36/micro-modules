export default (arr, num) => {
	if (!Array.isArray(arr)) {
		throw new Error('Array-last expects an array as first argument.');
	}

	if (arr.length === 0) {
		return null;
	}

	num = !isNaN(num) && num > 0 ? num : 1;

	return arr.slice(-num);
}