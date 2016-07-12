(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$rootScope', '$http', function ($rootScope, $http) {

	return {
		restrict: 'E',
		replace: true,
		scope: { columns: '=' },
		template: '<div id="footer" class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="copyright">\n\t\t\t\t<div class="light-row">\n\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t<div class="language-choice" ng-repeat="language in $root.languages" \n\t\t\t\t\t\t\t\t ng-class="{active: languageActive(language)}" \n\t\t\t\t\t\t\t\t ng-click="$root.changeLanguage(language)"\n\t\t\t\t\t\t\t\t ng-bind="language.display"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t<span ng-bind="$root.localization.designedBy"></span>\n\t\t\t\t\t\t<a ng-bind-html="$root.localization.designCompany | unsafe"></a>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.languageActive = function (instance) {
				return instance.id == $rootScope.activeLanguage.id;
			};
		}
	};
}];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$rootScope', '$state', 'metaService', function ($rootScope, $state, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ready: '=',
			burgerActive: '='
		},
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<div class="subscription-activator" ng-click="togglePopup()" ng-bind="$root.localization.register"></div>\n\t\t\t\t\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t\t<div class="navigation-link" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="parent-link" ui-sref="news({alias: \'\'})" ng-bind="$root.localization.news"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<!--<div class="menu-heading" ng-click="toggleBurger()"></div>-->\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({alias: child.alias})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="menu-item" ui-sref="news" ng-click="toggleBurger()" ng-bind="$root.localization.news"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.links = metaService.links;

			$rootScope.$on('metaServiceReady', function () {
				console.log("Ready event fired!!!");
				scope.links = metaService.links;
			});

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
		template: '<div class="section-canvas top-separated news-area">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="light-heading section"><span class="highlight" ng-bind="$root.localization.news"></span></div>\n\t\t\t\t<div class="light-row quatro">\n\t\t\t\t\t<div class="column light-column click-able" ng-repeat="newsItem in news" ui-sref="news({alias: newsItem.Post.alias})">\n\t\t\t\t\t\t<div class="title" ng-bind="newsItem.Post.title"></div>\n\t\t\t\t\t\t<div class="thumb-image-wrapper">\n\t\t\t\t\t\t\t<div class="image image-hover-effect-zoom-120" ng-style="{\'background-image\': \'url(\'+newsItem.Post.image+\')\'}"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="description" ng-bind="newsItem.Post.description"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {}
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
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>\n\t\t\t<!--<div class="small-banner"></div>-->\n\t\t\t<div class="sidebar-news">\n\t\t\t\t<div class="heading" ng-bind="$root.localization.news"></div>\n\t\t\t\t<div class="news-summary" ng-repeat="newsItem in news" ui-sref="news({alias: newsItem.Post.alias})">\n\t\t\t\t\t<div class="thumb-image" ng-style="{\'background-image\': \'url(\'+newsItem.Post.image+\')\'}"></div>\n\t\t\t\t\t<div class="title" ng-bind="newsItem.Post.title"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			var sidebarHeight, footerHeight;scope.topPosition = 0;

			//Safely calculate element's size after stuff have been rendered!
			$timeout(function () {
				scope.news = $rootScope.news;
				sidebarHeight = element.outerHeight();
				footerHeight = angular.element('#footer').outerHeight();
			}, 500);

			$rootScope.$on('scrollChange', function (event, scrollPosition) {
				// scope.news = $rootScope.news;

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
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('../utils/helper');

exports.default = ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>\n\t\t\t<div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>\n\t\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>\n\n\t\t\t<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>\n\t\t\t</div>\n\t\t</form>',
		link: function link(scope, element, attrs) {
			var _metaService$configs = metaService.configs;
			var apiHost = _metaService$configs.apiHost;
			var domain = _metaService$configs.domain;

			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};
		}
	};
}];


var fields = ['userName', 'userPhone', 'userEmail'];

},{"../utils/helper":18}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.applicationController = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

	$rootScope.configs = metaService.configs; //Will be undefined at first => not safe for normal usage, just for translation!
	$rootScope.appCtrl = this;

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

	$rootScope.$on('$stateChangeStart', function () {
		_this.progress.start();
	});

	$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		_this.activePage = toState.name;_this.ready = false;
		_this.progress.complete();

		//Set meta's content for AUDIENCE SEGMENT!
		var currentSegment = 'home';
		if ($state.is('page')) {
			var pageAlias = $state.params.alias,
			    parentMenu = (0, _helper.findParentMenuByAlias)(pageAlias, metaService.links);
			currentSegment = parentMenu.name;
		} else if ($state.is('news')) {
			currentSegment = 'news';
		}

		$($("meta[name='adx:sections']")[0]).attr('content', currentSegment);
		$timeout(function () {
			_this.ready = true;
			$(document).trigger('ready'); //Manually trigger ready event, which hope also trigger Ants' script!
		}, 250);
	});

	var fetchEssentialData = function fetchEssentialData(source) {
		console.info("Loading..", source);
		var _metaService$configs = metaService.configs;
		var apiHost = _metaService$configs.apiHost;
		var domain = _metaService$configs.domain;

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'footer', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			_this.footers = data.results;
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'news', lang: $rootScope.activeLanguage.id, limit: 4 }
		}).success(function (data) {
			$rootScope.news = data.results;
		});
	};

	if (metaService.ready) fetchEssentialData("because the data already fetched!");
	$rootScope.$on('metaServiceReady', function () {
		return fetchEssentialData("because meta service ready fired!");
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

	//Register form!
	_helper.registerFields.forEach(function (field) {
		_this[field] = '';_this[field + 'Error'] = '';
	});

	this.closeRegisterForm = function () {
		_this.subscriptionPopup = false;
	};

	this.resetRegisterForm = function () {
		_helper.registerFields.forEach(function (field) {
			return _this[field] = '';
		});
	};

	this.resetRegisterError = function () {
		_helper.registerFields.forEach(function (field) {
			return _this[field + 'Error'] = '';
		});
	};

	this.subscriptionSuccessHandler = function () {
		_this.successGifImage = 'url(images/onoffonce.gif?' + (0, _helper.generateNumberUUID)(10) + ')';
		_this.subscriptionSuccess = true;
		$timeout(function () {
			_this.subscriptionSuccess = false;
			location.reload();
		}, 3000);
	};

	this.submitRegister = $rootScope.submitRegister = function (event) {
		var _metaService$configs2 = metaService.configs;
		var apiHost = _metaService$configs2.apiHost;
		var domain = _metaService$configs2.domain;
		var production = _metaService$configs2.production;

		console.log("production mode:", production);
		event.preventDefault();_this.resetRegisterError();

		if (_this['userName'].length < 1) _this['userNameError'] = 'Nhập tên';
		if (_this['userPhone'].length < 8) _this['userPhoneError'] = 'Số điện thoại chưa đúng';
		if (_this['userNameError'] || _this['userPhoneError']) return;

		var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
		    formData = _extends({}, localUserInfo, {
			domain: domain,
			fullName: _this['userName'],
			name: _this['userName'],
			phone: _this['userPhone'],
			email: _this['userEmail'],
			note: _this['userNote']
		});

		//Fire Ants trackingGoal hook!
		if (production) adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId, 1, 'event');
		//Send form information to Ants!

		console.log(formData.note);
		if (production) {
			ants_userInfoListener(formData, false, true);
		} else {
			console.log(ants_userInfoListener);
		}

		//Facebook tracking Lead/CompleteRegistration event
		if (production) fbq('track', 'Lead');
		if (production) fbq('track', 'CompleteRegistration');

		//Tracking Google Analytic goal!
		if (production) {
			ga('send', {
				hitType: 'event',
				eventCategory: 'Subscription',
				eventAction: 'Submit'
			});
		}

		if (production) {
			ants_analytic.push({
				conversionId: metaService.configs.antsConversionId,
				customParams: [{
					'is_ecomm': 0,
					'ecomm_pagetype': 'purchase',
					'ecomm_quantity': 1,
					'ecomm_totalvalue': 1
				}]
			});
		}

		_this.resetRegisterForm();
		_this.subscriptionPopup = false;

		//Send form to Twin's server!
		if (production) {
			$http.get(apiHost + '/customer/insert/json', {
				params: formData
			}).success(function (data) {
				_this.subscriptionSuccessHandler();
				$http.get(apiHost + '/mail/sent/json', { params: formData }).success(function (data) {
					console.log('email...', data);
				});
			});
		} else {
			_this.subscriptionSuccessHandler(); //Auto success on test environment!
		}
	};

	global.get_info = function (_userInfo) {
		$scope.$apply(function () {
			// user info get here
			console.log("ant's get_info function:", _userInfo);

			// fill userInfo to FORM đăng ký
			_this.userName = _userInfo.name || '';
			_this.userPhone = _userInfo.phone || '';
			_this.userEmail = _userInfo.email || '';
			_this.userNote = _userInfo.note || '';

			//Store Social profile
			if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
		});
	};
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory', 'metaService'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/helper":18}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mainController = exports.mainController = function mainController($rootScope, $scope, $interval, $timeout, $state, $window, $http, metaService) {
	var _this = this;

	_classCallCheck(this, mainController);

	this.features = [];
	this.sliders = [];
	var _metaService$configs = metaService.configs;
	var apiHost = _metaService$configs.apiHost;
	var domain = _metaService$configs.domain;
	//Tracking code..

	ga('send', 'pageview');
	fbq('track', "PageView");

	this.loadData = function () {
		$rootScope.activeGroup = metaService.links[0];$window.scrollTo(0, 0);

		$http.get(apiHost + '/page/get/json', {
			params: { domain: domain, alias: "trang-chu" }
		}).success(function (data) {
			fbq('track', 'ViewContent');
			$rootScope.activeContents = [data.results[0].Page];
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'banner', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			_this.features = data.results;
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'HomeSlider', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			_this.sliders = data.results.map(function (item) {
				return item.Post;
			});
		});

		_this.sliderHeight = $(window).height() - 70;
		$rootScope.$on('sizeChange', function (event, size) {
			$scope.$apply(function () {
				_this.sliderHeight = size.height > 570 ? size.height - 70 : 500;
			});
		});
	};

	this.loadData();
	$scope.$watch('activeLanguage', function () {
		_this.loadData();
	});
};

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var newsController = exports.newsController = function newsController($rootScope, $scope, $window, $http, $state, metaService) {
	var _this = this;

	_classCallCheck(this, newsController);

	var _metaService$configs = metaService.configs;
	var apiHost = _metaService$configs.apiHost;
	var domain = _metaService$configs.domain;

	//Tracking code..

	ga('send', 'pageview');
	fbq('track', "PageView");

	this.loadData = function () {
		$rootScope.activeGroup = null;

		_this.pageAlias = $state.params.alias;$window.scrollTo(0, 0);
		_this.singleMode = _this.pageAlias !== '';

		if (_this.singleMode) {
			$http.get(apiHost + '/post/get/json', {
				params: { domain: domain, alias: _this.pageAlias, lang: $rootScope.activeLanguage.id }
			}).success(function (data) {
				fbq('track', 'ViewContent');
				if (data.results[0]) {
					_this.activeNews = data.results[0].Post;
				}
			});
		} else {
			$http.get(apiHost + '/banner/get/json', {
				params: { domain: domain, type: 'news', lang: $rootScope.activeLanguage.id }
			}).success(function (data) {
				fbq('track', 'ViewContent');
				_this.allNews = data.results;
			});
		}
	};
	this.loadData();
	$scope.$watch('activeLanguage', function () {

		_this.loadData();
	});
};

