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
				adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId, 1, 'event');
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
var apiHost = exports.apiHost = 'http://128.199.227.132'; //http://103.56.157.66/realestate';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L25ld3NBcmVhLmpzIiwiYXBwL2NvbXBvbmVudC9wb3B1cC5qcyIsImFwcC9jb21wb25lbnQvc2lkZWJhci5qcyIsImFwcC9jb21wb25lbnQvc2xpZGVyLmpzIiwiYXBwL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtLmpzIiwiYXBwL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9uZXdzQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9tZXRhU2VydmljZS5qcyIsImFwcC9wYXRjaGVzL2dvbGRlblJpdmVyLmpzIiwiYXBwL3JvdXRlckNvbmZpZy5qcyIsImFwcC91dGlscy9maWx0ZXIuanMiLCJhcHAvdXRpbHMvaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxPQUFELEVBQVUsVUFBVSxLQUFWLEVBQWlCO0FBQ3pDLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTiwwZEFKTTtBQWdCTixRQUFNLGNBQVUsS0FBVixFQUFpQixPQUFqQixFQUEwQixLQUExQixFQUFpQyxDQUV0QztBQWxCSyxFQUFQO0FBb0JBLENBckJjLEM7Ozs7Ozs7O2tCQ0FBLENBQUMsUUFBRCxFQUFXLGFBQVgsRUFBMEIsVUFBVSxNQUFWLEVBQWtC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LEVBQXFDO0FBQzNDLEtBQUksU0FBUyxFQUFiO0FBQ0EsTUFBSSxJQUFJLElBQUksQ0FBWixFQUFlLElBQUksTUFBbkIsRUFBMkIsR0FBM0IsRUFBZ0M7QUFDL0IsWUFBVSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXNCLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLENBQXpCLENBQXRCLENBQVY7QUFDQTs7QUFFRCxRQUFPLE1BQVA7QUFDQTs7QUFFTSxTQUFTLFNBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDM0MsS0FBSSxPQUFPLFNBQVAsSUFBb0IsU0FBUyxHQUFqQyxFQUFzQyxPQUFPLEdBQVA7QUFDdEMsS0FBSSxPQUFPLFNBQVAsSUFBb0IsU0FBUyxHQUFqQyxFQUFzQyxPQUFPLEdBQVA7QUFDdEMsUUFBTyxLQUFQO0FBQ0E7O0FBRUQsT0FBTyxTQUFQLENBQWlCLEtBQWpCLEdBQXlCLFVBQVMsSUFBVCxFQUFlO0FBQ3ZDLEtBQUksSUFBSSxRQUFRLFlBQWhCO0tBQ0MsSUFBSSxFQUFFLFVBQVUsSUFBVixHQUFpQixRQUFuQixFQUNGLEdBREUsQ0FDRSxFQUFDLFlBQVksVUFBYixFQUF5QixTQUFTLE1BQWxDLEVBQTBDLGVBQWUsUUFBekQsRUFBbUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtLQUlDLElBQUksRUFBRSxLQUFGLEVBSkw7O0FBTUEsR0FBRSxNQUFGOztBQUVBLFFBQU8sQ0FBUDtBQUNBLENBVkQ7O0FBWUEsT0FBTyxJQUFQLEdBQWMsa0JBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsIGZ1bmN0aW9uICgkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzcz1cImZvb3RlclwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2xcIiBuZy1yZXBlYXQ9XCJjb2x1bW4gaW4gY29sdW1uc1wiIG5nLWJpbmQtaHRtbD1cImNvbHVtbi5Qb3N0LmNvbnRlbnQgfCB1bnNhZmVcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxuXHRcdFx0XHQ8c3Bhbj5EZXNpZ25lZCBieTwvc3Bhbj5cblx0XHRcdCAgPGEgaHJlZj1cImh0dHA6Ly90d2luLnZuXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMkVCM0QzO1wiIHRhcmdldD1cIl9ibGFua1wiPlRXSU4gU29mdHdhcmUgU29sdXRpb25zPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHN0YXRlLCBtZXRhU2VydmljZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0cmVhZHk6ICc9Jyxcblx0XHRcdGJ1cmdlckFjdGl2ZTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLXdyYXBwZXJcIiBuZy1jbGFzcz1cIntidXJnZXJpbmc6IGJ1cmdlckFjdGl2ZSwgcmVhZHk6IHJlYWR5fVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCIgdWktc3JlZj1cImhvbWVcIj48L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS1hY3RpdmF0b3IgaWNvbi1uYXZpZ2F0aW9uLW1lbnVcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVQb3B1cCgpXCI+xJDEgk5HIEvDnTwvZGl2PlxuXHRcdFx0XHRcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cIm5ld3NcIj5UaW4gdOG7qWM8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGJ1cmdlckFjdGl2ZX1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51XCI+XG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+LS0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgbmctYmluZD1cIml0ZW0ubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxuXHRcdFx0XHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHthbGlhczogY2hpbGQuYWxpYXN9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbmV3c0FjdGl2ZUNsYXNzKCl9XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgdWktc3JlZj1cIm5ld3NcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+VGluIHThu6ljPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5saW5rcyA9IG1ldGFTZXJ2aWNlLmxpbmtzO1xuXG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UuYWxpYXMpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXMpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzY29wZS50b2dnbGVCdXJnZXIoKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLm5ld3NBY3RpdmVDbGFzcyA9ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICduZXdzJztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dOyIsImxldCBtYWluRm9udCA9IFwiMTRweCAnT3BlbiBTYW5zJ1wiLCBjaGlsZEZvbnQgPSBcIjEzcHggJ09wZW4gU2FucydcIiwgcGFkZGluZyA9IDgwO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwLCAkcm9vdFNjb3BlLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7XG5cdFx0XHRpbnN0YW5jZTogJz0nXG5cdFx0fSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1zdHlsZT1cInt3aWR0aDogbWF4V2lkdGgrJ3B4J31cIiBuZy1jbGFzcz1cInthY3RpdmU6IGxpbmtBY3RpdmVDbGFzcyhpbnN0YW5jZSl9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1uYXZpZ2F0aW9ucyBpY29uLW5hdmlnYXRpb24tYXJyb3ctZHJvcC11cFwiIG5nLWlmPVwiaW5zdGFuY2UuY2hpbGRyZW5cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJsaW5rLm5hbWVcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGluc3RhbmNlLmNoaWxkcmVuXCJcblx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGxpbmsuYWxpYXN9KVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcblx0XHRcdHNjb3BlLm1heFdpZHRoID0gc2NvcGUuaW5zdGFuY2UubmFtZS53aWR0aChtYWluRm9udCkgKyBwYWRkaW5nO1xuXG5cdFx0XHRpZiAoc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4gJiYgc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XG5cdFx0XHRcdHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xuXHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xuXHRcdFx0XHRcdFx0c2NvcGUubWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwICYmICRyb290U2NvcGUuYWN0aXZlR3JvdXAuaWQgPT09IGluc3RhbmNlLmlkO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuYWxpYXN9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXN9KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlY3Rpb24tY2FudmFzIHRvcC1zZXBhcmF0ZWQgbmV3cy1hcmVhXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1oZWFkaW5nIHNlY3Rpb25cIj48c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPlRJTiBU4buoQzwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXJvdyBxdWF0cm9cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uIGxpZ2h0LWNvbHVtbiBjbGljay1hYmxlXCIgbmctcmVwZWF0PVwibmV3cyBpbiBsYXRlc3ROZXdzXCIgdWktc3JlZj1cIm5ld3Moe2lkOiBuZXdzLlBvc3QuaWR9KVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3MuUG9zdC50aXRsZVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRodW1iLWltYWdlLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImltYWdlIGltYWdlLWhvdmVyLWVmZmVjdC16b29tLTEyMFwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK25ld3MuUG9zdC5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIG5nLWJpbmQ9XCJuZXdzLlBvc3QuZGVzY3JpcHRpb25cIj48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdHNjb3BlLmxhdGVzdE5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxuXHRcdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1dIiwiY29uc3QgaW5pdGlhbFRvcE9mZnNldCA9IDEyMTtcblxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIiBuZy1zdHlsZT1cInt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnK3RvcFBvc2l0aW9uKydweCknfVwiPlxuXHRcdFx0PHN1YnNjcmlwdGlvbi1mb3JtIHdyYXBwZXItY2xhc3M9XCJzdWJzY3JpcHRpb24tZm9ybSBzaWRlYmFyXCI+PC9zdWJzY3JpcHRpb24tZm9ybT5cblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic21hbGwtYmFubmVyXCI+PC9kaXY+LS0+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZWJhci1uZXdzXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+VGluIHThu6ljPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZXdzLXN1bW1hcnlcIiBuZy1yZXBlYXQ9XCJuZXdzSXRlbSBpbiBuZXdzXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiBuZXdzSXRlbS5Qb3N0LmFsaWFzfSlcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2VcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIiBuZy1iaW5kPVwibmV3c0l0ZW0uUG9zdC50aXRsZVwiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0dmFyIHNpZGViYXJIZWlnaHQsIGZvb3RlckhlaWdodDsgc2NvcGUudG9wUG9zaXRpb24gPSAwO1xuXG5cdFx0XHQvL1NhZmVseSBjYWxjdWxhdGUgZWxlbWVudCdzIHNpemUgYWZ0ZXIgc3R1ZmYgaGF2ZSBiZWVuIHJlbmRlcmVkIVxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzaWRlYmFySGVpZ2h0ID0gZWxlbWVudC5vdXRlckhlaWdodCgpO1xuXHRcdFx0XHRmb290ZXJIZWlnaHQgPSBhbmd1bGFyLmVsZW1lbnQoJyNmb290ZXInKS5vdXRlckhlaWdodCgpO1xuXHRcdFx0fSwgNTAwKTtcblxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgc2Nyb2xsUG9zaXRpb24pID0+IHtcblx0XHRcdFx0c2NvcGUubmV3cyA9ICRyb290U2NvcGUubmV3cztcblxuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHRcdGxldCBkb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpLCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXG5cdFx0XHRcdFx0XHRvZmZzZXQgPSBlbGVtZW50Lm9mZnNldCgpO1xuXG5cdFx0XHRcdFx0aWYgKHNjcm9sbFBvc2l0aW9uLnNjcm9sbGluZ0Rvd24pIHtcblx0XHRcdFx0XHRcdGxldCBzY3JvbGxEb3duVG91Y2hCb3R0b20gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBvZmZzZXQudG9wICsgc2lkZWJhckhlaWdodCxcblx0XHRcdFx0XHRcdFx0c2Nyb2xsRG93bk92ZXJGb290ZXIgPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBkb2N1bWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcblxuXHRcdFx0XHRcdFx0aWYgKHNjcm9sbERvd25Ub3VjaEJvdHRvbSAmJiAhc2Nyb2xsRG93bk92ZXJGb290ZXIpIHtcblx0XHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgLSBzaWRlYmFySGVpZ2h0IC0gaW5pdGlhbFRvcE9mZnNldDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uLnRvcCA8IG9mZnNldC50b3AgLSBpbml0aWFsVG9wT2Zmc2V0KSB7XG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJGludGVydmFsJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgaXRlbXM6ICc9JyB9LFxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGlnaHQtc2xpZGVyIHt7d3JhcHBlckNsYXNzfX1cIlxuXHRcdFx0bmctc3dpcGUtbGVmdD1cInN3aXBlTGVmdCgkZXZlbnQpXCIgbmctc3dpcGUtcmlnaHQ9XCJzd2lwZVJpZ2h0KCRldmVudClcIj5cblx0XHRcdDxkaXYgaWQ9XCJjdXJyZW50U2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK2FjdGl2ZVNsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cblx0XHRcdDxkaXYgaWQ9XCJwcmV2aW91c1NsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGUgcHJldmlvdXNcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytwcmV2aW91c1NsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLW5hdmlnYXRpb25cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLW5leHRcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLWJhY2tcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1pdGVtXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmlzQWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIiBuZy1jbGljaz1cIm5hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcblx0XHRcdGxldCAkYWN0aXZlU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNjdXJyZW50U2xpZGUnKSwgJHByZXZpb3VzU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNwcmV2aW91c1NsaWRlJyksXG5cdFx0XHRcdGVhc2VFZmZlY3QgPSBTaW5lLmVhc2VJbiwgdHJhbnNpdGlvblRpbWUgPSAyO1xuXG5cdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XG5cdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpdGVtcycsICgpID0+IHtcblx0XHRcdFx0bmV4dFNsaWRlKDApO1xuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcblxuXHRcdFx0bGV0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcblx0XHRcdFx0c2NvcGUucHJldmlvdXNTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcblx0XHRcdFx0aWYgKHNjb3BlLnByZXZpb3VzU2xpZGUpIHNjb3BlLnByZXZpb3VzU2xpZGUuaXNBY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IG5leHRJbmRleCAhPSB1bmRlZmluZWQgPyBuZXh0SW5kZXggOiBzY29wZS5hY3RpdmVJbmRleCArIDE7XG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVJbmRleCA8IDApIHtcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IHNjb3BlLml0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuYWN0aXZlSW5kZXggPj0gc2NvcGUuaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVTbGlkZSkgc2NvcGUuYWN0aXZlU2xpZGUuaXNBY3RpdmUgPSB0cnVlO1xuXG5cdFx0XHRcdC8vUGxheSB0cmFuc2l0aW9uIGFuaW1hdGlvbiFcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRhY3RpdmVTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnLTEwMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9KTtcblx0XHRcdFx0VHdlZW5MaXRlLnRvKCRhY3RpdmVTbGlkZSwgMCwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30pO1xuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KTtcblxuXHRcdFx0XHQvL1Jlc2V0IGludGVydmFsO1xuXHRcdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XG5cdFx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUubmF2aWdhdGUgPSAoaW5zdGFuY2UpID0+IHtcblx0XHRcdFx0aWYgKGluc3RhbmNlICE9IHNjb3BlLmFjdGl2ZVNsaWRlKSB7XG5cdFx0XHRcdFx0bmV4dFNsaWRlKHNjb3BlLml0ZW1zLmluZGV4T2YoaW5zdGFuY2UpKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuc3dpcGVMZWZ0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCArIDEpO1xuXHRcdFx0c2NvcGUuc3dpcGVSaWdodCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggLSAxKTtcblxuXHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XG5cdFx0fVxuXHR9XG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCwgYXBpSG9zdCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgd3JhcHBlckNsYXNzOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJ3cmFwcGVyQ2xhc3NcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiY2xvc2VGb3JtKClcIj48L2Rpdj4tLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdDxzcGFuPkfhu41pIDwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cblx0XHRcdFx0PHNwYW4+IGhv4bq3YyBn4butaSB0aMO0bmcgdGluIMSR4buDIG5o4bqtbjwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+QsOBTyBHScOBPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj504burPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5DSOG7piDEkOG6plUgVMavPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiSOG7jSB2w6AgdMOqbipcIiBuZy1tb2RlbD1cInVzZXJOYW1lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyTmFtZUVycm9yXCIgbmctaWY9XCJ1c2VyTmFtZUVycm9yXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIsSQaeG7h24gdGhv4bqhaSpcIiBuZy1tb2RlbD1cInVzZXJQaG9uZVwiLz5cblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwidXNlclBob25lRXJyb3JcIiBuZy1pZj1cInVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiIG5nLW1vZGVsPVwidXNlckVtYWlsXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyRW1haWxFcnJvclwiIG5nLWlmPVwidXNlckVtYWlsRXJyb3JcIj48L2Rpdj5cblx0XHRcblx0XHRcdDwhLS08dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cIk7hu5lpIGR1bmcgY2hpIHRp4bq/dFwiIG5nLW1vZGVsPVwidXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZmFjZWJvb2tcIiBuZy1jbGljaz1cImZhY2Vib29rTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAnR+G7rEknXCI+PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdDwvZm9ybT5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xuXHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4geyBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnOyBzY29wZVtmaWVsZF0gPSAnJztcdH0pO1xuXG5cdFx0XHRzY29wZS5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkXSA9ICcnKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmNsb3NlRm9ybSA9ICgpID0+IHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5zdWJtaXQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4gc2NvcGVbZmllbGQrJ0Vycm9yJ10gPSAnJyk7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJOYW1lLmxlbmd0aCA8IDEpIHNjb3BlLnVzZXJOYW1lRXJyb3IgPSAnTmjhuq1wIHTDqm4nO1xuXHRcdFx0XHRpZiAoc2NvcGUudXNlclBob25lLmxlbmd0aCA8IDgpIHNjb3BlLnVzZXJQaG9uZUVycm9yID0gJ1Phu5EgxJFp4buHbiB0aG/huqFpIGNoxrBhIMSRw7puZyc7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJOYW1lRXJyb3IgfHwgc2NvcGUudXNlclBob25lRXJyb3IpIHJldHVybjtcblxuXHRcdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxuXHRcdFx0XHRcdGZvcm1EYXRhID0ge1xuXHRcdFx0XHRcdC4uLmxvY2FsVXNlckluZm8sXG5cdFx0XHRcdFx0c2l0ZTogbG9jYXRpb24uaG9zdCxcblx0XHRcdFx0XHRmdWxsTmFtZTogc2NvcGUudXNlck5hbWUsXG5cdFx0XHRcdFx0bmFtZTogc2NvcGUudXNlck5hbWUsXG5cdFx0XHRcdFx0cGhvbmU6IHNjb3BlLnVzZXJQaG9uZSxcblx0XHRcdFx0XHRlbWFpbDogc2NvcGUudXNlckVtYWlsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly9GaXJlIEFudHMgdHJhY2tpbmdHb2FsIGhvb2shXG5cdFx0XHRcdGFkeF9hbmFseXRpYy50cmFja2luZ0dvYWwobWV0YVNlcnZpY2UuY29uZmlncy5hbnRzUmVnaXN0ZXJHb2FsSWQsIDEsICdldmVudCcpO1xuXHRcdFx0XHQvL1NlbmQgZm9ybSBpbmZvcm1hdGlvbiB0byBBbnRzIVxuXHRcdFx0XHRhbnRzX3VzZXJJbmZvTGlzdGVuZXIoZm9ybURhdGEsIGZhbHNlLCB0cnVlKTtcblxuXHRcdFx0XHQvL0ZhY2Vib29rIHRyYWNraW5nIExlYWQvQ29tcGxldGVSZWdpc3RyYXRpb24gZXZlbnRcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdMZWFkJyk7XG5cdFx0XHRcdGZicSgndHJhY2snLCAnQ29tcGxldGVSZWdpc3RyYXRpb24nKTtcblxuXHRcdFx0XHQvL1RyYWNraW5nIEdvb2dsZSBBbmFseXRpYyBnb2FsIVxuXHRcdFx0XHRnYSgnc2VuZCcsIHtcblx0XHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxuXHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6ICdTdWJzY3JpcHRpb24nLFxuXHRcdFx0XHRcdGV2ZW50QWN0aW9uOiAnU3VibWl0J1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvL0luc3RhbnRseSByZXNldCB0aGUgZm9ybSFcblx0XHRcdFx0c2NvcGUucmVzZXRGb3JtKCk7XG5cdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc3Vic2NyaXB0aW9uU2VudCcpO1xuXG5cdFx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9jdXN0b21lci9pbnNlcnQvanNvbmAsIHtcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzdWJzY3JpcHRpb25TdWNjZXNzJyk7XG5cdFx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21haWwvc2VudC9qc29uYCwge3BhcmFtczogZm9ybURhdGF9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VtYWlsLi4uJywgZGF0YSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZ29vZ2xlTG9naW4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFudHNfZ29vZ2xlQXV0aENsaWNrKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2ZiQXV0aENsaWNrKCdsb2dpbicpO1xuXHRcdFx0fTtcblxuXHRcdFx0Z2xvYmFsLmdldF9pbmZvID0gZnVuY3Rpb24oX3VzZXJJbmZvKXtcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0XHQvLyB1c2VyIGluZm8gZ2V0IGhlcmVcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhfdXNlckluZm8sIFwiY2FsbGVkISFcIik7XG5cblx0XHRcdFx0XHQvLyBmaWxsIHVzZXJJbmZvIHRvIEZPUk0gxJHEg25nIGvDvVxuXHRcdFx0XHRcdHNjb3BlLnVzZXJOYW1lID0gX3VzZXJJbmZvLm5hbWU7XG5cdFx0XHRcdFx0c2NvcGUudXNlclBob25lID0gX3VzZXJJbmZvLnBob25lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJFbWFpbCA9IF91c2VySW5mby5lbWFpbCB8fCAnJztcblxuXHRcdFx0XHRcdC8vU3RvcmUgU29jaWFsIHByb2ZpbGVcblx0XHRcdFx0XHRpZiAoX3VzZXJJbmZvKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl91c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeShfdXNlckluZm8pKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxufV1cblxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJ107IiwiaW1wb3J0IHsgZ2VuZXJhdGVOdW1iZXJVVUlELCBhcGlIb3N0IH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcblxuZXhwb3J0IGNsYXNzIGFwcGxpY2F0aW9uQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJHRpbWVvdXQnLCAnJGludGVydmFsJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbmdQcm9ncmVzc0ZhY3RvcnknLCAnbWV0YVNlcnZpY2UnXTtcblx0ZGV2ZWxvcG1lbnRNb2RlID0gZmFsc2U7XG5cdHJlYWR5ID0gdHJ1ZTtcblx0YWN0aXZlUGFnZSA9ICdzcGxhc2gnO1xuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcblx0c3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcblx0c3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQsICRpbnRlcnZhbCwgJHdpbmRvdywgJGh0dHAsICBuZ1Byb2dyZXNzRmFjdG9yeSwgbWV0YVNlcnZpY2UpIHtcblx0XHQkcm9vdFNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xuXHRcdGNvbnNvbGUubG9nKG1ldGFTZXJ2aWNlLmNvbmZpZ3MpO1xuXHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbXTtcblx0XHR0aGlzLnByb2dyZXNzID0gbmdQcm9ncmVzc0ZhY3RvcnkuY3JlYXRlSW5zdGFuY2UoKTtcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XG5cdFx0Z2xvYmFsLiRodHRwID0gJGh0dHA7XG5cblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAobmV3VmFsKSA9PiB7XG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IG5ld1ZhbCA/IG5ld1ZhbCA6ICF0aGlzLnN1YnNjcmlwdGlvblBvcHVwO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcblx0XHRcdHRoaXMuc3VjY2Vzc0dpZkltYWdlID0gYHVybChpbWFnZXMvb25vZmZvbmNlLmdpZj8ke2dlbmVyYXRlTnVtYmVyVVVJRCgxMCl9KWA7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xuXHRcdH07XG5cblx0XHQkcm9vdFNjb3BlLiRvbignc3Vic2NyaXB0aW9uU2VudCcsICgpID0+IHtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcblx0XHR9KTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCdzdWJzY3JpcHRpb25TdWNjZXNzJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZSwgMzAwMCk7XG5cdFx0fSk7XG5cblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XG5cdFx0fSk7XG5cblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xuXHRcdFx0dGhpcy5hY3RpdmVQYWdlID0gdG9TdGF0ZS5uYW1lO1x0dGhpcy5yZWFkeSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5yZWFkeSA9IHRydWUsIDI1MCk7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdmb290ZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5mb290ZXJzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnbmV3cycsIGxpbWl0OiA0IH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS5uZXdzID0gZGF0YS5yZXN1bHRzO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSAwO1xuXHRcdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XG5cdFx0XHRsZXQgdG9wU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY3JvbGxDaGFuZ2UnLCB7dG9wOiB0b3BTY3JvbGwsIHNjcm9sbGluZ0Rvd246IHRvcFNjcm9sbCA+IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9ufSk7XG5cdFx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHRvcFNjcm9sbDtcblx0XHR9KTtcblxuXHRcdCQod2luZG93KS5yZXNpemUoKCkgPT4ge1xuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXplQ2hhbmdlJywge1xuXHRcdFx0XHRoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcblx0XHRcdFx0d2lkdGg6ICQod2luZG93KS53aWR0aCgpXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHsgYXBpSG9zdCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNsYXNzIG1haW5Db250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCcsICdtZXRhU2VydmljZSddO1xuXG5cdGZlYXR1cmVzID0gW107XG5cdHNsaWRlcnMgPSBbXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwLCBtZXRhU2VydmljZSkge1xuXHRcdC8vVHJhY2tpbmcgY29kZS4uXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcblxuXHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBtZXRhU2VydmljZS5saW5rc1swXTsgJHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wYWdlL2dldC9qc29uYCwgeyBwYXJhbXM6IHsgYWxpYXM6IFwidHJhbmctY2h1XCIgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtkYXRhLnJlc3VsdHNbMF0uUGFnZV07XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdiYW5uZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5mZWF0dXJlcyA9IGRhdGEucmVzdWx0cztcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ0hvbWVTbGlkZXInIH1cblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0dGhpcy5zbGlkZXJzID0gZGF0YS5yZXN1bHRzLm1hcChpdGVtID0+IHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0uUG9zdDtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCkgLSA3MDtcblx0XHQkcm9vdFNjb3BlLiRvbignc2l6ZUNoYW5nZScsIChldmVudCwgc2l6ZSkgPT4ge1xuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgPiA1NzAgPyBzaXplLmhlaWdodCAtIDcwIDogNTAwO1xuXHRcdFx0fSk7XG5cdFx0fSlcblx0fVxufSIsImltcG9ydCB7IGFwaUhvc3QgfSBmcm9tIFwiLi4vdXRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBuZXdzQ29udHJvbGxlciB7XG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAgJyRzdGF0ZSddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkd2luZG93LCAkaHR0cCwgJHN0YXRlKSB7XG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xuXHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xuXG5cdFx0dGhpcy5wYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHRcdHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcblxuXHRcdGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wb3N0L2dldC9qc29uYCwgeyBwYXJhbXM6IHsgYWxpYXM6IHRoaXMucGFnZUFsaWFzIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xuXHRcdFx0XHR0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHRwYXJhbXM6IHsgdHlwZTogJ25ld3MnIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xuXHRcdFx0XHR0aGlzLmFsbE5ld3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBhcGlIb3N0IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XG5cblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGVsZW1lbnQsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xuXHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcblxuXHRcdGxldCBwYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzLCBwYXJlbnRHcm91cCA9IHRoaXMuZmluZFBhcmVudEdyb3VwKHBhZ2VBbGlhcywgbWV0YVNlcnZpY2UubGlua3MpLFxuXHRcdFx0cHJldmlvdXNHcm91cCA9ICRyb290U2NvcGUuYWN0aXZlR3JvdXA7ICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBwYXJlbnRHcm91cDtcblxuXHRcdGlmKHBhZ2VBbGlhcyA9PSAndHJhbmctY2h1JykgeyAkc3RhdGUuZ28oJ2hvbWUnKTsgcmV0dXJuOyB9XG5cblx0XHQvL0tpY2sgYmFjayB0byB0aGUgSG9tZSBwYWdlIGlmIGl0J3Mgbm90IGEgbGluayBpbiBtZW51XG5cdFx0aWYgKCFwYXJlbnRHcm91cCB8fCAhcGFyZW50R3JvdXAuY2hpbGRyZW4pIHtcblx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xuXHRcdH0gZWxzZSBpZiAocGFyZW50R3JvdXAgPT09IHByZXZpb3VzR3JvdXApIHsgLy9JZiB0aGUgcGFyZW50IGdyb3VwIGlzIGFscmVhZHkgYWN0aXZlID0+IHNjcm9sbCB0byB0aGUgY2hpbGQgc2VjdGlvbiFcblx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUFsaWFzfWApLm9mZnNldCgpLnRvcCAtIDUwO1xuXHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcblx0XHRcdH0sIDgwMCk7XG5cdFx0fSBlbHNlIHsgLy9GaW5hbGx5LCBsb2FkIHRoZSBwYWdlID0+IHNldCBwYWdlJ3MgY2hpbGRyZW4gY29udGVudCFcblx0XHRcdGxldCBsb2FkZWRDb3VudCA9IDA7ICRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbXTtcblx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vUmVzZXQgdGhlIHNjcm9sbCBpZiBsb2FkaW5nIGZyb20gdGhlIGJlZ2lubmluZyFcblx0XHRcdHBhcmVudEdyb3VwLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuXHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IHt9O1xuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHsgcGFyYW1zOiB7IGFsaWFzOiBjaGlsZC5hbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdFx0bGV0IGNoaWxkUmVzdWx0ID0gZGF0YS5yZXN1bHRzWzBdO1xuXHRcdFx0XHRcdGlmIChjaGlsZFJlc3VsdCAmJiBjaGlsZFJlc3VsdC5QYWdlKSB7XG5cdFx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IGNoaWxkUmVzdWx0LlBhZ2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KS5maW5hbGx5KCgpID0+IHtcblx0XHRcdFx0XHRsb2FkZWRDb3VudCsrO1xuXG5cdFx0XHRcdFx0aWYgKGxvYWRlZENvdW50ID49IHBhcmVudEdyb3VwLmNoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgKGFmdGVyIGFsbCBjb250ZW50IGFyZSByZWFkeSBmcm9tIHNlcnZlciEpXG5cdFx0XHRcdFx0XHQvLyB0byBoYXZlIGJldHRlciBwZXJmb3JtYW5jZSAoYWZ0ZXIgc3R1ZmZzIGhhZCBiZWVuIHJlbmRlcmVkKS5cblx0XHRcdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcblx0XHRcdFx0XHRcdFx0VHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XG5cdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRmaW5kUGFyZW50R3JvdXAgKGFsaWFzLCBsaW5rcykge1xuXHRcdGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcblx0XHRcdGlmIChsaW5rLmFsaWFzICYmIGxpbmsuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gbGluaztcblxuXHRcdFx0aWYgKGxpbmsuY2hpbGRyZW4pIHtcblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGluay5jaGlsZHJlbikge1xuXHRcdFx0XHRcdGlmIChjaGlsZC5hbGlhcyAmJiBjaGlsZC5hbGlhcyA9PSBhbGlhcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGxpbms7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGNsYXNzIHNwbGFzaENvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJGludGVydmFsLCAkdGltZW91dCkge1xuXHRcdHRoaXMuJHN0YXRlID0gJHN0YXRlO1xuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xuXHR9XG5cblx0c2tpcEludHJvICgpIHtcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcblx0fVxufSIsImltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcblxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xuaW1wb3J0IHtuZXdzQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9uZXdzQ29udHJvbGxlclwiO1xuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcblxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50L3NpZGViYXJcIjtcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudC9zbGlkZXJcIjtcbmltcG9ydCBuZXdzQXJlYSBmcm9tIFwiLi9jb21wb25lbnQvbmV3c0FyZWFcIjtcbmltcG9ydCBtZXRhU2VydmljZSBmcm9tIFwiLi9tZXRhU2VydmljZVwiO1xuaW1wb3J0IHJlZ2lzdGVyRmlsdGVyIGZyb20gXCIuL3V0aWxzL2ZpbHRlclwiO1xuXG5sZXQgQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcGxpY2F0aW9uJywgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ25nUHJvZ3Jlc3MnLCAnbmdUb3VjaCcsICduZ1BhcmFsbGF4JywgJ2FuZ3VsYXItc3BpbmtpdCddKVxuXHQuY29uZmlnKHJvdXRlckNvbmZpZylcblx0LmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBsaWNhdGlvbkNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcigncGFnZUN0cmwnLCBwYWdlQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ25ld3NDdHJsJywgbmV3c0NvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcblx0LnNlcnZpY2UoJ21ldGFTZXJ2aWNlJywgbWV0YVNlcnZpY2UpXG5cdC5kaXJlY3RpdmUoJ3BvcHVwJywgcG9wdXApXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0TmF2aWdhdGlvbicsIG5hdmlnYXRpb24pXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2lkZWJhcicsIHNpZGViYXIpXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0Rm9vdGVyJywgZm9vdGVyKVxuXHQuZGlyZWN0aXZlKCdsaWdodFNsaWRlcicsIHNsaWRlcilcblx0LmRpcmVjdGl2ZSgnbmV3c0FyZWEnLCBuZXdzQXJlYSlcblx0LmRpcmVjdGl2ZSgnc3Vic2NyaXB0aW9uRm9ybScsIHN1YnNjcmlwdGlvbkZvcm0pXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xuXG5yZWdpc3RlckZpbHRlcihBcHApO1xuXG5BcHAucnVuKCgpID0+IHtcblx0RmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KTtcbn0pO1xuXG5BcHAuZmlsdGVyKCd1bnNhZmUnLCBbXG5cdCckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xuXHRcdFx0cmV0dXJuICRzY2UudHJ1c3RBc0h0bWwodmFsKTtcblx0XHR9O1xuXHR9XG5dKTtcblxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwbGljYXRpb24nXSk7IiwiaW1wb3J0IHsgYXBpSG9zdCB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcblx0bGV0IGNvbmZpZ3NQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tZW51L2dldC9qc29uYCwgeyBwYXJhbXM6IHsgc2l0ZTogbG9jYXRpb24uaG9zdCB9IH0pLnN1Y2Nlc3MoKGRhdGEpID0+IHtcblx0XHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7IHJlc29sdmUodGhpcy5saW5rcyk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdGxldCBuYXZpZ2F0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHQkaHR0cC5nZXQoJy9jb25maWdzJykuc3VjY2VzcygoZGF0YSkgPT57XG5cdFx0XHR0aGlzLmNvbmZpZ3MgPSBkYXRhOyByZXNvbHZlKHRoaXMuY29uZmlncyk7XG5cdFx0fSk7XG5cdH0pO1xuXG5cdHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRQcm9taXNlLmFsbChbbmF2aWdhdGlvblByb21pc2UsIGNvbmZpZ3NQcm9taXNlXSkudGhlbih2YWx1ZXMgPT4ge1xuXHRcdFx0Y29uc29sZS5pbmZvKFwibWV0YVNlcnZpY2UgcmVhZHkhXCIsIHRoaXMubGlua3MsIHRoaXMuY29uZmlncyk7XG5cdFx0XHRyZXNvbHZlKHtsaW5rczogdGhpcy5saW5rcywgY29uZmlnczogdGhpcy5jb25maWdzfSk7XG5cdFx0fSk7XG5cdH0pO1xufV07IiwiY29uc29sZS5sb2coXCJUaGlzIGlzIGdvbGRlbiByaXZlciEhIVwiKTtcblxuLy9BbmFseXRpY3MgY29kZS4uLlxuLy9Hb29nbGUgPT5cbihmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0bT1zLmdldEVsZW1lbnRzQnlUYWdOYW1lKG8pWzBdO2EuYXN5bmM9MTthLnNyYz1nO20ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSxtKVxufSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdnYScpO1xuXG5nYSgnY3JlYXRlJywgJ1VBLTc3OTAxOTE0LTEnLCAnYXV0bycpO1xuZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblxuLy9GYWNlYm9vayBlc3NlbnRpYWwgPT5cbihmdW5jdGlvbihkLCBzLCBpZCkge1xuXHR2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG5cdGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xuXHRqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcblx0anMuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qcyN4ZmJtbD0xJnZlcnNpb249djIuNiZhcHBJZD0xMDg1OTc3NzkxNjI4NDFcIjtcblx0ZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xufShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcblxuLy9GYWNlYm9vayBwaXhlbCA9PlxuIWZ1bmN0aW9uKGYsYixlLHYsbix0LHMpe2lmKGYuZmJxKXJldHVybjtuPWYuZmJxPWZ1bmN0aW9uKCl7bi5jYWxsTWV0aG9kP1xuXHRuLmNhbGxNZXRob2QuYXBwbHkobixhcmd1bWVudHMpOm4ucXVldWUucHVzaChhcmd1bWVudHMpfTtpZighZi5fZmJxKWYuX2ZicT1uO1xuXHRuLnB1c2g9bjtuLmxvYWRlZD0hMDtuLnZlcnNpb249JzIuMCc7bi5xdWV1ZT1bXTt0PWIuY3JlYXRlRWxlbWVudChlKTt0LmFzeW5jPSEwO1xuXHR0LnNyYz12O3M9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShlKVswXTtzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KHdpbmRvdyxcblx0ZG9jdW1lbnQsJ3NjcmlwdCcsJ2h0dHBzOi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvZmJldmVudHMuanMnKTtcblxuZmJxKCdpbml0JywgJzU3ODExNTIzMjMzODMzMScpO1xuZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XG4iLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi91dGlscy9oZWxwZXInO1xuXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJyxcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGh0dHBQcm92aWRlcikge1xuXHRcdCRzdGF0ZVByb3ZpZGVyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKVxuXHRcdFx0LnN0YXRlKCdwYWdlJywgcGFnZVJvdXRlKVxuXHRcdFx0LnN0YXRlKCduZXdzJywgbmV3c1JvdXRlKTtcblxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcblxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucGF0Y2ggPSB7fTtcblx0fVxuXTtcblxudmFyIHNwbGFzaFJvdXRlID0ge1xuXHR1cmw6ICcvc3BsYXNoJyxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBtYWluUm91dGUgPSB7XG5cdHVybDogJy8nLFxuXHRyZXNvbHZlOiB7XG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcblx0XHR9XG5cdH0sXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QGhvbWUnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbWFpbi5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBwYWdlUm91dGUgPSB7XG5cdHVybDogJy86YWxpYXMnLFxuXHRyZXNvbHZlOiB7XG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcblx0XHR9XG5cdH0sXG5cdHZpZXdzOiB7XG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxuXHRcdCdjb250ZW50QHBhZ2UnOiB7XG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcGFnZS5odG1sJyxcblx0XHRcdGNvbnRyb2xsZXI6ICdwYWdlQ3RybCBhcyBwYWdlQ3RybCdcblx0XHR9XG5cdH1cbn07XG5cbnZhciBuZXdzUm91dGUgPSB7XG5cdHVybDogJy90aW4tdHVjLzphbGlhcycsXG5cdHJlc29sdmU6IHtcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xuXHRcdH1cblx0fSxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAbmV3cyc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9uZXdzLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ25ld3NDdHJsIGFzIG5ld3NDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG1vZHVsZUluc3RhbmNlKSB7XG5cdG1vZHVsZUluc3RhbmNlXG5cdFx0LmZpbHRlcignbmljZURhdGUnLCBuaWNlRGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuaWNlRGF0ZSAoKSB7XG5cdHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0ID0gJ0RELU1NLVlZWVknKSB7XG5cdFx0cmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcblx0fTtcbn0iLCJleHBvcnQgY29uc3QgYXBpSG9zdCA9ICdodHRwOi8vMTI4LjE5OS4yMjcuMTMyJzsvL2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XG5cdH1cblxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcblx0fVxuXG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+Jylcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcblx0XHR3ID0gby53aWR0aCgpO1xuXG5cdG8ucmVtb3ZlKCk7XG5cblx0cmV0dXJuIHc7XG59O1xuXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
