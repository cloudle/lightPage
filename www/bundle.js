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
		template: '<div id="footer" class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="copyright">\n\t\t\t\t<span>Designed by</span>\n\t\t\t  <a href="http://twin.vn" style="text-decoration:none;color:#2EB3D3;" target="_blank">TWIN Software Solutions</a>\n\t\t\t</div>\n\t\t</div>',
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
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t\t<div class="navigation-link" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="parent-link" ui-sref="news">Tin tức</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<!--<div class="menu-heading" ng-click="toggleBurger()"></div>-->\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({alias: child.alias})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="menu-item" ui-sref="news" ng-click="toggleBurger()">Tin tức</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.links = metaService.links;

			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.alias) {
					$state.go('page', { alias: instance.alias });
				} else if (instance.children[0] && instance.children[0].alias) {
					$state.go('page', { alias: instance.children[0].alias });
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
		template: "<div class=\"navigation-link\" ng-style=\"{width: maxWidth+'px'}\" ng-class=\"{active: linkActiveClass(instance)}\">\n\t\t\t<div class=\"parent-link\" ng-bind=\"instance.name\" ng-click=\"parentLinkNavigate(instance)\"></div>\n\t\t\t<div class=\"sub-navigations icon-navigation-arrow-drop-up\" ng-if=\"instance.children\">\n\t\t\t\t<div class=\"sub-link icon-av-play-arrow\" ng-bind=\"link.name\" ng-repeat=\"link in instance.children\"\n\t\t\t\t\tui-sref=\"page({alias: link.alias})\"></div>\n\t\t\t</div>\n\t\t</div>",
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
				if (instance.alias) {
					$state.go('page', { alias: instance.alias });
				} else if (instance.children[0] && instance.children[0].alias) {
					$state.go('page', { alias: instance.children[0].alias });
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
exports.default = ['$rootScope', '$http', function ($rootScope, $http) {
	return {
		restrict: 'E',
		replace: true,
		template: '<div class="section-canvas top-separated news-area">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="light-heading section"><span class="highlight">TIN TỨC</span></div>\n\t\t\t\t<div class="light-row quatro">\n\t\t\t\t\t<div class="column light-column click-able" ng-repeat="news in latestNews" ui-sref="news({id: news.Post.id})">\n\t\t\t\t\t\t<div class="title" ng-bind="news.Post.title"></div>\n\t\t\t\t\t\t<div class="thumb-image-wrapper">\n\t\t\t\t\t\t\t<div class="image image-hover-effect-zoom-120" ng-style="{\'background-image\': \'url(\'+news.Post.image+\')\'}"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="description" ng-bind="news.Post.description"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.latestNews = $rootScope.news;
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
		template: '<div class="popup-wrapper" ng-class="{active: enable}">\n\t\t\t<div class="popup-backdrop" ng-click="toggle()"></div>\n\t\t\t<div class="popup-content">\n\t\t\t\t<ng-transclude></ng-transclude>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.toggle = function () {
				scope.enable = !scope.enable;
			};
		}
	};
}];

},{}],6:[function(require,module,exports){
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
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>\n\t\t\t<!--<div class="small-banner"></div>-->\n\t\t\t<div class="sidebar-news">\n\t\t\t\t<div class="heading">Tin tức</div>\n\t\t\t\t<div class="news-summary" ng-repeat="newsItem in news" ui-sref="news({alias: newsItem.Post.alias})">\n\t\t\t\t\t<div class="thumb-image" ng-style="{\'background-image\': \'url(\'+newsItem.Post.image+\')\'}"></div>\n\t\t\t\t\t<div class="title" ng-bind="newsItem.Post.title"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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
				});
			});
		}
	};
}];

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _helper = require('../utils/helper');

