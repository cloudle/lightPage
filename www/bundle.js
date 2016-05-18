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
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>\n\t\t\t<!--<div class="small-banner"></div>-->\n\t\t\t<div class="sidebar-news">\n\t\t\t\t<div class="heading">Tin tức</div>\n\t\t\t\t<div class="news-summary" ng-repeat="newsItem in news" ui-sref="news({id: newsItem.Post.id})">\n\t\t\t\t\t<div class="thumb-image" ng-style="{\'background-image\': \'url(\'+newsItem.Post.image+\')\'}"></div>\n\t\t\t\t\t<div class="title" ng-bind="newsItem.Post.title"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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

exports.default = ['$rootScope', '$http', function ($rootScope, $http) {
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
					$http.get(_helper.apiHost + '/mail/sent', { params: formData }).success(function (data) {
						console.log('email...', data);
					});
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

},{"../utils/helper":18}],9:[function(require,module,exports){
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

},{"../utils/helper":18}],10:[function(require,module,exports){
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
		console.log($rootScope.activeContents);
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

},{"../utils/helper":18}],11:[function(require,module,exports){
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
			console.log(_this.allNews);
		});
	}
};

newsController.$inject = ['$rootScope', '$window', '$http', '$state'];

},{"../utils/helper":18}],12:[function(require,module,exports){
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

},{"../utils/helper":18}],13:[function(require,module,exports){
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

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/newsArea":4,"./component/popup":5,"./component/sidebar":6,"./component/slider":7,"./component/subscriptionForm":8,"./controller/applicationController":9,"./controller/mainController":10,"./controller/newsController":11,"./controller/pageController":12,"./controller/splashController":13,"./metaService":15,"./routerConfig":16,"./utils/filter":17}],15:[function(require,module,exports){
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
		console.info("metaService ready!", _this.links);
	});
}];

},{"./utils/helper":18}],16:[function(require,module,exports){
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

},{"./utils/helper":18}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29tcG9uZW50L2Zvb3Rlci5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbi5qcyIsImFwcC9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmsuanMiLCJhcHAvY29tcG9uZW50L25ld3NBcmVhLmpzIiwiYXBwL2NvbXBvbmVudC9wb3B1cC5qcyIsImFwcC9jb21wb25lbnQvc2lkZWJhci5qcyIsImFwcC9jb21wb25lbnQvc2xpZGVyLmpzIiwiYXBwL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtLmpzIiwiYXBwL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXIuanMiLCJhcHAvY29udHJvbGxlci9uZXdzQ29udHJvbGxlci5qcyIsImFwcC9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyLmpzIiwiYXBwL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlci5qcyIsImFwcC9lbnRyeS5qcyIsImFwcC9tZXRhU2VydmljZS5qcyIsImFwcC9yb3V0ZXJDb25maWcuanMiLCJhcHAvdXRpbHMvZmlsdGVyLmpzIiwiYXBwL3V0aWxzL2hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O2tCQ0FlLENBQUMsT0FBRCxFQUFVLFVBQVUsS0FBVixFQUFpQjtBQUN6QyxRQUFPO0FBQ04sWUFBVSxHQURKO0FBRU4sV0FBUyxJQUZIO0FBR04sU0FBTyxFQUFFLFNBQVMsR0FBWCxFQUhEO0FBSU4sMGRBSk07QUFnQk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUMsQ0FFdEM7QUFsQkssRUFBUDtBQW9CQSxDQXJCYyxDOzs7Ozs7OztrQkNBQSxDQUFDLFFBQUQsRUFBVyxhQUFYLEVBQTBCLFVBQVUsTUFBVixFQUFrQixXQUFsQixFQUErQjtBQUN2RSxRQUFPO0FBQ04s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OztBQUVELE9BQU8sU0FBUCxDQUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtLQUNDLElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7S0FJQyxJQUFJLEVBQUUsS0FBRixFQUpMOztBQU1BLEdBQUUsTUFBRjs7QUFFQSxRQUFPLENBQVA7QUFDQSxDQVZEOztBQVlBLE9BQU8sSUFBUCxHQUFjLGtCQUFkIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCBmdW5jdGlvbiAoJGh0dHApIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgY29sdW1uczogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3M9XCJmb290ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cblx0XHRcdFx0PHNwYW4+RGVzaWduZWQgYnk8L3NwYW4+XG5cdFx0XHQgIDxhIGhyZWY9XCJodHRwOi8vdHdpbi52blwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzJFQjNEMztcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UV0lOIFNvZnR3YXJlIFNvbHV0aW9uczwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHtcblx0XHRcdHJlYWR5OiAnPScsXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpdGUtbG9nb1wiIHVpLXNyZWY9XCJob21lXCI+PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlUG9wdXAoKVwiPsSQxIJORyBLw508L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cblx0XHRcdFx0XHQ8bmF2aWdhdGlvbi1saW5rIGluc3RhbmNlPVwibGlua1wiIG5nLXJlcGVhdD1cImxpbmsgaW4gbGlua3NcIj48L25hdmlnYXRpb24tbGluaz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJuZXdzXCI+VGluIHThu6ljPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2Pi0tPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnUgc3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImNoaWxkLm5hbWVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGNoaWxkLmFsaWFzfSlcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJuZXdzXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPlRpbiB04bupYzwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUubGlua3MgPSBtZXRhU2VydmljZS5saW5rcztcblxuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyKCk7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5uZXdzQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09PSAnbmV3cyc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcblxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCwgJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHRzY29wZToge1xuXHRcdFx0aW5zdGFuY2U6ICc9J1xuXHRcdH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgbmctYmluZD1cImluc3RhbmNlLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpbnN0YW5jZSlcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBsaW5rLmFsaWFzfSlcIj48L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PmAsXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcblxuXHRcdFx0aWYgKHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuICYmIHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0XHRzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcblx0XHRcdFx0XHRpZiAoY3VycmVudFdpZHRoID4gc2NvcGUubWF4V2lkdGgpIHtcblx0XHRcdFx0XHRcdHNjb3BlLm1heFdpZHRoID0gY3VycmVudFdpZHRoO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHNjb3BlLmxpbmtBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRyZXR1cm4gJHJvb3RTY29wZS5hY3RpdmVHcm91cCAmJiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwLmlkID09PSBpbnN0YW5jZS5pZDtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuXHRcdFx0XHRpZiAoaW5zdGFuY2UuYWxpYXMpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXMpIHtcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHR9XG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNhbnZhcyB0b3Atc2VwYXJhdGVkIG5ld3MtYXJlYVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtaGVhZGluZyBzZWN0aW9uXCI+PHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj5USU4gVOG7qEM8L3NwYW4+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1yb3cgcXVhdHJvXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbiBsaWdodC1jb2x1bW4gY2xpY2stYWJsZVwiIG5nLXJlcGVhdD1cIm5ld3MgaW4gbGF0ZXN0TmV3c1wiIHVpLXNyZWY9XCJuZXdzKHtpZDogbmV3cy5Qb3N0LmlkfSlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZVwiIG5nLWJpbmQ9XCJuZXdzLlBvc3QudGl0bGVcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aHVtYi1pbWFnZS13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbWFnZSBpbWFnZS1ob3Zlci1lZmZlY3Qtem9vbS0xMjBcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzLlBvc3QuaW1hZ2UrJyknfVwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBuZy1iaW5kPVwibmV3cy5Qb3N0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRzY29wZS5sYXRlc3ROZXdzID0gJHJvb3RTY29wZS5uZXdzO1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cblx0XHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG5cdFx0XHRzY29wZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZSA9ICFzY29wZS5lbmFibGU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XSIsImNvbnN0IGluaXRpYWxUb3BPZmZzZXQgPSAxMjE7XG5cbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3RyaWN0OiAnRScsXG5cdFx0cmVwbGFjZTogdHJ1ZSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCIgbmctc3R5bGU9XCJ7dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyt0b3BQb3NpdGlvbisncHgpJ31cIj5cblx0XHRcdDxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+XG5cdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2Pi0tPlxuXHRcdFx0PGRpdiBjbGFzcz1cInNpZGViYXItbmV3c1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlRpbiB04bupYzwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmV3cy1zdW1tYXJ5XCIgbmctcmVwZWF0PVwibmV3c0l0ZW0gaW4gbmV3c1wiIHVpLXNyZWY9XCJuZXdzKHtpZDogbmV3c0l0ZW0uUG9zdC5pZH0pXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRodW1iLWltYWdlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrbmV3c0l0ZW0uUG9zdC5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3NJdGVtLlBvc3QudGl0bGVcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5gLFxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcblx0XHRcdHZhciBzaWRlYmFySGVpZ2h0LCBmb290ZXJIZWlnaHQ7IHNjb3BlLnRvcFBvc2l0aW9uID0gMDtcblxuXHRcdFx0Ly9TYWZlbHkgY2FsY3VsYXRlIGVsZW1lbnQncyBzaXplIGFmdGVyIHN0dWZmIGhhdmUgYmVlbiByZW5kZXJlZCFcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2lkZWJhckhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcblx0XHRcdFx0Zm9vdGVySGVpZ2h0ID0gYW5ndWxhci5lbGVtZW50KCcjZm9vdGVyJykub3V0ZXJIZWlnaHQoKTtcblx0XHRcdH0sIDUwMCk7XG5cblx0XHRcdCRyb290U2NvcGUuJG9uKCdzY3JvbGxDaGFuZ2UnLCAoZXZlbnQsIHNjcm9sbFBvc2l0aW9uKSA9PiB7XG5cdFx0XHRcdHNjb3BlLm5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XG5cblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcblx0XHRcdFx0XHRsZXQgZG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSwgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpLFxuXHRcdFx0XHRcdFx0b2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKTtcblxuXHRcdFx0XHRcdGlmIChzY3JvbGxQb3NpdGlvbi5zY3JvbGxpbmdEb3duKSB7XG5cdFx0XHRcdFx0XHRsZXQgc2Nyb2xsRG93blRvdWNoQm90dG9tID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gb2Zmc2V0LnRvcCArIHNpZGViYXJIZWlnaHQsXG5cdFx0XHRcdFx0XHRcdHNjcm9sbERvd25PdmVyRm9vdGVyID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gZG9jdW1lbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XG5cblx0XHRcdFx0XHRcdGlmIChzY3JvbGxEb3duVG91Y2hCb3R0b20gJiYgIXNjcm9sbERvd25PdmVyRm9vdGVyKSB7XG5cdFx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0IC0gc2lkZWJhckhlaWdodCAtIGluaXRpYWxUb3BPZmZzZXQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbi50b3AgPCBvZmZzZXQudG9wIC0gaW5pdGlhbFRvcE9mZnNldCkge1xuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3A7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRpbnRlcnZhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XG5cdHJldHVybiB7XG5cdFx0cmVzdHJpY3Q6ICdFJyxcblx0XHRyZXBsYWNlOiB0cnVlLFxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScgfSxcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCJcblx0XHRcdG5nLXN3aXBlLWxlZnQ9XCJzd2lwZUxlZnQoJGV2ZW50KVwiIG5nLXN3aXBlLXJpZ2h0PVwic3dpcGVSaWdodCgkZXZlbnQpXCI+XG5cdFx0XHQ8ZGl2IGlkPVwiY3VycmVudFNsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGVcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJythY3RpdmVTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1uYXZpZ2F0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1uZXh0XCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1iYWNrXCI+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24taXRlbVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5pc0FjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCIgbmctY2xpY2s9XCJuYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XG5cdFx0PC9kaXY+YCxcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XG5cdFx0XHRsZXQgJGFjdGl2ZVNsaWRlID0gZWxlbWVudC5maW5kKCcjY3VycmVudFNsaWRlJyksICRwcmV2aW91c1NsaWRlID0gZWxlbWVudC5maW5kKCcjcHJldmlvdXNTbGlkZScpLFxuXHRcdFx0XHRlYXNlRWZmZWN0ID0gU2luZS5lYXNlSW4sIHRyYW5zaXRpb25UaW1lID0gMjtcblxuXHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xuXHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cblx0XHRcdHNjb3BlLiR3YXRjaCgnaXRlbXMnLCAoKSA9PiB7XG5cdFx0XHRcdG5leHRTbGlkZSgwKTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XG5cblx0XHRcdGxldCBuZXh0U2xpZGUgPSBmdW5jdGlvbiAobmV4dEluZGV4KSB7XG5cdFx0XHRcdHNjb3BlLnByZXZpb3VzU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XG5cdFx0XHRcdGlmIChzY29wZS5wcmV2aW91c1NsaWRlKSBzY29wZS5wcmV2aW91c1NsaWRlLmlzQWN0aXZlID0gZmFsc2U7XG5cblx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBuZXh0SW5kZXggIT0gdW5kZWZpbmVkID8gbmV4dEluZGV4IDogc2NvcGUuYWN0aXZlSW5kZXggKyAxO1xuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPCAwKSB7XG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBzY29wZS5pdGVtcy5sZW5ndGggLSAxO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNjb3BlLmFjdGl2ZUluZGV4ID49IHNjb3BlLml0ZW1zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlU2xpZGUpIHNjb3BlLmFjdGl2ZVNsaWRlLmlzQWN0aXZlID0gdHJ1ZTtcblxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMTAwJSd9KTtcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkYWN0aXZlU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJy0xMDAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSk7XG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcblx0XHRcdFx0VHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzAnfSk7XG5cblx0XHRcdFx0Ly9SZXNldCBpbnRlcnZhbDtcblx0XHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xuXHRcdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLm5hdmlnYXRlID0gKGluc3RhbmNlKSA9PiB7XG5cdFx0XHRcdGlmIChpbnN0YW5jZSAhPSBzY29wZS5hY3RpdmVTbGlkZSkge1xuXHRcdFx0XHRcdG5leHRTbGlkZShzY29wZS5pdGVtcy5pbmRleE9mKGluc3RhbmNlKSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLnN3aXBlTGVmdCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggKyAxKTtcblx0XHRcdHNjb3BlLnN3aXBlUmlnaHQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4IC0gMSk7XG5cblx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xuXHRcdH1cblx0fVxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQsIGFwaUhvc3QgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcblx0cmV0dXJuIHtcblx0XHRyZXN0cmljdDogJ0UnLFxuXHRcdHJlcGxhY2U6IHRydWUsXG5cdFx0c2NvcGU6IHsgd3JhcHBlckNsYXNzOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJ3cmFwcGVyQ2xhc3NcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiY2xvc2VGb3JtKClcIj48L2Rpdj4tLT5cblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XG5cdFx0XHRcdDxzcGFuPkfhu41pIDwvc3Bhbj4gXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCI+MDkzMiAwNDcgMzEzPC9zcGFuPlxuXHRcdFx0XHQ8c3Bhbj4gaG/hurdjIGfhu61pIHRow7RuZyB0aW4gxJHhu4Mgbmjhuq1uPC9zcGFuPiBcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XG5cdFx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IFxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdFxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJI4buNIHbDoCB0w6puKlwiIG5nLW1vZGVsPVwidXNlck5hbWVcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cInVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwixJBp4buHbiB0aG/huqFpKlwiIG5nLW1vZGVsPVwidXNlclBob25lXCIvPlxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJ1c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwidXNlclBob25lRXJyb3JcIj48L2Rpdj5cblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIgbmctbW9kZWw9XCJ1c2VyRW1haWxcIi8+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cInVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJ1c2VyRW1haWxFcnJvclwiPjwvZGl2PlxuXHRcdFxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwiTuG7mWkgZHVuZyBjaGkgdGnhur90XCIgbmctbW9kZWw9XCJ1c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XG5cdFx0XHRcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGdvb2dsZVwiIG5nLWNsaWNrPVwiZ29vZ2xlTG9naW4oKVwiPjwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICdH4busSSdcIj48L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0PC9mb3JtPmAsXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuXHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4geyBzY29wZVtmaWVsZCsnRXJyb3InXSA9ICcnOyBzY29wZVtmaWVsZF0gPSAnJztcdH0pO1xuXG5cdFx0XHRzY29wZS5yZXNldEZvcm0gPSAoKSA9PiB7XG5cdFx0XHRcdGZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHNjb3BlW2ZpZWxkXSA9ICcnKTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmNsb3NlRm9ybSA9ICgpID0+IHtcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHRzY29wZS5zdWJtaXQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZmllbGRzLmZvckVhY2goZmllbGQgPT4gc2NvcGVbZmllbGQrJ0Vycm9yJ10gPSAnJyk7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJOYW1lLmxlbmd0aCA8IDEpIHNjb3BlLnVzZXJOYW1lRXJyb3IgPSAnTmjhuq1wIHTDqm4nO1xuXHRcdFx0XHRpZiAoc2NvcGUudXNlclBob25lLmxlbmd0aCA8IDgpIHNjb3BlLnVzZXJQaG9uZUVycm9yID0gJ1Phu5EgxJFp4buHbiB0aG/huqFpIGNoxrBhIMSRw7puZyc7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnVzZXJOYW1lRXJyb3IgfHwgc2NvcGUudXNlclBob25lRXJyb3IpIHJldHVybjtcblxuXHRcdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxuXHRcdFx0XHRcdGZvcm1EYXRhID0ge1xuXHRcdFx0XHRcdC4uLmxvY2FsVXNlckluZm8sXG5cdFx0XHRcdFx0c2l0ZTogbG9jYXRpb24uaG9zdCxcblx0XHRcdFx0XHRmdWxsTmFtZTogc2NvcGUudXNlck5hbWUsXG5cdFx0XHRcdFx0bmFtZTogc2NvcGUudXNlck5hbWUsXG5cdFx0XHRcdFx0cGhvbmU6IHNjb3BlLnVzZXJQaG9uZSxcblx0XHRcdFx0XHRlbWFpbDogc2NvcGUudXNlckVtYWlsXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly9GaXJlIEFudHMgdHJhY2tpbmdHb2FsIGhvb2shXG5cdFx0XHRcdGFkeF9hbmFseXRpYy50cmFja2luZ0dvYWwoJzU3ODY2NDY2OCcsIDEsICdldmVudCcpO1xuXHRcdFx0XHQvL1NlbmQgZm9ybSBpbmZvcm1hdGlvbiB0byBBbnRzIVxuXHRcdFx0XHRhbnRzX3VzZXJJbmZvTGlzdGVuZXIoZm9ybURhdGEsIGZhbHNlLCB0cnVlKTtcblxuXHRcdFx0XHQvL0ZhY2Vib29rIHRyYWNraW5nIExlYWQvQ29tcGxldGVSZWdpc3RyYXRpb24gZXZlbnRcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdMZWFkJyk7XG5cdFx0XHRcdGZicSgndHJhY2snLCAnQ29tcGxldGVSZWdpc3RyYXRpb24nKTtcblxuXHRcdFx0XHQvL1RyYWNraW5nIEdvb2dsZSBBbmFseXRpYyBnb2FsIVxuXHRcdFx0XHRnYSgnc2VuZCcsIHtcblx0XHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxuXHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6ICdTdWJzY3JpcHRpb24nLFxuXHRcdFx0XHRcdGV2ZW50QWN0aW9uOiAnU3VibWl0J1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvL0luc3RhbnRseSByZXNldCB0aGUgZm9ybSFcblx0XHRcdFx0c2NvcGUucmVzZXRGb3JtKCk7XG5cdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc3Vic2NyaXB0aW9uU2VudCcpO1xuXG5cdFx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9jdXN0b21lci9pbnNlcnQvanNvbmAsIHtcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzdWJzY3JpcHRpb25TdWNjZXNzJyk7XG5cdFx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21haWwvc2VudGAsIHtwYXJhbXM6IGZvcm1EYXRhfSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlbWFpbC4uLicsIGRhdGEpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQkLnBvc3QoJy9lbWFpbCcsIHtcblx0XHRcdFx0XHQuLi5mb3JtRGF0YSxcblx0XHRcdFx0XHRyZWNlaXZlcjogJ2xlaGFvc29uQGdtYWlsLmNvbScsXG5cdFx0XHRcdFx0cmVsYXRlZEd1eXM6ICdub25lJ1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xuXHRcdFx0fTtcblxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcblx0XHRcdH07XG5cblx0XHRcdGdsb2JhbC5nZXRfaW5mbyA9IGZ1bmN0aW9uKF91c2VySW5mbyl7XG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coX3VzZXJJbmZvLCBcImNhbGxlZCEhXCIpO1xuXG5cdFx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cblx0XHRcdFx0XHRzY29wZS51c2VyTmFtZSA9IF91c2VySW5mby5uYW1lO1xuXHRcdFx0XHRcdHNjb3BlLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZTtcblx0XHRcdFx0XHRzY29wZS51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XG5cblx0XHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXG5cdFx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cbn1dXG5cbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImltcG9ydCB7IGdlbmVyYXRlTnVtYmVyVVVJRCwgYXBpSG9zdCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5JywgJ21ldGFTZXJ2aWNlJ107XG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xuXHRyZWFkeSA9IHRydWU7XG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcblx0YnVyZ2VyQWN0aXZlID0gZmFsc2U7XG5cdHN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XG5cdHN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaW50ZXJ2YWwsICR3aW5kb3csICRodHRwLCAgbmdQcm9ncmVzc0ZhY3RvcnksIG1ldGFTZXJ2aWNlKSB7XG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xuXHRcdHRoaXMucHJvZ3Jlc3MgPSBuZ1Byb2dyZXNzRmFjdG9yeS5jcmVhdGVJbnN0YW5jZSgpO1xuXHRcdHRoaXMucHJvZ3Jlc3Muc2V0Q29sb3IoJyNGQTgzMjInKTtcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcblxuXHRcdGdsb2JhbC50b2dnbGVQb3B1cCA9IChuZXdWYWwpID0+IHtcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gbmV3VmFsID8gbmV3VmFsIDogIXRoaXMuc3Vic2NyaXB0aW9uUG9wdXA7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0dGhpcy50b2dnbGVTdWNjZXNzID0gKCkgPT4ge1xuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZSwgMzAwMCk7XG5cdFx0fTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCdzdWJzY3JpcHRpb25TZW50JywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xuXHRcdH0pO1xuXG5cdFx0JHJvb3RTY29wZS4kb24oJ3N1YnNjcmlwdGlvblN1Y2Nlc3MnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlLCAzMDAwKTtcblx0XHR9KTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsICgpID0+IHtcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcblx0XHR9KTtcblxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XG5cdFx0XHR0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnJlYWR5ID0gdHJ1ZSwgMjUwKTtcblx0XHR9KTtcblxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XG5cdFx0XHRwYXJhbXM6IHsgdHlwZTogJ2Zvb3RlcicgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHR0aGlzLmZvb3RlcnMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICduZXdzJywgbGltaXQ6IDQgfVxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLm5ld3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IDA7XG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbENoYW5nZScsIHt0b3A6IHRvcFNjcm9sbCwgc2Nyb2xsaW5nRG93bjogdG9wU2Nyb2xsID4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb259KTtcblx0XHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gdG9wU2Nyb2xsO1xuXHRcdH0pO1xuXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpemVDaGFuZ2UnLCB7XG5cdFx0XHRcdGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpLFxuXHRcdFx0XHR3aWR0aDogJCh3aW5kb3cpLndpZHRoKClcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG59XG4iLCJpbXBvcnQgeyBhcGlIb3N0IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XG5cblx0ZmVhdHVyZXMgPSBbXTtcblx0c2xpZGVycyA9IFtdO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xuXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG1ldGFTZXJ2aWNlLmxpbmtzWzBdOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBhbGlhczogXCJ0cmFuZy1jaHVcIiB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW2RhdGEucmVzdWx0c1swXS5QYWdlXTtcblx0XHRcdGNvbnNvbGUubG9nKCRyb290U2NvcGUuYWN0aXZlQ29udGVudHMpO1xuXHRcdH0pO1xuXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcblx0XHRcdHBhcmFtczogeyB0eXBlOiAnYmFubmVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuZmVhdHVyZXMgPSBkYXRhLnJlc3VsdHM7XG5cdFx0fSk7XG5cblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xuXHRcdFx0cGFyYW1zOiB7IHR5cGU6ICdIb21lU2xpZGVyJyB9XG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcblx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XG5cdFx0XHRcdHJldHVybiBpdGVtLlBvc3Q7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNzA7XG5cdFx0JHJvb3RTY29wZS4kb24oJ3NpemVDaGFuZ2UnLCAoZXZlbnQsIHNpemUpID0+IHtcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9IHNpemUuaGVpZ2h0ID4gNTcwID8gc2l6ZS5oZWlnaHQgLSA3MCA6IDUwMDtcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH1cbn0iLCJpbXBvcnQgeyBhcGlIb3N0IH0gZnJvbSBcIi4uL3V0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY2xhc3MgbmV3c0NvbnRyb2xsZXIge1xuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93JywgJyRodHRwJywgICckc3RhdGUnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHdpbmRvdywgJGh0dHAsICRzdGF0ZSkge1xuXHRcdC8vVHJhY2tpbmcgY29kZS4uXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbnVsbDtcblxuXHRcdHRoaXMucGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhczsgJHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblx0XHR0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XG5cblx0XHRpZiAodGhpcy5zaW5nbGVNb2RlKSB7XG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHsgcGFyYW1zOiB7IGFsaWFzOiB0aGlzLnBhZ2VBbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcblx0XHRcdFx0dGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1x0cGFyYW1zOiB7IHR5cGU6ICduZXdzJyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcblx0XHRcdFx0dGhpcy5hbGxOZXdzID0gZGF0YS5yZXN1bHRzO1xuXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLmFsbE5ld3MpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgYXBpSG9zdCB9IGZyb20gXCIuLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNsYXNzIHBhZ2VDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCcsICdtZXRhU2VydmljZSddO1xuXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRlbGVtZW50LCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwLCBtZXRhU2VydmljZSkge1xuXHRcdC8vVHJhY2tpbmcgY29kZS4uXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcblx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XG5cblx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcblx0XHRcdHByZXZpb3VzR3JvdXAgPSAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwOyAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gcGFyZW50R3JvdXA7XG5cblx0XHRpZihwYWdlQWxpYXMgPT0gJ3RyYW5nLWNodScpIHsgJHN0YXRlLmdvKCdob21lJyk7IHJldHVybjsgfVxuXG5cdFx0Ly9LaWNrIGJhY2sgdG8gdGhlIEhvbWUgcGFnZSBpZiBpdCdzIG5vdCBhIGxpbmsgaW4gbWVudVxuXHRcdGlmICghcGFyZW50R3JvdXAgfHwgIXBhcmVudEdyb3VwLmNoaWxkcmVuKSB7XG5cdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcblx0XHR9IGVsc2UgaWYgKHBhcmVudEdyb3VwID09PSBwcmV2aW91c0dyb3VwKSB7IC8vSWYgdGhlIHBhcmVudCBncm91cCBpcyBhbHJlYWR5IGFjdGl2ZSA9PiBzY3JvbGwgdG8gdGhlIGNoaWxkIHNlY3Rpb24hXG5cdFx0XHQvL1Njcm9sbCBhZnRlciAxIHNlY29uZCB0byBoYXZlIGJldHRlciBwZXJmb3JtYW5jZSAoYWZ0ZXIgc3R1ZmZzIGhhZCBiZWVuIHJlbmRlcmVkKS5cblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcblx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcblx0XHRcdFx0VHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XG5cdFx0XHR9LCA4MDApO1xuXHRcdH0gZWxzZSB7IC8vRmluYWxseSwgbG9hZCB0aGUgcGFnZSA9PiBzZXQgcGFnZSdzIGNoaWxkcmVuIGNvbnRlbnQhXG5cdFx0XHRsZXQgbG9hZGVkQ291bnQgPSAwOyAkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW107XG5cdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL1Jlc2V0IHRoZSBzY3JvbGwgaWYgbG9hZGluZyBmcm9tIHRoZSBiZWdpbm5pbmchXG5cdFx0XHRwYXJlbnRHcm91cC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcblx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50c1tpbmRleF0gPSB7fTtcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBhbGlhczogY2hpbGQuYWxpYXMgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xuXHRcdFx0XHRcdGxldCBjaGlsZFJlc3VsdCA9IGRhdGEucmVzdWx0c1swXTtcblx0XHRcdFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xuXHRcdFx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50c1tpbmRleF0gPSBjaGlsZFJlc3VsdC5QYWdlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSkuZmluYWxseSgoKSA9PiB7XG5cdFx0XHRcdFx0bG9hZGVkQ291bnQrKztcblxuXHRcdFx0XHRcdGlmIChsb2FkZWRDb3VudCA+PSBwYXJlbnRHcm91cC5jaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIChhZnRlciBhbGwgY29udGVudCBhcmUgcmVhZHkgZnJvbSBzZXJ2ZXIhKVxuXHRcdFx0XHRcdFx0Ly8gdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXG5cdFx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XG5cdFx0XHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xuXHRcdFx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0ZmluZFBhcmVudEdyb3VwIChhbGlhcywgbGlua3MpIHtcblx0XHRmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XG5cdFx0XHRpZiAobGluay5hbGlhcyAmJiBsaW5rLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGxpbms7XG5cblx0XHRcdGlmIChsaW5rLmNoaWxkcmVuKSB7XG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmsuY2hpbGRyZW4pIHtcblx0XHRcdFx0XHRpZiAoY2hpbGQuYWxpYXMgJiYgY2hpbGQuYWxpYXMgPT0gYWxpYXMpIHtcblx0XHRcdFx0XHRcdHJldHVybiBsaW5rO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcblxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAwKTtcblx0fVxuXG5cdHNraXBJbnRybyAoKSB7XG5cdFx0dGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdob21lJyk7XG5cdH1cbn0iLCJpbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSBcIi4vcm91dGVyQ29uZmlnXCI7XG5cbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcbmltcG9ydCB7cGFnZUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcGFnZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7bmV3c0NvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbmV3c0NvbnRyb2xsZXJcIjtcbmltcG9ydCB7c3BsYXNoQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyXCI7XG5cbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgbmF2aWdhdGlvbkxpbmsgZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25MaW5rXCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudC9mb290ZXJcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudC9zaWRlYmFyXCI7XG5pbXBvcnQgc3Vic2NyaXB0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybVwiO1xuaW1wb3J0IHBvcHVwIGZyb20gXCIuL2NvbXBvbmVudC9wb3B1cFwiO1xuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnQvc2xpZGVyXCI7XG5pbXBvcnQgbmV3c0FyZWEgZnJvbSBcIi4vY29tcG9uZW50L25ld3NBcmVhXCI7XG5pbXBvcnQgbWV0YVNlcnZpY2UgZnJvbSBcIi4vbWV0YVNlcnZpY2VcIjtcbmltcG9ydCByZWdpc3RlckZpbHRlciBmcm9tIFwiLi91dGlscy9maWx0ZXJcIjtcblxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICduZ1Byb2dyZXNzJywgJ25nVG91Y2gnLCAnbmdQYXJhbGxheCcsICdhbmd1bGFyLXNwaW5raXQnXSlcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcblx0LmNvbnRyb2xsZXIoJ3BhZ2VDdHJsJywgcGFnZUNvbnRyb2xsZXIpXG5cdC5jb250cm9sbGVyKCduZXdzQ3RybCcsIG5ld3NDb250cm9sbGVyKVxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXG5cdC5zZXJ2aWNlKCdtZXRhU2VydmljZScsIG1ldGFTZXJ2aWNlKVxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3Rlcilcblx0LmRpcmVjdGl2ZSgnbGlnaHRTbGlkZXInLCBzbGlkZXIpXG5cdC5kaXJlY3RpdmUoJ25ld3NBcmVhJywgbmV3c0FyZWEpXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcblxucmVnaXN0ZXJGaWx0ZXIoQXBwKTtcblxuQXBwLnJ1bigoKSA9PiB7XG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XG59KTtcblxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XG5cdFx0fTtcblx0fVxuXSk7XG5cbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImltcG9ydCB7IGFwaUhvc3QgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XG5cdHRoaXMucHJvbWlzZSA9ICRodHRwLmdldChgJHthcGlIb3N0fS9tZW51L2dldC9qc29uYCwge1xuXHRcdHBhcmFtczogeyBzaXRlOiBsb2NhdGlvbi5ob3N0IH1cblx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xuXHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XG5cdFx0Y29uc29sZS5pbmZvKFwibWV0YVNlcnZpY2UgcmVhZHkhXCIsIHRoaXMubGlua3MpO1xuXHR9KTtcbn1dOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XG5cbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLFxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSB7XG5cdFx0JHN0YXRlUHJvdmlkZXJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpXG5cdFx0XHQuc3RhdGUoJ25ld3MnLCBuZXdzUm91dGUpO1xuXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xuXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xuXHR9XG5dO1xuXG52YXIgc3BsYXNoUm91dGUgPSB7XG5cdHVybDogJy9zcGxhc2gnLFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG1haW5Sb3V0ZSA9IHtcblx0dXJsOiAnLycsXG5cdHJlc29sdmU6IHtcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xuXHRcdH1cblx0fSxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIHBhZ2VSb3V0ZSA9IHtcblx0dXJsOiAnLzphbGlhcycsXG5cdHJlc29sdmU6IHtcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xuXHRcdH1cblx0fSxcblx0dmlld3M6IHtcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xuXHRcdH1cblx0fVxufTtcblxudmFyIG5ld3NSb3V0ZSA9IHtcblx0dXJsOiAnL3Rpbi10dWMvOmFsaWFzJyxcblx0cmVzb2x2ZToge1xuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XG5cdFx0fVxuXHR9LFxuXHR2aWV3czoge1xuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcblx0XHQnY29udGVudEBuZXdzJzoge1xuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnbmV3c0N0cmwgYXMgbmV3c0N0cmwnXG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcblx0bW9kdWxlSW5zdGFuY2Vcblx0XHQuZmlsdGVyKCduaWNlRGF0ZScsIG5pY2VEYXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5pY2VEYXRlICgpIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcblx0XHRjb25zb2xlLmxvZyhkYXRlKTtcblx0XHRyZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xuXHR9O1xufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XG5cdH1cblxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xuXHR9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcblx0dmFyIHJlc3VsdCA9IFwiXCI7XG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcblx0fVxuXG5cdHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+Jylcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcblx0XHR3ID0gby53aWR0aCgpO1xuXG5cdG8ucmVtb3ZlKCk7XG5cblx0cmV0dXJuIHc7XG59O1xuXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
