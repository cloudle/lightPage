(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$http', function ($http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { columns: '=' },
		template: '<div class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t<div class="fb-like" data-href="https://www.facebook.com/rivercity99/" data-width="100" data-layout="standard" data-action="like" data-show-faces="true" data-share="true" data-colorscheme="dark"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--<div class="col">-->\n\t\t\t\t\t\t<!--<div class="heading">LIÊN HỆ</div>-->\n\t\t\t\t\t\t<!--<div>Liên hệ tham quan dự án và chọn những vị trí đẹp nhất ngay từ bây giờ, Chúng tôi sẽ hỗ trợ nhiệt tình cho Quý Khách 24/7.</div>-->\n\t\t\t\t\t\t<!---->\n\t\t\t\t\t<!--</div>-->\n\t\t\n\t\t\t\t<!--<div class="footer-links">-->\n\t\t\t\t\t<!--<div class="link-item">HOME</div>-->\n\t\t\t\t\t<!--<div class="link-item">PORTFOLIO</div>-->\n\t\t\t\t\t<!--<div class="link-item">SERVICES</div>-->\n\t\t\t\t\t<!--<div class="link-item">TEAM MEMBER</div>-->\n\t\t\t\t\t<!--<div class="link-item">CLIENT</div>-->\n\t\t\t\t\t<!--<div class="link-item">CONTACT</div>-->\n\t\t\t\t<!--</div>-->\n\t\t\t</div>\n\t\t</div>',
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
exports.default = ['$rootScope', function ($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<subscription-form wrapper-class="subscription-form sidebar" submit-text="GỬI"></subscription-form>\n\t\t\t<!--<div class="small-banner"></div>-->\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.topPosition = 0;

			$rootScope.$on('scrollChange', function (event, position) {
				scope.$apply(function () {
					if (position.top > 100) {
						scope.topPosition = position.top - 30;
					} else {
						scope.topPosition = 0;
					}
				});
			});
		}
	};
}];

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$interval', '$timeout', function ($interval, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		scope: { items: '=' },
		transclude: true,
		template: '<div class="light-slider {{wrapperClass}}">\n\t\t\t<div class="active-slide" ng-style="{\'background-image\': \'url(\'+activeSlide.image+\')\'}"></div>\n\t\t\t<div class="slide-positions">\n\t\t\t\t<div class="position-item" ng-repeat="item in items"></div>\n\t\t\t</div>\n\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			console.log(element.find('.active-slide'));
			scope.activeIndex = 0;
			scope.activeSlide = scope.items[scope.activeIndex];

			if (global.sliderInterval) $interval.cancel(global.sliderInterval);
			global.sliderInterval = $interval(function () {
				scope.activeIndex++;
				if (scope.activeIndex > scope.items.length) {
					scope.activeIndex = 0;
				}

				scope.activeSlide = scope.items[scope.activeIndex];
			}, 10000);
		}
	};
}];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helper = require('../utils/helper');

exports.default = ['$http', function ($http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi ngay</span> <span class="ultra strong">0932 047 313</span>\n\t\t\t\t<span>(24/7) hoặc</span> <span class="strong">ĐĂNG KÝ</span> <span>để nhận</span> <span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> <span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*" ng-model="userName"/>\n\t\t\t<div class="error-row" ng-bind="userNameError" ng-if="userNameError"></div>\n\t\t\t<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>\n\t\t\t<div class="error-row" ng-bind="userPhoneError" ng-if="userPhoneError"></div>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>\n\t\t\t<div class="error-row" ng-bind="userEmailError" ng-if="userEmailError"></div>\n\t\t\n\t\t\t<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || \'ĐĂNG KÝ NGAY\'"></button>\n\t\t\t</div>\n\n\t\t</form>',
		link: function link(scope, element, attrs) {
			fields.forEach(function (field) {
				scope[field + 'Error'] = '';scope[field] = '';
			});

			scope.resetForm = function () {
				fields.forEach(function (field) {
					return scope[field] = '';
				});
			};

			scope.submit = function (event) {
				event.preventDefault();
				fields.forEach(function (field) {
					return scope[field + 'Error'] = '';
				});

				if (scope.userName.length < 1) scope.userNameError = 'Nhập tên';
				if (scope.userPhone.length < 8) scope.userPhoneError = 'Số điện thoại chưa đúng';

				if (scope.userNameError || scope.userPhoneError) return;

				var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
				    formData = _extends({}, localUserInfo, {
					site: location.host,
					fullName: scope.userName,
					name: scope.userName,
					phone: scope.userPhone,
					email: scope.userEmail
				});

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

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};

			global.get_info = function (_userInfo) {
				scope.$apply(function () {
					// user info get here
					console.log(_userInfo, "called!!");

					// fill userInfo to FORM đăng ký
					scope.userName = _userInfo.name;
					scope.userPhone = _userInfo.phone;
					scope.userEmail = _userInfo.email || '';

					//Store Social profile
					if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
				});
			};
		}
	};
}];