exports.default = ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<!--<div class="close-command icon-navigation-close" ng-click="closeForm()"></div>-->\n\t\t\t<div class="heading">\n\t\t\t\t<span>Gọi </span> \n\t\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span> hoặc gửi thông tin để nhận</span> \n\t\t\t\t<span class="strong">BÁO GIÁ</span>\n\t\t\t\t<span>từ</span> \n\t\t\t\t<span class="strong">CHỦ ĐẦU TƯ</span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="Họ và tên*" ng-model="userName"/>\n\t\t\t<div class="error-row" ng-bind="userNameError" ng-if="userNameError"></div>\n\t\t\t<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>\n\t\t\t<div class="error-row" ng-bind="userPhoneError" ng-if="userPhoneError"></div>\n\t\t\t<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>\n\t\t\t<div class="error-row" ng-bind="userEmailError" ng-if="userEmailError"></div>\n\t\t\n\t\t\t<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || \'GỬI\'"></button>\n\t\t\t</div>\n\n\t\t</form>',
		link: function link(scope, element, attrs) {
			scope.configs = metaService.configs;
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

				//Tracking Google Analytic goal!
				ga('send', {
					hitType: 'event',
					eventCategory: 'Subscription',
					eventAction: 'Submit'
				});

				//Instantly reset the form!
				scope.resetForm();
				$rootScope.$broadcast('subscriptionSent');

				//Send form to Twin's server!
				$http.get(_helper.apiHost + '/customer/insert/json', {
					params: formData
				}).success(function (data) {
					$rootScope.$broadcast('subscriptionSuccess');
					$http.get(_helper.apiHost + '/mail/sent/json', { params: formData }).success(function (data) {
						console.log('email...', data);
					});
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

},{"../utils/helper":19}],9:[function(require,module,exports){
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

	$rootScope.configs = metaService.configs;
	console.log(metaService.configs);
	$rootScope.activeContents = [];
	this.progress = ngProgressFactory.createInstance();
	this.progress.setColor('#FA8322');
	global.$http = $http;

	global.togglePopup = function (newVal) {
		$scope.$apply(function () {
			_this.subscriptionPopup = newVal ? newVal : !_this.subscriptionPopup;
		});
	};

	this.toggleSuccess = function () {
		_this.successGifImage = 'url(images/onoffonce.gif?' + (0, _helper.generateNumberUUID)(10) + ')';
		_this.subscriptionSuccess = true;
		$timeout(function () {
			return _this.subscriptionSuccess = false;
		}, 3000);
	};

	$rootScope.$on('subscriptionSent', function () {
		_this.subscriptionPopup = false;
	});

	$rootScope.$on('subscriptionSuccess', function () {
		_this.successGifImage = 'url(images/onoffonce.gif?' + (0, _helper.generateNumberUUID)(10) + ')';
		_this.subscriptionSuccess = true;
		$timeout(function () {
			return _this.subscriptionSuccess = false;
		}, 3000);
	});

	$rootScope.$on('$stateChangeStart', function () {
		_this.progress.start();
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

},{"../utils/helper":19}],10:[function(require,module,exports){
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

	//Tracking code..
	ga('send', 'pageview');
	fbq('track', "PageView");

	$rootScope.activeGroup = metaService.links[0];$window.scrollTo(0, 0);

	$http.get(_helper.apiHost + '/page/get/json', { params: { alias: "trang-chu" } }).success(function (data) {
		fbq('track', 'ViewContent');
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

},{"../utils/helper":19}],11:[function(require,module,exports){
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

	//Tracking code..
	ga('send', 'pageview');
	fbq('track', "PageView");
	$rootScope.activeGroup = null;

	this.pageAlias = $state.params.alias;$window.scrollTo(0, 0);
	this.singleMode = this.pageAlias !== '';

	if (this.singleMode) {
		$http.get(_helper.apiHost + '/post/get/json', { params: { alias: this.pageAlias } }).success(function (data) {
			fbq('track', 'ViewContent');
			_this.activeNews = data.results[0].Post;
		});
	} else {
		$http.get(_helper.apiHost + '/banner/get/json', { params: { type: 'news' } }).success(function (data) {
			fbq('track', 'ViewContent');
			_this.allNews = data.results;
		});
	}
};

newsController.$inject = ['$rootScope', '$window', '$http', '$state'];

},{"../utils/helper":19}],12:[function(require,module,exports){
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

		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");
		fbq('track', 'ViewContent');

		var pageAlias = $state.params.alias,
		    parentGroup = this.findParentGroup(pageAlias, metaService.links),
		    previousGroup = $rootScope.activeGroup;$rootScope.activeGroup = parentGroup;

		if (pageAlias == 'trang-chu') {
			$state.go('home');return;
		}

		//Kick back to the Home page if it's not a link in menu
		if (!parentGroup || !parentGroup.children) {
			$state.go('home');
		} else if (parentGroup === previousGroup) {
			//If the parent group is already active => scroll to the child section!
			//Scroll after 1 second to have better performance (after stuffs had been rendered).
			$timeout(function () {
				var scrollOffset = angular.element('#section' + pageAlias).offset().top - 50;
				TweenLite.to(window, 1, { scrollTo: { y: scrollOffset }, ease: Power2.easeOut });
			}, 800);
		} else {
			(function () {
				//Finally, load the page => set page's children content!
				var loadedCount = 0;$rootScope.activeContents = [];
				$window.scrollTo(0, 0); //Reset the scroll if loading from the beginning!
				parentGroup.children.forEach(function (child, index) {
					$rootScope.activeContents[index] = {};
					$http.get(_helper.apiHost + '/page/get/json', { params: { alias: child.alias } }).success(function (data) {
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
								var scrollOffset = angular.element('#section' + pageAlias).offset().top - 50;
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
		value: function findParentGroup(alias, links) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var link = _step.value;

					if (link.alias && link.alias === alias) return link;

					if (link.children) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = undefined;

						try {
							for (var _iterator2 = link.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var child = _step2.value;

								if (child.alias && child.alias == alias) {
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

},{"../utils/helper":19}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

var _newsArea = require("./component/newsArea");

var _newsArea2 = _interopRequireDefault(_newsArea);

var _metaService = require("./metaService");

var _metaService2 = _interopRequireDefault(_metaService);

var _filter = require("./utils/filter");

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = angular.module('application', ['ui.router', 'ngAnimate', 'ngProgress', 'ngTouch', 'ngParallax', 'angular-spinkit']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('pageCtrl', _pageController.pageController).controller('newsCtrl', _newsController.newsController).controller('splashCtrl', _splashController.splashController).service('metaService', _metaService2.default).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('lightSidebar', _sidebar2.default).directive('lightFooter', _footer2.default).directive('lightSlider', _slider2.default).directive('newsArea', _newsArea2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

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

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/newsArea":4,"./component/popup":5,"./component/sidebar":6,"./component/slider":7,"./component/subscriptionForm":8,"./controller/applicationController":9,"./controller/mainController":10,"./controller/newsController":11,"./controller/pageController":12,"./controller/splashController":13,"./metaService":15,"./routerConfig":17,"./utils/filter":18}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

exports.default = ['$rootScope', '$http', function ($rootScope, $http) {
	var _this = this;

	var configsPromise = new Promise(function (resolve, reject) {
		$http.get(_helper.apiHost + '/menu/get/json', { params: { site: location.host } }).success(function (data) {
			_this.links = data.results;resolve(_this.links);
		});
	});

	var navigationPromise = new Promise(function (resolve, reject) {
		$http.get('/configs').success(function (data) {
			_this.configs = data;resolve(_this.configs);
		});
	});

	this.promise = new Promise(function (resolve, reject) {
		Promise.all([navigationPromise, configsPromise]).then(function (values) {
			console.info("metaService ready!", _this.links, _this.configs);
			resolve({ links: _this.links, configs: _this.configs });
		});
	});
}];

},{"./utils/helper":19}],16:[function(require,module,exports){
'use strict';

console.log("This is golden river!!!");

//Analytics code...
//Google =>
(function (i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
		(i[r].q = i[r].q || []).push(arguments);
	}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-77901914-1', 'auto');
ga('send', 'pageview');

//Facebook essential =>
(function (d, s, id) {
	var js,
	    fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=108597779162841";
	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');

//Facebook pixel =>
!function (f, b, e, v, n, t, s) {
	if (f.fbq) return;n = f.fbq = function () {
		n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
	};if (!f._fbq) f._fbq = n;
	n.push = n;n.loaded = !0;n.version = '2.0';n.queue = [];t = b.createElement(e);t.async = !0;
	t.src = v;s = b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t, s);
}(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '578115232338331');
fbq('track', "PageView");

},{}],17:[function(require,module,exports){
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
	url: '/',
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
	url: '/:alias',
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
	url: '/tin-tuc/:alias',
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

},{"./utils/helper":19}],18:[function(require,module,exports){
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

		return moment(date).format(format);
	};
}

},{}],19:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.find = find;
exports.isEmailValid = isEmailValid;
exports.generateNumberUUID = generateNumberUUID;
exports.safeRange = safeRange;
var apiHost = exports.apiHost = 'http://103.56.157.66/realestate';

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

},{}]},{},[14,16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L25ld3NBcmVhLmpzIiwiYXBwL2NvbXBvbmVudC9wb3B1cC5qcyIsImFwcC9jb21wb25lbnQvc2lkZWJhci5qcyIsImFwcC9jb21wb25lbnQvc2xpZGVyLmpzIiwiYXBwL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtLmpzIiwiYXBwL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9uZXdzQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9tZXRhU2VydmljZS5qcyIsImFwcC9wYXRjaGVzL2dvbGRlblJpdmVyLmpzIiwiYXBwL3JvdXRlckNvbmZpZy5qcyIsImFwcC91dGlscy9maWx0ZXIuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTiwwZEFKTTtBQWdCTixRQUFNLGNBQVUsS0FBVixFQUFpQixPQUFqQixFQUEwQixLQUExQixFQUFpQyxDQUV0QztBQWxCSyxFQUFQO0FBb0JBLENBckJjLEM7Ozs7Ozs7O2tCQ0FBLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsVUFBVSxNQUFWLEVBQWtC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QUFTLEVBQWI7QUFDQSxNQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxNQUFuQixFQUEyQixHQUEzQixFQUFnQztBQUMvQixZQUFVLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsQ0FBekIsQ0FBdEIsQ0FBVjtBQUNBOztBQUVELFFBQU8sTUFBUDtBQUNBOztBQUVNLFNBQVMsU0FBVCxDQUFvQixLQUFwQixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQztBQUMzQyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxRQUFPLEtBQVA7QUFDQTs7QUFFRCxPQUFPLFNBQVAsQ0FBaUIsS0FBakIsR0FBeUIsVUFBUyxJQUFULEVBQWU7QUFDdkMsS0FBSSxJQUFJLFFBQVEsWUFBaEI7S0FDQyxJQUFJLEVBQUUsVUFBVSxJQUFWLEdBQWlCLFFBQW5CLEVBQ0YsR0FERSxDQUNFLEVBQUMsWUFBWSxVQUFiLEVBQXlCLFNBQVMsTUFBbEMsRUFBMEMsZUFBZSxRQUF6RCxFQUFtRSxjQUFjLFFBQWpGLEVBQTJGLFFBQVEsQ0FBbkcsRUFERixFQUVGLFFBRkUsQ0FFTyxFQUFFLE1BQUYsQ0FGUCxDQURMO0tBSUMsSUFBSSxFQUFFLEtBQUYsRUFKTDs7QUFNQSxHQUFFLE1BQUY7O0FBRUEsUUFBTyxDQUFQO0FBQ0EsQ0FWRDs7QUFZQSxPQUFPLElBQVAsR0FBYyxrQkFBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbJyRodHRwJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGNvbHVtbnM6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBpZD1cImZvb3RlclwiIGNsYXNzPVwiZm9vdGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbFwiIG5nLXJlcGVhdD1cImNvbHVtbiBpbiBjb2x1bW5zXCIgbmctYmluZC1odG1sPVwiY29sdW1uLlBvc3QuY29udGVudCB8IHVuc2FmZVwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29weXJpZ2h0XCI+XG5cdFx0XHRcdDxzcGFuPkRlc2lnbmVkIGJ5PC9zcGFuPlxuXHRcdFx0ICA8YSBocmVmPVwiaHR0cDovL3R3aW4udm5cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyRUIzRDM7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VFdJTiBTb2Z0d2FyZSBTb2x1dGlvbnM8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblxuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRzdGF0ZScsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRyZWFkeTogJz0nLFxuXHRcdFx0YnVyZ2VyQWN0aXZlOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLW5hdmlnYXRpb24tbWVudVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIj7EkMSCTkcgS8OdPC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1tZW51XCI+XG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogbmV3c0FjdGl2ZUNsYXNzKCl9XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiB1aS1zcmVmPVwibmV3c1wiPlRpbiB04bupYzwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XG5cdFx0XHRcdFx0XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cIm1lbnUtaGVhZGluZ1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj4tLT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudXNcIiBuZy1pZj1cIml0ZW0uY2hpbGRyZW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51IHN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJjaGlsZC5uYW1lXCIgbmctcmVwZWF0PVwiY2hpbGQgaW4gaXRlbS5jaGlsZHJlblwiXG5cdFx0XHRcdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBjaGlsZC5hbGlhc30pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiB1aS1zcmVmPVwibmV3c1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5UaW4gdOG7qWM8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmxpbmtzID0gbWV0YVNlcnZpY2UubGlua3M7XG5cblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuYnVyZ2VyQWN0aXZlID0gIXNjb3BlLmJ1cmdlckFjdGl2ZTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnRvZ2dsZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuYWxpYXN9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXN9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlcigpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUubmV3c0FjdGl2ZUNsYXNzID0gKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ25ld3MnO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdGluc3RhbmNlOiAnPSdcblx0XHR9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLXN0eWxlPVwie3dpZHRoOiBtYXhXaWR0aCsncHgnfVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbGlua0FjdGl2ZUNsYXNzKGluc3RhbmNlKX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIG5nLWJpbmQ9XCJpbnN0YW5jZS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaW5zdGFuY2UpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxuXHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHthbGlhczogbGluay5hbGlhc30pXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xuXHRcdFx0c2NvcGUubWF4V2lkdGggPSBzY29wZS5pbnN0YW5jZS5uYW1lLndpZHRoKG1haW5Gb250KSArIHBhZGRpbmc7XG5cblx0XHRcdGlmIChzY29wZS5pbnN0YW5jZS5jaGlsZHJlbiAmJiBzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdFx0c2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdFx0bGV0IGN1cnJlbnRXaWR0aCA9IGNoaWxkLm5hbWUud2lkdGgoY2hpbGRGb250KSArIHBhZGRpbmc7XG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA+IHNjb3BlLm1heFdpZHRoKSB7XG5cdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRzY29wZS5saW5rQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlR3JvdXAgJiYgJHJvb3RTY29wZS5hY3RpdmVHcm91cC5pZCA9PT0gaW5zdGFuY2UuaWQ7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYW52YXMgdG9wLXNlcGFyYXRlZCBuZXdzLWFyZWFcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LWhlYWRpbmcgc2VjdGlvblwiPjxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+VElOIFThu6hDPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtcm93IHF1YXRyb1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW4gbGlnaHQtY29sdW1uIGNsaWNrLWFibGVcIiBuZy1yZXBlYXQ9XCJuZXdzIGluIGxhdGVzdE5ld3NcIiB1aS1zcmVmPVwibmV3cyh7aWQ6IG5ld3MuUG9zdC5pZH0pXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIiBuZy1iaW5kPVwibmV3cy5Qb3N0LnRpdGxlXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2Utd3JhcHBlclwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2UgaW1hZ2UtaG92ZXItZWZmZWN0LXpvb20tMTIwXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrbmV3cy5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgbmctYmluZD1cIm5ld3MuUG9zdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUubGF0ZXN0TmV3cyA9ICRyb290U2NvcGUubmV3cztcblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1iYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlKClcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufV0iLCJjb25zdCBpbml0aWFsVG9wT2Zmc2V0ID0gMTIxO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIG5nLXN0eWxlPVwie3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCcrdG9wUG9zaXRpb24rJ3B4KSd9XCI+XG5cdFx0XHQ8c3Vic2NyaXB0aW9uLWZvcm0gd3JhcHBlci1jbGFzcz1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPlxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzbWFsbC1iYW5uZXJcIj48L2Rpdj4tLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlYmFyLW5ld3NcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5UaW4gdOG7qWM8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5ld3Mtc3VtbWFyeVwiIG5nLXJlcGVhdD1cIm5ld3NJdGVtIGluIG5ld3NcIiB1aS1zcmVmPVwibmV3cyh7YWxpYXM6IG5ld3NJdGVtLlBvc3QuYWxpYXN9KVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aHVtYi1pbWFnZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK25ld3NJdGVtLlBvc3QuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZVwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LnRpdGxlXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHR2YXIgc2lkZWJhckhlaWdodCwgZm9vdGVySGVpZ2h0OyBzY29wZS50b3BQb3NpdGlvbiA9IDA7XG5cblx0XHRcdC8vU2FmZWx5IGNhbGN1bGF0ZSBlbGVtZW50J3Mgc2l6ZSBhZnRlciBzdHVmZiBoYXZlIGJlZW4gcmVuZGVyZWQhXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNpZGViYXJIZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XG5cdFx0XHRcdGZvb3RlckhlaWdodCA9IGFuZ3VsYXIuZWxlbWVudCgnI2Zvb3RlcicpLm91dGVySGVpZ2h0KCk7XG5cdFx0XHR9LCA1MDApO1xuXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2Nyb2xsQ2hhbmdlJywgKGV2ZW50LCBzY3JvbGxQb3NpdGlvbikgPT4ge1xuXHRcdFx0XHRzY29wZS5uZXdzID0gJHJvb3RTY29wZS5uZXdzO1xuXG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRvY3VtZW50SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCksIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcblx0XHRcdFx0XHRcdG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0KCk7XG5cblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zaXRpb24uc2Nyb2xsaW5nRG93bikge1xuXHRcdFx0XHRcdFx0bGV0IHNjcm9sbERvd25Ub3VjaEJvdHRvbSA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IG9mZnNldC50b3AgKyBzaWRlYmFySGVpZ2h0LFxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEb3duT3ZlckZvb3RlciA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IGRvY3VtZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xuXG5cdFx0XHRcdFx0XHRpZiAoc2Nyb2xsRG93blRvdWNoQm90dG9tICYmICFzY3JvbGxEb3duT3ZlckZvb3Rlcikge1xuXHRcdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCAtIHNpZGViYXJIZWlnaHQgLSBpbml0aWFsVG9wT2Zmc2V0O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24udG9wIDwgb2Zmc2V0LnRvcCAtIGluaXRpYWxUb3BPZmZzZXQpIHtcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGludGVydmFsLCAkdGltZW91dCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBpdGVtczogJz0nIH0sXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsaWdodC1zbGlkZXIge3t3cmFwcGVyQ2xhc3N9fVwiXG5cdFx0XHRuZy1zd2lwZS1sZWZ0PVwic3dpcGVMZWZ0KCRldmVudClcIiBuZy1zd2lwZS1yaWdodD1cInN3aXBlUmlnaHQoJGV2ZW50KVwiPlxuXHRcdFx0PGRpdiBpZD1cImN1cnJlbnRTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBpZD1cInByZXZpb3VzU2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZSBwcmV2aW91c1wiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK3ByZXZpb3VzU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtbmF2aWdhdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtbmV4dFwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtYmFja1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1wb3NpdGlvbnNcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWl0ZW1cIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uaXNBY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiIG5nLWNsaWNrPVwibmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0bGV0ICRhY3RpdmVTbGlkZSA9IGVsZW1lbnQuZmluZCgnI2N1cnJlbnRTbGlkZScpLCAkcHJldmlvdXNTbGlkZSA9IGVsZW1lbnQuZmluZCgnI3ByZXZpb3VzU2xpZGUnKSxcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XG5cblx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2l0ZW1zJywgKCkgPT4ge1xuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xuXG5cdFx0XHRsZXQgbmV4dFNsaWRlID0gZnVuY3Rpb24gKG5leHRJbmRleCkge1xuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXHRcdFx0XHRpZiAoc2NvcGUucHJldmlvdXNTbGlkZSkgc2NvcGUucHJldmlvdXNTbGlkZS5pc0FjdGl2ZSA9IGZhbHNlO1xuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4ICE9IHVuZGVmaW5lZCA/IG5leHRJbmRleCA6IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZUluZGV4IDwgMCkge1xuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gc2NvcGUuaXRlbXMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzY29wZS5hY3RpdmVJbmRleCA+PSBzY29wZS5pdGVtcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZVNsaWRlKSBzY29wZS5hY3RpdmVTbGlkZS5pc0FjdGl2ZSA9IHRydWU7XG5cblx0XHRcdFx0Ly9QbGF5IHRyYW5zaXRpb24gYW5pbWF0aW9uIVxuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzEwMCUnfSk7XG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJGFjdGl2ZVNsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICctMTAwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30pO1xuXHRcdFx0XHRUd2VlbkxpdGUudG8oJGFjdGl2ZVNsaWRlLCAwLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSk7XG5cdFx0XHRcdFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcwJ30pO1xuXG5cdFx0XHRcdC8vUmVzZXQgaW50ZXJ2YWw7XG5cdFx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcblx0XHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5uYXZpZ2F0ZSA9IChpbnN0YW5jZSkgPT4ge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UgIT0gc2NvcGUuYWN0aXZlU2xpZGUpIHtcblx0XHRcdFx0XHRuZXh0U2xpZGUoc2NvcGUuaXRlbXMuaW5kZXhPZihpbnN0YW5jZSkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5zd2lwZUxlZnQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4ICsgMSk7XG5cdFx0XHRzY29wZS5zd2lwZVJpZ2h0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCAtIDEpO1xuXG5cdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcblx0XHR9XG5cdH1cbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkLCBhcGlIb3N0IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBtZXRhU2VydmljZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyB3cmFwcGVyQ2xhc3M6ICdAJywgc3VibWl0VGV4dDogJ0AnIH0sXG5cdFx0dGVtcGxhdGU6IGA8Zm9ybSBuZy1jbGFzcz1cIndyYXBwZXJDbGFzc1wiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XG5cdFx0XHQ8IS0tPGRpdiBjbGFzcz1cImNsb3NlLWNvbW1hbmQgaWNvbi1uYXZpZ2F0aW9uLWNsb3NlXCIgbmctY2xpY2s9XCJjbG9zZUZvcm0oKVwiPjwvZGl2Pi0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cblx0XHRcdFx0PHNwYW4+R+G7jWkgPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4gaG/hurdjIGfhu61pIHRow7RuZyB0aW4gxJHhu4Mgbmjhuq1uPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJI4buNIHbDoCB0w6puKlwiIG5nLW1vZGVsPVwidXNlck5hbWVcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cInVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwixJBp4buHbiB0aG/huqFpKlwiIG5nLW1vZGVsPVwidXNlclBob25lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwidXNlclBob25lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIgbmctbW9kZWw9XCJ1c2VyRW1haWxcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJ1c2VyRW1haWxFcnJvclwiPjwvZGl2PlxuXHRcdFxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiTuG7mWkgZHVuZyBjaGkgdGnhur90XCIgbmctbW9kZWw9XCJ1c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGdvb2dsZVwiIG5nLWNsaWNrPVwiZ29vZ2xlTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICdH4busSSdcIj48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9mb3JtPmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0c2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XG5cdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7IHNjb3BlW2ZpZWxkKydFcnJvciddID0gJyc7IHNjb3BlW2ZpZWxkXSA9ICcnO1x0fSk7XG5cblx0XHRcdHNjb3BlLnJlc2V0Rm9ybSA9ICgpID0+IHtcblx0XHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4gc2NvcGVbZmllbGRdID0gJycpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuY2xvc2VGb3JtID0gKCkgPT4ge1xuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnN1Ym1pdCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRmaWVsZHMuZm9yRWFjaChmaWVsZCA9PiBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnKTtcblxuXHRcdFx0XHRpZiAoc2NvcGUudXNlck5hbWUubGVuZ3RoIDwgMSkgc2NvcGUudXNlck5hbWVFcnJvciA9ICdOaOG6rXAgdMOqbic7XG5cdFx0XHRcdGlmIChzY29wZS51c2VyUGhvbmUubGVuZ3RoIDwgOCkgc2NvcGUudXNlclBob25lRXJyb3IgPSAnU+G7kSDEkWnhu4duIHRob+G6oWkgY2jGsGEgxJHDum5nJztcblxuXHRcdFx0XHRpZiAoc2NvcGUudXNlck5hbWVFcnJvciB8fCBzY29wZS51c2VyUGhvbmVFcnJvcikgcmV0dXJuO1xuXG5cdFx0XHRcdHZhciBsb2NhbFVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl91c2VySW5mb1wiKSksXG5cdFx0XHRcdFx0Zm9ybURhdGEgPSB7XG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcblx0XHRcdFx0XHRzaXRlOiBsb2NhdGlvbi5ob3N0LFxuXHRcdFx0XHRcdGZ1bGxOYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRuYW1lOiBzY29wZS51c2VyTmFtZSxcblx0XHRcdFx0XHRwaG9uZTogc2NvcGUudXNlclBob25lLFxuXHRcdFx0XHRcdGVtYWlsOiBzY29wZS51c2VyRW1haWxcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvL0ZpcmUgQW50cyB0cmFja2luZ0dvYWwgaG9vayFcblx0XHRcdFx0YWR4X2FuYWx5dGljLnRyYWNraW5nR29hbCgnNTc4NjY0NjY4JywgMSwgJ2V2ZW50Jyk7XG5cdFx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXG5cdFx0XHRcdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xuXG5cdFx0XHRcdC8vRmFjZWJvb2sgdHJhY2tpbmcgTGVhZC9Db21wbGV0ZVJlZ2lzdHJhdGlvbiBldmVudFxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ0xlYWQnKTtcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicpO1xuXG5cdFx0XHRcdC8vVHJhY2tpbmcgR29vZ2xlIEFuYWx5dGljIGdvYWwhXG5cdFx0XHRcdGdhKCdzZW5kJywge1xuXHRcdFx0XHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogJ1N1YnNjcmlwdGlvbicsXG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdTdWJtaXQnXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vSW5zdGFudGx5IHJlc2V0IHRoZSBmb3JtIVxuXHRcdFx0XHRzY29wZS5yZXNldEZvcm0oKTtcblx0XHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzdWJzY3JpcHRpb25TZW50Jyk7XG5cblx0XHRcdFx0Ly9TZW5kIGZvcm0gdG8gVHdpbidzIHNlcnZlciFcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2N1c3RvbWVyL2luc2VydC9qc29uYCwge1xuXHRcdFx0XHRcdHBhcmFtczogZm9ybURhdGFcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3N1YnNjcmlwdGlvblN1Y2Nlc3MnKTtcblx0XHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWFpbC9zZW50L2pzb25gLCB7cGFyYW1zOiBmb3JtRGF0YX0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZW1haWwuLi4nLCBkYXRhKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5nb29nbGVMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19nb29nbGVBdXRoQ2xpY2soKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmZhY2Vib29rTG9naW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFudHNfZmJBdXRoQ2xpY2soJ2xvZ2luJyk7XG5cdFx0XHR9O1xuXG5cdFx0XHRnbG9iYWwuZ2V0X2luZm8gPSBmdW5jdGlvbihfdXNlckluZm8pe1xuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHRcdC8vIHVzZXIgaW5mbyBnZXQgaGVyZVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKF91c2VySW5mbywgXCJjYWxsZWQhIVwiKTtcblxuXHRcdFx0XHRcdC8vIGZpbGwgdXNlckluZm8gdG8gRk9STSDEkcSDbmcga8O9XG5cdFx0XHRcdFx0c2NvcGUudXNlck5hbWUgPSBfdXNlckluZm8ubmFtZTtcblx0XHRcdFx0XHRzY29wZS51c2VyUGhvbmUgPSBfdXNlckluZm8ucGhvbmU7XG5cdFx0XHRcdFx0c2NvcGUudXNlckVtYWlsID0gX3VzZXJJbmZvLmVtYWlsIHx8ICcnO1xuXG5cdFx0XHRcdFx0Ly9TdG9yZSBTb2NpYWwgcHJvZmlsZVxuXHRcdFx0XHRcdGlmIChfdXNlckluZm8pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3VzZXJJbmZvXCIsIEpTT04uc3RyaW5naWZ5KF91c2VySW5mbykpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XVxuXG52YXIgZmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnXTsiLCJpbXBvcnQgeyBnZW5lcmF0ZU51bWJlclVVSUQsIGFwaUhvc3QgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5leHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckdGltZW91dCcsICckaW50ZXJ2YWwnLCAnJHdpbmRvdycsICckaHR0cCcsICduZ1Byb2dyZXNzRmFjdG9yeScsICdtZXRhU2VydmljZSddO1xuXHRkZXZlbG9wbWVudE1vZGUgPSBmYWxzZTtcblx0cmVhZHkgPSB0cnVlO1xuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRzdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5LCBtZXRhU2VydmljZSkge1xuXHRcdCRyb290U2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XG5cdFx0Y29uc29sZS5sb2cobWV0YVNlcnZpY2UuY29uZmlncyk7XG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSBuZ1Byb2dyZXNzRmFjdG9yeS5jcmVhdGVJbnN0YW5jZSgpO1xuXHRcdHRoaXMucHJvZ3Jlc3Muc2V0Q29sb3IoJyNGQTgzMjInKTtcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcblxuXHRcdGdsb2JhbC50b2dnbGVQb3B1cCA9IChuZXdWYWwpID0+IHtcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gbmV3VmFsID8gbmV3VmFsIDogIXRoaXMuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dGhpcy50b2dnbGVTdWNjZXNzID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZSwgMzAwMCk7XG5cdFx0fTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCdzdWJzY3JpcHRpb25TZW50JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdH0pO1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJ3N1YnNjcmlwdGlvblN1Y2Nlc3MnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlLCAzMDAwKTtcblx0XHR9KTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcblx0XHR9KTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnJlYWR5ID0gdHJ1ZSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Zvb3RlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZvb3RlcnMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICduZXdzJywgbGltaXQ6IDQgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLm5ld3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IDA7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbENoYW5nZScsIHt0b3A6IHRvcFNjcm9sbCwgc2Nyb2xsaW5nRG93bjogdG9wU2Nyb2xsID4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb259KTtcblx0XHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gdG9wU2Nyb2xsO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpemVDaGFuZ2UnLCB7XG5cdFx0XHRcdGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpLFxuXHRcdFx0XHR3aWR0aDogJCh3aW5kb3cpLndpZHRoKClcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBhcGlIb3N0IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XG5cblx0ZmVhdHVyZXMgPSBbXTtcblx0c2xpZGVycyA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xuXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG1ldGFTZXJ2aWNlLmxpbmtzWzBdOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBhbGlhczogXCJ0cmFuZy1jaHVcIiB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW2RhdGEucmVzdWx0c1swXS5QYWdlXTtcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Jhbm5lcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZlYXR1cmVzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnSG9tZVNsaWRlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLnNsaWRlcnMgPSBkYXRhLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xuXHRcdFx0XHRyZXR1cm4gaXRlbS5Qb3N0O1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLnNsaWRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDcwO1xuXHRcdCRyb290U2NvcGUuJG9uKCdzaXplQ2hhbmdlJywgKGV2ZW50LCBzaXplKSA9PiB7XG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSBzaXplLmhlaWdodCA+IDU3MCA/IHNpemUuaGVpZ2h0IC0gNzAgOiA1MDA7XG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9XG59IiwiaW1wb3J0IHsgYXBpSG9zdCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNsYXNzIG5ld3NDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckaHR0cCcsICAnJHN0YXRlJ107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUpIHtcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XG5cdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG51bGw7XG5cblx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0dGhpcy5zaW5nbGVNb2RlID0gdGhpcy5wYWdlQWxpYXMgIT09ICcnO1xuXG5cdFx0aWYgKHRoaXMuc2luZ2xlTW9kZSkge1xuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3Bvc3QvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBhbGlhczogdGhpcy5wYWdlQWxpYXMgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XG5cdFx0XHRcdHRoaXMuYWN0aXZlTmV3cyA9IGRhdGEucmVzdWx0c1swXS5Qb3N0O1xuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcdHBhcmFtczogeyB0eXBlOiAnbmV3cycgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XG5cdFx0XHRcdHRoaXMuYWxsTmV3cyA9IGRhdGEucmVzdWx0cztcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IGFwaUhvc3QgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkZWxlbWVudCwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XG5cdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xuXG5cdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudEdyb3VwID0gdGhpcy5maW5kUGFyZW50R3JvdXAocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyksXG5cdFx0XHRwcmV2aW91c0dyb3VwID0gJHJvb3RTY29wZS5hY3RpdmVHcm91cDsgJHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IHBhcmVudEdyb3VwO1xuXG5cdFx0aWYocGFnZUFsaWFzID09ICd0cmFuZy1jaHUnKSB7ICRzdGF0ZS5nbygnaG9tZScpOyByZXR1cm47IH1cblxuXHRcdC8vS2ljayBiYWNrIHRvIHRoZSBIb21lIHBhZ2UgaWYgaXQncyBub3QgYSBsaW5rIGluIG1lbnVcblx0XHRpZiAoIXBhcmVudEdyb3VwIHx8ICFwYXJlbnRHcm91cC5jaGlsZHJlbikge1xuXHRcdFx0JHN0YXRlLmdvKCdob21lJyk7XG5cdFx0fSBlbHNlIGlmIChwYXJlbnRHcm91cCA9PT0gcHJldmlvdXNHcm91cCkgeyAvL0lmIHRoZSBwYXJlbnQgZ3JvdXAgaXMgYWxyZWFkeSBhY3RpdmUgPT4gc2Nyb2xsIHRvIHRoZSBjaGlsZCBzZWN0aW9uIVxuXHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XG5cdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xuXHRcdFx0fSwgODAwKTtcblx0XHR9IGVsc2UgeyAvL0ZpbmFsbHksIGxvYWQgdGhlIHBhZ2UgPT4gc2V0IHBhZ2UncyBjaGlsZHJlbiBjb250ZW50IVxuXHRcdFx0bGV0IGxvYWRlZENvdW50ID0gMDsgJHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xuXHRcdFx0JHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgLy9SZXNldCB0aGUgc2Nyb2xsIGlmIGxvYWRpbmcgZnJvbSB0aGUgYmVnaW5uaW5nIVxuXHRcdFx0cGFyZW50R3JvdXAuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0ge307XG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wYWdlL2dldC9qc29uYCwgeyBwYXJhbXM6IHsgYWxpYXM6IGNoaWxkLmFsaWFzIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0XHRsZXQgY2hpbGRSZXN1bHQgPSBkYXRhLnJlc3VsdHNbMF07XG5cdFx0XHRcdFx0aWYgKGNoaWxkUmVzdWx0ICYmIGNoaWxkUmVzdWx0LlBhZ2UpIHtcblx0XHRcdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0gY2hpbGRSZXN1bHQuUGFnZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pLmZpbmFsbHkoKCkgPT4ge1xuXHRcdFx0XHRcdGxvYWRlZENvdW50Kys7XG5cblx0XHRcdFx0XHRpZiAobG9hZGVkQ291bnQgPj0gcGFyZW50R3JvdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvL1Njcm9sbCBhZnRlciAxIHNlY29uZCAoYWZ0ZXIgYWxsIGNvbnRlbnQgYXJlIHJlYWR5IGZyb20gc2VydmVyISlcblx0XHRcdFx0XHRcdC8vIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxuXHRcdFx0XHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUFsaWFzfWApLm9mZnNldCgpLnRvcCAtIDUwO1xuXHRcdFx0XHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcblx0XHRcdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGZpbmRQYXJlbnRHcm91cCAoYWxpYXMsIGxpbmtzKSB7XG5cdFx0Zm9yIChsZXQgbGluayBvZiBsaW5rcykge1xuXHRcdFx0aWYgKGxpbmsuYWxpYXMgJiYgbGluay5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBsaW5rO1xuXG5cdFx0XHRpZiAobGluay5jaGlsZHJlbikge1xuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBsaW5rLmNoaWxkcmVuKSB7XG5cdFx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzICYmIGNoaWxkLmFsaWFzID09IGFsaWFzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbGluaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0J107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdFx0dGhpcy4kc3RhdGUgPSAkc3RhdGU7XG5cdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5za2lwSW50cm8oKSwgMCk7XG5cdH1cblxuXHRza2lwSW50cm8gKCkge1xuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xuXHR9XG59IiwiaW1wb3J0IHthcHBsaWNhdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyXCI7XG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gXCIuL3JvdXRlckNvbmZpZ1wiO1xuXG5pbXBvcnQge21haW5Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XG5pbXBvcnQge3BhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyXCI7XG5pbXBvcnQge25ld3NDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL25ld3NDb250cm9sbGVyXCI7XG5pbXBvcnQge3NwbGFzaENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlclwiO1xuXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IG5hdmlnYXRpb25MaW5rIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uTGlua1wiO1xuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnQvZm9vdGVyXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnQvc2lkZWJhclwiO1xuaW1wb3J0IHN1YnNjcmlwdGlvbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm1cIjtcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9jb21wb25lbnQvcG9wdXBcIjtcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xuaW1wb3J0IG5ld3NBcmVhIGZyb20gXCIuL2NvbXBvbmVudC9uZXdzQXJlYVwiO1xuaW1wb3J0IG1ldGFTZXJ2aWNlIGZyb20gXCIuL21ldGFTZXJ2aWNlXCI7XG5pbXBvcnQgcmVnaXN0ZXJGaWx0ZXIgZnJvbSBcIi4vdXRpbHMvZmlsdGVyXCI7XG5cbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnbmdQcm9ncmVzcycsICduZ1RvdWNoJywgJ25nUGFyYWxsYXgnLCAnYW5ndWxhci1zcGlua2l0J10pXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxuXHQuY29udHJvbGxlcignYXBwQ3RybCcsIGFwcGxpY2F0aW9uQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbmV3c0N0cmwnLCBuZXdzQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxuXHQuc2VydmljZSgnbWV0YVNlcnZpY2UnLCBtZXRhU2VydmljZSlcblx0LmRpcmVjdGl2ZSgncG9wdXAnLCBwb3B1cClcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTaWRlYmFyJywgc2lkZWJhcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRGb290ZXInLCBmb290ZXIpXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2xpZGVyJywgc2xpZGVyKVxuXHQuZGlyZWN0aXZlKCduZXdzQXJlYScsIG5ld3NBcmVhKVxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XG5cbnJlZ2lzdGVyRmlsdGVyKEFwcCk7XG5cbkFwcC5ydW4oKCkgPT4ge1xuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xufSk7XG5cbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcblx0JyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xuXHRcdH07XG5cdH1cbl0pO1xuXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQgeyBhcGlIb3N0IH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCkge1xuXHRsZXQgY29uZmlnc1Byb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21lbnUvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBzaXRlOiBsb2NhdGlvbi5ob3N0IH0gfSkuc3VjY2VzcygoZGF0YSkgPT4ge1xuXHRcdFx0dGhpcy5saW5rcyA9IGRhdGEucmVzdWx0czsgcmVzb2x2ZSh0aGlzLmxpbmtzKTtcblx0XHR9KTtcblx0fSk7XG5cblx0bGV0IG5hdmlnYXRpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdCRodHRwLmdldCgnL2NvbmZpZ3MnKS5zdWNjZXNzKChkYXRhKSA9Pntcblx0XHRcdHRoaXMuY29uZmlncyA9IGRhdGE7IHJlc29sdmUodGhpcy5jb25maWdzKTtcblx0XHR9KTtcblx0fSk7XG5cblx0dGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFByb21pc2UuYWxsKFtuYXZpZ2F0aW9uUHJvbWlzZSwgY29uZmlnc1Byb21pc2VdKS50aGVuKHZhbHVlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmluZm8oXCJtZXRhU2VydmljZSByZWFkeSFcIiwgdGhpcy5saW5rcywgdGhpcy5jb25maWdzKTtcblx0XHRcdHJlc29sdmUoe2xpbmtzOiB0aGlzLmxpbmtzLCBjb25maWdzOiB0aGlzLmNvbmZpZ3N9KTtcblx0XHR9KTtcblx0fSk7XG59XTsiLCJjb25zb2xlLmxvZyhcIlRoaXMgaXMgZ29sZGVuIHJpdmVyISEhXCIpO1xuXG4vL0FuYWx5dGljcyBjb2RlLi4uXG4vL0dvb2dsZSA9PlxuKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1xuXHRcdChpW3JdLnE9aVtyXS5xfHxbXSkucHVzaChhcmd1bWVudHMpfSxpW3JdLmw9MSpuZXcgRGF0ZSgpO2E9cy5jcmVhdGVFbGVtZW50KG8pLFxuXHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG59KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2h0dHBzOi8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsJ2dhJyk7XG5cbmdhKCdjcmVhdGUnLCAnVUEtNzc5MDE5MTQtMScsICdhdXRvJyk7XG5nYSgnc2VuZCcsICdwYWdldmlldycpO1xuXG4vL0ZhY2Vib29rIGVzc2VudGlhbCA9PlxuKGZ1bmN0aW9uKGQsIHMsIGlkKSB7XG5cdHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcblx0aWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm47XG5cdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuXHRqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzI3hmYm1sPTEmdmVyc2lvbj12Mi42JmFwcElkPTEwODU5Nzc3OTE2Mjg0MVwiO1xuXHRmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG59KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xuXG4vL0ZhY2Vib29rIHBpeGVsID0+XG4hZnVuY3Rpb24oZixiLGUsdixuLHQscyl7aWYoZi5mYnEpcmV0dXJuO249Zi5mYnE9ZnVuY3Rpb24oKXtuLmNhbGxNZXRob2Q/XG5cdG4uY2FsbE1ldGhvZC5hcHBseShuLGFyZ3VtZW50cyk6bi5xdWV1ZS5wdXNoKGFyZ3VtZW50cyl9O2lmKCFmLl9mYnEpZi5fZmJxPW47XG5cdG4ucHVzaD1uO24ubG9hZGVkPSEwO24udmVyc2lvbj0nMi4wJztuLnF1ZXVlPVtdO3Q9Yi5jcmVhdGVFbGVtZW50KGUpO3QuYXN5bmM9ITA7XG5cdHQuc3JjPXY7cz1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpWzBdO3MucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxzKX0od2luZG93LFxuXHRkb2N1bWVudCwnc2NyaXB0JywnaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9mYmV2ZW50cy5qcycpO1xuXG5mYnEoJ2luaXQnLCAnNTc4MTE1MjMyMzM4MzMxJyk7XG5mYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcbiIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5cbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLFxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XG5cdFx0JHN0YXRlUHJvdmlkZXJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpXG5cdFx0XHQuc3RhdGUoJ25ld3MnLCBuZXdzUm91dGUpO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xuXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xuXHR9XG5dO1xuXG52YXIgc3BsYXNoUm91dGUgPSB7XG5cdHVybDogJy9zcGxhc2gnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG1haW5Sb3V0ZSA9IHtcblx0dXJsOiAnLycsXG5cdHJlc29sdmU6IHtcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xuXHRcdH1cblx0fSxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIHBhZ2VSb3V0ZSA9IHtcblx0dXJsOiAnLzphbGlhcycsXG5cdHJlc29sdmU6IHtcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xuXHRcdH1cblx0fSxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG5ld3NSb3V0ZSA9IHtcblx0dXJsOiAnL3Rpbi10dWMvOmFsaWFzJyxcblx0cmVzb2x2ZToge1xuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XG5cdFx0fVxuXHR9LFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBuZXdzJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnbmV3c0N0cmwgYXMgbmV3c0N0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcblx0bW9kdWxlSW5zdGFuY2Vcblx0XHQuZmlsdGVyKCduaWNlRGF0ZScsIG5pY2VEYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pY2VEYXRlICgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcblx0XHRyZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xuXHR9O1xufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XG5cdH1cblxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcblx0fVxuXG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+Jylcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcblx0XHR3ID0gby53aWR0aCgpO1xuXG5cdG8ucmVtb3ZlKCk7XG5cblx0cmV0dXJuIHc7XG59O1xuXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
