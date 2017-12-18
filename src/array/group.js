export default (arr, ...props) => {
	if (!Array.isArray(arr)) {
		throw new Error("expect an array as first argument");
	}

	if (!props.length) {
		throw new Error("expect at least one key to group");
	}

	let groups = {};

	for (let i = 0, len = props.length; i < len; i++) {
		if (i === 0) {
			groupBy(groups, arr, props[i]);
		} else {
			getArrToGroup(groups, props[i]);
		}
	}

	return groups;
}

function groupBy(groups, arr, prop) {
	for (let elem of arr ) {
		if (typeof prop === 'function') {
			addElemByFn(groups, prop, elem);
		} else if (Array.isArray(prop)) {
			addElemByArr(groups, prop, elem);
		} else {
			addElemByStr(groups, prop, elem);
		}
	}
}

function addElemByStr(group, prop, elem) {
	const props = prop.split(".");
	let key = elem;

	for (prop of props) {
		key = key[prop];
	}

	let arr;

	if (Array.isArray(key)) {
		const keys = key;

		for (key of keys) {
			pushElem(group, key, elem);
		}
	} else {
		pushElem(group, key, elem);
	}
}

function pushElem(group, key, elem) {
	const arr = group[key] || (group[key] = []);
	arr.push(elem);
}

function addElemByArr(group, props, elem) {
	for (let prop of props) {
		addElemByStr(group, prop, elem);
	}
}

function addElemByFn(group, fn, elem) {
	const key = fn(elem);
	pushElem(group, key, elem);
}

function getArrToGroup(group, prop) {
	for (let key in group) {
		const arr = group[key];

		if (Array.isArray(arr)) {
			groupBy((group[key] = {}), arr, prop);
		} else {
			getArrToGroup(arr, prop);
		}
	}
}