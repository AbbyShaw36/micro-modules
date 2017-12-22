export default (keys, values) => {
	const res = {};
	const hasValues = !values || !Array.isArray(values);

	if (hasValues) {
		for (let obj of keys) {
			if (Array.isArray(obj)) {
				res[obj[0]] = obj[1];
			} else {
				res[obj.key] = obj.value
			}
		}
	} else {
		for (let i = 0, len = keys.length; i < len; i++) {
			res[keys[i]] = values[i];
		}
	}

	return res;
}