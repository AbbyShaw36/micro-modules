import decamelize from "./decamelize";

export default (str) => {
	if (typeof str !== "string") {
		throw new Error("expected a string as the first argument");
	}

	str = decamelize(str, " ");

	return str
				.replace(/^[\W_]+|[\W_]+$/g, '')
				.replace(/[\W_]+(\w)?/g, function(match, letter) {
					return letter ? letter.toUpperCase() : '';
				});
}