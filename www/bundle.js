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
		template: '<div id="footer" class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t\t<!--<div class="col">-->\n\t\t\t\t\t\t<!--<div class="heading">LIÊN HỆ</div>-->\n\t\t\t\t\t\t<!--<div>Liên hệ tham quan dự án và chọn những vị trí đẹp nhất ngay từ bây giờ, Chúng tôi sẽ hỗ trợ nhiệt tình cho Quý Khách 24/7.</div>-->\n\t\t\t\t\t\t<!---->\n\t\t\t\t\t<!--</div>-->\n\t\t\n\t\t\t\t<!--<div class="footer-links">-->\n\t\t\t\t\t<!--<div class="link-item">HOME</div>-->\n\t\t\t\t\t<!--<div class="link-item">PORTFOLIO</div>-->\n\t\t\t\t\t<!--<div class="link-item">SERVICES</div>-->\n\t\t\t\t\t<!--<div class="link-item">TEAM MEMBER</div>-->\n\t\t\t\t\t<!--<div class="link-item">CLIENT</div>-->\n\t\t\t\t\t<!--<div class="link-item">CONTACT</div>-->\n\t\t\t\t<!--</div>-->\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {}
	};
}];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$state', 'metaService', function ($state, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ready: '=',
			burgerActive: '='
		},
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t\t<div class="navigation-link" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="parent-link" ui-sref="news({id: \'all\'})">Tin tức</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<!--<div class="menu-heading" ng-click="toggleBurger()"></div>-->\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({id: child.page_id})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="menu-item" ui-sref="news({id: \'all\'})" ng-click="toggleBurger()">Tin tức</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.links = metaService.links;

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

			scope.newsActiveClass = function () {
				return $state.current.name === 'news';
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

exports.default = ['$http', '$rootScope', '$state', 'metaService', function ($http, $rootScope, $state, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: "<div class=\"navigation-link\" ng-style=\"{width: maxWidth+'px'}\" ng-class=\"{active: linkActiveClass(instance)}\">\n\t\t\t<div class=\"parent-link\" ng-bind=\"instance.name\" ng-click=\"parentLinkNavigate(instance)\"></div>\n\t\t\t<div class=\"sub-navigations icon-navigation-arrow-drop-up\" ng-if=\"instance.children\">\n\t\t\t\t<div class=\"sub-link icon-av-play-arrow\" ng-bind=\"link.name\" ng-repeat=\"link in instance.children\"\n\t\t\t\t\tui-sref=\"page({id: link.page_id})\"></div>\n\t\t\t</div>\n\t\t</div>",
		link: function link(scope, element, attrs) {
			scope.active = false;
			scope.maxWidth = scope.instance.name.width(mainFont) + padding;

			if (scope.instance.children && scope.instance.children.length) {
				scope.instance.children.forEach(function (child) {
					var currentWidth = child.name.width(childFont) + padding;
					if (currentWidth > scope.maxWidth) {
						scope.maxWidth = currentWidth;
					}
				});
			}

			scope.linkActiveClass = function (instance) {
				return $rootScope.activeGroup && $rootScope.activeGroup.id === instance.id;
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
var initialTopOffset = 121;

exports.default = ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>\n\t\t\t<!--<div class="small-banner"></div>-->\n\t\t\t<div class="sidebar-news">\n\t\t\t\t<div class="heading">Tin mới nhất</div>\n\t\t\t\t<div class="news-summary" ng-repeat="newsItem in news">\n\t\t\t\t\t<div class="thumb-image" ng-style="{\'background-image\': \'url(\'+newsItem.Post.image+\')\'}"></div>\n\t\t\t\t\t<div class="title" ui-sref="news({id: newsItem.Post.id})" ng-bind="newsItem.Post.title"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			var sidebarHeight, footerHeight;scope.topPosition = 0;

			//Safely calculate element's size after stuff have been rendered!
			$timeout(function () {
				sidebarHeight = element.outerHeight();
				footerHeight = angular.element('#footer').outerHeight();
			}, 500);

			$rootScope.$on('scrollChange', function (event, scrollPosition) {
				scope.news = $rootScope.news;

				scope.$apply(function () {
					var documentHeight = $(document).height(),
					    windowHeight = $(window).height(),
					    offset = element.offset();

					if (scrollPosition.scrollingDown) {
						var scrollDownTouchBottom = scrollPosition.top + windowHeight > offset.top + sidebarHeight,
						    scrollDownOverFooter = scrollPosition.top + windowHeight > documentHeight - footerHeight;

						if (scrollDownTouchBottom && !scrollDownOverFooter) {
							scope.topPosition = scrollPosition.top + windowHeight - sidebarHeight - initialTopOffset;
						}
					} else if (scrollPosition.top < offset.top - initialTopOffset) {
						scope.topPosition = scrollPosition.top;
					}

					// if (sidebarTouchBottom) {
					// 	scope.topPosition = $(document).height() - (sidebarBottomMargin + bannerHeight);
					// } else if (position.top > 100) {
					// 	scope.topPosition = position.top - 30;
					// }  else {
					// 	scope.topPosition = 0;
					// }
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

				//Facebook tracking Lead/CompleteRegistration event
				fbq('track', 'Lead');
				fbq('track', 'CompleteRegistration');

				//Send form to Twin's server!
				$http.get(_helper.apiHost + '/customer/insert/json', {
					params: formData
				}).success(function (data) {
					scope.$parent.appCtrl.subscriptionPopup = false;
					scope.resetForm();
					scope.$parent.appCtrl.toggleSuccess();
				});

				$.post('/email', _extends({}, formData, {
					receiver: 'lehaoson@gmail.com',
					relatedGuys: 'none'
				}));
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

},{"../utils/helper":17}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.applicationController = undefined;

var _helper = require('../utils/helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var applicationController = exports.applicationController = function applicationController($rootScope, $scope, $state, $timeout, $interval, $window, $http, ngProgressFactory, metaService) {
	var _this = this;

	_classCallCheck(this, applicationController);

	this.developmentMode = false;
	this.ready = true;
	this.activePage = 'splash';
	this.burgerActive = false;
	this.subscriptionPopup = false;
	this.subscriptionSuccess = false;

	$rootScope.activeContents = [];
	this.progress = ngProgressFactory.createInstance();
	this.progress.setColor('#FA8322');
	global.$http = $http;

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
		$rootScope.activeGroup = null;
	});

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		_this.activePage = toState.name;_this.ready = false;
		_this.progress.complete();
		$timeout(function () {
			return _this.ready = true;
		}, 250);
	});

	$http.get(_helper.apiHost + '/banner/get/json', {
		params: { type: 'footer' }
	}).success(function (data) {
		_this.footers = data.results;
	});

	$http.get(_helper.apiHost + '/banner/get/json', {
		params: { type: 'news', limit: 4 }
	}).success(function (data) {
		$rootScope.news = data.results;
	});

	this.lastScrollPosition = 0;
	$(window).scroll(function (event) {
		var topScroll = $(window).scrollTop();
		$rootScope.$broadcast('scrollChange', { top: topScroll, scrollingDown: topScroll > _this.lastScrollPosition });
		_this.lastScrollPosition = topScroll;
	});

	$(window).resize(function () {
		$rootScope.$broadcast('sizeChange', {
			height: $(window).height(),
			width: $(window).width()
		});
	});
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory', 'metaService'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/helper":17}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mainController = undefined;

var _helper = require('../utils/helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainController = exports.mainController = function mainController($rootScope, $scope, $interval, $timeout, $state, $window, $http, metaService) {
	var _this = this;

	_classCallCheck(this, mainController);

	this.features = [];
	this.sliders = [];

	fbq('track', 'ViewContent'); //Facebook tracking code..
	$rootScope.activeGroup = metaService.links[0];$window.scrollTo(0, 0);

	$http.get(_helper.apiHost + '/page/get/json', { params: { page_id: "1" } }).success(function (data) {
		$rootScope.activeContents = [data.results[0].Page];
	});

	$http.get(_helper.apiHost + '/banner/get/json', {
		params: { type: 'banner' }
	}).success(function (data) {
		_this.features = data.results;
	});

	$http.get(_helper.apiHost + '/banner/get/json', {
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

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

},{"../utils/helper":17}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.newsController = undefined;

var _helper = require('../utils/helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newsController = exports.newsController = function newsController($rootScope, $window, $http, $state) {
	var _this = this;

	_classCallCheck(this, newsController);

	this.postId = $state.params.id;$window.scrollTo(0, 0);
	this.singleMode = !isNaN(this.postId);

	if (this.singleMode) {
		$http.get(_helper.apiHost + '/post/get/json', { params: { id: this.postId } }).success(function (data) {
			_this.activeNews = data.results[0].Post;
			console.log(_this.activeNews);
		});
	} else {
		$http.get(_helper.apiHost + '/banner/get/json', { params: { type: 'news' } }).success(function (data) {
			_this.allNews = data.results;
			console.log(_this.allNews);
		});
	}
};

newsController.$inject = ['$rootScope', '$window', '$http', '$state'];

},{"../utils/helper":17}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.pageController = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helper = require('../utils/helper');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageController = exports.pageController = function () {
	function pageController($rootScope, $scope, $element, $interval, $timeout, $state, $window, $http, metaService) {
		_classCallCheck(this, pageController);

		fbq('track', 'ViewContent'); //Facebook tracking code..

		var pageId = $state.params.id,
		    parentGroup = this.findParentGroup(pageId, metaService.links),
		    previousGroup = $rootScope.activeGroup;
		if (pageId == 1) {
			$state.go('home');return;
		}

		$rootScope.activeGroup = parentGroup;
		//Kick back to the Home page if it's not a link in menu
		if (!parentGroup || !parentGroup.children) {
			$state.go('home');
		} else if (parentGroup === previousGroup) {
			//If the parent group is already active => scroll to the child section!
			//Scroll after 1 second to have better performance (after stuffs had been rendered).
			$timeout(function () {
				var scrollOffset = angular.element('#section' + pageId).offset().top - 50;
				TweenLite.to(window, 1, { scrollTo: { y: scrollOffset }, ease: Power2.easeOut });
			}, 800);
		} else {
			(function () {
				//Finally, load the page => set page's children content!
				var loadedCount = 0;$rootScope.activeContents = [];
				$window.scrollTo(0, 0); //Reset the scroll if loading from the beginning!
				parentGroup.children.forEach(function (child, index) {
					$rootScope.activeContents[index] = {};
					$http.get(_helper.apiHost + '/page/get/json', { params: { page_id: child.page_id } }).success(function (data) {
						var childResult = data.results[0];
						if (childResult && childResult.Page) {
							$rootScope.activeContents[index] = childResult.Page;
						}
					}).finally(function () {
						loadedCount++;

						if (loadedCount >= parentGroup.children.length) {
							//Scroll after 1 second (after all content are ready from server!)
							// to have better performance (after stuffs had been rendered).
							$timeout(function () {
								var scrollOffset = angular.element('#section' + pageId).offset().top - 50;
								TweenLite.to(window, 1, { scrollTo: { y: scrollOffset }, ease: Power2.easeOut });
							}, 500);
						}
					});
				});
			})();
		}
	}

	_createClass(pageController, [{
		key: 'findParentGroup',
		value: function findParentGroup(pageId, links) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var link = _step.value;

					if (link.page_id && link.page_id === pageId) return link;

					if (link.children) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = link.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var child = _step2.value;

								if (child.page_id && child.page_id == pageId) {
									return link;
								}
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
		}
	}]);

	return pageController;
}();

pageController.$inject = ['$rootScope', '$scope', '$element', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

},{"../utils/helper":17}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
"use strict";

var _applicationController = require("./controller/applicationController");

var _routerConfig = require("./routerConfig");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _mainController = require("./controller/mainController");

var _pageController = require("./controller/pageController");

var _newsController = require("./controller/newsController");

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

var _metaService = require("./metaService");

var _metaService2 = _interopRequireDefault(_metaService);

var _filter = require("./utils/filter");

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = angular.module('application', ['ui.router', 'ngAnimate', 'ngProgress', 'ngTouch', 'ngParallax']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('pageCtrl', _pageController.pageController).controller('newsCtrl', _newsController.newsController).controller('splashCtrl', _splashController.splashController).service('metaService', _metaService2.default).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('lightSidebar', _sidebar2.default).directive('lightFooter', _footer2.default).directive('lightSlider', _slider2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

(0, _filter2.default)(App);

App.run(function () {
	FastClick.attach(document.body);
});

App.filter('unsafe', ['$sce', function ($sce) {
	return function (val) {
		return $sce.trustAsHtml(val);
	};
}]);

angular.bootstrap(document, ['application']);

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/popup":4,"./component/sidebar":5,"./component/slider":6,"./component/subscriptionForm":7,"./controller/applicationController":8,"./controller/mainController":9,"./controller/newsController":10,"./controller/pageController":11,"./controller/splashController":12,"./metaService":14,"./routerConfig":15,"./utils/filter":16}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

exports.default = ['$rootScope', '$http', function ($rootScope, $http) {
	var _this = this;

	this.promise = $http.get(_helper.apiHost + '/menu/get/json', {
		params: { site: location.host }
	}).success(function (data) {
		_this.links = data.results;
		console.info("metaService ready!");
	});
}];

},{"./utils/helper":17}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

var routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
	$stateProvider.state('splash', splashRoute).state('home', mainRoute).state('page', pageRoute).state('news', newsRoute);

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
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
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
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@page': {
			templateUrl: 'template/home/page.html',
			controller: 'pageCtrl as pageCtrl'
		}
	}
};

var newsRoute = {
	url: '/news/:id',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@news': {
			templateUrl: 'template/home/news.html',
			controller: 'newsCtrl as newsCtrl'
		}
	}
};

exports.default = routerConfig;

},{"./utils/helper":17}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = register;
exports.niceDate = niceDate;
function register(moduleInstance) {
	moduleInstance.filter('niceDate', niceDate);
}

