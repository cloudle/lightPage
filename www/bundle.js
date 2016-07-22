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
		scope: { items: '=', marque: '=' },
		transclude: true,
		template: '<div class="light-slider {{wrapperClass}}"\n\t\t\tng-swipe-left="swipeLeft($event)" ng-swipe-right="swipeRight($event)">\n\t\t\t\n\t\t\t<div class="marquee">\n\t\t\t\n\t\t\t\t<marquee class="marquee-slider" ng-if="marque" direction="left" scrollamount="10" onmouseout="this.start()" onmouseover="this.stop()" >\n\t\t\t\t\t<span style="font-size: 24px; color: #ffffff;">\n\t\t\t\t\t\t<img src="{{marque.img}}" width="30" height="30" border="0" alt="Photobucket">\n\t\t\t\t\t\t<span ng-bind="marque.etext0"></span>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span style="font-size: 24px; color: #fff90d;" ng-bind="marque.etext1"></span>\n\t\t\t\t\t<span style="font-size: 24px; color: #ffffff;" ng-bind="marque.etext2"></span>\n\t\t\t\t\t<span style="font-size: 24px; color: #fff90d;" ng-bind="marque.etext3"></span>\n\t\t\t\t\t\t<img src="{{marque.img}}" width="30" height="30" border="0" alt="Photobucket">\n\t\t\t\t\t</span>\n\t\t\t\t</marquee>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div id="currentSlide" class="active-slide" ng-style="{\'background-image\': \'url(\'+activeSlide.image+\')\'}"></div>\n\t\t\t<div id="previousSlide" class="active-slide previous" ng-style="{\'background-image\': \'url(\'+previousSlide.image+\')\'}"></div>\n\n\t\t\t<div class="slide-navigation">\n\t\t\t\t<div class="navigate-next"></div>\n\t\t\t\t<div class="navigate-back"></div>\n\t\t\t</div>\n\n\t\t\t<div class="slide-positions">\n\t\t\t\t<div class="position-item" ng-class="{active: item.isActive}" ng-repeat="item in items" ng-click="navigate(item)"></div>\n\t\t\t</div>\n\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>',
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

	if (metaService.ready) fetchEssentialData();
	$rootScope.$on('metaServiceReady', fetchEssentialData);

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

	this.marqueSentence = metaService.configs.marquee;
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

