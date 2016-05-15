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
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<!--<div class="menu-heading" ng-click="toggleBurger()"></div>-->\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({id: child.page_id})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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
		template: '<div class="light-slider {{wrapperClass}}"\n\t\t\tng-swipe-left="swipeLeft($event)" ng-swipe-right="swipeRight($event)">\n\t\t\t<div id="currentSlide" class="active-slide" ng-style="{\'background-image\': \'url(\'+activeSlide.image+\')\'}"></div>\n\t\t\t<div id="previousSlide" class="active-slide previous" ng-style="{\'background-image\': \'url(\'+previousSlide.image+\')\'}"></div>\n\n\t\t\t<div class="slide-navigation">\n\t\t\t\t<div class="navigate-next"></div>\n\t\t\t\t<div class="navigate-back"></div>\n\t\t\t</div>\n\n\t\t\t<div class="slide-positions">\n\t\t\t\t<div class="position-item" ng-class="{active: item.isActive}" ng-repeat="item in items" ng-click="navigate(item)"></div>\n\t\t\t</div>\n\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>',
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
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<!--<div class="close-command icon-navigation-close" ng-click="closeForm()"></div>-->\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi </span> \n\t\t\t\t<span class="ultra strong">0932 047 313</span>\n\t\t\t\t<span> hoặc gửi thông tin để nhận</span> \n\t\t\t\t<span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> \n\t\t\t\t<span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*" ng-model="userName"/>\n\t\t\t<div class="error-row" ng-bind="userNameError" ng-if="userNameError"></div>\n\t\t\t<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>\n\t\t\t<div class="error-row" ng-bind="userPhoneError" ng-if="userPhoneError"></div>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>\n\t\t\t<div class="error-row" ng-bind="userEmailError" ng-if="userEmailError"></div>\n\t\t\n\t\t\t<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || \'GỬI\'"></button>\n\t\t\t</div>\n\n\t\t</form>',
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

