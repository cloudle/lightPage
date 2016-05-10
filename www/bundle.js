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
			burgerActive: '=',
			links: '='
		},
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-action-subject" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<div class="menu-heading" ng-click="toggleBurger()"></div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
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
		template: '<div class="navigation-link" ng-class="{active: instance.active}">\n\t\t\t<span ng-bind="instance.name"></span>\n\t\t\t<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">\n\t\t\t\t<div class="sub-link icon-av-play-arrow" ng-bind="link.name" ng-repeat="link in instance.children"></div>\n\t\t\t</div>\n\t\t</div>',
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
exports.default = [function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: '<div class="popup-wrapper" ng-class="{active: enable}">\n\t\t\t<div class="popup-backdrop" ng-click="toggle()"></div>\n\t\t\t<div class="popup-content">\n\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.toggle = function () {
				scope.enable = !scope.enable;
			};
		}
	};
}];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@' },
		template: '<div ng-class="wrapperClass">\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi ngay</span> <span class="ultra strong">0906 631 691</span>\n\t\t\t\t<span>(24/7) hoặc</span> <span class="strong">ĐĂNG KÝ</span> <span>để nhận</span> <span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> <span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*"/>\n\t\t\t<input type="text" placeholder="Điện thoại*"/>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)"/>\n\t\t\t<textarea rows="4" placeholder="Nội dung chi tiết"></textarea>\n\t\t\t\n\t\t\t<div class="submit">ĐĂNG KÝ NGAY</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {}
	};
}];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var applicationController = exports.applicationController = function applicationController($rootScope, $scope, $state, $timeout, $interval, $window, $http) {
	var _this = this;

	_classCallCheck(this, applicationController);

	this.developmentMode = false;
	this.ready = false;
	this.activePage = 'splash';
	this.burgerActive = false;
	this.subscriptionPopup = false;
	this.links = [{
		name: 'trang chủ',
		active: true
	}, {
		name: 'vị trí và tiện ích',
		children: [{ name: 'vị trí' }, { name: 'tiện ích khu vực' }, { name: 'tiện ích nội khu' }]
	}, {
		name: 'ưu đãi thanh toán'
	}, {
		name: 'mặt bằng'
	}];

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		_this.activePage = toState.name;_this.ready = false;
		$timeout(function () {
			return _this.ready = true;
		}, 250);
	});

	this.name = "Light Page!";

	$http.get('http://128.199.227.132/menu/get/json').success(function (data) {
		console.log(data.results);
		_this.links = data.results;
	});
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainController = exports.mainController = function mainController($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
	_classCallCheck(this, mainController);
};

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

var _subscriptionForm = require("./component/subscriptionForm");

var _subscriptionForm2 = _interopRequireDefault(_subscriptionForm);

var _popup = require("./component/popup");

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = angular.module('application', ['ui.router', 'hmTouchEvents']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('splashCtrl', _splashController.splashController).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

App.run(function () {
	FastClick.attach(document.body);
});

angular.bootstrap(document, ['application']);

},{"./component/navigation":1,"./component/navigationLink":2,"./component/popup":3,"./component/subscriptionForm":4,"./controller/applicationController":5,"./controller/mainController":6,"./controller/splashController":7,"./utils/routerConfig":10}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"./helper":9}]},{},[8])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L25hdmlnYXRpb24uanMiLCJhcHAvY29tcG9uZW50L25hdmlnYXRpb25MaW5rLmpzIiwiYXBwL2NvbXBvbmVudC9wb3B1cC5qcyIsImFwcC9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybS5qcyIsImFwcC9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC91dGlscy9oZWxwZXIuanMiLCJhcHAvdXRpbHMvcm91dGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxZQUFZO0FBQzNCLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPO0FBQ04saUJBQWMsR0FEUjtBQUVOLFVBQU87QUFGRCxHQUhEO0FBT04sd3NDQVBNO0FBa0NOLFFBQU0sY0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixFQUEyQjtBQUNoQyxTQUFNLFlBQU4sR0FBcUIsWUFBWTtBQUNoQyxVQUFNLFlBQU4sR0FBcUIsQ0FBQyxNQUFNLFlBQTVCO0FBQ0EsSUFGRDs7QUFJQSxTQUFNLFdBQU4sR0FBb0IsWUFBWTtBQUMvQixVQUFNLE9BQU4sQ0FBYyxPQUFkLENBQXNCLGlCQUF0QixHQUEwQyxDQUFDLE1BQU0sT0FBTixDQUFjLE9BQWQsQ0FBc0IsaUJBQWpFO0FBQ0EsSUFGRDtBQUdBO0FBMUNLLEVBQVA7QUE0Q0EsQ0E3Q2MsQzs7Ozs7Ozs7a0JDQUEsQ0FBQyxZQUFZO0FBQzNCLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPO0FBQ04sYUFBVTtBQURKLEdBSEQ7QUFNTix1V0FOTTtBQVlO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QXlDLGtCQUF6QyxFQUNsQixVQUFTLGNBQVQsRUFBeUIsa0JBQXpCLEVBQTZDLGdCQUE3QyxFQUErRDtBQUM5RCxnQkFDRSxLQURGLENBQ1EsUUFEUixFQUNrQixXQURsQixFQUVFLEtBRkYsQ0FFUSxNQUZSLEVBRWdCLFNBRmhCOztBQUlBLG9CQUFtQixTQUFuQixDQUE2QixTQUE3QjtBQUNBLENBUGlCLENBQW5COztBQVVBLElBQUksY0FBYztBQUNqQixNQUFLLFNBRFk7QUFFakIsUUFBTztBQUNOLFlBQVUsRUFBQyxhQUFhLDJCQUFkLEVBREo7QUFFTixvQkFBa0I7QUFDakIsZ0JBQWEsc0JBREk7QUFFakIsZUFBWTtBQUZLO0FBRlo7QUFGVSxDQUFsQjs7QUFXQSxJQUFJLFlBQVk7QUFDZixNQUFLLE9BRFU7QUFFZixRQUFPO0FBQ04sWUFBVSxFQUFDLGFBQWEsMEJBQWQsRUFESjtBQUVOLGtCQUFnQjtBQUNmLGdCQUFhLHlCQURFO0FBRWYsZUFBWTtBQUZHO0FBRlY7QUFGUSxDQUFoQjs7a0JBV2UsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9Jyxcblx0XHRcdGxpbmtzOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCI+PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tYWN0aW9uLXN1YmplY3RcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVQb3B1cCgpXCI+xJDEgk5HIEvDnTwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLm5hbWVcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudXNcIiBuZy1pZj1cIml0ZW0uY2hpbGRyZW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51IHN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJjaGlsZC5uYW1lXCIgbmctcmVwZWF0PVwiY2hpbGQgaW4gaXRlbS5jaGlsZHJlblwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XTsiLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0aW5zdGFuY2U6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpbnN0YW5jZS5hY3RpdmV9XCI+XG5cdFx0XHQ8c3BhbiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiPjwvc3Bhbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1iYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlKClcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyB3cmFwcGVyQ2xhc3M6ICdAJyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBuZy1jbGFzcz1cIndyYXBwZXJDbGFzc1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cblx0XHRcdFx0PHNwYW4+R+G7jWkgbmdheTwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIj4wOTA2IDYzMSA2OTE8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPigyNC83KSBob+G6t2M8L3NwYW4+IDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+xJDEgk5HIEvDnTwvc3Bhbj4gPHNwYW4+xJHhu4Mgbmjhuq1uPC9zcGFuPiA8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkLDgU8gR0nDgTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+dOG7qzwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5DSOG7piDEkOG6plUgVMavPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSOG7jSB2w6AgdMOqbipcIi8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIsSQaeG7h24gdGhv4bqhaSpcIi8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiLz5cblx0XHRcdDx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiTuG7mWkgZHVuZyBjaGkgdGnhur90XCI+PC90ZXh0YXJlYT5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Ym1pdFwiPsSQxIJORyBLw50gTkdBWTwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJ107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IGZhbHNlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXG5cdGxpbmtzID0gW3tcblx0XHRuYW1lOiAndHJhbmcgY2jhu6cnLFxuXHRcdGFjdGl2ZTogdHJ1ZVxuXHR9LCB7XG5cdFx0bmFtZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHR7bmFtZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBraHUgduG7sWMnfSxcblx0XHRcdHtuYW1lOiAndGnhu4duIMOtY2ggbuG7mWkga2h1J31cblx0XHRdXG5cdH0sIHtcblx0XHRuYW1lOiAnxrB1IMSRw6NpIHRoYW5oIHRvw6FuJ1xuXHR9LCB7XG5cdFx0bmFtZTogJ23hurd0IGLhurFuZydcblx0fV07XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnJlYWR5ID0gdHJ1ZSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdHRoaXMubmFtZSA9IFwiTGlnaHQgUGFnZSFcIjtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9tZW51L2dldC9qc29uJykuc3VjY2VzcygoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YS5yZXN1bHRzKTtcblx0XHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSlcblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIG1haW5Db250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHApIHtcblxuXHR9XG59IiwiZXhwb3J0IGNsYXNzIHNwbGFzaENvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJGludGVydmFsLCAkdGltZW91dCkge1xuXHRcdHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDIwMDApO1xuXG5cdFx0aWYgKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnJlc2V0Q29udERvd25JbnRlcnZhbCk7XG5cdH1cblxuXHRza2lwSW50cm8gKCkge1xuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xuXHR9XG59IiwiaW1wb3J0IHthcHBsaWNhdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyXCI7XG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gXCIuL3V0aWxzL3JvdXRlckNvbmZpZ1wiO1xuXG5pbXBvcnQge21haW5Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XG5pbXBvcnQge3NwbGFzaENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlclwiO1xuXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IG5hdmlnYXRpb25MaW5rIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uTGlua1wiO1xuaW1wb3J0IHN1YnNjcmlwdGlvbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm1cIjtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9jb21wb25lbnQvcG9wdXBcIjtcblxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ2htVG91Y2hFdmVudHMnXSlcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XG5cbkFwcC5ydW4oKCkgPT4ge1xuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJvdXRlKHVybCwgY3RybCwge2hlYWRlclVybCwgY29udGVudFVybCwgbmF2aWdhdGlvblVybH0pIHtcblx0bGV0IHJvdXRlTmFtZSA9IHVybC5yZXBsYWNlKCcvJywgJycpLnRvTG93ZXJDYXNlKCksXG5cdFx0cm91dGVNZXRhID0ge1xuXHRcdFx0dXJsLFxuXHRcdFx0dmlld3M6IHtcblx0XHRcdFx0J2xheW91dCc6IHtcblx0XHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2xheW91dC5odG1sJyxcblx0XHRcdFx0XHRjb250cm9sbGVyOiBjdHJsXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdHJvdXRlTWV0YS52aWV3c1tgaGVhZGVyQCR7cm91dGVOYW1lfWBdID0gXHRcdHsgdGVtcGxhdGVVcmw6IGhlYWRlclVybCB9O1xuXHRyb3V0ZU1ldGEudmlld3NbYGNvbnRlbnRAJHtyb3V0ZU5hbWV9YF0gPSB7IHRlbXBsYXRlVXJsOiBjb250ZW50VXJsIH07XG5cdHJvdXRlTWV0YS52aWV3c1tgbmF2aWdhdGlvbkAke3JvdXRlTmFtZX1gXSA9IHsgdGVtcGxhdGVVcmw6IG5hdmlnYXRpb25VcmwgfTtcblxuXHRyZXR1cm4gcm91dGVNZXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XG5cdH1cblxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVKc29uU3RydWN0dXJlIChyb3dzKSB7XG5cdHZhciBjZWxlYnJpdHlQb3J0cyA9IFtdLCBjYXJpYmJlYW5Qb3J0cyA9IFtdO1xuXG5cdGZvciAobGV0IHJvdyBvZiByb3dzKSB7XG5cdFx0aWYgKHJvdy5zaGlwTmFtZSA9PSBcIkNFTEVCUklUWSBFUVVJTk9YXCIpIHtcblx0XHRcdGxldCBleGlzdGVkUG9ydCA9IF8uZmluZFdoZXJlKGNlbGVicml0eVBvcnRzLCB7bmFtZTogcm93LnBvcnR9KTtcblxuXHRcdFx0aWYgKGV4aXN0ZWRQb3J0ID09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsZXQgdW5pcXVlUG9ydCA9IHsgbmFtZTogcm93LnBvcnQgfSxcblx0XHRcdFx0XHRwcm9kdWN0cyA9IHJvd3MuZmlsdGVyKGluc3RhbmNlID0+IGluc3RhbmNlLnBvcnQgPT0gcm93LnBvcnQpLm1hcChpbnN0YW5jZSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBpbnN0YW5jZS5wcm9kdWN0TmFtZSxcblx0XHRcdFx0XHRcdFx0cHJvZHVjdElkOiBpbnN0YW5jZS5wcm9kdWN0SWQsXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RDb2RlOiBpbnN0YW5jZS5wcm9kdWN0Q29kZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCB1bmlxdWVQcm9kdWN0cyA9IF8udW5pcXVlKHByb2R1Y3RzLCAocHJvZHVjdCkgPT4gcHJvZHVjdC5uYW1lKTtcblx0XHRcdFx0dW5pcXVlUG9ydC5jaGlsZHJlbiA9IF8uc29ydEJ5KHVuaXF1ZVByb2R1Y3RzLCAocHJvZHVjdCkgPT4gcHJvZHVjdC5uYW1lKTtcblx0XHRcdFx0Y2VsZWJyaXR5UG9ydHMucHVzaCh1bmlxdWVQb3J0KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocm93LnNoaXBOYW1lID09IFwiQUxMVVJFIE9GIFRIRSBTRUFTXCIpIHtcblx0XHRcdGxldCBleGlzdGVkUG9ydCA9IF8uZmluZFdoZXJlKGNhcmliYmVhblBvcnRzLCB7bmFtZTogcm93LnBvcnR9KTtcblxuXHRcdFx0aWYgKGV4aXN0ZWRQb3J0ID09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsZXQgdW5pcXVlUG9ydCA9IHsgbmFtZTogcm93LnBvcnQgfSxcblx0XHRcdFx0XHRwcm9kdWN0cyA9IHJvd3MuZmlsdGVyKGluc3RhbmNlID0+IGluc3RhbmNlLnBvcnQgPT0gcm93LnBvcnQpLm1hcChpbnN0YW5jZSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRuYW1lOiBpbnN0YW5jZS5wcm9kdWN0TmFtZSxcblx0XHRcdFx0XHRcdFx0cHJvZHVjdElkOiBpbnN0YW5jZS5wcm9kdWN0SWQsXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RDb2RlOiBpbnN0YW5jZS5wcm9kdWN0Q29kZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxldCB1bmlxdWVQcm9kdWN0cyA9IF8udW5pcXVlKHByb2R1Y3RzLCAocHJvZHVjdCkgPT4gcHJvZHVjdC5uYW1lKTtcblx0XHRcdFx0dW5pcXVlUG9ydC5jaGlsZHJlbiA9IF8uc29ydEJ5KHVuaXF1ZVByb2R1Y3RzLCAocHJvZHVjdCkgPT4gcHJvZHVjdC5uYW1lKTtcblx0XHRcdFx0Y2FyaWJiZWFuUG9ydHMucHVzaCh1bmlxdWVQb3J0KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjZWxlYnJpdHlQb3J0cyA9IF8uc29ydEJ5KGNlbGVicml0eVBvcnRzLCAocG9ydCkgPT4gcG9ydC5uYW1lKTtcblx0Y2FyaWJiZWFuUG9ydHMgPSBfLnNvcnRCeShjYXJpYmJlYW5Qb3J0cywgKHBvcnQpID0+IHBvcnQubmFtZSk7XG5cdHJldHVybiB7Y2VsZWJyaXR5OiBjZWxlYnJpdHlQb3J0cywgY2FyaWJiZWFuOiBjYXJpYmJlYW5Qb3J0c307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaG93cGFkVXNlckluZm8gKCkge1xuXHRpZiAod2luZG93LlNob3dwYWRMaWIgJiYgd2luZG93LlNob3dwYWRMaWIuZ2V0VXNlckluZm8pIHtcblx0XHRyZXR1cm4gd2luZG93LlNob3dwYWRMaWIuZ2V0VXNlckluZm8oKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcblx0fVxuXG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmdsb2JhbC51dWlkID0gZ2VuZXJhdGVOdW1iZXJVVUlEOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL2hlbHBlcic7XG5cbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJyxcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKTtcblxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcblx0fVxuXTtcblxudmFyIHNwbGFzaFJvdXRlID0ge1xuXHR1cmw6ICcvc3BsYXNoJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBtYWluUm91dGUgPSB7XG5cdHVybDogJy9ob21lJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyJdfQ==