var newsController = exports.newsController = function newsController($rootScope, $window, $http, $state, metaService) {
	var _this = this;

	_classCallCheck(this, newsController);

	var _metaService$configs = metaService.configs;
	var apiHost = _metaService$configs.apiHost;
	var domain = _metaService$configs.domain;

	//Tracking code..

	ga('send', 'pageview');
	fbq('track', "PageView");

	$rootScope.activeGroup = null;

	this.pageAlias = $state.params.alias;$window.scrollTo(0, 0);
	this.singleMode = this.pageAlias !== '';

	if (this.singleMode) {
		$http.get(apiHost + '/post/get/json', {
			params: { domain: domain, alias: this.pageAlias }
		}).success(function (data) {
			fbq('track', 'ViewContent');
			_this.activeNews = data.results[0].Post;
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

newsController.$inject = ['$rootScope', '$window', '$http', '$state', 'metaService'];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pageController = exports.pageController = function () {
	function pageController($rootScope, $scope, $element, $interval, $timeout, $state, $window, $http, metaService) {
		_classCallCheck(this, pageController);

		var _metaService$configs = metaService.configs;
		var apiHost = _metaService$configs.apiHost;
		var domain = _metaService$configs.domain;

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

	this.promise = new Promise(function (configResolve, reject) {
		$rootScope.languages = _helper.languages;
		$rootScope.activeLanguage = _helper.languages[0];

		$rootScope.localization = _helper.localization[$rootScope.activeLanguage.lang];
		$rootScope.$watch('activeLanguage', function () {
			$rootScope.localization = _helper.localization[$rootScope.activeLanguage.lang];
			console.log($rootScope.localization);
		});

		$rootScope.changeLanguage = function (language) {
			$rootScope.activeLanguage = language;
		};

		$http.get('/configs').success(function (data) {
			data.domain = data.domain || location.host;
			var configs = data;var apiHost = configs.apiHost;
			var domain = configs.domain;
			//Override translation (if possible)..

			_helper.languages.forEach(function (_ref) {
				var lang = _ref.lang;

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

			new Promise(function (navigationResolve, reject) {
				$http.get(apiHost + '/menu/get/json', {
					params: { domain: domain, lang: $rootScope.activeLanguage.id }
				}).success(function (data) {
					_this.links = data.results;_this.configs = configs;
					navigationResolve(_this.links);
					configResolve(_this.configs);
					console.log(_this.links);
					$timeout(function () {
						$rootScope.$broadcast('metaServiceReady');
						_this.ready = true;
					}, 0);
				});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcZm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXG5hdmlnYXRpb24uanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbkxpbmsuanMiLCJhcHBcXGNvbXBvbmVudFxcbmV3c0FyZWEuanMiLCJhcHBcXGNvbXBvbmVudFxccG9wdXAuanMiLCJhcHBcXGNvbXBvbmVudFxcc2lkZWJhci5qcyIsImFwcFxcY29tcG9uZW50XFxhcHBcXGNvbXBvbmVudFxcc2xpZGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXHN1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHBcXGNvbnRyb2xsZXJcXGFwcFxcY29udHJvbGxlclxcYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxtYWluQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxcbmV3c0NvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhZ2VDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxZQUFELEVBQWUsT0FBZixFQUF3QixVQUFVLFVBQVYsRUFBc0IsS0FBdEIsRUFBNkI7O0FBR25FLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTiwwMkJBSk07QUEwQk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUM7QUFDdEMs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QUE2QixNQUE3QixFQUFxQztBQUMzQyxLQUFJLFNBQVMsRUFBYjtBQUNBLE1BQUksSUFBSSxJQUFJLENBQVosRUFBZSxJQUFJLE1BQW5CLEVBQTJCLEdBQTNCLEVBQWdDO0FBQy9CLFlBQVUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFzQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxDQUF6QixDQUF0QixDQUFWO0FBQ0E7O0FBRUQsUUFBTyxNQUFQO0FBQ0E7O0FBRU0sU0FBUyxTQUFULENBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQzNDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLFFBQU8sS0FBUDtBQUNBOztBQUVELE9BQU8sU0FBUCxDQUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtBQUFBLEtBQ0MsSUFBSSxFQUFFLFVBQVUsSUFBVixHQUFpQixRQUFuQixFQUNGLEdBREUsQ0FDRSxFQUFDLFlBQVksVUFBYixFQUF5QixTQUFTLE1BQWxDLEVBQTBDLGVBQWUsUUFBekQsRUFBbUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtBQUFBLEtBSUMsSUFBSSxFQUFFLEtBQUYsRUFKTDs7QUFNQSxHQUFFLE1BQUY7O0FBRUEsUUFBTyxDQUFQO0FBQ0EsQ0FWRDs7QUFZQSxPQUFPLElBQVAsR0FBYyxrQkFBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGNvbHVtbnM6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3M9XCJmb290ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1yb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxhbmd1YWdlLWNob2ljZVwiIG5nLXJlcGVhdD1cImxhbmd1YWdlIGluICRyb290Lmxhbmd1YWdlc1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWNsYXNzPVwie2FjdGl2ZTogbGFuZ3VhZ2VBY3RpdmUobGFuZ3VhZ2UpfVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWNsaWNrPVwiJHJvb3QuY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1iaW5kPVwibGFuZ3VhZ2UuZGlzcGxheVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24uZGVzaWduZWRCeVwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PGEgbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLmRlc2lnbkNvbXBhbnkgfCB1bnNhZmVcIj48L2E+XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLmxhbmd1YWdlQWN0aXZlID0gKGluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlLmlkID09ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQ7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7XHJcblx0XHRcdHJlYWR5OiAnPScsXHJcblx0XHRcdGJ1cmdlckFjdGl2ZTogJz0nXHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS1hY3RpdmF0b3IgaWNvbi1uYXZpZ2F0aW9uLW1lbnVcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyXCI+PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxyXG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiAnJ30pXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxyXG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51IHN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJjaGlsZC5uYW1lXCIgbmctcmVwZWF0PVwiY2hpbGQgaW4gaXRlbS5jaGlsZHJlblwiXHJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGNoaWxkLmFsaWFzfSlcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgdWktc3JlZj1cIm5ld3NcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRzY29wZS5saW5rcyA9IG1ldGFTZXJ2aWNlLmxpbmtzO1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS50b2dnbGVCdXJnZXIoKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLm5ld3NBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ25ld3MnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRpbnN0YW5jZTogJz0nXHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXHJcblx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGxpbmsuYWxpYXN9KVwiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcclxuXHJcblx0XHRcdGlmIChzY29wZS5pbnN0YW5jZS5jaGlsZHJlbiAmJiBzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA+IHNjb3BlLm1heFdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdHNjb3BlLm1heFdpZHRoID0gY3VycmVudFdpZHRoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY29wZS5saW5rQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHJvb3RTY29wZS5hY3RpdmVHcm91cCAmJiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwLmlkID09PSBpbnN0YW5jZS5pZDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYW52YXMgdG9wLXNlcGFyYXRlZCBuZXdzLWFyZWFcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1oZWFkaW5nIHNlY3Rpb25cIj48c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtcm93IHF1YXRyb1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbiBsaWdodC1jb2x1bW4gY2xpY2stYWJsZVwiIG5nLXJlcGVhdD1cIm5ld3NJdGVtIGluIG5ld3NcIiB1aS1zcmVmPVwibmV3cyh7YWxpYXM6IG5ld3NJdGVtLlBvc3QuYWxpYXN9KVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIiBuZy1iaW5kPVwibmV3c0l0ZW0uUG9zdC50aXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbWFnZSBpbWFnZS1ob3Zlci1lZmZlY3Qtem9vbS0xMjBcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XHJcblx0XHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImNvbnN0IGluaXRpYWxUb3BPZmZzZXQgPSAxMjE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIG5nLXN0eWxlPVwie3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCcrdG9wUG9zaXRpb24rJ3B4KSd9XCI+XHJcblx0XHRcdDxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+XHJcblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic21hbGwtYmFubmVyXCI+PC9kaXY+LS0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlYmFyLW5ld3NcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZXdzLXN1bW1hcnlcIiBuZy1yZXBlYXQ9XCJuZXdzSXRlbSBpbiBuZXdzXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiBuZXdzSXRlbS5Qb3N0LmFsaWFzfSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aHVtYi1pbWFnZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK25ld3NJdGVtLlBvc3QuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3NJdGVtLlBvc3QudGl0bGVcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHR2YXIgc2lkZWJhckhlaWdodCwgZm9vdGVySGVpZ2h0OyBzY29wZS50b3BQb3NpdGlvbiA9IDA7XHJcblxyXG5cdFx0XHQvL1NhZmVseSBjYWxjdWxhdGUgZWxlbWVudCdzIHNpemUgYWZ0ZXIgc3R1ZmYgaGF2ZSBiZWVuIHJlbmRlcmVkIVxyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2NvcGUubmV3cyA9ICRyb290U2NvcGUubmV3cztcclxuXHRcdFx0XHRzaWRlYmFySGVpZ2h0ID0gZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdGZvb3RlckhlaWdodCA9IGFuZ3VsYXIuZWxlbWVudCgnI2Zvb3RlcicpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdH0sIDUwMCk7XHJcblxyXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2Nyb2xsQ2hhbmdlJywgKGV2ZW50LCBzY3JvbGxQb3NpdGlvbikgPT4ge1xyXG5cdFx0XHRcdC8vIHNjb3BlLm5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XHJcblxyXG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgZG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSwgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpLFxyXG5cdFx0XHRcdFx0XHRvZmZzZXQgPSBlbGVtZW50Lm9mZnNldCgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzY3JvbGxQb3NpdGlvbi5zY3JvbGxpbmdEb3duKSB7XHJcblx0XHRcdFx0XHRcdGxldCBzY3JvbGxEb3duVG91Y2hCb3R0b20gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBvZmZzZXQudG9wICsgc2lkZWJhckhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEb3duT3ZlckZvb3RlciA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IGRvY3VtZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHNjcm9sbERvd25Ub3VjaEJvdHRvbSAmJiAhc2Nyb2xsRG93bk92ZXJGb290ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCAtIHNpZGViYXJIZWlnaHQgLSBpbml0aWFsVG9wT2Zmc2V0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uLnRvcCA8IG9mZnNldC50b3AgLSBpbml0aWFsVG9wT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGludGVydmFsLCAkdGltZW91dCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScsIG1hcnF1ZTogJz0nIH0sXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGlnaHQtc2xpZGVyIHt7d3JhcHBlckNsYXNzfX1cIlxyXG5cdFx0XHRuZy1zd2lwZS1sZWZ0PVwic3dpcGVMZWZ0KCRldmVudClcIiBuZy1zd2lwZS1yaWdodD1cInN3aXBlUmlnaHQoJGV2ZW50KVwiPlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1hcnF1ZWVcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0PG1hcnF1ZWUgY2xhc3M9XCJtYXJxdWVlLXNsaWRlclwiIG5nLWlmPVwibWFycXVlXCIgZGlyZWN0aW9uPVwibGVmdFwiIHNjcm9sbGFtb3VudD1cIjEwXCIgb25tb3VzZW91dD1cInRoaXMuc3RhcnQoKVwiIG9ubW91c2VvdmVyPVwidGhpcy5zdG9wKClcIiA+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmZmZmY7XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXJxdWUuaW1nfX1cIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBib3JkZXI9XCIwXCIgYWx0PVwiUGhvdG9idWNrZXRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gbmctYmluZD1cIm1hcnF1ZS5ldGV4dDBcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmY5MGQ7XCIgbmctYmluZD1cIm1hcnF1ZS5ldGV4dDFcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmZmZmY7XCIgbmctYmluZD1cIm1hcnF1ZS5ldGV4dDJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmY5MGQ7XCIgbmctYmluZD1cIm1hcnF1ZS5ldGV4dDNcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXJxdWUuaW1nfX1cIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBib3JkZXI9XCIwXCIgYWx0PVwiUGhvdG9idWNrZXRcIj5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L21hcnF1ZWU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBpZD1cImN1cnJlbnRTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtbmF2aWdhdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1uZXh0XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLWJhY2tcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWl0ZW1cIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uaXNBY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiIG5nLWNsaWNrPVwibmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdGxldCAkYWN0aXZlU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNjdXJyZW50U2xpZGUnKSwgJHByZXZpb3VzU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNwcmV2aW91c1NsaWRlJyksXHJcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XHJcblxyXG5cdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cclxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpdGVtcycsICgpID0+IHtcclxuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcclxuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5wcmV2aW91c1NsaWRlKSBzY29wZS5wcmV2aW91c1NsaWRlLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4ICE9IHVuZGVmaW5lZCA/IG5leHRJbmRleCA6IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcclxuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPCAwKSB7XHJcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IHNjb3BlLml0ZW1zLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzY29wZS5hY3RpdmVJbmRleCA+PSBzY29wZS5pdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVTbGlkZSkgc2NvcGUuYWN0aXZlU2xpZGUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXHJcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xyXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJGFjdGl2ZVNsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICctMTAwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30pO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcclxuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXNldCBpbnRlcnZhbDtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XHJcblx0XHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uYXZpZ2F0ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZSAhPSBzY29wZS5hY3RpdmVTbGlkZSkge1xyXG5cdFx0XHRcdFx0bmV4dFNsaWRlKHNjb3BlLml0ZW1zLmluZGV4T2YoaW5zdGFuY2UpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5zd2lwZUxlZnQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4ICsgMSk7XHJcblx0XHRcdHNjb3BlLnN3aXBlUmlnaHQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4IC0gMSk7XHJcblxyXG5cdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyB3cmFwcGVyQ2xhc3M6ICdAJywgc3VibWl0VGV4dDogJ0AnIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwid3JhcHBlckNsYXNzXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNsb3NlLWNvbW1hbmQgaWNvbi1uYXZpZ2F0aW9uLWNsb3NlXCIgbmctY2xpY2s9XCJhcHBDdHJsLmNsb3NlUmVnaXN0ZXJGb3JtKClcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZUhlYWQgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlVGFpbCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmZ1bGxOYW1lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTmFtZVwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiPjwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLnBob25lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyUGhvbmVcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyUGhvbmVFcnJvclwiPjwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmVtYWlsUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRW1haWxcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiPjwvZGl2PlxyXG5cclxuXHRcdFx0PHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5ub3RlUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTm90ZVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAkcm9vdC5sb2NhbGl6YXRpb24uc2VuZFwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZm9ybT5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRzY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0c2NvcGUuYXBwQ3RybCA9ICRyb290U2NvcGUuYXBwQ3RybDtcclxuXHJcblx0XHRcdHNjb3BlLnN1Ym1pdCA9ICRyb290U2NvcGUuc3VibWl0UmVnaXN0ZXI7XHJcblxyXG5cdFx0XHRzY29wZS5nb29nbGVMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhbnRzX2ZiQXV0aENsaWNrKCdsb2dpbicpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV1cclxuXHJcbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImltcG9ydCB7XHJcblx0Z2VuZXJhdGVOdW1iZXJVVUlELFxyXG5cdHJlZ2lzdGVyRmllbGRzLFxyXG5cdGZpbmRQYXJlbnRNZW51QnlBbGlhc1xyXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5JywgJ21ldGFTZXJ2aWNlJ107XHJcblx0ZGV2ZWxvcG1lbnRNb2RlID0gZmFsc2U7XHJcblx0cmVhZHkgPSB0cnVlO1xyXG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcclxuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcclxuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5LCBtZXRhU2VydmljZSkge1xyXG5cdFx0JHJvb3RTY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlnczsgLy9XaWxsIGJlIHVuZGVmaW5lZCBhdCBmaXJzdCA9PiBub3Qgc2FmZSBmb3Igbm9ybWFsIHVzYWdlLCBqdXN0IGZvciB0cmFuc2xhdGlvbiFcclxuXHRcdCRyb290U2NvcGUuYXBwQ3RybCA9IHRoaXM7XHJcblxyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XHJcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XHJcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAobmV3VmFsKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBuZXdWYWwgPyBuZXdWYWwgOiAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XHJcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG5cclxuXHRcdFx0Ly9TZXQgbWV0YSdzIGNvbnRlbnQgZm9yIEFVRElFTkNFIFNFR01FTlQhXHJcblx0XHRcdGxldCBjdXJyZW50U2VnbWVudCA9ICdob21lJztcclxuXHRcdFx0aWYgKCRzdGF0ZS5pcygncGFnZScpKSB7XHJcblx0XHRcdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudE1lbnUgPSBmaW5kUGFyZW50TWVudUJ5QWxpYXMocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyk7XHJcblx0XHRcdFx0Y3VycmVudFNlZ21lbnQgPSBwYXJlbnRNZW51Lm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoJHN0YXRlLmlzKCduZXdzJykpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9ICduZXdzJ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKCQoXCJtZXRhW25hbWU9J2FkeDpzZWN0aW9ucyddXCIpWzBdKS5hdHRyKCdjb250ZW50JywgY3VycmVudFNlZ21lbnQpO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcigncmVhZHknKTsgLy9NYW51YWxseSB0cmlnZ2VyIHJlYWR5IGV2ZW50LCB3aGljaCBob3BlIGFsc28gdHJpZ2dlciBBbnRzJyBzY3JpcHQhXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZmV0Y2hFc3NlbnRpYWxEYXRhID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ2Zvb3RlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGVycyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICduZXdzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCwgbGltaXQ6IDQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdCRyb290U2NvcGUubmV3cyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChtZXRhU2VydmljZS5yZWFkeSkgZmV0Y2hFc3NlbnRpYWxEYXRhKCk7XHJcblx0XHQkcm9vdFNjb3BlLiRvbignbWV0YVNlcnZpY2VSZWFkeScsIGZldGNoRXNzZW50aWFsRGF0YSk7XHJcblxyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSAwO1xyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvcFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY3JvbGxDaGFuZ2UnLCB7dG9wOiB0b3BTY3JvbGwsIHNjcm9sbGluZ0Rvd246IHRvcFNjcm9sbCA+IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9ufSk7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gdG9wU2Nyb2xsO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l6ZUNoYW5nZScsIHtcclxuXHRcdFx0XHRoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0XHR3aWR0aDogJCh3aW5kb3cpLndpZHRoKClcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL1JlZ2lzdGVyIGZvcm0hXHJcblx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuXHRcdFx0dGhpc1tmaWVsZF0gPSAnJzsgdGhpc1tmaWVsZCsnRXJyb3InXSA9ICcnO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jbG9zZVJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRoaXNbZmllbGRdID0gJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJFcnJvciA9ICgpID0+IHtcclxuXHRcdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB0aGlzW2ZpZWxkKydFcnJvciddID0gJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2U7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnN1Ym1pdFJlZ2lzdGVyID0gJHJvb3RTY29wZS5zdWJtaXRSZWdpc3RlciA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4sIHByb2R1Y3Rpb24gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicHJvZHVjdGlvbiBtb2RlOlwiLCBwcm9kdWN0aW9uKTtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5yZXNldFJlZ2lzdGVyRXJyb3IoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzWyd1c2VyTmFtZSddLmxlbmd0aCA8IDEpIHRoaXNbJ3VzZXJOYW1lRXJyb3InXSA9ICdOaOG6rXAgdMOqbic7XHJcblx0XHRcdGlmICh0aGlzWyd1c2VyUGhvbmUnXS5sZW5ndGggPCA4KSB0aGlzWyd1c2VyUGhvbmVFcnJvciddID0gJ1Phu5EgxJFp4buHbiB0aG/huqFpIGNoxrBhIMSRw7puZyc7XHJcblx0XHRcdGlmICh0aGlzWyd1c2VyTmFtZUVycm9yJ10gfHwgdGhpc1sndXNlclBob25lRXJyb3InXSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIGxvY2FsVXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3VzZXJJbmZvXCIpKSxcclxuXHRcdFx0XHRmb3JtRGF0YSA9IHtcclxuXHRcdFx0XHRcdC4uLmxvY2FsVXNlckluZm8sXHJcblx0XHRcdFx0XHRkb21haW4sXHJcblx0XHRcdFx0XHRmdWxsTmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRcdG5hbWU6IHRoaXNbJ3VzZXJOYW1lJ10sXHJcblx0XHRcdFx0XHRwaG9uZTogdGhpc1sndXNlclBob25lJ10sXHJcblx0XHRcdFx0XHRlbWFpbDogdGhpc1sndXNlckVtYWlsJ10sXHJcblx0XHRcdFx0XHRub3RlOiB0aGlzWyd1c2VyTm90ZSddXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgYWR4X2FuYWx5dGljLnRyYWNraW5nR29hbChtZXRhU2VydmljZS5jb25maWdzLmFudHNSZWdpc3RlckdvYWxJZCwgMSwgJ2V2ZW50Jyk7XHJcblx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0YW50c191c2VySW5mb0xpc3RlbmVyKGZvcm1EYXRhLCBmYWxzZSwgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYW50c191c2VySW5mb0xpc3RlbmVyKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL0ZhY2Vib29rIHRyYWNraW5nIExlYWQvQ29tcGxldGVSZWdpc3RyYXRpb24gZXZlbnRcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnTGVhZCcpO1xyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgZmJxKCd0cmFjaycsICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicpO1xyXG5cclxuXHRcdFx0Ly9UcmFja2luZyBHb29nbGUgQW5hbHl0aWMgZ29hbCFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRnYSgnc2VuZCcsIHtcclxuXHRcdFx0XHRcdGhpdFR5cGU6ICdldmVudCcsXHJcblx0XHRcdFx0XHRldmVudENhdGVnb3J5OiAnU3Vic2NyaXB0aW9uJyxcclxuXHRcdFx0XHRcdGV2ZW50QWN0aW9uOiAnU3VibWl0J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdGFudHNfYW5hbHl0aWMucHVzaCh7XHJcblx0XHRcdFx0XHRjb252ZXJzaW9uSWQgOiBtZXRhU2VydmljZS5jb25maWdzLmFudHNDb252ZXJzaW9uSWQsXHJcblx0XHRcdFx0XHRjdXN0b21QYXJhbXMgOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQnaXNfZWNvbW0nOiAwLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV9wYWdldHlwZSc6ICdwdXJjaGFzZScsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3F1YW50aXR5JzogMSxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fdG90YWx2YWx1ZSc6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJGb3JtKCk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2N1c3RvbWVyL2luc2VydC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiBmb3JtRGF0YVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyKCk7XHJcblx0XHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWFpbC9zZW50L2pzb25gLCB7cGFyYW1zOiBmb3JtRGF0YX0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlbWFpbC4uLicsIGRhdGEpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlcigpOyAvL0F1dG8gc3VjY2VzcyBvbiB0ZXN0IGVudmlyb25tZW50IVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGdsb2JhbC5nZXRfaW5mbyA9IChfdXNlckluZm8pID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJhbnQncyBnZXRfaW5mbyBmdW5jdGlvbjpcIiwgX3VzZXJJbmZvKTtcclxuXHJcblx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cclxuXHRcdFx0XHR0aGlzLnVzZXJOYW1lID0gX3VzZXJJbmZvLm5hbWUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyUGhvbmUgPSBfdXNlckluZm8ucGhvbmUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XHJcblxyXG5cdFx0XHRcdC8vU3RvcmUgU29jaWFsIHByb2ZpbGVcclxuXHRcdFx0XHRpZiAoX3VzZXJJbmZvKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl91c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeShfdXNlckluZm8pKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0ZmVhdHVyZXMgPSBbXTtcclxuXHRzbGlkZXJzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHR0aGlzLm1hcnF1ZVNlbnRlbmNlID0gbWV0YVNlcnZpY2UuY29uZmlncy5tYXJxdWVlO1xyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHR0aGlzLmxvYWREYXRhID0gKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbWV0YVNlcnZpY2UubGlua3NbMF07ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogXCJ0cmFuZy1jaHVcIiB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbZGF0YS5yZXN1bHRzWzBdLlBhZ2VdO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ2Jhbm5lcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZmVhdHVyZXMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnSG9tZVNsaWRlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gaXRlbS5Qb3N0O1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNzA7XHJcblx0XHRcdCRyb290U2NvcGUuJG9uKCdzaXplQ2hhbmdlJywgKGV2ZW50LCBzaXplKSA9PiB7XHJcblx0XHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9IHNpemUuaGVpZ2h0ID4gNTcwID8gc2l6ZS5oZWlnaHQgLSA3MCA6IDUwMDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHQkc2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIG5ld3NDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93JywgJyRodHRwJywgICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHR0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2luZ2xlTW9kZSkge1xyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXMgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0dGhpcy5hbGxOZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGVsZW1lbnQsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcblx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcclxuXHRcdFx0cHJldmlvdXNHcm91cCA9ICRyb290U2NvcGUuYWN0aXZlR3JvdXA7ICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBwYXJlbnRHcm91cDtcclxuXHJcblx0XHRpZihwYWdlQWxpYXMgPT0gJ3RyYW5nLWNodScpIHsgJHN0YXRlLmdvKCdob21lJyk7IHJldHVybjsgfVxyXG5cclxuXHRcdC8vS2ljayBiYWNrIHRvIHRoZSBIb21lIHBhZ2UgaWYgaXQncyBub3QgYSBsaW5rIGluIG1lbnVcclxuXHRcdGlmICghcGFyZW50R3JvdXAgfHwgIXBhcmVudEdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xyXG5cdFx0fSBlbHNlIGlmIChwYXJlbnRHcm91cCA9PT0gcHJldmlvdXNHcm91cCkgeyAvL0lmIHRoZSBwYXJlbnQgZ3JvdXAgaXMgYWxyZWFkeSBhY3RpdmUgPT4gc2Nyb2xsIHRvIHRoZSBjaGlsZCBzZWN0aW9uIVxyXG5cdFx0XHQvL1Njcm9sbCBhZnRlciAxIHNlY29uZCB0byBoYXZlIGJldHRlciBwZXJmb3JtYW5jZSAoYWZ0ZXIgc3R1ZmZzIGhhZCBiZWVuIHJlbmRlcmVkKS5cclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblx0XHRcdFx0VHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XHJcblx0XHRcdH0sIDgwMCk7XHJcblx0XHR9IGVsc2UgeyAvL0ZpbmFsbHksIGxvYWQgdGhlIHBhZ2UgPT4gc2V0IHBhZ2UncyBjaGlsZHJlbiBjb250ZW50IVxyXG5cdFx0XHRsZXQgbG9hZGVkQ291bnQgPSAwOyAkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW107XHJcblx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vUmVzZXQgdGhlIHNjcm9sbCBpZiBsb2FkaW5nIGZyb20gdGhlIGJlZ2lubmluZyFcclxuXHRcdFx0cGFyZW50R3JvdXAuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50c1tpbmRleF0gPSB7fTtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHsgcGFyYW1zOiB7IGRvbWFpbiwgYWxpYXM6IGNoaWxkLmFsaWFzIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdGxldCBjaGlsZFJlc3VsdCA9IGRhdGEucmVzdWx0c1swXTtcclxuXHRcdFx0XHRcdGlmIChjaGlsZFJlc3VsdCAmJiBjaGlsZFJlc3VsdC5QYWdlKSB7XHJcblx0XHRcdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0gY2hpbGRSZXN1bHQuUGFnZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KS5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHRcdGxvYWRlZENvdW50Kys7XHJcblxyXG5cdFx0XHRcdFx0aWYgKGxvYWRlZENvdW50ID49IHBhcmVudEdyb3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHQvL1Njcm9sbCBhZnRlciAxIHNlY29uZCAoYWZ0ZXIgYWxsIGNvbnRlbnQgYXJlIHJlYWR5IGZyb20gc2VydmVyISlcclxuXHRcdFx0XHRcdFx0Ly8gdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXHJcblx0XHRcdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUFsaWFzfWApLm9mZnNldCgpLnRvcCAtIDUwO1xyXG5cdFx0XHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG5cdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZpbmRQYXJlbnRHcm91cCAoYWxpYXMsIGxpbmtzKSB7XHJcblx0XHRmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdGlmIChsaW5rLmFsaWFzICYmIGxpbmsuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gbGluaztcclxuXHJcblx0XHRcdGlmIChsaW5rLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGluay5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzICYmIGNoaWxkLmFsaWFzID09IGFsaWFzKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsaW5rO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCddO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcclxuXHRcdHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG5cdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5za2lwSW50cm8oKSwgMCk7XHJcblx0fVxyXG5cclxuXHRza2lwSW50cm8gKCkge1xyXG5cdFx0dGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdob21lJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZml4QW5hbHl0aWNNaXNzaW5nIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gXCIuL3JvdXRlckNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge3BhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7bmV3c0NvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbmV3c0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcclxuXHJcbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcclxuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnQvZm9vdGVyXCI7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudC9zaWRlYmFyXCI7XHJcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XHJcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9jb21wb25lbnQvcG9wdXBcIjtcclxuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnQvc2xpZGVyXCI7XHJcbmltcG9ydCBuZXdzQXJlYSBmcm9tIFwiLi9jb21wb25lbnQvbmV3c0FyZWFcIjtcclxuaW1wb3J0IG1ldGFTZXJ2aWNlIGZyb20gXCIuL21ldGFTZXJ2aWNlXCI7XHJcbmltcG9ydCByZWdpc3RlckZpbHRlciBmcm9tIFwiLi91dGlscy9maWx0ZXJcIjtcclxuXHJcbmdsb2JhbC5maXhBbmFseXRpY01pc3NpbmcgPSBmaXhBbmFseXRpY01pc3Npbmc7XHJcbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnbmdQcm9ncmVzcycsICduZ1RvdWNoJywgJ25nUGFyYWxsYXgnLCAnYW5ndWxhci1zcGlua2l0J10pXHJcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXHJcblx0LmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBsaWNhdGlvbkNvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkNvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3BhZ2VDdHJsJywgcGFnZUNvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ25ld3NDdHJsJywgbmV3c0NvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxyXG5cdC5zZXJ2aWNlKCdtZXRhU2VydmljZScsIG1ldGFTZXJ2aWNlKVxyXG5cdC5kaXJlY3RpdmUoJ3BvcHVwJywgcG9wdXApXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcclxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0Rm9vdGVyJywgZm9vdGVyKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2xpZGVyJywgc2xpZGVyKVxyXG5cdC5kaXJlY3RpdmUoJ25ld3NBcmVhJywgbmV3c0FyZWEpXHJcblx0LmRpcmVjdGl2ZSgnc3Vic2NyaXB0aW9uRm9ybScsIHN1YnNjcmlwdGlvbkZvcm0pXHJcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XHJcblxyXG5yZWdpc3RlckZpbHRlcihBcHApO1xyXG5cclxuQXBwLnJ1bigoKSA9PiB7XHJcblx0RmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KTtcclxufSk7XHJcblxyXG5BcHAuZmlsdGVyKCd1bnNhZmUnLCBbXHJcblx0JyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0cmV0dXJuICRzY2UudHJ1c3RBc0h0bWwodmFsKTtcclxuXHRcdH07XHJcblx0fVxyXG5dKTtcclxuXHJcbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImltcG9ydCB7IGxhbmd1YWdlcywgbG9jYWxpemF0aW9uIH0gZnJvbSAnLi91dGlscy9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCAkdGltZW91dCkge1xyXG5cdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKGNvbmZpZ1Jlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0JHJvb3RTY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlID0gbGFuZ3VhZ2VzWzBdO1xyXG5cclxuXHRcdCRyb290U2NvcGUubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uWyRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UubGFuZ107XHJcblx0XHQkcm9vdFNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uWyRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UubGFuZ107XHJcblx0XHRcdGNvbnNvbGUubG9nKCRyb290U2NvcGUubG9jYWxpemF0aW9uKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkaHR0cC5nZXQoJy9jb25maWdzJykuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHRkYXRhLmRvbWFpbiA9IGRhdGEuZG9tYWluIHx8IGxvY2F0aW9uLmhvc3Q7XHJcblx0XHRcdGxldCBjb25maWdzID0gZGF0YSwgeyBhcGlIb3N0LCBkb21haW4gfSA9IGNvbmZpZ3M7XHJcblx0XHRcdC8vT3ZlcnJpZGUgdHJhbnNsYXRpb24gKGlmIHBvc3NpYmxlKS4uXHJcblx0XHRcdGxhbmd1YWdlcy5mb3JFYWNoKCh7bGFuZ30pID0+IHtcclxuXHRcdFx0XHRpZiAoY29uZmlncy50cmFuc2xhdGlvbltsYW5nXSkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ10pKSB7XHJcblx0XHRcdFx0XHRcdGxvY2FsaXphdGlvbltsYW5nXVtrZXldID0gY29uZmlncy50cmFuc2xhdGlvbltsYW5nXVtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRuZXcgUHJvbWlzZSgobmF2aWdhdGlvblJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tZW51L2dldC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdFx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5saW5rcyA9IGRhdGEucmVzdWx0czsgdGhpcy5jb25maWdzID0gY29uZmlncztcclxuXHRcdFx0XHRcdG5hdmlnYXRpb25SZXNvbHZlKHRoaXMubGlua3MpO1xyXG5cdFx0XHRcdFx0Y29uZmlnUmVzb2x2ZSh0aGlzLmNvbmZpZ3MpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5saW5rcyk7XHJcblx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnbWV0YVNlcnZpY2VSZWFkeScpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sMCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1dOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XHJcblxyXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJyxcclxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG5cdFx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdFx0LnN0YXRlKCdzcGxhc2gnLCBzcGxhc2hSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnbmV3cycsIG5ld3NSb3V0ZSk7XHJcblxyXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xyXG5cclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucHV0ID0ge307XHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucGF0Y2ggPSB7fTtcclxuXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuXHR9XHJcbl07XHJcblxyXG52YXIgc3BsYXNoUm91dGUgPSB7XHJcblx0dXJsOiAnL3NwbGFzaCcsXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBzcGxhc2gnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBtYWluUm91dGUgPSB7XHJcblx0dXJsOiAnLycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGhvbWUnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwgYXMgbWFpbkN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIHBhZ2VSb3V0ZSA9IHtcclxuXHR1cmw6ICcvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL3BhZ2UuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdwYWdlQ3RybCBhcyBwYWdlQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgbmV3c1JvdXRlID0ge1xyXG5cdHVybDogJy90aW4tdHVjLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QG5ld3MnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9uZXdzLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnbmV3c0N0cmwgYXMgbmV3c0N0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG1vZHVsZUluc3RhbmNlKSB7XHJcblx0bW9kdWxlSW5zdGFuY2VcclxuXHRcdC5maWx0ZXIoJ25pY2VEYXRlJywgbmljZURhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmljZURhdGUgKCkge1xyXG5cdHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0ID0gJ0RELU1NLVlZWVknKSB7XHJcblx0XHRyZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xyXG5cdH07XHJcbn0iLCJleHBvcnQgY29uc3QgYXBpSG9zdCA9ICdodHRwOi8vMTI4LjE5OS4yMjcuMTMyJzsvLydyaXZlcmNpdHk5OS52bic7Ly9odHRwOi8vMTAzLjU2LjE1Ny42Ni9yZWFsZXN0YXRlJztcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnLCAndXNlck5vdGUnXTtcclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlcyA9IFtcclxuXHR7bGFuZzogXCJ2aWV0bmFtZXNlXCIsIGlkOiAxLCBkaXNwbGF5OiBcIlRp4bq/bmcgVmnhu4d0XCJ9LFxyXG5cdC8vIHtsYW5nOiBcImVuZ2xpc2hcIiwgaWQ6IDIsIGRpc3BsYXk6IFwiRW5nbGlzaFwifVxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCBsb2NhbGl6YXRpb24gPSB7XHJcblx0dmlldG5hbWVzZToge1xyXG5cdFx0cmVnaXN0ZXI6IFwixJDEgk5HIEvDnVwiLFxyXG5cdFx0bmV3czogXCJUSU4gVOG7qENcIixcclxuXHRcdHJlZ2lzdGVyVGl0bGVIZWFkOiBgPHNwYW4+R+G7jWkgPC9zcGFuPmAsXHJcblx0XHRyZWdpc3RlclRpdGxlVGFpbDogYCBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj4gaG/hurdjIGfhu61pIHRow7RuZyB0aW4gxJHhu4Mgbmjhuq1uPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XHJcblx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+YCxcclxuXHRcdGZ1bGxOYW1lUGxhY2Vob2xkZXI6IFwiSOG7jSB2w6AgdMOqbipcIixcclxuXHRcdHBob25lUGxhY2Vob2xkZXI6IFwixJBp4buHbiB0aG/huqFpKlwiLFxyXG5cdFx0ZW1haWxQbGFjZWhvbGRlcjogXCJFbWFpbCAoa2jDtG5nIGLhuq90IGJ14buZYylcIixcclxuXHRcdG5vdGVQbGFjZWhvbGRlcjogXCJHaGkgY2jDulwiLFxyXG5cdFx0c2VuZDogXCJH4butaVwiLFxyXG5cdFx0ZGVzaWduZWRCeTogXCJUaGnhur90IGvhu4MgYuG7n2lcIixcclxuXHRcdGRlc2lnbkNvbXBhbnk6IGA8YSBocmVmPVwiaHR0cDovL3R3aW4udm5cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyRUIzRDM7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VFdJTiBTb2Z0d2FyZSBTb2x1dGlvbnM8L2E+YFxyXG5cdH0sXHJcblx0ZW5nbGlzaDoge1xyXG5cdFx0cmVnaXN0ZXI6IFwiU1VCU0NSSUJFXCIsXHJcblx0XHRuZXdzOiBcIk5FV1NcIixcclxuXHRcdHJlZ2lzdGVyVGl0bGVIZWFkOiBgPHNwYW4+Q2FsbCA8L3NwYW4+YCxcclxuXHRcdHJlZ2lzdGVyVGl0bGVUYWlsOiBgIFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdDxzcGFuPiBvciBzdWJzY3JpYmUgdG8gcmVjZWl2ZSA8L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPlFVT1RBVElPTjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+ZnJvbTwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+SU5WRVNUT1I8L3NwYW4+YCxcclxuXHRcdGZ1bGxOYW1lUGxhY2Vob2xkZXI6IFwiRnVsbCBuYW1lKlwiLFxyXG5cdFx0cGhvbmVQbGFjZWhvbGRlcjogXCJQaG9uZSpcIixcclxuXHRcdGVtYWlsUGxhY2Vob2xkZXI6IFwiRW1haWwgKG9wdGlvbmFsKVwiLFxyXG5cdFx0bm90ZVBsYWNlaG9sZGVyOiBcIk5vdGUuLlwiLFxyXG5cdFx0c2VuZDogXCJTZW5kXCIsXHJcblx0XHRkZXNpZ25lZEJ5OiBcIkRlc2lnbmVkIGJ5XCIsXHJcblx0XHRkZXNpZ25Db21wYW55OiBgPGEgaHJlZj1cImh0dHA6Ly90d2luLnZuXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMkVCM0QzO1wiIHRhcmdldD1cIl9ibGFua1wiPlRXSU4gU29mdHdhcmUgU29sdXRpb25zPC9hPmBcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4QW5hbHl0aWNNaXNzaW5nICgpIHtcclxuXHRpZiAoIWdsb2JhbC5nYSkgZ2xvYmFsLmdhID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5mYnEpIGdsb2JhbC5mYnEgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmFudHNfdXNlckluZm9MaXN0ZW5lcikgZ2xvYmFsLmFudHNfdXNlckluZm9MaXN0ZW5lciA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuYW50c19hbmFseXRpYykgZ2xvYmFsLmFudHNfYW5hbHl0aWMgPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc291cmNlcywgcHJlZGljYXRlKSB7XHJcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XHJcblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByZWRpY2F0ZSkpIHtcclxuXHRcdHNlYXJjaEtleSA9IGtleTtcclxuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XHJcblx0fVxyXG5cclxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XHJcblx0XHRpZiAoaW5zdGFuY2Vbc2VhcmNoS2V5XSA9PT0gc2VhcmNoVmFsdWUpIHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50TWVudUJ5QWxpYXMgKGFsaWFzLCBsaW5rcykge1xyXG5cdGZvciAobGV0IGdyb3VwIG9mIGxpbmtzKSB7XHJcblx0XHRpZiAoZ3JvdXAuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gZ3JvdXA7XHJcblx0XHRpZiAoZ3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgZ3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRpZiAoY2hpbGQuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gZ3JvdXA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsVmFsaWQgKGVtYWlsKSB7XHJcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIHByZWxvYWRSZXNvbHZlcyA9IHtcclxuXHRhcHBDb25maWc6IGZ1bmN0aW9uKGNvbmZpZ1NlcnZpY2UsIGNhbGN1bGF0b3JTZXJ2aWNlKSB7XHJcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlclVVSUQgKGxlbmd0aCkge1xyXG5cdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0cmVzdWx0ICs9IFswLDEsMiwzLDQsNSw2LDcsOCw5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJhbmdlICh2YWx1ZSwgbWluLCBtYXgpIHtcclxuXHRpZiAobWluICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA8PSBtaW4pIHJldHVybiBtaW47XHJcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGZvbnQpIHtcclxuXHR2YXIgZiA9IGZvbnQgfHwgJzEycHggYXJpYWwnLFxyXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+JylcclxuXHRcdFx0LmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ2Zsb2F0JzogJ2xlZnQnLCAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJywgJ2ZvbnQnOiBmfSlcclxuXHRcdFx0LmFwcGVuZFRvKCQoJ2JvZHknKSksXHJcblx0XHR3ID0gby53aWR0aCgpO1xyXG5cclxuXHRvLnJlbW92ZSgpO1xyXG5cclxuXHRyZXR1cm4gdztcclxufTtcclxuXHJcbmdsb2JhbC51dWlkID0gZ2VuZXJhdGVOdW1iZXJVVUlEOyJdfQ==
