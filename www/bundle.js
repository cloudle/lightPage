(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			burgerActive: '='
		},
		template: '<div class="navigation-wrapper">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo"></div>\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu-activator icon-action-subject" ng-click="toggleBurger()"></div>\n\t\t\t</div>\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<div class="menu-heading" ng-click="toggleBurger()"></div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.title"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.title" ng-repeat="child in item.children"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.links = [{
				title: 'trang chủ',
				active: true
			}, {
				title: 'vị trí và tiện ích',
				children: [{ title: 'vị trí' }, { title: 'tiện ích khu vực' }, { title: 'tiện ích nội khu' }]
			}, {
				title: 'ưu đãi thanh toán'
			}, {
				title: 'mặt bằng'
			}];

			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
				console.log(scope.burgerActive);
			};
		}
	};
}];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: '<div class="navigation-link" ng-class="{active: instance.active}">\n\t\t\t<span ng-bind="instance.title"></span>\n\t\t\t<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">\n\t\t\t\t<div class="sub-link icon-av-play-arrow" ng-bind="link.title" ng-repeat="link in instance.children"></div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.active = false;
		}
	};
}];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var applicationController = exports.applicationController = function applicationController($rootScope, $scope, $state, $timeout, $interval, $window) {
	var _this = this;

	_classCallCheck(this, applicationController);

	this.developmentMode = false;
	this.ready = false;
	this.activePage = 'splash';
	this.burgerActive = false;

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		_this.activePage = toState.name;_this.ready = false;
		$timeout(function () {
			return _this.ready = true;
		}, 250);
	});

	this.name = "Light Page!";
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainController = exports.mainController = function mainController($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
	_classCallCheck(this, mainController);
};

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

},{}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var splashController = exports.splashController = function () {
	function splashController($rootScope, $scope, $state, $interval, $timeout) {
		var _this = this;

		_classCallCheck(this, splashController);

		this.$state = $state;
		$timeout(function () {
			return _this.skipIntro();
		}, 2000);

		if (global.resetContDownInterval) $interval.cancel(global.resetContDownInterval);
	}

	_createClass(splashController, [{
		key: 'skipIntro',
		value: function skipIntro() {
			this.$state.transitionTo('home');
		}
	}]);

	return splashController;
}();

