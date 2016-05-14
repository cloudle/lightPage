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
		console.log(data.results);
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zbGlkZXIuanMiLCJhcHAvY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHAvY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9tYWluQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9yb3V0ZXJDb25maWcuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTixvNkJBSk07QUF3Qk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUExQkssRUFBUDtBQTRCQSxDQTdCYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFlBQVk7QUFDM0IsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixVQUFPLEdBREQ7QUFFTixpQkFBYyxHQUZSO0FBR04sVUFBTztBQUhELEdBSEQ7QUFRTixxekNBUk07QUFvQ04sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQTJCO0FB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QWI7QUFDQSxNQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxNQUFuQixFQUEyQixHQUEzQixFQUFnQztBQUMvQixZQUFVLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsQ0FBekIsQ0FBdEIsQ0FBVjtBQUNBOztBQUVELFFBQU8sTUFBUDtBQUNBOztBQUVNLFNBQVMsU0FBVCxDQUFvQixLQUFwQixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQztBQUMzQyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxRQUFPLEtBQVA7QUFDQTs7QUFFRCxPQUFPLFNBQVAsQ0FBaUIsS0FBakIsR0FBeUIsVUFBUyxJQUFULEVBQWU7QUFDdkMsS0FBSSxJQUFJLFFBQVEsWUFBaEI7S0FDQyxJQUFJLEVBQUUsVUFBVSxJQUFWLEdBQWlCLFFBQW5CLEVBQ0YsR0FERSxDQUNFLEVBQUMsWUFBWSxVQUFiLEVBQXlCLFNBQVMsTUFBbEMsRUFBMEMsZUFBZSxRQUF6RCxFQUFtRSxjQUFjLFFBQWpGLEVBQTJGLFFBQVEsQ0FBbkcsRUFERixFQUVGLFFBRkUsQ0FFTyxFQUFFLE1BQUYsQ0FGUCxDQURMO0tBSUMsSUFBSSxFQUFFLEtBQUYsRUFKTDs7QUFNQSxHQUFFLE1BQUY7O0FBRUEsUUFBTyxDQUFQO0FBQ0EsQ0FWRDs7QUFZQSxPQUFPLElBQVAsR0FBYyxrQkFBZCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgY29sdW1uczogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbFwiIG5nLXJlcGVhdD1cImNvbHVtbiBpbiBjb2x1bW5zXCIgbmctYmluZC1odG1sPVwiY29sdW1uLlBvc3QuY29udGVudCB8IHVuc2FmZVwiPjwvZGl2PlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiY29sXCI+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5MScOKTiBI4buGPC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tPGRpdj5MacOqbiBo4buHIHRoYW0gcXVhbiBk4buxIMOhbiB2w6AgY2jhu41uIG5o4buvbmcgduG7iyB0csOtIMSR4bq5cCBuaOG6pXQgbmdheSB04burIGLDonkgZ2nhu50sIENow7puZyB0w7RpIHPhur0gaOG7lyB0cuG7oyBuaGnhu4d0IHTDrG5oIGNobyBRdcO9IEtow6FjaCAyNC83LjwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PCEtLS0tPlxuXHRcdFx0XHRcdDwhLS08L2Rpdj4tLT5cblx0XHRcblx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJmb290ZXItbGlua3NcIj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkhPTUU8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlBPUlRGT0xJTzwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+U0VSVklDRVM8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlRFQU0gTUVNQkVSPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5DTElFTlQ8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkNPTlRBQ1Q8L2Rpdj4tLT5cblx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdHJlYWR5OiAnPScsXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9Jyxcblx0XHRcdGxpbmtzOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLW5hdmlnYXRpb24tbWVudVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIj7EkMSCTkcgS8OdPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1tZW51XCI+XG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgbmctYmluZD1cIml0ZW0ubmFtZVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnUgc3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImNoaWxkLm5hbWVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7aWQ6IGNoaWxkLnBhZ2VfaWR9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0aW5zdGFuY2U6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiXG5cdFx0XHRcdG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPlxuXHRcdFx0PHNwYW4gbmctYmluZD1cImluc3RhbmNlLm5hbWVcIj48L3NwYW4+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxuXHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHtpZDogbGluay5wYWdlX2lkfSlcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcblxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpbnN0YW5jZScsIGluc3RhbmNlID0+IHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLmNoaWxkcmVuICYmIGluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0aW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xuXHRcdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNjb3BlLmxpbmtBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoJHJvb3RTY29wZS5hY3RpdmVQYWdlKSB7XG5cdFx0XHRcdFx0aWYgKGluc3RhbmNlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXy5maW5kV2hlcmUoaW5zdGFuY2UuY2hpbGRyZW4sIHtwYWdlX2lkOiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWR9KSAhPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWQgPT09IGluc3RhbmNlLnBhZ2VfaWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgJiYgJHJvb3RTY29wZS5hY3RpdmVQYWdlLmlkID09PSBwYWdlSWQgPyAnYWN0aXZlJyA6ICcnO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuXHRcdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiY29uc3Qgc2lkZWJhclRvcE1hcmdpbiA9IDIwMCxcblx0c2lkZWJhckJvdHRvbU1hcmdpbiA9IDU3MDtcblxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIG5nLXN0eWxlPVwie3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCcrdG9wUG9zaXRpb24rJ3B4KSd9XCI+XG5cdFx0XHQ8c3Vic2NyaXB0aW9uLWZvcm0gd3JhcHBlci1jbGFzcz1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSAwO1xuXHRcdFx0bGV0IGJhbm5lckhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcblxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgcG9zaXRpb24pID0+IHtcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0XHRsZXQgc2lkZWJhclRvdWNoQm90dG9tID0gKCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gc2lkZWJhckJvdHRvbU1hcmdpbik7XG5cdFx0XHRcdFx0Ly8gaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID4gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSBzaWRlYmFyQm90dG9tTWFyZ2luKSB7XG5cdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcIm5lYXIgYm90dG9tIVwiKTtcblx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRpZiAoc2lkZWJhclRvdWNoQm90dG9tKSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gKHNpZGViYXJCb3R0b21NYXJnaW4gKyBiYW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJuZWFyIGJvdHRvbSFcIiwgc2NvcGUudG9wUG9zaXRpb24pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG9zaXRpb24udG9wID4gMTAwKSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHBvc2l0aW9uLnRvcCAtIDMwO1xuXHRcdFx0XHRcdH0gIGVsc2Uge1xuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGludGVydmFsLCAkdGltZW91dCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBpdGVtczogJz0nIH0sXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsaWdodC1zbGlkZXIge3t3cmFwcGVyQ2xhc3N9fVwiPlx0XG5cdFx0XHQ8ZGl2IGlkPVwiY3VycmVudFNsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGVcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJythY3RpdmVTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cdFxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24taXRlbVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0bGV0ICRhY3RpdmVTbGlkZSA9IGVsZW1lbnQuZmluZCgnI2N1cnJlbnRTbGlkZScpLCAkcHJldmlvdXNTbGlkZSA9IGVsZW1lbnQuZmluZCgnI3ByZXZpb3VzU2xpZGUnKSxcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XG5cblx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2l0ZW1zJywgKCkgPT4ge1xuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xuXG5cdFx0XHRsZXQgbmV4dFNsaWRlID0gZnVuY3Rpb24gKG5leHRJbmRleCkge1xuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4IHx8IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZUluZGV4ID49IHNjb3BlLml0ZW1zLmxlbmd0aCB8fCBzY29wZS5hY3RpdmVJbmRleCA8IDApIHtcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMTAwJSd9KTtcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkYWN0aXZlU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJy0xMDAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSk7XG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcblx0XHRcdFx0VHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzAnfSlcblx0XHRcdH07XG5cblx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xuXHRcdH1cblx0fVxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IHdyYXBwZXJDbGFzczogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcblx0XHR0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwid3JhcHBlckNsYXNzXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdDxzcGFuPkfhu41pIDwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCI+MDkzMiAwNDcgMzEzPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4gaG/hurdjIGfhu61pIHRow7RuZyB0aW4gxJHhu4Mgbmjhuq1uPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJI4buNIHbDoCB0w6puKlwiIG5nLW1vZGVsPVwidXNlck5hbWVcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cInVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwixJBp4buHbiB0aG/huqFpKlwiIG5nLW1vZGVsPVwidXNlclBob25lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwidXNlclBob25lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIgbmctbW9kZWw9XCJ1c2VyRW1haWxcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJ1c2VyRW1haWxFcnJvclwiPjwvZGl2PlxuXHRcdFxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiTuG7mWkgZHVuZyBjaGkgdGnhur90XCIgbmctbW9kZWw9XCJ1c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGdvb2dsZVwiIG5nLWNsaWNrPVwiZ29vZ2xlTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICdH4busSSdcIj48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9mb3JtPmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4geyBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnOyBzY29wZVtmaWVsZF0gPSAnJztcdH0pO1xuXG5cdFx0XHRzY29wZS5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkXSA9ICcnKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnN1Ym1pdCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnKTtcblxuXHRcdFx0XHRpZiAoc2NvcGUudXNlck5hbWUubGVuZ3RoIDwgMSkgc2NvcGUudXNlck5hbWVFcnJvciA9ICdOaOG6rXAgdMOqbic7XG5cdFx0XHRcdGlmIChzY29wZS51c2VyUGhvbmUubGVuZ3RoIDwgOCkgc2NvcGUudXNlclBob25lRXJyb3IgPSAnU+G7kSDEkWnhu4duIHRob+G6oWkgY2jGsGEgxJHDum5nJztcblxuXHRcdFx0XHRpZiAoc2NvcGUudXNlck5hbWVFcnJvciB8fCBzY29wZS51c2VyUGhvbmVFcnJvcikgcmV0dXJuO1xuXG5cdFx0XHRcdHZhciBsb2NhbFVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl91c2VySW5mb1wiKSksXG5cdFx0XHRcdFx0Zm9ybURhdGEgPSB7XG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcblx0XHRcdFx0XHRzaXRlOiBsb2NhdGlvbi5ob3N0LFxuXHRcdFx0XHRcdGZ1bGxOYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRuYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRwaG9uZTogc2NvcGUudXNlclBob25lLFxuXHRcdFx0XHRcdGVtYWlsOiBzY29wZS51c2VyRW1haWxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvL0ZpcmUgQW50cyB0cmFja2luZ0dvYWwgaG9vayFcblx0XHRcdFx0YWR4X2FuYWx5dGljLnRyYWNraW5nR29hbCgnNTc4NjY0NjY4JywgMSwgJ2V2ZW50Jyk7XG5cdFx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXG5cdFx0XHRcdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xuXHRcdFx0XHQvL1NlbmQgZm9ybSB0byBUd2luJ3Mgc2VydmVyIVxuXHRcdFx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvY3VzdG9tZXIvaW5zZXJ0L2pzb24nLCB7XG5cdFx0XHRcdFx0cGFyYW1zOiBmb3JtRGF0YVxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xuXHRcdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdFx0XHRcdHNjb3BlLnJlc2V0Rm9ybSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcblx0XHRcdH07XG5cblx0XHRcdGdsb2JhbC5nZXRfaW5mbyA9IGZ1bmN0aW9uKF91c2VySW5mbyl7XG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3VzZXJJbmZvLCBcImNhbGxlZCEhXCIpO1xuXG5cdFx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cblx0XHRcdFx0XHRzY29wZS51c2VyTmFtZSA9IF91c2VySW5mby5uYW1lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZTtcblx0XHRcdFx0XHRzY29wZS51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XG5cblx0XHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXG5cdFx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dXG5cbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5J107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IGZhbHNlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXG5cdGxpbmtzID0gW3tcblx0XHRuYW1lOiAndHJhbmcgY2jhu6cnLFxuXHRcdGFjdGl2ZTogdHJ1ZVxuXHR9LCB7XG5cdFx0bmFtZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHR7bmFtZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBraHUgduG7sWMnfSxcblx0XHRcdHtuYW1lOiAndGnhu4duIMOtY2ggbuG7mWkga2h1J31cblx0XHRdXG5cdH0sIHtcblx0XHRuYW1lOiAnxrB1IMSRw6NpIHRoYW5oIHRvw6FuJ1xuXHR9LCB7XG5cdFx0bmFtZTogJ23hurd0IGLhurFuZydcblx0fV07XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5KSB7XG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XG5cdFx0dGhpcy5wcm9ncmVzcy5zZXRDb2xvcignI0ZBODMyMicpO1xuXG5cdFx0Z2xvYmFsLnRvZ2dsZVBvcHVwID0gKCkgPT4ge1xuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XG5cdFx0fSk7XG5cblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xuXHRcdFx0dGhpcy5hY3RpdmVQYWdlID0gdG9TdGF0ZS5uYW1lO1x0dGhpcy5yZWFkeSA9IGZhbHNlO1xuXHRcdFx0JHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5yZWFkeSA9IHRydWUsIDI1MCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm5hbWUgPSBcIkxpZ2h0IFBhZ2UhXCI7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvbWVudS9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyBzaXRlOiBsb2NhdGlvbi5ob3N0IH1cblx0XHR9KS5zdWNjZXNzKChkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmxpbmtzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL2Jhbm5lci9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnZm9vdGVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuZm9vdGVycyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xuXHRcdFx0bGV0IHRvcFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsQ2hhbmdlJywge3RvcDogdG9wU2Nyb2xsfSk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykucmVzaXplKCgpID0+IHtcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l6ZUNoYW5nZScsIHtcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHRcdHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRmZWF0dXJlcyA9IFtdO1xuXHRzbGlkZXJzID0gW107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9wYWdlL2dldC9qc29uJywgeyBwYXJhbXM6IHsgcGFnZV9pZDogXCIxXCIgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVQYWdlID0gZGF0YS5yZXN1bHRzWzBdLlBhZ2U7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvYmFubmVyL2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdiYW5uZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coZGF0YS5yZXN1bHRzKTtcblx0XHRcdHRoaXMuZmVhdHVyZXMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvYmFubmVyL2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdIb21lU2xpZGVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdHJldHVybiBpdGVtLlBvc3Q7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNzA7XG5cdFx0JHJvb3RTY29wZS4kb24oJ3NpemVDaGFuZ2UnLCAoZXZlbnQsIHNpemUpID0+IHtcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9IHNpemUuaGVpZ2h0ID4gNTcwID8gc2l6ZS5oZWlnaHQgLSA3MCA6IDUwMDtcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cbn0iLCJleHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJ107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdGxldCBwYWdlSWQgPSAkc3RhdGUucGFyYW1zLmlkO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL3BhZ2UvZ2V0L2pzb24nLCB7IHBhcmFtczogeyBwYWdlX2lkOiBwYWdlSWQgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVQYWdlID0gZGF0YS5yZXN1bHRzWzBdLlBhZ2U7XG5cdFx0fSk7XG5cblx0XHRpZihwYWdlSWQgPT0gMSkgJHN0YXRlLmdvKCdob21lJyk7XG5cdH1cbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0J107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdFx0dGhpcy4kc3RhdGUgPSAkc3RhdGU7XG5cdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5za2lwSW50cm8oKSwgMCk7XG5cblx0XHRpZiAoZ2xvYmFsLnJlc2V0Q29udERvd25JbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKTtcblx0fVxuXG5cdHNraXBJbnRybyAoKSB7XG5cdFx0dGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdob21lJyk7XG5cdH1cbn0iLCJpbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSBcIi4vcm91dGVyQ29uZmlnXCI7XG5cbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCB7cGFnZUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcGFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7c3BsYXNoQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyXCI7XG5cbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgbmF2aWdhdGlvbkxpbmsgZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25MaW5rXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudC9mb290ZXJcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudC9zaWRlYmFyXCI7XG5pbXBvcnQgc3Vic2NyaXB0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybVwiO1xuaW1wb3J0IHBvcHVwIGZyb20gXCIuL2NvbXBvbmVudC9wb3B1cFwiO1xuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnQvc2xpZGVyXCI7XG5cbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnbmdQcm9ncmVzcycsICdobVRvdWNoRXZlbnRzJywgJ25nUGFyYWxsYXgnXSlcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3BhZ2VDdHJsJywgcGFnZUNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcblx0LmRpcmVjdGl2ZSgncG9wdXAnLCBwb3B1cClcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTaWRlYmFyJywgc2lkZWJhcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRGb290ZXInLCBmb290ZXIpXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2xpZGVyJywgc2xpZGVyKVxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XG5cbkFwcC5ydW4oKCkgPT4ge1xuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcblx0JyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xuXHRcdH07XG5cdH1cbl0pO1xuXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJyxcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKVxuXHRcdFx0LnN0YXRlKCdwYWdlJywgcGFnZVJvdXRlKTtcblxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcblxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucGF0Y2ggPSB7fTtcblx0fVxuXTtcblxudmFyIHNwbGFzaFJvdXRlID0ge1xuXHR1cmw6ICcvc3BsYXNoJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBtYWluUm91dGUgPSB7XG5cdHVybDogJy9ob21lJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIHBhZ2VSb3V0ZSA9IHtcblx0dXJsOiAnL3BhZ2UvOmlkJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyIsImV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByZWRpY2F0ZSkpIHtcblx0XHRzZWFyY2hLZXkgPSBrZXk7XG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcblx0fVxuXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcblx0XHRpZiAoaW5zdGFuY2Vbc2VhcmNoS2V5XSA9PT0gc2VhcmNoVmFsdWUpIHJldHVybiBpbnN0YW5jZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5leHBvcnQgdmFyIHByZWxvYWRSZXNvbHZlcyA9IHtcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlclVVSUQgKGxlbmd0aCkge1xuXHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0cmVzdWx0ICs9IFswLDEsMiwzLDQsNSw2LDcsOCw5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJhbmdlICh2YWx1ZSwgbWluLCBtYXgpIHtcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGZvbnQpIHtcblx0dmFyIGYgPSBmb250IHx8ICcxMnB4IGFyaWFsJyxcblx0XHRvID0gJCgnPGRpdj4nICsgdGhpcyArICc8L2Rpdj4nKVxuXHRcdFx0LmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ2Zsb2F0JzogJ2xlZnQnLCAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJywgJ2ZvbnQnOiBmfSlcblx0XHRcdC5hcHBlbmRUbygkKCdib2R5JykpLFxuXHRcdHcgPSBvLndpZHRoKCk7XG5cblx0by5yZW1vdmUoKTtcblxuXHRyZXR1cm4gdztcbn07XG5cbmdsb2JhbC51dWlkID0gZ2VuZXJhdGVOdW1iZXJVVUlEOyJdfQ==