function niceDate() {
	return function (date) {
		var format = arguments.length <= 1 || arguments[1] === undefined ? 'DD-MM-YYYY' : arguments[1];

		console.log(date);
		return moment(date).format(format);
	};
}

},{}],17:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.find = find;
exports.isEmailValid = isEmailValid;
exports.generateNumberUUID = generateNumberUUID;
exports.safeRange = safeRange;
var apiHost = exports.apiHost = 'http://128.199.227.132';

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

},{}]},{},[13])


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L3BvcHVwLmpzIiwiYXBwL2NvbXBvbmVudC9zaWRlYmFyLmpzIiwiYXBwL2NvbXBvbmVudC9zbGlkZXIuanMiLCJhcHAvY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHAvY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9tYWluQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL25ld3NDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvcGFnZUNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwL2VudHJ5LmpzIiwiYXBwL21ldGFTZXJ2aWNlLmpzIiwiYXBwL3JvdXRlckNvbmZpZy5qcyIsImFwcC91dGlscy9maWx0ZXIuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTixnN0JBSk07QUF3Qk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUExQkssRUFBUDtBQTRCQSxDQTdCYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFVBQVUsTUFBVixFQUFrQixXQUFsQixFQUErQjtBQUN2RSxRQUFPO0FBQ04sWUFBVSxHQURKO0FBRU4sV0FBUyxJQUZIO0FB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QUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtLQUNDLElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7S0FJQyxJQUFJLEVBQUUsS0FBRixFQUpMOztBQU1BLEdBQUUsTUFBRjs7QUFFQSxRQUFPLENBQVA7QUFDQSxDQVZEOztBQVlBLE9BQU8sSUFBUCxHQUFjLGtCQUFkIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzcz1cImZvb3RlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2xcIiBuZy1yZXBlYXQ9XCJjb2x1bW4gaW4gY29sdW1uc1wiIG5nLWJpbmQtaHRtbD1cImNvbHVtbi5Qb3N0LmNvbnRlbnQgfCB1bnNhZmVcIj48L2Rpdj5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImNvbFwiPi0tPlxuXHRcdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+TEnDik4gSOG7hjwvZGl2Pi0tPlxuXHRcdFx0XHRcdFx0PCEtLTxkaXY+TGnDqm4gaOG7hyB0aGFtIHF1YW4gZOG7sSDDoW4gdsOgIGNo4buNbiBuaOG7r25nIHbhu4sgdHLDrSDEkeG6uXAgbmjhuqV0IG5nYXkgdOG7qyBiw6J5IGdp4budLCBDaMO6bmcgdMO0aSBz4bq9IGjhu5cgdHLhu6Mgbmhp4buHdCB0w6xuaCBjaG8gUXXDvSBLaMOhY2ggMjQvNy48L2Rpdj4tLT5cblx0XHRcdFx0XHRcdDwhLS0tLT5cblx0XHRcdFx0XHQ8IS0tPC9kaXY+LS0+XG5cdFx0XG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiZm9vdGVyLWxpbmtzXCI+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5IT01FPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5QT1JURk9MSU88L2Rpdj4tLT5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImxpbmstaXRlbVwiPlNFUlZJQ0VTPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5URUFNIE1FTUJFUjwvZGl2Pi0tPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibGluay1pdGVtXCI+Q0xJRU5UPC9kaXY+LS0+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJsaW5rLWl0ZW1cIj5DT05UQUNUPC9kaXY+LS0+XG5cdFx0XHRcdDwhLS08L2Rpdj4tLT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdHJlYWR5OiAnPScsXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpdGUtbG9nb1wiIHVpLXNyZWY9XCJob21lXCI+PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlUG9wdXAoKVwiPsSQxIJORyBLw508L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cblx0XHRcdFx0XHQ8bmF2aWdhdGlvbi1saW5rIGluc3RhbmNlPVwibGlua1wiIG5nLXJlcGVhdD1cImxpbmsgaW4gbGlua3NcIj48L25hdmlnYXRpb24tbGluaz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJuZXdzKHtpZDogJ2FsbCd9KVwiPlRpbiB04bupYzwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cIm1lbnUtaGVhZGluZ1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj4tLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudXNcIiBuZy1pZj1cIml0ZW0uY2hpbGRyZW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51IHN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJjaGlsZC5uYW1lXCIgbmctcmVwZWF0PVwiY2hpbGQgaW4gaXRlbS5jaGlsZHJlblwiXG5cdFx0XHRcdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2lkOiBjaGlsZC5wYWdlX2lkfSlcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJuZXdzKHtpZDogJ2FsbCd9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5UaW4gdOG7qWM8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmxpbmtzID0gbWV0YVNlcnZpY2UubGlua3M7XG5cblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuYnVyZ2VyQWN0aXZlID0gIXNjb3BlLmJ1cmdlckFjdGl2ZTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnRvZ2dsZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5uZXdzQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09PSAnbmV3cyc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcblxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCwgJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0aW5zdGFuY2U6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgbmctYmluZD1cImluc3RhbmNlLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpbnN0YW5jZSlcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2lkOiBsaW5rLnBhZ2VfaWR9KVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHNjb3BlLm1heFdpZHRoID0gc2NvcGUuaW5zdGFuY2UubmFtZS53aWR0aChtYWluRm9udCkgKyBwYWRkaW5nO1xuXG5cdFx0XHRpZiAoc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4gJiYgc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0XHRcdHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xuXHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xuXHRcdFx0XHRcdFx0c2NvcGUubWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwICYmICRyb290U2NvcGUuYWN0aXZlR3JvdXAuaWQgPT09IGluc3RhbmNlLmlkO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5wYWdlX2lkKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2lkOiBpbnN0YW5jZS5wYWdlX2lkfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZCkge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHtpZDogaW5zdGFuY2UuY2hpbGRyZW5bMF0ucGFnZV9pZH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cblx0XHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRzY29wZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZSA9ICFzY29wZS5lbmFibGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XSIsImNvbnN0IGluaXRpYWxUb3BPZmZzZXQgPSAxMjE7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCIgbmctc3R5bGU9XCJ7dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyt0b3BQb3NpdGlvbisncHgpJ31cIj5cblx0XHRcdDxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+XG5cdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2Pi0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNpZGViYXItbmV3c1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlRpbiBt4bubaSBuaOG6pXQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5ld3Mtc3VtbWFyeVwiIG5nLXJlcGVhdD1cIm5ld3NJdGVtIGluIG5ld3NcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2VcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIiB1aS1zcmVmPVwibmV3cyh7aWQ6IG5ld3NJdGVtLlBvc3QuaWR9KVwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LnRpdGxlXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHR2YXIgc2lkZWJhckhlaWdodCwgZm9vdGVySGVpZ2h0OyBzY29wZS50b3BQb3NpdGlvbiA9IDA7XG5cblx0XHRcdC8vU2FmZWx5IGNhbGN1bGF0ZSBlbGVtZW50J3Mgc2l6ZSBhZnRlciBzdHVmZiBoYXZlIGJlZW4gcmVuZGVyZWQhXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNpZGViYXJIZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG5cdFx0XHRcdGZvb3RlckhlaWdodCA9IGFuZ3VsYXIuZWxlbWVudCgnI2Zvb3RlcicpLm91dGVySGVpZ2h0KCk7XG5cdFx0XHR9LCA1MDApO1xuXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2Nyb2xsQ2hhbmdlJywgKGV2ZW50LCBzY3JvbGxQb3NpdGlvbikgPT4ge1xuXHRcdFx0XHRzY29wZS5uZXdzID0gJHJvb3RTY29wZS5uZXdzO1xuXG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRvY3VtZW50SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCksIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcblx0XHRcdFx0XHRcdG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0KCk7XG5cblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zaXRpb24uc2Nyb2xsaW5nRG93bikge1xuXHRcdFx0XHRcdFx0bGV0IHNjcm9sbERvd25Ub3VjaEJvdHRvbSA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IG9mZnNldC50b3AgKyBzaWRlYmFySGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEb3duT3ZlckZvb3RlciA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IGRvY3VtZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuXG5cdFx0XHRcdFx0XHRpZiAoc2Nyb2xsRG93blRvdWNoQm90dG9tICYmICFzY3JvbGxEb3duT3ZlckZvb3Rlcikge1xuXHRcdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCAtIHNpZGViYXJIZWlnaHQgLSBpbml0aWFsVG9wT2Zmc2V0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24udG9wIDwgb2Zmc2V0LnRvcCAtIGluaXRpYWxUb3BPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIGlmIChzaWRlYmFyVG91Y2hCb3R0b20pIHtcblx0XHRcdFx0XHQvLyBcdHNjb3BlLnRvcFBvc2l0aW9uID0gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAoc2lkZWJhckJvdHRvbU1hcmdpbiArIGJhbm5lckhlaWdodCk7XG5cdFx0XHRcdFx0Ly8gfSBlbHNlIGlmIChwb3NpdGlvbi50b3AgPiAxMDApIHtcblx0XHRcdFx0XHQvLyBcdHNjb3BlLnRvcFBvc2l0aW9uID0gcG9zaXRpb24udG9wIC0gMzA7XG5cdFx0XHRcdFx0Ly8gfSAgZWxzZSB7XG5cdFx0XHRcdFx0Ly8gXHRzY29wZS50b3BQb3NpdGlvbiA9IDA7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRpbnRlcnZhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScgfSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCJcblx0XHRcdG5nLXN3aXBlLWxlZnQ9XCJzd2lwZUxlZnQoJGV2ZW50KVwiIG5nLXN3aXBlLXJpZ2h0PVwic3dpcGVSaWdodCgkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiY3VycmVudFNsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGVcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJythY3RpdmVTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1uYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1uZXh0XCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1iYWNrXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24taXRlbVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5pc0FjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCIgbmctY2xpY2s9XCJuYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRsZXQgJGFjdGl2ZVNsaWRlID0gZWxlbWVudC5maW5kKCcjY3VycmVudFNsaWRlJyksICRwcmV2aW91c1NsaWRlID0gZWxlbWVudC5maW5kKCcjcHJldmlvdXNTbGlkZScpLFxuXHRcdFx0XHRlYXNlRWZmZWN0ID0gU2luZS5lYXNlSW4sIHRyYW5zaXRpb25UaW1lID0gMjtcblxuXHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xuXHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cblx0XHRcdHNjb3BlLiR3YXRjaCgnaXRlbXMnLCAoKSA9PiB7XG5cdFx0XHRcdG5leHRTbGlkZSgwKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XG5cblx0XHRcdGxldCBuZXh0U2xpZGUgPSBmdW5jdGlvbiAobmV4dEluZGV4KSB7XG5cdFx0XHRcdHNjb3BlLnByZXZpb3VzU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cdFx0XHRcdGlmIChzY29wZS5wcmV2aW91c1NsaWRlKSBzY29wZS5wcmV2aW91c1NsaWRlLmlzQWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBuZXh0SW5kZXggIT0gdW5kZWZpbmVkID8gbmV4dEluZGV4IDogc2NvcGUuYWN0aXZlSW5kZXggKyAxO1xuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPCAwKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBzY29wZS5pdGVtcy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNjb3BlLmFjdGl2ZUluZGV4ID49IHNjb3BlLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlU2xpZGUpIHNjb3BlLmFjdGl2ZVNsaWRlLmlzQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMTAwJSd9KTtcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkYWN0aXZlU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJy0xMDAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSk7XG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcblx0XHRcdFx0VHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzAnfSk7XG5cblx0XHRcdFx0Ly9SZXNldCBpbnRlcnZhbDtcblx0XHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xuXHRcdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLm5hdmlnYXRlID0gKGluc3RhbmNlKSA9PiB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZSAhPSBzY29wZS5hY3RpdmVTbGlkZSkge1xuXHRcdFx0XHRcdG5leHRTbGlkZShzY29wZS5pdGVtcy5pbmRleE9mKGluc3RhbmNlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnN3aXBlTGVmdCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggKyAxKTtcblx0XHRcdHNjb3BlLnN3aXBlUmlnaHQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4IC0gMSk7XG5cblx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xuXHRcdH1cblx0fVxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQsIGFwaUhvc3QgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IHdyYXBwZXJDbGFzczogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcblx0XHR0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwid3JhcHBlckNsYXNzXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiY2xvc2UtY29tbWFuZCBpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBuZy1jbGljaz1cImNsb3NlRm9ybSgpXCI+PC9kaXY+LS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxuXHRcdFx0XHQ8c3Bhbj5H4buNaSA8L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiPjA5MzIgMDQ3IDMxMzwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+IGhv4bq3YyBn4butaSB0aMO0bmcgdGluIMSR4buDIG5o4bqtbjwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+QsOBTyBHScOBPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj504burPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5DSOG7piDEkOG6plUgVMavPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSOG7jSB2w6AgdMOqbipcIiBuZy1tb2RlbD1cInVzZXJOYW1lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyTmFtZUVycm9yXCIgbmctaWY9XCJ1c2VyTmFtZUVycm9yXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIsSQaeG7h24gdGhv4bqhaSpcIiBuZy1tb2RlbD1cInVzZXJQaG9uZVwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlclBob25lRXJyb3JcIiBuZy1pZj1cInVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiIG5nLW1vZGVsPVwidXNlckVtYWlsXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyRW1haWxFcnJvclwiIG5nLWlmPVwidXNlckVtYWlsRXJyb3JcIj48L2Rpdj5cblx0XHRcblx0XHRcdDwhLS08dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIk7hu5lpIGR1bmcgY2hpIHRp4bq/dFwiIG5nLW1vZGVsPVwidXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZmFjZWJvb2tcIiBuZy1jbGljaz1cImZhY2Vib29rTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAnR+G7rEknXCI+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZm9ybT5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHsgc2NvcGVbZmllbGQrJ0Vycm9yJ10gPSAnJzsgc2NvcGVbZmllbGRdID0gJyc7XHR9KTtcblxuXHRcdFx0c2NvcGUucmVzZXRGb3JtID0gKCkgPT4ge1xuXHRcdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBzY29wZVtmaWVsZF0gPSAnJyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5jbG9zZUZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuc3VibWl0ID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkKydFcnJvciddID0gJycpO1xuXG5cdFx0XHRcdGlmIChzY29wZS51c2VyTmFtZS5sZW5ndGggPCAxKSBzY29wZS51c2VyTmFtZUVycm9yID0gJ05o4bqtcCB0w6puJztcblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJQaG9uZS5sZW5ndGggPCA4KSBzY29wZS51c2VyUGhvbmVFcnJvciA9ICdT4buRIMSRaeG7h24gdGhv4bqhaSBjaMawYSDEkcO6bmcnO1xuXG5cdFx0XHRcdGlmIChzY29wZS51c2VyTmFtZUVycm9yIHx8IHNjb3BlLnVzZXJQaG9uZUVycm9yKSByZXR1cm47XG5cblx0XHRcdFx0dmFyIGxvY2FsVXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3VzZXJJbmZvXCIpKSxcblx0XHRcdFx0XHRmb3JtRGF0YSA9IHtcblx0XHRcdFx0XHQuLi5sb2NhbFVzZXJJbmZvLFxuXHRcdFx0XHRcdHNpdGU6IGxvY2F0aW9uLmhvc3QsXG5cdFx0XHRcdFx0ZnVsbE5hbWU6IHNjb3BlLnVzZXJOYW1lLFxuXHRcdFx0XHRcdG5hbWU6IHNjb3BlLnVzZXJOYW1lLFxuXHRcdFx0XHRcdHBob25lOiBzY29wZS51c2VyUGhvbmUsXG5cdFx0XHRcdFx0ZW1haWw6IHNjb3BlLnVzZXJFbWFpbFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxuXHRcdFx0XHRhZHhfYW5hbHl0aWMudHJhY2tpbmdHb2FsKCc1Nzg2NjQ2NjgnLCAxLCAnZXZlbnQnKTtcblx0XHRcdFx0Ly9TZW5kIGZvcm0gaW5mb3JtYXRpb24gdG8gQW50cyFcblx0XHRcdFx0YW50c191c2VySW5mb0xpc3RlbmVyKGZvcm1EYXRhLCBmYWxzZSwgdHJ1ZSk7XG5cblx0XHRcdFx0Ly9GYWNlYm9vayB0cmFja2luZyBMZWFkL0NvbXBsZXRlUmVnaXN0cmF0aW9uIGV2ZW50XG5cdFx0XHRcdGZicSgndHJhY2snLCAnTGVhZCcpO1xuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ0NvbXBsZXRlUmVnaXN0cmF0aW9uJyk7XG5cblx0XHRcdFx0Ly9TZW5kIGZvcm0gdG8gVHdpbidzIHNlcnZlciFcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2N1c3RvbWVyL2luc2VydC9qc29uYCwge1xuXHRcdFx0XHRcdHBhcmFtczogZm9ybURhdGFcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcblx0XHRcdFx0XHRzY29wZS5yZXNldEZvcm0oKTtcblx0XHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwudG9nZ2xlU3VjY2VzcygpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkLnBvc3QoJy9lbWFpbCcsIHtcblx0XHRcdFx0XHQuLi5mb3JtRGF0YSxcblx0XHRcdFx0XHRyZWNlaXZlcjogJ2xlaGFvc29uQGdtYWlsLmNvbScsXG5cdFx0XHRcdFx0cmVsYXRlZEd1eXM6ICdub25lJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcblx0XHRcdH07XG5cblx0XHRcdGdsb2JhbC5nZXRfaW5mbyA9IGZ1bmN0aW9uKF91c2VySW5mbyl7XG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3VzZXJJbmZvLCBcImNhbGxlZCEhXCIpO1xuXG5cdFx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cblx0XHRcdFx0XHRzY29wZS51c2VyTmFtZSA9IF91c2VySW5mby5uYW1lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZTtcblx0XHRcdFx0XHRzY29wZS51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XG5cblx0XHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXG5cdFx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dXG5cbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImltcG9ydCB7IGdlbmVyYXRlTnVtYmVyVVVJRCwgYXBpSG9zdCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5JywgJ21ldGFTZXJ2aWNlJ107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IHRydWU7XG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcblx0YnVyZ2VyQWN0aXZlID0gZmFsc2U7XG5cdHN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdHN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaW50ZXJ2YWwsICR3aW5kb3csICRodHRwLCAgbmdQcm9ncmVzc0ZhY3RvcnksIG1ldGFTZXJ2aWNlKSB7XG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSBuZ1Byb2dyZXNzRmFjdG9yeS5jcmVhdGVJbnN0YW5jZSgpO1xuXHRcdHRoaXMucHJvZ3Jlc3Muc2V0Q29sb3IoJyNGQTgzMjInKTtcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcblxuXHRcdGdsb2JhbC50b2dnbGVQb3B1cCA9ICgpID0+IHtcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gIXRoaXMuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dGhpcy50b2dnbGVTdWNjZXNzID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZSwgMzAwMCk7XG5cdFx0fTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xuXHRcdH0pO1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpID0+IHtcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcblx0XHRcdHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMucmVhZHkgPSB0cnVlLCAyNTApO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnZm9vdGVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuZm9vdGVycyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ25ld3MnLCBsaW1pdDogNCB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdCRyb290U2NvcGUubmV3cyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcblx0XHQkKHdpbmRvdykuc2Nyb2xsKChldmVudCkgPT4ge1xuXHRcdFx0bGV0IHRvcFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsQ2hhbmdlJywge3RvcDogdG9wU2Nyb2xsLCBzY3JvbGxpbmdEb3duOiB0b3BTY3JvbGwgPiB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbn0pO1xuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSB0b3BTY3JvbGw7XG5cdFx0fSk7XG5cblx0XHQkKHdpbmRvdykucmVzaXplKCgpID0+IHtcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l6ZUNoYW5nZScsIHtcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHRcdHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCB7IGFwaUhvc3QgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcblxuXHRmZWF0dXJlcyA9IFtdO1xuXHRzbGlkZXJzID0gW107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcblx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7IC8vRmFjZWJvb2sgdHJhY2tpbmcgY29kZS4uXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG1ldGFTZXJ2aWNlLmxpbmtzWzBdOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBwYWdlX2lkOiBcIjFcIiB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW2RhdGEucmVzdWx0c1swXS5QYWdlXTtcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Jhbm5lcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZlYXR1cmVzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnSG9tZVNsaWRlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNsaWRlcnMgPSBkYXRhLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gaXRlbS5Qb3N0O1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNsaWRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDcwO1xuXHRcdCRyb290U2NvcGUuJG9uKCdzaXplQ2hhbmdlJywgKGV2ZW50LCBzaXplKSA9PiB7XG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSBzaXplLmhlaWdodCA+IDU3MCA/IHNpemUuaGVpZ2h0IC0gNzAgOiA1MDA7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG59IiwiaW1wb3J0IHsgYXBpSG9zdCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNsYXNzIG5ld3NDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckaHR0cCcsICAnJHN0YXRlJ107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUpIHtcblx0XHR0aGlzLnBvc3RJZCA9ICRzdGF0ZS5wYXJhbXMuaWQ7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0dGhpcy5zaW5nbGVNb2RlID0gIWlzTmFOKHRoaXMucG9zdElkKTtcblxuXHRcdGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wb3N0L2dldC9qc29uYCwgeyBwYXJhbXM6IHsgaWQ6IHRoaXMucG9zdElkIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0dGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlTmV3cyk7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1x0cGFyYW1zOiB7IHR5cGU6ICduZXdzJyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdHRoaXMuYWxsTmV3cyA9IGRhdGEucmVzdWx0cztcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5hbGxOZXdzKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IGFwaUhvc3QgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkZWxlbWVudCwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcblx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7IC8vRmFjZWJvb2sgdHJhY2tpbmcgY29kZS4uXG5cblx0XHRsZXQgcGFnZUlkID0gJHN0YXRlLnBhcmFtcy5pZCwgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlSWQsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcblx0XHRcdHByZXZpb3VzR3JvdXAgPSAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwO1xuXHRcdGlmKHBhZ2VJZCA9PSAxKSB7ICRzdGF0ZS5nbygnaG9tZScpOyByZXR1cm47IH1cblxuXHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBwYXJlbnRHcm91cDtcblx0XHQvL0tpY2sgYmFjayB0byB0aGUgSG9tZSBwYWdlIGlmIGl0J3Mgbm90IGEgbGluayBpbiBtZW51XG5cdFx0aWYgKCFwYXJlbnRHcm91cCB8fCAhcGFyZW50R3JvdXAuY2hpbGRyZW4pIHtcblx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xuXHRcdH0gZWxzZSBpZiAocGFyZW50R3JvdXAgPT09IHByZXZpb3VzR3JvdXApIHsgLy9JZiB0aGUgcGFyZW50IGdyb3VwIGlzIGFscmVhZHkgYWN0aXZlID0+IHNjcm9sbCB0byB0aGUgY2hpbGQgc2VjdGlvbiFcblx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUlkfWApLm9mZnNldCgpLnRvcCAtIDUwO1xuXHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcblx0XHRcdH0sIDgwMCk7XG5cdFx0fSBlbHNlIHsgLy9GaW5hbGx5LCBsb2FkIHRoZSBwYWdlID0+IHNldCBwYWdlJ3MgY2hpbGRyZW4gY29udGVudCFcblx0XHRcdGxldCBsb2FkZWRDb3VudCA9IDA7ICRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbXTtcblx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vUmVzZXQgdGhlIHNjcm9sbCBpZiBsb2FkaW5nIGZyb20gdGhlIGJlZ2lubmluZyFcblx0XHRcdHBhcmVudEdyb3VwLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IHt9O1xuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHsgcGFyYW1zOiB7IHBhZ2VfaWQ6IGNoaWxkLnBhZ2VfaWQgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGxldCBjaGlsZFJlc3VsdCA9IGRhdGEucmVzdWx0c1swXTtcblx0XHRcdFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xuXHRcdFx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50c1tpbmRleF0gPSBjaGlsZFJlc3VsdC5QYWdlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuZmluYWxseSgoKSA9PiB7XG5cdFx0XHRcdFx0bG9hZGVkQ291bnQrKztcblxuXHRcdFx0XHRcdGlmIChsb2FkZWRDb3VudCA+PSBwYXJlbnRHcm91cC5jaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIChhZnRlciBhbGwgY29udGVudCBhcmUgcmVhZHkgZnJvbSBzZXJ2ZXIhKVxuXHRcdFx0XHRcdFx0Ly8gdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXG5cdFx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlSWR9YCkub2Zmc2V0KCkudG9wIC0gNTA7XG5cdFx0XHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xuXHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZFBhcmVudEdyb3VwIChwYWdlSWQsIGxpbmtzKSB7XG5cdFx0Zm9yIChsZXQgbGluayBvZiBsaW5rcykge1xuXHRcdFx0aWYgKGxpbmsucGFnZV9pZCAmJiBsaW5rLnBhZ2VfaWQgPT09IHBhZ2VJZCkgcmV0dXJuIGxpbms7XG5cblx0XHRcdGlmIChsaW5rLmNoaWxkcmVuKSB7XG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmsuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoY2hpbGQucGFnZV9pZCAmJiBjaGlsZC5wYWdlX2lkID09IHBhZ2VJZCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxpbms7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGNsYXNzIHNwbGFzaENvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJGludGVydmFsLCAkdGltZW91dCkge1xuXHRcdHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xuXG5cdFx0aWYgKGdsb2JhbC5yZXNldENvbnREb3duSW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnJlc2V0Q29udERvd25JbnRlcnZhbCk7XG5cdH1cblxuXHRza2lwSW50cm8gKCkge1xuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xuXHR9XG59IiwiaW1wb3J0IHthcHBsaWNhdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyXCI7XG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gXCIuL3JvdXRlckNvbmZpZ1wiO1xuXG5pbXBvcnQge21haW5Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XG5pbXBvcnQge3BhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyXCI7XG5pbXBvcnQge25ld3NDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL25ld3NDb250cm9sbGVyXCI7XG5pbXBvcnQge3NwbGFzaENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlclwiO1xuXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IG5hdmlnYXRpb25MaW5rIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uTGlua1wiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnQvZm9vdGVyXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnQvc2lkZWJhclwiO1xuaW1wb3J0IHN1YnNjcmlwdGlvbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm1cIjtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9jb21wb25lbnQvcG9wdXBcIjtcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xuaW1wb3J0IG1ldGFTZXJ2aWNlIGZyb20gXCIuL21ldGFTZXJ2aWNlXCI7XG5pbXBvcnQgcmVnaXN0ZXJGaWx0ZXIgZnJvbSBcIi4vdXRpbHMvZmlsdGVyXCI7XG5cbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnbmdQcm9ncmVzcycsICduZ1RvdWNoJywgJ25nUGFyYWxsYXgnXSlcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3BhZ2VDdHJsJywgcGFnZUNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCduZXdzQ3RybCcsIG5ld3NDb250cm9sbGVyKVxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXG5cdC5zZXJ2aWNlKCdtZXRhU2VydmljZScsIG1ldGFTZXJ2aWNlKVxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3Rlcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTbGlkZXInLCBzbGlkZXIpXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcblxucmVnaXN0ZXJGaWx0ZXIoQXBwKTtcblxuQXBwLnJ1bigoKSA9PiB7XG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG59KTtcblxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XG5cdFx0fTtcblx0fVxuXSk7XG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImltcG9ydCB7IGFwaUhvc3QgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XG5cdHRoaXMucHJvbWlzZSA9ICRodHRwLmdldChgJHthcGlIb3N0fS9tZW51L2dldC9qc29uYCwge1xuXHRcdHBhcmFtczogeyBzaXRlOiBsb2NhdGlvbi5ob3N0IH1cblx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xuXHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0Y29uc29sZS5pbmZvKFwibWV0YVNlcnZpY2UgcmVhZHkhXCIpO1xuXHR9KTtcbn1dOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5cbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLFxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XG5cdFx0JHN0YXRlUHJvdmlkZXJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpXG5cdFx0XHQuc3RhdGUoJ25ld3MnLCBuZXdzUm91dGUpO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xuXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xuXHR9XG5dO1xuXG52YXIgc3BsYXNoUm91dGUgPSB7XG5cdHVybDogJy9zcGxhc2gnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG1haW5Sb3V0ZSA9IHtcblx0dXJsOiAnL2hvbWUnLFxuXHRyZXNvbHZlOiB7XG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcblx0XHR9XG5cdH0sXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QGhvbWUnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbWFpbi5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBwYWdlUm91dGUgPSB7XG5cdHVybDogJy9wYWdlLzppZCcsXG5cdHJlc29sdmU6IHtcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xuXHRcdH1cblx0fSxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG5ld3NSb3V0ZSA9IHtcblx0dXJsOiAnL25ld3MvOmlkJyxcblx0cmVzb2x2ZToge1xuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XG5cdFx0fVxuXHR9LFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBuZXdzJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnbmV3c0N0cmwgYXMgbmV3c0N0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcblx0bW9kdWxlSW5zdGFuY2Vcblx0XHQuZmlsdGVyKCduaWNlRGF0ZScsIG5pY2VEYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pY2VEYXRlICgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcblx0XHRjb25zb2xlLmxvZyhkYXRlKTtcblx0XHRyZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xuXHR9O1xufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzInO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XG5cdH1cblxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcblx0fVxuXG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+Jylcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcblx0XHR3ID0gby53aWR0aCgpO1xuXG5cdG8ucmVtb3ZlKCk7XG5cblx0cmV0dXJuIHc7XG59O1xuXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
