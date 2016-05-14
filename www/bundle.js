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
		template: '<div class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t\t<!--<div class="col">-->\n\t\t\t\t\t\t<!--<div class="heading">LIÊN HỆ</div>-->\n\t\t\t\t\t\t<!--<div>Liên hệ tham quan dự án và chọn những vị trí đẹp nhất ngay từ bây giờ, Chúng tôi sẽ hỗ trợ nhiệt tình cho Quý Khách 24/7.</div>-->\n\t\t\t\t\t\t<!---->\n\t\t\t\t\t<!--</div>-->\n\t\t\n\t\t\t\t<!--<div class="footer-links">-->\n\t\t\t\t\t<!--<div class="link-item">HOME</div>-->\n\t\t\t\t\t<!--<div class="link-item">PORTFOLIO</div>-->\n\t\t\t\t\t<!--<div class="link-item">SERVICES</div>-->\n\t\t\t\t\t<!--<div class="link-item">TEAM MEMBER</div>-->\n\t\t\t\t\t<!--<div class="link-item">CLIENT</div>-->\n\t\t\t\t\t<!--<div class="link-item">CONTACT</div>-->\n\t\t\t\t<!--</div>-->\n\t\t\t</div>\n\t\t</div>',
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
var sidebarTopMargin = 200,
    sidebarBottomMargin = 570;

