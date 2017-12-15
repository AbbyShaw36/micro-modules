function defaultComparator(a, b) {
	return a < b;
}

export default function(arr, comparator) {
	if (!Array.isArray(arr)) {
		throw new Error('expects an array as first argument.');
	}

	comparator = comparator || defaultComparator;

	for (let i = 1; i < arr.length - 1; i++) {
		if ( !comparator(arr[i], arr[i + 1]) ) return false;
	}

	return true;
}