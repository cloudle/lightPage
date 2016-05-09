export function generateRoute(url, ctrl, {headerUrl, contentUrl, navigationUrl}) {
	let routeName = url.replace('/', '').toLowerCase(),
		routeMeta = {
			url,
			views: {
				'layout': {
					templateUrl: 'template/layout.html',
					controller: ctrl
				}
			}
		};

	routeMeta.views[`header@${routeName}`] = 		{ templateUrl: headerUrl };
	routeMeta.views[`content@${routeName}`] = { templateUrl: contentUrl };
	routeMeta.views[`navigation@${routeName}`] = { templateUrl: navigationUrl };

	return routeMeta;
}

export function find(sources, predicate) {
	var searchKey, searchValue;
	for (let key of Object.keys(predicate)) {
		searchKey = key;
		searchValue = predicate[key];
	}

	for (let instance of sources) {
		if (instance[searchKey] === searchValue) return instance;
	}
}

export function isEmailValid (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export var preloadResolves = {
	appConfig: function(configService, calculatorService) {
		return configService.promise;
	}
};

export function generateJsonStructure (rows) {
	var celebrityPorts = [], caribbeanPorts = [];

	for (let row of rows) {
		if (row.shipName == "CELEBRITY EQUINOX") {
			let existedPort = _.findWhere(celebrityPorts, {name: row.port});

			if (existedPort == undefined) {
				let uniquePort = { name: row.port },
					products = rows.filter(instance => instance.port == row.port).map(instance => {
						return {
							name: instance.productName,
							productId: instance.productId,
							productCode: instance.productCode
						}
					});

				let uniqueProducts = _.unique(products, (product) => product.name);
				uniquePort.children = _.sortBy(uniqueProducts, (product) => product.name);
				celebrityPorts.push(uniquePort);
			}
		}

		if (row.shipName == "ALLURE OF THE SEAS") {
			let existedPort = _.findWhere(caribbeanPorts, {name: row.port});

			if (existedPort == undefined) {
				let uniquePort = { name: row.port },
					products = rows.filter(instance => instance.port == row.port).map(instance => {
						return {
							name: instance.productName,
							productId: instance.productId,
							productCode: instance.productCode
						}
					});

				let uniqueProducts = _.unique(products, (product) => product.name);
				uniquePort.children = _.sortBy(uniqueProducts, (product) => product.name);
				caribbeanPorts.push(uniquePort);
			}
		}
	}

	celebrityPorts = _.sortBy(celebrityPorts, (port) => port.name);
	caribbeanPorts = _.sortBy(caribbeanPorts, (port) => port.name);
	return {celebrity: celebrityPorts, caribbean: caribbeanPorts};
}

export function getShowpadUserInfo () {
	if (window.ShowpadLib && window.ShowpadLib.getUserInfo) {
		return window.ShowpadLib.getUserInfo();
	} else {
		return null;
	}
}

export function generateNumberUUID (length) {
	var result = "";
	for(let i = 0; i < length; i++) {
		result += [0,1,2,3,4,5,6,7,8,9][Math.floor(Math.random()*9)];
	}

	return result
}

export function safeRange (value, min, max) {
	if (min != undefined && value <= min) return min;
	if (max != undefined && value >= max) return max;
	return value;
}

global.uuid = generateNumberUUID;