exports.default = ['$rootScope', function ($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>\n\t\t\t<div class="small-banner"></div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.topPosition = 0;
			var bannerHeight = element.outerHeight();

			$rootScope.$on('scrollChange', function (event, position) {
				scope.$apply(function () {
					var sidebarTouchBottom = $(window).scrollTop() + $(window).height() > $(document).height() - sidebarBottomMargin;
					// if($(window).scrollTop() + $(window).height() > $(document).height() - sidebarBottomMargin) {
					// 	console.log("near bottom!");
					// }

					if (sidebarTouchBottom) {
						scope.topPosition = $(document).height() - (sidebarBottomMargin + bannerHeight);
						console.log("near bottom!", scope.topPosition);
					} else if (position.top > 100) {
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
		template: '<div class="light-slider {{wrapperClass}}">\t\n\t\t\t<div id="currentSlide" class="active-slide" ng-style="{\'background-image\': \'url(\'+activeSlide.image+\')\'}"></div>\n\t\t\t<div id="previousSlide" class="active-slide previous" ng-style="{\'background-image\': \'url(\'+previousSlide.image+\')\'}"></div>\n\t\n\t\t\t<div class="slide-positions">\n\t\t\t\t<div class="position-item" ng-repeat="item in items"></div>\n\t\t\t</div>\n\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			var $activeSlide = element.find('#currentSlide'),
			    $previousSlide = element.find('#previousSlide'),
			    easeEffect = Sine.easeIn,
			    transitionTime = 2;

			scope.activeIndex = 0;
			scope.activeSlide = scope.items[scope.activeIndex];

			scope.$watch('items', function () {
				nextSlide(0);
			});

			if (global.sliderInterval) $interval.cancel(global.sliderInterval);

			var nextSlide = function nextSlide(nextIndex) {
				scope.previousSlide = scope.items[scope.activeIndex];

				scope.activeIndex = nextIndex || scope.activeIndex + 1;
				if (scope.activeIndex >= scope.items.length || scope.activeIndex < 0) {
					scope.activeIndex = 0;
				}

				scope.activeSlide = scope.items[scope.activeIndex];

				//Play transition animation!
				// TweenLite.fromTo($previousSlide, transitionTime, {ease: easeEffect, x: '0%'}, {ease: easeEffect, x: '100%'});
				// TweenLite.fromTo($activeSlide, transitionTime, {ease: easeEffect, x: '-100%'}, {ease: easeEffect, x: '0%'});
				TweenLite.to($activeSlide, 0, { ease: easeEffect, opacity: '1' });
				TweenLite.fromTo($previousSlide, transitionTime, { ease: easeEffect, opacity: '1' }, { ease: easeEffect, opacity: '0' });
			};

			global.sliderInterval = $interval(function () {
				return nextSlide();
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
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi </span> \n\t\t\t\t<span class="ultra strong">0932 047 313</span>\n\t\t\t\t<span> hoặc gửi thông tin để nhận</span> \n\t\t\t\t<span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> \n\t\t\t\t<span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*" ng-model="userName"/>\n\t\t\t<div class="error-row" ng-bind="userNameError" ng-if="userNameError"></div>\n\t\t\t<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>\n\t\t\t<div class="error-row" ng-bind="userPhoneError" ng-if="userPhoneError"></div>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>\n\t\t\t<div class="error-row" ng-bind="userEmailError" ng-if="userEmailError"></div>\n\t\t\n\t\t\t<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || \'GỬI\'"></button>\n\t\t\t</div>\n\n\t\t</form>',
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
(function (global){
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

	global.togglePopup = function () {
		$scope.$apply(function () {
			_this.subscriptionPopup = !_this.subscriptionPopup;
		});
	};

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

	$(window).resize(function () {
		$rootScope.$broadcast('sizeChange', {
			height: $(window).height(),
			width: $(window).width()
		});
	});
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

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
	this.sliders = [];

	$http.get('http://128.199.227.132/page/get/json', { params: { page_id: "1" } }).success(function (data) {
		$rootScope.activePage = data.results[0].Page;
	});

	$http.get('http://128.199.227.132/banner/get/json', {
		params: { type: 'banner' }
	}).success(function (data) {
		_this.features = data.results;
	});

	$http.get('http://128.199.227.132/banner/get/json', {
		params: { type: 'HomeSlider' }
	}).success(function (data) {
		_this.sliders = data.results.map(function (item) {
			return item.Post;
		});
	});

	this.sliderHeight = $(window).height() - 70;
	$rootScope.$on('sizeChange', function (event, size) {
		$scope.$apply(function () {
			_this.sliderHeight = size.height > 570 ? size.height - 70 : 500;
		});
	});
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zbGlkZXIuanMiLCJhcHAvY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHAvY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9tYWluQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9yb3V0ZXJDb25maWcuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTixvNkJBSk07QUF3Qk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUExQkssRUFBUDtBQTRCQSxDQTdCYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFlBQVk7QUFDM0IsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixVQUFPLEdBREQ7QUFFTixpQkFBYyxHQUZSO0FBR04sVUFBTztBQUhELEdBSEQ7QUFRTixxekNBUk07QUFvQ04sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQTJCO0FB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ZSxJQUFJLE1BQW5CLEVBQTJCLEdBQTNCLEVBQWdDO0FBQy9CLFlBQVUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFzQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxDQUF6QixDQUF0QixDQUFWO0FBQ0E7O0FBRUQsUUFBTyxNQUFQO0FBQ0E7O0FBRU0sU0FBUyxTQUFULENBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQzNDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLFFBQU8sS0FBUDtBQUNBOztBQUVELE9BQU8sU0FBUCxDQUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtLQUNDLElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7S0FJQyxJQUFJLEVBQUUsS0FBRixFQUpMOztBQU1BLEdBQUUsTUFBRjs7QUFFQSxRQUFPLENBQVA7QUFDQSxDQVZEOztBQVlBLE9BQU8sSUFBUCxHQUFjLGtCQUFkIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjb2xcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPkxJw4pOIEjhu4Y8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2Pkxpw6puIGjhu4cgdGhhbSBxdWFuIGThu7Egw6FuIHbDoCBjaOG7jW4gbmjhu69uZyB24buLIHRyw60gxJHhurlwIG5o4bqldCBuZ2F5IHThu6sgYsOieSBnaeG7nSwgQ2jDum5nIHTDtGkgc+G6vSBo4buXIHRy4bujIG5oaeG7h3QgdMOsbmggY2hvIFF1w70gS2jDoWNoIDI0LzcuPC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tLS0+XG5cdFx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxuXHRcdFxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImZvb3Rlci1saW5rc1wiPi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+SE9NRTwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+UE9SVEZPTElPPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5TRVJWSUNFUzwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+VEVBTSBNRU1CRVI8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkNMSUVOVDwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+Q09OVEFDVDwvZGl2Pi0tPlxuXHRcdFx0XHQ8IS0tPC9kaXY+LS0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0cmVhZHk6ICc9Jyxcblx0XHRcdGJ1cmdlckFjdGl2ZTogJz0nLFxuXHRcdFx0bGlua3M6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpdGUtbG9nb1wiIHVpLXNyZWY9XCJob21lXCI+PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlUG9wdXAoKVwiPsSQxIJORyBLw508L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cblx0XHRcdFx0XHQ8bmF2aWdhdGlvbi1saW5rIGluc3RhbmNlPVwibGlua1wiIG5nLXJlcGVhdD1cImxpbmsgaW4gbGlua3NcIj48L25hdmlnYXRpb24tbGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGJ1cmdlckFjdGl2ZX1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaGVhZGluZ1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHtpZDogY2hpbGQucGFnZV9pZH0pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcblxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsIGZ1bmN0aW9uICgkaHR0cCwgJHJvb3RTY29wZSwgJHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRpbnN0YW5jZTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1zdHlsZT1cInt3aWR0aDogbWF4V2lkdGgrJ3B4J31cIiBuZy1jbGFzcz1cInthY3RpdmU6IGxpbmtBY3RpdmVDbGFzcyhpbnN0YW5jZSl9XCJcblx0XHRcdFx0bmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaW5zdGFuY2UpXCI+XG5cdFx0XHQ8c3BhbiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiPjwvc3Bhbj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2lkOiBsaW5rLnBhZ2VfaWR9KVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHNjb3BlLm1heFdpZHRoID0gc2NvcGUuaW5zdGFuY2UubmFtZS53aWR0aChtYWluRm9udCkgKyBwYWRkaW5nO1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2luc3RhbmNlJywgaW5zdGFuY2UgPT4ge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UuY2hpbGRyZW4gJiYgaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHRpbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA+IHNjb3BlLm1heFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRcdHNjb3BlLm1heFdpZHRoID0gY3VycmVudFdpZHRoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmICgkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UpIHtcblx0XHRcdFx0XHRpZiAoaW5zdGFuY2UuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRcdHJldHVybiBfLmZpbmRXaGVyZShpbnN0YW5jZS5jaGlsZHJlbiwge3BhZ2VfaWQ6ICRyb290U2NvcGUuYWN0aXZlUGFnZS5pZH0pICE9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlUGFnZS5pZCA9PT0gaW5zdGFuY2UucGFnZV9pZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlUGFnZSAmJiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWQgPT09IHBhZ2VJZCA/ICdhY3RpdmUnIDogJyc7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLnBhZ2VfaWQpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7aWQ6IGluc3RhbmNlLnBhZ2VfaWR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5jaGlsZHJlblswXS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1iYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlKClcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufV0iLCJjb25zdCBzaWRlYmFyVG9wTWFyZ2luID0gMjAwLFxuXHRzaWRlYmFyQm90dG9tTWFyZ2luID0gNTcwO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCIgbmctc3R5bGU9XCJ7dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyt0b3BQb3NpdGlvbisncHgpJ31cIj5cblx0XHRcdDxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic21hbGwtYmFubmVyXCI+PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IDA7XG5cdFx0XHRsZXQgYmFubmVySGVpZ2h0ID0gZWxlbWVudC5vdXRlckhlaWdodCgpO1xuXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2Nyb2xsQ2hhbmdlJywgKGV2ZW50LCBwb3NpdGlvbikgPT4ge1xuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBzaWRlYmFyVG91Y2hCb3R0b20gPSAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID4gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSBzaWRlYmFyQm90dG9tTWFyZ2luKTtcblx0XHRcdFx0XHQvLyBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPiAkKGRvY3VtZW50KS5oZWlnaHQoKSAtIHNpZGViYXJCb3R0b21NYXJnaW4pIHtcblx0XHRcdFx0XHQvLyBcdGNvbnNvbGUubG9nKFwibmVhciBib3R0b20hXCIpO1xuXHRcdFx0XHRcdC8vIH1cblxuXHRcdFx0XHRcdGlmIChzaWRlYmFyVG91Y2hCb3R0b20pIHtcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAoc2lkZWJhckJvdHRvbU1hcmdpbiArIGJhbm5lckhlaWdodCk7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm5lYXIgYm90dG9tIVwiLCBzY29wZS50b3BQb3NpdGlvbik7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChwb3NpdGlvbi50b3AgPiAxMDApIHtcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gcG9zaXRpb24udG9wIC0gMzA7XG5cdFx0XHRcdFx0fSAgZWxzZSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRpbnRlcnZhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScgfSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCI+XHRcblx0XHRcdDxkaXYgaWQ9XCJjdXJyZW50U2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK2FjdGl2ZVNsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJwcmV2aW91c1NsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGUgcHJldmlvdXNcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytwcmV2aW91c1NsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cblx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1pdGVtXCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRsZXQgJGFjdGl2ZVNsaWRlID0gZWxlbWVudC5maW5kKCcjY3VycmVudFNsaWRlJyksICRwcmV2aW91c1NsaWRlID0gZWxlbWVudC5maW5kKCcjcHJldmlvdXNTbGlkZScpLFxuXHRcdFx0XHRlYXNlRWZmZWN0ID0gU2luZS5lYXNlSW4sIHRyYW5zaXRpb25UaW1lID0gMjtcblxuXHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xuXHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cblx0XHRcdHNjb3BlLiR3YXRjaCgnaXRlbXMnLCAoKSA9PiB7XG5cdFx0XHRcdG5leHRTbGlkZSgwKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XG5cblx0XHRcdGxldCBuZXh0U2xpZGUgPSBmdW5jdGlvbiAobmV4dEluZGV4KSB7XG5cdFx0XHRcdHNjb3BlLnByZXZpb3VzU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cblx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBuZXh0SW5kZXggfHwgc2NvcGUuYWN0aXZlSW5kZXggKyAxO1xuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPj0gc2NvcGUuaXRlbXMubGVuZ3RoIHx8IHNjb3BlLmFjdGl2ZUluZGV4IDwgMCkge1xuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXG5cdFx0XHRcdC8vUGxheSB0cmFuc2l0aW9uIGFuaW1hdGlvbiFcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRhY3RpdmVTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnLTEwMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9KTtcblx0XHRcdFx0VHdlZW5MaXRlLnRvKCRhY3RpdmVTbGlkZSwgMCwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30pO1xuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KVxuXHRcdFx0fTtcblxuXHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XG5cdFx0fVxuXHR9XG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgd3JhcHBlckNsYXNzOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJ3cmFwcGVyQ2xhc3NcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cblx0XHRcdFx0PHNwYW4+R+G7jWkgPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIj4wOTMyIDA0NyAzMTM8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPiBob+G6t2MgZ+G7rWkgdGjDtG5nIHRpbiDEkeG7gyBuaOG6rW48L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkLDgU8gR0nDgTwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+dOG7qzwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkjhu40gdsOgIHTDqm4qXCIgbmctbW9kZWw9XCJ1c2VyTmFtZVwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlck5hbWVFcnJvclwiIG5nLWlmPVwidXNlck5hbWVFcnJvclwiPjwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLEkGnhu4duIHRob+G6oWkqXCIgbmctbW9kZWw9XCJ1c2VyUGhvbmVcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJ1c2VyUGhvbmVFcnJvclwiPjwvZGl2PlxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbWFpbCAoa2jDtG5nIGLhuq90IGJ14buZYylcIiBuZy1tb2RlbD1cInVzZXJFbWFpbFwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlckVtYWlsRXJyb3JcIiBuZy1pZj1cInVzZXJFbWFpbEVycm9yXCI+PC9kaXY+XG5cdFx0XG5cdFx0XHQ8IS0tPHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJO4buZaSBkdW5nIGNoaSB0aeG6v3RcIiBuZy1tb2RlbD1cInVzZXJOb3RlXCI+PC90ZXh0YXJlYT4tLT5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbW1hbmRzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic3VibWl0XCIgbmctYmluZD1cInN1Ym1pdFRleHQgfHwgJ0fhu6xJJ1wiPjwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cblx0XHQ8L2Zvcm0+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7IHNjb3BlW2ZpZWxkKydFcnJvciddID0gJyc7IHNjb3BlW2ZpZWxkXSA9ICcnO1x0fSk7XG5cblx0XHRcdHNjb3BlLnJlc2V0Rm9ybSA9ICgpID0+IHtcblx0XHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4gc2NvcGVbZmllbGRdID0gJycpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuc3VibWl0ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkKydFcnJvciddID0gJycpO1xuXG5cdFx0XHRcdGlmIChzY29wZS51c2VyTmFtZS5sZW5ndGggPCAxKSBzY29wZS51c2VyTmFtZUVycm9yID0gJ05o4bqtcCB0w6puJztcblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJQaG9uZS5sZW5ndGggPCA4KSBzY29wZS51c2VyUGhvbmVFcnJvciA9ICdT4buRIMSRaeG7h24gdGhv4bqhaSBjaMawYSDEkcO6bmcnO1xuXG5cdFx0XHRcdGlmIChzY29wZS51c2VyTmFtZUVycm9yIHx8IHNjb3BlLnVzZXJQaG9uZUVycm9yKSByZXR1cm47XG5cblx0XHRcdFx0dmFyIGxvY2FsVXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3VzZXJJbmZvXCIpKSxcblx0XHRcdFx0XHRmb3JtRGF0YSA9IHtcblx0XHRcdFx0XHQuLi5sb2NhbFVzZXJJbmZvLFxuXHRcdFx0XHRcdHNpdGU6IGxvY2F0aW9uLmhvc3QsXG5cdFx0XHRcdFx0ZnVsbE5hbWU6IHNjb3BlLnVzZXJOYW1lLFxuXHRcdFx0XHRcdG5hbWU6IHNjb3BlLnVzZXJOYW1lLFxuXHRcdFx0XHRcdHBob25lOiBzY29wZS51c2VyUGhvbmUsXG5cdFx0XHRcdFx0ZW1haWw6IHNjb3BlLnVzZXJFbWFpbFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxuXHRcdFx0XHRhZHhfYW5hbHl0aWMudHJhY2tpbmdHb2FsKCc1Nzg2NjQ2NjgnLCAxLCAnZXZlbnQnKTtcblx0XHRcdFx0Ly9TZW5kIGZvcm0gaW5mb3JtYXRpb24gdG8gQW50cyFcblx0XHRcdFx0YW50c191c2VySW5mb0xpc3RlbmVyKGZvcm1EYXRhLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXG5cdFx0XHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9jdXN0b21lci9pbnNlcnQvanNvbicsIHtcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdFx0XHRcdFx0c2NvcGUucmVzZXRGb3JtKCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZ29vZ2xlTG9naW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFudHNfZ29vZ2xlQXV0aENsaWNrKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2ZiQXV0aENsaWNrKCdsb2dpbicpO1xuXHRcdFx0fTtcblxuXHRcdFx0Z2xvYmFsLmdldF9pbmZvID0gZnVuY3Rpb24oX3VzZXJJbmZvKXtcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0XHQvLyB1c2VyIGluZm8gZ2V0IGhlcmVcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhfdXNlckluZm8sIFwiY2FsbGVkISFcIik7XG5cblx0XHRcdFx0XHQvLyBmaWxsIHVzZXJJbmZvIHRvIEZPUk0gxJHEg25nIGvDvVxuXHRcdFx0XHRcdHNjb3BlLnVzZXJOYW1lID0gX3VzZXJJbmZvLm5hbWU7XG5cdFx0XHRcdFx0c2NvcGUudXNlclBob25lID0gX3VzZXJJbmZvLnBob25lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJFbWFpbCA9IF91c2VySW5mby5lbWFpbCB8fCAnJztcblxuXHRcdFx0XHRcdC8vU3RvcmUgU29jaWFsIHByb2ZpbGVcblx0XHRcdFx0XHRpZiAoX3VzZXJJbmZvKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl91c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeShfdXNlckluZm8pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufV1cblxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJ107IiwiZXhwb3J0IGNsYXNzIGFwcGxpY2F0aW9uQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJHRpbWVvdXQnLCAnJGludGVydmFsJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbmdQcm9ncmVzc0ZhY3RvcnknXTtcblx0ZGV2ZWxvcG1lbnRNb2RlID0gZmFsc2U7XG5cdHJlYWR5ID0gZmFsc2U7XG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcblx0YnVyZ2VyQWN0aXZlID0gZmFsc2U7XG5cdHN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cblx0bGlua3MgPSBbe1xuXHRcdG5hbWU6ICd0cmFuZyBjaOG7pycsXG5cdFx0YWN0aXZlOiB0cnVlXG5cdH0sIHtcblx0XHRuYW1lOiAnduG7iyB0csOtIHbDoCB0aeG7h24gw61jaCcsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdHtuYW1lOiAnduG7iyB0csOtJ30sXG5cdFx0XHR7bmFtZTogJ3Rp4buHbiDDrWNoIGtodSB24buxYyd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBu4buZaSBraHUnfVxuXHRcdF1cblx0fSwge1xuXHRcdG5hbWU6ICfGsHUgxJHDo2kgdGhhbmggdG/DoW4nXG5cdH0sIHtcblx0XHRuYW1lOiAnbeG6t3QgYuG6sW5nJ1xuXHR9XTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaW50ZXJ2YWwsICR3aW5kb3csICRodHRwLCAgbmdQcm9ncmVzc0ZhY3RvcnkpIHtcblx0XHR0aGlzLnByb2dyZXNzID0gbmdQcm9ncmVzc0ZhY3RvcnkuY3JlYXRlSW5zdGFuY2UoKTtcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XG5cblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAoKSA9PiB7XG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9ICF0aGlzLnN1YnNjcmlwdGlvblBvcHVwO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcblx0XHR9KTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApOyB0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnJlYWR5ID0gdHJ1ZSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdHRoaXMubmFtZSA9IFwiTGlnaHQgUGFnZSFcIjtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9tZW51L2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHNpdGU6IGxvY2F0aW9uLmhvc3QgfVxuXHRcdH0pLnN1Y2Nlc3MoKGRhdGEpID0+IHtcblx0XHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvYmFubmVyL2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdmb290ZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5mb290ZXJzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoKSA9PiB7XG5cdFx0XHRsZXQgdG9wU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY3JvbGxDaGFuZ2UnLCB7dG9wOiB0b3BTY3JvbGx9KTtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXplQ2hhbmdlJywge1xuXHRcdFx0XHRoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcblx0XHRcdFx0d2lkdGg6ICQod2luZG93KS53aWR0aCgpXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIG1haW5Db250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCddO1xuXG5cdGZlYXR1cmVzID0gW107XG5cdHNsaWRlcnMgPSBbXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL3BhZ2UvZ2V0L2pzb24nLCB7IHBhcmFtczogeyBwYWdlX2lkOiBcIjFcIiB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgPSBkYXRhLnJlc3VsdHNbMF0uUGFnZTtcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9iYW5uZXIvZ2V0L2pzb24nLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Jhbm5lcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZlYXR1cmVzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL2Jhbm5lci9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnSG9tZVNsaWRlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNsaWRlcnMgPSBkYXRhLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gaXRlbS5Qb3N0O1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNsaWRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDcwO1xuXHRcdCRyb290U2NvcGUuJG9uKCdzaXplQ2hhbmdlJywgKGV2ZW50LCBzaXplKSA9PiB7XG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSBzaXplLmhlaWdodCA+IDU3MCA/IHNpemUuaGVpZ2h0IC0gNzAgOiA1MDA7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG59IiwiZXhwb3J0IGNsYXNzIHBhZ2VDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHApIHtcblx0XHRsZXQgcGFnZUlkID0gJHN0YXRlLnBhcmFtcy5pZDtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9wYWdlL2dldC9qc29uJywgeyBwYXJhbXM6IHsgcGFnZV9pZDogcGFnZUlkIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlUGFnZSA9IGRhdGEucmVzdWx0c1swXS5QYWdlO1xuXHRcdH0pO1xuXG5cdFx0aWYocGFnZUlkID09IDEpICRzdGF0ZS5nbygnaG9tZScpO1xuXHR9XG59IiwiZXhwb3J0IGNsYXNzIHNwbGFzaENvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJGludGVydmFsLCAkdGltZW91dCkge1xuXHRcdHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xuXG5cdFx0aWYgKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnJlc2V0Q29udERvd25JbnRlcnZhbCk7XG5cdH1cblxuXHRza2lwSW50cm8gKCkge1xuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xuXHR9XG59IiwiaW1wb3J0IHthcHBsaWNhdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyXCI7XG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gXCIuL3JvdXRlckNvbmZpZ1wiO1xuXG5pbXBvcnQge21haW5Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XG5pbXBvcnQge3BhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyXCI7XG5pbXBvcnQge3NwbGFzaENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlclwiO1xuXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IG5hdmlnYXRpb25MaW5rIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uTGlua1wiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnQvZm9vdGVyXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnQvc2lkZWJhclwiO1xuaW1wb3J0IHN1YnNjcmlwdGlvbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm1cIjtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9jb21wb25lbnQvcG9wdXBcIjtcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xuXG5sZXQgQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcGxpY2F0aW9uJywgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ25nUHJvZ3Jlc3MnLCAnaG1Ub3VjaEV2ZW50cycsICduZ1BhcmFsbGF4J10pXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxuXHQuY29udHJvbGxlcignYXBwQ3RybCcsIGFwcGxpY2F0aW9uQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXG5cdC5kaXJlY3RpdmUoJ3BvcHVwJywgcG9wdXApXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0TmF2aWdhdGlvbicsIG5hdmlnYXRpb24pXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2lkZWJhcicsIHNpZGViYXIpXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0Rm9vdGVyJywgZm9vdGVyKVxuXHQuZGlyZWN0aXZlKCdsaWdodFNsaWRlcicsIHNsaWRlcilcblx0LmRpcmVjdGl2ZSgnc3Vic2NyaXB0aW9uRm9ybScsIHN1YnNjcmlwdGlvbkZvcm0pXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xuXG5BcHAucnVuKCgpID0+IHtcblx0RmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KTtcbn0pO1xuXG5BcHAuZmlsdGVyKCd1bnNhZmUnLCBbXG5cdCckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0cmV0dXJuICRzY2UudHJ1c3RBc0h0bWwodmFsKTtcblx0XHR9O1xuXHR9XG5dKTtcblxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwbGljYXRpb24nXSk7IiwiaW1wb3J0IHtwcmVsb2FkUmVzb2x2ZXN9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcblxubGV0IHJvdXRlckNvbmZpZyA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLCAnJGh0dHBQcm92aWRlcicsXG5cdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpIHtcblx0XHQkc3RhdGVQcm92aWRlclxuXHRcdFx0LnN0YXRlKCdzcGxhc2gnLCBzcGxhc2hSb3V0ZSlcblx0XHRcdC5zdGF0ZSgnaG9tZScsIG1haW5Sb3V0ZSlcblx0XHRcdC5zdGF0ZSgncGFnZScsIHBhZ2VSb3V0ZSk7XG5cblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc3BsYXNoJyk7XG5cblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QgPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucHV0ID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBhdGNoID0ge307XG5cdH1cbl07XG5cbnZhciBzcGxhc2hSb3V0ZSA9IHtcblx0dXJsOiAnL3NwbGFzaCcsXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2VtcHR5TGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBzcGxhc2gnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3NwbGFzaC5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdzcGxhc2hDdHJsIGFzIHNwbGFzaEN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG52YXIgbWFpblJvdXRlID0ge1xuXHR1cmw6ICcvaG9tZScsXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QGhvbWUnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbWFpbi5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBwYWdlUm91dGUgPSB7XG5cdHVybDogJy9wYWdlLzppZCcsXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHBhZ2UnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcGFnZS5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdwYWdlQ3RybCBhcyBwYWdlQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlckNvbmZpZzsiLCJleHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XG5cdH1cblxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcblx0fVxuXG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+Jylcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcblx0XHR3ID0gby53aWR0aCgpO1xuXG5cdG8ucmVtb3ZlKCk7XG5cblx0cmV0dXJuIHc7XG59O1xuXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
