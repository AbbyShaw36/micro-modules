import arrayFilled from "../array/filled";

export default (str, len, filler) => {
	if (typeof str !== "string") {
		throw new Error("expected a string as first argument");
	}

	if (!len) {
		return str;
	}

	const strLen = str.length;

	if (len < strLen) {
		return str.slice(-len);
	}

	filler = filler || "-";

	const res = arrayFilled(filler, len - strLen);

	res.push(str);

	return res.join("");
}