splashController.$inject = ['$rootScope', '$scope', '$state', '$interval', '$timeout'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],6:[function(require,module,exports){
"use strict";

var _applicationController = require("./controller/applicationController");

var _routerConfig = require("./utils/routerConfig");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _mainController = require("./controller/mainController");

var _splashController = require("./controller/splashController");

var _navigation = require("./component/navigation");

var _navigation2 = _interopRequireDefault(_navigation);

var _navigationLink = require("./component/navigationLink");

var _navigationLink2 = _interopRequireDefault(_navigationLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = angular.module('application', ['ui.router', 'hmTouchEvents']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('splashCtrl', _splashController.splashController).directive('lightNavigation', _navigation2.default).directive('navigationLink', _navigationLink2.default);

App.run(function () {
	FastClick.attach(document.body);
});

angular.bootstrap(document, ['application']);

},{"./component/navigation":1,"./component/navigationLink":2,"./controller/applicationController":3,"./controller/mainController":4,"./controller/splashController":5,"./utils/routerConfig":8}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateRoute = generateRoute;
exports.find = find;
exports.isEmailValid = isEmailValid;
exports.generateJsonStructure = generateJsonStructure;
exports.getShowpadUserInfo = getShowpadUserInfo;
exports.generateNumberUUID = generateNumberUUID;
exports.safeRange = safeRange;
function generateRoute(url, ctrl, _ref) {
	var headerUrl = _ref.headerUrl;
	var contentUrl = _ref.contentUrl;
	var navigationUrl = _ref.navigationUrl;

	var routeName = url.replace('/', '').toLowerCase(),
	    routeMeta = {
		url: url,
		views: {
			'layout': {
				templateUrl: 'template/layout.html',
				controller: ctrl
			}
		}
	};

	routeMeta.views['header@' + routeName] = { templateUrl: headerUrl };
	routeMeta.views['content@' + routeName] = { templateUrl: contentUrl };
	routeMeta.views['navigation@' + routeName] = { templateUrl: navigationUrl };

	return routeMeta;
}

function find(sources, predicate) {
	var searchKey, searchValue;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(predicate)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var key = _step.value;

			searchKey = key;
			searchValue = predicate[key];
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = sources[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var instance = _step2.value;

			if (instance[searchKey] === searchValue) return instance;
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
}

function isEmailValid(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

var preloadResolves = exports.preloadResolves = {
	appConfig: function appConfig(configService, calculatorService) {
		return configService.promise;
	}
};

function generateJsonStructure(rows) {
	var celebrityPorts = [],
	    caribbeanPorts = [];

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		var _loop = function _loop() {
			var row = _step3.value;

			if (row.shipName == "CELEBRITY EQUINOX") {
				var existedPort = _.findWhere(celebrityPorts, { name: row.port });

				if (existedPort == undefined) {
					var uniquePort = { name: row.port },
					    products = rows.filter(function (instance) {
						return instance.port == row.port;
					}).map(function (instance) {
						return {
							name: instance.productName,
							productId: instance.productId,
							productCode: instance.productCode
						};
					});

					var uniqueProducts = _.unique(products, function (product) {
						return product.name;
					});
					uniquePort.children = _.sortBy(uniqueProducts, function (product) {
						return product.name;
					});
					celebrityPorts.push(uniquePort);
				}
			}

			if (row.shipName == "ALLURE OF THE SEAS") {
				var _existedPort = _.findWhere(caribbeanPorts, { name: row.port });

				if (_existedPort == undefined) {
					var _uniquePort = { name: row.port },
					    _products = rows.filter(function (instance) {
						return instance.port == row.port;
					}).map(function (instance) {
						return {
							name: instance.productName,
							productId: instance.productId,
							productCode: instance.productCode
						};
					});

					var _uniqueProducts = _.unique(_products, function (product) {
						return product.name;
					});
					_uniquePort.children = _.sortBy(_uniqueProducts, function (product) {
						return product.name;
					});
					caribbeanPorts.push(_uniquePort);
				}
			}
		};

		for (var _iterator3 = rows[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			_loop();
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	celebrityPorts = _.sortBy(celebrityPorts, function (port) {
		return port.name;
	});
	caribbeanPorts = _.sortBy(caribbeanPorts, function (port) {
		return port.name;
	});
	return { celebrity: celebrityPorts, caribbean: caribbeanPorts };
}

function getShowpadUserInfo() {
	if (window.ShowpadLib && window.ShowpadLib.getUserInfo) {
		return window.ShowpadLib.getUserInfo();
	} else {
		return null;
	}
}

function generateNumberUUID(length) {
	var result = "";
	for (var i = 0; i < length; i++) {
		result += [0, 1, 2, 3, 4, 5, 6, 7, 8, 9][Math.floor(Math.random() * 9)];
	}

	return result;
}

function safeRange(value, min, max) {
	if (min != undefined && value <= min) return min;
	if (max != undefined && value >= max) return max;
	return value;
}

global.uuid = generateNumberUUID;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./helper');

var routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', function ($stateProvider, $urlRouterProvider, $compileProvider) {
	$stateProvider.state('splash', splashRoute).state('home', mainRoute);

	$urlRouterProvider.otherwise('/splash');
}];

var splashRoute = {
	url: '/splash',
	views: {
		'layout': { templateUrl: 'template/emptyLayout.html' },
		'content@splash': {
			templateUrl: 'template/splash.html',
			controller: 'splashCtrl as splashCtrl'
		}
	}
};

var mainRoute = {
	url: '/home',
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@home': {
			templateUrl: 'template/home/main.html',
			controller: 'mainCtrl as mainCtrl'
		}
	}
};

exports.default = routerConfig;

},{"./helper":7}]},{},[6])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L25hdmlnYXRpb24uanMiLCJhcHAvY29tcG9uZW50L25hdmlnYXRpb25MaW5rLmpzIiwiYXBwL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwL2VudHJ5LmpzIiwiYXBwL3V0aWxzL2hlbHBlci5qcyIsImFwcC91dGlscy9yb3V0ZXJDb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNBZSxDQUFDLFlBQVk7QUFDM0IsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixpQkFBYztBQURSLEdBSEQ7QUFNTixxakNBTk07QUE2Qk4sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQTJCO0FBQ2hDLFNBQU0sS0FBTixHQUFjLENBQUM7QUFDZCxXQUFPLFdBRE87QUFFZCxZQUFRO0FBRk0sSUFBRCxFQUdYO0FBQ0YsV0FBTyxvQkFETDtBQUVGLGNBQVUsQ0FDVCxFQUFDLE9BQU8sUUFBUixFQURTLEVBRVQsRUFBQyxPQUFPLGtCQUFSLEVBRlMsRUFHVCxFQUFDLE9BQU8sa0JBQVIsRUFIUztBQUZSLElBSFcsRUFVWDtBQUNGLFdBQU87QUFETCxJQVZXLEVBWVg7QUFDRixXQUFPO0FBREwsSUFaVyxDQUFkOztBQWdCQSxTQUFNLFlBQU4sR0FBcUIsWUFBWTtBQUNoQyxVQUFNLFlBQU4sR0FBcUIsQ0FBQyxNQUFNLFlBQTVCO0FBQ0EsWUFBUSxHQUFSLENBQVksTUFBTSxZQUFsQjtBQUNBLElBSEQ7QUFJQTtBQWxESyxFQUFQO0FBb0RBLENBckRjLEM7Ozs7Ozs7O2tCQ0FBLENBQUMsWUFBWTtBQUMzQixRQUFPO0FBQ04s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QXlDLGtCQUF6QyxFQUNsQixVQUFTLGNBQVQsRUFBeUIsa0JBQXpCLEVBQTZDLGdCQUE3QyxFQUErRDtBQUM5RCxnQkFDRSxLQURGLENBQ1EsUUFEUixFQUNrQixXQURsQixFQUVFLEtBRkYsQ0FFUSxNQUZSLEVBRWdCLFNBRmhCOztBQUlBLG9CQUFtQixTQUFuQixDQUE2QixTQUE3QjtBQUNBLENBUGlCLENBQW5COztBQVVBLElBQUksY0FBYztBQUNqQixNQUFLLFNBRFk7QUFFakIsUUFBTztBQUNOLFlBQVUsRUFBQyxhQUFhLDJCQUFkLEVBREo7QUFFTixvQkFBa0I7QUFDakIsZ0JBQWEsc0JBREk7QUFFakIsZUFBWTtBQUZLO0FBRlo7QUFGVSxDQUFsQjs7QUFXQSxJQUFJLFlBQVk7QUFDZixNQUFLLE9BRFU7QUFFZixRQUFPO0FBQ04sWUFBVSxFQUFDLGFBQWEsMEJBQWQsRUFESjtBQUVOLGtCQUFnQjtBQUNmLGdCQUFhLHlCQURFO0FBRWYsZUFBWTtBQUZHO0FBRlY7QUFGUSxDQUFoQjs7a0JBV2UsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLWFjdGlvbi1zdWJqZWN0XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLnRpdGxlXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQudGl0bGVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmxpbmtzID0gW3tcblx0XHRcdFx0dGl0bGU6ICd0cmFuZyBjaOG7pycsXG5cdFx0XHRcdGFjdGl2ZTogdHJ1ZVxuXHRcdFx0fSwge1xuXHRcdFx0XHR0aXRsZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHt0aXRsZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0XHRcdHt0aXRsZTogJ3Rp4buHbiDDrWNoIGtodSB24buxYyd9LFxuXHRcdFx0XHRcdHt0aXRsZTogJ3Rp4buHbiDDrWNoIG7hu5lpIGtodSd9XG5cdFx0XHRcdF1cblx0XHRcdH0sIHtcblx0XHRcdFx0dGl0bGU6ICfGsHUgxJHDo2kgdGhhbmggdG/DoW4nXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHRpdGxlOiAnbeG6t3QgYuG6sW5nJ1xuXHRcdFx0fV07XG5cblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuYnVyZ2VyQWN0aXZlID0gIXNjb3BlLmJ1cmdlckFjdGl2ZTtcblx0XHRcdFx0Y29uc29sZS5sb2coc2NvcGUuYnVyZ2VyQWN0aXZlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dOyIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRpbnN0YW5jZTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IGluc3RhbmNlLmFjdGl2ZX1cIj5cblx0XHRcdDxzcGFuIG5nLWJpbmQ9XCJpbnN0YW5jZS50aXRsZVwiPjwvc3Bhbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay50aXRsZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93J107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IGZhbHNlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQsICRpbnRlcnZhbCwgJHdpbmRvdykge1xuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnJlYWR5ID0gdHJ1ZSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdHRoaXMubmFtZSA9IFwiTGlnaHQgUGFnZSFcIjtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cblx0fVxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAyMDAwKTtcblxuXHRcdGlmIChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpO1xuXHR9XG5cblx0c2tpcEludHJvICgpIHtcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcblx0fVxufSIsImltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi91dGlscy9yb3V0ZXJDb25maWdcIjtcblxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcblxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcblxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ2htVG91Y2hFdmVudHMnXSlcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcblxuQXBwLnJ1bigoKSA9PiB7XG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG59KTtcblxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwbGljYXRpb24nXSk7IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUm91dGUodXJsLCBjdHJsLCB7aGVhZGVyVXJsLCBjb250ZW50VXJsLCBuYXZpZ2F0aW9uVXJsfSkge1xuXHRsZXQgcm91dGVOYW1lID0gdXJsLnJlcGxhY2UoJy8nLCAnJykudG9Mb3dlckNhc2UoKSxcblx0XHRyb3V0ZU1ldGEgPSB7XG5cdFx0XHR1cmwsXG5cdFx0XHR2aWV3czoge1xuXHRcdFx0XHQnbGF5b3V0Jzoge1xuXHRcdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvbGF5b3V0Lmh0bWwnLFxuXHRcdFx0XHRcdGNvbnRyb2xsZXI6IGN0cmxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0cm91dGVNZXRhLnZpZXdzW2BoZWFkZXJAJHtyb3V0ZU5hbWV9YF0gPSBcdFx0eyB0ZW1wbGF0ZVVybDogaGVhZGVyVXJsIH07XG5cdHJvdXRlTWV0YS52aWV3c1tgY29udGVudEAke3JvdXRlTmFtZX1gXSA9IHsgdGVtcGxhdGVVcmw6IGNvbnRlbnRVcmwgfTtcblx0cm91dGVNZXRhLnZpZXdzW2BuYXZpZ2F0aW9uQCR7cm91dGVOYW1lfWBdID0geyB0ZW1wbGF0ZVVybDogbmF2aWdhdGlvblVybCB9O1xuXG5cdHJldHVybiByb3V0ZU1ldGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByZWRpY2F0ZSkpIHtcblx0XHRzZWFyY2hLZXkgPSBrZXk7XG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcblx0fVxuXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcblx0XHRpZiAoaW5zdGFuY2Vbc2VhcmNoS2V5XSA9PT0gc2VhcmNoVmFsdWUpIHJldHVybiBpbnN0YW5jZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5leHBvcnQgdmFyIHByZWxvYWRSZXNvbHZlcyA9IHtcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUpzb25TdHJ1Y3R1cmUgKHJvd3MpIHtcblx0dmFyIGNlbGVicml0eVBvcnRzID0gW10sIGNhcmliYmVhblBvcnRzID0gW107XG5cblx0Zm9yIChsZXQgcm93IG9mIHJvd3MpIHtcblx0XHRpZiAocm93LnNoaXBOYW1lID09IFwiQ0VMRUJSSVRZIEVRVUlOT1hcIikge1xuXHRcdFx0bGV0IGV4aXN0ZWRQb3J0ID0gXy5maW5kV2hlcmUoY2VsZWJyaXR5UG9ydHMsIHtuYW1lOiByb3cucG9ydH0pO1xuXG5cdFx0XHRpZiAoZXhpc3RlZFBvcnQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCB1bmlxdWVQb3J0ID0geyBuYW1lOiByb3cucG9ydCB9LFxuXHRcdFx0XHRcdHByb2R1Y3RzID0gcm93cy5maWx0ZXIoaW5zdGFuY2UgPT4gaW5zdGFuY2UucG9ydCA9PSByb3cucG9ydCkubWFwKGluc3RhbmNlID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IGluc3RhbmNlLnByb2R1Y3ROYW1lLFxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0SWQ6IGluc3RhbmNlLnByb2R1Y3RJZCxcblx0XHRcdFx0XHRcdFx0cHJvZHVjdENvZGU6IGluc3RhbmNlLnByb2R1Y3RDb2RlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IHVuaXF1ZVByb2R1Y3RzID0gXy51bmlxdWUocHJvZHVjdHMsIChwcm9kdWN0KSA9PiBwcm9kdWN0Lm5hbWUpO1xuXHRcdFx0XHR1bmlxdWVQb3J0LmNoaWxkcmVuID0gXy5zb3J0QnkodW5pcXVlUHJvZHVjdHMsIChwcm9kdWN0KSA9PiBwcm9kdWN0Lm5hbWUpO1xuXHRcdFx0XHRjZWxlYnJpdHlQb3J0cy5wdXNoKHVuaXF1ZVBvcnQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyb3cuc2hpcE5hbWUgPT0gXCJBTExVUkUgT0YgVEhFIFNFQVNcIikge1xuXHRcdFx0bGV0IGV4aXN0ZWRQb3J0ID0gXy5maW5kV2hlcmUoY2FyaWJiZWFuUG9ydHMsIHtuYW1lOiByb3cucG9ydH0pO1xuXG5cdFx0XHRpZiAoZXhpc3RlZFBvcnQgPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCB1bmlxdWVQb3J0ID0geyBuYW1lOiByb3cucG9ydCB9LFxuXHRcdFx0XHRcdHByb2R1Y3RzID0gcm93cy5maWx0ZXIoaW5zdGFuY2UgPT4gaW5zdGFuY2UucG9ydCA9PSByb3cucG9ydCkubWFwKGluc3RhbmNlID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdG5hbWU6IGluc3RhbmNlLnByb2R1Y3ROYW1lLFxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0SWQ6IGluc3RhbmNlLnByb2R1Y3RJZCxcblx0XHRcdFx0XHRcdFx0cHJvZHVjdENvZGU6IGluc3RhbmNlLnByb2R1Y3RDb2RlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IHVuaXF1ZVByb2R1Y3RzID0gXy51bmlxdWUocHJvZHVjdHMsIChwcm9kdWN0KSA9PiBwcm9kdWN0Lm5hbWUpO1xuXHRcdFx0XHR1bmlxdWVQb3J0LmNoaWxkcmVuID0gXy5zb3J0QnkodW5pcXVlUHJvZHVjdHMsIChwcm9kdWN0KSA9PiBwcm9kdWN0Lm5hbWUpO1xuXHRcdFx0XHRjYXJpYmJlYW5Qb3J0cy5wdXNoKHVuaXF1ZVBvcnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNlbGVicml0eVBvcnRzID0gXy5zb3J0QnkoY2VsZWJyaXR5UG9ydHMsIChwb3J0KSA9PiBwb3J0Lm5hbWUpO1xuXHRjYXJpYmJlYW5Qb3J0cyA9IF8uc29ydEJ5KGNhcmliYmVhblBvcnRzLCAocG9ydCkgPT4gcG9ydC5uYW1lKTtcblx0cmV0dXJuIHtjZWxlYnJpdHk6IGNlbGVicml0eVBvcnRzLCBjYXJpYmJlYW46IGNhcmliYmVhblBvcnRzfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNob3dwYWRVc2VySW5mbyAoKSB7XG5cdGlmICh3aW5kb3cuU2hvd3BhZExpYiAmJiB3aW5kb3cuU2hvd3BhZExpYi5nZXRVc2VySW5mbykge1xuXHRcdHJldHVybiB3aW5kb3cuU2hvd3BhZExpYi5nZXRVc2VySW5mbygpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlclVVSUQgKGxlbmd0aCkge1xuXHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0cmVzdWx0ICs9IFswLDEsMiwzLDQsNSw2LDcsOCw5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJhbmdlICh2YWx1ZSwgbWluLCBtYXgpIHtcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZ2xvYmFsLnV1aWQgPSBnZW5lcmF0ZU51bWJlclVVSUQ7IiwiaW1wb3J0IHtwcmVsb2FkUmVzb2x2ZXN9IGZyb20gJy4vaGVscGVyJztcblxubGV0IHJvdXRlckNvbmZpZyA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLFxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyKSB7XG5cdFx0JHN0YXRlUHJvdmlkZXJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xuXHR9XG5dO1xuXG52YXIgc3BsYXNoUm91dGUgPSB7XG5cdHVybDogJy9zcGxhc2gnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG1haW5Sb3V0ZSA9IHtcblx0dXJsOiAnL2hvbWUnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBob21lJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwgYXMgbWFpbkN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7Il19