var App = angular.module('application', ['ui.router', 'ngAnimate', 'ngProgress', 'ngTouch', 'ngParallax']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('pageCtrl', _pageController.pageController).controller('splashCtrl', _splashController.splashController).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('lightSidebar', _sidebar2.default).directive('lightFooter', _footer2.default).directive('lightSlider', _slider2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zbGlkZXIuanMiLCJhcHAvY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHAvY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9tYWluQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9yb3V0ZXJDb25maWcuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTixvNkJBSk07QUF3Qk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUExQkssRUFBUDtBQTRCQSxDQTdCYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFFBQUQsRUFBVyxVQUFVLE1BQVYsRUFBa0I7QUFDM0MsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixVQUFPLEdBREQ7QUFFTixpQkFBYyxHQUZSO0FBR04sVUFBTztBQUhELEdBSEQ7QUFRTixnMkNBUk07QUFvQ04sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFS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LElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7S0FJQyxJQUFJLEVBQUUsS0FBRixFQUpMOztBQU1BLEdBQUUsTUFBRjs7QUFFQSxRQUFPLENBQVA7QUFDQSxDQVZEOztBQVlBLE9BQU8sSUFBUCxHQUFjLGtCQUFkIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjb2xcIj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPkxJw4pOIEjhu4Y8L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDwhLS08ZGl2Pkxpw6puIGjhu4cgdGhhbSBxdWFuIGThu7Egw6FuIHbDoCBjaOG7jW4gbmjhu69uZyB24buLIHRyw60gxJHhurlwIG5o4bqldCBuZ2F5IHThu6sgYsOieSBnaeG7nSwgQ2jDum5nIHTDtGkgc+G6vSBo4buXIHRy4bujIG5oaeG7h3QgdMOsbmggY2hvIFF1w70gS2jDoWNoIDI0LzcuPC9kaXY+LS0+XG5cdFx0XHRcdFx0XHQ8IS0tLS0+XG5cdFx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxuXHRcdFxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImZvb3Rlci1saW5rc1wiPi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+SE9NRTwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+UE9SVEZPTElPPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5TRVJWSUNFUzwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+VEVBTSBNRU1CRVI8L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPkNMSUVOVDwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+Q09OVEFDVDwvZGl2Pi0tPlxuXHRcdFx0XHQ8IS0tPC9kaXY+LS0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRzdGF0ZScsIGZ1bmN0aW9uICgkc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdHJlYWR5OiAnPScsXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9Jyxcblx0XHRcdGxpbmtzOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLW5hdmlnYXRpb24tbWVudVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIj7EkMSCTkcgS8OdPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1tZW51XCI+XG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2Pi0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnUgc3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImNoaWxkLm5hbWVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7aWQ6IGNoaWxkLnBhZ2VfaWR9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLnBhZ2VfaWQpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7aWQ6IGluc3RhbmNlLnBhZ2VfaWR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5jaGlsZHJlblswXS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY29wZS50b2dnbGVCdXJnZXIoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dOyIsImxldCBtYWluRm9udCA9IFwiMTRweCAnT3BlbiBTYW5zJ1wiLCBjaGlsZEZvbnQgPSBcIjEzcHggJ09wZW4gU2FucydcIiwgcGFkZGluZyA9IDgwO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgZnVuY3Rpb24gKCRodHRwLCAkcm9vdFNjb3BlLCAkc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGluc3RhbmNlOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLXN0eWxlPVwie3dpZHRoOiBtYXhXaWR0aCsncHgnfVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbGlua0FjdGl2ZUNsYXNzKGluc3RhbmNlKX1cIlxuXHRcdFx0XHRuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpbnN0YW5jZSlcIj5cblx0XHRcdDxzcGFuIG5nLWJpbmQ9XCJpbnN0YW5jZS5uYW1lXCI+PC9zcGFuPlxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1uYXZpZ2F0aW9ucyBpY29uLW5hdmlnYXRpb24tYXJyb3ctZHJvcC11cFwiIG5nLWlmPVwiaW5zdGFuY2UuY2hpbGRyZW5cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJsaW5rLm5hbWVcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGluc3RhbmNlLmNoaWxkcmVuXCJcblx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7aWQ6IGxpbmsucGFnZV9pZH0pXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0c2NvcGUubWF4V2lkdGggPSBzY29wZS5pbnN0YW5jZS5uYW1lLndpZHRoKG1haW5Gb250KSArIHBhZGRpbmc7XG5cblx0XHRcdHNjb3BlLiR3YXRjaCgnaW5zdGFuY2UnLCBpbnN0YW5jZSA9PiB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5jaGlsZHJlbiAmJiBpbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdGluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRcdFx0bGV0IGN1cnJlbnRXaWR0aCA9IGNoaWxkLm5hbWUud2lkdGgoY2hpbGRGb250KSArIHBhZGRpbmc7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudFdpZHRoID4gc2NvcGUubWF4V2lkdGgpIHtcblx0XHRcdFx0XHRcdFx0c2NvcGUubWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRzY29wZS5saW5rQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKCRyb290U2NvcGUuYWN0aXZlUGFnZSkge1xuXHRcdFx0XHRcdGlmIChpbnN0YW5jZS5jaGlsZHJlbikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF8uZmluZFdoZXJlKGluc3RhbmNlLmNoaWxkcmVuLCB7cGFnZV9pZDogJHJvb3RTY29wZS5hY3RpdmVQYWdlLmlkfSkgIT0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJHJvb3RTY29wZS5hY3RpdmVQYWdlLmlkID09PSBpbnN0YW5jZS5wYWdlX2lkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gJHJvb3RTY29wZS5hY3RpdmVQYWdlICYmICRyb290U2NvcGUuYWN0aXZlUGFnZS5pZCA9PT0gcGFnZUlkID8gJ2FjdGl2ZScgOiAnJztcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLnBhZ2VfaWQpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7aWQ6IGluc3RhbmNlLmNoaWxkcmVuWzBdLnBhZ2VfaWR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cblx0XHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRzY29wZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZSA9ICFzY29wZS5lbmFibGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XSIsImNvbnN0IHNpZGViYXJUb3BNYXJnaW4gPSAyMDAsXG5cdHNpZGViYXJCb3R0b21NYXJnaW4gPSA2NzA7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIiBuZy1zdHlsZT1cInt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnK3RvcFBvc2l0aW9uKydweCknfVwiPlxuXHRcdFx0PHN1YnNjcmlwdGlvbi1mb3JtIHdyYXBwZXItY2xhc3M9XCJzdWJzY3JpcHRpb24tZm9ybSBzaWRlYmFyXCI+PC9zdWJzY3JpcHRpb24tZm9ybT5cblx0XHRcdDxkaXYgY2xhc3M9XCJzbWFsbC1iYW5uZXJcIj48L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gMDtcblx0XHRcdGxldCBiYW5uZXJIZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG5cblx0XHRcdCRyb290U2NvcGUuJG9uKCdzY3JvbGxDaGFuZ2UnLCAoZXZlbnQsIHBvc2l0aW9uKSA9PiB7XG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHNpZGViYXJUb3VjaEJvdHRvbSA9ICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPiAkKGRvY3VtZW50KS5oZWlnaHQoKSAtIHNpZGViYXJCb3R0b21NYXJnaW4pO1xuXHRcdFx0XHRcdC8vIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA+ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gc2lkZWJhckJvdHRvbU1hcmdpbikge1xuXHRcdFx0XHRcdC8vIFx0Y29uc29sZS5sb2coXCJuZWFyIGJvdHRvbSFcIik7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdFx0aWYgKHNpZGViYXJUb3VjaEJvdHRvbSkge1xuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSAkKGRvY3VtZW50KS5oZWlnaHQoKSAtIChzaWRlYmFyQm90dG9tTWFyZ2luICsgYmFubmVySGVpZ2h0KTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibmVhciBib3R0b20hXCIsIHNjb3BlLnRvcFBvc2l0aW9uKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHBvc2l0aW9uLnRvcCA+IDEwMCkge1xuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBwb3NpdGlvbi50b3AgLSAzMDtcblx0XHRcdFx0XHR9ICBlbHNlIHtcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJGludGVydmFsJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgaXRlbXM6ICc9JyB9LFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGlnaHQtc2xpZGVyIHt7d3JhcHBlckNsYXNzfX1cIlxuXHRcdFx0bmctc3dpcGUtbGVmdD1cInN3aXBlTGVmdCgkZXZlbnQpXCIgbmctc3dpcGUtcmlnaHQ9XCJzd2lwZVJpZ2h0KCRldmVudClcIj5cblx0XHRcdDxkaXYgaWQ9XCJjdXJyZW50U2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK2FjdGl2ZVNsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJwcmV2aW91c1NsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGUgcHJldmlvdXNcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytwcmV2aW91c1NsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLW5hdmlnYXRpb25cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLW5leHRcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLWJhY2tcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1pdGVtXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmlzQWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIiBuZy1jbGljaz1cIm5hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdGxldCAkYWN0aXZlU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNjdXJyZW50U2xpZGUnKSwgJHByZXZpb3VzU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNwcmV2aW91c1NsaWRlJyksXG5cdFx0XHRcdGVhc2VFZmZlY3QgPSBTaW5lLmVhc2VJbiwgdHJhbnNpdGlvblRpbWUgPSAyO1xuXG5cdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XG5cdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpdGVtcycsICgpID0+IHtcblx0XHRcdFx0bmV4dFNsaWRlKDApO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcblxuXHRcdFx0bGV0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcblx0XHRcdFx0c2NvcGUucHJldmlvdXNTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblx0XHRcdFx0aWYgKHNjb3BlLnByZXZpb3VzU2xpZGUpIHNjb3BlLnByZXZpb3VzU2xpZGUuaXNBY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IG5leHRJbmRleCAhPSB1bmRlZmluZWQgPyBuZXh0SW5kZXggOiBzY29wZS5hY3RpdmVJbmRleCArIDE7XG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVJbmRleCA8IDApIHtcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IHNjb3BlLml0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuYWN0aXZlSW5kZXggPj0gc2NvcGUuaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVTbGlkZSkgc2NvcGUuYWN0aXZlU2xpZGUuaXNBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdC8vUGxheSB0cmFuc2l0aW9uIGFuaW1hdGlvbiFcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRhY3RpdmVTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnLTEwMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9KTtcblx0XHRcdFx0VHdlZW5MaXRlLnRvKCRhY3RpdmVTbGlkZSwgMCwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30pO1xuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KTtcblxuXHRcdFx0XHQvL1Jlc2V0IGludGVydmFsO1xuXHRcdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XG5cdFx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUubmF2aWdhdGUgPSAoaW5zdGFuY2UpID0+IHtcblx0XHRcdFx0aWYgKGluc3RhbmNlICE9IHNjb3BlLmFjdGl2ZVNsaWRlKSB7XG5cdFx0XHRcdFx0bmV4dFNsaWRlKHNjb3BlLml0ZW1zLmluZGV4T2YoaW5zdGFuY2UpKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuc3dpcGVMZWZ0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCArIDEpO1xuXHRcdFx0c2NvcGUuc3dpcGVSaWdodCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggLSAxKTtcblxuXHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XG5cdFx0fVxuXHR9XG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgd3JhcHBlckNsYXNzOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJ3cmFwcGVyQ2xhc3NcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiY2xvc2VGb3JtKClcIj48L2Rpdj4tLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdDxzcGFuPkfhu41pIDwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCI+MDkzMiAwNDcgMzEzPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4gaG/hurdjIGfhu61pIHRow7RuZyB0aW4gxJHhu4Mgbmjhuq1uPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJI4buNIHbDoCB0w6puKlwiIG5nLW1vZGVsPVwidXNlck5hbWVcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cInVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwixJBp4buHbiB0aG/huqFpKlwiIG5nLW1vZGVsPVwidXNlclBob25lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwidXNlclBob25lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIgbmctbW9kZWw9XCJ1c2VyRW1haWxcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJ1c2VyRW1haWxFcnJvclwiPjwvZGl2PlxuXHRcdFxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiTuG7mWkgZHVuZyBjaGkgdGnhur90XCIgbmctbW9kZWw9XCJ1c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGdvb2dsZVwiIG5nLWNsaWNrPVwiZ29vZ2xlTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICdH4busSSdcIj48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9mb3JtPmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4geyBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnOyBzY29wZVtmaWVsZF0gPSAnJztcdH0pO1xuXG5cdFx0XHRzY29wZS5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkXSA9ICcnKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmNsb3NlRm9ybSA9ICgpID0+IHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5zdWJtaXQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4gc2NvcGVbZmllbGQrJ0Vycm9yJ10gPSAnJyk7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJOYW1lLmxlbmd0aCA8IDEpIHNjb3BlLnVzZXJOYW1lRXJyb3IgPSAnTmjhuq1wIHTDqm4nO1xuXHRcdFx0XHRpZiAoc2NvcGUudXNlclBob25lLmxlbmd0aCA8IDgpIHNjb3BlLnVzZXJQaG9uZUVycm9yID0gJ1Phu5EgxJFp4buHbiB0aG/huqFpIGNoxrBhIMSRw7puZyc7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJOYW1lRXJyb3IgfHwgc2NvcGUudXNlclBob25lRXJyb3IpIHJldHVybjtcblxuXHRcdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxuXHRcdFx0XHRcdGZvcm1EYXRhID0ge1xuXHRcdFx0XHRcdC4uLmxvY2FsVXNlckluZm8sXG5cdFx0XHRcdFx0c2l0ZTogbG9jYXRpb24uaG9zdCxcblx0XHRcdFx0XHRmdWxsTmFtZTogc2NvcGUudXNlck5hbWUsXG5cdFx0XHRcdFx0bmFtZTogc2NvcGUudXNlck5hbWUsXG5cdFx0XHRcdFx0cGhvbmU6IHNjb3BlLnVzZXJQaG9uZSxcblx0XHRcdFx0XHRlbWFpbDogc2NvcGUudXNlckVtYWlsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly9GaXJlIEFudHMgdHJhY2tpbmdHb2FsIGhvb2shXG5cdFx0XHRcdGFkeF9hbmFseXRpYy50cmFja2luZ0dvYWwoJzU3ODY2NDY2OCcsIDEsICdldmVudCcpO1xuXHRcdFx0XHQvL1NlbmQgZm9ybSBpbmZvcm1hdGlvbiB0byBBbnRzIVxuXHRcdFx0XHRhbnRzX3VzZXJJbmZvTGlzdGVuZXIoZm9ybURhdGEsIGZhbHNlLCB0cnVlKTtcblx0XHRcdFx0Ly9TZW5kIGZvcm0gdG8gVHdpbidzIHNlcnZlciFcblx0XHRcdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL2N1c3RvbWVyL2luc2VydC9qc29uJywge1xuXHRcdFx0XHRcdHBhcmFtczogZm9ybURhdGFcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcblx0XHRcdFx0XHRzY29wZS5yZXNldEZvcm0oKTtcblx0XHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwudG9nZ2xlU3VjY2VzcygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcblx0XHRcdH07XG5cblx0XHRcdGdsb2JhbC5nZXRfaW5mbyA9IGZ1bmN0aW9uKF91c2VySW5mbyl7XG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3VzZXJJbmZvLCBcImNhbGxlZCEhXCIpO1xuXG5cdFx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cblx0XHRcdFx0XHRzY29wZS51c2VyTmFtZSA9IF91c2VySW5mby5uYW1lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZTtcblx0XHRcdFx0XHRzY29wZS51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XG5cblx0XHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXG5cdFx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dXG5cbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImltcG9ydCB7IGdlbmVyYXRlTnVtYmVyVVVJRCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5J107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IGZhbHNlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2U7XG5cblx0bGlua3MgPSBbe1xuXHRcdG5hbWU6ICd0cmFuZyBjaOG7pycsXG5cdFx0YWN0aXZlOiB0cnVlXG5cdH0sIHtcblx0XHRuYW1lOiAnduG7iyB0csOtIHbDoCB0aeG7h24gw61jaCcsXG5cdFx0Y2hpbGRyZW46IFtcblx0XHRcdHtuYW1lOiAnduG7iyB0csOtJ30sXG5cdFx0XHR7bmFtZTogJ3Rp4buHbiDDrWNoIGtodSB24buxYyd9LFxuXHRcdFx0e25hbWU6ICd0aeG7h24gw61jaCBu4buZaSBraHUnfVxuXHRcdF1cblx0fSwge1xuXHRcdG5hbWU6ICfGsHUgxJHDo2kgdGhhbmggdG/DoW4nXG5cdH0sIHtcblx0XHRuYW1lOiAnbeG6t3QgYuG6sW5nJ1xuXHR9XTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaW50ZXJ2YWwsICR3aW5kb3csICRodHRwLCAgbmdQcm9ncmVzc0ZhY3RvcnkpIHtcblx0XHR0aGlzLnByb2dyZXNzID0gbmdQcm9ncmVzc0ZhY3RvcnkuY3JlYXRlSW5zdGFuY2UoKTtcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XG5cblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAoKSA9PiB7XG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9ICF0aGlzLnN1YnNjcmlwdGlvblBvcHVwO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcblx0XHRcdHRoaXMuc3VjY2Vzc0dpZkltYWdlID0gYHVybChpbWFnZXMvb25vZmZvbmNlLmdpZj8ke2dlbmVyYXRlTnVtYmVyVVVJRCgxMCl9KWA7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xuXHRcdH07XG5cblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XG5cdFx0fSk7XG5cblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xuXHRcdFx0dGhpcy5hY3RpdmVQYWdlID0gdG9TdGF0ZS5uYW1lO1x0dGhpcy5yZWFkeSA9IGZhbHNlO1xuXHRcdFx0JHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgdGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5yZWFkeSA9IHRydWUsIDI1MCk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLm5hbWUgPSBcIkxpZ2h0IFBhZ2UhXCI7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvbWVudS9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyBzaXRlOiBsb2NhdGlvbi5ob3N0IH1cblx0XHR9KS5zdWNjZXNzKChkYXRhKSA9PiB7XG5cdFx0XHR0aGlzLmxpbmtzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KCdodHRwOi8vMTI4LjE5OS4yMjcuMTMyL2Jhbm5lci9nZXQvanNvbicsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnZm9vdGVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuZm9vdGVycyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5zY3JvbGwoKCkgPT4ge1xuXHRcdFx0bGV0IHRvcFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsQ2hhbmdlJywge3RvcDogdG9wU2Nyb2xsfSk7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykucmVzaXplKCgpID0+IHtcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l6ZUNoYW5nZScsIHtcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHRcdHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRmZWF0dXJlcyA9IFtdO1xuXHRzbGlkZXJzID0gW107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCkge1xuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9wYWdlL2dldC9qc29uJywgeyBwYXJhbXM6IHsgcGFnZV9pZDogXCIxXCIgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVQYWdlID0gZGF0YS5yZXN1bHRzWzBdLlBhZ2U7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvYmFubmVyL2dldC9qc29uJywge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdiYW5uZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5mZWF0dXJlcyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldCgnaHR0cDovLzEyOC4xOTkuMjI3LjEzMi9iYW5uZXIvZ2V0L2pzb24nLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ0hvbWVTbGlkZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5zbGlkZXJzID0gZGF0YS5yZXN1bHRzLm1hcChpdGVtID0+IHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uUG9zdDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCkgLSA3MDtcblx0XHQkcm9vdFNjb3BlLiRvbignc2l6ZUNoYW5nZScsIChldmVudCwgc2l6ZSkgPT4ge1xuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgPiA1NzAgPyBzaXplLmhlaWdodCAtIDcwIDogNTAwO1xuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxufSIsImV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwKSB7XG5cdFx0bGV0IHBhZ2VJZCA9ICRzdGF0ZS5wYXJhbXMuaWQ7XG5cblx0XHQkaHR0cC5nZXQoJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzIvcGFnZS9nZXQvanNvbicsIHsgcGFyYW1zOiB7IHBhZ2VfaWQ6IHBhZ2VJZCB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZVBhZ2UgPSBkYXRhLnJlc3VsdHNbMF0uUGFnZTtcblx0XHR9KTtcblxuXHRcdGlmKHBhZ2VJZCA9PSAxKSAkc3RhdGUuZ28oJ2hvbWUnKTtcblx0fVxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAwKTtcblxuXHRcdGlmIChnbG9iYWwucmVzZXRDb250RG93bkludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpO1xuXHR9XG5cblx0c2tpcEludHJvICgpIHtcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcblx0fVxufSIsImltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcblxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcblxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50L3NpZGViYXJcIjtcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudC9zbGlkZXJcIjtcblxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICduZ1Byb2dyZXNzJywgJ25nVG91Y2gnLCAnbmdQYXJhbGxheCddKVxuXHQuY29uZmlnKHJvdXRlckNvbmZpZylcblx0LmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBsaWNhdGlvbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcigncGFnZUN0cmwnLCBwYWdlQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3Rlcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTbGlkZXInLCBzbGlkZXIpXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcblxuQXBwLnJ1bigoKSA9PiB7XG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG59KTtcblxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XG5cdFx0fTtcblx0fVxuXSk7XG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5cbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLFxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XG5cdFx0JHN0YXRlUHJvdmlkZXJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xuXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xuXHR9XG5dO1xuXG52YXIgc3BsYXNoUm91dGUgPSB7XG5cdHVybDogJy9zcGxhc2gnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG1haW5Sb3V0ZSA9IHtcblx0dXJsOiAnL2hvbWUnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBob21lJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwgYXMgbWFpbkN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG52YXIgcGFnZVJvdXRlID0ge1xuXHR1cmw6ICcvcGFnZS86aWQnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBwYWdlJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL3BhZ2UuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAncGFnZUN0cmwgYXMgcGFnZUN0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc291cmNlcywgcHJlZGljYXRlKSB7XG5cdHZhciBzZWFyY2hLZXksIHNlYXJjaFZhbHVlO1xuXHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlZGljYXRlKSkge1xuXHRcdHNlYXJjaEtleSA9IGtleTtcblx0XHRzZWFyY2hWYWx1ZSA9IHByZWRpY2F0ZVtrZXldO1xuXHR9XG5cblx0Zm9yIChsZXQgaW5zdGFuY2Ugb2Ygc291cmNlcykge1xuXHRcdGlmIChpbnN0YW5jZVtzZWFyY2hLZXldID09PSBzZWFyY2hWYWx1ZSkgcmV0dXJuIGluc3RhbmNlO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsVmFsaWQgKGVtYWlsKSB7XG5cdHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbmV4cG9ydCB2YXIgcHJlbG9hZFJlc29sdmVzID0ge1xuXHRhcHBDb25maWc6IGZ1bmN0aW9uKGNvbmZpZ1NlcnZpY2UsIGNhbGN1bGF0b3JTZXJ2aWNlKSB7XG5cdFx0cmV0dXJuIGNvbmZpZ1NlcnZpY2UucHJvbWlzZTtcblx0fVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyVVVJRCAobGVuZ3RoKSB7XG5cdHZhciByZXN1bHQgPSBcIlwiO1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRyZXN1bHQgKz0gWzAsMSwyLDMsNCw1LDYsNyw4LDldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlUmFuZ2UgKHZhbHVlLCBtaW4sIG1heCkge1xuXHRpZiAobWluICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA8PSBtaW4pIHJldHVybiBtaW47XG5cdGlmIChtYXggIT0gdW5kZWZpbmVkICYmIHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcblx0cmV0dXJuIHZhbHVlO1xufVxuXG5TdHJpbmcucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZm9udCkge1xuXHR2YXIgZiA9IGZvbnQgfHwgJzEycHggYXJpYWwnLFxuXHRcdG8gPSAkKCc8ZGl2PicgKyB0aGlzICsgJzwvZGl2PicpXG5cdFx0XHQuY3NzKHsncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAnZmxvYXQnOiAnbGVmdCcsICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLCAndmlzaWJpbGl0eSc6ICdoaWRkZW4nLCAnZm9udCc6IGZ9KVxuXHRcdFx0LmFwcGVuZFRvKCQoJ2JvZHknKSksXG5cdFx0dyA9IG8ud2lkdGgoKTtcblxuXHRvLnJlbW92ZSgpO1xuXG5cdHJldHVybiB3O1xufTtcblxuZ2xvYmFsLnV1aWQgPSBnZW5lcmF0ZU51bWJlclVVSUQ7Il19
