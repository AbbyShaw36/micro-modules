export default (str, separator) => {
	if (typeof str != 'string') {
		throw new Error("expected an string as first argument");
	}

	separator = separator || '-';

	return str
				.replace(/([a-z\d])([A-Z])/g, `$1${separator}$2`)
				.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, `$1${separator}$2`)
				.toLowerCase();
}