var fields = ['userName', 'userPhone', 'userEmail'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/helper":14}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var applicationController = exports.applicationController = function applicationController($rootScope, $scope, $state, $timeout, $interval, $window, $http, ngProgressFactory) {
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

	this.progress = ngProgressFactory.createInstance();
	this.progress.setColor('#FA8322');

	$rootScope.$on('$stateChangeStart', function () {
		_this.progress.start();
	});

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		_this.activePage = toState.name;_this.ready = false;
		$window.scrollTo(0, 0);_this.progress.complete();
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

	$http.get('http://128.199.227.132/banner/get/json', {
		params: { type: 'footer' }
	}).success(function (data) {
		_this.footers = data.results;
	});

	$(window).scroll(function () {
		var topScroll = $(window).scrollTop();
		$rootScope.$broadcast('scrollChange', { top: topScroll });
	});
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory'];

},{}],9:[function(require,module,exports){
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

	$http.get('http://128.199.227.132/banner/get/json', {
		params: { type: 'banner' }
	}).success(function (data) {
		_this.features = data.results;
	});

	this.sliders = [{
		image: 'images/riverside-inside.jpg'
	}, {
		image: 'images/riverside-inside2.jpg'
	}, {
		image: 'images/riverside-inside3.jpg'
	}];
};

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

var _slider = require("./component/slider");

var _slider2 = _interopRequireDefault(_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = angular.module('application', ['ui.router', 'ngAnimate', 'ngProgress', 'hmTouchEvents', 'ngParallax']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('pageCtrl', _pageController.pageController).controller('splashCtrl', _splashController.splashController).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('lightSidebar', _sidebar2.default).directive('lightFooter', _footer2.default).directive('lightSlider', _slider2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

App.run(function () {
	FastClick.attach(document.body);
});

App.filter('unsafe', ['$sce', function ($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
}]);

angular.bootstrap(document, ['application']);

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/popup":4,"./component/sidebar":5,"./component/slider":6,"./component/subscriptionForm":7,"./controller/applicationController":8,"./controller/mainController":9,"./controller/pageController":10,"./controller/splashController":11,"./routerConfig":13}],13:[function(require,module,exports){
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

},{"./utils/helper":14}],14:[function(require,module,exports){
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

},{}]},{},[12])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zbGlkZXIuanMiLCJhcHAvY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHAvY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9tYWluQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9yb3V0ZXJDb25maWcuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTiwwcUNBSk07QUEyQk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUE3QkssRUFBUDtBQStCQSxDQWhDYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFlBQVk7QUFDM0IsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixVQUFPLEdBREQ7QUFFTixpQkFBYyxHQUZSO0FBR04sVUFBTztBQUhELEdBSEQ7QUFRTixxekNBUk07QUFvQ04sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQTJCO0FB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bUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtLQUlDLElBQUksRUFBRSxLQUFGLEVBSkw7O0FBTUEsR0FBRSxNQUFGOztBQUVBLFFBQU8sQ0FBUDtBQUNBLENBVkQ7O0FBWUEsT0FBTyxJQUFQLEdBQWMsa0JBQWQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGNvbHVtbnM6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2xcIiBuZy1yZXBlYXQ9XCJjb2x1bW4gaW4gY29sdW1uc1wiIG5nLWJpbmQtaHRtbD1cImNvbHVtbi5Qb3N0LmNvbnRlbnQgfCB1bnNhZmVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmItbGlrZVwiIGRhdGEtaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9yaXZlcmNpdHk5OS9cIiBkYXRhLXdpZHRoPVwiMTAwXCIgZGF0YS1sYXlvdXQ9XCJzdGFuZGFyZFwiIGRhdGEtYWN0aW9uPVwibGlrZVwiIGRhdGEtc2hvdy1mYWNlcz1cInRydWVcIiBkYXRhLXNoYXJlPVwidHJ1ZVwiIGRhdGEtY29sb3JzY2hlbWU9XCJkYXJrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjb2xcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPkxJw4pOIEjhu4Y8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2Pkxpw6puIGjhu4cgdGhhbSBxdWFuIGThu7Egw6FuIHbDoCBjaOG7jW4gbmjhu69uZyB24buLIHRyw60gxJHhurlwIG5o4bqldCBuZ2F5IHThu6sgYsOieSBnaeG7nSwgQ2jDum5nIHTDtGkgc+G6vSBo4buXIHRy4bujIG5oaeG7h3QgdMOsbmggY2hvIFF1w70gS2jDoWNoIDI0LzcuPC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tLS0+XG5cdFx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxuXHRcdFxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImZvb3Rlci1saW5rc1wiPi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+SE9NRTwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+UE9SVEZPTElPPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5TRVJWSUNFUzwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+VEVBTSBNRU1CRVI8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkNMSUVOVDwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+Q09OVEFDVDwvZGl2Pi0tPlxuXHRcdFx0XHQ8IS0tPC9kaXY+LS0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0cmVhZHk6ICc9Jyxcblx0XHRcdGJ1cmdlckFjdGl2ZTogJz0nLFxuXHRcdFx0bGlua3M6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpdGUtbG9nb1wiIHVpLXNyZWY9XCJob21lXCI+PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlUG9wdXAoKVwiPsSQxIJORyBLw508L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cblx0XHRcdFx0XHQ8bmF2aWdhdGlvbi1saW5rIGluc3RhbmNlPVwibGlua1wiIG5nLXJlcGVhdD1cImxpbmsgaW4gbGlua3NcIj48L25hdmlnYXRpb24tbGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGJ1cmdlckFjdGl2ZX1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaGVhZGluZ1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHtpZDogY2hpbGQucGFnZV9pZH0pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcblxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsIGZ1bmN0aW9uICgkaHR0cCwgJHJvb3RTY29wZSwgJHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRpbnN0YW5jZTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1zdHlsZT1cInt3aWR0aDogbWF4V2lkdGgrJ3B4J31cIiBuZy1jbGFzcz1cInthY3RpdmU6IGxpbmtBY3RpdmVDbGFzcyhpbnN0YW5jZSl9XCJcblx0XHRcdFx0bmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaW5zdGFuY2UpXCI+XG5cdFx0XHQ8c3BhbiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiPjwvc3Bhbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2lkOiBsaW5rLnBhZ2VfaWR9KVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHNjb3BlLm1heFdpZHRoID0gc2NvcGUuaW5zdGFuY2UubmFtZS53aWR0aChtYWluRm9udCkgKyBwYWRkaW5nO1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2luc3RhbmNlJywgaW5zdGFuY2UgPT4ge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UuY2hpbGRyZW4gJiYgaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHRpbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA+IHNjb3BlLm1heFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRcdHNjb3BlLm1heFdpZHRoID0gY3VycmVudFdpZHRoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmICgkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UpIHtcblx0XHRcdFx0XHRpZiAoaW5zdGFuY2UuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdHJldHVybiBfLmZpbmRXaGVyZShpbnN0YW5jZS5jaGlsZHJlbiwge3BhZ2VfaWQ6ICRyb290U2NvcGUuYWN0aXZlUGFnZS5pZH0pICE9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlUGFnZS5pZCA9PT0gaW5zdGFuY2UucGFnZV9pZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlUGFnZSAmJiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWQgPT09IHBhZ2VJZCA/ICdhY3RpdmUnIDogJyc7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLnBhZ2VfaWQpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7aWQ6IGluc3RhbmNlLnBhZ2VfaWR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5jaGlsZHJlblswXS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1iYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlKClcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCIgbmctc3R5bGU9XCJ7dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyt0b3BQb3NpdGlvbisncHgpJ31cIj5cblx0XHRcdDxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiIHN1Ym1pdC10ZXh0PVwiR+G7rElcIj48L3N1YnNjcmlwdGlvbi1mb3JtPlxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzbWFsbC1iYW5uZXJcIj48L2Rpdj4tLT5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gMDtcblxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgcG9zaXRpb24pID0+IHtcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0XHRpZiAocG9zaXRpb24udG9wID4gMTAwKSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHBvc2l0aW9uLnRvcCAtIDMwO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRpbnRlcnZhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScgfSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24taXRlbVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZWxlbWVudC5maW5kKCcuYWN0aXZlLXNsaWRlJykpO1xuXHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xuXHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cblx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcblx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4Kys7XG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVJbmRleCA+IHNjb3BlLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXHRcdFx0fSwgMTAwMDApO1xuXHRcdH1cblx0fVxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IHdyYXBwZXJDbGFzczogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcblx0XHR0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwid3JhcHBlckNsYXNzXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdDxzcGFuPkfhu41pIG5nYXk8L3NwYW4+IDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCI+MDkzMiAwNDcgMzEzPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4oMjQvNykgaG/hurdjPC9zcGFuPiA8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPsSQxIJORyBLw508L3NwYW4+IDxzcGFuPsSR4buDIG5o4bqtbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkjhu40gdsOgIHTDqm4qXCIgbmctbW9kZWw9XCJ1c2VyTmFtZVwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlck5hbWVFcnJvclwiIG5nLWlmPVwidXNlck5hbWVFcnJvclwiPjwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLEkGnhu4duIHRob+G6oWkqXCIgbmctbW9kZWw9XCJ1c2VyUGhvbmVcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJ1c2VyUGhvbmVFcnJvclwiPjwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCAoa2jDtG5nIGLhuq90IGJ14buZYylcIiBuZy1tb2RlbD1cInVzZXJFbWFpbFwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlckVtYWlsRXJyb3JcIiBuZy1pZj1cInVzZXJFbWFpbEVycm9yXCI+PC9kaXY+XG5cdFx0XG5cdFx0XHQ8IS0tPHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJO4buZaSBkdW5nIGNoaSB0aeG6v3RcIiBuZy1tb2RlbD1cInVzZXJOb3RlXCI+PC90ZXh0YXJlYT4tLT5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbW1hbmRzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCIgbmctYmluZD1cInN1Ym1pdFRleHQgfHwgJ8SQxIJORyBLw50gTkdBWSdcIj48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9mb3JtPmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4geyBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnOyBzY29wZVtmaWVsZF0gPSAnJztcdH0pO1xuXG5cdFx0XHRzY29wZS5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkXSA9ICcnKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnN1Ym1pdCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnKTtcblxuXHRcdFx0XHRpZiAoc2NvcGUudXNlck5hbWUubGVuZ3RoIDwgMSkgc2NvcGUudXNlck5hbWVFcnJvciA9ICdOaOG6rXAgdMOqbic7XG5cdFx0XHRcdGlmIChzY29wZS51c2VyUGhvbmUubGVuZ3RoIDwgOCkgc2NvcGUudXNlclBob25lRXJyb3IgPSAnU+G7kSDEkWnhu4duIHRob+G6oWkgY2jGsGEgxJHDum5nJztcblxuXHRcdFx0XHRpZiAoc2NvcGUudXNlck5hbWVFcnJvciB8fCBzY29wZS51c2VyUGhvbmVFcnJvcikgcmV0dXJuO1xuXG5cdFx0XHRcdHZhciBsb2NhbFVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl91c2VySW5mb1wiKSksXG5cdFx0XHRcdFx0Zm9ybURhdGEgPSB7XG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcblx0XHRcdFx0XHRzaXRlOiBsb2NhdGlvbi5ob3N0LFxuXHRcdFx0XHRcdGZ1bGxOYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRuYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRwaG9uZTogc2NvcGUudXNlclBob25lLFxuXHRcdFx0XHRcdGVtYWlsOiBzY29wZS51c2VyRW1haWxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvL0ZpcmUgQW50cyB0cmFja2luZ0dvYWwgaG9vayFcblx0XHRcdFx0YWR4X2FuYWx5dGljLnRyYWNraW5nR29hbCgnNTc4NjY0NjY4JywgMSwgJ2V2ZW50Jyk7XG5cdFx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXG5cdFx0XHRcdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHQvL1NlbmQgZm9ybSB0byBUd2luJ3Mgc2VydmVyIVxuXHRcdFx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvY3VzdG9tZXIvaW5zZXJ0L2pzb24nLCB7XG5cdFx0XHRcdFx0cGFyYW1zOiBmb3JtRGF0YVxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNjb3BlLnJlc2V0Rm9ybSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcblx0XHRcdH07XG5cblx0XHRcdGdsb2JhbC5nZXRfaW5mbyA9IGZ1bmN0aW9uKF91c2VySW5mbyl7XG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3VzZXJJbmZvLCBcImNhbGxlZCEhXCIpO1xuXG5cdFx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cblx0XHRcdFx0XHRzY29wZS51c2VyTmFtZSA9IF91c2VySW5mby5uYW1lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZTtcblx0XHRcdFx0XHRzY29wZS51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XG5cblx0XHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXG5cdFx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dXG5cbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5J107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IGZhbHNlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXG5cdGxpbmtzID0gW3tcblx0XHRuYW1lOiAndHJhbmcgY2jhu6cnLFxuXHRcdGFjdGl2ZTogdHJ1ZVxuXHR9LCB7XG5cdFx0bmFtZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHR7bmFtZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBraHUgduG7sWMnfSxcblx0XHRcdHtuYW1lOiAndGnhu4duIMOtY2ggbuG7mWkga2h1J31cblx0XHRdXG5cdH0sIHtcblx0XHRuYW1lOiAnxrB1IMSRw6NpIHRoYW5oIHRvw6FuJ1xuXHR9LCB7XG5cdFx0bmFtZTogJ23hurd0IGLhurFuZydcblx0fV07XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5KSB7XG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XG5cdFx0dGhpcy5wcm9ncmVzcy5zZXRDb2xvcignI0ZBODMyMicpO1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9ncmVzcy5zdGFydCgpO1xuXHRcdH0pO1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpID0+IHtcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcblx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMucmVhZHkgPSB0cnVlLCAyNTApO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5uYW1lID0gXCJMaWdodCBQYWdlIVwiO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL21lbnUvZ2V0L2pzb24nLCB7XG5cdFx0XHRwYXJhbXM6IHsgc2l0ZTogbG9jYXRpb24uaG9zdCB9XG5cdFx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5saW5rcyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9iYW5uZXIvZ2V0L2pzb24nLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Zvb3RlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZvb3RlcnMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbENoYW5nZScsIHt0b3A6IHRvcFNjcm9sbH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJ107XG5cdGZlYXR1cmVzID0gW107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9wYWdlL2dldC9qc29uJywgeyBwYXJhbXM6IHsgcGFnZV9pZDogXCIxXCIgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVQYWdlID0gZGF0YS5yZXN1bHRzWzBdLlBhZ2U7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvYmFubmVyL2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdiYW5uZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5mZWF0dXJlcyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdHRoaXMuc2xpZGVycyA9IFt7XG5cdFx0XHRpbWFnZTogJ2ltYWdlcy9yaXZlcnNpZGUtaW5zaWRlLmpwZydcblx0XHR9LHtcblx0XHRcdGltYWdlOiAnaW1hZ2VzL3JpdmVyc2lkZS1pbnNpZGUyLmpwZydcblx0XHR9LHtcblx0XHRcdGltYWdlOiAnaW1hZ2VzL3JpdmVyc2lkZS1pbnNpZGUzLmpwZydcblx0XHR9XTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cdFx0bGV0IHBhZ2VJZCA9ICRzdGF0ZS5wYXJhbXMuaWQ7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvcGFnZS9nZXQvanNvbicsIHsgcGFyYW1zOiB7IHBhZ2VfaWQ6IHBhZ2VJZCB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgPSBkYXRhLnJlc3VsdHNbMF0uUGFnZTtcblx0XHR9KTtcblxuXHRcdGlmKHBhZ2VJZCA9PSAxKSAkc3RhdGUuZ28oJ2hvbWUnKTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAwKTtcblxuXHRcdGlmIChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpO1xuXHR9XG5cblx0c2tpcEludHJvICgpIHtcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcblx0fVxufSIsImltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcblxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcblxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50L3NpZGViYXJcIjtcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudC9zbGlkZXJcIjtcblxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICduZ1Byb2dyZXNzJywgJ2htVG91Y2hFdmVudHMnLCAnbmdQYXJhbGxheCddKVxuXHQuY29uZmlnKHJvdXRlckNvbmZpZylcblx0LmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBsaWNhdGlvbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcigncGFnZUN0cmwnLCBwYWdlQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3Rlcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTbGlkZXInLCBzbGlkZXIpXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcblxuQXBwLnJ1bigoKSA9PiB7XG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG59KTtcblxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XG5cdFx0fTtcblx0fVxuXSk7XG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5cbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLFxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XG5cdFx0JHN0YXRlUHJvdmlkZXJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xuXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xuXHR9XG5dO1xuXG52YXIgc3BsYXNoUm91dGUgPSB7XG5cdHVybDogJy9zcGxhc2gnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG1haW5Sb3V0ZSA9IHtcblx0dXJsOiAnL2hvbWUnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBob21lJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwgYXMgbWFpbkN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG52YXIgcGFnZVJvdXRlID0ge1xuXHR1cmw6ICcvcGFnZS86aWQnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBwYWdlJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL3BhZ2UuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAncGFnZUN0cmwgYXMgcGFnZUN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc291cmNlcywgcHJlZGljYXRlKSB7XG5cdHZhciBzZWFyY2hLZXksIHNlYXJjaFZhbHVlO1xuXHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlZGljYXRlKSkge1xuXHRcdHNlYXJjaEtleSA9IGtleTtcblx0XHRzZWFyY2hWYWx1ZSA9IHByZWRpY2F0ZVtrZXldO1xuXHR9XG5cblx0Zm9yIChsZXQgaW5zdGFuY2Ugb2Ygc291cmNlcykge1xuXHRcdGlmIChpbnN0YW5jZVtzZWFyY2hLZXldID09PSBzZWFyY2hWYWx1ZSkgcmV0dXJuIGluc3RhbmNlO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsVmFsaWQgKGVtYWlsKSB7XG5cdHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCB2YXIgcHJlbG9hZFJlc29sdmVzID0ge1xuXHRhcHBDb25maWc6IGZ1bmN0aW9uKGNvbmZpZ1NlcnZpY2UsIGNhbGN1bGF0b3JTZXJ2aWNlKSB7XG5cdFx0cmV0dXJuIGNvbmZpZ1NlcnZpY2UucHJvbWlzZTtcblx0fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyVVVJRCAobGVuZ3RoKSB7XG5cdHZhciByZXN1bHQgPSBcIlwiO1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRyZXN1bHQgKz0gWzAsMSwyLDMsNCw1LDYsNyw4LDldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlUmFuZ2UgKHZhbHVlLCBtaW4sIG1heCkge1xuXHRpZiAobWluICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA8PSBtaW4pIHJldHVybiBtaW47XG5cdGlmIChtYXggIT0gdW5kZWZpbmVkICYmIHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5TdHJpbmcucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZm9udCkge1xuXHR2YXIgZiA9IGZvbnQgfHwgJzEycHggYXJpYWwnLFxuXHRcdG8gPSAkKCc8ZGl2PicgKyB0aGlzICsgJzwvZGl2PicpXG5cdFx0XHQuY3NzKHsncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAnZmxvYXQnOiAnbGVmdCcsICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLCAndmlzaWJpbGl0eSc6ICdoaWRkZW4nLCAnZm9udCc6IGZ9KVxuXHRcdFx0LmFwcGVuZFRvKCQoJ2JvZHknKSksXG5cdFx0dyA9IG8ud2lkdGgoKTtcblxuXHRvLnJlbW92ZSgpO1xuXG5cdHJldHVybiB3O1xufTtcblxuZ2xvYmFsLnV1aWQgPSBnZW5lcmF0ZU51bWJlclVVSUQ7Il19
