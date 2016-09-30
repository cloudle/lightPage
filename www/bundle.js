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

},{"../utils/helper":19}],9:[function(require,module,exports){
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
		if (production) new UActL({}).syncWithParams(data);

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
			/* Google Adword tracking event conversion */
			goog_report_conversion();
			ga('send', {
				hitType: 'event',
				eventCategory: 'Goal Complete',
				eventAction: 'register'
			});
		}

		//Send form information to Ants!

		//	ants_userInfoListener(formData, false, true);
		else {}
			//console.log(ants_userInfoListener)


			//Facebook tracking Lead/CompleteRegistration event
		if (production) fbq('track', 'Lead');
		if (production) fbq('track', 'CompleteRegistration');

		//Tracking Google Analytic goal!
		if (production) {}

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

},{"../utils/helper":19}],10:[function(require,module,exports){
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
			var activeContentIndex = _.findIndex($rootScope.activeContents, { alias: pageAlias });
			$rootScope.singleContent = $rootScope.activeContents[activeContentIndex];
			//Scroll after 1 second to have better performance (after stuffs had been rendered).
			// $timeout(() => {
			// 	let scrollOffset = angular.element(`#section${pageAlias}`).offset().top - 50;
			// 	TweenLite.to(window, 1, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
			// }, 800);
		} else {
			//Finally, load the page => set page's children content!
			$window.scrollTo(0, 0); //Reset the scroll if loading from the beginning!
			parentGroup.children.forEach(function (child, index) {
				$rootScope.activeContents[index] = {};
				$http.get(apiHost + '/page/get/json', { params: { domain: domain, alias: child.alias } }).success(function (data) {
					var childResult = data.results[0];
					if (childResult && childResult.Page) {
						$rootScope.activeContents[index] = childResult.Page;
					}
				});
			});
			// parentGroup.children.forEach((child, index) => {
			// 	$rootScope.activeContents[index] = {};
			// 	$http.get(`${apiHost}/page/get/json`, { params: { domain, alias: child.alias } }).success(data => {
			// 		let childResult = data.results[0];
			// 		if (childResult && childResult.Page) {
			// 			$rootScope.activeContents[index] = childResult.Page;
			// 			if (pageAlias == childResult.Page.alias) {
			// 				$rootScope.singleContent = childResult.Page;
			// 			}
			// 		}
			// 	}).finally(() => {
			// 		loadedCount++;
			//
			// 		// if (loadedCount >= parentGroup.children.length) {
			// 		// 	//Scroll after 1 second (after all content are ready from server!)
			// 		// 	// to have better performance (after stuffs had been rendered).
			// 		// 	$timeout(() => {
			// 		// 		let scrollOffset = angular.element(`#section${pageAlias}`).offset().top - 50;
			// 		// 		TweenLite.to(window, 1, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
			// 		// 	}, 500);
			// 		// }
			// 	});
			// });
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

},{"./component/footer":1,"./component/navigation":2,"./component/navigationLink":3,"./component/newsArea":4,"./component/popup":5,"./component/sidebar":6,"./component/slider":7,"./component/subscriptionForm":8,"./controller/applicationController":9,"./controller/mainController":10,"./controller/newsController":11,"./controller/pageController":12,"./controller/splashController":13,"./metaService":15,"./routerConfig":17,"./utils/filter":18,"./utils/helper":19}],15:[function(require,module,exports){
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

},{"./utils/helper":19}],16:[function(require,module,exports){
"use strict";

console.log("This is anphaland!!!");

},{}],17:[function(require,module,exports){
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

},{}]},{},[14,16])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcZm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXG5hdmlnYXRpb24uanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbkxpbmsuanMiLCJhcHBcXGNvbXBvbmVudFxcbmV3c0FyZWEuanMiLCJhcHBcXGNvbXBvbmVudFxccG9wdXAuanMiLCJhcHBcXGNvbXBvbmVudFxcc2lkZWJhci5qcyIsImFwcFxcY29tcG9uZW50XFxhcHBcXGNvbXBvbmVudFxcc2xpZGVyLmpzIiwiYXBwXFxjb21wb25lbnRcXHN1YnNjcmlwdGlvbkZvcm0uanMiLCJhcHBcXGNvbnRyb2xsZXJcXGFwcFxcY29udHJvbGxlclxcYXBwbGljYXRpb25Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxtYWluQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxcbmV3c0NvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhZ2VDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccGF0Y2hlc1xcYW5waGFsYW5kLmpzIiwiYXBwXFxyb3V0ZXJDb25maWcuanMiLCJhcHBcXHV0aWxzXFxmaWx0ZXIuanMiLCJhcHBcXHV0aWxzXFxhcHBcXHV0aWxzXFxoZWxwZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztrQkNBZSxDQUFDLFlBQUQsRUFBZSxPQUFmLEVBQXdCLFVBQVUsVUFBVixFQUFzQixLQUF0QixFQUE2Qjs7QUFHbkUsUUFBTztBQUNOLFlBQVUsR0FESjtBQUVOLFdBQVMsSUFGSDtBQUdOLFNBQU8sRUFBRSxTQUFTLEdBQVgsRUFIRDtBQUlOLDAyQkFKTTtBQTBCTixRQUFNLGNBQVUsS0FBVixFQUFpQixP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QixFQUFnQztBQUMvQixZQUFVLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBc0IsS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLEtBQWMsQ0FBekIsQ0FBdEIsQ0FBVjtBQUNBOztBQUVELFFBQU8sTUFBUDtBQUNBOztBQUVNLFNBQVMsU0FBVCxDQUFvQixLQUFwQixFQUEyQixHQUEzQixFQUFnQyxHQUFoQyxFQUFxQztBQUMzQyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxLQUFJLE9BQU8sU0FBUCxJQUFvQixTQUFTLEdBQWpDLEVBQXNDLE9BQU8sR0FBUDtBQUN0QyxRQUFPLEtBQVA7QUFDQTs7QUFFRCxPQUFPLFNBQVAsQ0FBaUIsS0FBakIsR0FBeUIsVUFBUyxJQUFULEVBQWU7QUFDdkMsS0FBSSxJQUFJLFFBQVEsWUFBaEI7QUFBQSxLQUNDLElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7QUFBQSxLQUlDLElBQUksRUFBRSxLQUFGLEVBSkw7O0FBTUEsR0FBRSxNQUFGOztBQUVBLFFBQU8sQ0FBUDtBQUNBLENBVkQ7O0FBWUEsT0FBTyxJQUFQLEdBQWMsa0JBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBpZD1cImZvb3RlclwiIGNsYXNzPVwiZm9vdGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbFwiIG5nLXJlcGVhdD1cImNvbHVtbiBpbiBjb2x1bW5zXCIgbmctYmluZC1odG1sPVwiY29sdW1uLlBvc3QuY29udGVudCB8IHVuc2FmZVwiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtcm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsYW5ndWFnZS1jaG9pY2VcIiBuZy1yZXBlYXQ9XCJsYW5ndWFnZSBpbiAkcm9vdC5sYW5ndWFnZXNcIiBcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1jbGFzcz1cInthY3RpdmU6IGxhbmd1YWdlQWN0aXZlKGxhbmd1YWdlKX1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1jbGljaz1cIiRyb290LmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctYmluZD1cImxhbmd1YWdlLmRpc3BsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLmRlc2lnbmVkQnlcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdDxhIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5kZXNpZ25Db21wYW55IHwgdW5zYWZlXCI+PC9hPlx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRzY29wZS5sYW5ndWFnZUFjdGl2ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZS5pZCA9PSAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRyZWFkeTogJz0nLFxyXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCIgdWktc3JlZj1cImhvbWVcIj48L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVQb3B1cCgpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclwiPjwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cclxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogbmV3c0FjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJuZXdzKHthbGlhczogJyd9KVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGJ1cmdlckFjdGl2ZX1cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cclxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBjaGlsZC5hbGlhc30pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJuZXdzXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0c2NvcGUubGlua3MgPSBtZXRhU2VydmljZS5saW5rcztcclxuXHJcblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uZXdzQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICduZXdzJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwLCAkcm9vdFNjb3BlLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHtcclxuXHRcdFx0aW5zdGFuY2U6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLXN0eWxlPVwie3dpZHRoOiBtYXhXaWR0aCsncHgnfVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbGlua0FjdGl2ZUNsYXNzKGluc3RhbmNlKX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgbmctYmluZD1cImluc3RhbmNlLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpbnN0YW5jZSlcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1uYXZpZ2F0aW9ucyBpY29uLW5hdmlnYXRpb24tYXJyb3ctZHJvcC11cFwiIG5nLWlmPVwiaW5zdGFuY2UuY2hpbGRyZW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxyXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBsaW5rLmFsaWFzfSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0c2NvcGUubWF4V2lkdGggPSBzY29wZS5pbnN0YW5jZS5uYW1lLndpZHRoKG1haW5Gb250KSArIHBhZGRpbmc7XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4gJiYgc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0c2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcclxuXHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xyXG5cdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlR3JvdXAgJiYgJHJvb3RTY29wZS5hY3RpdmVHcm91cC5pZCA9PT0gaW5zdGFuY2UuaWQ7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UuYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlY3Rpb24tY2FudmFzIHRvcC1zZXBhcmF0ZWQgbmV3cy1hcmVhXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtaGVhZGluZyBzZWN0aW9uXCI+PHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXJvdyBxdWF0cm9cIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW4gbGlnaHQtY29sdW1uIGNsaWNrLWFibGVcIiBuZy1yZXBlYXQ9XCJuZXdzSXRlbSBpbiBuZXdzXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiBuZXdzSXRlbS5Qb3N0LmFsaWFzfSlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3NJdGVtLlBvc3QudGl0bGVcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRodW1iLWltYWdlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW1hZ2UgaW1hZ2UtaG92ZXItZWZmZWN0LXpvb20tMTIwXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrbmV3c0l0ZW0uUG9zdC5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIiBuZy1iaW5kPVwibmV3c0l0ZW0uUG9zdC5kZXNjcmlwdGlvblwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxyXG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRzY29wZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJjb25zdCBpbml0aWFsVG9wT2Zmc2V0ID0gMTIxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIiBuZy1zdHlsZT1cInt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnK3RvcFBvc2l0aW9uKydweCknfVwiPlxyXG5cdFx0XHQ8c3Vic2NyaXB0aW9uLWZvcm0gd3JhcHBlci1jbGFzcz1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPlxyXG5cdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2Pi0tPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZWJhci1uZXdzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmV3cy1zdW1tYXJ5XCIgbmctcmVwZWF0PVwibmV3c0l0ZW0gaW4gbmV3c1wiIHVpLXNyZWY9XCJuZXdzKHthbGlhczogbmV3c0l0ZW0uUG9zdC5hbGlhc30pXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2VcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZVwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LnRpdGxlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0dmFyIHNpZGViYXJIZWlnaHQsIGZvb3RlckhlaWdodDsgc2NvcGUudG9wUG9zaXRpb24gPSAwO1xyXG5cclxuXHRcdFx0Ly9TYWZlbHkgY2FsY3VsYXRlIGVsZW1lbnQncyBzaXplIGFmdGVyIHN0dWZmIGhhdmUgYmVlbiByZW5kZXJlZCFcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNjb3BlLm5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XHJcblx0XHRcdFx0c2lkZWJhckhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0XHRmb290ZXJIZWlnaHQgPSBhbmd1bGFyLmVsZW1lbnQoJyNmb290ZXInKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cclxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgc2Nyb2xsUG9zaXRpb24pID0+IHtcclxuXHRcdFx0XHQvLyBzY29wZS5uZXdzID0gJHJvb3RTY29wZS5uZXdzO1xyXG5cclxuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGRvY3VtZW50SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCksIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0XHRcdFx0b2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zaXRpb24uc2Nyb2xsaW5nRG93bikge1xyXG5cdFx0XHRcdFx0XHRsZXQgc2Nyb2xsRG93blRvdWNoQm90dG9tID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gb2Zmc2V0LnRvcCArIHNpZGViYXJIZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsRG93bk92ZXJGb290ZXIgPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBkb2N1bWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChzY3JvbGxEb3duVG91Y2hCb3R0b20gJiYgIXNjcm9sbERvd25PdmVyRm9vdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgLSBzaWRlYmFySGVpZ2h0IC0gaW5pdGlhbFRvcE9mZnNldDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbi50b3AgPCBvZmZzZXQudG9wIC0gaW5pdGlhbFRvcE9mZnNldCkge1xyXG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJGludGVydmFsJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBpdGVtczogJz0nLCBtYXJxdWU6ICc9JyB9LFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCJcclxuXHRcdFx0bmctc3dpcGUtbGVmdD1cInN3aXBlTGVmdCgkZXZlbnQpXCIgbmctc3dpcGUtcmlnaHQ9XCJzd2lwZVJpZ2h0KCRldmVudClcIj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtYXJxdWVlXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdDxtYXJxdWVlIGNsYXNzPVwibWFycXVlZS1zbGlkZXJcIiBuZy1pZj1cIm1hcnF1ZVwiIGRpcmVjdGlvbj1cImxlZnRcIiBzY3JvbGxhbW91bnQ9XCIxMFwiIG9ubW91c2VvdXQ9XCJ0aGlzLnN0YXJ0KClcIiBvbm1vdXNlb3Zlcj1cInRoaXMuc3RvcCgpXCIgPlxyXG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmZmZmO1wiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7bWFycXVlLmltZ319XCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgYm9yZGVyPVwiMFwiIGFsdD1cIlBob3RvYnVja2V0XCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIG5nLWJpbmQ9XCJtYXJxdWUuZXRleHQwXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmOTBkO1wiIG5nLWJpbmQ9XCJtYXJxdWUuZXRleHQxXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmZmZmO1wiIG5nLWJpbmQ9XCJtYXJxdWUuZXRleHQyXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDI0cHg7IGNvbG9yOiAjZmZmOTBkO1wiIG5nLWJpbmQ9XCJtYXJxdWUuZXRleHQzXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cInt7bWFycXVlLmltZ319XCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgYm9yZGVyPVwiMFwiIGFsdD1cIlBob3RvYnVja2V0XCI+XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0PC9tYXJxdWVlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgaWQ9XCJjdXJyZW50U2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK2FjdGl2ZVNsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBpZD1cInByZXZpb3VzU2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZSBwcmV2aW91c1wiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK3ByZXZpb3VzU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLW5hdmlnYXRpb25cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtbmV4dFwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1iYWNrXCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1pdGVtXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmlzQWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIiBuZy1jbGljaz1cIm5hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRsZXQgJGFjdGl2ZVNsaWRlID0gZWxlbWVudC5maW5kKCcjY3VycmVudFNsaWRlJyksICRwcmV2aW91c1NsaWRlID0gZWxlbWVudC5maW5kKCcjcHJldmlvdXNTbGlkZScpLFxyXG5cdFx0XHRcdGVhc2VFZmZlY3QgPSBTaW5lLmVhc2VJbiwgdHJhbnNpdGlvblRpbWUgPSAyO1xyXG5cclxuXHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xyXG5cdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcclxuXHJcblx0XHRcdHNjb3BlLiR3YXRjaCgnaXRlbXMnLCAoKSA9PiB7XHJcblx0XHRcdFx0bmV4dFNsaWRlKDApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcclxuXHJcblx0XHRcdGxldCBuZXh0U2xpZGUgPSBmdW5jdGlvbiAobmV4dEluZGV4KSB7XHJcblx0XHRcdFx0c2NvcGUucHJldmlvdXNTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcclxuXHRcdFx0XHRpZiAoc2NvcGUucHJldmlvdXNTbGlkZSkgc2NvcGUucHJldmlvdXNTbGlkZS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IG5leHRJbmRleCAhPSB1bmRlZmluZWQgPyBuZXh0SW5kZXggOiBzY29wZS5hY3RpdmVJbmRleCArIDE7XHJcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZUluZGV4IDwgMCkge1xyXG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBzY29wZS5pdGVtcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuYWN0aXZlSW5kZXggPj0gc2NvcGUuaXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcclxuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlU2xpZGUpIHNjb3BlLmFjdGl2ZVNsaWRlLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Ly9QbGF5IHRyYW5zaXRpb24gYW5pbWF0aW9uIVxyXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMTAwJSd9KTtcclxuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRhY3RpdmVTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnLTEwMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9KTtcclxuXHRcdFx0XHRUd2VlbkxpdGUudG8oJGFjdGl2ZVNsaWRlLCAwLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSk7XHJcblx0XHRcdFx0VHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzAnfSk7XHJcblxyXG5cdFx0XHRcdC8vUmVzZXQgaW50ZXJ2YWw7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xyXG5cdFx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUubmF2aWdhdGUgPSAoaW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UgIT0gc2NvcGUuYWN0aXZlU2xpZGUpIHtcclxuXHRcdFx0XHRcdG5leHRTbGlkZShzY29wZS5pdGVtcy5pbmRleE9mKGluc3RhbmNlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUuc3dpcGVMZWZ0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCArIDEpO1xyXG5cdFx0XHRzY29wZS5zd2lwZVJpZ2h0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCAtIDEpO1xyXG5cclxuXHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgd3JhcHBlckNsYXNzOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8Zm9ybSBuZy1jbGFzcz1cIndyYXBwZXJDbGFzc1wiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiYXBwQ3RybC5jbG9zZVJlZ2lzdGVyRm9ybSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVIZWFkIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxhIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lXCIgaHJlZj1cInRlbDp7e2NvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZX19XCIgY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9hPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlVGFpbCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmZ1bGxOYW1lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTmFtZVwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiPjwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLnBob25lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyUGhvbmVcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyUGhvbmVFcnJvclwiPjwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmVtYWlsUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRW1haWxcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiPjwvZGl2PlxyXG5cclxuXHRcdFx0PHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5ub3RlUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTm90ZVwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAkcm9vdC5sb2NhbGl6YXRpb24uc2VuZFwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZm9ybT5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRzY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0c2NvcGUuYXBwQ3RybCA9ICRyb290U2NvcGUuYXBwQ3RybDtcclxuXHJcblx0XHRcdHNjb3BlLnN1Ym1pdCA9ICRyb290U2NvcGUuc3VibWl0UmVnaXN0ZXI7XHJcblxyXG5cdFx0XHRzY29wZS5nb29nbGVMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRhbnRzX2ZiQXV0aENsaWNrKCdsb2dpbicpO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV1cclxuXHJcbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCddOyIsImltcG9ydCB7XHJcblx0Z2VuZXJhdGVOdW1iZXJVVUlELFxyXG5cdHJlZ2lzdGVyRmllbGRzLFxyXG5cdGZpbmRQYXJlbnRNZW51QnlBbGlhc1xyXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5JywgJ21ldGFTZXJ2aWNlJ107XHJcblx0ZGV2ZWxvcG1lbnRNb2RlID0gZmFsc2U7XHJcblx0cmVhZHkgPSB0cnVlO1xyXG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcclxuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcclxuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5LCBtZXRhU2VydmljZSkge1xyXG5cdFx0JHJvb3RTY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlnczsgLy9XaWxsIGJlIHVuZGVmaW5lZCBhdCBmaXJzdCA9PiBub3Qgc2FmZSBmb3Igbm9ybWFsIHVzYWdlLCBqdXN0IGZvciB0cmFuc2xhdGlvbiFcclxuXHRcdCRyb290U2NvcGUuYXBwQ3RybCA9IHRoaXM7XHJcblxyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XHJcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XHJcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAobmV3VmFsKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBuZXdWYWwgPyBuZXdWYWwgOiAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XHJcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG5cclxuXHRcdFx0Ly9TZXQgbWV0YSdzIGNvbnRlbnQgZm9yIEFVRElFTkNFIFNFR01FTlQhXHJcblx0XHRcdGxldCBjdXJyZW50U2VnbWVudCA9ICdob21lJztcclxuXHRcdFx0aWYgKCRzdGF0ZS5pcygncGFnZScpKSB7XHJcblx0XHRcdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudE1lbnUgPSBmaW5kUGFyZW50TWVudUJ5QWxpYXMocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyk7XHJcblx0XHRcdFx0Y3VycmVudFNlZ21lbnQgPSBwYXJlbnRNZW51Lm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoJHN0YXRlLmlzKCduZXdzJykpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9ICduZXdzJ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKCQoXCJtZXRhW25hbWU9J2FkeDpzZWN0aW9ucyddXCIpWzBdKS5hdHRyKCdjb250ZW50JywgY3VycmVudFNlZ21lbnQpO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcigncmVhZHknKTsgLy9NYW51YWxseSB0cmlnZ2VyIHJlYWR5IGV2ZW50LCB3aGljaCBob3BlIGFsc28gdHJpZ2dlciBBbnRzJyBzY3JpcHQhXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZmV0Y2hFc3NlbnRpYWxEYXRhID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ2Zvb3RlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZm9vdGVycyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICduZXdzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCwgbGltaXQ6IDQgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdCRyb290U2NvcGUubmV3cyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChtZXRhU2VydmljZS5yZWFkeSkgZmV0Y2hFc3NlbnRpYWxEYXRhKCk7XHJcblx0XHQkcm9vdFNjb3BlLiRvbignbWV0YVNlcnZpY2VSZWFkeScsIGZldGNoRXNzZW50aWFsRGF0YSk7XHJcblxyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSAwO1xyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvcFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY3JvbGxDaGFuZ2UnLCB7dG9wOiB0b3BTY3JvbGwsIHNjcm9sbGluZ0Rvd246IHRvcFNjcm9sbCA+IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9ufSk7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gdG9wU2Nyb2xsO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l6ZUNoYW5nZScsIHtcclxuXHRcdFx0XHRoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0XHR3aWR0aDogJCh3aW5kb3cpLndpZHRoKClcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL1JlZ2lzdGVyIGZvcm0hXHJcblx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuXHRcdFx0dGhpc1tmaWVsZF0gPSAnJzsgdGhpc1tmaWVsZCsnRXJyb3InXSA9ICcnO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jbG9zZVJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRoaXNbZmllbGRdID0gJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJFcnJvciA9ICgpID0+IHtcclxuXHRcdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB0aGlzW2ZpZWxkKydFcnJvciddID0gJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2U7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnN1Ym1pdFJlZ2lzdGVyID0gJHJvb3RTY29wZS5zdWJtaXRSZWdpc3RlciA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4sIHByb2R1Y3Rpb24gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdC8vY29uc29sZS5sb2coXCJwcm9kdWN0aW9uIG1vZGU6XCIsIHByb2R1Y3Rpb24pO1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnJlc2V0UmVnaXN0ZXJFcnJvcigpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJOYW1lJ10ubGVuZ3RoIDwgMSkgdGhpc1sndXNlck5hbWVFcnJvciddID0gJ05o4bqtcCB0w6puJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJQaG9uZSddLmxlbmd0aCA8IDgpIHRoaXNbJ3VzZXJQaG9uZUVycm9yJ10gPSAnU+G7kSDEkWnhu4duIHRob+G6oWkgY2jGsGEgxJHDum5nJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJOYW1lRXJyb3InXSB8fCB0aGlzWyd1c2VyUGhvbmVFcnJvciddKSByZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxyXG5cdFx0XHRcdGZvcm1EYXRhID0ge1xyXG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcclxuXHRcdFx0XHRcdGRvbWFpbixcclxuXHRcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdFx0bmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRcdHBob25lOiB0aGlzWyd1c2VyUGhvbmUnXSxcclxuXHRcdFx0XHRcdGVtYWlsOiB0aGlzWyd1c2VyRW1haWwnXSxcclxuXHRcdFx0XHRcdG5vdGU6IHRoaXNbJ3VzZXJOb3RlJ11cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0ZW1haWwgOiB0aGlzWyd1c2VyRW1haWwnXSxcclxuXHRcdFx0XHRwaG9uZTogdGhpc1sndXNlclBob25lJ10sXHJcblx0XHRcdFx0bmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRhZGRyZXNzOiAnJyxcclxuXHRcdFx0XHRhY3Rpb246ICd0ZXh0IC0gZXhwbGFpbicsXHJcblx0XHRcdFx0ZGVzY3JpcHRpb246IHRoaXNbJ3VzZXJOb3RlJ10sXHJcblx0XHRcdFx0eW91cl9rZXkxOiAnJyxcclxuXHRcdFx0XHR5b3VyX2tleTI6ICcnXHJcblx0XHRcdH1cclxuXHRcdFx0Ly9zZW50IGZvcm0gVHJhY2tpbmcgbm90ZVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgbmV3IFVBY3RMKHt9KS5zeW5jV2l0aFBhcmFtcyhkYXRhKTtcclxuXHJcblx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbil7XHJcblx0XHRcdC8qIEFudHMgSW5zaWdodCBHb2FsIFRyYWNraW5nICovXHJcblx0XHRcdFx0YWR4X2FuYWx5dGljLnRyYWNraW5nR29hbChtZXRhU2VydmljZS5jb25maWdzLmFudHNSZWdpc3RlckdvYWxJZCwgMSwgJ2V2ZW50Jyk7XHJcblxyXG5cdFx0XHR2YXIgdXNlckluZm8gPSB7XHJcblxyXG5cdFx0XHRcdG5hbWU6IHRoaXNbJ3VzZXJOYW1lJ10sXHJcblxyXG5cdFx0XHRcdHBob25lOiB0aGlzWyd1c2VyUGhvbmUnXSxcclxuXHJcblx0XHRcdFx0ZW1haWw6IHRoaXNbJ3VzZXJFbWFpbCddLFxyXG5cclxuXHRcdFx0XHRkZXNjcmlwdGlvbjogdGhpc1sndXNlck5vdGUnXSAvLyBHaGkgY2jDulxyXG5cclxuXHRcdFx0fTtcclxuXHJcbiAgICAgIGFkeF9hbmFseXRpYy50cmFja2luZ0V2ZW50KCd0dXAnLCB1c2VySW5mbywgdHJ1ZSk7XHJcblx0XHRcdC8qIEdvb2dsZSBBZHdvcmQgdHJhY2tpbmcgZXZlbnQgY29udmVyc2lvbiAqL1xyXG5cdFx0XHRnb29nX3JlcG9ydF9jb252ZXJzaW9uKCk7XHJcblx0XHRcdFx0Z2EoJ3NlbmQnLCB7XHJcblx0XHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxyXG5cdFx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogJ0dvYWwgQ29tcGxldGUnLFxyXG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdyZWdpc3RlcidcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXHJcblxyXG5cdFx0XHQvL1x0YW50c191c2VySW5mb0xpc3RlbmVyKGZvcm1EYXRhLCBmYWxzZSwgdHJ1ZSk7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coYW50c191c2VySW5mb0xpc3RlbmVyKVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvL0ZhY2Vib29rIHRyYWNraW5nIExlYWQvQ29tcGxldGVSZWdpc3RyYXRpb24gZXZlbnRcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnTGVhZCcpO1xyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgZmJxKCd0cmFjaycsICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicpO1xyXG5cclxuXHRcdFx0Ly9UcmFja2luZyBHb29nbGUgQW5hbHl0aWMgZ29hbCFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0YW50c19hbmFseXRpYy5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbnZlcnNpb25JZCA6IG1ldGFTZXJ2aWNlLmNvbmZpZ3MuYW50c0NvbnZlcnNpb25JZCxcclxuXHRcdFx0XHRcdGN1c3RvbVBhcmFtcyA6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCdpc19lY29tbSc6IDAsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3BhZ2V0eXBlJzogJ3B1cmNoYXNlJyxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fcXVhbnRpdHknOiAxLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV90b3RhbHZhbHVlJzogMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVzZXRSZWdpc3RlckZvcm0oKTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly9TZW5kIGZvcm0gdG8gVHdpbidzIHNlcnZlciFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vY3VzdG9tZXIvaW5zZXJ0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXHJcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIoKTtcclxuXHRcdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tYWlsL3NlbnQvanNvbmAsIHtwYXJhbXM6IGZvcm1EYXRhfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Ly9jb25zb2xlLmxvZygnZW1haWwuLi4nLCBkYXRhKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIoKTsgLy9BdXRvIHN1Y2Nlc3Mgb24gdGVzdCBlbnZpcm9ubWVudCFcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRnbG9iYWwuZ2V0X2luZm8gPSAoX3VzZXJJbmZvKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIHVzZXIgaW5mbyBnZXQgaGVyZVxyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coXCJhbnQncyBnZXRfaW5mbyBmdW5jdGlvbjpcIiwgX3VzZXJJbmZvKTtcclxuXHJcblx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cclxuXHRcdFx0XHR0aGlzLnVzZXJOYW1lID0gX3VzZXJJbmZvLm5hbWUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyUGhvbmUgPSBfdXNlckluZm8ucGhvbmUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyTm90ZSA9IF91c2VySW5mby5ub3RlIHx8ICcnO1xyXG5cclxuXHJcblx0XHRcdFx0Ly9TdG9yZSBTb2NpYWwgcHJvZmlsZVxyXG5cdFx0XHRcdGlmIChfdXNlckluZm8pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3VzZXJJbmZvXCIsIEpTT04uc3RyaW5naWZ5KF91c2VySW5mbykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCcsICdtZXRhU2VydmljZSddO1xyXG5cclxuXHRmZWF0dXJlcyA9IFtdO1xyXG5cdHNsaWRlcnMgPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdHRoaXMubWFycXVlU2VudGVuY2UgPSBtZXRhU2VydmljZS5jb25maWdzLm1hcnF1ZWU7XHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cclxuXHRcdHRoaXMubG9hZERhdGEgPSAocmVsb2FkZWQpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG1ldGFTZXJ2aWNlLmxpbmtzWzBdOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgYWxpYXM6IFwidHJhbmctY2h1XCIgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdCFyZWxvYWRlZCAmJiBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtkYXRhLnJlc3VsdHNbMF0uUGFnZV07XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnYmFubmVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5mZWF0dXJlcyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICdIb21lU2xpZGVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zbGlkZXJzID0gZGF0YS5yZXN1bHRzLm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiBpdGVtLlBvc3Q7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCkgLSA3MDtcclxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3NpemVDaGFuZ2UnLCAoZXZlbnQsIHNpemUpID0+IHtcclxuXHRcdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgPiA1NzAgPyBzaXplLmhlaWdodCAtIDcwIDogNTAwO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdCRzY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWREYXRhKHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIG5ld3NDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93JywgJyRodHRwJywgICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHR0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2luZ2xlTW9kZSkge1xyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXMgfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0dGhpcy5hbGxOZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGVsZW1lbnQsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcblx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcclxuXHRcdFx0cHJldmlvdXNHcm91cCA9ICRyb290U2NvcGUuYWN0aXZlR3JvdXA7ICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBwYXJlbnRHcm91cDtcclxuXHJcblx0XHRpZihwYWdlQWxpYXMgPT0gJ3RyYW5nLWNodScpIHsgJHN0YXRlLmdvKCdob21lJyk7IHJldHVybjsgfVxyXG5cdFx0Ly9LaWNrIGJhY2sgdG8gdGhlIEhvbWUgcGFnZSBpZiBpdCdzIG5vdCBhIGxpbmsgaW4gbWVudVxyXG5cdFx0aWYgKCFwYXJlbnRHcm91cCB8fCAhcGFyZW50R3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0JHN0YXRlLmdvKCdob21lJyk7XHJcblx0XHR9IGVsc2UgaWYgKHBhcmVudEdyb3VwID09PSBwcmV2aW91c0dyb3VwKSB7IC8vSWYgdGhlIHBhcmVudCBncm91cCBpcyBhbHJlYWR5IGFjdGl2ZSA9PiBzY3JvbGwgdG8gdGhlIGNoaWxkIHNlY3Rpb24hXHJcblx0XHRcdGxldCBhY3RpdmVDb250ZW50SW5kZXggPSBfLmZpbmRJbmRleCgkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzLCB7YWxpYXM6IHBhZ2VBbGlhc30pO1xyXG5cdFx0XHQkcm9vdFNjb3BlLnNpbmdsZUNvbnRlbnQgPSAkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2FjdGl2ZUNvbnRlbnRJbmRleF07XHJcblx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxyXG5cdFx0XHQvLyAkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdC8vIFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuXHRcdFx0Ly8gXHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuXHRcdFx0Ly8gfSwgODAwKTtcclxuXHJcblx0XHR9IGVsc2UgeyAvL0ZpbmFsbHksIGxvYWQgdGhlIHBhZ2UgPT4gc2V0IHBhZ2UncyBjaGlsZHJlbiBjb250ZW50IVxyXG5cdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL1Jlc2V0IHRoZSBzY3JvbGwgaWYgbG9hZGluZyBmcm9tIHRoZSBiZWdpbm5pbmchXHJcblx0XHRcdHBhcmVudEdyb3VwLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0ge307XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBjaGlsZC5hbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgY2hpbGRSZXN1bHQgPSBkYXRhLnJlc3VsdHNbMF07XHJcblx0XHRcdFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xyXG5cdFx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IGNoaWxkUmVzdWx0LlBhZ2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSk7XHJcblx0XHRcdC8vIHBhcmVudEdyb3VwLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHQvLyBcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0ge307XHJcblx0XHRcdC8vIFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBjaGlsZC5hbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdC8vIFx0XHRsZXQgY2hpbGRSZXN1bHQgPSBkYXRhLnJlc3VsdHNbMF07XHJcblx0XHRcdC8vIFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xyXG5cdFx0XHQvLyBcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IGNoaWxkUmVzdWx0LlBhZ2U7XHJcblx0XHRcdC8vIFx0XHRcdGlmIChwYWdlQWxpYXMgPT0gY2hpbGRSZXN1bHQuUGFnZS5hbGlhcykge1xyXG5cdFx0XHQvLyBcdFx0XHRcdCRyb290U2NvcGUuc2luZ2xlQ29udGVudCA9IGNoaWxkUmVzdWx0LlBhZ2U7XHJcblx0XHRcdC8vIFx0XHRcdH1cclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9KS5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0Ly8gXHRcdGxvYWRlZENvdW50Kys7XHJcbiAgICAgIC8vXHJcblx0XHRcdC8vIFx0XHQvLyBpZiAobG9hZGVkQ291bnQgPj0gcGFyZW50R3JvdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdC8vIFx0XHQvLyBcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIChhZnRlciBhbGwgY29udGVudCBhcmUgcmVhZHkgZnJvbSBzZXJ2ZXIhKVxyXG5cdFx0XHQvLyBcdFx0Ly8gXHQvLyB0byBoYXZlIGJldHRlciBwZXJmb3JtYW5jZSAoYWZ0ZXIgc3R1ZmZzIGhhZCBiZWVuIHJlbmRlcmVkKS5cclxuXHRcdFx0Ly8gXHRcdC8vIFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHQvLyBcdFx0Ly8gXHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblx0XHRcdC8vIFx0XHQvLyBcdFx0VHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XHJcblx0XHRcdC8vIFx0XHQvLyBcdH0sIDUwMCk7XHJcblx0XHRcdC8vIFx0XHQvLyB9XHJcblx0XHRcdC8vIFx0fSk7XHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZmluZFBhcmVudEdyb3VwIChhbGlhcywgbGlua3MpIHtcclxuXHRcdGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuXHRcdFx0aWYgKGxpbmsuYWxpYXMgJiYgbGluay5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBsaW5rO1xyXG5cclxuXHRcdFx0aWYgKGxpbmsuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBsaW5rLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0XHRpZiAoY2hpbGQuYWxpYXMgJiYgY2hpbGQuYWxpYXMgPT0gYWxpYXMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGxpbms7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIHNwbGFzaENvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0J107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJGludGVydmFsLCAkdGltZW91dCkge1xyXG5cdFx0dGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAwKTtcclxuXHR9XHJcblxyXG5cdHNraXBJbnRybyAoKSB7XHJcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBmaXhBbmFseXRpY01pc3NpbmcgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IHthcHBsaWNhdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyXCI7XHJcbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSBcIi4vcm91dGVyQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQge21haW5Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7cGFnZUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcGFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtuZXdzQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9uZXdzQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge3NwbGFzaENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlclwiO1xyXG5cclxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IG5hdmlnYXRpb25MaW5rIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uTGlua1wiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudC9mb290ZXJcIjtcclxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50L3NpZGViYXJcIjtcclxuaW1wb3J0IHN1YnNjcmlwdGlvbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm1cIjtcclxuaW1wb3J0IHBvcHVwIGZyb20gXCIuL2NvbXBvbmVudC9wb3B1cFwiO1xyXG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudC9zbGlkZXJcIjtcclxuaW1wb3J0IG5ld3NBcmVhIGZyb20gXCIuL2NvbXBvbmVudC9uZXdzQXJlYVwiO1xyXG5pbXBvcnQgbWV0YVNlcnZpY2UgZnJvbSBcIi4vbWV0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHJlZ2lzdGVyRmlsdGVyIGZyb20gXCIuL3V0aWxzL2ZpbHRlclwiO1xyXG5cclxuZ2xvYmFsLmZpeEFuYWx5dGljTWlzc2luZyA9IGZpeEFuYWx5dGljTWlzc2luZztcclxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICduZ1Byb2dyZXNzJywgJ25nVG91Y2gnLCAnbmdQYXJhbGxheCcsICdhbmd1bGFyLXNwaW5raXQnXSlcclxuXHQuY29uZmlnKHJvdXRlckNvbmZpZylcclxuXHQuY29udHJvbGxlcignYXBwQ3RybCcsIGFwcGxpY2F0aW9uQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcigncGFnZUN0cmwnLCBwYWdlQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignbmV3c0N0cmwnLCBuZXdzQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXHJcblx0LnNlcnZpY2UoJ21ldGFTZXJ2aWNlJywgbWV0YVNlcnZpY2UpXHJcblx0LmRpcmVjdGl2ZSgncG9wdXAnLCBwb3B1cClcclxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2lkZWJhcicsIHNpZGViYXIpXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRGb290ZXInLCBmb290ZXIpXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRTbGlkZXInLCBzbGlkZXIpXHJcblx0LmRpcmVjdGl2ZSgnbmV3c0FyZWEnLCBuZXdzQXJlYSlcclxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcclxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcclxuXHJcbnJlZ2lzdGVyRmlsdGVyKEFwcCk7XHJcblxyXG5BcHAucnVuKCgpID0+IHtcclxuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xyXG59KTtcclxuXHJcbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcclxuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xyXG5cdFx0fTtcclxuXHR9XHJcbl0pO1xyXG5cclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwbGljYXRpb24nXSk7IiwiaW1wb3J0IHsgbGFuZ3VhZ2VzLCBsb2NhbGl6YXRpb24gfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsICR0aW1lb3V0KSB7XHJcblx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgoY29uZmlnUmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHQkcm9vdFNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuXHRcdCRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZXNbMF07XHJcblxyXG5cdFx0JHJvb3RTY29wZS5sb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb25bJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5sYW5nXTtcclxuXHRcdCRyb290U2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5sb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb25bJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5sYW5nXTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZygkcm9vdFNjb3BlLmxvY2FsaXphdGlvbik7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmNoYW5nZUxhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuXHRcdH07XHJcblxyXG5cdFx0JGh0dHAuZ2V0KCcvY29uZmlncycpLnN1Y2Nlc3MoKGRhdGEpID0+IHtcclxuXHRcdFx0ZGF0YS5kb21haW4gPSBkYXRhLmRvbWFpbiB8fCBsb2NhdGlvbi5ob3N0O1xyXG5cdFx0XHRsZXQgY29uZmlncyA9IGRhdGEsIHsgYXBpSG9zdCwgZG9tYWluIH0gPSBjb25maWdzO1xyXG5cdFx0XHQvL092ZXJyaWRlIHRyYW5zbGF0aW9uIChpZiBwb3NzaWJsZSkuLlxyXG5cdFx0XHRsYW5ndWFnZXMuZm9yRWFjaCgoe2xhbmd9KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ10pIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddKSkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbGl6YXRpb25bbGFuZ11ba2V5XSA9IGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ11ba2V5XTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0bmV3IFByb21pc2UoKG5hdmlnYXRpb25SZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWVudS9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogeyBkb21haW4sIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoKGRhdGEpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7IHRoaXMuY29uZmlncyA9IGNvbmZpZ3M7XHJcblx0XHRcdFx0XHRuYXZpZ2F0aW9uUmVzb2x2ZSh0aGlzLmxpbmtzKTtcclxuXHRcdFx0XHRcdGNvbmZpZ1Jlc29sdmUodGhpcy5jb25maWdzKTtcclxuXHRcdFx0XHRcdC8vY29uc29sZS5sb2codGhpcy5saW5rcyk7XHJcblx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnbWV0YVNlcnZpY2VSZWFkeScpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0sMCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1dOyIsImNvbnNvbGUubG9nKFwiVGhpcyBpcyBhbnBoYWxhbmQhISFcIik7IiwiaW1wb3J0IHtwcmVsb2FkUmVzb2x2ZXN9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLFxyXG5cdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgncGFnZScsIHBhZ2VSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCduZXdzJywgbmV3c1JvdXRlKTtcclxuXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc3BsYXNoJyk7XHJcblxyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG5cdH1cclxuXTtcclxuXHJcbnZhciBzcGxhc2hSb3V0ZSA9IHtcclxuXHR1cmw6ICcvc3BsYXNoJyxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2VtcHR5TGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdzcGxhc2hDdHJsIGFzIHNwbGFzaEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIG1haW5Sb3V0ZSA9IHtcclxuXHR1cmw6ICcvJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgcGFnZVJvdXRlID0ge1xyXG5cdHVybDogJy86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBwYWdlJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcGFnZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBuZXdzUm91dGUgPSB7XHJcblx0dXJsOiAnL3Rpbi10dWMvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAbmV3cyc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICduZXdzQ3RybCBhcyBuZXdzQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcclxuXHRtb2R1bGVJbnN0YW5jZVxyXG5cdFx0LmZpbHRlcignbmljZURhdGUnLCBuaWNlRGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuaWNlRGF0ZSAoKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcclxuXHRcdHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XHJcblx0fTtcclxufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzInOy8vJ3JpdmVyY2l0eTk5LnZuJzsvL2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCcsICd1c2VyTm90ZSddO1xyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gW1xyXG5cdHtsYW5nOiBcInZpZXRuYW1lc2VcIiwgaWQ6IDEsIGRpc3BsYXk6IFwiVGnhur9uZyBWaeG7h3RcIn0sXHJcblx0Ly8ge2xhbmc6IFwiZW5nbGlzaFwiLCBpZDogMiwgZGlzcGxheTogXCJFbmdsaXNoXCJ9XHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvY2FsaXphdGlvbiA9IHtcclxuXHR2aWV0bmFtZXNlOiB7XHJcblx0XHRyZWdpc3RlcjogXCLEkMSCTkcgS8OdXCIsXHJcblx0XHRuZXdzOiBcIlRJTiBU4buoQ1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5H4buNaSA8L3NwYW4+YCxcclxuXHRcdHJlZ2lzdGVyVGl0bGVUYWlsOiBgIFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdDxzcGFuPiBob+G6t2MgZ+G7rWkgdGjDtG5nIHRpbiDEkeG7gyBuaOG6rW48L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkLDgU8gR0nDgTwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+dOG7qzwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJI4buNIHbDoCB0w6puKlwiLFxyXG5cdFx0cGhvbmVQbGFjZWhvbGRlcjogXCLEkGnhu4duIHRob+G6oWkqXCIsXHJcblx0XHRlbWFpbFBsYWNlaG9sZGVyOiBcIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiLFxyXG5cdFx0bm90ZVBsYWNlaG9sZGVyOiBcIkdoaSBjaMO6XCIsXHJcblx0XHRzZW5kOiBcIkfhu61pXCIsXHJcblx0XHRkZXNpZ25lZEJ5OiBcIlRoaeG6v3Qga+G7gyBi4bufaVwiLFxyXG5cdFx0ZGVzaWduQ29tcGFueTogYDxhIGhyZWY9XCJodHRwOi8vdHdpbi52blwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzJFQjNEMztcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UV0lOIFNvZnR3YXJlIFNvbHV0aW9uczwvYT5gXHJcblx0fSxcclxuXHRlbmdsaXNoOiB7XHJcblx0XHRyZWdpc3RlcjogXCJTVUJTQ1JJQkVcIixcclxuXHRcdG5ld3M6IFwiTkVXU1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5DYWxsIDwvc3Bhbj5gLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZVRhaWw6IGAgXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+IG9yIHN1YnNjcmliZSB0byByZWNlaXZlIDwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+UVVPVEFUSU9OPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj5mcm9tPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5JTlZFU1RPUjwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJGdWxsIG5hbWUqXCIsXHJcblx0XHRwaG9uZVBsYWNlaG9sZGVyOiBcIlBob25lKlwiLFxyXG5cdFx0ZW1haWxQbGFjZWhvbGRlcjogXCJFbWFpbCAob3B0aW9uYWwpXCIsXHJcblx0XHRub3RlUGxhY2Vob2xkZXI6IFwiTm90ZS4uXCIsXHJcblx0XHRzZW5kOiBcIlNlbmRcIixcclxuXHRcdGRlc2lnbmVkQnk6IFwiRGVzaWduZWQgYnlcIixcclxuXHRcdGRlc2lnbkNvbXBhbnk6IGA8YSBocmVmPVwiaHR0cDovL3R3aW4udm5cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyRUIzRDM7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VFdJTiBTb2Z0d2FyZSBTb2x1dGlvbnM8L2E+YFxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaXhBbmFseXRpY01pc3NpbmcgKCkge1xyXG5cdGlmICghZ2xvYmFsLmdhKSBnbG9iYWwuZ2EgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmZicSkgZ2xvYmFsLmZicSA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuYW50c191c2VySW5mb0xpc3RlbmVyKSBnbG9iYWwuYW50c191c2VySW5mb0xpc3RlbmVyID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5hbnRzX2FuYWx5dGljKSBnbG9iYWwuYW50c19hbmFseXRpYyA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcclxuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcclxuXHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlZGljYXRlKSkge1xyXG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xyXG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcclxuXHRcdGlmIChpbnN0YW5jZVtzZWFyY2hLZXldID09PSBzZWFyY2hWYWx1ZSkgcmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnRNZW51QnlBbGlhcyAoYWxpYXMsIGxpbmtzKSB7XHJcblx0Zm9yIChsZXQgZ3JvdXAgb2YgbGlua3MpIHtcclxuXHRcdGlmIChncm91cC5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBncm91cDtcclxuXHRcdGlmIChncm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBncm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGlmIChjaGlsZC5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBncm91cDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcclxuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgcHJlbG9hZFJlc29sdmVzID0ge1xyXG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcclxuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyVVVJRCAobGVuZ3RoKSB7XHJcblx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRyZXN1bHQgKz0gWzAsMSwyLDMsNCw1LDYsNyw4LDldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUmFuZ2UgKHZhbHVlLCBtaW4sIG1heCkge1xyXG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcclxuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZm9udCkge1xyXG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXHJcblx0XHRvID0gJCgnPGRpdj4nICsgdGhpcyArICc8L2Rpdj4nKVxyXG5cdFx0XHQuY3NzKHsncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAnZmxvYXQnOiAnbGVmdCcsICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLCAndmlzaWJpbGl0eSc6ICdoaWRkZW4nLCAnZm9udCc6IGZ9KVxyXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcclxuXHRcdHcgPSBvLndpZHRoKCk7XHJcblxyXG5cdG8ucmVtb3ZlKCk7XHJcblxyXG5cdHJldHVybiB3O1xyXG59O1xyXG5cclxuZ2xvYmFsLnV1aWQgPSBnZW5lcmF0ZU51bWJlclVVSUQ7Il19
