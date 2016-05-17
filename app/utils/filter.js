export default function register(moduleInstance) {
	moduleInstance
		.filter('niceDate', niceDate);
}

export function niceDate () {
	return function (date, format = 'DD-MM-YYYY') {
		console.log(date);
		return moment(date).format(format);
	};
}