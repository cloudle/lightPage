export const apiHost = 'http://128.199.227.132';//http://103.56.157.66/realestate';

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

String.prototype.width = function(font) {
	var f = font || '12px arial',
		o = $('<div>' + this + '</div>')
			.css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
			.appendTo($('body')),
		w = o.width();

	o.remove();

	return w;
};

global.uuid = generateNumberUUID;