newsController.$inject = ['$rootScope', '$scope', '$window', '$http', '$state', 'metaService'];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageController = exports.pageController = function () {
	function pageController($rootScope, $scope, $element, $interval, $timeout, $state, $window, $http, metaService) {
		var _this = this;

		_classCallCheck(this, pageController);

		var _metaService$configs = metaService.configs;
		var apiHost = _metaService$configs.apiHost;
		var domain = _metaService$configs.domain;

		//Tracking code..

		ga('send', 'pageview');
		fbq('track', "PageView");
		fbq('track', 'ViewContent');
		this.loadData = function () {
			var pageAlias = $state.params.alias,
			    parentGroup = _this.findParentGroup(pageAlias, metaService.links),
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
						$http.get(apiHost + '/page/get/json', { params: { domain: domain, alias: child.alias } }).success(function (data) {
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
		};
		this.loadData();
		$rootScope.$watch('activeLanguage', function () {
			_this.loadData();
		});
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

},{}],13:[function(require,module,exports){
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
(function (global){
"use strict";

var _helper = require("./utils/helper");

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

global.fixAnalyticMissing = _helper.fixAnalyticMissing;
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/newsArea":4,"./component/popup":5,"./component/sidebar":6,"./component/slider":7,"./component/subscriptionForm":8,"./controller/applicationController":9,"./controller/mainController":10,"./controller/newsController":11,"./controller/pageController":12,"./controller/splashController":13,"./metaService":15,"./routerConfig":16,"./utils/filter":17,"./utils/helper":18}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

exports.default = ['$rootScope', '$http', '$timeout', function ($rootScope, $http, $timeout) {
	var _this = this;

	this.ready = false;

	this.loadMenu = function (configs, configResolve, navigationResolve) {
		var _ref = configs || _this.configs;

		var apiHost = _ref.apiHost;
		var domain = _ref.domain;


		$http.get(apiHost + '/menu/get/json', {
			params: { domain: domain, lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			_this.links = data.results;

			if (navigationResolve) navigationResolve(_this.links);
			if (configResolve) {
				configResolve(_this.configs);
			}

			$timeout(function () {
				$rootScope.$broadcast('metaServiceReady');
				_this.ready = true;
			}, 0);
		});
	};

	this.promise = new Promise(function (configResolve, reject) {
		$rootScope.languages = _helper.languages;
		$rootScope.activeLanguage = _helper.languages[0];

		$rootScope.localization = _helper.localization[$rootScope.activeLanguage.lang];
		$rootScope.$watch('activeLanguage', function () {
			$rootScope.localization = _helper.localization[$rootScope.activeLanguage.lang];
			if ($rootScope.configs) _this.loadMenu($rootScope.configs);
		});

		$rootScope.changeLanguage = function (language) {
			$rootScope.activeLanguage = language;
		};

		$http.get('/configs').success(function (data) {
			data.domain = data.domain || location.host;
			var configs = data;var apiHost = configs.apiHost;
			var domain = configs.domain;

			_this.configs = configs;
			$rootScope.configs = configs;
			//Override translation (if possible)..
			_helper.languages.forEach(function (_ref2) {
				var lang = _ref2.lang;

				if (configs.translation[lang]) {
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = Object.keys(configs.translation[lang])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var key = _step.value;

							_helper.localization[lang][key] = configs.translation[lang][key];
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
			});

			if (configs.languages) {
				$rootScope.languages = configs.languages;
			}

			new Promise(function (navigationResolve, reject) {
				_this.loadMenu(configs, configResolve, navigationResolve);
			});
		});
	});
}];

},{"./utils/helper":18}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

var routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider) {
	$stateProvider.state('splash', splashRoute).state('home', mainRoute).state('page', pageRoute).state('news', newsRoute);

	$urlRouterProvider.otherwise('/splash');

	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
	$locationProvider.html5Mode(true);
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

		return moment(date).format(format);
	};
}

},{}],18:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fixAnalyticMissing = fixAnalyticMissing;
exports.find = find;
exports.findParentMenuByAlias = findParentMenuByAlias;
exports.isEmailValid = isEmailValid;
exports.generateNumberUUID = generateNumberUUID;
exports.safeRange = safeRange;
var apiHost = exports.apiHost = 'http://128.199.227.132'; //'rivercity99.vn';//http://103.56.157.66/realestate';
var registerFields = exports.registerFields = ['userName', 'userPhone', 'userEmail', 'userNote'];
var languages = exports.languages = [{ lang: "vietnamese", id: 1, display: "Tiếng Việt" }];

var localization = exports.localization = {
	vietnamese: {
		register: "ĐĂNG KÝ",
		news: "TIN TỨC",
		registerTitleHead: '<span>Gọi </span>',
		registerTitleTail: ' \n\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t<span> hoặc gửi thông tin để nhận</span> \n\t\t\t<span class="strong">BÁO GIÁ</span>\n\t\t\t<span>từ</span> \n\t\t\t<span class="strong">CHỦ ĐẦU TƯ</span>',
		fullNamePlaceholder: "Họ và tên*",
		phonePlaceholder: "Điện thoại*",
		emailPlaceholder: "Email (không bắt buộc)",
		notePlaceholder: "Ghi chú",
		send: "Gửi",
		designedBy: "Thiết kể bởi",
		designCompany: '<a href="http://twin.vn" style="text-decoration:none;color:#2EB3D3;" target="_blank">TWIN Software Solutions</a>'
	},
	english: {
		register: "SUBSCRIBE",
		news: "NEWS",
		registerTitleHead: '<span>Call </span>',
		registerTitleTail: ' \n\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t<span> or subscribe to receive </span> \n\t\t\t<span class="strong">QUOTATION</span>\n\t\t\t<span>from</span> \n\t\t\t<span class="strong">INVESTOR</span>',
		fullNamePlaceholder: "Full name*",
		phonePlaceholder: "Phone*",
		emailPlaceholder: "Email (optional)",
		notePlaceholder: "Note..",
		send: "Send",
		designedBy: "Designed by",
		designCompany: '<a href="http://twin.vn" style="text-decoration:none;color:#2EB3D3;" target="_blank">TWIN Software Solutions</a>'
	}
};

var emptyFunction = function emptyFunction() {};

function fixAnalyticMissing() {
	if (!global.ga) global.ga = emptyFunction;
	if (!global.fbq) global.fbq = emptyFunction;
	if (!global.ants_userInfoListener) global.ants_userInfoListener = emptyFunction;
	if (!global.ants_analytic) global.ants_analytic = [];
}

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

function findParentMenuByAlias(alias, links) {
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var group = _step3.value;

			if (group.alias === alias) return group;
			if (group.children) {
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = group.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var child = _step4.value;

						if (child.alias === alias) return group;
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4.return) {
							_iterator4.return();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			}
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcZm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXG5hdmlnYXRpb24uanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbkxpbmsuanMiLCJhcHBcXGNvbXBvbmVudFxcbmV3c0FyZWEuanMiLCJhcHBcXGNvbXBvbmVudFxccG9wdXAuanMiLCJhcHBcXGNvbXBvbmVudFxcc2lkZWJhci5qcyIsImFwcFxcY29tcG9uZW50XFxhcHBcXGNvbXBvbmVudFxcc2xpZGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXHN1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHBcXGNvbnRyb2xsZXJcXGFwcFxcY29udHJvbGxlclxcYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxtYWluQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxcbmV3c0NvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhZ2VDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxZQUFELEVBQWUsT0FBZixFQUF3QixVQUFVLFVBQVYsRUFBc0IsS0FBdEIsRUFBNkI7O0FBR25FLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTiwwMkJBSk07QUEwQk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUM7QUFDdEMsU0FBTSxjQUFOLEdBQXVCLFVBQUMsUUFBRCxFQUFjO0FBQ3BDLFdBQU8sU0FBUyxFQUFULElBQWUsV0FBVyxjQUFYLENBQTBCLEVBQWhEO0FBQ0EsSUFGRDtBQUdBO0FBOUJLLEVBQVA7QUFnQ0EsQ0FuQ2MsQzs7Ozs7Ozs7a0JDQUEsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixhQUF6QixFQUF3QyxVQUFVLFVBQVYsRUFBc0IsTUFBdEIsRUFBOEIsV0FBOUIsRUFBMkM7QUFDakcsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU87QUFDTixVQUFPLEdBREQ7QUFFTixpQkFBYztBQUZSLEdBSEQ7QUFPTix5eURBUE07QUF5Q04sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQTJCO0FBQ2hDLFNBQU0sS0FBTixHQUFjLFlBQVksS0FBMUI7O0FBRUEsY0FBVyxHQUFYLENBQWUsa0JBQWYsRUFBbUMsWUFBTTtBQUN4QyxZQUFRLEdBQVIsQ0FBWSxzQkFBWjtBQUNBLFVBQU0sS0FBTixHQUFjLFlBQVksS0FBMUI7QUFDQSxJQUhEOztBQUtBLFNBQU0sWUFBTixHQUFxQixZQUFZO0FBQ2hDLFVBQU0sWUFBTixHQUFxQixDQUFDLE1BQU0sWUFBNUI7QUFDQSxJQUZEOztBQUlBLFNBQU0sV0FBTixHQUFvQixZQUFZO0FBQy9CLFVBQU0sT0FBTixDQUFjLE9BQWQsQ0FBc0IsaUJBQXRCLEdBQTBDLENBQUMsTUFBTSxPQUFOLENBQWMsT0FBZCxDQUFzQixpQkFBakU7QUFDQSxJQUZEOztBQUlBLFNBQU0sa0JBQU4sR0FBMkIsVUFBVSxRQUFWLEVBQW9CO0FBQzlDLFFBQUksU0FBUyxLQUFiLEVBQW9CO0FBQ25CLFlBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsRUFBQyxPQUFPLFNBQVMsS0FBakIsRUFBbEI7QUFDQSxLQUZELE1BR0ssSUFBSSxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsS0FBd0IsU0FBUyxRQUFULENBQWtCLENBQWxCLEVBQXFCLEtBQWpELEVBQXdEO0FBQzVELFlBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsRUFBQyxPQUFPLFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixLQUE3QixFQUFsQjtBQUNBOztBQUVELFVBQU0sWUFBTjtBQUNBLElBVEQ7O0FBV0EsU0FBTSxlQUFOLEdBQXdCLFlBQU07QUFDN0IsV0FBTyxPQUFPLE9BQVAsQ0FBZSxJQUFmLEtBQXdCLE1BQS9CO0FBQ0EsSUFGRDtBQUdBO0FBdkVLLEVBQVA7QUF5RUEsQ0ExRWMsQzs7Ozs7Ozs7QUNBZixJQUFJLFdBQVcsa0JBQWY7QUFBQSxJQUFtQyxZQUFZLGtCQUEvQztBQUFBLElBQW1FLFVBQVUsRUFBN0U7O2tCQUVlLENBQUMsT0FBRCxFQUFVLFlBQVYsRUFBd0IsUUFBeEIsRUFBa0MsYUFBbEMsRUFBaUQsVUFBVSxLQUFWLEVBQWlCLFVBQWpCLEVBQTZCLE1BQTdCLEVBQXFDLFdBQXJDLEVBQWtEO0FBQ2pILFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPO0FBQ04sYUFBVTtBQURKLEdBSEQ7QUFNTixvaEJBTk07QUFhTixRQUFNLGNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsRUFBMkI7QUFDaEMsU0FBTSxNQUFOLEdBQWUsS0FBZjtBQUNBLFNBQU0sUUFBTixHQUFpQixNQUFNLFFBQU4sQ0FBZSxJQUFmLENBQW9CLEtBQXBCLENBQTBCLFFBQTFCLElBQXNDLE9BQXZEOztBQUVBLE9BQUksTUFBTSxRQUFOLENBQWUsUUFBZixJQUEyQixNQUFNLFFBQU4sQ0FBZSxRQUFmLENBQXdCLE1BQXZELEVBQStEO0FBQzlELFVBQU0sUUFBTixDQUFlLFFBQWYsQ0FBd0IsT0FBeEIsQ0FBZ0MsaUJBQVM7QUFDeEMsU0FBSSxlQUFlLE1BQU0sSUFBTixDQUFXLEtBQVgsQ0FBaUIsU0FBakIsSUFBOEIsT0FBakQ7QUFDQSxTQUFJLGVBQWUsTUFBTSxRQUF6QixFQUFtQztBQUNsQyxZQUFNLFFBQU4sR0FBaUIsWUFBakI7QUFDQTtBQUNELEtBTEQ7QUFNQTs7QUFFRCxTQUFNLGVBQU4sR0FBd0IsVUFBVSxRQUFWLEVBQW9CO0FBQzNDLFdBQU8sV0FBVyxXQUFYLElBQTBCLFdBQVcsV0FBWCxDQUF1QixFQUF2QixLQUE4QixTQUFTLEVBQXhFO0FBQ0EsSUFGRDs7QUFJQSxTQUFNLGtCQUFOLEdBQTJCLFVBQVUsUUFBVixFQUFvQjtBQUM5QyxRQUFJLFNBQVMsS0FBYixFQUFvQjtBQUNuQixZQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLEVBQUMsT0FBTyxTQUFTLEtBQWpCLEVBQWxCO0FBQ0EsS0FGRCxNQUdLLElBQUksU0FBUyxRQUFULENBQWtCLENBQWxCLEtBQXdCLFNBQVMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixLQUFqRCxFQUF3RDtBQUM1RCxZQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLEVBQUMsT0FBTyxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsS0FBN0IsRUFBbEI7QUFDQTtBQUNELElBUEQ7QUFRQTtBQXRDSyxFQUFQO0FBd0NBLENBekNjLEM7Ozs7Ozs7O2tCQ0ZBLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsVUFBVSxVQUFWLEVBQXNCLEtBQXRCLEVBQTZCO0FBQ25FLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixxeUJBSE07QUFpQk4sUUFBTSxjQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCLEVBQTJCLENBQ2hDO0FBbEJLLEVBQVA7QUFvQkEsQ0FyQmMsQzs7Ozs7Ozs7a0JDQUEsQ0FBQyxZQUFZO0FBQzNCLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixjQUFZLElBSE47QUFJTixTQUFPLEVBQUUsUUFBUSxHQUFWLEVBSkQ7QUFLTix5T0FMTTtBQVdOLFFBQU0sY0FBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBQWlDO0FBQ3RDLFNBQU0sTUFBTixHQUFlLFlBQVk7QUFDMUIsVUFBTSxNQUFOLEdBQWUsQ0FBQyxNQUFNLE1BQXRCO0FBQ0EsSUFGRDtBQUdBO0FBZkssRUFBUDtBQWlCQSxDQWxCYyxDOzs7Ozs7OztBQ0FmLElBQU0sbUJBQW1CLEdBQXpCOztrQkFFZSxDQUFDLFlBQUQsRUFBZSxVQUFmLEVBQTJCLFVBQVUsVUFBVixFQUFzQixRQUF0QixFQUFnQztBQUN6RSxRQUFPO0FBQ04sWUFBVSxHQURKO0FBRU4sV0FBUyxJQUZIO0FBR04sY0FBWSxJQUhOO0FBSU4sU0FBTyxFQUFFLFFBQVEsR0FBVixFQUpEO0FBS04scXFCQUxNO0FBZ0JOLFFBQU0sY0FBVSxLQUFWLEVBQWlCLE9BQWpCLEVBQTBCLEtBQTFCLEVBQWlDO0FBQ3RDLE9BQUksYUFBSixFQUFtQixZQUFuQixDQUFpQyxNQUFNLFdBQU4sR0FBb0IsQ0FBcEI7OztBQUdqQyxZQUFTLFlBQU07QUFDZCxVQUFNLElBQU4sR0FBYSxXQUFXLElBQXhCO0FBQ0Esb0JBQWdCLFFBQVEsV0FBUixFQUFoQjtBQUNBLG1CQUFlLFFBQVEsT0FBUixDQUFnQixTQUFoQixFQUEyQixXQUEzQixFQUFmO0FBQ0EsSUFKRCxFQUlHLEdBSkg7O0FBTUEsY0FBVyxHQUFYLENBQWUsY0FBZixFQUErQixVQUFDLEtBQUQsRUFBUSxjQUFSLEVBQTJCOzs7QUFHekQsVUFBTSxNQUFOLENBQWEsWUFBTTtBQUNsQixTQUFJLGlCQUFpQixFQUFFLFFBQUYsRUFBWSxNQUFaLEVBQXJCO0FBQUEsU0FBMkMsZUFBZSxFQUFFLE1BQUYsRUFBVSxNQUFWLEVBQTFEO0FBQUEsU0FDQyxTQUFTLFFBQVEsTUFBUixFQURWOztBQUdBLFNBQUksZUFBZSxhQUFuQixFQUFrQztBQUNqQyxVQUFJLHdCQUF3QixlQUFlLEdBQWYsR0FBcUIsWUFBckIsR0FBb0MsT0FBTyxHQUFQLEdBQWEsYUFBN0U7QUFBQSxVQUNDLHVCQUF1QixlQUFlLEdBQWYsR0FBcUIsWUFBckIsR0FBb0MsaUJBQWlCLFlBRDdFOztBQUdBLFVBQUkseUJBQXlCLENBQUMsb0JBQTlCLEVBQW9EO0FBQ25ELGFBQU0sV0FBTixHQUFvQixlQUFlLEdBQWYsR0FBcUIsWUFBckIsR0FBb0MsYUFBcEMsR0FBb0QsZ0JBQXhFO0FBQ0E7QUFDRCxNQVBELE1BT08sSUFBSSxlQUFlLEdBQWYsR0FBcUIsT0FBTyxHQUFQLEdBQWEsZ0JBQXRDLEVBQXdEO0FBQzlELFlBQU0sV0FBTixHQUFvQixlQUFlLEdBQW5DO0FBQ0E7QUFDRCxLQWREO0FBZUEsSUFsQkQ7QUFtQkE7QUE3Q0ssRUFBUDtBQStDQSxDQWhEYyxDOzs7Ozs7Ozs7a0JDRkEsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixVQUFVLFNBQVYsRUFBcUIsUUFBckIsRUFBK0I7QUFDdkUsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU8sRUFBRSxPQUFPLEdBQVQsRUFIRDtBQUlOLGNBQVksSUFKTjtBQUtOLG93QkFMTTtBQW9CTixRQUFNLGNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsS0FBakIsRUFBMkI7QUFDaEMsT0FBSSxlQUFlLFFBQVEsSUFBUixDQUFhLGVBQWIsQ0FBbkI7QUFBQSxPQUFrRCxpQkFBaUIsUUFBUSxJQUFSLENBQWEsZ0JBQWIsQ0FBbkU7QUFBQSxPQUNDLGFBQWEsS0FBSyxNQURuQjtBQUFBLE9BQzJCLGlCQUFpQixDQUQ1Qzs7QUFHQSxTQUFNLFdBQU4sR0FBb0IsQ0FBcEI7QUFDQSxTQUFNLFdBQU4sR0FBb0IsTUFBTSxLQUFOLENBQVksTUFBTSxXQUFsQixDQUFwQjs7QUFFQSxTQUFNLE1BQU4sQ0FBYSxPQUFiLEVBQXNCLFlBQU07QUFDM0IsY0FBVSxDQUFWO0FBQ0EsSUFGRDs7QUFJQSxPQUFJLE9BQU8sY0FBWCxFQUEyQixVQUFVLE1BQVYsQ0FBaUIsT0FBTyxjQUF4Qjs7QUFFM0IsT0FBSSxZQUFZLFNBQVosU0FBWSxDQUFVLFNBQVYsRUFBcUI7QUFDcEMsVUFBTSxhQUFOLEdBQXNCLE1BQU0sS0FBTixDQUFZLE1BQU0sV0FBbEIsQ0FBdEI7QUFDQSxRQUFJLE1BQU0sYUFBVixFQUF5QixNQUFNLGFBQU4sQ0FBb0IsUUFBcEIsR0FBK0IsS0FBL0I7O0FBRXpCLFVBQU0sV0FBTixHQUFvQixhQUFhLFNBQWIsR0FBeUIsU0FBekIsR0FBcUMsTUFBTSxXQUFOLEdBQW9CLENBQTdFO0FBQ0EsUUFBSSxNQUFNLFdBQU4sR0FBb0IsQ0FBeEIsRUFBMkI7QUFDMUIsV0FBTSxXQUFOLEdBQW9CLE1BQU0sS0FBTixDQUFZLE1BQVosR0FBcUIsQ0FBekM7QUFDQSxLQUZELE1BRU8sSUFBSSxNQUFNLFdBQU4sSUFBcUIsTUFBTSxLQUFOLENBQVksTUFBckMsRUFBNkM7QUFDbkQsV0FBTSxXQUFOLEdBQW9CLENBQXBCO0FBQ0E7O0FBRUQsVUFBTSxXQUFOLEdBQW9CLE1BQU0sS0FBTixDQUFZLE1BQU0sV0FBbEIsQ0FBcEI7QUFDQSxRQUFJLE1BQU0sV0FBVixFQUF1QixNQUFNLFdBQU4sQ0FBa0IsUUFBbEIsR0FBNkIsSUFBN0I7Ozs7O0FBS3ZCLGNBQVUsRUFBVixDQUFhLFlBQWIsRUFBMkIsQ0FBM0IsRUFBOEIsRUFBQyxNQUFNLFVBQVAsRUFBbUIsU0FBUyxHQUE1QixFQUE5QjtBQUNBLGNBQVUsTUFBVixDQUFpQixjQUFqQixFQUFpQyxjQUFqQyxFQUFpRCxFQUFDLE1BQU0sVUFBUCxFQUFtQixTQUFTLEdBQTVCLEVBQWpELEVBQW1GLEVBQUMsTUFBTSxVQUFQLEVBQW1CLFNBQVMsR0FBNUIsRUFBbkY7OztBQUdBLFFBQUksT0FBTyxjQUFYLEVBQTJCLFVBQVUsTUFBVixDQUFpQixPQUFPLGNBQXhCO0FBQzNCLFdBQU8sY0FBUCxHQUF3QixVQUFVO0FBQUEsWUFBTSxXQUFOO0FBQUEsS0FBVixFQUE2QixLQUE3QixDQUF4QjtBQUNBLElBdkJEOztBQXlCQSxTQUFNLFFBQU4sR0FBaUIsVUFBQyxRQUFELEVBQWM7QUFDOUIsUUFBSSxZQUFZLE1BQU0sV0FBdEIsRUFBbUM7QUFDbEMsZUFBVSxNQUFNLEtBQU4sQ0FBWSxPQUFaLENBQW9CLFFBQXBCLENBQVY7QUFDQTtBQUNELElBSkQ7O0FBTUEsU0FBTSxTQUFOLEdBQWtCLFVBQUMsQ0FBRDtBQUFBLFdBQU8sVUFBVSxNQUFNLFdBQU4sR0FBb0IsQ0FBOUIsQ0FBUDtBQUFBLElBQWxCO0FBQ0EsU0FBTSxVQUFOLEdBQW1CLFVBQUMsQ0FBRDtBQUFBLFdBQU8sVUFBVSxNQUFNLFdBQU4sR0FBb0IsQ0FBOUIsQ0FBUDtBQUFBLElBQW5COztBQUVBLFVBQU8sY0FBUCxHQUF3QixVQUFVO0FBQUEsV0FBTSxXQUFOO0FBQUEsSUFBVixFQUE2QixLQUE3QixDQUF4QjtBQUNBO0FBcEVLLEVBQVA7QUFzRUEsQ0F2RWMsQzs7Ozs7Ozs7Ozs7QUNBZjs7a0JBRWUsQ0FBQyxZQUFELEVBQWUsT0FBZixFQUF3QixhQUF4QixFQUF1QyxVQUFVLFVBQVYsRUFBc0IsS0FBdEIsRUFBNkIsV0FBN0IsRUFBMEM7QUFDL0YsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU8sRUFBRSxjQUFjLEdBQWhCLEVBQXFCLFlBQVksR0FBakMsRUFIRDtBQUlOLGtoREFKTTtBQTJCTixRQUFNLGNBQVUsS0FBVixFQUFpQixPQUFqQixFQUEwQixLQUExQixFQUFpQztBQUFBLDhCQUNkLFlBQVksT0FERTtBQUFBLE9BQ2pDLE9BRGlDLHdCQUNqQyxPQURpQztBQUFBLE9BQ3hCLE1BRHdCLHdCQUN4QixNQUR3Qjs7QUFFdEMsU0FBTSxPQUFOLEdBQWdCLFlBQVksT0FBNUI7QUFDQSxTQUFNLE9BQU4sR0FBZ0IsV0FBVyxPQUEzQjs7QUFFQSxTQUFNLE1BQU4sR0FBZSxXQUFXLGNBQTFCOztBQUVBLFNBQU0sV0FBTixHQUFvQixZQUFZO0FBQy9CO0FBQ0EsSUFGRDs7QUFJQSxTQUFNLGFBQU4sR0FBc0IsWUFBWTtBQUNqQyxxQkFBaUIsT0FBakI7QUFDQSxJQUZEO0FBR0E7QUF6Q0ssRUFBUDtBQTJDQSxDQTVDYyxDOzs7QUE4Q2YsSUFBSSxTQUFTLENBQUMsVUFBRCxFQUFhLFdBQWIsRUFBeUIsV0FBekIsQ0FBYjs7Ozs7Ozs7Ozs7OztBQ2hEQTs7OztJQU9hLHFCLFdBQUEscUIsR0FTWiwrQkFBYSxVQUFiLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDLEVBQXlDLFFBQXpDLEVBQW1ELFNBQW5ELEVBQThELE9BQTlELEVBQXVFLEtBQXZFLEVBQStFLGlCQUEvRSxFQUFrRyxXQUFsRyxFQUErRztBQUFBOztBQUFBOztBQUFBLE1BUC9HLGVBTytHLEdBUDdGLEtBTzZGO0FBQUEsTUFOL0csS0FNK0csR0FOdkcsSUFNdUc7QUFBQSxNQUwvRyxVQUsrRyxHQUxsRyxRQUtrRztBQUFBLE1BSi9HLFlBSStHLEdBSmhHLEtBSWdHO0FBQUEsTUFIL0csaUJBRytHLEdBSDNGLEtBRzJGO0FBQUEsTUFGL0csbUJBRStHLEdBRnpGLEtBRXlGOztBQUM5RyxZQUFXLE9BQVgsR0FBcUIsWUFBWSxPQUFqQyxDO0FBQ0EsWUFBVyxPQUFYLEdBQXFCLElBQXJCOztBQUVBLFlBQVcsY0FBWCxHQUE0QixFQUE1QjtBQUNBLE1BQUssUUFBTCxHQUFnQixrQkFBa0IsY0FBbEIsRUFBaEI7QUFDQSxNQUFLLFFBQUwsQ0FBYyxRQUFkLENBQXVCLFNBQXZCO0FBQ0EsUUFBTyxLQUFQLEdBQWUsS0FBZjs7QUFFQSxRQUFPLFdBQVAsR0FBcUIsVUFBQyxNQUFELEVBQVk7QUFDaEMsU0FBTyxNQUFQLENBQWMsWUFBTTtBQUNuQixTQUFLLGlCQUFMLEdBQXlCLFNBQVMsTUFBVCxHQUFrQixDQUFDLE1BQUssaUJBQWpEO0FBQ0EsR0FGRDtBQUdBLEVBSkQ7O0FBTUEsTUFBSyxhQUFMLEdBQXFCLFlBQU07QUFDMUIsUUFBSyxlQUFMLGlDQUFtRCxnQ0FBbUIsRUFBbkIsQ0FBbkQ7QUFDQSxRQUFLLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsV0FBUztBQUFBLFVBQU0sTUFBSyxtQkFBTCxHQUEyQixLQUFqQztBQUFBLEdBQVQsRUFBaUQsSUFBakQ7QUFDQSxFQUpEOztBQU1BLFlBQVcsR0FBWCxDQUFlLG1CQUFmLEVBQW9DLFlBQU07QUFDekMsUUFBSyxRQUFMLENBQWMsS0FBZDtBQUNBLEVBRkQ7O0FBSUEsWUFBVyxHQUFYLENBQWUscUJBQWYsRUFBc0MsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFpQixRQUFqQixFQUEyQixTQUEzQixFQUFzQyxVQUF0QyxFQUFxRDtBQUMxRixRQUFLLFVBQUwsR0FBa0IsUUFBUSxJQUExQixDQUFnQyxNQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ2hDLFFBQUssUUFBTCxDQUFjLFFBQWQ7OztBQUdBLE1BQUksaUJBQWlCLE1BQXJCO0FBQ0EsTUFBSSxPQUFPLEVBQVAsQ0FBVSxNQUFWLENBQUosRUFBdUI7QUFDdEIsT0FBSSxZQUFZLE9BQU8sTUFBUCxDQUFjLEtBQTlCO0FBQUEsT0FBcUMsYUFBYSxtQ0FBc0IsU0FBdEIsRUFBaUMsWUFBWSxLQUE3QyxDQUFsRDtBQUNBLG9CQUFpQixXQUFXLElBQTVCO0FBQ0EsR0FIRCxNQUdPLElBQUksT0FBTyxFQUFQLENBQVUsTUFBVixDQUFKLEVBQXVCO0FBQzdCLG9CQUFpQixNQUFqQjtBQUNBOztBQUVELElBQUUsRUFBRSwyQkFBRixFQUErQixDQUEvQixDQUFGLEVBQXFDLElBQXJDLENBQTBDLFNBQTFDLEVBQXFELGNBQXJEO0FBQ0EsV0FBUyxZQUFNO0FBQ2QsU0FBSyxLQUFMLEdBQWEsSUFBYjtBQUNBLEtBQUUsUUFBRixFQUFZLE9BQVosQ0FBb0IsT0FBcEIsRTtBQUNBLEdBSEQsRUFHRyxHQUhIO0FBSUEsRUFsQkQ7O0FBb0JBLEtBQUkscUJBQXFCLFNBQXJCLGtCQUFxQixDQUFDLE1BQUQsRUFBWTtBQUNwQyxVQUFRLElBQVIsQ0FBYSxXQUFiLEVBQTBCLE1BQTFCO0FBRG9DLDZCQUVWLFlBQVksT0FGRjtBQUFBLE1BRTlCLE9BRjhCLHdCQUU5QixPQUY4QjtBQUFBLE1BRXJCLE1BRnFCLHdCQUVyQixNQUZxQjs7QUFHcEMsUUFBTSxHQUFOLENBQWEsT0FBYix1QkFBd0M7QUFDdkMsV0FBUSxFQUFFLGNBQUYsRUFBVSxNQUFNLFFBQWhCLEVBQTBCLE1BQU0sV0FBVyxjQUFYLENBQTBCLEVBQTFEO0FBRCtCLEdBQXhDLEVBRUcsT0FGSCxDQUVXLGdCQUFRO0FBQ2xCLFNBQUssT0FBTCxHQUFlLEtBQUssT0FBcEI7QUFDQSxHQUpEOztBQU1BLFFBQU0sR0FBTixDQUFhLE9BQWIsdUJBQXdDO0FBQ3ZDLFdBQVEsRUFBRSxjQUFGLEVBQVUsTUFBTSxNQUFoQixFQUF3QixNQUFNLFdBQVcsY0FBWCxDQUEwQixFQUF4RCxFQUE0RCxPQUFPLENBQW5FO0FBRCtCLEdBQXhDLEVBRUcsT0FGSCxDQUVXLGdCQUFRO0FBQ2xCLGNBQVcsSUFBWCxHQUFrQixLQUFLLE9BQXZCO0FBQ0EsR0FKRDtBQUtBLEVBZEQ7O0FBZ0JBLEtBQUksWUFBWSxLQUFoQixFQUF1QixtQkFBbUIsbUNBQW5CO0FBQ3ZCLFlBQVcsR0FBWCxDQUFlLGtCQUFmLEVBQW1DO0FBQUEsU0FBTSxtQkFBbUIsbUNBQW5CLENBQU47QUFBQSxFQUFuQzs7QUFFQSxNQUFLLGtCQUFMLEdBQTBCLENBQTFCO0FBQ0EsR0FBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixVQUFDLEtBQUQsRUFBVztBQUMzQixNQUFJLFlBQVksRUFBRSxNQUFGLEVBQVUsU0FBVixFQUFoQjtBQUNBLGFBQVcsVUFBWCxDQUFzQixjQUF0QixFQUFzQyxFQUFDLEtBQUssU0FBTixFQUFpQixlQUFlLFlBQVksTUFBSyxrQkFBakQsRUFBdEM7QUFDQSxRQUFLLGtCQUFMLEdBQTBCLFNBQTFCO0FBQ0EsRUFKRDs7QUFNQSxHQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQU07QUFDdEIsYUFBVyxVQUFYLENBQXNCLFlBQXRCLEVBQW9DO0FBQ25DLFdBQVEsRUFBRSxNQUFGLEVBQVUsTUFBVixFQUQyQjtBQUVuQyxVQUFPLEVBQUUsTUFBRixFQUFVLEtBQVY7QUFGNEIsR0FBcEM7QUFJQSxFQUxEOzs7QUFRQSx3QkFBZSxPQUFmLENBQXVCLGlCQUFTO0FBQy9CLFFBQUssS0FBTCxJQUFjLEVBQWQsQ0FBa0IsTUFBSyxRQUFNLE9BQVgsSUFBc0IsRUFBdEI7QUFDbEIsRUFGRDs7QUFJQSxNQUFLLGlCQUFMLEdBQXlCLFlBQU07QUFDOUIsUUFBSyxpQkFBTCxHQUF5QixLQUF6QjtBQUNBLEVBRkQ7O0FBSUEsTUFBSyxpQkFBTCxHQUF5QixZQUFNO0FBQzlCLHlCQUFlLE9BQWYsQ0FBdUI7QUFBQSxVQUFTLE1BQUssS0FBTCxJQUFjLEVBQXZCO0FBQUEsR0FBdkI7QUFDQSxFQUZEOztBQUlBLE1BQUssa0JBQUwsR0FBMEIsWUFBTTtBQUMvQix5QkFBZSxPQUFmLENBQXVCO0FBQUEsVUFBUyxNQUFLLFFBQU0sT0FBWCxJQUFzQixFQUEvQjtBQUFBLEdBQXZCO0FBQ0EsRUFGRDs7QUFJQSxNQUFLLDBCQUFMLEdBQWtDLFlBQU07QUFDdkMsUUFBSyxlQUFMLGlDQUFtRCxnQ0FBbUIsRUFBbkIsQ0FBbkQ7QUFDQSxRQUFLLG1CQUFMLEdBQTJCLElBQTNCO0FBQ0EsV0FBUyxZQUFNO0FBQ2QsU0FBSyxtQkFBTCxHQUEyQixLQUEzQjtBQUNBLFlBQVMsTUFBVDtBQUNBLEdBSEQsRUFHRyxJQUhIO0FBSUEsRUFQRDs7QUFTQSxNQUFLLGNBQUwsR0FBc0IsV0FBVyxjQUFYLEdBQTRCLFVBQUMsS0FBRCxFQUFXO0FBQUEsOEJBQ3RCLFlBQVksT0FEVTtBQUFBLE1BQ3RELE9BRHNELHlCQUN0RCxPQURzRDtBQUFBLE1BQzdDLE1BRDZDLHlCQUM3QyxNQUQ2QztBQUFBLE1BQ3JDLFVBRHFDLHlCQUNyQyxVQURxQzs7QUFFNUQsVUFBUSxHQUFSLENBQVksa0JBQVosRUFBZ0MsVUFBaEM7QUFDQSxRQUFNLGNBQU4sR0FBd0IsTUFBSyxrQkFBTDs7QUFFeEIsTUFBSSxNQUFLLFVBQUwsRUFBaUIsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUMsTUFBSyxlQUFMLElBQXdCLFVBQXhCO0FBQ2pDLE1BQUksTUFBSyxXQUFMLEVBQWtCLE1BQWxCLEdBQTJCLENBQS9CLEVBQWtDLE1BQUssZ0JBQUwsSUFBeUIseUJBQXpCO0FBQ2xDLE1BQUksTUFBSyxlQUFMLEtBQXlCLE1BQUssZ0JBQUwsQ0FBN0IsRUFBcUQ7O0FBRXJELE1BQUksZ0JBQWdCLEtBQUssS0FBTCxDQUFXLGFBQWEsT0FBYixDQUFxQixXQUFyQixDQUFYLENBQXBCO0FBQUEsTUFDQyx3QkFDSSxhQURKO0FBRUMsaUJBRkQ7QUFHQyxhQUFVLE1BQUssVUFBTCxDQUhYO0FBSUMsU0FBTSxNQUFLLFVBQUwsQ0FKUDtBQUtDLFVBQU8sTUFBSyxXQUFMLENBTFI7QUFNQyxVQUFPLE1BQUssV0FBTCxDQU5SO0FBT0MsU0FBTSxNQUFLLFVBQUw7QUFQUCxJQUREOzs7QUFZQSxNQUFJLFVBQUosRUFBZ0IsYUFBYSxZQUFiLENBQTBCLFlBQVksT0FBWixDQUFvQixrQkFBOUMsRUFBa0UsQ0FBbEUsRUFBcUUsT0FBckU7OztBQUdoQixVQUFRLEdBQVIsQ0FBWSxTQUFTLElBQXJCO0FBQ0EsTUFBSSxVQUFKLEVBQWdCO0FBQ2YseUJBQXNCLFFBQXRCLEVBQWdDLEtBQWhDLEVBQXVDLElBQXZDO0FBQ0EsR0FGRCxNQUVPO0FBQ04sV0FBUSxHQUFSLENBQVkscUJBQVo7QUFDQTs7O0FBS0QsTUFBSSxVQUFKLEVBQWdCLElBQUksT0FBSixFQUFhLE1BQWI7QUFDaEIsTUFBSSxVQUFKLEVBQWdCLElBQUksT0FBSixFQUFhLHNCQUFiOzs7QUFHaEIsTUFBSSxVQUFKLEVBQWdCO0FBQ2YsTUFBRyxNQUFILEVBQVc7QUFDVixhQUFTLE9BREM7QUFFVixtQkFBZSxjQUZMO0FBR1YsaUJBQWE7QUFISCxJQUFYO0FBS0E7O0FBRUQsTUFBSSxVQUFKLEVBQWdCO0FBQ2YsaUJBQWMsSUFBZCxDQUFtQjtBQUNsQixrQkFBZSxZQUFZLE9BQVosQ0FBb0IsZ0JBRGpCO0FBRWxCLGtCQUFlLENBQ2Q7QUFDQyxpQkFBWSxDQURiO0FBRUMsdUJBQWtCLFVBRm5CO0FBR0MsdUJBQWtCLENBSG5CO0FBSUMseUJBQW9CO0FBSnJCLEtBRGM7QUFGRyxJQUFuQjtBQVdBOztBQUVELFFBQUssaUJBQUw7QUFDQSxRQUFLLGlCQUFMLEdBQXlCLEtBQXpCOzs7QUFHQSxNQUFJLFVBQUosRUFBZ0I7QUFDZixTQUFNLEdBQU4sQ0FBYSxPQUFiLDRCQUE2QztBQUM1QyxZQUFRO0FBRG9DLElBQTdDLEVBRUcsT0FGSCxDQUVXLGdCQUFRO0FBQ2xCLFVBQUssMEJBQUw7QUFDQSxVQUFNLEdBQU4sQ0FBYSxPQUFiLHNCQUF1QyxFQUFDLFFBQVEsUUFBVCxFQUF2QyxFQUEyRCxPQUEzRCxDQUFtRSxnQkFBUTtBQUMxRSxhQUFRLEdBQVIsQ0FBWSxVQUFaLEVBQXdCLElBQXhCO0FBQ0EsS0FGRDtBQUdBLElBUEQ7QUFRQSxHQVRELE1BU087QUFDTixTQUFLLDBCQUFMLEc7QUFDQTtBQUNELEVBNUVEOztBQThFQSxRQUFPLFFBQVAsR0FBa0IsVUFBQyxTQUFELEVBQWU7QUFDaEMsU0FBTyxNQUFQLENBQWMsWUFBTTs7QUFFbkIsV0FBUSxHQUFSLENBQVksMEJBQVosRUFBd0MsU0FBeEM7OztBQUdBLFNBQUssUUFBTCxHQUFnQixVQUFVLElBQVYsSUFBa0IsRUFBbEM7QUFDQSxTQUFLLFNBQUwsR0FBaUIsVUFBVSxLQUFWLElBQW1CLEVBQXBDO0FBQ0EsU0FBSyxTQUFMLEdBQWlCLFVBQVUsS0FBVixJQUFtQixFQUFwQztBQUNBLFNBQUssUUFBTCxHQUFnQixVQUFVLElBQVYsSUFBa0IsRUFBbEM7OztBQUdBLE9BQUksU0FBSixFQUFlLGFBQWEsT0FBYixDQUFxQixXQUFyQixFQUFrQyxLQUFLLFNBQUwsQ0FBZSxTQUFmLENBQWxDO0FBQ2YsR0FaRDtBQWFBLEVBZEQ7QUFlQSxDOztBQTlNVyxxQixDQUNMLE8sR0FBVSxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLFFBQXpCLEVBQW1DLFVBQW5DLEVBQStDLFdBQS9DLEVBQTRELFNBQTVELEVBQXVFLE9BQXZFLEVBQWdGLG1CQUFoRixFQUFxRyxhQUFyRyxDOzs7Ozs7Ozs7Ozs7O0lDUkwsYyxXQUFBLGMsR0FNWix3QkFBYSxVQUFiLEVBQXlCLE1BQXpCLEVBQWlDLFNBQWpDLEVBQTRDLFFBQTVDLEVBQXNELE1BQXRELEVBQThELE9BQTlELEVBQXVFLEtBQXZFLEVBQThFLFdBQTlFLEVBQTJGO0FBQUE7O0FBQUE7O0FBQUEsTUFIM0YsUUFHMkYsR0FIaEYsRUFHZ0Y7QUFBQSxNQUYzRixPQUUyRixHQUZqRixFQUVpRjtBQUFBLDRCQUNoRSxZQUFZLE9BRG9EO0FBQUEsS0FDcEYsT0FEb0Ysd0JBQ3BGLE9BRG9GO0FBQUEsS0FDM0UsTUFEMkUsd0JBQzNFLE1BRDJFOzs7QUFHMUYsSUFBRyxNQUFILEVBQVcsVUFBWDtBQUNBLEtBQUksT0FBSixFQUFhLFVBQWI7O0FBRUEsTUFBSyxRQUFMLEdBQWdCLFlBQU07QUFDckIsYUFBVyxXQUFYLEdBQXlCLFlBQVksS0FBWixDQUFrQixDQUFsQixDQUF6QixDQUErQyxRQUFRLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7O0FBRS9DLFFBQU0sR0FBTixDQUFhLE9BQWIscUJBQXNDO0FBQ3JDLFdBQVEsRUFBRSxjQUFGLEVBQVUsT0FBTyxXQUFqQjtBQUQ2QixHQUF0QyxFQUVHLE9BRkgsQ0FFVyxnQkFBUTtBQUNsQixPQUFJLE9BQUosRUFBYSxhQUFiO0FBQ0EsY0FBVyxjQUFYLEdBQTRCLENBQUMsS0FBSyxPQUFMLENBQWEsQ0FBYixFQUFnQixJQUFqQixDQUE1QjtBQUNBLEdBTEQ7O0FBT0EsUUFBTSxHQUFOLENBQWEsT0FBYix1QkFBd0M7QUFDdkMsV0FBUSxFQUFFLGNBQUYsRUFBVSxNQUFNLFFBQWhCLEVBQTBCLE1BQU0sV0FBVyxjQUFYLENBQTBCLEVBQTFEO0FBRCtCLEdBQXhDLEVBRUcsT0FGSCxDQUVXLGdCQUFRO0FBQ2xCLFNBQUssUUFBTCxHQUFnQixLQUFLLE9BQXJCO0FBQ0EsR0FKRDs7QUFNQSxRQUFNLEdBQU4sQ0FBYSxPQUFiLHVCQUF3QztBQUN2QyxXQUFRLEVBQUUsY0FBRixFQUFVLE1BQU0sWUFBaEIsRUFBOEIsTUFBTSxXQUFXLGNBQVgsQ0FBMEIsRUFBOUQ7QUFEK0IsR0FBeEMsRUFFRyxPQUZILENBRVcsZ0JBQVE7QUFDbEIsU0FBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixnQkFBUTtBQUN2QyxXQUFPLEtBQUssSUFBWjtBQUNBLElBRmMsQ0FBZjtBQUdBLEdBTkQ7O0FBUUEsUUFBSyxZQUFMLEdBQW9CLEVBQUUsTUFBRixFQUFVLE1BQVYsS0FBcUIsRUFBekM7QUFDQSxhQUFXLEdBQVgsQ0FBZSxZQUFmLEVBQTZCLFVBQUMsS0FBRCxFQUFRLElBQVIsRUFBaUI7QUFDN0MsVUFBTyxNQUFQLENBQWMsWUFBTTtBQUNuQixVQUFLLFlBQUwsR0FBb0IsS0FBSyxNQUFMLEdBQWMsR0FBZCxHQUFvQixLQUFLLE1BQUwsR0FBYyxFQUFsQyxHQUF1QyxHQUEzRDtBQUNBLElBRkQ7QUFHQSxHQUpEO0FBS0EsRUE5QkQ7O0FBZ0NBLE1BQUssUUFBTDtBQUNBLFFBQU8sTUFBUCxDQUFjLGdCQUFkLEVBQWdDLFlBQU07QUFDckMsUUFBSyxRQUFMO0FBQ0EsRUFGRDtBQUdBLEM7O0FBaERXLGMsQ0FDTCxPLEdBQVUsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixXQUF6QixFQUFzQyxVQUF0QyxFQUFrRCxRQUFsRCxFQUE0RCxTQUE1RCxFQUF1RSxPQUF2RSxFQUFnRixhQUFoRixDOzs7Ozs7Ozs7OztJQ0RMLGMsV0FBQSxjLEdBR1osd0JBQWEsVUFBYixFQUF5QixNQUF6QixFQUFpQyxPQUFqQyxFQUEwQyxLQUExQyxFQUFpRCxNQUFqRCxFQUF5RCxXQUF6RCxFQUFzRTtBQUFBOztBQUFBOztBQUFBLDRCQUMzQyxZQUFZLE9BRCtCO0FBQUEsS0FDL0QsT0FEK0Qsd0JBQy9ELE9BRCtEO0FBQUEsS0FDdEQsTUFEc0Qsd0JBQ3RELE1BRHNEOzs7O0FBS3JFLElBQUcsTUFBSCxFQUFXLFVBQVg7QUFDQSxLQUFJLE9BQUosRUFBYSxVQUFiOztBQUVBLE1BQUssUUFBTCxHQUFnQixZQUFNO0FBQ3JCLGFBQVcsV0FBWCxHQUF5QixJQUF6Qjs7QUFFQSxRQUFLLFNBQUwsR0FBaUIsT0FBTyxNQUFQLENBQWMsS0FBL0IsQ0FBc0MsUUFBUSxRQUFSLENBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBQ3RDLFFBQUssVUFBTCxHQUFrQixNQUFLLFNBQUwsS0FBbUIsRUFBckM7O0FBRUEsTUFBSSxNQUFLLFVBQVQsRUFBcUI7QUFDcEIsU0FBTSxHQUFOLENBQWEsT0FBYixxQkFBc0M7QUFDckMsWUFBUSxFQUFFLGNBQUYsRUFBVSxPQUFPLE1BQUssU0FBdEIsRUFBa0MsTUFBTSxXQUFXLGNBQVgsQ0FBMEIsRUFBbEU7QUFENkIsSUFBdEMsRUFFRyxPQUZILENBRVcsZ0JBQVE7QUFDbEIsUUFBSSxPQUFKLEVBQWEsYUFBYjtBQUNBLFFBQUksS0FBSyxPQUFMLENBQWEsQ0FBYixDQUFKLEVBQXFCO0FBQ3BCLFdBQUssVUFBTCxHQUFrQixLQUFLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCLElBQWxDO0FBQ0E7QUFDRCxJQVBEO0FBUUEsR0FURCxNQVNPO0FBQ04sU0FBTSxHQUFOLENBQWEsT0FBYix1QkFBd0M7QUFDdkMsWUFBUSxFQUFFLGNBQUYsRUFBVSxNQUFNLE1BQWhCLEVBQXdCLE1BQU0sV0FBVyxjQUFYLENBQTBCLEVBQXhEO0FBRCtCLElBQXhDLEVBRUcsT0FGSCxDQUVXLGdCQUFRO0FBQ2xCLFFBQUksT0FBSixFQUFhLGFBQWI7QUFDQSxVQUFLLE9BQUwsR0FBZSxLQUFLLE9BQXBCO0FBR0EsSUFQRDtBQVFBO0FBQ0QsRUF6QkQ7QUEwQkEsTUFBSyxRQUFMO0FBQ0EsUUFBTyxNQUFQLENBQWMsZ0JBQWQsRUFBZ0MsWUFBTTs7QUFFckMsUUFBSyxRQUFMO0FBQ0EsRUFIRDtBQUlBLEM7O0FBMUNXLGMsQ0FDTCxPLEdBQVUsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixTQUF6QixFQUFvQyxPQUFwQyxFQUE4QyxRQUE5QyxFQUF3RCxhQUF4RCxDOzs7Ozs7Ozs7Ozs7O0lDREwsYyxXQUFBLGM7QUFHWix5QkFBYSxVQUFiLEVBQXlCLE1BQXpCLEVBQWlDLFFBQWpDLEVBQTJDLFNBQTNDLEVBQXNELFFBQXRELEVBQWdFLE1BQWhFLEVBQXdFLE9BQXhFLEVBQWlGLEtBQWpGLEVBQXdGLFdBQXhGLEVBQXFHO0FBQUE7O0FBQUE7O0FBQUEsNkJBQzFFLFlBQVksT0FEOEQ7QUFBQSxNQUM5RixPQUQ4Rix3QkFDOUYsT0FEOEY7QUFBQSxNQUNyRixNQURxRix3QkFDckYsTUFEcUY7Ozs7QUFJcEcsS0FBRyxNQUFILEVBQVcsVUFBWDtBQUNBLE1BQUksT0FBSixFQUFhLFVBQWI7QUFDQSxNQUFJLE9BQUosRUFBYSxhQUFiO0FBQ0EsT0FBSyxRQUFMLEdBQWdCLFlBQU07QUFDckIsT0FBSSxZQUFZLE9BQU8sTUFBUCxDQUFjLEtBQTlCO0FBQUEsT0FBcUMsY0FBYyxNQUFLLGVBQUwsQ0FBcUIsU0FBckIsRUFBZ0MsWUFBWSxLQUE1QyxDQUFuRDtBQUFBLE9BQ0MsZ0JBQWdCLFdBQVcsV0FENUIsQ0FDeUMsV0FBVyxXQUFYLEdBQXlCLFdBQXpCOztBQUV6QyxPQUFHLGFBQWEsV0FBaEIsRUFBNkI7QUFBRSxXQUFPLEVBQVAsQ0FBVSxNQUFWLEVBQW1CO0FBQVM7OztBQUczRCxPQUFJLENBQUMsV0FBRCxJQUFnQixDQUFDLFlBQVksUUFBakMsRUFBMkM7QUFDMUMsV0FBTyxFQUFQLENBQVUsTUFBVjtBQUNBLElBRkQsTUFFTyxJQUFJLGdCQUFnQixhQUFwQixFQUFtQzs7O0FBRXpDLGFBQVMsWUFBTTtBQUNkLFNBQUksZUFBZSxRQUFRLE9BQVIsY0FBMkIsU0FBM0IsRUFBd0MsTUFBeEMsR0FBaUQsR0FBakQsR0FBdUQsRUFBMUU7QUFDQSxlQUFVLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLENBQXJCLEVBQXdCLEVBQUMsVUFBUyxFQUFDLEdBQUcsWUFBSixFQUFWLEVBQTZCLE1BQUssT0FBTyxPQUF6QyxFQUF4QjtBQUNBLEtBSEQsRUFHRyxHQUhIO0FBSUEsSUFOTSxNQU1BO0FBQUE7O0FBQ04sU0FBSSxjQUFjLENBQWxCLENBQXFCLFdBQVcsY0FBWCxHQUE0QixFQUE1QjtBQUNyQixhQUFRLFFBQVIsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRTtBQUNBLGlCQUFZLFFBQVosQ0FBcUIsT0FBckIsQ0FBNkIsVUFBQyxLQUFELEVBQVEsS0FBUixFQUFrQjtBQUM5QyxpQkFBVyxjQUFYLENBQTBCLEtBQTFCLElBQW1DLEVBQW5DO0FBQ0EsWUFBTSxHQUFOLENBQWEsT0FBYixxQkFBc0MsRUFBRSxRQUFRLEVBQUUsY0FBRixFQUFVLE9BQU8sTUFBTSxLQUF2QixFQUFWLEVBQXRDLEVBQWtGLE9BQWxGLENBQTBGLGdCQUFRO0FBQ2pHLFdBQUksY0FBYyxLQUFLLE9BQUwsQ0FBYSxDQUFiLENBQWxCO0FBQ0EsV0FBSSxlQUFlLFlBQVksSUFBL0IsRUFBcUM7QUFDcEMsbUJBQVcsY0FBWCxDQUEwQixLQUExQixJQUFtQyxZQUFZLElBQS9DO0FBQ0E7QUFDRCxPQUxELEVBS0csT0FMSCxDQUtXLFlBQU07QUFDaEI7O0FBRUEsV0FBSSxlQUFlLFlBQVksUUFBWixDQUFxQixNQUF4QyxFQUFnRDs7O0FBRy9DLGlCQUFTLFlBQU07QUFDZCxhQUFJLGVBQWUsUUFBUSxPQUFSLGNBQTJCLFNBQTNCLEVBQXdDLE1BQXhDLEdBQWlELEdBQWpELEdBQXVELEVBQTFFO0FBQ0EsbUJBQVUsRUFBVixDQUFhLE1BQWIsRUFBcUIsQ0FBckIsRUFBd0IsRUFBQyxVQUFTLEVBQUMsR0FBRyxZQUFKLEVBQVYsRUFBNkIsTUFBSyxPQUFPLE9BQXpDLEVBQXhCO0FBQ0EsU0FIRCxFQUdHLEdBSEg7QUFJQTtBQUNELE9BaEJEO0FBaUJBLE1BbkJEO0FBSE07QUF1Qk47QUFDRCxHQXZDRDtBQXdDQSxPQUFLLFFBQUw7QUFDQSxhQUFXLE1BQVgsQ0FBa0IsZ0JBQWxCLEVBQW9DLFlBQU07QUFDekMsU0FBSyxRQUFMO0FBQ0EsR0FGRDtBQUlBOzs7O2tDQUVnQixLLEVBQU8sSyxFQUFPO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQzlCLHlCQUFpQixLQUFqQiw4SEFBd0I7QUFBQSxTQUFmLElBQWU7O0FBQ3ZCLFNBQUksS0FBSyxLQUFMLElBQWMsS0FBSyxLQUFMLEtBQWUsS0FBakMsRUFBd0MsT0FBTyxJQUFQOztBQUV4QyxTQUFJLEtBQUssUUFBVCxFQUFtQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNsQiw2QkFBa0IsS0FBSyxRQUF2QixtSUFBaUM7QUFBQSxZQUF4QixLQUF3Qjs7QUFDaEMsWUFBSSxNQUFNLEtBQU4sSUFBZSxNQUFNLEtBQU4sSUFBZSxLQUFsQyxFQUF5QztBQUN4QyxnQkFBTyxJQUFQO0FBQ0E7QUFDRDtBQUxpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWxCO0FBQ0Q7QUFYNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVk5Qjs7Ozs7O0FBckVXLGMsQ0FDTCxPLEdBQVUsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixVQUF6QixFQUFxQyxXQUFyQyxFQUFrRCxVQUFsRCxFQUE4RCxRQUE5RCxFQUF3RSxTQUF4RSxFQUFtRixPQUFuRixFQUE0RixhQUE1RixDOzs7Ozs7Ozs7Ozs7O0lDREwsZ0IsV0FBQSxnQjtBQUdaLDJCQUFhLFVBQWIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsU0FBekMsRUFBb0QsUUFBcEQsRUFBOEQ7QUFBQTs7QUFBQTs7QUFDN0QsT0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLFdBQVM7QUFBQSxVQUFNLE1BQUssU0FBTCxFQUFOO0FBQUEsR0FBVCxFQUFpQyxDQUFqQztBQUNBOzs7OzhCQUVZO0FBQ1osUUFBSyxNQUFMLENBQVksWUFBWixDQUF5QixNQUF6QjtBQUNBOzs7Ozs7QUFWVyxnQixDQUNMLE8sR0FBVSxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLFFBQXpCLEVBQW1DLFdBQW5DLEVBQWdELFVBQWhELEM7Ozs7OztBQ0RsQjs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxPQUFPLGtCQUFQO0FBQ0EsSUFBSSxNQUFNLFFBQVEsTUFBUixDQUFlLGFBQWYsRUFBOEIsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixZQUEzQixFQUF5QyxTQUF6QyxFQUFvRCxZQUFwRCxFQUFrRSxpQkFBbEUsQ0FBOUIsRUFDUixNQURRLHlCQUVSLFVBRlEsQ0FFRyxTQUZILGdEQUdSLFVBSFEsQ0FHRyxVQUhILGtDQUlSLFVBSlEsQ0FJRyxVQUpILGtDQUtSLFVBTFEsQ0FLRyxVQUxILGtDQU1SLFVBTlEsQ0FNRyxZQU5ILHNDQU9SLE9BUFEsQ0FPQSxhQVBBLHlCQVFSLFNBUlEsQ0FRRSxPQVJGLG1CQVNSLFNBVFEsQ0FTRSxpQkFURix3QkFVUixTQVZRLENBVUUsY0FWRixxQkFXUixTQVhRLENBV0UsYUFYRixvQkFZUixTQVpRLENBWUUsYUFaRixvQkFhUixTQWJRLENBYUUsVUFiRixzQkFjUixTQWRRLENBY0Usa0JBZEYsOEJBZVIsU0FmUSxDQWVFLGdCQWZGLDJCQUFWOztBQWlCQSxzQkFBZSxHQUFmOztBQUVBLElBQUksR0FBSixDQUFRLFlBQU07QUFDYixXQUFVLE1BQVYsQ0FBaUIsU0FBUyxJQUExQjtBQUNBLENBRkQ7O0FBSUEsSUFBSSxNQUFKLENBQVcsUUFBWCxFQUFxQixDQUNwQixNQURvQixFQUNaLFVBQVUsSUFBVixFQUFnQjtBQUN2QixRQUFPLFVBQVUsR0FBVixFQUFlO0FBQ3JCLFNBQU8sS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQVA7QUFDQSxFQUZEO0FBR0EsQ0FMbUIsQ0FBckI7O0FBUUEsUUFBUSxTQUFSLENBQWtCLFFBQWxCLEVBQTRCLENBQUMsYUFBRCxDQUE1Qjs7Ozs7Ozs7Ozs7QUNwREE7O2tCQUVlLENBQUMsWUFBRCxFQUFlLE9BQWYsRUFBd0IsVUFBeEIsRUFBb0MsVUFBVSxVQUFWLEVBQXNCLEtBQXRCLEVBQTZCLFFBQTdCLEVBQXdDO0FBQUE7O0FBQzFGLE1BQUssS0FBTCxHQUFhLEtBQWI7O0FBRUEsTUFBSyxRQUFMLEdBQWdCLFVBQUMsT0FBRCxFQUFVLGFBQVYsRUFBeUIsaUJBQXpCLEVBQStDO0FBQUEsYUFDdEMsV0FBVyxNQUFLLE9BRHNCOztBQUFBLE1BQ3pELE9BRHlELFFBQ3pELE9BRHlEO0FBQUEsTUFDaEQsTUFEZ0QsUUFDaEQsTUFEZ0Q7OztBQUc5RCxRQUFNLEdBQU4sQ0FBYSxPQUFiLHFCQUFzQztBQUNyQyxXQUFRLEVBQUUsY0FBRixFQUFVLE1BQU0sV0FBVyxjQUFYLENBQTBCLEVBQTFDO0FBRDZCLEdBQXRDLEVBRUcsT0FGSCxDQUVXLFVBQUMsSUFBRCxFQUFVO0FBQ3BCLFNBQUssS0FBTCxHQUFhLEtBQUssT0FBbEI7O0FBRUEsT0FBSSxpQkFBSixFQUF1QixrQkFBa0IsTUFBSyxLQUF2QjtBQUN2QixPQUFJLGFBQUosRUFBbUI7QUFDbEIsa0JBQWMsTUFBSyxPQUFuQjtBQUNBOztBQUVELFlBQVMsWUFBTTtBQUNkLGVBQVcsVUFBWCxDQUFzQixrQkFBdEI7QUFDQSxVQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0EsSUFIRCxFQUdHLENBSEg7QUFJQSxHQWREO0FBZUEsRUFsQkQ7O0FBb0JBLE1BQUssT0FBTCxHQUFlLElBQUksT0FBSixDQUFZLFVBQUMsYUFBRCxFQUFnQixNQUFoQixFQUEyQjtBQUNyRCxhQUFXLFNBQVg7QUFDQSxhQUFXLGNBQVgsR0FBNEIsa0JBQVUsQ0FBVixDQUE1Qjs7QUFFQSxhQUFXLFlBQVgsR0FBMEIscUJBQWEsV0FBVyxjQUFYLENBQTBCLElBQXZDLENBQTFCO0FBQ0EsYUFBVyxNQUFYLENBQWtCLGdCQUFsQixFQUFvQyxZQUFNO0FBQ3pDLGNBQVcsWUFBWCxHQUEwQixxQkFBYSxXQUFXLGNBQVgsQ0FBMEIsSUFBdkMsQ0FBMUI7QUFDQSxPQUFJLFdBQVcsT0FBZixFQUF3QixNQUFLLFFBQUwsQ0FBYyxXQUFXLE9BQXpCO0FBQ3hCLEdBSEQ7O0FBS0EsYUFBVyxjQUFYLEdBQTRCLFVBQUMsUUFBRCxFQUFjO0FBQ3pDLGNBQVcsY0FBWCxHQUE0QixRQUE1QjtBQUNBLEdBRkQ7O0FBSUEsUUFBTSxHQUFOLENBQVUsVUFBVixFQUFzQixPQUF0QixDQUE4QixVQUFDLElBQUQsRUFBVTtBQUN2QyxRQUFLLE1BQUwsR0FBYyxLQUFLLE1BQUwsSUFBZSxTQUFTLElBQXRDO0FBQ0ksaUJBQVUsSUFBVixDQUZtQyxJQUVqQixPQUZpQixHQUVHLE9BRkgsQ0FFakIsT0FGaUI7QUFBQSxPQUVSLE1BRlEsR0FFRyxPQUZILENBRVIsTUFGUTs7QUFHdkMsU0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGNBQVcsT0FBWCxHQUFxQixPQUFyQjs7QUFFQSxxQkFBVSxPQUFWLENBQWtCLGlCQUFZO0FBQUEsUUFBVixJQUFVLFNBQVYsSUFBVTs7QUFDN0IsUUFBSSxRQUFRLFdBQVIsQ0FBb0IsSUFBcEIsQ0FBSixFQUErQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUM5QiwyQkFBZ0IsT0FBTyxJQUFQLENBQVksUUFBUSxXQUFSLENBQW9CLElBQXBCLENBQVosQ0FBaEIsOEhBQXdEO0FBQUEsV0FBL0MsR0FBK0M7O0FBQ3ZELDRCQUFhLElBQWIsRUFBbUIsR0FBbkIsSUFBMEIsUUFBUSxXQUFSLENBQW9CLElBQXBCLEVBQTBCLEdBQTFCLENBQTFCO0FBQ0E7QUFINkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUk5QjtBQUNELElBTkQ7O0FBUUEsT0FBSSxRQUFRLFNBQVosRUFBdUI7QUFBRSxlQUFXLFNBQVgsR0FBdUIsUUFBUSxTQUEvQjtBQUEyQzs7QUFJcEUsT0FBSSxPQUFKLENBQVksVUFBQyxpQkFBRCxFQUFvQixNQUFwQixFQUErQjtBQUMxQyxVQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLGFBQXZCLEVBQXNDLGlCQUF0QztBQUNBLElBRkQ7QUFHQSxHQXJCRDtBQXNCQSxFQXBDYyxDQUFmO0FBcUNBLENBNURjLEM7Ozs7Ozs7OztBQ0ZmOztBQUVBLElBQUksZUFBZSxDQUFDLGdCQUFELEVBQW1CLG9CQUFuQixFQUF5QyxrQkFBekMsRUFBNkQsZUFBN0QsRUFBOEUsbUJBQTlFLEVBQ2xCLFVBQVMsY0FBVCxFQUF5QixrQkFBekIsRUFBNkMsZ0JBQTdDLEVBQStELGFBQS9ELEVBQThFLGlCQUE5RSxFQUFpRztBQUNoRyxnQkFDRSxLQURGLENBQ1EsUUFEUixFQUNrQixXQURsQixFQUVFLEtBRkYsQ0FFUSxNQUZSLEVBRWdCLFNBRmhCLEVBR0UsS0FIRixDQUdRLE1BSFIsRUFHZ0IsU0FIaEIsRUFJRSxLQUpGLENBSVEsTUFKUixFQUlnQixTQUpoQjs7QUFNQSxvQkFBbUIsU0FBbkIsQ0FBNkIsU0FBN0I7O0FBRUEsZUFBYyxRQUFkLENBQXVCLE9BQXZCLENBQStCLE1BQS9CLEdBQXdDLEVBQXhDO0FBQ0EsZUFBYyxRQUFkLENBQXVCLE9BQXZCLENBQStCLElBQS9CLEdBQXNDLEVBQXRDO0FBQ0EsZUFBYyxRQUFkLENBQXVCLE9BQXZCLENBQStCLEdBQS9CLEdBQXFDLEVBQXJDO0FBQ0EsZUFBYyxRQUFkLENBQXVCLE9BQXZCLENBQStCLEtBQS9CLEdBQXVDLEVBQXZDO0FBQ0EsbUJBQWtCLFNBQWxCLENBQTRCLElBQTVCO0FBQ0EsQ0FmaUIsQ0FBbkI7O0FBa0JBLElBQUksY0FBYztBQUNqQixNQUFLLFNBRFk7QUFFakIsUUFBTztBQUNOLFlBQVUsRUFBQyxhQUFhLDJCQUFkLEVBREo7QUFFTixvQkFBa0I7QUFDakIsZ0JBQWEsc0JBREk7QUFFakIsZUFBWTtBQUZLO0FBRlo7QUFGVSxDQUFsQjs7QUFXQSxJQUFJLFlBQVk7QUFDZixNQUFLLEdBRFU7QUFFZixVQUFTO0FBQ1IsUUFBTSxjQUFDLFdBQUQsRUFBaUI7QUFDdEIsVUFBTyxZQUFZLE9BQW5CO0FBQ0E7QUFITyxFQUZNO0FBT2YsUUFBTztBQUNOLFlBQVUsRUFBQyxhQUFhLDBCQUFkLEVBREo7QUFFTixrQkFBZ0I7QUFDZixnQkFBYSx5QkFERTtBQUVmLGVBQVk7QUFGRztBQUZWO0FBUFEsQ0FBaEI7O0FBZ0JBLElBQUksWUFBWTtBQUNmLE1BQUssU0FEVTtBQUVmLFVBQVM7QUFDUixRQUFNLGNBQUMsV0FBRCxFQUFpQjtBQUN0QixVQUFPLFlBQVksT0FBbkI7QUFDQTtBQUhPLEVBRk07QUFPZixRQUFPO0FBQ04sWUFBVSxFQUFDLGFBQWEsMEJBQWQsRUFESjtBQUVOLGtCQUFnQjtBQUNmLGdCQUFhLHlCQURFO0FBRWYsZUFBWTtBQUZHO0FBRlY7QUFQUSxDQUFoQjs7QUFnQkEsSUFBSSxZQUFZO0FBQ2YsTUFBSyxpQkFEVTtBQUVmLFVBQVM7QUFDUixRQUFNLGNBQUMsV0FBRCxFQUFpQjtBQUN0QixVQUFPLFlBQVksT0FBbkI7QUFDQTtBQUhPLEVBRk07QUFPZixRQUFPO0FBQ04sWUFBVSxFQUFDLGFBQWEsMEJBQWQsRUFESjtBQUVOLGtCQUFnQjtBQUNmLGdCQUFhLHlCQURFO0FBRWYsZUFBWTtBQUZHO0FBRlY7QUFQUSxDQUFoQjs7a0JBZ0JlLFk7Ozs7Ozs7O2tCQy9FUyxRO1FBS1IsUSxHQUFBLFE7QUFMRCxTQUFTLFFBQVQsQ0FBa0IsY0FBbEIsRUFBa0M7QUFDaEQsZ0JBQ0UsTUFERixDQUNTLFVBRFQsRUFDcUIsUUFEckI7QUFFQTs7QUFFTSxTQUFTLFFBQVQsR0FBcUI7QUFDM0IsUUFBTyxVQUFVLElBQVYsRUFBdUM7QUFBQSxNQUF2QixNQUF1Qix5REFBZCxZQUFjOztBQUM3QyxTQUFPLE9BQU8sSUFBUCxFQUFhLE1BQWIsQ0FBb0IsTUFBcEIsQ0FBUDtBQUNBLEVBRkQ7QUFHQTs7Ozs7Ozs7O1FDdUNlLGtCLEdBQUEsa0I7UUFPQSxJLEdBQUEsSTtRQVlBLHFCLEdBQUEscUI7UUFXQSxZLEdBQUEsWTtRQVdBLGtCLEdBQUEsa0I7UUFTQSxTLEdBQUEsUztBQWxHVCxJQUFNLDRCQUFVLHdCQUFoQixDO0FBQ0EsSUFBTSwwQ0FBaUIsQ0FBQyxVQUFELEVBQWEsV0FBYixFQUF5QixXQUF6QixFQUFzQyxVQUF0QyxDQUF2QjtBQUNBLElBQU0sZ0NBQVksQ0FDeEIsRUFBQyxNQUFNLFlBQVAsRUFBcUIsSUFBSSxDQUF6QixFQUE0QixTQUFTLFlBQXJDLEVBRHdCLENBQWxCOztBQUtBLElBQUksc0NBQWU7QUFDekIsYUFBWTtBQUNYLFlBQVUsU0FEQztBQUVYLFFBQU0sU0FGSztBQUdYLHdDQUhXO0FBSVgsMFFBSlc7QUFVWCx1QkFBcUIsWUFWVjtBQVdYLG9CQUFrQixhQVhQO0FBWVgsb0JBQWtCLHdCQVpQO0FBYVgsbUJBQWlCLFNBYk47QUFjWCxRQUFNLEtBZEs7QUFlWCxjQUFZLGNBZkQ7QUFnQlg7QUFoQlcsRUFEYTtBQW1CekIsVUFBUztBQUNSLFlBQVUsV0FERjtBQUVSLFFBQU0sTUFGRTtBQUdSLHlDQUhRO0FBSVIsMFFBSlE7QUFVUix1QkFBcUIsWUFWYjtBQVdSLG9CQUFrQixRQVhWO0FBWVIsb0JBQWtCLGtCQVpWO0FBYVIsbUJBQWlCLFFBYlQ7QUFjUixRQUFNLE1BZEU7QUFlUixjQUFZLGFBZko7QUFnQlI7QUFoQlE7QUFuQmdCLENBQW5COztBQXVDUCxJQUFNLGdCQUFnQixTQUFoQixhQUFnQixHQUFZLENBQUUsQ0FBcEM7O0FBRU8sU0FBUyxrQkFBVCxHQUErQjtBQUNyQyxLQUFJLENBQUMsT0FBTyxFQUFaLEVBQWdCLE9BQU8sRUFBUCxHQUFZLGFBQVo7QUFDaEIsS0FBSSxDQUFDLE9BQU8sR0FBWixFQUFpQixPQUFPLEdBQVAsR0FBYSxhQUFiO0FBQ2pCLEtBQUksQ0FBQyxPQUFPLHFCQUFaLEVBQW1DLE9BQU8scUJBQVAsR0FBK0IsYUFBL0I7QUFDbkMsS0FBSSxDQUFDLE9BQU8sYUFBWixFQUEyQixPQUFPLGFBQVAsR0FBdUIsRUFBdkI7QUFDM0I7O0FBRU0sU0FBUyxJQUFULENBQWMsT0FBZCxFQUF1QixTQUF2QixFQUFrQztBQUN4QyxLQUFJLFNBQUosRUFBZSxXQUFmO0FBRHdDO0FBQUE7QUFBQTs7QUFBQTtBQUV4Qyx1QkFBZ0IsT0FBTyxJQUFQLENBQVksU0FBWixDQUFoQiw4SEFBd0M7QUFBQSxPQUEvQixHQUErQjs7QUFDdkMsZUFBWSxHQUFaO0FBQ0EsaUJBQWMsVUFBVSxHQUFWLENBQWQ7QUFDQTtBQUx1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQU94Qyx3QkFBcUIsT0FBckIsbUlBQThCO0FBQUEsT0FBckIsUUFBcUI7O0FBQzdCLE9BQUksU0FBUyxTQUFULE1BQXdCLFdBQTVCLEVBQXlDLE9BQU8sUUFBUDtBQUN6QztBQVR1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVXhDOztBQUVNLFNBQVMscUJBQVQsQ0FBZ0MsS0FBaEMsRUFBdUMsS0FBdkMsRUFBOEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDcEQsd0JBQWtCLEtBQWxCLG1JQUF5QjtBQUFBLE9BQWhCLEtBQWdCOztBQUN4QixPQUFJLE1BQU0sS0FBTixLQUFnQixLQUFwQixFQUEyQixPQUFPLEtBQVA7QUFDM0IsT0FBSSxNQUFNLFFBQVYsRUFBb0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDbkIsMkJBQWtCLE1BQU0sUUFBeEIsbUlBQWtDO0FBQUEsVUFBekIsS0FBeUI7O0FBQ2pDLFVBQUksTUFBTSxLQUFOLEtBQWdCLEtBQXBCLEVBQTJCLE9BQU8sS0FBUDtBQUMzQjtBQUhrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSW5CO0FBQ0Q7QUFSbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNwRDs7QUFFTSxTQUFTLFlBQVQsQ0FBdUIsS0FBdkIsRUFBOEI7QUFDcEMsS0FBSSxLQUFLLHdKQUFUO0FBQ0EsUUFBTyxHQUFHLElBQUgsQ0FBUSxLQUFSLENBQVA7QUFDQTs7QUFFTSxJQUFJLDRDQUFrQjtBQUM1QixZQUFXLG1CQUFTLGFBQVQsRUFBd0IsaUJBQXhCLEVBQTJDO0FBQ3JELFNBQU8sY0FBYyxPQUFyQjtBQUNBO0FBSDJCLENBQXRCOztBQU1BLFNBQVMsa0JBQVQsQ0FBNkIsTUFBN0IsRUFBcUM7QUFDM0MsS0FBSSxTQUFTLEVBQWI7QUFDQSxNQUFJLElBQUksSUFBSSxDQUFaLEVBQWUsSUFBSSxNQUFuQixFQUEyQixHQUEzQixFQUFnQztBQUMvQixZQUFVLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsQ0FBekIsQ0FBdEIsQ0FBVjtBQUNBOztBQUVELFFBQU8sTUFBUDtBQUNBOztBQUVNLFNBQVMsU0FBVCxDQUFvQixLQUFwQixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQztBQUMzQyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxRQUFPLEtBQVA7QUFDQTs7QUFFRCxPQUFPLFNBQVAsQ0FBaUIsS0FBakIsR0FBeUIsVUFBUyxJQUFULEVBQWU7QUFDdkMsS0FBSSxJQUFJLFFBQVEsWUFBaEI7QUFBQSxLQUNDLElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7QUFBQSxLQUlDLElBQUksRUFBRSxLQUFGLEVBSkw7O0FBTUEsR0FBRSxNQUFGOztBQUVBLFFBQU8sQ0FBUDtBQUNBLENBVkQ7O0FBWUEsT0FBTyxJQUFQLEdBQWMsa0JBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBpZD1cImZvb3RlclwiIGNsYXNzPVwiZm9vdGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbFwiIG5nLXJlcGVhdD1cImNvbHVtbiBpbiBjb2x1bW5zXCIgbmctYmluZC1odG1sPVwiY29sdW1uLlBvc3QuY29udGVudCB8IHVuc2FmZVwiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtcm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsYW5ndWFnZS1jaG9pY2VcIiBuZy1yZXBlYXQ9XCJsYW5ndWFnZSBpbiAkcm9vdC5sYW5ndWFnZXNcIiBcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1jbGFzcz1cInthY3RpdmU6IGxhbmd1YWdlQWN0aXZlKGxhbmd1YWdlKX1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1jbGljaz1cIiRyb290LmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctYmluZD1cImxhbmd1YWdlLmRpc3BsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLmRlc2lnbmVkQnlcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxhIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5kZXNpZ25Db21wYW55IHwgdW5zYWZlXCI+PC9hPlx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRzY29wZS5sYW5ndWFnZUFjdGl2ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZS5pZCA9PSAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRyZWFkeTogJz0nLFxyXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCIgdWktc3JlZj1cImhvbWVcIj48L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVQb3B1cCgpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cclxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogbmV3c0FjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJuZXdzKHthbGlhczogJyd9KVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGJ1cmdlckFjdGl2ZX1cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cclxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBjaGlsZC5hbGlhc30pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJuZXdzXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0c2NvcGUubGlua3MgPSBtZXRhU2VydmljZS5saW5rcztcclxuXHJcblx0XHRcdCRyb290U2NvcGUuJG9uKCdtZXRhU2VydmljZVJlYWR5JywgKCkgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiUmVhZHkgZXZlbnQgZmlyZWQhISFcIik7XHJcblx0XHRcdFx0c2NvcGUubGlua3MgPSBtZXRhU2VydmljZS5saW5rcztcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uZXdzQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICduZXdzJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwLCAkcm9vdFNjb3BlLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHtcclxuXHRcdFx0aW5zdGFuY2U6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLXN0eWxlPVwie3dpZHRoOiBtYXhXaWR0aCsncHgnfVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbGlua0FjdGl2ZUNsYXNzKGluc3RhbmNlKX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgbmctYmluZD1cImluc3RhbmNlLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpbnN0YW5jZSlcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1uYXZpZ2F0aW9ucyBpY29uLW5hdmlnYXRpb24tYXJyb3ctZHJvcC11cFwiIG5nLWlmPVwiaW5zdGFuY2UuY2hpbGRyZW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxyXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBsaW5rLmFsaWFzfSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0c2NvcGUubWF4V2lkdGggPSBzY29wZS5pbnN0YW5jZS5uYW1lLndpZHRoKG1haW5Gb250KSArIHBhZGRpbmc7XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4gJiYgc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0c2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcclxuXHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xyXG5cdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlR3JvdXAgJiYgJHJvb3RTY29wZS5hY3RpdmVHcm91cC5pZCA9PT0gaW5zdGFuY2UuaWQ7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UuYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlY3Rpb24tY2FudmFzIHRvcC1zZXBhcmF0ZWQgbmV3cy1hcmVhXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtaGVhZGluZyBzZWN0aW9uXCI+PHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXJvdyBxdWF0cm9cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW4gbGlnaHQtY29sdW1uIGNsaWNrLWFibGVcIiBuZy1yZXBlYXQ9XCJuZXdzSXRlbSBpbiBuZXdzXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiBuZXdzSXRlbS5Qb3N0LmFsaWFzfSlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3NJdGVtLlBvc3QudGl0bGVcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRodW1iLWltYWdlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2UgaW1hZ2UtaG92ZXItZWZmZWN0LXpvb20tMTIwXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrbmV3c0l0ZW0uUG9zdC5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBuZy1iaW5kPVwibmV3c0l0ZW0uUG9zdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxyXG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRzY29wZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJjb25zdCBpbml0aWFsVG9wT2Zmc2V0ID0gMTIxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIiBuZy1zdHlsZT1cInt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnK3RvcFBvc2l0aW9uKydweCknfVwiPlxyXG5cdFx0XHQ8c3Vic2NyaXB0aW9uLWZvcm0gd3JhcHBlci1jbGFzcz1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPlxyXG5cdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2Pi0tPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZWJhci1uZXdzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmV3cy1zdW1tYXJ5XCIgbmctcmVwZWF0PVwibmV3c0l0ZW0gaW4gbmV3c1wiIHVpLXNyZWY9XCJuZXdzKHthbGlhczogbmV3c0l0ZW0uUG9zdC5hbGlhc30pXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2VcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZVwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LnRpdGxlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0dmFyIHNpZGViYXJIZWlnaHQsIGZvb3RlckhlaWdodDsgc2NvcGUudG9wUG9zaXRpb24gPSAwO1xyXG5cclxuXHRcdFx0Ly9TYWZlbHkgY2FsY3VsYXRlIGVsZW1lbnQncyBzaXplIGFmdGVyIHN0dWZmIGhhdmUgYmVlbiByZW5kZXJlZCFcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNjb3BlLm5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XHJcblx0XHRcdFx0c2lkZWJhckhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0XHRmb290ZXJIZWlnaHQgPSBhbmd1bGFyLmVsZW1lbnQoJyNmb290ZXInKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cclxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgc2Nyb2xsUG9zaXRpb24pID0+IHtcclxuXHRcdFx0XHQvLyBzY29wZS5uZXdzID0gJHJvb3RTY29wZS5uZXdzO1xyXG5cclxuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGRvY3VtZW50SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCksIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0XHRcdFx0b2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zaXRpb24uc2Nyb2xsaW5nRG93bikge1xyXG5cdFx0XHRcdFx0XHRsZXQgc2Nyb2xsRG93blRvdWNoQm90dG9tID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gb2Zmc2V0LnRvcCArIHNpZGViYXJIZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsRG93bk92ZXJGb290ZXIgPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBkb2N1bWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChzY3JvbGxEb3duVG91Y2hCb3R0b20gJiYgIXNjcm9sbERvd25PdmVyRm9vdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgLSBzaWRlYmFySGVpZ2h0IC0gaW5pdGlhbFRvcE9mZnNldDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbi50b3AgPCBvZmZzZXQudG9wIC0gaW5pdGlhbFRvcE9mZnNldCkge1xyXG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJGludGVydmFsJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBpdGVtczogJz0nIH0sXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGlnaHQtc2xpZGVyIHt7d3JhcHBlckNsYXNzfX1cIlxyXG5cdFx0XHRuZy1zd2lwZS1sZWZ0PVwic3dpcGVMZWZ0KCRldmVudClcIiBuZy1zd2lwZS1yaWdodD1cInN3aXBlUmlnaHQoJGV2ZW50KVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiY3VycmVudFNsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGVcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJythY3RpdmVTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgaWQ9XCJwcmV2aW91c1NsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGUgcHJldmlvdXNcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytwcmV2aW91c1NsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1uYXZpZ2F0aW9uXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLW5leHRcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtYmFja1wiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1wb3NpdGlvbnNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24taXRlbVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5pc0FjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCIgbmctY2xpY2s9XCJuYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0bGV0ICRhY3RpdmVTbGlkZSA9IGVsZW1lbnQuZmluZCgnI2N1cnJlbnRTbGlkZScpLCAkcHJldmlvdXNTbGlkZSA9IGVsZW1lbnQuZmluZCgnI3ByZXZpb3VzU2xpZGUnKSxcclxuXHRcdFx0XHRlYXNlRWZmZWN0ID0gU2luZS5lYXNlSW4sIHRyYW5zaXRpb25UaW1lID0gMjtcclxuXHJcblx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcclxuXHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XHJcblxyXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2l0ZW1zJywgKCkgPT4ge1xyXG5cdFx0XHRcdG5leHRTbGlkZSgwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNsaWRlID0gZnVuY3Rpb24gKG5leHRJbmRleCkge1xyXG5cdFx0XHRcdHNjb3BlLnByZXZpb3VzU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XHJcblx0XHRcdFx0aWYgKHNjb3BlLnByZXZpb3VzU2xpZGUpIHNjb3BlLnByZXZpb3VzU2xpZGUuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBuZXh0SW5kZXggIT0gdW5kZWZpbmVkID8gbmV4dEluZGV4IDogc2NvcGUuYWN0aXZlSW5kZXggKyAxO1xyXG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVJbmRleCA8IDApIHtcclxuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gc2NvcGUuaXRlbXMubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHNjb3BlLmFjdGl2ZUluZGV4ID49IHNjb3BlLml0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XHJcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZVNsaWRlKSBzY29wZS5hY3RpdmVTbGlkZS5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdC8vUGxheSB0cmFuc2l0aW9uIGFuaW1hdGlvbiFcclxuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzEwMCUnfSk7XHJcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkYWN0aXZlU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJy0xMDAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSk7XHJcblx0XHRcdFx0VHdlZW5MaXRlLnRvKCRhY3RpdmVTbGlkZSwgMCwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30pO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcwJ30pO1xyXG5cclxuXHRcdFx0XHQvL1Jlc2V0IGludGVydmFsO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcclxuXHRcdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLm5hdmlnYXRlID0gKGluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlICE9IHNjb3BlLmFjdGl2ZVNsaWRlKSB7XHJcblx0XHRcdFx0XHRuZXh0U2xpZGUoc2NvcGUuaXRlbXMuaW5kZXhPZihpbnN0YW5jZSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnN3aXBlTGVmdCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggKyAxKTtcclxuXHRcdFx0c2NvcGUuc3dpcGVSaWdodCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggLSAxKTtcclxuXHJcblx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IHdyYXBwZXJDbGFzczogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJ3cmFwcGVyQ2xhc3NcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xvc2UtY29tbWFuZCBpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBuZy1jbGljaz1cImFwcEN0cmwuY2xvc2VSZWdpc3RlckZvcm0oKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlSGVhZCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVUYWlsIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZnVsbE5hbWVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOYW1lXCIvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ucGhvbmVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJQaG9uZVwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZW1haWxQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJFbWFpbFwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLm5vdGVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOb3RlXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICRyb290LmxvY2FsaXphdGlvbi5zZW5kXCI+PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9mb3JtPmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG5cclxuXHRcdFx0c2NvcGUuc3VibWl0ID0gJHJvb3RTY29wZS5zdWJtaXRSZWdpc3RlcjtcclxuXHJcblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFudHNfZ29vZ2xlQXV0aENsaWNrKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFudHNfZmJBdXRoQ2xpY2soJ2xvZ2luJyk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XVxyXG5cclxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJ107IiwiaW1wb3J0IHtcclxuXHRnZW5lcmF0ZU51bWJlclVVSUQsXHJcblx0cmVnaXN0ZXJGaWVsZHMsXHJcblx0ZmluZFBhcmVudE1lbnVCeUFsaWFzLFxyXG5cdGxhbmd1YWdlc1xyXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5JywgJ21ldGFTZXJ2aWNlJ107XHJcblx0ZGV2ZWxvcG1lbnRNb2RlID0gZmFsc2U7XHJcblx0cmVhZHkgPSB0cnVlO1xyXG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcclxuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcclxuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5LCBtZXRhU2VydmljZSkge1xyXG5cdFx0JHJvb3RTY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlnczsgLy9XaWxsIGJlIHVuZGVmaW5lZCBhdCBmaXJzdCA9PiBub3Qgc2FmZSBmb3Igbm9ybWFsIHVzYWdlLCBqdXN0IGZvciB0cmFuc2xhdGlvbiFcclxuXHRcdCRyb290U2NvcGUuYXBwQ3RybCA9IHRoaXM7XHJcblxyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XHJcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XHJcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAobmV3VmFsKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBuZXdWYWwgPyBuZXdWYWwgOiAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XHJcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG5cclxuXHRcdFx0Ly9TZXQgbWV0YSdzIGNvbnRlbnQgZm9yIEFVRElFTkNFIFNFR01FTlQhXHJcblx0XHRcdGxldCBjdXJyZW50U2VnbWVudCA9ICdob21lJztcclxuXHRcdFx0aWYgKCRzdGF0ZS5pcygncGFnZScpKSB7XHJcblx0XHRcdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudE1lbnUgPSBmaW5kUGFyZW50TWVudUJ5QWxpYXMocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyk7XHJcblx0XHRcdFx0Y3VycmVudFNlZ21lbnQgPSBwYXJlbnRNZW51Lm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoJHN0YXRlLmlzKCduZXdzJykpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9ICduZXdzJ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKCQoXCJtZXRhW25hbWU9J2FkeDpzZWN0aW9ucyddXCIpWzBdKS5hdHRyKCdjb250ZW50JywgY3VycmVudFNlZ21lbnQpO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcigncmVhZHknKTsgLy9NYW51YWxseSB0cmlnZ2VyIHJlYWR5IGV2ZW50LCB3aGljaCBob3BlIGFsc28gdHJpZ2dlciBBbnRzJyBzY3JpcHQhXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZmV0Y2hFc3NlbnRpYWxEYXRhID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmluZm8oXCJMb2FkaW5nLi5cIiwgc291cmNlKTtcclxuXHRcdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICdmb290ZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmZvb3RlcnMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnbmV3cycsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQsIGxpbWl0OiA0IH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHQkcm9vdFNjb3BlLm5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAobWV0YVNlcnZpY2UucmVhZHkpIGZldGNoRXNzZW50aWFsRGF0YShcImJlY2F1c2UgdGhlIGRhdGEgYWxyZWFkeSBmZXRjaGVkIVwiKTtcclxuXHRcdCRyb290U2NvcGUuJG9uKCdtZXRhU2VydmljZVJlYWR5JywgKCkgPT4gZmV0Y2hFc3NlbnRpYWxEYXRhKFwiYmVjYXVzZSBtZXRhIHNlcnZpY2UgcmVhZHkgZmlyZWQhXCIpKTtcclxuXHJcblx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IDA7XHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG9wU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbENoYW5nZScsIHt0b3A6IHRvcFNjcm9sbCwgc2Nyb2xsaW5nRG93bjogdG9wU2Nyb2xsID4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb259KTtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSB0b3BTY3JvbGw7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykucmVzaXplKCgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXplQ2hhbmdlJywge1xyXG5cdFx0XHRcdGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpLFxyXG5cdFx0XHRcdHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vUmVnaXN0ZXIgZm9ybSFcclxuXHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG5cdFx0XHR0aGlzW2ZpZWxkXSA9ICcnOyB0aGlzW2ZpZWxkKydFcnJvciddID0gJyc7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNsb3NlUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVzZXRSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblx0XHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4gdGhpc1tmaWVsZF0gPSAnJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVzZXRSZWdpc3RlckVycm9yID0gKCkgPT4ge1xyXG5cdFx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRoaXNbZmllbGQrJ0Vycm9yJ10gPSAnJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3VjY2Vzc0dpZkltYWdlID0gYHVybChpbWFnZXMvb25vZmZvbmNlLmdpZj8ke2dlbmVyYXRlTnVtYmVyVVVJRCgxMCl9KWA7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSwgMzAwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3VibWl0UmVnaXN0ZXIgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiwgcHJvZHVjdGlvbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0Y29uc29sZS5sb2coXCJwcm9kdWN0aW9uIG1vZGU6XCIsIHByb2R1Y3Rpb24pO1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnJlc2V0UmVnaXN0ZXJFcnJvcigpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJOYW1lJ10ubGVuZ3RoIDwgMSkgdGhpc1sndXNlck5hbWVFcnJvciddID0gJ05o4bqtcCB0w6puJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJQaG9uZSddLmxlbmd0aCA8IDgpIHRoaXNbJ3VzZXJQaG9uZUVycm9yJ10gPSAnU+G7kSDEkWnhu4duIHRob+G6oWkgY2jGsGEgxJHDum5nJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJOYW1lRXJyb3InXSB8fCB0aGlzWyd1c2VyUGhvbmVFcnJvciddKSByZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxyXG5cdFx0XHRcdGZvcm1EYXRhID0ge1xyXG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcclxuXHRcdFx0XHRcdGRvbWFpbixcclxuXHRcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdFx0bmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRcdHBob25lOiB0aGlzWyd1c2VyUGhvbmUnXSxcclxuXHRcdFx0XHRcdGVtYWlsOiB0aGlzWyd1c2VyRW1haWwnXSxcclxuXHRcdFx0XHRcdG5vdGU6IHRoaXNbJ3VzZXJOb3RlJ11cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly9GaXJlIEFudHMgdHJhY2tpbmdHb2FsIGhvb2shXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSBhZHhfYW5hbHl0aWMudHJhY2tpbmdHb2FsKG1ldGFTZXJ2aWNlLmNvbmZpZ3MuYW50c1JlZ2lzdGVyR29hbElkLCAxLCAnZXZlbnQnKTtcclxuXHRcdFx0Ly9TZW5kIGZvcm0gaW5mb3JtYXRpb24gdG8gQW50cyFcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGZvcm1EYXRhLm5vdGUpO1xyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGFudHNfdXNlckluZm9MaXN0ZW5lcilcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvL0ZhY2Vib29rIHRyYWNraW5nIExlYWQvQ29tcGxldGVSZWdpc3RyYXRpb24gZXZlbnRcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnTGVhZCcpO1xyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgZmJxKCd0cmFjaycsICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicpO1xyXG5cclxuXHRcdFx0Ly9UcmFja2luZyBHb29nbGUgQW5hbHl0aWMgZ29hbCFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRnYSgnc2VuZCcsIHtcclxuXHRcdFx0XHRcdGhpdFR5cGU6ICdldmVudCcsXHJcblx0XHRcdFx0XHRldmVudENhdGVnb3J5OiAnU3Vic2NyaXB0aW9uJyxcclxuXHRcdFx0XHRcdGV2ZW50QWN0aW9uOiAnU3VibWl0J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdGFudHNfYW5hbHl0aWMucHVzaCh7XHJcblx0XHRcdFx0XHRjb252ZXJzaW9uSWQgOiBtZXRhU2VydmljZS5jb25maWdzLmFudHNDb252ZXJzaW9uSWQsXHJcblx0XHRcdFx0XHRjdXN0b21QYXJhbXMgOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQnaXNfZWNvbW0nOiAwLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV9wYWdldHlwZSc6ICdwdXJjaGFzZScsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3F1YW50aXR5JzogMSxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fdG90YWx2YWx1ZSc6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJGb3JtKCk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2N1c3RvbWVyL2luc2VydC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiBmb3JtRGF0YVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyKCk7XHJcblx0XHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWFpbC9zZW50L2pzb25gLCB7cGFyYW1zOiBmb3JtRGF0YX0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlbWFpbC4uLicsIGRhdGEpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlcigpOyAvL0F1dG8gc3VjY2VzcyBvbiB0ZXN0IGVudmlyb25tZW50IVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGdsb2JhbC5nZXRfaW5mbyA9IChfdXNlckluZm8pID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJhbnQncyBnZXRfaW5mbyBmdW5jdGlvbjpcIiwgX3VzZXJJbmZvKTtcclxuXHJcblx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cclxuXHRcdFx0XHR0aGlzLnVzZXJOYW1lID0gX3VzZXJJbmZvLm5hbWUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyUGhvbmUgPSBfdXNlckluZm8ucGhvbmUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyTm90ZSA9IF91c2VySW5mby5ub3RlIHx8ICcnO1xyXG5cclxuXHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXHJcblx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIG1haW5Db250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGZlYXR1cmVzID0gW107XHJcblx0c2xpZGVycyA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwLCBtZXRhU2VydmljZSkge1xyXG5cdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHR0aGlzLmxvYWREYXRhID0gKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbWV0YVNlcnZpY2UubGlua3NbMF07ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogXCJ0cmFuZy1jaHVcIiB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbZGF0YS5yZXN1bHRzWzBdLlBhZ2VdO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ2Jhbm5lcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZmVhdHVyZXMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnSG9tZVNsaWRlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5Qb3N0O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNzA7XHJcblx0XHRcdCRyb290U2NvcGUuJG9uKCdzaXplQ2hhbmdlJywgKGV2ZW50LCBzaXplKSA9PiB7XHJcblx0XHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9IHNpemUuaGVpZ2h0ID4gNTcwID8gc2l6ZS5oZWlnaHQgLSA3MCA6IDUwMDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHQkc2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIG5ld3NDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHdpbmRvdycsICckaHR0cCcsICAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcclxuXHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cclxuXHRcdHRoaXMubG9hZERhdGEgPSAoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdFx0dGhpcy5wYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0XHR0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW5nbGVNb2RlKSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3Bvc3QvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXMgLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEucmVzdWx0c1swXSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnbmV3cycsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0XHR0aGlzLmFsbE5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdCRzY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIHBhZ2VDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRlbGVtZW50LCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwLCBtZXRhU2VydmljZSkge1xyXG5cdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHR0aGlzLmxvYWREYXRhID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcclxuXHRcdFx0XHRwcmV2aW91c0dyb3VwID0gJHJvb3RTY29wZS5hY3RpdmVHcm91cDsgJHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IHBhcmVudEdyb3VwO1xyXG5cclxuXHRcdFx0aWYocGFnZUFsaWFzID09ICd0cmFuZy1jaHUnKSB7ICRzdGF0ZS5nbygnaG9tZScpOyByZXR1cm47IH1cclxuXHJcblx0XHRcdC8vS2ljayBiYWNrIHRvIHRoZSBIb21lIHBhZ2UgaWYgaXQncyBub3QgYSBsaW5rIGluIG1lbnVcclxuXHRcdFx0aWYgKCFwYXJlbnRHcm91cCB8fCAhcGFyZW50R3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJlbnRHcm91cCA9PT0gcHJldmlvdXNHcm91cCkgeyAvL0lmIHRoZSBwYXJlbnQgZ3JvdXAgaXMgYWxyZWFkeSBhY3RpdmUgPT4gc2Nyb2xsIHRvIHRoZSBjaGlsZCBzZWN0aW9uIVxyXG5cdFx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxyXG5cdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblx0XHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuXHRcdFx0XHR9LCA4MDApO1xyXG5cdFx0XHR9IGVsc2UgeyAvL0ZpbmFsbHksIGxvYWQgdGhlIHBhZ2UgPT4gc2V0IHBhZ2UncyBjaGlsZHJlbiBjb250ZW50IVxyXG5cdFx0XHRcdGxldCBsb2FkZWRDb3VudCA9IDA7ICRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbXTtcclxuXHRcdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL1Jlc2V0IHRoZSBzY3JvbGwgaWYgbG9hZGluZyBmcm9tIHRoZSBiZWdpbm5pbmchXHJcblx0XHRcdFx0cGFyZW50R3JvdXAuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IHt9O1xyXG5cdFx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBjaGlsZC5hbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBjaGlsZFJlc3VsdCA9IGRhdGEucmVzdWx0c1swXTtcclxuXHRcdFx0XHRcdFx0aWYgKGNoaWxkUmVzdWx0ICYmIGNoaWxkUmVzdWx0LlBhZ2UpIHtcclxuXHRcdFx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IGNoaWxkUmVzdWx0LlBhZ2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pLmZpbmFsbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsb2FkZWRDb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxvYWRlZENvdW50ID49IHBhcmVudEdyb3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIChhZnRlciBhbGwgY29udGVudCBhcmUgcmVhZHkgZnJvbSBzZXJ2ZXIhKVxyXG5cdFx0XHRcdFx0XHRcdC8vIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxyXG5cdFx0XHRcdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblx0XHRcdFx0XHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0JHJvb3RTY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRmaW5kUGFyZW50R3JvdXAgKGFsaWFzLCBsaW5rcykge1xyXG5cdFx0Zm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG5cdFx0XHRpZiAobGluay5hbGlhcyAmJiBsaW5rLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGxpbms7XHJcblxyXG5cdFx0XHRpZiAobGluay5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmsuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRcdGlmIChjaGlsZC5hbGlhcyAmJiBjaGlsZC5hbGlhcyA9PSBhbGlhcykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGluaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XHJcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xyXG5cdH1cclxuXHJcblx0c2tpcEludHJvICgpIHtcclxuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IGZpeEFuYWx5dGljTWlzc2luZyB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcclxuXHJcbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge25ld3NDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL25ld3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7c3BsYXNoQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyXCI7XHJcblxyXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgbmF2aWdhdGlvbkxpbmsgZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25MaW5rXCI7XHJcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnQvc2lkZWJhclwiO1xyXG5pbXBvcnQgc3Vic2NyaXB0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybVwiO1xyXG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xyXG5pbXBvcnQgbmV3c0FyZWEgZnJvbSBcIi4vY29tcG9uZW50L25ld3NBcmVhXCI7XHJcbmltcG9ydCBtZXRhU2VydmljZSBmcm9tIFwiLi9tZXRhU2VydmljZVwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJGaWx0ZXIgZnJvbSBcIi4vdXRpbHMvZmlsdGVyXCI7XHJcblxyXG5nbG9iYWwuZml4QW5hbHl0aWNNaXNzaW5nID0gZml4QW5hbHl0aWNNaXNzaW5nO1xyXG5sZXQgQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcGxpY2F0aW9uJywgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ25nUHJvZ3Jlc3MnLCAnbmdUb3VjaCcsICduZ1BhcmFsbGF4JywgJ2FuZ3VsYXItc3BpbmtpdCddKVxyXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxyXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCduZXdzQ3RybCcsIG5ld3NDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcclxuXHQuc2VydmljZSgnbWV0YVNlcnZpY2UnLCBtZXRhU2VydmljZSlcclxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0TmF2aWdhdGlvbicsIG5hdmlnYXRpb24pXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRTaWRlYmFyJywgc2lkZWJhcilcclxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3RlcilcclxuXHQuZGlyZWN0aXZlKCdsaWdodFNsaWRlcicsIHNsaWRlcilcclxuXHQuZGlyZWN0aXZlKCduZXdzQXJlYScsIG5ld3NBcmVhKVxyXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxyXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xyXG5cclxucmVnaXN0ZXJGaWx0ZXIoQXBwKTtcclxuXHJcbkFwcC5ydW4oKCkgPT4ge1xyXG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XHJcbn0pO1xyXG5cclxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xyXG5cdCckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXSk7XHJcblxyXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQgeyBsYW5ndWFnZXMsIGxvY2FsaXphdGlvbiB9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgJHRpbWVvdXQgKSB7XHJcblx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmxvYWRNZW51ID0gKGNvbmZpZ3MsIGNvbmZpZ1Jlc29sdmUsIG5hdmlnYXRpb25SZXNvbHZlKSA9PiB7XHJcblx0XHRsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBjb25maWdzIHx8IHRoaXMuY29uZmlncztcclxuXHJcblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWVudS9nZXQvanNvbmAsIHtcclxuXHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHR9KS5zdWNjZXNzKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XHJcblxyXG5cdFx0XHRpZiAobmF2aWdhdGlvblJlc29sdmUpIG5hdmlnYXRpb25SZXNvbHZlKHRoaXMubGlua3MpO1xyXG5cdFx0XHRpZiAoY29uZmlnUmVzb2x2ZSkge1xyXG5cdFx0XHRcdGNvbmZpZ1Jlc29sdmUodGhpcy5jb25maWdzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnbWV0YVNlcnZpY2VSZWFkeScpO1xyXG5cdFx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHR9LCAwKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChjb25maWdSZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdCRyb290U2NvcGUubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZSA9IGxhbmd1YWdlc1swXTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvblskcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmxhbmddO1xyXG5cdFx0JHJvb3RTY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvblskcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmxhbmddO1xyXG5cdFx0XHRpZiAoJHJvb3RTY29wZS5jb25maWdzKSB0aGlzLmxvYWRNZW51KCRyb290U2NvcGUuY29uZmlncyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmNoYW5nZUxhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuXHRcdH07XHJcblxyXG5cdFx0JGh0dHAuZ2V0KCcvY29uZmlncycpLnN1Y2Nlc3MoKGRhdGEpID0+IHtcclxuXHRcdFx0ZGF0YS5kb21haW4gPSBkYXRhLmRvbWFpbiB8fCBsb2NhdGlvbi5ob3N0O1xyXG5cdFx0XHRsZXQgY29uZmlncyA9IGRhdGEsIHsgYXBpSG9zdCwgZG9tYWluIH0gPSBjb25maWdzO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ3MgPSBjb25maWdzO1xyXG5cdFx0XHQkcm9vdFNjb3BlLmNvbmZpZ3MgPSBjb25maWdzO1xyXG5cdFx0XHQvL092ZXJyaWRlIHRyYW5zbGF0aW9uIChpZiBwb3NzaWJsZSkuLlxyXG5cdFx0XHRsYW5ndWFnZXMuZm9yRWFjaCgoe2xhbmd9KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ10pIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddKSkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbGl6YXRpb25bbGFuZ11ba2V5XSA9IGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ11ba2V5XTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGNvbmZpZ3MubGFuZ3VhZ2VzKSB7ICRyb290U2NvcGUubGFuZ3VhZ2VzID0gY29uZmlncy5sYW5ndWFnZXM7IH1cclxuXHJcblxyXG5cclxuXHRcdFx0bmV3IFByb21pc2UoKG5hdmlnYXRpb25SZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHR0aGlzLmxvYWRNZW51KGNvbmZpZ3MsIGNvbmZpZ1Jlc29sdmUsIG5hdmlnYXRpb25SZXNvbHZlKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XTsiLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi91dGlscy9oZWxwZXInO1xyXG5cclxubGV0IHJvdXRlckNvbmZpZyA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLCAnJGh0dHBQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsXHJcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGh0dHBQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuXHRcdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnaG9tZScsIG1haW5Sb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdwYWdlJywgcGFnZVJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ25ld3MnLCBuZXdzUm91dGUpO1xyXG5cclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcclxuXHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge307XHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdCA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBhdGNoID0ge307XHJcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XHJcblx0fVxyXG5dO1xyXG5cclxudmFyIHNwbGFzaFJvdXRlID0ge1xyXG5cdHVybDogJy9zcGxhc2gnLFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3NwbGFzaC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgbWFpblJvdXRlID0ge1xyXG5cdHVybDogJy8nLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBob21lJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbWFpbi5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBwYWdlUm91dGUgPSB7XHJcblx0dXJsOiAnLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHBhZ2UnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAncGFnZUN0cmwgYXMgcGFnZUN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIG5ld3NSb3V0ZSA9IHtcclxuXHR1cmw6ICcvdGluLXR1Yy86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBuZXdzJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbmV3cy5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ25ld3NDdHJsIGFzIG5ld3NDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlckNvbmZpZzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3Rlcihtb2R1bGVJbnN0YW5jZSkge1xyXG5cdG1vZHVsZUluc3RhbmNlXHJcblx0XHQuZmlsdGVyKCduaWNlRGF0ZScsIG5pY2VEYXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5pY2VEYXRlICgpIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCA9ICdERC1NTS1ZWVlZJykge1xyXG5cdFx0cmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcclxuXHR9O1xyXG59IiwiZXhwb3J0IGNvbnN0IGFwaUhvc3QgPSAnaHR0cDovLzEyOC4xOTkuMjI3LjEzMic7Ly8ncml2ZXJjaXR5OTkudm4nOy8vaHR0cDovLzEwMy41Ni4xNTcuNjYvcmVhbGVzdGF0ZSc7XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJywgJ3VzZXJOb3RlJ107XHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPSBbXHJcblx0e2xhbmc6IFwidmlldG5hbWVzZVwiLCBpZDogMSwgZGlzcGxheTogXCJUaeG6v25nIFZp4buHdFwifSxcclxuXHQvLyB7bGFuZzogXCJlbmdsaXNoXCIsIGlkOiAyLCBkaXNwbGF5OiBcIkVuZ2xpc2hcIn1cclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgbG9jYWxpemF0aW9uID0ge1xyXG5cdHZpZXRuYW1lc2U6IHtcclxuXHRcdHJlZ2lzdGVyOiBcIsSQxIJORyBLw51cIixcclxuXHRcdG5ld3M6IFwiVElOIFThu6hDXCIsXHJcblx0XHRyZWdpc3RlclRpdGxlSGVhZDogYDxzcGFuPkfhu41pIDwvc3Bhbj5gLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZVRhaWw6IGAgXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+IGhv4bq3YyBn4butaSB0aMO0bmcgdGluIMSR4buDIG5o4bqtbjwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+QsOBTyBHScOBPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj504burPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5DSOG7piDEkOG6plUgVMavPC9zcGFuPmAsXHJcblx0XHRmdWxsTmFtZVBsYWNlaG9sZGVyOiBcIkjhu40gdsOgIHTDqm4qXCIsXHJcblx0XHRwaG9uZVBsYWNlaG9sZGVyOiBcIsSQaeG7h24gdGhv4bqhaSpcIixcclxuXHRcdGVtYWlsUGxhY2Vob2xkZXI6IFwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIsXHJcblx0XHRub3RlUGxhY2Vob2xkZXI6IFwiR2hpIGNow7pcIixcclxuXHRcdHNlbmQ6IFwiR+G7rWlcIixcclxuXHRcdGRlc2lnbmVkQnk6IFwiVGhp4bq/dCBr4buDIGLhu59pXCIsXHJcblx0XHRkZXNpZ25Db21wYW55OiBgPGEgaHJlZj1cImh0dHA6Ly90d2luLnZuXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMkVCM0QzO1wiIHRhcmdldD1cIl9ibGFua1wiPlRXSU4gU29mdHdhcmUgU29sdXRpb25zPC9hPmBcclxuXHR9LFxyXG5cdGVuZ2xpc2g6IHtcclxuXHRcdHJlZ2lzdGVyOiBcIlNVQlNDUklCRVwiLFxyXG5cdFx0bmV3czogXCJORVdTXCIsXHJcblx0XHRyZWdpc3RlclRpdGxlSGVhZDogYDxzcGFuPkNhbGwgPC9zcGFuPmAsXHJcblx0XHRyZWdpc3RlclRpdGxlVGFpbDogYCBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj4gb3Igc3Vic2NyaWJlIHRvIHJlY2VpdmUgPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5RVU9UQVRJT048L3NwYW4+XHJcblx0XHRcdDxzcGFuPmZyb208L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPklOVkVTVE9SPC9zcGFuPmAsXHJcblx0XHRmdWxsTmFtZVBsYWNlaG9sZGVyOiBcIkZ1bGwgbmFtZSpcIixcclxuXHRcdHBob25lUGxhY2Vob2xkZXI6IFwiUGhvbmUqXCIsXHJcblx0XHRlbWFpbFBsYWNlaG9sZGVyOiBcIkVtYWlsIChvcHRpb25hbClcIixcclxuXHRcdG5vdGVQbGFjZWhvbGRlcjogXCJOb3RlLi5cIixcclxuXHRcdHNlbmQ6IFwiU2VuZFwiLFxyXG5cdFx0ZGVzaWduZWRCeTogXCJEZXNpZ25lZCBieVwiLFxyXG5cdFx0ZGVzaWduQ29tcGFueTogYDxhIGhyZWY9XCJodHRwOi8vdHdpbi52blwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzJFQjNEMztcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UV0lOIFNvZnR3YXJlIFNvbHV0aW9uczwvYT5gXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeEFuYWx5dGljTWlzc2luZyAoKSB7XHJcblx0aWYgKCFnbG9iYWwuZ2EpIGdsb2JhbC5nYSA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuZmJxKSBnbG9iYWwuZmJxID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5hbnRzX3VzZXJJbmZvTGlzdGVuZXIpIGdsb2JhbC5hbnRzX3VzZXJJbmZvTGlzdGVuZXIgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmFudHNfYW5hbHl0aWMpIGdsb2JhbC5hbnRzX2FuYWx5dGljID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xyXG5cdHZhciBzZWFyY2hLZXksIHNlYXJjaFZhbHVlO1xyXG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XHJcblx0XHRzZWFyY2hLZXkgPSBrZXk7XHJcblx0XHRzZWFyY2hWYWx1ZSA9IHByZWRpY2F0ZVtrZXldO1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaW5zdGFuY2Ugb2Ygc291cmNlcykge1xyXG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudE1lbnVCeUFsaWFzIChhbGlhcywgbGlua3MpIHtcclxuXHRmb3IgKGxldCBncm91cCBvZiBsaW5rcykge1xyXG5cdFx0aWYgKGdyb3VwLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGdyb3VwO1xyXG5cdFx0aWYgKGdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGdyb3VwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xyXG5cdHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XHJcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xyXG5cdFx0cmV0dXJuIGNvbmZpZ1NlcnZpY2UucHJvbWlzZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcclxuXHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XHJcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xyXG5cdGlmIChtYXggIT0gdW5kZWZpbmVkICYmIHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XHJcblx0dmFyIGYgPSBmb250IHx8ICcxMnB4IGFyaWFsJyxcclxuXHRcdG8gPSAkKCc8ZGl2PicgKyB0aGlzICsgJzwvZGl2PicpXHJcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXHJcblx0XHRcdC5hcHBlbmRUbygkKCdib2R5JykpLFxyXG5cdFx0dyA9IG8ud2lkdGgoKTtcclxuXHJcblx0by5yZW1vdmUoKTtcclxuXHJcblx0cmV0dXJuIHc7XHJcbn07XHJcblxyXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
