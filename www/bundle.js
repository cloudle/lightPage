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
		template: '<div id="footer" class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="copyright">\n\t\t\t\t<div class="light-row">\n\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t<div class="language-choice" ng-repeat="language in $root.languages" \n\t\t\t\t\t\t\t\t ng-class="{active: languageActive(language)}" \n\t\t\t\t\t\t\t\t ng-click="$root.changeLanguage(language)"\n\t\t\t\t\t\t\t\t ng-bind="language.display"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!--<div class="column">-->\n\t\t\t\t\t\t<!--<span ng-bind="$root.localization.designedBy"></span>-->\n\t\t\t\t\t\t<!--<a ng-bind-html="$root.localization.designCompany | unsafe"></a>\t-->\n\t\t\t\t\t<!--</div>-->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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
		template: '<form ng-class="wrapperClass" ng-submit="submit($event)">\n\t\t\t<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>\n\t\t\t<div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>\n\t\t\t\t<a style="text-decoration: none" href="tel:{{configs.translation.hotline}}" class="ultra strong" ng-bind="configs.translation.hotline"></a>\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>\n\t\t\t</div>\n\t\t\t\n\t\t\t<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>\n\n\t\t\t<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>\n\t\t\t\n\t\t\t<div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>\n\t\t\t</div>\n\t\t</form>',
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
		//console.log("production mode:", production);

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

		var data = {
			email: _this['userEmail'],
			phone: _this['userPhone'],
			name: _this['userName'],
			address: '',
			action: 'text - explain',
			description: _this['userNote'],
			your_key1: '',
			your_key2: ''
		};
		//sent form Tracking note
		if (production && metaService.configs.iframeCodeNew) try {
			new UActL({}).syncWithParams(data);
		} catch (error) {
			console.log(error);
		};

		//Fire Ants trackingGoal hook!
		if (production) {
			/* Ants Insight Goal Tracking */
			adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId, 1, 'event');

			var userInfo = {

				name: _this['userName'],

				phone: _this['userPhone'],

				email: _this['userEmail'],

				description: _this['userNote'] // Ghi chú

			};
			adx_analytic.trackingEvent('tup', userInfo, true);
			if (metaService.configs.googleConversionId) {

				/* Google Adword tracking event conversion */
				goog_report_conversion();
				ga('send', {
					hitType: 'event',
					eventCategory: 'Goal Complete',
					eventAction: 'register'
				});
			}
		}

		//Send form information to Ants!

		//	ants_userInfoListener(formData, false, true);
		else {}
			//console.log(ants_userInfoListener)


			//Facebook tracking Lead/CompleteRegistration event
		if (production) fbq('track', 'Lead');
		if (production) fbq('track', 'CompleteRegistration');

		//Tracking Google Analytic goal!

		if (production && metaService.configs.antsConversionId) {
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
					//console.log('email...', data);
				});
			});
		} else {
			_this.subscriptionSuccessHandler(); //Auto success on test environment!
		}
	};

	global.get_info = function (_userInfo) {
		$scope.$apply(function () {
			// user info get here
			//console.log("ant's get_info function:", _userInfo);

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

	this.marqueSentence = metaService.configs.marquee;
	//Tracking code..
	ga('send', 'pageview');
	fbq('track', "PageView");

	this.loadData = function (reloaded) {
		$rootScope.activeGroup = metaService.links[0];$window.scrollTo(0, 0);

		$http.get(apiHost + '/page/get/json', {
			params: { domain: domain, alias: "trang-chu" }
		}).success(function (data) {
			!reloaded && fbq('track', 'ViewContent');
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
		_this.loadData(true);
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

		this.threeSitesOn = '';
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
		if (pageAlias == 'tien-do' || pageAlias == 'uu-dai' || pageAlias == 'thanh-toan') {
			this.threeSitesOn = 'run';
		} else {
			this.threeSitesOn = 'stop';
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
			//console.log($rootScope.localization);
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
					//console.log(this.links);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcZm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXG5hdmlnYXRpb24uanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbkxpbmsuanMiLCJhcHBcXGNvbXBvbmVudFxcbmV3c0FyZWEuanMiLCJhcHBcXGNvbXBvbmVudFxccG9wdXAuanMiLCJhcHBcXGNvbXBvbmVudFxcc2lkZWJhci5qcyIsImFwcFxcY29tcG9uZW50XFxhcHBcXGNvbXBvbmVudFxcc2xpZGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXHN1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHBcXGNvbnRyb2xsZXJcXGFwcFxcY29udHJvbGxlclxcYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxtYWluQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxcbmV3c0NvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhZ2VDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWUsQ0FBQyxZQUFELEVBQWUsT0FBZixFQUF3QixVQUFVLFVBQVYsRUFBc0IsS0FBdEIsRUFBNkI7O0FBR25FLFFBQU87QUFDTixZQUFVLEdBREo7QUFFTixXQUFTLElBRkg7QUFHTixTQUFPLEVBQUUsU0FBUyxHQUFYLEVBSEQ7QUFJTixrNUJBSk07QUEyQk4sUUFBTSxjQUFVLEtBQVYsRUFBaUIsT0FBakIsRUFBMEIsS0FBMUIsRUFBaUM7QUFDdEMs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LEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQzNDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLFFBQU8sS0FBUDtBQUNBOztBQUVELE9BQU8sU0FBUCxDQUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtBQUFBLEtBQ0MsSUFBSSxFQUFFLFVBQVUsSUFBVixHQUFpQixRQUFuQixFQUNGLEdBREUsQ0FDRSxFQUFDLFlBQVksVUFBYixFQUF5QixTQUFTLE1BQWxDLEVBQTBDLGVBQWUsUUFBekQsRUFBbUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtBQUFBLEtBSUMsSUFBSSxFQUFFLEtBQUYsRUFKTDs7QUFNQSxHQUFFLE1BQUY7O0FBRUEsUUFBTyxDQUFQO0FBQ0EsQ0FWRDs7QUFZQSxPQUFPLElBQVAsR0FBYyxrQkFBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcclxuXHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGNvbHVtbnM6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3M9XCJmb290ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1yb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxhbmd1YWdlLWNob2ljZVwiIG5nLXJlcGVhdD1cImxhbmd1YWdlIGluICRyb290Lmxhbmd1YWdlc1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWNsYXNzPVwie2FjdGl2ZTogbGFuZ3VhZ2VBY3RpdmUobGFuZ3VhZ2UpfVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWNsaWNrPVwiJHJvb3QuY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1iaW5kPVwibGFuZ3VhZ2UuZGlzcGxheVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiY29sdW1uXCI+LS0+XHJcblx0XHRcdFx0XHRcdDwhLS08c3BhbiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLmRlc2lnbmVkQnlcIj48L3NwYW4+LS0+XHJcblx0XHRcdFx0XHRcdDwhLS08YSBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24uZGVzaWduQ29tcGFueSB8IHVuc2FmZVwiPjwvYT5cdC0tPlxyXG5cdFx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLmxhbmd1YWdlQWN0aXZlID0gKGluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlLmlkID09ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQ7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7XHJcblx0XHRcdHJlYWR5OiAnPScsXHJcblx0XHRcdGJ1cmdlckFjdGl2ZTogJz0nXHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS1hY3RpdmF0b3IgaWNvbi1uYXZpZ2F0aW9uLW1lbnVcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyXCI+PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxyXG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiAnJ30pXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxyXG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51IHN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJjaGlsZC5uYW1lXCIgbmctcmVwZWF0PVwiY2hpbGQgaW4gaXRlbS5jaGlsZHJlblwiXHJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGNoaWxkLmFsaWFzfSlcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgdWktc3JlZj1cIm5ld3NcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRzY29wZS5saW5rcyA9IG1ldGFTZXJ2aWNlLmxpbmtzO1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS50b2dnbGVCdXJnZXIoKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLm5ld3NBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ25ld3MnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRpbnN0YW5jZTogJz0nXHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXHJcblx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGxpbmsuYWxpYXN9KVwiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcclxuXHJcblx0XHRcdGlmIChzY29wZS5pbnN0YW5jZS5jaGlsZHJlbiAmJiBzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA+IHNjb3BlLm1heFdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdHNjb3BlLm1heFdpZHRoID0gY3VycmVudFdpZHRoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY29wZS5saW5rQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHJvb3RTY29wZS5hY3RpdmVHcm91cCAmJiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwLmlkID09PSBpbnN0YW5jZS5pZDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYW52YXMgdG9wLXNlcGFyYXRlZCBuZXdzLWFyZWFcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1oZWFkaW5nIHNlY3Rpb25cIj48c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtcm93IHF1YXRyb1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbiBsaWdodC1jb2x1bW4gY2xpY2stYWJsZVwiIG5nLXJlcGVhdD1cIm5ld3NJdGVtIGluIG5ld3NcIiB1aS1zcmVmPVwibmV3cyh7YWxpYXM6IG5ld3NJdGVtLlBvc3QuYWxpYXN9KVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIiBuZy1iaW5kPVwibmV3c0l0ZW0uUG9zdC50aXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbWFnZSBpbWFnZS1ob3Zlci1lZmZlY3Qtem9vbS0xMjBcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LmRlc2NyaXB0aW9uXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XHJcblx0XHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImNvbnN0IGluaXRpYWxUb3BPZmZzZXQgPSAxMjE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIG5nLXN0eWxlPVwie3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCcrdG9wUG9zaXRpb24rJ3B4KSd9XCI+XHJcblx0XHRcdDxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+XHJcblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic21hbGwtYmFubmVyXCI+PC9kaXY+LS0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlYmFyLW5ld3NcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZXdzLXN1bW1hcnlcIiBuZy1yZXBlYXQ9XCJuZXdzSXRlbSBpbiBuZXdzXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiBuZXdzSXRlbS5Qb3N0LmFsaWFzfSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aHVtYi1pbWFnZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK25ld3NJdGVtLlBvc3QuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3NJdGVtLlBvc3QudGl0bGVcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHR2YXIgc2lkZWJhckhlaWdodCwgZm9vdGVySGVpZ2h0OyBzY29wZS50b3BQb3NpdGlvbiA9IDA7XHJcblxyXG5cdFx0XHQvL1NhZmVseSBjYWxjdWxhdGUgZWxlbWVudCdzIHNpemUgYWZ0ZXIgc3R1ZmYgaGF2ZSBiZWVuIHJlbmRlcmVkIVxyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2NvcGUubmV3cyA9ICRyb290U2NvcGUubmV3cztcclxuXHRcdFx0XHRzaWRlYmFySGVpZ2h0ID0gZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdGZvb3RlckhlaWdodCA9IGFuZ3VsYXIuZWxlbWVudCgnI2Zvb3RlcicpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdH0sIDUwMCk7XHJcblxyXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2Nyb2xsQ2hhbmdlJywgKGV2ZW50LCBzY3JvbGxQb3NpdGlvbikgPT4ge1xyXG5cdFx0XHRcdC8vIHNjb3BlLm5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XHJcblxyXG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgZG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSwgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpLFxyXG5cdFx0XHRcdFx0XHRvZmZzZXQgPSBlbGVtZW50Lm9mZnNldCgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzY3JvbGxQb3NpdGlvbi5zY3JvbGxpbmdEb3duKSB7XHJcblx0XHRcdFx0XHRcdGxldCBzY3JvbGxEb3duVG91Y2hCb3R0b20gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBvZmZzZXQudG9wICsgc2lkZWJhckhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEb3duT3ZlckZvb3RlciA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IGRvY3VtZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHNjcm9sbERvd25Ub3VjaEJvdHRvbSAmJiAhc2Nyb2xsRG93bk92ZXJGb290ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCAtIHNpZGViYXJIZWlnaHQgLSBpbml0aWFsVG9wT2Zmc2V0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uLnRvcCA8IG9mZnNldC50b3AgLSBpbml0aWFsVG9wT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGludGVydmFsLCAkdGltZW91dCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScsIG1hcnF1ZTogJz0nIH0sXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGlnaHQtc2xpZGVyIHt7d3JhcHBlckNsYXNzfX1cIlxyXG5cdFx0XHRuZy1zd2lwZS1sZWZ0PVwic3dpcGVMZWZ0KCRldmVudClcIiBuZy1zd2lwZS1yaWdodD1cInN3aXBlUmlnaHQoJGV2ZW50KVwiPlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1hcnF1ZWVcIj5cclxuXHRcdFx0XHJcblx0XHRcdFx0PG1hcnF1ZWUgY2xhc3M9XCJtYXJxdWVlLXNsaWRlclwiIG5nLWlmPVwibWFycXVlXCIgZGlyZWN0aW9uPVwibGVmdFwiIHNjcm9sbGFtb3VudD1cIjEwXCIgb25tb3VzZW91dD1cInRoaXMuc3RhcnQoKVwiIG9ubW91c2VvdmVyPVwidGhpcy5zdG9wKClcIiA+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmZmZmY7XCI+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXJxdWUuaW1nfX1cIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBib3JkZXI9XCIwXCIgYWx0PVwiUGhvdG9idWNrZXRcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gbmctYmluZD1cIm1hcnF1ZS5ldGV4dDBcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmY5MGQ7XCIgbmctYmluZD1cIm1hcnF1ZS5ldGV4dDFcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmZmZmY7XCIgbmctYmluZD1cIm1hcnF1ZS5ldGV4dDJcIj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICNmZmY5MGQ7XCIgbmctYmluZD1cIm1hcnF1ZS5ldGV4dDNcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwie3ttYXJxdWUuaW1nfX1cIiB3aWR0aD1cIjMwXCIgaGVpZ2h0PVwiMzBcIiBib3JkZXI9XCIwXCIgYWx0PVwiUGhvdG9idWNrZXRcIj5cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHQ8L21hcnF1ZWU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBpZD1cImN1cnJlbnRTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtbmF2aWdhdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1uZXh0XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLWJhY2tcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWl0ZW1cIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uaXNBY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiIG5nLWNsaWNrPVwibmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdGxldCAkYWN0aXZlU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNjdXJyZW50U2xpZGUnKSwgJHByZXZpb3VzU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNwcmV2aW91c1NsaWRlJyksXHJcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XHJcblxyXG5cdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cclxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpdGVtcycsICgpID0+IHtcclxuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcclxuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5wcmV2aW91c1NsaWRlKSBzY29wZS5wcmV2aW91c1NsaWRlLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4ICE9IHVuZGVmaW5lZCA/IG5leHRJbmRleCA6IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcclxuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPCAwKSB7XHJcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IHNjb3BlLml0ZW1zLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzY29wZS5hY3RpdmVJbmRleCA+PSBzY29wZS5pdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVTbGlkZSkgc2NvcGUuYWN0aXZlU2xpZGUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXHJcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xyXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJGFjdGl2ZVNsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICctMTAwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30pO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcclxuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXNldCBpbnRlcnZhbDtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XHJcblx0XHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uYXZpZ2F0ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZSAhPSBzY29wZS5hY3RpdmVTbGlkZSkge1xyXG5cdFx0XHRcdFx0bmV4dFNsaWRlKHNjb3BlLml0ZW1zLmluZGV4T2YoaW5zdGFuY2UpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5zd2lwZUxlZnQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4ICsgMSk7XHJcblx0XHRcdHNjb3BlLnN3aXBlUmlnaHQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4IC0gMSk7XHJcblxyXG5cdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyB3cmFwcGVyQ2xhc3M6ICdAJywgc3VibWl0VGV4dDogJ0AnIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwid3JhcHBlckNsYXNzXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNsb3NlLWNvbW1hbmQgaWNvbi1uYXZpZ2F0aW9uLWNsb3NlXCIgbmctY2xpY2s9XCJhcHBDdHJsLmNsb3NlUmVnaXN0ZXJGb3JtKClcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZUhlYWQgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PGEgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IG5vbmVcIiBocmVmPVwidGVsOnt7Y29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lfX1cIiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L2E+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVUYWlsIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZnVsbE5hbWVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOYW1lXCIvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ucGhvbmVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJQaG9uZVwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZW1haWxQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJFbWFpbFwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLm5vdGVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOb3RlXCI+PC90ZXh0YXJlYT5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICRyb290LmxvY2FsaXphdGlvbi5zZW5kXCI+PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9mb3JtPmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG5cclxuXHRcdFx0c2NvcGUuc3VibWl0ID0gJHJvb3RTY29wZS5zdWJtaXRSZWdpc3RlcjtcclxuXHJcblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFudHNfZ29vZ2xlQXV0aENsaWNrKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdGFudHNfZmJBdXRoQ2xpY2soJ2xvZ2luJyk7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XVxyXG5cclxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJ107IiwiaW1wb3J0IHtcclxuXHRnZW5lcmF0ZU51bWJlclVVSUQsXHJcblx0cmVnaXN0ZXJGaWVsZHMsXHJcblx0ZmluZFBhcmVudE1lbnVCeUFsaWFzXHJcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJHRpbWVvdXQnLCAnJGludGVydmFsJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbmdQcm9ncmVzc0ZhY3RvcnknLCAnbWV0YVNlcnZpY2UnXTtcclxuXHRkZXZlbG9wbWVudE1vZGUgPSBmYWxzZTtcclxuXHRyZWFkeSA9IHRydWU7XHJcblx0YWN0aXZlUGFnZSA9ICdzcGxhc2gnO1xyXG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0c3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaW50ZXJ2YWwsICR3aW5kb3csICRodHRwLCAgbmdQcm9ncmVzc0ZhY3RvcnksIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHQkcm9vdFNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzOyAvL1dpbGwgYmUgdW5kZWZpbmVkIGF0IGZpcnN0ID0+IG5vdCBzYWZlIGZvciBub3JtYWwgdXNhZ2UsIGp1c3QgZm9yIHRyYW5zbGF0aW9uIVxyXG5cdFx0JHJvb3RTY29wZS5hcHBDdHJsID0gdGhpcztcclxuXHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW107XHJcblx0XHR0aGlzLnByb2dyZXNzID0gbmdQcm9ncmVzc0ZhY3RvcnkuY3JlYXRlSW5zdGFuY2UoKTtcclxuXHRcdHRoaXMucHJvZ3Jlc3Muc2V0Q29sb3IoJyNGQTgzMjInKTtcclxuXHRcdGdsb2JhbC4kaHR0cCA9ICRodHRwO1xyXG5cclxuXHRcdGdsb2JhbC50b2dnbGVQb3B1cCA9IChuZXdWYWwpID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IG5ld1ZhbCA/IG5ld1ZhbCA6ICF0aGlzLnN1YnNjcmlwdGlvblBvcHVwO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy50b2dnbGVTdWNjZXNzID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZSwgMzAwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpID0+IHtcclxuXHRcdFx0dGhpcy5hY3RpdmVQYWdlID0gdG9TdGF0ZS5uYW1lO1x0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XHJcblxyXG5cdFx0XHQvL1NldCBtZXRhJ3MgY29udGVudCBmb3IgQVVESUVOQ0UgU0VHTUVOVCFcclxuXHRcdFx0bGV0IGN1cnJlbnRTZWdtZW50ID0gJ2hvbWUnO1xyXG5cdFx0XHRpZiAoJHN0YXRlLmlzKCdwYWdlJykpIHtcclxuXHRcdFx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50TWVudSA9IGZpbmRQYXJlbnRNZW51QnlBbGlhcyhwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKTtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9IHBhcmVudE1lbnUubmFtZTtcclxuXHRcdFx0fSBlbHNlIGlmICgkc3RhdGUuaXMoJ25ld3MnKSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTZWdtZW50ID0gJ25ld3MnXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCQoJChcIm1ldGFbbmFtZT0nYWR4OnNlY3Rpb25zJ11cIilbMF0pLmF0dHIoJ2NvbnRlbnQnLCBjdXJyZW50U2VnbWVudCk7XHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKCdyZWFkeScpOyAvL01hbnVhbGx5IHRyaWdnZXIgcmVhZHkgZXZlbnQsIHdoaWNoIGhvcGUgYWxzbyB0cmlnZ2VyIEFudHMnIHNjcmlwdCFcclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBmZXRjaEVzc2VudGlhbERhdGEgPSAoc291cmNlKSA9PiB7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnZm9vdGVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5mb290ZXJzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkLCBsaW1pdDogNCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0JHJvb3RTY29wZS5uZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG1ldGFTZXJ2aWNlLnJlYWR5KSBmZXRjaEVzc2VudGlhbERhdGEoKTtcclxuXHRcdCRyb290U2NvcGUuJG9uKCdtZXRhU2VydmljZVJlYWR5JywgZmV0Y2hFc3NlbnRpYWxEYXRhKTtcclxuXHJcblx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IDA7XHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgdG9wU2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3Njcm9sbENoYW5nZScsIHt0b3A6IHRvcFNjcm9sbCwgc2Nyb2xsaW5nRG93bjogdG9wU2Nyb2xsID4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb259KTtcclxuXHRcdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSB0b3BTY3JvbGw7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKHdpbmRvdykucmVzaXplKCgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzaXplQ2hhbmdlJywge1xyXG5cdFx0XHRcdGhlaWdodDogJCh3aW5kb3cpLmhlaWdodCgpLFxyXG5cdFx0XHRcdHdpZHRoOiAkKHdpbmRvdykud2lkdGgoKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vUmVnaXN0ZXIgZm9ybSFcclxuXHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG5cdFx0XHR0aGlzW2ZpZWxkXSA9ICcnOyB0aGlzW2ZpZWxkKydFcnJvciddID0gJyc7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmNsb3NlUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVzZXRSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblx0XHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4gdGhpc1tmaWVsZF0gPSAnJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVzZXRSZWdpc3RlckVycm9yID0gKCkgPT4ge1xyXG5cdFx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRoaXNbZmllbGQrJ0Vycm9yJ10gPSAnJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3VjY2Vzc0dpZkltYWdlID0gYHVybChpbWFnZXMvb25vZmZvbmNlLmdpZj8ke2dlbmVyYXRlTnVtYmVyVVVJRCgxMCl9KWA7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSwgMzAwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3VibWl0UmVnaXN0ZXIgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiwgcHJvZHVjdGlvbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcInByb2R1Y3Rpb24gbW9kZTpcIiwgcHJvZHVjdGlvbik7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMucmVzZXRSZWdpc3RlckVycm9yKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpc1sndXNlck5hbWUnXS5sZW5ndGggPCAxKSB0aGlzWyd1c2VyTmFtZUVycm9yJ10gPSAnTmjhuq1wIHTDqm4nO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlclBob25lJ10ubGVuZ3RoIDwgOCkgdGhpc1sndXNlclBob25lRXJyb3InXSA9ICdT4buRIMSRaeG7h24gdGhv4bqhaSBjaMawYSDEkcO6bmcnO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlck5hbWVFcnJvciddIHx8IHRoaXNbJ3VzZXJQaG9uZUVycm9yJ10pIHJldHVybjtcclxuXHJcblx0XHRcdHZhciBsb2NhbFVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl91c2VySW5mb1wiKSksXHJcblx0XHRcdFx0Zm9ybURhdGEgPSB7XHJcblx0XHRcdFx0XHQuLi5sb2NhbFVzZXJJbmZvLFxyXG5cdFx0XHRcdFx0ZG9tYWluLFxyXG5cdFx0XHRcdFx0ZnVsbE5hbWU6IHRoaXNbJ3VzZXJOYW1lJ10sXHJcblx0XHRcdFx0XHRuYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdFx0cGhvbmU6IHRoaXNbJ3VzZXJQaG9uZSddLFxyXG5cdFx0XHRcdFx0ZW1haWw6IHRoaXNbJ3VzZXJFbWFpbCddLFxyXG5cdFx0XHRcdFx0bm90ZTogdGhpc1sndXNlck5vdGUnXVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZGF0YSA9IHtcclxuXHRcdFx0XHRlbWFpbCA6IHRoaXNbJ3VzZXJFbWFpbCddLFxyXG5cdFx0XHRcdHBob25lOiB0aGlzWyd1c2VyUGhvbmUnXSxcclxuXHRcdFx0XHRuYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdGFkZHJlc3M6ICcnLFxyXG5cdFx0XHRcdGFjdGlvbjogJ3RleHQgLSBleHBsYWluJyxcclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogdGhpc1sndXNlck5vdGUnXSxcclxuXHRcdFx0XHR5b3VyX2tleTE6ICcnLFxyXG5cdFx0XHRcdHlvdXJfa2V5MjogJydcclxuXHRcdFx0fVxyXG5cdFx0XHQvL3NlbnQgZm9ybSBUcmFja2luZyBub3RlXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uICYmIG1ldGFTZXJ2aWNlLmNvbmZpZ3MuaWZyYW1lQ29kZU5ldykgdHJ5IHsgbmV3IFVBY3RMKHt9KS5zeW5jV2l0aFBhcmFtcyhkYXRhKTsgfSBjYXRjaCAoZXJyb3IpIHtjb25zb2xlLmxvZyhlcnJvcil9O1xyXG5cclxuXHRcdFx0Ly9GaXJlIEFudHMgdHJhY2tpbmdHb2FsIGhvb2shXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKXtcclxuXHRcdFx0LyogQW50cyBJbnNpZ2h0IEdvYWwgVHJhY2tpbmcgKi9cclxuXHRcdFx0XHRhZHhfYW5hbHl0aWMudHJhY2tpbmdHb2FsKG1ldGFTZXJ2aWNlLmNvbmZpZ3MuYW50c1JlZ2lzdGVyR29hbElkLCAxLCAnZXZlbnQnKTtcclxuXHJcblx0XHRcdHZhciB1c2VySW5mbyA9IHtcclxuXHJcblx0XHRcdFx0bmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHJcblx0XHRcdFx0cGhvbmU6IHRoaXNbJ3VzZXJQaG9uZSddLFxyXG5cclxuXHRcdFx0XHRlbWFpbDogdGhpc1sndXNlckVtYWlsJ10sXHJcblxyXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzWyd1c2VyTm90ZSddIC8vIEdoaSBjaMO6XHJcblxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcdGFkeF9hbmFseXRpYy50cmFja2luZ0V2ZW50KCd0dXAnLCB1c2VySW5mbywgdHJ1ZSk7XHJcblx0XHRcdFx0aWYgKG1ldGFTZXJ2aWNlLmNvbmZpZ3MuZ29vZ2xlQ29udmVyc2lvbklkKXtcclxuXHJcblx0XHRcdC8qIEdvb2dsZSBBZHdvcmQgdHJhY2tpbmcgZXZlbnQgY29udmVyc2lvbiAqL1xyXG5cdFx0XHRnb29nX3JlcG9ydF9jb252ZXJzaW9uKCk7XHJcblx0XHRcdFx0Z2EoJ3NlbmQnLCB7XHJcblx0XHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxyXG5cdFx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogJ0dvYWwgQ29tcGxldGUnLFxyXG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdyZWdpc3RlcidcclxuXHRcdFx0XHR9KTt9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL1NlbmQgZm9ybSBpbmZvcm1hdGlvbiB0byBBbnRzIVxyXG5cclxuXHRcdFx0Ly9cdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKGFudHNfdXNlckluZm9MaXN0ZW5lcilcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly9GYWNlYm9vayB0cmFja2luZyBMZWFkL0NvbXBsZXRlUmVnaXN0cmF0aW9uIGV2ZW50XHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSBmYnEoJ3RyYWNrJywgJ0xlYWQnKTtcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnQ29tcGxldGVSZWdpc3RyYXRpb24nKTtcclxuXHJcblx0XHRcdC8vVHJhY2tpbmcgR29vZ2xlIEFuYWx5dGljIGdvYWwhXHJcblxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbiAmJiBtZXRhU2VydmljZS5jb25maWdzLmFudHNDb252ZXJzaW9uSWQpIHtcclxuXHRcdFx0XHRhbnRzX2FuYWx5dGljLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29udmVyc2lvbklkIDogbWV0YVNlcnZpY2UuY29uZmlncy5hbnRzQ29udmVyc2lvbklkLFxyXG5cdFx0XHRcdFx0Y3VzdG9tUGFyYW1zIDogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0J2lzX2Vjb21tJzogMCxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fcGFnZXR5cGUnOiAncHVyY2hhc2UnLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV9xdWFudGl0eSc6IDEsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3RvdGFsdmFsdWUnOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZXNldFJlZ2lzdGVyRm9ybSgpO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvL1NlbmQgZm9ybSB0byBUd2luJ3Mgc2VydmVyIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9jdXN0b21lci9pbnNlcnQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogZm9ybURhdGFcclxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlcigpO1xyXG5cdFx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21haWwvc2VudC9qc29uYCwge3BhcmFtczogZm9ybURhdGF9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCdlbWFpbC4uLicsIGRhdGEpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlcigpOyAvL0F1dG8gc3VjY2VzcyBvbiB0ZXN0IGVudmlyb25tZW50IVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGdsb2JhbC5nZXRfaW5mbyA9IChfdXNlckluZm8pID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImFudCdzIGdldF9pbmZvIGZ1bmN0aW9uOlwiLCBfdXNlckluZm8pO1xyXG5cclxuXHRcdFx0XHQvLyBmaWxsIHVzZXJJbmZvIHRvIEZPUk0gxJHEg25nIGvDvVxyXG5cdFx0XHRcdHRoaXMudXNlck5hbWUgPSBfdXNlckluZm8ubmFtZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJFbWFpbCA9IF91c2VySW5mby5lbWFpbCB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJOb3RlID0gX3VzZXJJbmZvLm5vdGUgfHwgJyc7XHJcblxyXG5cclxuXHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXHJcblx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIG1haW5Db250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGZlYXR1cmVzID0gW107XHJcblx0c2xpZGVycyA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwLCBtZXRhU2VydmljZSkge1xyXG5cdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0dGhpcy5tYXJxdWVTZW50ZW5jZSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3MubWFycXVlZTtcclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblxyXG5cdFx0dGhpcy5sb2FkRGF0YSA9IChyZWxvYWRlZCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbWV0YVNlcnZpY2UubGlua3NbMF07ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogXCJ0cmFuZy1jaHVcIiB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0IXJlbG9hZGVkICYmIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW2RhdGEucmVzdWx0c1swXS5QYWdlXTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICdiYW5uZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmZlYXR1cmVzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ0hvbWVTbGlkZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnNsaWRlcnMgPSBkYXRhLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGl0ZW0uUG9zdDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDcwO1xyXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2l6ZUNoYW5nZScsIChldmVudCwgc2l6ZSkgPT4ge1xyXG5cdFx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSBzaXplLmhlaWdodCA+IDU3MCA/IHNpemUuaGVpZ2h0IC0gNzAgOiA1MDA7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0JHNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZERhdGEodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgbmV3c0NvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAgJyRzdGF0ZScsICdtZXRhU2VydmljZSddO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHdpbmRvdywgJGh0dHAsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cclxuXHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhczsgJHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcclxuXHJcblx0XHRpZiAodGhpcy5zaW5nbGVNb2RlKSB7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wb3N0L2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIGFsaWFzOiB0aGlzLnBhZ2VBbGlhcyB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlTmV3cyA9IGRhdGEucmVzdWx0c1swXS5Qb3N0O1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnbmV3cycsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHR0aGlzLmFsbE5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCcsICdtZXRhU2VydmljZSddO1xyXG5cdHRocmVlU2l0ZXNPbiA9ICcnO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGVsZW1lbnQsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcblx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcclxuXHRcdFx0cHJldmlvdXNHcm91cCA9ICRyb290U2NvcGUuYWN0aXZlR3JvdXA7ICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBwYXJlbnRHcm91cDtcclxuXHJcblx0XHRpZihwYWdlQWxpYXMgPT0gJ3RyYW5nLWNodScpIHsgJHN0YXRlLmdvKCdob21lJyk7IHJldHVybjsgfVxyXG5cdFx0aWYocGFnZUFsaWFzID09ICd0aWVuLWRvJyB8fCBwYWdlQWxpYXMgPT0gJ3V1LWRhaScgfHwgcGFnZUFsaWFzID09ICd0aGFuaC10b2FuJyl7XHJcblx0XHRcdHRoaXMudGhyZWVTaXRlc09uID0gJ3J1bic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnRocmVlU2l0ZXNPbiA9ICdzdG9wJztcclxuXHRcdH1cclxuXHJcblx0XHQvL0tpY2sgYmFjayB0byB0aGUgSG9tZSBwYWdlIGlmIGl0J3Mgbm90IGEgbGluayBpbiBtZW51XHJcblx0XHRpZiAoIXBhcmVudEdyb3VwIHx8ICFwYXJlbnRHcm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcclxuXHRcdH0gZWxzZSBpZiAocGFyZW50R3JvdXAgPT09IHByZXZpb3VzR3JvdXApIHsgLy9JZiB0aGUgcGFyZW50IGdyb3VwIGlzIGFscmVhZHkgYWN0aXZlID0+IHNjcm9sbCB0byB0aGUgY2hpbGQgc2VjdGlvbiFcclxuXHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUFsaWFzfWApLm9mZnNldCgpLnRvcCAtIDUwO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG5cdFx0XHR9LCA4MDApO1xyXG5cdFx0fSBlbHNlIHsgLy9GaW5hbGx5LCBsb2FkIHRoZSBwYWdlID0+IHNldCBwYWdlJ3MgY2hpbGRyZW4gY29udGVudCFcclxuXHRcdFx0bGV0IGxvYWRlZENvdW50ID0gMDsgJHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL1Jlc2V0IHRoZSBzY3JvbGwgaWYgbG9hZGluZyBmcm9tIHRoZSBiZWdpbm5pbmchXHJcblx0XHRcdHBhcmVudEdyb3VwLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0ge307XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBjaGlsZC5hbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgY2hpbGRSZXN1bHQgPSBkYXRhLnJlc3VsdHNbMF07XHJcblx0XHRcdFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xyXG5cdFx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IGNoaWxkUmVzdWx0LlBhZ2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSkuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRsb2FkZWRDb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdGlmIChsb2FkZWRDb3VudCA+PSBwYXJlbnRHcm91cC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgKGFmdGVyIGFsbCBjb250ZW50IGFyZSByZWFkeSBmcm9tIHNlcnZlciEpXHJcblx0XHRcdFx0XHRcdC8vIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxyXG5cdFx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuXHRcdFx0XHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuXHRcdFx0XHRcdFx0fSwgNTAwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmaW5kUGFyZW50R3JvdXAgKGFsaWFzLCBsaW5rcykge1xyXG5cdFx0Zm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG5cdFx0XHRpZiAobGluay5hbGlhcyAmJiBsaW5rLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGxpbms7XHJcblxyXG5cdFx0XHRpZiAobGluay5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmsuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRcdGlmIChjaGlsZC5hbGlhcyAmJiBjaGlsZC5hbGlhcyA9PSBhbGlhcykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGluaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XHJcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xyXG5cdH1cclxuXHJcblx0c2tpcEludHJvICgpIHtcclxuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IGZpeEFuYWx5dGljTWlzc2luZyB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcclxuXHJcbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge25ld3NDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL25ld3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7c3BsYXNoQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyXCI7XHJcblxyXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgbmF2aWdhdGlvbkxpbmsgZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25MaW5rXCI7XHJcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnQvc2lkZWJhclwiO1xyXG5pbXBvcnQgc3Vic2NyaXB0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybVwiO1xyXG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xyXG5pbXBvcnQgbmV3c0FyZWEgZnJvbSBcIi4vY29tcG9uZW50L25ld3NBcmVhXCI7XHJcbmltcG9ydCBtZXRhU2VydmljZSBmcm9tIFwiLi9tZXRhU2VydmljZVwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJGaWx0ZXIgZnJvbSBcIi4vdXRpbHMvZmlsdGVyXCI7XHJcblxyXG5nbG9iYWwuZml4QW5hbHl0aWNNaXNzaW5nID0gZml4QW5hbHl0aWNNaXNzaW5nO1xyXG5sZXQgQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcGxpY2F0aW9uJywgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ25nUHJvZ3Jlc3MnLCAnbmdUb3VjaCcsICduZ1BhcmFsbGF4JywgJ2FuZ3VsYXItc3BpbmtpdCddKVxyXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxyXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCduZXdzQ3RybCcsIG5ld3NDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcclxuXHQuc2VydmljZSgnbWV0YVNlcnZpY2UnLCBtZXRhU2VydmljZSlcclxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0TmF2aWdhdGlvbicsIG5hdmlnYXRpb24pXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRTaWRlYmFyJywgc2lkZWJhcilcclxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3RlcilcclxuXHQuZGlyZWN0aXZlKCdsaWdodFNsaWRlcicsIHNsaWRlcilcclxuXHQuZGlyZWN0aXZlKCduZXdzQXJlYScsIG5ld3NBcmVhKVxyXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxyXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xyXG5cclxucmVnaXN0ZXJGaWx0ZXIoQXBwKTtcclxuXHJcbkFwcC5ydW4oKCkgPT4ge1xyXG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XHJcbn0pO1xyXG5cclxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xyXG5cdCckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXSk7XHJcblxyXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQgeyBsYW5ndWFnZXMsIGxvY2FsaXphdGlvbiB9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgJHRpbWVvdXQpIHtcclxuXHR0aGlzLnJlYWR5ID0gZmFsc2U7XHJcblxyXG5cdHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChjb25maWdSZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdCRyb290U2NvcGUubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZSA9IGxhbmd1YWdlc1swXTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvblskcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmxhbmddO1xyXG5cdFx0JHJvb3RTY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvblskcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmxhbmddO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCRyb290U2NvcGUubG9jYWxpemF0aW9uKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkaHR0cC5nZXQoJy9jb25maWdzJykuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHRkYXRhLmRvbWFpbiA9IGRhdGEuZG9tYWluIHx8IGxvY2F0aW9uLmhvc3Q7XHJcblx0XHRcdGxldCBjb25maWdzID0gZGF0YSwgeyBhcGlIb3N0LCBkb21haW4gfSA9IGNvbmZpZ3M7XHJcblx0XHRcdC8vT3ZlcnJpZGUgdHJhbnNsYXRpb24gKGlmIHBvc3NpYmxlKS4uXHJcblx0XHRcdGxhbmd1YWdlcy5mb3JFYWNoKCh7bGFuZ30pID0+IHtcclxuXHRcdFx0XHRpZiAoY29uZmlncy50cmFuc2xhdGlvbltsYW5nXSkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ10pKSB7XHJcblx0XHRcdFx0XHRcdGxvY2FsaXphdGlvbltsYW5nXVtrZXldID0gY29uZmlncy50cmFuc2xhdGlvbltsYW5nXVtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRuZXcgUHJvbWlzZSgobmF2aWdhdGlvblJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tZW51L2dldC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdFx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5saW5rcyA9IGRhdGEucmVzdWx0czsgdGhpcy5jb25maWdzID0gY29uZmlncztcclxuXHRcdFx0XHRcdG5hdmlnYXRpb25SZXNvbHZlKHRoaXMubGlua3MpO1xyXG5cdFx0XHRcdFx0Y29uZmlnUmVzb2x2ZSh0aGlzLmNvbmZpZ3MpO1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLmxpbmtzKTtcclxuXHRcdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtZXRhU2VydmljZVJlYWR5Jyk7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSwwKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufV07IiwiaW1wb3J0IHtwcmVsb2FkUmVzb2x2ZXN9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLFxyXG5cdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgncGFnZScsIHBhZ2VSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCduZXdzJywgbmV3c1JvdXRlKTtcclxuXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc3BsYXNoJyk7XHJcblxyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG5cdH1cclxuXTtcclxuXHJcbnZhciBzcGxhc2hSb3V0ZSA9IHtcclxuXHR1cmw6ICcvc3BsYXNoJyxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2VtcHR5TGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdzcGxhc2hDdHJsIGFzIHNwbGFzaEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIG1haW5Sb3V0ZSA9IHtcclxuXHR1cmw6ICcvJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgcGFnZVJvdXRlID0ge1xyXG5cdHVybDogJy86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBwYWdlJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcGFnZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBuZXdzUm91dGUgPSB7XHJcblx0dXJsOiAnL3Rpbi10dWMvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAbmV3cyc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICduZXdzQ3RybCBhcyBuZXdzQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcclxuXHRtb2R1bGVJbnN0YW5jZVxyXG5cdFx0LmZpbHRlcignbmljZURhdGUnLCBuaWNlRGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuaWNlRGF0ZSAoKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcclxuXHRcdHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XHJcblx0fTtcclxufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzInOy8vJ3JpdmVyY2l0eTk5LnZuJzsvL2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCcsICd1c2VyTm90ZSddO1xyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gW1xyXG5cdHtsYW5nOiBcInZpZXRuYW1lc2VcIiwgaWQ6IDEsIGRpc3BsYXk6IFwiVGnhur9uZyBWaeG7h3RcIn0sXHJcblx0Ly8ge2xhbmc6IFwiZW5nbGlzaFwiLCBpZDogMiwgZGlzcGxheTogXCJFbmdsaXNoXCJ9XHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvY2FsaXphdGlvbiA9IHtcclxuXHR2aWV0bmFtZXNlOiB7XHJcblx0XHRyZWdpc3RlcjogXCLEkMSCTkcgS8OdXCIsXHJcblx0XHRuZXdzOiBcIlRJTiBU4buoQ1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5H4buNaSA8L3NwYW4+YCxcclxuXHRcdHJlZ2lzdGVyVGl0bGVUYWlsOiBgIFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdDxzcGFuPiBob+G6t2MgZ+G7rWkgdGjDtG5nIHRpbiDEkeG7gyBuaOG6rW48L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkLDgU8gR0nDgTwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+dOG7qzwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJI4buNIHbDoCB0w6puKlwiLFxyXG5cdFx0cGhvbmVQbGFjZWhvbGRlcjogXCLEkGnhu4duIHRob+G6oWkqXCIsXHJcblx0XHRlbWFpbFBsYWNlaG9sZGVyOiBcIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiLFxyXG5cdFx0bm90ZVBsYWNlaG9sZGVyOiBcIkdoaSBjaMO6XCIsXHJcblx0XHRzZW5kOiBcIkfhu61pXCIsXHJcblx0XHRkZXNpZ25lZEJ5OiBcIlRoaeG6v3Qga+G7gyBi4bufaVwiLFxyXG5cdFx0ZGVzaWduQ29tcGFueTogYDxhIGhyZWY9XCJodHRwOi8vdHdpbi52blwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzJFQjNEMztcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UV0lOIFNvZnR3YXJlIFNvbHV0aW9uczwvYT5gXHJcblx0fSxcclxuXHRlbmdsaXNoOiB7XHJcblx0XHRyZWdpc3RlcjogXCJTVUJTQ1JJQkVcIixcclxuXHRcdG5ld3M6IFwiTkVXU1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5DYWxsIDwvc3Bhbj5gLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZVRhaWw6IGAgXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+IG9yIHN1YnNjcmliZSB0byByZWNlaXZlIDwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+UVVPVEFUSU9OPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj5mcm9tPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5JTlZFU1RPUjwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJGdWxsIG5hbWUqXCIsXHJcblx0XHRwaG9uZVBsYWNlaG9sZGVyOiBcIlBob25lKlwiLFxyXG5cdFx0ZW1haWxQbGFjZWhvbGRlcjogXCJFbWFpbCAob3B0aW9uYWwpXCIsXHJcblx0XHRub3RlUGxhY2Vob2xkZXI6IFwiTm90ZS4uXCIsXHJcblx0XHRzZW5kOiBcIlNlbmRcIixcclxuXHRcdGRlc2lnbmVkQnk6IFwiRGVzaWduZWQgYnlcIixcclxuXHRcdGRlc2lnbkNvbXBhbnk6IGA8YSBocmVmPVwiaHR0cDovL3R3aW4udm5cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyRUIzRDM7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VFdJTiBTb2Z0d2FyZSBTb2x1dGlvbnM8L2E+YFxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaXhBbmFseXRpY01pc3NpbmcgKCkge1xyXG5cdGlmICghZ2xvYmFsLmdhKSBnbG9iYWwuZ2EgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmZicSkgZ2xvYmFsLmZicSA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuYW50c191c2VySW5mb0xpc3RlbmVyKSBnbG9iYWwuYW50c191c2VySW5mb0xpc3RlbmVyID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5hbnRzX2FuYWx5dGljKSBnbG9iYWwuYW50c19hbmFseXRpYyA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcclxuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcclxuXHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlZGljYXRlKSkge1xyXG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xyXG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcclxuXHRcdGlmIChpbnN0YW5jZVtzZWFyY2hLZXldID09PSBzZWFyY2hWYWx1ZSkgcmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnRNZW51QnlBbGlhcyAoYWxpYXMsIGxpbmtzKSB7XHJcblx0Zm9yIChsZXQgZ3JvdXAgb2YgbGlua3MpIHtcclxuXHRcdGlmIChncm91cC5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBncm91cDtcclxuXHRcdGlmIChncm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBncm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGlmIChjaGlsZC5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBncm91cDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcclxuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgcHJlbG9hZFJlc29sdmVzID0ge1xyXG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcclxuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyVVVJRCAobGVuZ3RoKSB7XHJcblx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRyZXN1bHQgKz0gWzAsMSwyLDMsNCw1LDYsNyw4LDldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUmFuZ2UgKHZhbHVlLCBtaW4sIG1heCkge1xyXG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcclxuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZm9udCkge1xyXG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXHJcblx0XHRvID0gJCgnPGRpdj4nICsgdGhpcyArICc8L2Rpdj4nKVxyXG5cdFx0XHQuY3NzKHsncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAnZmxvYXQnOiAnbGVmdCcsICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLCAndmlzaWJpbGl0eSc6ICdoaWRkZW4nLCAnZm9udCc6IGZ9KVxyXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcclxuXHRcdHcgPSBvLndpZHRoKCk7XHJcblxyXG5cdG8ucmVtb3ZlKCk7XHJcblxyXG5cdHJldHVybiB3O1xyXG59O1xyXG5cclxuZ2xvYmFsLnV1aWQgPSBnZW5lcmF0ZU51bWJlclVVSUQ7Il19
