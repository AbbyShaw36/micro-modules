export default (filler, count) => {
	const isFn = typeof filler === "function";
	const res = [];

	for (let i = 0; i < count; i++) {
		res.push(isFn ? filler(i, count, res) : filler);
	}

	return res;
}