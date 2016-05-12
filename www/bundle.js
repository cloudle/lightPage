(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = [function () {
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<div class="heading">CHỦ ĐẦU TƯ</div>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>An Gia Investment</li>\n\t\t\t\t\t\t\t<li>Creed Group Nhật Bản</li>\n\t\t\t\t\t\t\t<li>CTCP PT BĐS Phát Đạt</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<div class="heading">LIÊN HỆ</div>\n\t\t\t\t\t\t<div>Liên hệ tham quan dự án và chọn những vị trí đẹp nhất ngay từ bây giờ, Chúng tôi sẽ hỗ trợ nhiệt tình cho Quý Khách 24/7.</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class="fb-like" data-href="https://www.facebook.com/rivercity99/" data-width="100" data-layout="standard" data-action="like" data-show-faces="true" data-share="true" data-colorscheme="dark"></div>\n\t\t\t\t\t</div>\n\t\t\n\t\t\t\t<!--<div class="footer-links">-->\n\t\t\t\t\t<!--<div class="link-item">HOME</div>-->\n\t\t\t\t\t<!--<div class="link-item">PORTFOLIO</div>-->\n\t\t\t\t\t<!--<div class="link-item">SERVICES</div>-->\n\t\t\t\t\t<!--<div class="link-item">TEAM MEMBER</div>-->\n\t\t\t\t\t<!--<div class="link-item">CLIENT</div>-->\n\t\t\t\t\t<!--<div class="link-item">CONTACT</div>-->\n\t\t\t\t<!--</div>-->\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {}
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
			ready: '=',
			burgerActive: '=',
			links: '='
		},
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<div class="menu-heading" ng-click="toggleBurger()"></div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({id: child.page_id})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var mainFont = "14px 'Open Sans'",
    childFont = "13px 'Open Sans'",
    padding = 80;

exports.default = ['$http', '$rootScope', '$state', function ($http, $rootScope, $state) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: "<div class=\"navigation-link\" ng-style=\"{width: maxWidth+'px'}\" ng-class=\"{active: linkActiveClass(instance)}\"\n\t\t\t\tng-click=\"parentLinkNavigate(instance)\">\n\t\t\t<span ng-bind=\"instance.name\"></span>\n\t\t\t<div class=\"sub-navigations icon-navigation-arrow-drop-up\" ng-if=\"instance.children\">\n\t\t\t\t<div class=\"sub-link icon-av-play-arrow\" ng-bind=\"link.name\" ng-repeat=\"link in instance.children\"\n\t\t\t\t\tui-sref=\"page({id: link.page_id})\"></div>\n\t\t\t</div>\n\t\t</div>",
		link: function link(scope, element, attrs) {
			scope.active = false;
			scope.maxWidth = scope.instance.name.width(mainFont) + padding;

			scope.$watch('instance', function (instance) {
				if (instance.children && instance.children.length) {

					instance.children.forEach(function (child) {
						var currentWidth = child.name.width(childFont) + padding;
						if (currentWidth > scope.maxWidth) {
							scope.maxWidth = currentWidth;
						}
					});
				}
			});

			scope.linkActiveClass = function (instance) {
				if ($rootScope.activePage) {
					if (instance.children) {
						return _.findWhere(instance.children, { page_id: $rootScope.activePage.id }) != undefined;
					} else {
						return $rootScope.activePage.id === instance.page_id;
					}
				}
				return $rootScope.activePage && $rootScope.activePage.id === pageId ? 'active' : '';
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.page_id) {
					$state.go('page', { id: instance.page_id });
				} else if (instance.children[0] && instance.children[0].page_id) {
					$state.go('page', { id: instance.children[0].page_id });
				}
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

},{}],5:[function(require,module,exports){
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
		template: '<div class="sidebar">\n\t\t\t<div class="small-banner"></div>\n\t\t</div>',
		link: function link(scope, element, attrs) {}
	};
}];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$http', function ($http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@' },
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi ngay</span> <span class="ultra strong">0906 631 691</span>\n\t\t\t\t<span>(24/7) hoặc</span> <span class="strong">ĐĂNG KÝ</span> <span>để nhận</span> <span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> <span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*" ng-model="userName"/>\n\t\t\t<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>\n\t\t\t<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->\n\t\t\t\n\t\t\t<button type="submit" class="submit">ĐĂNG KÝ NGAY</button>\n\t\t</form>',
		link: function link(scope, element, attrs) {
			scope.resetForm = function () {
				scope.userName = "";
				scope.userPhone = "";
				scope.userEmail = "";
			};

			scope.submit = function (event) {
				event.preventDefault();

				var formData = {
					site: location.host,
					fullName: scope.userName,
					name: scope.userName,
					phone: scope.userPhone,
					email: scope.userEmail
				};

				//Fire Ants trackingGoal hook!
				adx_analytic.trackingGoal('578664668', 1, 'event');
				//Send form information to Ants!
				ants_userInfoListener(formData, false, true);
				//Send form to Twin's server!
				$http.get('http://128.199.227.132/customer/insert/json', {
					params: formData
				}).success(function (data) {
					console.log(data);
					scope.$parent.appCtrl.subscriptionPopup = false;
					scope.resetForm();
				});
			};
		}
	};
}];

},{}],7:[function(require,module,exports){
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
		$window.scrollTo(0, 0);
		$timeout(function () {
			return _this.ready = true;
		}, 250);
	});

	this.name = "Light Page!";

	$http.get('http://128.199.227.132/menu/get/json', {
		params: { site: location.host }
	}).success(function (data) {
		_this.links = data.results;
	});
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http'];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainController = exports.mainController = function mainController($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
	var _this = this;

	_classCallCheck(this, mainController);

	this.features = [];

	$http.get('http://128.199.227.132/page/get/json', { params: { page_id: "1" } }).success(function (data) {
		$rootScope.activePage = data.results[0].Page;
	});

	$http.get('http://128.199.227.132/banner/get/json').success(function (data) {
		_this.features = data.results;
	});
};

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageController = exports.pageController = function pageController($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
	_classCallCheck(this, pageController);

	var pageId = $state.params.id;

	$http.get('http://128.199.227.132/page/get/json', { params: { page_id: pageId } }).success(function (data) {
		$rootScope.activePage = data.results[0].Page;
	});

	if (pageId == 1) $state.go('home');
};

