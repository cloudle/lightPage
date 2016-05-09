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
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-action-subject" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<div class="menu-heading" ng-click="toggleBurger()"></div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.title"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.title" ng-repeat="child in item.children"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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

var applicationController = exports.applicationController = function applicationController($rootScope, $scope, $state, $timeout, $interval, $window) {
	var _this = this;

	_classCallCheck(this, applicationController);

	this.developmentMode = false;
	this.ready = false;
	this.activePage = 'splash';
	this.burgerActive = false;
	this.subscriptionPopup = true;

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		_this.activePage = toState.name;_this.ready = false;
		$timeout(function () {
			return _this.ready = true;
		}, 250);
	});

	this.name = "Light Page!";
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window'];

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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L25hdmlnYXRpb24uanMiLCJhcHAvY29tcG9uZW50L25hdmlnYXRpb25MaW5rLmpzIiwiYXBwL2NvbXBvbmVudC9wb3B1cC5qcyIsImFwcC9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybS5qcyIsImFwcC9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL21haW5Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC91dGlscy9oZWxwZXIuanMiLCJhcHAvdXRpbHMvcm91dGVyQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxZQUFZO0FBQzNCLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPO0FBQ04saUJBQWM7QUFEUixHQUhEO0FBTU4sMHNDQU5NO0FBaUNOLFFBQU0sY0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixFQUEyQjtBQUNoQyxTQUFNLEtBQU4sR0FBYyxDQUFDO0FBQ2QsV0FBTyxXQURPO0FBRWQsWUFBUTtBQUZNLElBQUQsRUFHWDtBQUNGLFdBQU8sb0JBREw7QUFFRixjQUFVLENBQ1QsRUFBQyxPQUFPLFFBQVIsRUFEUyxFQUVULEVBQUMsT0FBTyxrQkFBUixFQUZTLEVBR1QsRUFBQyxPQUFPLGtCQUFSLEVBSFM7QUFGUixJQUhXLEVBVVg7QUFDRixXQUFPO0FBREwsSUFWVyxFQVlYO0FBQ0YsV0FBTztBQURMLElBWlcsQ0FBZDs7QUFnQkEsU0FBTSxZQUFOLEdBQXFCLFlBQVk7QUFDaEMsVUFBTSxZQUFOLEdBQXFCLENBQUMsTUFBTSxZQUE1QjtBQUNBLElBRkQ7O0FBSUEsU0FBTSxXQUFOLEdBQW9CLFlBQVk7QUFDL0IsVUFBTSxP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TUFBSyxTQURZO0FBRWpCLFFBQU87QUFDTixZQUFVLEVBQUMsYUFBYSwyQkFBZCxFQURKO0FBRU4sb0JBQWtCO0FBQ2pCLGdCQUFhLHNCQURJO0FBRWpCLGVBQVk7QUFGSztBQUZaO0FBRlUsQ0FBbEI7O0FBV0EsSUFBSSxZQUFZO0FBQ2YsTUFBSyxPQURVO0FBRWYsUUFBTztBQUNOLFlBQVUsRUFBQyxhQUFhLDBCQUFkLEVBREo7QUFFTixrQkFBZ0I7QUFDZixnQkFBYSx5QkFERTtBQUVmLGVBQVk7QUFGRztBQUZWO0FBRlEsQ0FBaEI7O2tCQVdlLFkiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0YnVyZ2VyQWN0aXZlOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCI+PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tYWN0aW9uLXN1YmplY3RcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVQb3B1cCgpXCI+xJDEgk5HIEvDnTwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLnRpdGxlXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQudGl0bGVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmxpbmtzID0gW3tcblx0XHRcdFx0dGl0bGU6ICd0cmFuZyBjaOG7pycsXG5cdFx0XHRcdGFjdGl2ZTogdHJ1ZVxuXHRcdFx0fSwge1xuXHRcdFx0XHR0aXRsZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdHt0aXRsZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0XHRcdHt0aXRsZTogJ3Rp4buHbiDDrWNoIGtodSB24buxYyd9LFxuXHRcdFx0XHRcdHt0aXRsZTogJ3Rp4buHbiDDrWNoIG7hu5lpIGtodSd9XG5cdFx0XHRcdF1cblx0XHRcdH0sIHtcblx0XHRcdFx0dGl0bGU6ICfGsHUgxJHDo2kgdGhhbmggdG/DoW4nXG5cdFx0XHR9LCB7XG5cdFx0XHRcdHRpdGxlOiAnbeG6t3QgYuG6sW5nJ1xuXHRcdFx0fV07XG5cblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuYnVyZ2VyQWN0aXZlID0gIXNjb3BlLmJ1cmdlckFjdGl2ZTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnRvZ2dsZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dOyIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRpbnN0YW5jZTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IGluc3RhbmNlLmFjdGl2ZX1cIj5cblx0XHRcdDxzcGFuIG5nLWJpbmQ9XCJpbnN0YW5jZS50aXRsZVwiPjwvc3Bhbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay50aXRsZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuXHRcdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgd3JhcHBlckNsYXNzOiAnQCcgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgbmctY2xhc3M9XCJ3cmFwcGVyQ2xhc3NcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdDxzcGFuPkfhu41pIG5nYXk8L3NwYW4+IDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCI+MDkwNiA2MzEgNjkxPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4oMjQvNykgaG/hurdjPC9zcGFuPiA8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPsSQxIJORyBLw508L3NwYW4+IDxzcGFuPsSR4buDIG5o4bqtbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkjhu40gdsOgIHTDqm4qXCIvPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLEkGnhu4duIHRob+G6oWkqXCIvPlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCAoa2jDtG5nIGLhuq90IGJ14buZYylcIi8+XG5cdFx0XHQ8dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIk7hu5lpIGR1bmcgY2hpIHRp4bq/dFwiPjwvdGV4dGFyZWE+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJzdWJtaXRcIj7EkMSCTkcgS8OdIE5HQVk8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckdGltZW91dCcsICckaW50ZXJ2YWwnLCAnJHdpbmRvdyddO1xuXHRkZXZlbG9wbWVudE1vZGUgPSBmYWxzZTtcblx0cmVhZHkgPSBmYWxzZTtcblx0YWN0aXZlUGFnZSA9ICdzcGxhc2gnO1xuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcblx0c3Vic2NyaXB0aW9uUG9wdXAgPSB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQsICRpbnRlcnZhbCwgJHdpbmRvdykge1xuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnJlYWR5ID0gdHJ1ZSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdHRoaXMubmFtZSA9IFwiTGlnaHQgUGFnZSFcIjtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cblx0fVxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAyMDAwKTtcblxuXHRcdGlmIChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpO1xuXHR9XG5cblx0c2tpcEludHJvICgpIHtcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcblx0fVxufSIsImltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi91dGlscy9yb3V0ZXJDb25maWdcIjtcblxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcblxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XG5cbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICdobVRvdWNoRXZlbnRzJ10pXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxuXHQuY29udHJvbGxlcignYXBwQ3RybCcsIGFwcGxpY2F0aW9uQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcblx0LmRpcmVjdGl2ZSgncG9wdXAnLCBwb3B1cClcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcblx0LmRpcmVjdGl2ZSgnc3Vic2NyaXB0aW9uRm9ybScsIHN1YnNjcmlwdGlvbkZvcm0pXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xuXG5BcHAucnVuKCgpID0+IHtcblx0RmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KTtcbn0pO1xuXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3V0ZSh1cmwsIGN0cmwsIHtoZWFkZXJVcmwsIGNvbnRlbnRVcmwsIG5hdmlnYXRpb25Vcmx9KSB7XG5cdGxldCByb3V0ZU5hbWUgPSB1cmwucmVwbGFjZSgnLycsICcnKS50b0xvd2VyQ2FzZSgpLFxuXHRcdHJvdXRlTWV0YSA9IHtcblx0XHRcdHVybCxcblx0XHRcdHZpZXdzOiB7XG5cdFx0XHRcdCdsYXlvdXQnOiB7XG5cdFx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9sYXlvdXQuaHRtbCcsXG5cdFx0XHRcdFx0Y29udHJvbGxlcjogY3RybFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyb3V0ZU1ldGEudmlld3NbYGhlYWRlckAke3JvdXRlTmFtZX1gXSA9IFx0XHR7IHRlbXBsYXRlVXJsOiBoZWFkZXJVcmwgfTtcblx0cm91dGVNZXRhLnZpZXdzW2Bjb250ZW50QCR7cm91dGVOYW1lfWBdID0geyB0ZW1wbGF0ZVVybDogY29udGVudFVybCB9O1xuXHRyb3V0ZU1ldGEudmlld3NbYG5hdmlnYXRpb25AJHtyb3V0ZU5hbWV9YF0gPSB7IHRlbXBsYXRlVXJsOiBuYXZpZ2F0aW9uVXJsIH07XG5cblx0cmV0dXJuIHJvdXRlTWV0YTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc291cmNlcywgcHJlZGljYXRlKSB7XG5cdHZhciBzZWFyY2hLZXksIHNlYXJjaFZhbHVlO1xuXHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlZGljYXRlKSkge1xuXHRcdHNlYXJjaEtleSA9IGtleTtcblx0XHRzZWFyY2hWYWx1ZSA9IHByZWRpY2F0ZVtrZXldO1xuXHR9XG5cblx0Zm9yIChsZXQgaW5zdGFuY2Ugb2Ygc291cmNlcykge1xuXHRcdGlmIChpbnN0YW5jZVtzZWFyY2hLZXldID09PSBzZWFyY2hWYWx1ZSkgcmV0dXJuIGluc3RhbmNlO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsVmFsaWQgKGVtYWlsKSB7XG5cdHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCB2YXIgcHJlbG9hZFJlc29sdmVzID0ge1xuXHRhcHBDb25maWc6IGZ1bmN0aW9uKGNvbmZpZ1NlcnZpY2UsIGNhbGN1bGF0b3JTZXJ2aWNlKSB7XG5cdFx0cmV0dXJuIGNvbmZpZ1NlcnZpY2UucHJvbWlzZTtcblx0fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSnNvblN0cnVjdHVyZSAocm93cykge1xuXHR2YXIgY2VsZWJyaXR5UG9ydHMgPSBbXSwgY2FyaWJiZWFuUG9ydHMgPSBbXTtcblxuXHRmb3IgKGxldCByb3cgb2Ygcm93cykge1xuXHRcdGlmIChyb3cuc2hpcE5hbWUgPT0gXCJDRUxFQlJJVFkgRVFVSU5PWFwiKSB7XG5cdFx0XHRsZXQgZXhpc3RlZFBvcnQgPSBfLmZpbmRXaGVyZShjZWxlYnJpdHlQb3J0cywge25hbWU6IHJvdy5wb3J0fSk7XG5cblx0XHRcdGlmIChleGlzdGVkUG9ydCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IHVuaXF1ZVBvcnQgPSB7IG5hbWU6IHJvdy5wb3J0IH0sXG5cdFx0XHRcdFx0cHJvZHVjdHMgPSByb3dzLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5wb3J0ID09IHJvdy5wb3J0KS5tYXAoaW5zdGFuY2UgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0bmFtZTogaW5zdGFuY2UucHJvZHVjdE5hbWUsXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RJZDogaW5zdGFuY2UucHJvZHVjdElkLFxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0Q29kZTogaW5zdGFuY2UucHJvZHVjdENvZGVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgdW5pcXVlUHJvZHVjdHMgPSBfLnVuaXF1ZShwcm9kdWN0cywgKHByb2R1Y3QpID0+IHByb2R1Y3QubmFtZSk7XG5cdFx0XHRcdHVuaXF1ZVBvcnQuY2hpbGRyZW4gPSBfLnNvcnRCeSh1bmlxdWVQcm9kdWN0cywgKHByb2R1Y3QpID0+IHByb2R1Y3QubmFtZSk7XG5cdFx0XHRcdGNlbGVicml0eVBvcnRzLnB1c2godW5pcXVlUG9ydCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJvdy5zaGlwTmFtZSA9PSBcIkFMTFVSRSBPRiBUSEUgU0VBU1wiKSB7XG5cdFx0XHRsZXQgZXhpc3RlZFBvcnQgPSBfLmZpbmRXaGVyZShjYXJpYmJlYW5Qb3J0cywge25hbWU6IHJvdy5wb3J0fSk7XG5cblx0XHRcdGlmIChleGlzdGVkUG9ydCA9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IHVuaXF1ZVBvcnQgPSB7IG5hbWU6IHJvdy5wb3J0IH0sXG5cdFx0XHRcdFx0cHJvZHVjdHMgPSByb3dzLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5wb3J0ID09IHJvdy5wb3J0KS5tYXAoaW5zdGFuY2UgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0bmFtZTogaW5zdGFuY2UucHJvZHVjdE5hbWUsXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RJZDogaW5zdGFuY2UucHJvZHVjdElkLFxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0Q29kZTogaW5zdGFuY2UucHJvZHVjdENvZGVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgdW5pcXVlUHJvZHVjdHMgPSBfLnVuaXF1ZShwcm9kdWN0cywgKHByb2R1Y3QpID0+IHByb2R1Y3QubmFtZSk7XG5cdFx0XHRcdHVuaXF1ZVBvcnQuY2hpbGRyZW4gPSBfLnNvcnRCeSh1bmlxdWVQcm9kdWN0cywgKHByb2R1Y3QpID0+IHByb2R1Y3QubmFtZSk7XG5cdFx0XHRcdGNhcmliYmVhblBvcnRzLnB1c2godW5pcXVlUG9ydCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y2VsZWJyaXR5UG9ydHMgPSBfLnNvcnRCeShjZWxlYnJpdHlQb3J0cywgKHBvcnQpID0+IHBvcnQubmFtZSk7XG5cdGNhcmliYmVhblBvcnRzID0gXy5zb3J0QnkoY2FyaWJiZWFuUG9ydHMsIChwb3J0KSA9PiBwb3J0Lm5hbWUpO1xuXHRyZXR1cm4ge2NlbGVicml0eTogY2VsZWJyaXR5UG9ydHMsIGNhcmliYmVhbjogY2FyaWJiZWFuUG9ydHN9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hvd3BhZFVzZXJJbmZvICgpIHtcblx0aWYgKHdpbmRvdy5TaG93cGFkTGliICYmIHdpbmRvdy5TaG93cGFkTGliLmdldFVzZXJJbmZvKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5TaG93cGFkTGliLmdldFVzZXJJbmZvKCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyVVVJRCAobGVuZ3RoKSB7XG5cdHZhciByZXN1bHQgPSBcIlwiO1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRyZXN1bHQgKz0gWzAsMSwyLDMsNCw1LDYsNyw4LDldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlUmFuZ2UgKHZhbHVlLCBtaW4sIG1heCkge1xuXHRpZiAobWluICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA8PSBtaW4pIHJldHVybiBtaW47XG5cdGlmIChtYXggIT0gdW5kZWZpbmVkICYmIHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi9oZWxwZXInO1xuXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsXG5cdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIpIHtcblx0XHQkc3RhdGVQcm92aWRlclxuXHRcdFx0LnN0YXRlKCdzcGxhc2gnLCBzcGxhc2hSb3V0ZSlcblx0XHRcdC5zdGF0ZSgnaG9tZScsIG1haW5Sb3V0ZSk7XG5cblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc3BsYXNoJyk7XG5cdH1cbl07XG5cbnZhciBzcGxhc2hSb3V0ZSA9IHtcblx0dXJsOiAnL3NwbGFzaCcsXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2VtcHR5TGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBzcGxhc2gnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3NwbGFzaC5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdzcGxhc2hDdHJsIGFzIHNwbGFzaEN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG52YXIgbWFpblJvdXRlID0ge1xuXHR1cmw6ICcvaG9tZScsXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QGhvbWUnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbWFpbi5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlckNvbmZpZzsiXX0=
