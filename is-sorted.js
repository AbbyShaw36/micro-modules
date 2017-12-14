function defaultComparator(a, b) {
	return a - b < 0;
}

export default (arr, comparator) => {
	comparator = comparator || defaultComparator;

	for (let i = 1; i < arr.length; i++) {
		if ( !comparator(arr[i], arr[i + 1]) ) return false;
	}

	return true;
}