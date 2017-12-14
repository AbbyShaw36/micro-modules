function defaultComparator(a, b) {
	return a < b;
}

export default function(arr, comparator) {
	comparator = comparator || defaultComparator;

	for (let i = 1; i < arr.length - 1; i++) {
		if ( !comparator(arr[i], arr[i + 1]) ) return false;
	}

	return true;
}