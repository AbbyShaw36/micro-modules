export default (obj, filter) => {
	const isFun = typeof filter === 'function';
	const isArr = Array.isArray(filter);
	const res = {};

	if (isFun) {
		for (let [key,value] of Object.entries(obj)) {
			if (filter(key,value)) {
				res[key] = value;
			}
		}
	} else if (isArr) {
		for (let key of filter) {
			res[key] = obj[key];
		}
	} else {
		throw new Error("expected an array or a function as a filter");
	}

	return res;
}