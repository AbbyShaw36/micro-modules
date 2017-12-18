export default function flatten(arr, deep) {
	if (!Array.isArray(arr)) {
		throw new Error("expects an array as first argument");
	}

	let res = [];
	deep = (deep || 1) - 1;

	for (let value of arr) {
		if (Array.isArray(value)) {
			if (deep) {
				value = flatten(value, deep - 1);
			}

			res = res.concat(value);
		} else {
			res.push(value);
		}
	}
	
	return res;
}