pageController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

},{}],10:[function(require,module,exports){
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
		}, 0);

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

},{}],11:[function(require,module,exports){
"use strict";

var _applicationController = require("./controller/applicationController");

var _routerConfig = require("./routerConfig");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _mainController = require("./controller/mainController");

var _pageController = require("./controller/pageController");

var _splashController = require("./controller/splashController");

var _navigation = require("./component/navigation");

var _navigation2 = _interopRequireDefault(_navigation);

var _navigationLink = require("./component/navigationLink");

var _navigationLink2 = _interopRequireDefault(_navigationLink);

var _footer = require("./component/footer");

var _footer2 = _interopRequireDefault(_footer);

var _sidebar = require("./component/sidebar");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _subscriptionForm = require("./component/subscriptionForm");

var _subscriptionForm2 = _interopRequireDefault(_subscriptionForm);

var _popup = require("./component/popup");

var _popup2 = _interopRequireDefault(_popup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = angular.module('application', ['ui.router', 'ngAnimate', 'hmTouchEvents', 'ngParallax']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('pageCtrl', _pageController.pageController).controller('splashCtrl', _splashController.splashController).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('lightSidebar', _sidebar2.default).directive('lightFooter', _footer2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

App.run(function () {
	FastClick.attach(document.body);
});

App.filter('unsafe', ['$sce', function ($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
}]);

angular.bootstrap(document, ['application']);

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/popup":4,"./component/sidebar":5,"./component/subscriptionForm":6,"./controller/applicationController":7,"./controller/mainController":8,"./controller/pageController":9,"./controller/splashController":10,"./routerConfig":12}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

var routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
	$stateProvider.state('splash', splashRoute).state('home', mainRoute).state('page', pageRoute);

	$urlRouterProvider.otherwise('/splash');

	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
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

var pageRoute = {
	url: '/page/:id',
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@page': {
			templateUrl: 'template/home/page.html',
			controller: 'pageCtrl as pageCtrl'
		}
	}
};

exports.default = routerConfig;

},{"./utils/helper":13}],13:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.find = find;
exports.isEmailValid = isEmailValid;
exports.generateNumberUUID = generateNumberUUID;
exports.safeRange = safeRange;
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

String.prototype.width = function (font) {
	var f = font || '12px arial',
	    o = $('<div>' + this + '</div>').css({ 'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f }).appendTo($('body')),
	    w = o.width();

	o.remove();

	return w;
};

global.uuid = generateNumberUUID;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[11])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtLmpzIiwiYXBwL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9wYWdlQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXIuanMiLCJhcHAvZW50cnkuanMiLCJhcHAvcm91dGVyQ29uZmlnLmpzIiwiYXBwL3V0aWxzL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O2tCQ0FlLENBQUMsWUFBWTtBQUMzQixRQUFPO0FBQ04sWUFBVSxHQURKO0FBRU4sV0FBUyxJQUZIO0FBR04sc3ZDQUhNO0FBK0JOLFFBQU0sY0FBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBQWlDLENBRXRDO0FBakNLLEVBQVA7QUFtQ0EsQ0FwQ2MsQzs7Ozs7Ozs7a0JDQUEsQ0FBQyxZQUFZO0FBQzNCLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPO0FBQ04sVUFBTyxHQUREO0FBRU4saUJBQWMsR0FGUjtBQUdOLFVBQU87QUFIRCxHQUhEO0FBUU4scXpDQVJNO0FBb0NOLFFBQU0sY0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixFQUEyQjtBQUNoQyxTQUFNLFlBQU4sR0FBcUIsWUFBWTtBQUNoQyxVQUFNLFlBQU4sR0FBcUIsQ0FBQyxNQUFNLFlBQTVCO0FBQ0EsSUFGRDs7QUFJ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VCxFQUFlO0FBQ3ZDLEtBQUksSUFBSSxRQUFRLFlBQWhCO0tBQ0MsSUFBSSxFQUFFLFVBQVUsSUFBVixHQUFpQixRQUFuQixFQUNGLEdBREUsQ0FDRSxFQUFDLFlBQVksVUFBYixFQUF5QixTQUFTLE1BQWxDLEVBQTBDLGVBQWUsUUFBekQsRUFBbUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtLQUlDLElBQUksRUFBRSxLQUFGLEVBSkw7O0FBTUEsR0FBRSxNQUFGOztBQUVBLFFBQU8sQ0FBUDtBQUNBLENBVkQ7O0FBWUEsT0FBTyxJQUFQLEdBQWMsa0JBQWQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPkNI4bumIMSQ4bqmVSBUxq88L2Rpdj5cblx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0PGxpPkFuIEdpYSBJbnZlc3RtZW50PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPkNyZWVkIEdyb3VwIE5o4bqtdCBC4bqjbjwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5DVENQIFBUIELEkFMgUGjDoXQgxJDhuqF0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5MScOKTiBI4buGPC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2Pkxpw6puIGjhu4cgdGhhbSBxdWFuIGThu7Egw6FuIHbDoCBjaOG7jW4gbmjhu69uZyB24buLIHRyw60gxJHhurlwIG5o4bqldCBuZ2F5IHThu6sgYsOieSBnaeG7nSwgQ2jDum5nIHTDtGkgc+G6vSBo4buXIHRy4bujIG5oaeG7h3QgdMOsbmggY2hvIFF1w70gS2jDoWNoIDI0LzcuPC9kaXY+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmYi1saWtlXCIgZGF0YS1ocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3JpdmVyY2l0eTk5L1wiIGRhdGEtd2lkdGg9XCIxMDBcIiBkYXRhLWxheW91dD1cInN0YW5kYXJkXCIgZGF0YS1hY3Rpb249XCJsaWtlXCIgZGF0YS1zaG93LWZhY2VzPVwidHJ1ZVwiIGRhdGEtc2hhcmU9XCJ0cnVlXCIgZGF0YS1jb2xvcnNjaGVtZT1cImRhcmtcIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcblx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJmb290ZXItbGlua3NcIj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkhPTUU8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlBPUlRGT0xJTzwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+U0VSVklDRVM8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlRFQU0gTUVNQkVSPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5DTElFTlQ8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkNPTlRBQ1Q8L2Rpdj4tLT5cblx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdHJlYWR5OiAnPScsXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9Jyxcblx0XHRcdGxpbmtzOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLW5hdmlnYXRpb24tbWVudVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIj7EkMSCTkcgS8OdPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1tZW51XCI+XG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgbmctYmluZD1cIml0ZW0ubmFtZVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnUgc3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImNoaWxkLm5hbWVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7aWQ6IGNoaWxkLnBhZ2VfaWR9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0aW5zdGFuY2U6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiXG5cdFx0XHRcdG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPlxuXHRcdFx0PHNwYW4gbmctYmluZD1cImluc3RhbmNlLm5hbWVcIj48L3NwYW4+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxuXHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHtpZDogbGluay5wYWdlX2lkfSlcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcblxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpbnN0YW5jZScsIGluc3RhbmNlID0+IHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLmNoaWxkcmVuICYmIGluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0aW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xuXHRcdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNjb3BlLmxpbmtBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoJHJvb3RTY29wZS5hY3RpdmVQYWdlKSB7XG5cdFx0XHRcdFx0aWYgKGluc3RhbmNlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXy5maW5kV2hlcmUoaW5zdGFuY2UuY2hpbGRyZW4sIHtwYWdlX2lkOiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWR9KSAhPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWQgPT09IGluc3RhbmNlLnBhZ2VfaWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgJiYgJHJvb3RTY29wZS5hY3RpdmVQYWdlLmlkID09PSBwYWdlSWQgPyAnYWN0aXZlJyA6ICcnO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuXHRcdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzbWFsbC1iYW5uZXJcIj48L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IHdyYXBwZXJDbGFzczogJ0AnIH0sXG5cdFx0dGVtcGxhdGU6IGA8Zm9ybSBuZy1jbGFzcz1cIndyYXBwZXJDbGFzc1wiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxuXHRcdFx0XHQ8c3Bhbj5H4buNaSBuZ2F5PC9zcGFuPiA8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiPjA5MDYgNjMxIDY5MTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+KDI0LzcpIGhv4bq3Yzwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzdHJvbmdcIj7EkMSCTkcgS8OdPC9zcGFuPiA8c3Bhbj7EkeG7gyBuaOG6rW48L3NwYW4+IDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+QsOBTyBHScOBPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj504burPC9zcGFuPiA8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJI4buNIHbDoCB0w6puKlwiIG5nLW1vZGVsPVwidXNlck5hbWVcIi8+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIsSQaeG7h24gdGhv4bqhaSpcIiBuZy1tb2RlbD1cInVzZXJQaG9uZVwiLz5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIgbmctbW9kZWw9XCJ1c2VyRW1haWxcIi8+XG5cdFx0XHQ8IS0tPHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJO4buZaSBkdW5nIGNoaSB0aeG6v3RcIiBuZy1tb2RlbD1cInVzZXJOb3RlXCI+PC90ZXh0YXJlYT4tLT5cblx0XHRcdFxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIj7EkMSCTkcgS8OdIE5HQVk8L2J1dHRvbj5cblx0XHQ8L2Zvcm0+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRzY29wZS5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdHNjb3BlLnVzZXJOYW1lID0gXCJcIjtcblx0XHRcdFx0c2NvcGUudXNlclBob25lID0gXCJcIjtcblx0XHRcdFx0c2NvcGUudXNlckVtYWlsID0gXCJcIjtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnN1Ym1pdCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRcdHZhciBmb3JtRGF0YSA9IHtcblx0XHRcdFx0XHRzaXRlOiBsb2NhdGlvbi5ob3N0LFxuXHRcdFx0XHRcdGZ1bGxOYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRuYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRwaG9uZTogc2NvcGUudXNlclBob25lLFxuXHRcdFx0XHRcdGVtYWlsOiBzY29wZS51c2VyRW1haWxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvL0ZpcmUgQW50cyB0cmFja2luZ0dvYWwgaG9vayFcblx0XHRcdFx0YWR4X2FuYWx5dGljLnRyYWNraW5nR29hbCgnNTc4NjY0NjY4JywgMSwgJ2V2ZW50Jyk7XG5cdFx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXG5cdFx0XHRcdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHQvL1NlbmQgZm9ybSB0byBUd2luJ3Mgc2VydmVyIVxuXHRcdFx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvY3VzdG9tZXIvaW5zZXJ0L2pzb24nLCB7XG5cdFx0XHRcdFx0cGFyYW1zOiBmb3JtRGF0YVxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNjb3BlLnJlc2V0Rm9ybSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJ107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IGZhbHNlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXG5cdGxpbmtzID0gW3tcblx0XHRuYW1lOiAndHJhbmcgY2jhu6cnLFxuXHRcdGFjdGl2ZTogdHJ1ZVxuXHR9LCB7XG5cdFx0bmFtZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHR7bmFtZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBraHUgduG7sWMnfSxcblx0XHRcdHtuYW1lOiAndGnhu4duIMOtY2ggbuG7mWkga2h1J31cblx0XHRdXG5cdH0sIHtcblx0XHRuYW1lOiAnxrB1IMSRw6NpIHRoYW5oIHRvw6FuJ1xuXHR9LCB7XG5cdFx0bmFtZTogJ23hurd0IGLhurFuZydcblx0fV07XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5yZWFkeSA9IHRydWUsIDI1MCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm5hbWUgPSBcIkxpZ2h0IFBhZ2UhXCI7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvbWVudS9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyBzaXRlOiBsb2NhdGlvbi5ob3N0IH1cblx0XHR9KS5zdWNjZXNzKChkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmxpbmtzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pXG5cdH1cbn1cbiIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblx0ZmVhdHVyZXMgPSBbXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL3BhZ2UvZ2V0L2pzb24nLCB7IHBhcmFtczogeyBwYWdlX2lkOiBcIjFcIiB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgPSBkYXRhLnJlc3VsdHNbMF0uUGFnZTtcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9iYW5uZXIvZ2V0L2pzb24nKS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5mZWF0dXJlcyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cdFx0bGV0IHBhZ2VJZCA9ICRzdGF0ZS5wYXJhbXMuaWQ7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvcGFnZS9nZXQvanNvbicsIHsgcGFyYW1zOiB7IHBhZ2VfaWQ6IHBhZ2VJZCB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgPSBkYXRhLnJlc3VsdHNbMF0uUGFnZTtcblx0XHR9KTtcblxuXHRcdGlmKHBhZ2VJZCA9PSAxKSAkc3RhdGUuZ28oJ2hvbWUnKTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAwKTtcblxuXHRcdGlmIChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpO1xuXHR9XG5cblx0c2tpcEludHJvICgpIHtcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcblx0fVxufSIsImltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcblxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcblxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50L3NpZGViYXJcIjtcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XG5cbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnaG1Ub3VjaEV2ZW50cycsICduZ1BhcmFsbGF4J10pXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxuXHQuY29udHJvbGxlcignYXBwQ3RybCcsIGFwcGxpY2F0aW9uQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXG5cdC5kaXJlY3RpdmUoJ3BvcHVwJywgcG9wdXApXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0TmF2aWdhdGlvbicsIG5hdmlnYXRpb24pXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2lkZWJhcicsIHNpZGViYXIpXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0Rm9vdGVyJywgZm9vdGVyKVxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XG5cbkFwcC5ydW4oKCkgPT4ge1xuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcblx0JyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xuXHRcdH07XG5cdH1cbl0pO1xuXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJyxcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKVxuXHRcdFx0LnN0YXRlKCdwYWdlJywgcGFnZVJvdXRlKTtcblxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcblxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucGF0Y2ggPSB7fTtcblx0fVxuXTtcblxudmFyIHNwbGFzaFJvdXRlID0ge1xuXHR1cmw6ICcvc3BsYXNoJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBtYWluUm91dGUgPSB7XG5cdHVybDogJy9ob21lJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIHBhZ2VSb3V0ZSA9IHtcblx0dXJsOiAnL3BhZ2UvOmlkJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyIsImV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByZWRpY2F0ZSkpIHtcblx0XHRzZWFyY2hLZXkgPSBrZXk7XG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcblx0fVxuXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcblx0XHRpZiAoaW5zdGFuY2Vbc2VhcmNoS2V5XSA9PT0gc2VhcmNoVmFsdWUpIHJldHVybiBpbnN0YW5jZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5leHBvcnQgdmFyIHByZWxvYWRSZXNvbHZlcyA9IHtcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlclVVSUQgKGxlbmd0aCkge1xuXHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0cmVzdWx0ICs9IFswLDEsMiwzLDQsNSw2LDcsOCw5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJhbmdlICh2YWx1ZSwgbWluLCBtYXgpIHtcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGZvbnQpIHtcblx0dmFyIGYgPSBmb250IHx8ICcxMnB4IGFyaWFsJyxcblx0XHRvID0gJCgnPGRpdj4nICsgdGhpcyArICc8L2Rpdj4nKVxuXHRcdFx0LmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ2Zsb2F0JzogJ2xlZnQnLCAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJywgJ2ZvbnQnOiBmfSlcblx0XHRcdC5hcHBlbmRUbygkKCdib2R5JykpLFxuXHRcdHcgPSBvLndpZHRoKCk7XG5cblx0by5yZW1vdmUoKTtcblxuXHRyZXR1cm4gdztcbn07XG5cbmdsb2JhbC51dWlkID0gZ2VuZXJhdGVOdW1iZXJVVUlEOyJdfQ==
