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
exports.default = ['$state', function ($state) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ready: '=',
			burgerActive: '=',
			links: '='
		},
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<div class="menu-heading" ng-click="toggleBurger()"></div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({id: child.page_id})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.page_id) {
					$state.go('page', { id: instance.page_id });
				} else if (instance.children[0] && instance.children[0].page_id) {
					$state.go('page', { id: instance.children[0].page_id });
				}

				scope.toggleBurger();
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
    sidebarBottomMargin = 670;

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
		template: '<div class="light-slider {{wrapperClass}}">\n\t\t\t<!--hm-swipeLeft="swipeLeft($event)" hm-swipeRight="swipeRight($event)">-->\n\t\t\t<div id="currentSlide" class="active-slide" ng-style="{\'background-image\': \'url(\'+activeSlide.image+\')\'}"></div>\n\t\t\t<div id="previousSlide" class="active-slide previous" ng-style="{\'background-image\': \'url(\'+previousSlide.image+\')\'}"></div>\n\n\t\t\t<div class="slide-navigation">\n\t\t\t\t<div class="navigate-next"></div>\n\t\t\t\t<div class="navigate-back"></div>\n\t\t\t</div>\n\n\t\t\t<div class="slide-positions">\n\t\t\t\t<div class="position-item" ng-class="{active: item.isActive}" ng-repeat="item in items" ng-click="navigate(item)"></div>\n\t\t\t</div>\n\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>',
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
				if (scope.previousSlide) scope.previousSlide.isActive = false;

				scope.activeIndex = nextIndex != undefined ? nextIndex : scope.activeIndex + 1;
				if (scope.activeIndex < 0) {
					scope.activeIndex = scope.items.length - 1;
				} else if (scope.activeIndex >= scope.items.length) {
					scope.activeIndex = 0;
				}

				scope.activeSlide = scope.items[scope.activeIndex];
				if (scope.activeSlide) scope.activeSlide.isActive = true;

				//Play transition animation!
				// TweenLite.fromTo($previousSlide, transitionTime, {ease: easeEffect, x: '0%'}, {ease: easeEffect, x: '100%'});
				// TweenLite.fromTo($activeSlide, transitionTime, {ease: easeEffect, x: '-100%'}, {ease: easeEffect, x: '0%'});
				TweenLite.to($activeSlide, 0, { ease: easeEffect, opacity: '1' });
				TweenLite.fromTo($previousSlide, transitionTime, { ease: easeEffect, opacity: '1' }, { ease: easeEffect, opacity: '0' });

				//Reset interval;
				if (global.sliderInterval) $interval.cancel(global.sliderInterval);
				global.sliderInterval = $interval(function () {
					return nextSlide();
				}, 10000);
			};

			scope.navigate = function (instance) {
				if (instance != scope.activeSlide) {
					nextSlide(scope.items.indexOf(instance));
				}
			};

			scope.swipeLeft = function (e) {
				return nextSlide(scope.activeIndex + 1);
			};
			scope.swipeRight = function (e) {
				return nextSlide(scope.activeIndex - 1);
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
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<div class="close-command icon-navigation-close" ng-click="closeForm()"></div>\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi </span> \n\t\t\t\t<span class="ultra strong">0932 047 313</span>\n\t\t\t\t<span> hoặc gửi thông tin để nhận</span> \n\t\t\t\t<span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> \n\t\t\t\t<span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*" ng-model="userName"/>\n\t\t\t<div class="error-row" ng-bind="userNameError" ng-if="userNameError"></div>\n\t\t\t<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>\n\t\t\t<div class="error-row" ng-bind="userPhoneError" ng-if="userPhoneError"></div>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>\n\t\t\t<div class="error-row" ng-bind="userEmailError" ng-if="userEmailError"></div>\n\t\t\n\t\t\t<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || \'GỬI\'"></button>\n\t\t\t</div>\n\n\t\t</form>',
		link: function link(scope, element, attrs) {
			fields.forEach(function (field) {
				scope[field + 'Error'] = '';scope[field] = '';
			});

			scope.resetForm = function () {
				fields.forEach(function (field) {
					return scope[field] = '';
				});
			};

			scope.closeForm = function () {
				scope.$parent.appCtrl.subscriptionPopup = false;
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
					scope.$parent.appCtrl.subscriptionPopup = false;
					scope.resetForm();
					scope.$parent.appCtrl.toggleSuccess();
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
exports.applicationController = undefined;

var _helper = require('../utils/helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var applicationController = exports.applicationController = function applicationController($rootScope, $scope, $state, $timeout, $interval, $window, $http, ngProgressFactory) {
	var _this = this;

	_classCallCheck(this, applicationController);

	this.developmentMode = false;
	this.ready = false;
	this.activePage = 'splash';
	this.burgerActive = false;
	this.subscriptionPopup = false;
	this.subscriptionSuccess = false;
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

	this.toggleSuccess = function () {
		_this.successGifImage = 'url(images/onoffonce.gif?' + (0, _helper.generateNumberUUID)(10) + ')';
		_this.subscriptionSuccess = true;
		$timeout(function () {
			return _this.subscriptionSuccess = false;
		}, 3000);
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

},{"../utils/helper":14}],9:[function(require,module,exports){
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zbGlkZXIuanMiLCJhcHAvY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHAvY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9tYWluQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9yb3V0ZXJDb25maWcuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTixvNkJBSk07QUF3Qk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUExQkssRUFBUDtBQTRCQSxDQTdCYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFFBQUQsRUFBVyxVQUFVLE1BQVYsRUFBa0I7QUFDM0MsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixVQUFPLEdBREQ7QUFFTixpQkFBYyxHQUZSO0FBR04sVUFBTztBQUhELEdBSEQ7QUFRTix5MUNBUk07QUFvQ04sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFS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LElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7S0FJQyxJQUFJLEVBQUUsS0FBRixFQUpMOztBQU1BLEdBQUUsTUFBRjs7QUFFQSxRQUFPLENBQVA7QUFDQSxDQVZEOztBQVlBLE9BQU8sSUFBUCxHQUFjLGtCQUFkIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjb2xcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPkxJw4pOIEjhu4Y8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2Pkxpw6puIGjhu4cgdGhhbSBxdWFuIGThu7Egw6FuIHbDoCBjaOG7jW4gbmjhu69uZyB24buLIHRyw60gxJHhurlwIG5o4bqldCBuZ2F5IHThu6sgYsOieSBnaeG7nSwgQ2jDum5nIHTDtGkgc+G6vSBo4buXIHRy4bujIG5oaeG7h3QgdMOsbmggY2hvIFF1w70gS2jDoWNoIDI0LzcuPC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tLS0+XG5cdFx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxuXHRcdFxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImZvb3Rlci1saW5rc1wiPi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+SE9NRTwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+UE9SVEZPTElPPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5TRVJWSUNFUzwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+VEVBTSBNRU1CRVI8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkNMSUVOVDwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+Q09OVEFDVDwvZGl2Pi0tPlxuXHRcdFx0XHQ8IS0tPC9kaXY+LS0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRzdGF0ZScsIGZ1bmN0aW9uICgkc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdHJlYWR5OiAnPScsXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9Jyxcblx0XHRcdGxpbmtzOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLW5hdmlnYXRpb24tbWVudVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIj7EkMSCTkcgS8OdPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1tZW51XCI+XG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgbmctYmluZD1cIml0ZW0ubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHtpZDogY2hpbGQucGFnZV9pZH0pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLnBhZ2VfaWQpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7aWQ6IGluc3RhbmNlLmNoaWxkcmVuWzBdLnBhZ2VfaWR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0aW5zdGFuY2U6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiXG5cdFx0XHRcdG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPlxuXHRcdFx0PHNwYW4gbmctYmluZD1cImluc3RhbmNlLm5hbWVcIj48L3NwYW4+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxuXHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHtpZDogbGluay5wYWdlX2lkfSlcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcblxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpbnN0YW5jZScsIGluc3RhbmNlID0+IHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLmNoaWxkcmVuICYmIGluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0aW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xuXHRcdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHNjb3BlLmxpbmtBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoJHJvb3RTY29wZS5hY3RpdmVQYWdlKSB7XG5cdFx0XHRcdFx0aWYgKGluc3RhbmNlLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gXy5maW5kV2hlcmUoaW5zdGFuY2UuY2hpbGRyZW4sIHtwYWdlX2lkOiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWR9KSAhPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UuaWQgPT09IGluc3RhbmNlLnBhZ2VfaWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgJiYgJHJvb3RTY29wZS5hY3RpdmVQYWdlLmlkID09PSBwYWdlSWQgPyAnYWN0aXZlJyA6ICcnO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuXHRcdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiY29uc3Qgc2lkZWJhclRvcE1hcmdpbiA9IDIwMCxcblx0c2lkZWJhckJvdHRvbU1hcmdpbiA9IDY3MDtcblxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRyb290U2NvcGUpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIG5nLXN0eWxlPVwie3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCcrdG9wUG9zaXRpb24rJ3B4KSd9XCI+XG5cdFx0XHQ8c3Vic2NyaXB0aW9uLWZvcm0gd3JhcHBlci1jbGFzcz1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSAwO1xuXHRcdFx0bGV0IGJhbm5lckhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcblxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgcG9zaXRpb24pID0+IHtcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0XHRsZXQgc2lkZWJhclRvdWNoQm90dG9tID0gKCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gc2lkZWJhckJvdHRvbU1hcmdpbik7XG5cdFx0XHRcdFx0Ly8gaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID4gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSBzaWRlYmFyQm90dG9tTWFyZ2luKSB7XG5cdFx0XHRcdFx0Ly8gXHRjb25zb2xlLmxvZyhcIm5lYXIgYm90dG9tIVwiKTtcblx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRpZiAoc2lkZWJhclRvdWNoQm90dG9tKSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gKHNpZGViYXJCb3R0b21NYXJnaW4gKyBiYW5uZXJIZWlnaHQpO1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJuZWFyIGJvdHRvbSFcIiwgc2NvcGUudG9wUG9zaXRpb24pO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAocG9zaXRpb24udG9wID4gMTAwKSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHBvc2l0aW9uLnRvcCAtIDMwO1xuXHRcdFx0XHRcdH0gIGVsc2Uge1xuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGludGVydmFsLCAkdGltZW91dCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBpdGVtczogJz0nIH0sXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsaWdodC1zbGlkZXIge3t3cmFwcGVyQ2xhc3N9fVwiPlxuXHRcdFx0PCEtLWhtLXN3aXBlTGVmdD1cInN3aXBlTGVmdCgkZXZlbnQpXCIgaG0tc3dpcGVSaWdodD1cInN3aXBlUmlnaHQoJGV2ZW50KVwiPi0tPlxuXHRcdFx0PGRpdiBpZD1cImN1cnJlbnRTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cInByZXZpb3VzU2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZSBwcmV2aW91c1wiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK3ByZXZpb3VzU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtbmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtbmV4dFwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtYmFja1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1wb3NpdGlvbnNcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWl0ZW1cIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uaXNBY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiIG5nLWNsaWNrPVwibmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0bGV0ICRhY3RpdmVTbGlkZSA9IGVsZW1lbnQuZmluZCgnI2N1cnJlbnRTbGlkZScpLCAkcHJldmlvdXNTbGlkZSA9IGVsZW1lbnQuZmluZCgnI3ByZXZpb3VzU2xpZGUnKSxcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XG5cblx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2l0ZW1zJywgKCkgPT4ge1xuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xuXG5cdFx0XHRsZXQgbmV4dFNsaWRlID0gZnVuY3Rpb24gKG5leHRJbmRleCkge1xuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXHRcdFx0XHRpZiAoc2NvcGUucHJldmlvdXNTbGlkZSkgc2NvcGUucHJldmlvdXNTbGlkZS5pc0FjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4ICE9IHVuZGVmaW5lZCA/IG5leHRJbmRleCA6IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZUluZGV4IDwgMCkge1xuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gc2NvcGUuaXRlbXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzY29wZS5hY3RpdmVJbmRleCA+PSBzY29wZS5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZVNsaWRlKSBzY29wZS5hY3RpdmVTbGlkZS5pc0FjdGl2ZSA9IHRydWU7XG5cblx0XHRcdFx0Ly9QbGF5IHRyYW5zaXRpb24gYW5pbWF0aW9uIVxuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzEwMCUnfSk7XG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJGFjdGl2ZVNsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICctMTAwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30pO1xuXHRcdFx0XHRUd2VlbkxpdGUudG8oJGFjdGl2ZVNsaWRlLCAwLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSk7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcwJ30pO1xuXG5cdFx0XHRcdC8vUmVzZXQgaW50ZXJ2YWw7XG5cdFx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcblx0XHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5uYXZpZ2F0ZSA9IChpbnN0YW5jZSkgPT4ge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UgIT0gc2NvcGUuYWN0aXZlU2xpZGUpIHtcblx0XHRcdFx0XHRuZXh0U2xpZGUoc2NvcGUuaXRlbXMuaW5kZXhPZihpbnN0YW5jZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5zd2lwZUxlZnQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4ICsgMSk7XG5cdFx0XHRzY29wZS5zd2lwZVJpZ2h0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCAtIDEpO1xuXG5cdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcblx0XHR9XG5cdH1cbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyB3cmFwcGVyQ2xhc3M6ICdAJywgc3VibWl0VGV4dDogJ0AnIH0sXG5cdFx0dGVtcGxhdGU6IGA8Zm9ybSBuZy1jbGFzcz1cIndyYXBwZXJDbGFzc1wiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xvc2UtY29tbWFuZCBpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBuZy1jbGljaz1cImNsb3NlRm9ybSgpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxuXHRcdFx0XHQ8c3Bhbj5H4buNaSA8L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiPjA5MzIgMDQ3IDMxMzwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+IGhv4bq3YyBn4butaSB0aMO0bmcgdGluIMSR4buDIG5o4bqtbjwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+QsOBTyBHScOBPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj504burPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5DSOG7piDEkOG6plUgVMavPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSOG7jSB2w6AgdMOqbipcIiBuZy1tb2RlbD1cInVzZXJOYW1lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyTmFtZUVycm9yXCIgbmctaWY9XCJ1c2VyTmFtZUVycm9yXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIsSQaeG7h24gdGhv4bqhaSpcIiBuZy1tb2RlbD1cInVzZXJQaG9uZVwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlclBob25lRXJyb3JcIiBuZy1pZj1cInVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiIG5nLW1vZGVsPVwidXNlckVtYWlsXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyRW1haWxFcnJvclwiIG5nLWlmPVwidXNlckVtYWlsRXJyb3JcIj48L2Rpdj5cblx0XHRcblx0XHRcdDwhLS08dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIk7hu5lpIGR1bmcgY2hpIHRp4bq/dFwiIG5nLW1vZGVsPVwidXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZmFjZWJvb2tcIiBuZy1jbGljaz1cImZhY2Vib29rTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAnR+G7rEknXCI+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZm9ybT5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHsgc2NvcGVbZmllbGQrJ0Vycm9yJ10gPSAnJzsgc2NvcGVbZmllbGRdID0gJyc7XHR9KTtcblxuXHRcdFx0c2NvcGUucmVzZXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBzY29wZVtmaWVsZF0gPSAnJyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5jbG9zZUZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuc3VibWl0ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkKydFcnJvciddID0gJycpO1xuXG5cdFx0XHRcdGlmIChzY29wZS51c2VyTmFtZS5sZW5ndGggPCAxKSBzY29wZS51c2VyTmFtZUVycm9yID0gJ05o4bqtcCB0w6puJztcblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJQaG9uZS5sZW5ndGggPCA4KSBzY29wZS51c2VyUGhvbmVFcnJvciA9ICdT4buRIMSRaeG7h24gdGhv4bqhaSBjaMawYSDEkcO6bmcnO1xuXG5cdFx0XHRcdGlmIChzY29wZS51c2VyTmFtZUVycm9yIHx8IHNjb3BlLnVzZXJQaG9uZUVycm9yKSByZXR1cm47XG5cblx0XHRcdFx0dmFyIGxvY2FsVXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3VzZXJJbmZvXCIpKSxcblx0XHRcdFx0XHRmb3JtRGF0YSA9IHtcblx0XHRcdFx0XHQuLi5sb2NhbFVzZXJJbmZvLFxuXHRcdFx0XHRcdHNpdGU6IGxvY2F0aW9uLmhvc3QsXG5cdFx0XHRcdFx0ZnVsbE5hbWU6IHNjb3BlLnVzZXJOYW1lLFxuXHRcdFx0XHRcdG5hbWU6IHNjb3BlLnVzZXJOYW1lLFxuXHRcdFx0XHRcdHBob25lOiBzY29wZS51c2VyUGhvbmUsXG5cdFx0XHRcdFx0ZW1haWw6IHNjb3BlLnVzZXJFbWFpbFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxuXHRcdFx0XHRhZHhfYW5hbHl0aWMudHJhY2tpbmdHb2FsKCc1Nzg2NjQ2NjgnLCAxLCAnZXZlbnQnKTtcblx0XHRcdFx0Ly9TZW5kIGZvcm0gaW5mb3JtYXRpb24gdG8gQW50cyFcblx0XHRcdFx0YW50c191c2VySW5mb0xpc3RlbmVyKGZvcm1EYXRhLCBmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXG5cdFx0XHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9jdXN0b21lci9pbnNlcnQvanNvbicsIHtcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdFx0XHRcdFx0c2NvcGUucmVzZXRGb3JtKCk7XG5cdFx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnRvZ2dsZVN1Y2Nlc3MoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5nb29nbGVMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19nb29nbGVBdXRoQ2xpY2soKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmZhY2Vib29rTG9naW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFudHNfZmJBdXRoQ2xpY2soJ2xvZ2luJyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRnbG9iYWwuZ2V0X2luZm8gPSBmdW5jdGlvbihfdXNlckluZm8pe1xuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIHVzZXIgaW5mbyBnZXQgaGVyZVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKF91c2VySW5mbywgXCJjYWxsZWQhIVwiKTtcblxuXHRcdFx0XHRcdC8vIGZpbGwgdXNlckluZm8gdG8gRk9STSDEkcSDbmcga8O9XG5cdFx0XHRcdFx0c2NvcGUudXNlck5hbWUgPSBfdXNlckluZm8ubmFtZTtcblx0XHRcdFx0XHRzY29wZS51c2VyUGhvbmUgPSBfdXNlckluZm8ucGhvbmU7XG5cdFx0XHRcdFx0c2NvcGUudXNlckVtYWlsID0gX3VzZXJJbmZvLmVtYWlsIHx8ICcnO1xuXG5cdFx0XHRcdFx0Ly9TdG9yZSBTb2NpYWwgcHJvZmlsZVxuXHRcdFx0XHRcdGlmIChfdXNlckluZm8pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3VzZXJJbmZvXCIsIEpTT04uc3RyaW5naWZ5KF91c2VySW5mbykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XVxuXG52YXIgZmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnXTsiLCJpbXBvcnQgeyBnZW5lcmF0ZU51bWJlclVVSUQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckdGltZW91dCcsICckaW50ZXJ2YWwnLCAnJHdpbmRvdycsICckaHR0cCcsICduZ1Byb2dyZXNzRmFjdG9yeSddO1xuXHRkZXZlbG9wbWVudE1vZGUgPSBmYWxzZTtcblx0cmVhZHkgPSBmYWxzZTtcblx0YWN0aXZlUGFnZSA9ICdzcGxhc2gnO1xuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcblx0c3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcblx0c3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xuXG5cdGxpbmtzID0gW3tcblx0XHRuYW1lOiAndHJhbmcgY2jhu6cnLFxuXHRcdGFjdGl2ZTogdHJ1ZVxuXHR9LCB7XG5cdFx0bmFtZTogJ3bhu4sgdHLDrSB2w6AgdGnhu4duIMOtY2gnLFxuXHRcdGNoaWxkcmVuOiBbXG5cdFx0XHR7bmFtZTogJ3bhu4sgdHLDrSd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBraHUgduG7sWMnfSxcblx0XHRcdHtuYW1lOiAndGnhu4duIMOtY2ggbuG7mWkga2h1J31cblx0XHRdXG5cdH0sIHtcblx0XHRuYW1lOiAnxrB1IMSRw6NpIHRoYW5oIHRvw6FuJ1xuXHR9LCB7XG5cdFx0bmFtZTogJ23hurd0IGLhurFuZydcblx0fV07XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5KSB7XG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XG5cdFx0dGhpcy5wcm9ncmVzcy5zZXRDb2xvcignI0ZBODMyMicpO1xuXG5cdFx0Z2xvYmFsLnRvZ2dsZVBvcHVwID0gKCkgPT4ge1xuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR0aGlzLnRvZ2dsZVN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlLCAzMDAwKTtcblx0XHR9O1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5wcm9ncmVzcy5zdGFydCgpO1xuXHRcdH0pO1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpID0+IHtcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcblx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMucmVhZHkgPSB0cnVlLCAyNTApO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5uYW1lID0gXCJMaWdodCBQYWdlIVwiO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL21lbnUvZ2V0L2pzb24nLCB7XG5cdFx0XHRwYXJhbXM6IHsgc2l0ZTogbG9jYXRpb24uaG9zdCB9XG5cdFx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5saW5rcyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9iYW5uZXIvZ2V0L2pzb24nLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Zvb3RlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZvb3RlcnMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbENoYW5nZScsIHt0b3A6IHRvcFNjcm9sbH0pO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpemVDaGFuZ2UnLCB7XG5cdFx0XHRcdGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpLFxuXHRcdFx0XHR3aWR0aDogJCh3aW5kb3cpLndpZHRoKClcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJleHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJ107XG5cblx0ZmVhdHVyZXMgPSBbXTtcblx0c2xpZGVycyA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHApIHtcblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvcGFnZS9nZXQvanNvbicsIHsgcGFyYW1zOiB7IHBhZ2VfaWQ6IFwiMVwiIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlUGFnZSA9IGRhdGEucmVzdWx0c1swXS5QYWdlO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL2Jhbm5lci9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnYmFubmVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuZmVhdHVyZXMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvYmFubmVyL2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdIb21lU2xpZGVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdHJldHVybiBpdGVtLlBvc3Q7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNzA7XG5cdFx0JHJvb3RTY29wZS4kb24oJ3NpemVDaGFuZ2UnLCAoZXZlbnQsIHNpemUpID0+IHtcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9IHNpemUuaGVpZ2h0ID4gNTcwID8gc2l6ZS5oZWlnaHQgLSA3MCA6IDUwMDtcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cbn0iLCJleHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJ107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdGxldCBwYWdlSWQgPSAkc3RhdGUucGFyYW1zLmlkO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL3BhZ2UvZ2V0L2pzb24nLCB7IHBhcmFtczogeyBwYWdlX2lkOiBwYWdlSWQgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVQYWdlID0gZGF0YS5yZXN1bHRzWzBdLlBhZ2U7XG5cdFx0fSk7XG5cblx0XHRpZihwYWdlSWQgPT0gMSkgJHN0YXRlLmdvKCdob21lJyk7XG5cdH1cbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0J107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdFx0dGhpcy4kc3RhdGUgPSAkc3RhdGU7XG5cdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5za2lwSW50cm8oKSwgMCk7XG5cblx0XHRpZiAoZ2xvYmFsLnJlc2V0Q29udERvd25JbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKTtcblx0fVxuXG5cdHNraXBJbnRybyAoKSB7XG5cdFx0dGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdob21lJyk7XG5cdH1cbn0iLCJpbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSBcIi4vcm91dGVyQ29uZmlnXCI7XG5cbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCB7cGFnZUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcGFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7c3BsYXNoQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyXCI7XG5cbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgbmF2aWdhdGlvbkxpbmsgZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25MaW5rXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudC9mb290ZXJcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudC9zaWRlYmFyXCI7XG5pbXBvcnQgc3Vic2NyaXB0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybVwiO1xuaW1wb3J0IHBvcHVwIGZyb20gXCIuL2NvbXBvbmVudC9wb3B1cFwiO1xuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnQvc2xpZGVyXCI7XG5cbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnbmdQcm9ncmVzcycsICdobVRvdWNoRXZlbnRzJywgJ25nUGFyYWxsYXgnXSlcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3BhZ2VDdHJsJywgcGFnZUNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcblx0LmRpcmVjdGl2ZSgncG9wdXAnLCBwb3B1cClcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTaWRlYmFyJywgc2lkZWJhcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRGb290ZXInLCBmb290ZXIpXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2xpZGVyJywgc2xpZGVyKVxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XG5cbkFwcC5ydW4oKCkgPT4ge1xuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcblx0JyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xuXHRcdH07XG5cdH1cbl0pO1xuXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJyxcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKVxuXHRcdFx0LnN0YXRlKCdwYWdlJywgcGFnZVJvdXRlKTtcblxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcblxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucGF0Y2ggPSB7fTtcblx0fVxuXTtcblxudmFyIHNwbGFzaFJvdXRlID0ge1xuXHR1cmw6ICcvc3BsYXNoJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBtYWluUm91dGUgPSB7XG5cdHVybDogJy9ob21lJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIHBhZ2VSb3V0ZSA9IHtcblx0dXJsOiAnL3BhZ2UvOmlkJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyIsImV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByZWRpY2F0ZSkpIHtcblx0XHRzZWFyY2hLZXkgPSBrZXk7XG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcblx0fVxuXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcblx0XHRpZiAoaW5zdGFuY2Vbc2VhcmNoS2V5XSA9PT0gc2VhcmNoVmFsdWUpIHJldHVybiBpbnN0YW5jZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG5leHBvcnQgdmFyIHByZWxvYWRSZXNvbHZlcyA9IHtcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XG5cdH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlclVVSUQgKGxlbmd0aCkge1xuXHR2YXIgcmVzdWx0ID0gXCJcIjtcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0cmVzdWx0ICs9IFswLDEsMiwzLDQsNSw2LDcsOCw5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJhbmdlICh2YWx1ZSwgbWluLCBtYXgpIHtcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGZvbnQpIHtcblx0dmFyIGYgPSBmb250IHx8ICcxMnB4IGFyaWFsJyxcblx0XHRvID0gJCgnPGRpdj4nICsgdGhpcyArICc8L2Rpdj4nKVxuXHRcdFx0LmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ2Zsb2F0JzogJ2xlZnQnLCAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJywgJ2ZvbnQnOiBmfSlcblx0XHRcdC5hcHBlbmRUbygkKCdib2R5JykpLFxuXHRcdHcgPSBvLndpZHRoKCk7XG5cblx0by5yZW1vdmUoKTtcblxuXHRyZXR1cm4gdztcbn07XG5cbmdsb2JhbC51dWlkID0gZ2VuZXJhdGVOdW1iZXJVVUlEOyJdfQ==
