(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: { modal: '@', submitText: '@' },
        template: '<form>\n                    <div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.cardTitleHead | unsafe"></span>\n\t\t\t\t<span style="color:#fa8322;" class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span ng-bind-html="$root.localization.cardTitleTail | unsafe"></span>\n\t\t\t\t\n\t\t\t</div>  \n                </form>\n        ',

        link: function link(scope, element, attrs) {
            var _metaService$configs = metaService.configs;
            var apiHost = _metaService$configs.apiHost;
            var domain = _metaService$configs.domain;

            scope.configs = metaService.configs;
            scope.appCtrl = $rootScope.appCtrl;
        }
    };
}];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$rootScope', '$http', function ($rootScope, $http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { columns: '=' },
		template: '<div id="footer" class="footer">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="columns">\n\t\t\t\t\t<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="copyright">\n\t\t\t\t<div class="light-row">\n\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t<div class="language-choice" ng-repeat="language in $root.languages" \n\t\t\t\t\t\t\t\t ng-class="{active: languageActive(language)}" \n\t\t\t\t\t\t\t\t ng-click="$root.changeLanguage(language)"\n\t\t\t\t\t\t\t\t ng-bind="language.display"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t<span ng-bind="$root.localization.designedBy"></span>\n\t\t\t\t    <a href="http://twin.vn" style="text-decoration:none;color:#2EB3D3;" target="_blank">TWIN Software Solutions</a>\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.languageActive = function (instance) {
				return instance.id == $rootScope.activeLanguage.id;
			};
		}
	};
}];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});

var _helper = require('../utils/helper');

exports.default = ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
				return {
								restrict: 'E',
								replace: true,
								scope: { modal: '@', submitText: '@' },
								template: '<form ng-class="modal" ng-submit="submit($event)">\n\t\t\t\t\n\t\t\t<!--<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()">close</div>-->\n\t\t\t<!--<div class="icon-navigation-close" style="text-align: right" ng-click="appCtrl.closeRegisterForm()"></div>-->\n\t\t\t<!--<div style="cursor: pointer" ng-click="appCtrl.closeRegisterForm()">close</div>-->\n\t\t\t<div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>\n\t\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>\n\t\t\t</div>\n\t\t\t<fieldset>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>\n\t\t\t\n\t\t\t\n\t\t\t<label for="job">Chọn dòng xe:   </label>\n\t\t\t<select id="job" name="user_job" ng-model="appCtrl.userType">\n\t\t\t\t<option>Fore Fiesta</option>\n\t\t\t\t<option>Fore Ranger</option>\n\t\t\t\t<option>Fore Everest</option>\n\t\t\t\t<option>Fore Transit</option>\n\t\t\t\t<option>Fore New Focus</option>\n\t\t\t\t<option>Fore EcoSport</option>\t\t\t\t\n\t\t\t</select>\n\t\t\t\n\t\t\t<!--<input required="required" checked name="pay" type="radio" value="Trả Góp" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Góp</label>-->\n\t\t\t<!--<input name="pay" type="radio" value="Trả Hết" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Hết</label>-->\n\t\t\t\n\t\t\t\n\t\t\t<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>\n\t\t\t\n\t\t\t<label for="area">Chọn khu vực:   </label>\n\t\t\t<select required="required" id="area" name="user_area" ng-model="appCtrl.userArea">\n\t\t\t\t<option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>\n\t\t\t\t<option>Bình Dương</option>\n\t\t\t\t<option>Đồng Nai</option>\n\t\t\t\t<option>Bà Rịa - Vũng Tàu</option>\t\t\n\t\t\t\t<option>Bình Phước</option>\n\t\t\t\t<option>Bình Thuận</option>\n\t\t\t\t<option>Tây Ninh</option>\n\t\t\t\t<option>Khác</option>\n\t\t\t</select>\n\t\t\t\n\t\t\t<label for="date">Ngày lái thử:   </label>\n\t\t\t<input ng-model="appCtrl.userDate" type="date"/>\n\t\t\t\n\t\t\t<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>\n            <div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>\n\t\t\t</div>\n\t\t\t<!--<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>-->\n\t\t\t </fieldset>\n\t\t\t\n\t\t</form>',
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


var fields = ['userName', 'userPhone', 'userEmail', 'userType', 'userCate', 'userArea', 'userDate'];

},{"../utils/helper":24}],4:[function(require,module,exports){
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
        template: '<div class="modalOne-backdrop" ng-class="{active: enable}" ng-click="closeModal()">\n\t\t\t<div class="modalOne-wrapper" ng-click="toggle($event)">\n\t\t\t    <ng-transclude></ng-transclude>\n            </div>\n\t\t</div>',
        link: function link(scope, element, attrs) {
            scope.closeModal = function () {
                scope.enable = false;
            };

            scope.toggle = function (e) {
                e.stopPropagation();
            };
        }
    };
}];

},{}],5:[function(require,module,exports){
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
		template: '<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">\n\t\t\t<div class="content-wrapper">\n\t\t\t\t<div class="site-logo" ui-sref="home"></div>\n\t\t\t\t\n\t\t\t\t<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>\n\t\t\t\t<!--<div class="subscription-activator" ng-click="togglePopup()" ng-bind="$root.localization.register"></div>-->\n\t\t\t\t<div class="subscription-activator" ng-click="toggleModalPopup()" ng-bind="$root.localization.register"></div>\n\t\t\t\t<div class="navigation-menu">\n\t\t\t\t\t<navigation-link instance="link" ng-repeat="link in links"></navigation-link>\n\t\t\t\t\t<!--<div class="navigation-link" ng-class="{active: childproductActiveClass()}">-->\n\t\t\t\t\t\t<!--<div class="parent-link" ui-sref="childProduct" ng-bind="$root.localization.childproduct"></div>-->\n\t\t\t\t\t<!--</div>-->\n\t\t\t\t\t<div class="navigation-link" ng-class="{active: productActiveClass()}">\n\t\t\t\t\t\t<div class="parent-link" ui-sref="product" ng-bind="$root.localization.product"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="navigation-link" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="parent-link" ui-sref="news" ng-bind="$root.localization.news"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">\n\t\t\t\t<div class="backdrop" ng-click="toggleBurger()">\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class="burger-menu">\n\t\t\t\t\t<!--<div class="menu-heading" ng-click="toggleBurger()"></div>-->\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">\n\t\t\t\t\t\t<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>\n\t\t\t\t\t\t<div class="sub-menus" ng-if="item.children">\n\t\t\t\t\t\t\t<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"\n\t\t\t\t\t\t\t\tui-sref="page({alias: child.alias})" ng-click="toggleBurger()"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: productActiveClass()}">\n\t\t\t\t\t\t<div class="menu-item" ui-sref="product" ng-click="toggleBurger()" ng-bind="$root.localization.product"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="menu-item-wrapper" ng-class="{active: newsActiveClass()}">\n\t\t\t\t\t\t<div class="menu-item" ui-sref="news" ng-click="toggleBurger()" ng-bind="$root.localization.news"></div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.links = metaService.links;

			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
			};

			scope.toggleModalPopup = function () {
				scope.$parent.appCtrl.modalPopup = !scope.$parent.appCtrl.modalPopup;
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
			scope.productActiveClass = function () {
				return $state.current.name === 'product';
			};
			scope.childproductActiveClass = function () {
				return $state.current.name === 'ford';
			};
		}
	};
}];

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = ['$rootScope', '$http', function ($rootScope, $http) {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: '<div class="section-canvas top-separated news-area">\n\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>',
		link: function link(scope, element, attrs) {}
	};
}];

},{}],8:[function(require,module,exports){
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
		template: '<div class="popup-wrapper" ng-class="{active: enable}">\n\t\t\t<div class="popup-backdrop" ng-click="toggle()"></div>\n\t\t\t<div class="popup-content">\n\t\t\t\t<ng-transclude></ng-transclude>\n\t\t</div>\n\t\t</div>',
		link: function link(scope, element, attrs) {
			scope.toggle = function () {
				scope.enable = !scope.enable;
			};
		}
	};
}];

},{}],9:[function(require,module,exports){
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
		template: '<div class="sidebar-wrapper" ng-style="{transform: \'translate(0,\'+topPosition+\'px)\'}">\n\t\t\t<!--<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>-->\n\t\t\t<!--<div class="small-banner"></div>-->\n\t\t\t<ng-transclude></ng-transclude>\n\t\t\t<!--<subscription-form modal="subscription-form sidebar"></subscription-form>-->\n\t\t\t<div class="sidebar-news">\n\t\t\t\t<div class="heading" ng-bind="$root.localization.news"></div>\n\t\t\t\t<div class="news-summary" ng-repeat="newsItem in news" ui-sref="news({alias: newsItem.Post.alias})">\n\t\t\t\t\t<div class="thumb-image" ng-style="{\'background-image\': \'url(\'+newsItem.Post.image+\')\'}"></div>\n\t\t\t\t\t<div class="title" ng-bind="newsItem.Post.title"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>',
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('../utils/helper');

exports.default = ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { modal: '@', submitText: '@' },
		template: '<form ng-class="modal" ng-submit="submit($event)">\n\t\t\t\t\n\t\t\t<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>\n\t\t\t<div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>\n\t\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>\n\t\t\t</div>\n\t\t\t<fieldset>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>\n\t\t\t\n\t\t\t\n\t\t\t<label for="job">Chọn dòng xe:   </label>\n\t\t\t<select id="job" name="user_job" ng-model="appCtrl.userType">\n\t\t\t\t<option>Fore Fiesta</option>\n\t\t\t\t<option>Fore Ranger</option>\n\t\t\t\t<option>Fore Everest</option>\n\t\t\t\t<option>Fore Transit</option>\n\t\t\t\t<option>Fore New Focus</option>\n\t\t\t\t<option>Fore EcoSport</option>\t\t\n\t\t\t</select>\n\t\t\t\n\t\t\t \n     \n          <label>Hình thức thanh toán:</label>\n          <input required="required" type="radio" id="under_13" value="Trả Góp" ng-model="appCtrl.userCate" name="user_age"><label style="padding-right: 20px" for="under_13" class="light">Trả Góp</label>\n          <input type="radio" id="over_13" value="Trả Hết" ng-model="appCtrl.userCate" name="user_age"><label  for="over_13" class="light">Trả hết</label>\n       \n\t\t\t\n\t\t\t<!--<input required="required" checked name="pay" type="radio" value="Trả Góp" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Góp</label>-->\n\t\t\t<!--<input name="pay" type="radio" value="Trả Hết" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Hết</label>-->\n\t\t\t\n\t\t\t\n\t\t\t<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>\n\t\t\t<input style="margin-top: 10px;" type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>\n\t\t\t\n\t\t\t<label for="area">Chọn khu vực:   </label>\n\t\t\t<select required="required" id="area" name="user_area" ng-model="appCtrl.userArea">\n\t\t\t\t<option>TP Hồ Chí Minh</option>\n\t\t\t\t<option>Bình Dương</option>\n\t\t\t\t<option>Đồng Nai</option>\n\t\t\t\t<option>Bà Rịa - Vũng Tàu</option>\t\t\n\t\t\t\t<option>Bình Phước</option>\n\t\t\t\t<option>Bình Thuận</option>\n\t\t\t\t<option>Tây Ninh</option>\n\t\t\t\t<option>Khác</option>\n\t\t\t</select>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>\n\n\t\t\t<!--<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>-->\n\t\t\t <div class="commands">\n\t\t\t\t<div class="social-button facebook" ng-click="facebookLogin()"></div>\n\t\t\t\t<div class="social-button google" ng-click="googleLogin()"></div>\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>\n\t\t\t</div>\n\t\t\t </fieldset>\n\t\t\t\n\t\t</form>',
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


var fields = ['userName', 'userPhone', 'userEmail', 'userType', 'userCate', 'userArea', 'userDate'];

},{"../utils/helper":24}],12:[function(require,module,exports){
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
	this.modalPopup = false;

	$rootScope.configs = metaService.configs; //Will be undefined at first => not safe for normal usage, just for translation!
	$rootScope.appCtrl = this;
	this.modalOneActive = false;
	this.modalTwoActive = false;
	this.modalThreeActive = false;
	this.name = "Cloud!";
	$rootScope.activeContents = [];
	this.progress = ngProgressFactory.createInstance();
	this.progress.setColor('#FA8322');
	global.$http = $http;

	global.toggleModal = function (newVall) {
		$scope.$apply(function () {
			_this.modalPopup = newVall ? newVall : !_this.modalPopup;
		});
	};

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
		_this.modalThreeActive = false;
		console.log(_this.modalThreeActive);
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
		if (_this['userType'].length < 8) _this['userTypeError'] = 'Nhập Tyeeeee';
		if (_this['userNameError'] || _this['userPhoneError'] || _this['userTypeError']) return;

		var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
		    formData = _extends({}, localUserInfo, {
			domain: domain,
			fullName: _this['userName'],
			name: _this['userName'],
			type: _this['userType'],
			cate: _this['userCate'],
			phone: _this['userPhone'],
			area: _this['userArea'],
			date: _this['userDate'],
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
		_this.modalPopup = false;

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
			_this.userCate = _userInfo.cate || '';
			_this.userType = _userInfo.type || '';
			_this.userArea = _userInfo.area || '';
			_this.userNote = _userInfo.note || '';

			//Store Social profile
			if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
		});
	};
};

applicationController.$inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory', 'metaService'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../utils/helper":24}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var childproductController = exports.childproductController = function childproductController($rootScope, $scope, $window, $http, $state, metaService) {
    var _this = this;

    _classCallCheck(this, childproductController);

    var _metaService$configs = metaService.configs;
    var apiHost = _metaService$configs.apiHost;
    var domain = _metaService$configs.domain;


    this.modalOneActive = false;
    this.modalTwoActive = false;
    this.modalThreeActive = false;

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

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordfiesta', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordFie = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordranger', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordRan = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordeverest', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordEve = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordecosport', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordEco = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordtransit', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordTra = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordfocus', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordFoc = data.results;
            });
        } else {
            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'news', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');
                _this.allNews = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordecosport', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordEcosport = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordranger', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordRanger = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordeverest', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordEverest = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordfiesta', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordFiesta = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordtransit', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordTransit = data.results;
            });

            $http.get(apiHost + '/banner/get/json', {
                params: { domain: domain, type: 'fordfocus', lang: $rootScope.activeLanguage.id }
            }).success(function (data) {
                fbq('track', 'ViewContent');

                _this.allfordFoccus = data.results;
            });
        }
    };
    this.loadData();
    $scope.$watch('activeLanguage', function () {

        _this.loadData();
    });
};

childproductController.$inject = ['$rootScope', '$scope', '$window', '$http', '$state', 'metaService'];

},{}],14:[function(require,module,exports){
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

	this.modalOneActive = false;
	this.modalTwoActive = false;
	this.modalThreeActive = false;

	this.closeRegisterForm = function () {
		_this.modalThreeActive = false;
		alert('heyyy');
	};

	this.submitModalOne = function () {
		console.log('heheheh');
	};

	// this.showModalOne  = () => {
	// 	console.log("??");
	// 	this.modalOneActive = true;
	// };

	//Tracking code..
	ga('send', 'pageview');
	fbq('track', "PageView");
	this.hidden = false;
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

	this.sliderHeight = $(window).height() - 70;
	$rootScope.$on('sizeChange', function (event, size) {
		$scope.$apply(function () {
			_this.sliderHeight = size.height > 570 ? size.height - 70 : 500;
		});
	});
};

mainController.$inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

},{}],15:[function(require,module,exports){
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

	this.modalOneActive = false;
	this.modalTwoActive = false;
	this.modalThreeActive = false;

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

},{}],16:[function(require,module,exports){
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


		this.modalOneActive = false;
		this.modalTwoActive = false;
		this.modalThreeActive = false;

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

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productCateMenuController = exports.productCateMenuController = function () {
    function productCateMenuController($rootScope, $scope, $timeout) {
        _classCallCheck(this, productCateMenuController);

        this.subMenus = subMenus;

        this.name = "Cloud";
        this.$timeout = $timeout;
        console.log(this.subMenus);
    }

    _createClass(productCateMenuController, [{
        key: 'scrollTo',
        value: function scrollTo(elementId) {
            this.$timeout(function () {
                var scrollOffset = angular.element('#' + elementId).offset().top - 50;
                TweenLite.to(window, 1, { scrollTo: { y: scrollOffset }, ease: Power2.easeOut });
            }, 800);
        }
    }]);

    return productCateMenuController;
}();

productCateMenuController.$inject = ['$rootScope', '$scope', '$timeout'];


var subMenus = [{ title: 'Giới thiệu chung', contentId: "gioithieuchung" }, { title: 'Công nghệ', contentId: "congnghe" }, { title: 'Màu sắc', contentId: "mausac" }, { title: 'Thông số kỹ thuật', contentId: "thongsokythuat" }];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var productController = exports.productController = function productController($rootScope, $window, $http, $state, metaService) {
	var _this = this;

	_classCallCheck(this, productController);

	var _metaService$configs = metaService.configs;
	var apiHost = _metaService$configs.apiHost;
	var domain = _metaService$configs.domain;


	this.modalOneActive = false;
	this.modalTwoActive = false;
	this.modalThreeActive = false;
	//Tracking code..
	ga('send', 'pageview');
	fbq('track', "PageView");

	$rootScope.activeGroup = null;

	this.pageAlias = $state.params.alias;
	$window.scrollTo(0, 0);
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
			params: { domain: domain, type: 'product', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			fbq('track', 'ViewContent');

			_this.allProduct = data.results;
		});
	}
};

productController.$inject = ['$rootScope', '$window', '$http', '$state', 'metaService'];

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
(function (global){
"use strict";

var _helper = require("./utils/helper");

var _applicationController = require("./controller/applicationController");

var _routerConfig = require("./routerConfig");

var _routerConfig2 = _interopRequireDefault(_routerConfig);

var _mainController = require("./controller/mainController");

var _pageController = require("./controller/pageController");

var _newsController = require("./controller/newsController");

var _productController = require("./controller/productController");

var _childproductController = require("./controller/childproductController");

var _splashController = require("./controller/splashController");

var _productCateMenuController = require("./controller/partial/productCateMenuController");

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

var _modal = require("./component/modal");

var _modal2 = _interopRequireDefault(_modal);

var _modalOne = require("./component/modalOne");

var _modalOne2 = _interopRequireDefault(_modalOne);

var _card = require("./component/card");

var _card2 = _interopRequireDefault(_card);

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
var App = angular.module('application', ['ui.router', 'ngAnimate', 'ngProgress', 'ngTouch', 'ngParallax', 'angular-spinkit']).config(_routerConfig2.default).controller('appCtrl', _applicationController.applicationController).controller('mainCtrl', _mainController.mainController).controller('pageCtrl', _pageController.pageController).controller('newsCtrl', _newsController.newsController).controller('productCtrl', _productController.productController).controller('childproductCtrl', _childproductController.childproductController).controller('splashCtrl', _splashController.splashController).controller('productCateMenuCtrl', _productCateMenuController.productCateMenuController).service('metaService', _metaService2.default).directive('popup', _popup2.default).directive('lightNavigation', _navigation2.default).directive('lightSidebar', _sidebar2.default).directive('lightFooter', _footer2.default).directive('lightSlider', _slider2.default).directive('newsArea', _newsArea2.default).directive('modal', _modal2.default).directive('modalOne', _modalOne2.default).directive('card', _card2.default).directive('subscriptionForm', _subscriptionForm2.default).directive('navigationLink', _navigationLink2.default);

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

},{"./component/card":1,"./component/footer":2,"./component/modal":3,"./component/modalOne":4,"./component/navigation":5,"./component/navigationLink":6,"./component/newsArea":7,"./component/popup":8,"./component/sidebar":9,"./component/slider":10,"./component/subscriptionForm":11,"./controller/applicationController":12,"./controller/childproductController":13,"./controller/mainController":14,"./controller/newsController":15,"./controller/pageController":16,"./controller/partial/productCateMenuController":17,"./controller/productController":18,"./controller/splashController":19,"./metaService":21,"./routerConfig":22,"./utils/filter":23,"./utils/helper":24}],21:[function(require,module,exports){
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

},{"./utils/helper":24}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _helper = require('./utils/helper');

var routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider) {
	$stateProvider.state('splash', splashRoute).state('home', mainRoute).state('page', pageRoute).state('news', newsRoute).state('childProduct', childproductRoute).state('fordEcosport', fordecosportRoute).state('fordEverest', fordeverestRoute).state('fordFocus', fordfocusRoute).state('fordRanger', fordrangerRoute).state('fordTransit', fordtransitRoute).state('product', productRoute);

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

var productRoute = {
	url: '/san-pham/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@product': {
			templateUrl: 'template/home/product.html',
			controller: 'productCtrl as productCtrl'
		}
	}
};

var childproductRoute = {
	url: '/ford-fiesta/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@childProduct': {
			templateUrl: 'template/fordProduct/childProduct.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordecosportRoute = {
	url: '/ford-ecosport/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@fordEcosport': {
			templateUrl: 'template/fordProduct/fordEcosport.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordeverestRoute = {
	url: '/ford-everest/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@fordEverest': {
			templateUrl: 'template/fordProduct/fordEverest.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordfocusRoute = {
	url: '/ford-focus/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@fordFocus': {
			templateUrl: 'template/fordProduct/fordFocus.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordrangerRoute = {
	url: '/ford-ranger/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@fordRanger': {
			templateUrl: 'template/fordProduct/fordRanger.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordtransitRoute = {
	url: '/ford-transit/:alias',
	resolve: {
		meta: function meta(metaService) {
			return metaService.promise;
		}
	},
	views: {
		'layout': { templateUrl: 'template/mainLayout.html' },
		'content@fordTransit': {
			templateUrl: 'template/fordProduct/fordTransit.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};
exports.default = routerConfig;

},{"./utils/helper":24}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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
var registerFields = exports.registerFields = ['userName', 'userPhone', 'userEmail', 'userNote', 'userType', 'userCate', 'userDate'];
var languages = exports.languages = [{ lang: "vietnamese", id: 1, display: "Tiếng Việt" }];

var localization = exports.localization = {
	vietnamese: {
		register: "LIÊN HỆ",
		news: "TIN TỨC",
		registerTitleHead: '<span>Gọi </span>',
		registerTitleTail: ' \n\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t<span> hoặc gửi thông tin để nhận</span> \n\t\t\t<span class="strong">BÁO GIÁ</span>\n\t\t\t<span>từ</span> \n\t\t\t<span class="strong">CHỦ ĐẦU TƯ</span>',
		fullNamePlaceholder: "Họ và tên*",
		typePlaceholder: "nhập type",
		phonePlaceholder: "Điện thoại*",
		emailPlaceholder: "Email (không bắt buộc)",
		notePlaceholder: "Ghi chú",
		send: "Gửi",
		designedBy: "Thiết kể bởi"
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
		designedBy: "Designed by"
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

},{}]},{},[20])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcY2FyZC5qcyIsImFwcFxcY29tcG9uZW50XFxmb290ZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWwuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWxPbmUuanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbi5qcyIsImFwcFxcY29tcG9uZW50XFxuYXZpZ2F0aW9uTGluay5qcyIsImFwcFxcY29tcG9uZW50XFxuZXdzQXJlYS5qcyIsImFwcFxcY29tcG9uZW50XFxwb3B1cC5qcyIsImFwcFxcY29tcG9uZW50XFxzaWRlYmFyLmpzIiwiYXBwXFxjb21wb25lbnRcXGFwcFxcY29tcG9uZW50XFxzbGlkZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcc3Vic2NyaXB0aW9uRm9ybS5qcyIsImFwcFxcY29udHJvbGxlclxcYXBwXFxjb250cm9sbGVyXFxhcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXGNoaWxkcHJvZHVjdENvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXG1haW5Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxuZXdzQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxccGFnZUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhcnRpYWxcXHByb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHByb2R1Y3RDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpb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LFFBQVEsWUFBaEI7QUFBQSxLQUNDLElBQUksRUFBRSxVQUFVLElBQVYsR0FBaUIsUUFBbkIsRUFDRixHQURFLENBQ0UsRUFBQyxZQUFZLFVBQWIsRUFBeUIsU0FBUyxNQUFsQyxFQUEwQyxlQUFlLFFBQXpELEVBQW1FLGNBQWMsUUFBakYsRUFBMkYsUUFBUSxDQUFuRyxFQURGLEVBRUYsUUFGRSxDQUVPLEVBQUUsTUFBRixDQUZQLENBREw7QUFBQSxLQUlDLElBQUksRUFBRSxLQUFGLEVBSkw7O0FBTUEsR0FBRSxNQUFGOztBQUVBLFFBQU8sQ0FBUDtBQUNBLENBVkQ7O0FBWUEsT0FBTyxJQUFQLEdBQWMsa0JBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBtZXRhU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICBzY29wZToge21vZGFsOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJ30sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5jYXJkVGl0bGVIZWFkIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIHN0eWxlPVwiY29sb3I6I2ZhODMyMjtcIiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLmNhcmRUaXRsZVRhaWwgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvZGl2PiAgXHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYCxcclxuXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG4gICAgICAgICAgICBzY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuICAgICAgICAgICAgc2NvcGUuYXBwQ3RybCA9ICRyb290U2NvcGUuYXBwQ3RybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGNvbHVtbnM6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGlkPVwiZm9vdGVyXCIgY2xhc3M9XCJmb290ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5zXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCIgbmctcmVwZWF0PVwiY29sdW1uIGluIGNvbHVtbnNcIiBuZy1iaW5kLWh0bWw9XCJjb2x1bW4uUG9zdC5jb250ZW50IHwgdW5zYWZlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJsaWdodC1yb3dcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxhbmd1YWdlLWNob2ljZVwiIG5nLXJlcGVhdD1cImxhbmd1YWdlIGluICRyb290Lmxhbmd1YWdlc1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWNsYXNzPVwie2FjdGl2ZTogbGFuZ3VhZ2VBY3RpdmUobGFuZ3VhZ2UpfVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWNsaWNrPVwiJHJvb3QuY2hhbmdlTGFuZ3VhZ2UobGFuZ3VhZ2UpXCJcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1iaW5kPVwibGFuZ3VhZ2UuZGlzcGxheVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24uZGVzaWduZWRCeVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgPGEgaHJlZj1cImh0dHA6Ly90d2luLnZuXCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246bm9uZTtjb2xvcjojMkVCM0QzO1wiIHRhcmdldD1cIl9ibGFua1wiPlRXSU4gU29mdHdhcmUgU29sdXRpb25zPC9hPlx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRzY29wZS5sYW5ndWFnZUFjdGl2ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpbnN0YW5jZS5pZCA9PSAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkO1xyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBtZXRhU2VydmljZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHsgbW9kYWw6ICdAJywgc3VibWl0VGV4dDogJ0AnIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8Zm9ybSBuZy1jbGFzcz1cIm1vZGFsXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiYXBwQ3RybC5jbG9zZVJlZ2lzdGVyRm9ybSgpXCI+Y2xvc2U8L2Rpdj4tLT5cclxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCIgbmctY2xpY2s9XCJhcHBDdHJsLmNsb3NlUmVnaXN0ZXJGb3JtKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0PCEtLTxkaXYgc3R5bGU9XCJjdXJzb3I6IHBvaW50ZXJcIiBuZy1jbGljaz1cImFwcEN0cmwuY2xvc2VSZWdpc3RlckZvcm0oKVwiPmNsb3NlPC9kaXY+LS0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVIZWFkIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZVRhaWwgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5mdWxsTmFtZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5hbWVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImpvYlwiPkNo4buNbiBkw7JuZyB4ZTogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IGlkPVwiam9iXCIgbmFtZT1cInVzZXJfam9iXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJUeXBlXCI+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEZpZXN0YTwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBSYW5nZXI8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRXZlcmVzdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBUcmFuc2l0PC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIE5ldyBGb2N1czwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBFY29TcG9ydDwvb3B0aW9uPlx0XHRcdFx0XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLTxpbnB1dCByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2hlY2tlZCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBHw7NwXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIvPi0tPlxyXG5cdFx0XHQ8IS0tPGxhYmVsPlRy4bqjIEfDs3A8L2xhYmVsPi0tPlxyXG5cdFx0XHQ8IS0tPGlucHV0IG5hbWU9XCJwYXlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlRy4bqjIEjhur90XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIvPi0tPlxyXG5cdFx0XHQ8IS0tPGxhYmVsPlRy4bqjIEjhur90PC9sYWJlbD4tLT5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlclBob25lRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlclBob25lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5waG9uZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlclBob25lXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImFyZWFcIj5DaOG7jW4ga2h1IHbhu7FjOiAgIDwvbGFiZWw+XHJcblx0XHRcdDxzZWxlY3QgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGlkPVwiYXJlYVwiIG5hbWU9XCJ1c2VyX2FyZWFcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckFyZWFcIj5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVFAgSOG7kyBDaMOtIE1pbmhcIj5UUCBI4buTIENow60gTWluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggRMawxqFuZzwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+xJDhu5NuZyBOYWk8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDoCBS4buLYSAtIFbFqW5nIFTDoHU8L29wdGlvbj5cdFx0XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6xuaCBQaMaw4bubYzwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggVGh14bqtbjwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+VMOieSBOaW5oPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5LaMOhYzwvb3B0aW9uPlxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJkYXRlXCI+TmfDoHkgbMOhaSB0aOG7rTogICA8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJEYXRlXCIgdHlwZT1cImRhdGVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmVtYWlsUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRW1haWxcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBmYWNlYm9va1wiIG5nLWNsaWNrPVwiZmFjZWJvb2tMb2dpbigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAkcm9vdC5sb2NhbGl6YXRpb24uc2VuZFwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ubm90ZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxyXG5cdFx0XHQgPC9maWVsZHNldD5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvcm0+YCxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG4gICAgICAgICAgICBzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG4gICAgICAgICAgICBzY29wZS5zdWJtaXQgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYW50c19nb29nbGVBdXRoQ2xpY2soKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNjb3BlLmZhY2Vib29rTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBhbnRzX2ZiQXV0aENsaWNrKCdsb2dpbicpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufV1cclxuXHJcbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCcsICd1c2VyVHlwZScsICd1c2VyQ2F0ZScsICd1c2VyQXJlYScsJ3VzZXJEYXRlJ107IiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtb2RhbE9uZS1iYWNrZHJvcFwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiIG5nLWNsaWNrPVwiY2xvc2VNb2RhbCgpXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbE9uZS13cmFwcGVyXCIgbmctY2xpY2s9XCJ0b2dnbGUoJGV2ZW50KVwiPlxyXG5cdFx0XHQgICAgPG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG4gICAgICAgICAgICBzY29wZS5jbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuZW5hYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNjb3BlLnRvZ2dsZSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7XHJcblx0XHRcdHJlYWR5OiAnPScsXHJcblx0XHRcdGJ1cmdlckFjdGl2ZTogJz0nXHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YnVyZ2VyaW5nOiBidXJnZXJBY3RpdmUsIHJlYWR5OiByZWFkeX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaXRlLWxvZ29cIiB1aS1zcmVmPVwiaG9tZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS1hY3RpdmF0b3IgaWNvbi1uYXZpZ2F0aW9uLW1lbnVcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XHJcblx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVQb3B1cCgpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWJzY3JpcHRpb24tYWN0aXZhdG9yXCIgbmctY2xpY2s9XCJ0b2dnbGVNb2RhbFBvcHVwKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbWVudVwiPlxyXG5cdFx0XHRcdFx0PG5hdmlnYXRpb24tbGluayBpbnN0YW5jZT1cImxpbmtcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGxpbmtzXCI+PC9uYXZpZ2F0aW9uLWxpbms+XHJcblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogY2hpbGRwcm9kdWN0QWN0aXZlQ2xhc3MoKX1cIj4tLT5cclxuXHRcdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJjaGlsZFByb2R1Y3RcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLmNoaWxkcHJvZHVjdFwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdFx0PCEtLTwvZGl2Pi0tPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogcHJvZHVjdEFjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJwcm9kdWN0XCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5wcm9kdWN0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiB1aS1zcmVmPVwibmV3c1wiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGJ1cmdlckFjdGl2ZX1cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnVcIj5cclxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibWVudS1oZWFkaW5nXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmFjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpbmtzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiBuZy1iaW5kPVwiaXRlbS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51c1wiIG5nLWlmPVwiaXRlbS5jaGlsZHJlblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudSBzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwiY2hpbGQubmFtZVwiIG5nLXJlcGVhdD1cImNoaWxkIGluIGl0ZW0uY2hpbGRyZW5cIlxyXG5cdFx0XHRcdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBjaGlsZC5hbGlhc30pXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBwcm9kdWN0QWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJwcm9kdWN0XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ucHJvZHVjdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IG5ld3NBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgdWktc3JlZj1cIm5ld3NcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0c2NvcGUubGlua3MgPSBtZXRhU2VydmljZS5saW5rcztcclxuXHJcblx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlciA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5idXJnZXJBY3RpdmUgPSAhc2NvcGUuYnVyZ2VyQWN0aXZlO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnRvZ2dsZU1vZGFsUG9wdXAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuJHBhcmVudC5hcHBDdHJsLm1vZGFsUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLm1vZGFsUG9wdXA7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UuYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjb3BlLnRvZ2dsZUJ1cmdlcigpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUubmV3c0FjdGl2ZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09PSAnbmV3cyc7XHJcblx0XHRcdH1cclxuXHRcdFx0c2NvcGUucHJvZHVjdEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09PSAncHJvZHVjdCc7XHJcblx0XHRcdH1cclxuXHRcdFx0c2NvcGUuY2hpbGRwcm9kdWN0QWN0aXZlQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICdmb3JkJztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufV07IiwibGV0IG1haW5Gb250ID0gXCIxNHB4ICdPcGVuIFNhbnMnXCIsIGNoaWxkRm9udCA9IFwiMTNweCAnT3BlbiBTYW5zJ1wiLCBwYWRkaW5nID0gODA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRodHRwJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRodHRwLCAkcm9vdFNjb3BlLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHtcclxuXHRcdFx0aW5zdGFuY2U6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLXN0eWxlPVwie3dpZHRoOiBtYXhXaWR0aCsncHgnfVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbGlua0FjdGl2ZUNsYXNzKGluc3RhbmNlKX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgbmctYmluZD1cImluc3RhbmNlLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpbnN0YW5jZSlcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1uYXZpZ2F0aW9ucyBpY29uLW5hdmlnYXRpb24tYXJyb3ctZHJvcC11cFwiIG5nLWlmPVwiaW5zdGFuY2UuY2hpbGRyZW5cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImxpbmsubmFtZVwiIG5nLXJlcGVhdD1cImxpbmsgaW4gaW5zdGFuY2UuY2hpbGRyZW5cIlxyXG5cdFx0XHRcdFx0dWktc3JlZj1cInBhZ2Uoe2FsaWFzOiBsaW5rLmFsaWFzfSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRzY29wZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0c2NvcGUubWF4V2lkdGggPSBzY29wZS5pbnN0YW5jZS5uYW1lLndpZHRoKG1haW5Gb250KSArIHBhZGRpbmc7XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4gJiYgc2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0c2NvcGUuaW5zdGFuY2UuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRsZXQgY3VycmVudFdpZHRoID0gY2hpbGQubmFtZS53aWR0aChjaGlsZEZvbnQpICsgcGFkZGluZztcclxuXHRcdFx0XHRcdGlmIChjdXJyZW50V2lkdGggPiBzY29wZS5tYXhXaWR0aCkge1xyXG5cdFx0XHRcdFx0XHRzY29wZS5tYXhXaWR0aCA9IGN1cnJlbnRXaWR0aDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NvcGUubGlua0FjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0cmV0dXJuICRyb290U2NvcGUuYWN0aXZlR3JvdXAgJiYgJHJvb3RTY29wZS5hY3RpdmVHcm91cC5pZCA9PT0gaW5zdGFuY2UuaWQ7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5wYXJlbnRMaW5rTmF2aWdhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UuYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSBpZiAoaW5zdGFuY2UuY2hpbGRyZW5bMF0gJiYgaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXMpIHtcclxuXHRcdFx0XHRcdCRzdGF0ZS5nbygncGFnZScsIHthbGlhczogaW5zdGFuY2UuY2hpbGRyZW5bMF0uYWxpYXN9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzZWN0aW9uLWNhbnZhcyB0b3Atc2VwYXJhdGVkIG5ld3MtYXJlYVwiPlxyXG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwicG9wdXAtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogZW5hYmxlfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtYmFja2Ryb3BcIiBuZy1jbGljaz1cInRvZ2dsZSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1jb250ZW50XCI+XHJcblx0XHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHRzY29wZS50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuZW5hYmxlID0gIXNjb3BlLmVuYWJsZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJjb25zdCBpbml0aWFsVG9wT2Zmc2V0ID0gMTIxO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJzaWRlYmFyLXdyYXBwZXJcIiBuZy1zdHlsZT1cInt0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwnK3RvcFBvc2l0aW9uKydweCknfVwiPlxyXG5cdFx0XHQ8IS0tPHN1YnNjcmlwdGlvbi1mb3JtIHdyYXBwZXItY2xhc3M9XCJzdWJzY3JpcHRpb24tZm9ybSBzaWRlYmFyXCI+PC9zdWJzY3JpcHRpb24tZm9ybT4tLT5cclxuXHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzbWFsbC1iYW5uZXJcIj48L2Rpdj4tLT5cclxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0XHQ8IS0tPHN1YnNjcmlwdGlvbi1mb3JtIG1vZGFsPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+LS0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlYmFyLW5ld3NcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuZXdzLXN1bW1hcnlcIiBuZy1yZXBlYXQ9XCJuZXdzSXRlbSBpbiBuZXdzXCIgdWktc3JlZj1cIm5ld3Moe2FsaWFzOiBuZXdzSXRlbS5Qb3N0LmFsaWFzfSlcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aHVtYi1pbWFnZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK25ld3NJdGVtLlBvc3QuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRpdGxlXCIgbmctYmluZD1cIm5ld3NJdGVtLlBvc3QudGl0bGVcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xyXG5cdFx0XHR2YXIgc2lkZWJhckhlaWdodCwgZm9vdGVySGVpZ2h0OyBzY29wZS50b3BQb3NpdGlvbiA9IDA7XHJcblxyXG5cdFx0XHQvL1NhZmVseSBjYWxjdWxhdGUgZWxlbWVudCdzIHNpemUgYWZ0ZXIgc3R1ZmYgaGF2ZSBiZWVuIHJlbmRlcmVkIVxyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0c2lkZWJhckhlaWdodCA9IGVsZW1lbnQub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0XHRmb290ZXJIZWlnaHQgPSBhbmd1bGFyLmVsZW1lbnQoJyNmb290ZXInKS5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHR9LCA1MDApO1xyXG5cclxuXHRcdFx0JHJvb3RTY29wZS4kb24oJ3Njcm9sbENoYW5nZScsIChldmVudCwgc2Nyb2xsUG9zaXRpb24pID0+IHtcclxuXHRcdFx0XHRzY29wZS5uZXdzID0gJHJvb3RTY29wZS5uZXdzO1xyXG5cclxuXHRcdFx0XHRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGRvY3VtZW50SGVpZ2h0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCksIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0XHRcdFx0b2Zmc2V0ID0gZWxlbWVudC5vZmZzZXQoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoc2Nyb2xsUG9zaXRpb24uc2Nyb2xsaW5nRG93bikge1xyXG5cdFx0XHRcdFx0XHRsZXQgc2Nyb2xsRG93blRvdWNoQm90dG9tID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gb2Zmc2V0LnRvcCArIHNpZGViYXJIZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0c2Nyb2xsRG93bk92ZXJGb290ZXIgPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBkb2N1bWVudEhlaWdodCAtIGZvb3RlckhlaWdodDtcclxuXHJcblx0XHRcdFx0XHRcdGlmIChzY3JvbGxEb3duVG91Y2hCb3R0b20gJiYgIXNjcm9sbERvd25PdmVyRm9vdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgLSBzaWRlYmFySGVpZ2h0IC0gaW5pdGlhbFRvcE9mZnNldDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChzY3JvbGxQb3NpdGlvbi50b3AgPCBvZmZzZXQudG9wIC0gaW5pdGlhbFRvcE9mZnNldCkge1xyXG5cdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFsnJGludGVydmFsJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBpdGVtczogJz0nIH0sXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGlnaHQtc2xpZGVyIHt7d3JhcHBlckNsYXNzfX1cIlxyXG5cdFx0XHRuZy1zd2lwZS1sZWZ0PVwic3dpcGVMZWZ0KCRldmVudClcIiBuZy1zd2lwZS1yaWdodD1cInN3aXBlUmlnaHQoJGV2ZW50KVwiPlxyXG5cdFx0XHQ8ZGl2IGlkPVwiY3VycmVudFNsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGVcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJythY3RpdmVTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgaWQ9XCJwcmV2aW91c1NsaWRlXCIgY2xhc3M9XCJhY3RpdmUtc2xpZGUgcHJldmlvdXNcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytwcmV2aW91c1NsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1uYXZpZ2F0aW9uXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLW5leHRcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtYmFja1wiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzbGlkZS1wb3NpdGlvbnNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicG9zaXRpb24taXRlbVwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5pc0FjdGl2ZX1cIiBuZy1yZXBlYXQ9XCJpdGVtIGluIGl0ZW1zXCIgbmctY2xpY2s9XCJuYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0bGV0ICRhY3RpdmVTbGlkZSA9IGVsZW1lbnQuZmluZCgnI2N1cnJlbnRTbGlkZScpLCAkcHJldmlvdXNTbGlkZSA9IGVsZW1lbnQuZmluZCgnI3ByZXZpb3VzU2xpZGUnKSxcclxuXHRcdFx0XHRlYXNlRWZmZWN0ID0gU2luZS5lYXNlSW4sIHRyYW5zaXRpb25UaW1lID0gMjtcclxuXHJcblx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcclxuXHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XHJcblxyXG5cdFx0XHRzY29wZS4kd2F0Y2goJ2l0ZW1zJywgKCkgPT4ge1xyXG5cdFx0XHRcdG5leHRTbGlkZSgwKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XHJcblxyXG5cdFx0XHRsZXQgbmV4dFNsaWRlID0gZnVuY3Rpb24gKG5leHRJbmRleCkge1xyXG5cdFx0XHRcdHNjb3BlLnByZXZpb3VzU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XHJcblx0XHRcdFx0aWYgKHNjb3BlLnByZXZpb3VzU2xpZGUpIHNjb3BlLnByZXZpb3VzU2xpZGUuaXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBuZXh0SW5kZXggIT0gdW5kZWZpbmVkID8gbmV4dEluZGV4IDogc2NvcGUuYWN0aXZlSW5kZXggKyAxO1xyXG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVJbmRleCA8IDApIHtcclxuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gc2NvcGUuaXRlbXMubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHNjb3BlLmFjdGl2ZUluZGV4ID49IHNjb3BlLml0ZW1zLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2NvcGUuYWN0aXZlU2xpZGUgPSBzY29wZS5pdGVtc1tzY29wZS5hY3RpdmVJbmRleF07XHJcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZVNsaWRlKSBzY29wZS5hY3RpdmVTbGlkZS5pc0FjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdC8vUGxheSB0cmFuc2l0aW9uIGFuaW1hdGlvbiFcclxuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzEwMCUnfSk7XHJcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkYWN0aXZlU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJy0xMDAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSk7XHJcblx0XHRcdFx0VHdlZW5MaXRlLnRvKCRhY3RpdmVTbGlkZSwgMCwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30pO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcwJ30pO1xyXG5cclxuXHRcdFx0XHQvL1Jlc2V0IGludGVydmFsO1xyXG5cdFx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcclxuXHRcdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLm5hdmlnYXRlID0gKGluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlICE9IHNjb3BlLmFjdGl2ZVNsaWRlKSB7XHJcblx0XHRcdFx0XHRuZXh0U2xpZGUoc2NvcGUuaXRlbXMuaW5kZXhPZihpbnN0YW5jZSkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnN3aXBlTGVmdCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggKyAxKTtcclxuXHRcdFx0c2NvcGUuc3dpcGVSaWdodCA9IChlKSA9PiBuZXh0U2xpZGUoc2NvcGUuYWN0aXZlSW5kZXggLSAxKTtcclxuXHJcblx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJpbXBvcnQgeyBpc0VtYWlsVmFsaWQgfSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IG1vZGFsOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8Zm9ybSBuZy1jbGFzcz1cIm1vZGFsXCIgbmctc3VibWl0PVwic3VibWl0KCRldmVudClcIj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImNsb3NlLWNvbW1hbmQgaWNvbi1uYXZpZ2F0aW9uLWNsb3NlXCIgbmctY2xpY2s9XCJhcHBDdHJsLmNsb3NlUmVnaXN0ZXJGb3JtKClcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZUhlYWQgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlVGFpbCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxmaWVsZHNldD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiPjwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmZ1bGxOYW1lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTmFtZVwiLz5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiam9iXCI+Q2jhu41uIGTDsm5nIHhlOiAgIDwvbGFiZWw+XHJcblx0XHRcdDxzZWxlY3QgaWQ9XCJqb2JcIiBuYW1lPVwidXNlcl9qb2JcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlclR5cGVcIj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRmllc3RhPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIFJhbmdlcjwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBFdmVyZXN0PC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIFRyYW5zaXQ8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgTmV3IEZvY3VzPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEVjb1Nwb3J0PC9vcHRpb24+XHRcdFxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHJcblx0XHRcdCBcclxuICAgICBcclxuICAgICAgICAgIDxsYWJlbD5Iw6xuaCB0aOG7qWMgdGhhbmggdG/DoW46PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZD1cInJlcXVpcmVkXCIgdHlwZT1cInJhZGlvXCIgaWQ9XCJ1bmRlcl8xM1wiIHZhbHVlPVwiVHLhuqMgR8OzcFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiIG5hbWU9XCJ1c2VyX2FnZVwiPjxsYWJlbCBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDIwcHhcIiBmb3I9XCJ1bmRlcl8xM1wiIGNsYXNzPVwibGlnaHRcIj5UcuG6oyBHw7NwPC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm92ZXJfMTNcIiB2YWx1ZT1cIlRy4bqjIEjhur90XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIgbmFtZT1cInVzZXJfYWdlXCI+PGxhYmVsICBmb3I9XCJvdmVyXzEzXCIgY2xhc3M9XCJsaWdodFwiPlRy4bqjIGjhur90PC9sYWJlbD5cclxuICAgICAgIFxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLTxpbnB1dCByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2hlY2tlZCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBHw7NwXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIvPi0tPlxyXG5cdFx0XHQ8IS0tPGxhYmVsPlRy4bqjIEfDs3A8L2xhYmVsPi0tPlxyXG5cdFx0XHQ8IS0tPGlucHV0IG5hbWU9XCJwYXlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlRy4bqjIEjhur90XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIvPi0tPlxyXG5cdFx0XHQ8IS0tPGxhYmVsPlRy4bqjIEjhur90PC9sYWJlbD4tLT5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlclBob25lRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlclBob25lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHN0eWxlPVwibWFyZ2luLXRvcDogMTBweDtcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ucGhvbmVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJQaG9uZVwiLz5cclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJhcmVhXCI+Q2jhu41uIGtodSB24buxYzogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBpZD1cImFyZWFcIiBuYW1lPVwidXNlcl9hcmVhXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJBcmVhXCI+XHJcblx0XHRcdFx0PG9wdGlvbj5UUCBI4buTIENow60gTWluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggRMawxqFuZzwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+xJDhu5NuZyBOYWk8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDoCBS4buLYSAtIFbFqW5nIFTDoHU8L29wdGlvbj5cdFx0XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6xuaCBQaMaw4bubYzwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggVGh14bqtbjwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+VMOieSBOaW5oPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5LaMOhYzwvb3B0aW9uPlxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5lbWFpbFBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckVtYWlsXCIvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlckVtYWlsRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlckVtYWlsRXJyb3JcIj48L2Rpdj5cclxuXHJcblx0XHRcdDwhLS08dGV4dGFyZWEgcm93cz1cIjRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLm5vdGVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOb3RlXCI+PC90ZXh0YXJlYT4tLT5cclxuXHRcdFx0IDxkaXYgY2xhc3M9XCJjb21tYW5kc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICRyb290LmxvY2FsaXphdGlvbi5zZW5kXCI+PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgPC9maWVsZHNldD5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvcm0+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0bGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0c2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdHNjb3BlLmFwcEN0cmwgPSAkcm9vdFNjb3BlLmFwcEN0cmw7XHJcblxyXG5cdFx0XHRzY29wZS5zdWJtaXQgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyO1xyXG5cclxuXHJcblx0XHRcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0YW50c19nb29nbGVBdXRoQ2xpY2soKTtcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcclxuXHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XVxyXG5cclxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJywgJ3VzZXJUeXBlJywgJ3VzZXJDYXRlJywgJ3VzZXJBcmVhJywndXNlckRhdGUnXTsiLCJpbXBvcnQge1xyXG5cdGdlbmVyYXRlTnVtYmVyVVVJRCxcclxuXHRyZWdpc3RlckZpZWxkcyxcclxuXHRmaW5kUGFyZW50TWVudUJ5QWxpYXMsXHJcblx0bGFuZ3VhZ2VzXHJcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJHRpbWVvdXQnLCAnJGludGVydmFsJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbmdQcm9ncmVzc0ZhY3RvcnknLCAnbWV0YVNlcnZpY2UnXTtcclxuXHRkZXZlbG9wbWVudE1vZGUgPSBmYWxzZTtcclxuXHRyZWFkeSA9IHRydWU7XHJcblx0YWN0aXZlUGFnZSA9ICdzcGxhc2gnO1xyXG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0c3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xyXG5cdG1vZGFsUG9wdXAgPSBmYWxzZTtcclxuXHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQsICRpbnRlcnZhbCwgJHdpbmRvdywgJGh0dHAsICBuZ1Byb2dyZXNzRmFjdG9yeSwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdCRyb290U2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7IC8vV2lsbCBiZSB1bmRlZmluZWQgYXQgZmlyc3QgPT4gbm90IHNhZmUgZm9yIG5vcm1hbCB1c2FnZSwganVzdCBmb3IgdHJhbnNsYXRpb24hXHJcblx0XHQkcm9vdFNjb3BlLmFwcEN0cmwgPSB0aGlzO1xyXG5cdFx0dGhpcy5tb2RhbE9uZUFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb2RhbFR3b0FjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb2RhbFRocmVlQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm5hbWUgPSBcIkNsb3VkIVwiO1xyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XHJcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XHJcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlTW9kYWwgPSAobmV3VmFsbCkgPT4ge1xyXG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1vZGFsUG9wdXAgPSBuZXdWYWxsID8gbmV3VmFsbCA6ICF0aGlzLm1vZGFsUG9wdXA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAobmV3VmFsKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBuZXdWYWwgPyBuZXdWYWwgOiAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XHJcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG5cclxuXHRcdFx0Ly9TZXQgbWV0YSdzIGNvbnRlbnQgZm9yIEFVRElFTkNFIFNFR01FTlQhXHJcblx0XHRcdGxldCBjdXJyZW50U2VnbWVudCA9ICdob21lJztcclxuXHRcdFx0aWYgKCRzdGF0ZS5pcygncGFnZScpKSB7XHJcblx0XHRcdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudE1lbnUgPSBmaW5kUGFyZW50TWVudUJ5QWxpYXMocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyk7XHJcblx0XHRcdFx0Y3VycmVudFNlZ21lbnQgPSBwYXJlbnRNZW51Lm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoJHN0YXRlLmlzKCduZXdzJykpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9ICduZXdzJ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKCQoXCJtZXRhW25hbWU9J2FkeDpzZWN0aW9ucyddXCIpWzBdKS5hdHRyKCdjb250ZW50JywgY3VycmVudFNlZ21lbnQpO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcigncmVhZHknKTsgLy9NYW51YWxseSB0cmlnZ2VyIHJlYWR5IGV2ZW50LCB3aGljaCBob3BlIGFsc28gdHJpZ2dlciBBbnRzJyBzY3JpcHQhXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0bGV0IGZldGNoRXNzZW50aWFsRGF0YSA9IChzb3VyY2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5pbmZvKFwiTG9hZGluZy4uXCIsIHNvdXJjZSk7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnZm9vdGVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5mb290ZXJzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkLCBsaW1pdDogNCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0JHJvb3RTY29wZS5uZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChtZXRhU2VydmljZS5yZWFkeSkgZmV0Y2hFc3NlbnRpYWxEYXRhKFwiYmVjYXVzZSB0aGUgZGF0YSBhbHJlYWR5IGZldGNoZWQhXCIpO1xyXG5cdFx0JHJvb3RTY29wZS4kb24oJ21ldGFTZXJ2aWNlUmVhZHknLCAoKSA9PiBmZXRjaEVzc2VudGlhbERhdGEoXCJiZWNhdXNlIG1ldGEgc2VydmljZSByZWFkeSBmaXJlZCFcIikpO1xyXG5cclxuXHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuXHRcdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsQ2hhbmdlJywge3RvcDogdG9wU2Nyb2xsLCBzY3JvbGxpbmdEb3duOiB0b3BTY3JvbGwgPiB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbn0pO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHRvcFNjcm9sbDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5yZXNpemUoKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpemVDaGFuZ2UnLCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdFx0d2lkdGg6ICQod2luZG93KS53aWR0aCgpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9SZWdpc3RlciBmb3JtIVxyXG5cdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcblx0XHRcdHRoaXNbZmllbGRdID0gJyc7IHRoaXNbZmllbGQrJ0Vycm9yJ10gPSAnJztcclxuXHRcdH0pO1xyXG5cclxuXHRcdCB0aGlzLmNsb3NlUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0IGNvbnNvbGUubG9nKHRoaXMubW9kYWxUaHJlZUFjdGl2ZSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVzZXRSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblx0XHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4gdGhpc1tmaWVsZF0gPSAnJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMucmVzZXRSZWdpc3RlckVycm9yID0gKCkgPT4ge1xyXG5cdFx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRoaXNbZmllbGQrJ0Vycm9yJ10gPSAnJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3VjY2Vzc0dpZkltYWdlID0gYHVybChpbWFnZXMvb25vZmZvbmNlLmdpZj8ke2dlbmVyYXRlTnVtYmVyVVVJRCgxMCl9KWA7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHRcdFx0fSwgMzAwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3VibWl0UmVnaXN0ZXIgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiwgcHJvZHVjdGlvbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0Y29uc29sZS5sb2coXCJwcm9kdWN0aW9uIG1vZGU6XCIsIHByb2R1Y3Rpb24pO1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpOyB0aGlzLnJlc2V0UmVnaXN0ZXJFcnJvcigpO1xyXG5cclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJOYW1lJ10ubGVuZ3RoIDwgMSkgdGhpc1sndXNlck5hbWVFcnJvciddID0gJ05o4bqtcCB0w6puJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJQaG9uZSddLmxlbmd0aCA8IDgpIHRoaXNbJ3VzZXJQaG9uZUVycm9yJ10gPSAnU+G7kSDEkWnhu4duIHRob+G6oWkgY2jGsGEgxJHDum5nJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJUeXBlJ10ubGVuZ3RoIDwgOCkgdGhpc1sndXNlclR5cGVFcnJvciddID0gJ05o4bqtcCBUeWVlZWVlJztcclxuXHRcdFx0aWYgKHRoaXNbJ3VzZXJOYW1lRXJyb3InXSB8fCB0aGlzWyd1c2VyUGhvbmVFcnJvciddIHx8IHRoaXNbJ3VzZXJUeXBlRXJyb3InXSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0dmFyIGxvY2FsVXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiX3VzZXJJbmZvXCIpKSxcclxuXHRcdFx0XHRmb3JtRGF0YSA9IHtcclxuXHRcdFx0XHRcdC4uLmxvY2FsVXNlckluZm8sXHJcblx0XHRcdFx0XHRkb21haW4sXHJcblx0XHRcdFx0XHRmdWxsTmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRcdG5hbWU6IHRoaXNbJ3VzZXJOYW1lJ10sXHJcblx0XHRcdFx0XHR0eXBlOiB0aGlzWyd1c2VyVHlwZSddLFxyXG5cdFx0XHRcdFx0Y2F0ZTogdGhpc1sndXNlckNhdGUnXSxcclxuXHRcdFx0XHRcdHBob25lOiB0aGlzWyd1c2VyUGhvbmUnXSxcclxuXHRcdFx0XHRcdGFyZWE6IHRoaXNbJ3VzZXJBcmVhJ10sXHJcblx0XHRcdFx0XHRkYXRlOiB0aGlzWyd1c2VyRGF0ZSddLFxyXG5cdFx0XHRcdFx0ZW1haWw6IHRoaXNbJ3VzZXJFbWFpbCddLFxyXG5cdFx0XHRcdFx0bm90ZTogdGhpc1sndXNlck5vdGUnXVxyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHQvL0ZpcmUgQW50cyB0cmFja2luZ0dvYWwgaG9vayFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGFkeF9hbmFseXRpYy50cmFja2luZ0dvYWwobWV0YVNlcnZpY2UuY29uZmlncy5hbnRzUmVnaXN0ZXJHb2FsSWQsIDEsICdldmVudCcpO1xyXG5cdFx0XHQvL1NlbmQgZm9ybSBpbmZvcm1hdGlvbiB0byBBbnRzIVxyXG5cclxuXHRcdFx0Y29uc29sZS5sb2coZm9ybURhdGEubm90ZSk7XHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0YW50c191c2VySW5mb0xpc3RlbmVyKGZvcm1EYXRhLCBmYWxzZSwgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYW50c191c2VySW5mb0xpc3RlbmVyKVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHJcblx0XHRcdC8vRmFjZWJvb2sgdHJhY2tpbmcgTGVhZC9Db21wbGV0ZVJlZ2lzdHJhdGlvbiBldmVudFxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgZmJxKCd0cmFjaycsICdMZWFkJyk7XHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSBmYnEoJ3RyYWNrJywgJ0NvbXBsZXRlUmVnaXN0cmF0aW9uJyk7XHJcblxyXG5cdFx0XHQvL1RyYWNraW5nIEdvb2dsZSBBbmFseXRpYyBnb2FsIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdGdhKCdzZW5kJywge1xyXG5cdFx0XHRcdFx0aGl0VHlwZTogJ2V2ZW50JyxcclxuXHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6ICdTdWJzY3JpcHRpb24nLFxyXG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246ICdTdWJtaXQnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0YW50c19hbmFseXRpYy5wdXNoKHtcclxuXHRcdFx0XHRcdGNvbnZlcnNpb25JZCA6IG1ldGFTZXJ2aWNlLmNvbmZpZ3MuYW50c0NvbnZlcnNpb25JZCxcclxuXHRcdFx0XHRcdGN1c3RvbVBhcmFtcyA6IFtcclxuXHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdCdpc19lY29tbSc6IDAsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3BhZ2V0eXBlJzogJ3B1cmNoYXNlJyxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fcXVhbnRpdHknOiAxLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV90b3RhbHZhbHVlJzogMVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMucmVzZXRSZWdpc3RlckZvcm0oKTtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm1vZGFsUG9wdXAgPSBmYWxzZTtcclxuXHJcblx0XHRcdC8vU2VuZCBmb3JtIHRvIFR3aW4ncyBzZXJ2ZXIhXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2N1c3RvbWVyL2luc2VydC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiBmb3JtRGF0YVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyKCk7XHJcblx0XHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWFpbC9zZW50L2pzb25gLCB7cGFyYW1zOiBmb3JtRGF0YX0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlbWFpbC4uLicsIGRhdGEpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlcigpOyAvL0F1dG8gc3VjY2VzcyBvbiB0ZXN0IGVudmlyb25tZW50IVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cclxuXHRcdGdsb2JhbC5nZXRfaW5mbyA9IChfdXNlckluZm8pID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gdXNlciBpbmZvIGdldCBoZXJlXHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJhbnQncyBnZXRfaW5mbyBmdW5jdGlvbjpcIiwgX3VzZXJJbmZvKTtcclxuXHJcblx0XHRcdFx0Ly8gZmlsbCB1c2VySW5mbyB0byBGT1JNIMSRxINuZyBrw71cclxuXHRcdFx0XHR0aGlzLnVzZXJOYW1lID0gX3VzZXJJbmZvLm5hbWUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyUGhvbmUgPSBfdXNlckluZm8ucGhvbmUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyRW1haWwgPSBfdXNlckluZm8uZW1haWwgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyQ2F0ZSA9IF91c2VySW5mby5jYXRlIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlclR5cGUgPSBfdXNlckluZm8udHlwZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJBcmVhID0gX3VzZXJJbmZvLmFyZWEgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyTm90ZSA9IF91c2VySW5mby5ub3RlIHx8ICcnO1xyXG5cclxuXHRcdFx0XHQvL1N0b3JlIFNvY2lhbCBwcm9maWxlXHJcblx0XHRcdFx0aWYgKF91c2VySW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJfdXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkoX3VzZXJJbmZvKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHR9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIGNoaWxkcHJvZHVjdENvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAgJyRzdGF0ZScsICdtZXRhU2VydmljZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFR3b0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9kYWxUaHJlZUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL1RyYWNraW5nIGNvZGUuLlxyXG4gICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcbiAgICAgICAgZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXMgLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmRmaWVzdGEnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEZpZSA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHJhbmdlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkUmFuID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZXZlcmVzdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRXZlID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZWNvc3BvcnQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEVjbyA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHRyYW5zaXQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZFRyYSA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZvY3VzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRGb2MgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBkb21haW4sIHR5cGU6ICduZXdzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGVjb3Nwb3J0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRFY29zcG9ydCA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHJhbmdlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkUmFuZ2VyID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZXZlcmVzdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRXZlcmVzdCA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZpZXN0YScsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRmllc3RhID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkdHJhbnNpdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkVHJhbnNpdCA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZvY3VzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRGb2NjdXMgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0ZmVhdHVyZXMgPSBbXTtcclxuXHRzbGlkZXJzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHR0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVHdvQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLmNsb3NlUmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0YWxlcnQoJ2hleXl5Jyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuc3VibWl0TW9kYWxPbmUgPSAoKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdoZWhlaGVoJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdC8vIHRoaXMuc2hvd01vZGFsT25lICA9ICgpID0+IHtcclxuXHRcdC8vIFx0Y29uc29sZS5sb2coXCI/P1wiKTtcclxuXHRcdC8vIFx0dGhpcy5tb2RhbE9uZUFjdGl2ZSA9IHRydWU7XHJcblx0XHQvLyB9O1xyXG5cclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblx0XHR0aGlzLmhpZGRlbiA9IGZhbHNlO1xyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG1ldGFTZXJ2aWNlLmxpbmtzWzBdOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cclxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wYWdlL2dldC9qc29uYCwge1xyXG5cdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogXCJ0cmFuZy1jaHVcIiB9XHJcblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbZGF0YS5yZXN1bHRzWzBdLlBhZ2VdO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ2Jhbm5lcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5mZWF0dXJlcyA9IGRhdGEucmVzdWx0cztcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICdIb21lU2xpZGVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLnNsaWRlcnMgPSBkYXRhLnJlc3VsdHMubWFwKGl0ZW0gPT4ge1xyXG5cdFx0XHRcdHJldHVybiBpdGVtLlBvc3Q7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCkgLSA3MDtcclxuXHRcdCRyb290U2NvcGUuJG9uKCdzaXplQ2hhbmdlJywgKGV2ZW50LCBzaXplKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gc2l6ZS5oZWlnaHQgPiA1NzAgPyBzaXplLmhlaWdodCAtIDcwIDogNTAwO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pXHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIG5ld3NDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHdpbmRvdycsICckaHR0cCcsICAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHR0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVHdvQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cclxuXHRcdHRoaXMubG9hZERhdGEgPSAoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdFx0dGhpcy5wYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0XHR0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5zaW5nbGVNb2RlKSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3Bvc3QvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXMgLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEucmVzdWx0c1swXSkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnbmV3cycsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0XHR0aGlzLmFsbE5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHQkc2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBwYWdlQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRlbGVtZW50JywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCcsICdtZXRhU2VydmljZSddO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkZWxlbWVudCwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHJcblx0XHR0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVHdvQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0dGhpcy5sb2FkRGF0YSA9ICgpID0+IHtcclxuXHRcdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudEdyb3VwID0gdGhpcy5maW5kUGFyZW50R3JvdXAocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyksXHJcblx0XHRcdFx0cHJldmlvdXNHcm91cCA9ICRyb290U2NvcGUuYWN0aXZlR3JvdXA7ICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBwYXJlbnRHcm91cDtcclxuXHJcblx0XHRcdGlmKHBhZ2VBbGlhcyA9PSAndHJhbmctY2h1JykgeyAkc3RhdGUuZ28oJ2hvbWUnKTsgcmV0dXJuOyB9XHJcblxyXG5cdFx0XHQvL0tpY2sgYmFjayB0byB0aGUgSG9tZSBwYWdlIGlmIGl0J3Mgbm90IGEgbGluayBpbiBtZW51XHJcblx0XHRcdGlmICghcGFyZW50R3JvdXAgfHwgIXBhcmVudEdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0JHN0YXRlLmdvKCdob21lJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAocGFyZW50R3JvdXAgPT09IHByZXZpb3VzR3JvdXApIHsgLy9JZiB0aGUgcGFyZW50IGdyb3VwIGlzIGFscmVhZHkgYWN0aXZlID0+IHNjcm9sbCB0byB0aGUgY2hpbGQgc2VjdGlvbiFcclxuXHRcdFx0XHQvL1Njcm9sbCBhZnRlciAxIHNlY29uZCB0byBoYXZlIGJldHRlciBwZXJmb3JtYW5jZSAoYWZ0ZXIgc3R1ZmZzIGhhZCBiZWVuIHJlbmRlcmVkKS5cclxuXHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUFsaWFzfWApLm9mZnNldCgpLnRvcCAtIDUwO1xyXG5cdFx0XHRcdFx0VHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XHJcblx0XHRcdFx0fSwgODAwKTtcclxuXHRcdFx0fSBlbHNlIHsgLy9GaW5hbGx5LCBsb2FkIHRoZSBwYWdlID0+IHNldCBwYWdlJ3MgY2hpbGRyZW4gY29udGVudCFcclxuXHRcdFx0XHRsZXQgbG9hZGVkQ291bnQgPSAwOyAkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW107XHJcblx0XHRcdFx0JHdpbmRvdy5zY3JvbGxUbygwLCAwKTsgLy9SZXNldCB0aGUgc2Nyb2xsIGlmIGxvYWRpbmcgZnJvbSB0aGUgYmVnaW5uaW5nIVxyXG5cdFx0XHRcdHBhcmVudEdyb3VwLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50c1tpbmRleF0gPSB7fTtcclxuXHRcdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wYWdlL2dldC9qc29uYCwgeyBwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogY2hpbGQuYWxpYXMgfSB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgY2hpbGRSZXN1bHQgPSBkYXRhLnJlc3VsdHNbMF07XHJcblx0XHRcdFx0XHRcdGlmIChjaGlsZFJlc3VsdCAmJiBjaGlsZFJlc3VsdC5QYWdlKSB7XHJcblx0XHRcdFx0XHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50c1tpbmRleF0gPSBjaGlsZFJlc3VsdC5QYWdlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KS5maW5hbGx5KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0bG9hZGVkQ291bnQrKztcclxuXHJcblx0XHRcdFx0XHRcdGlmIChsb2FkZWRDb3VudCA+PSBwYXJlbnRHcm91cC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHQvL1Njcm9sbCBhZnRlciAxIHNlY29uZCAoYWZ0ZXIgYWxsIGNvbnRlbnQgYXJlIHJlYWR5IGZyb20gc2VydmVyISlcclxuXHRcdFx0XHRcdFx0XHQvLyB0byBoYXZlIGJldHRlciBwZXJmb3JtYW5jZSAoYWZ0ZXIgc3R1ZmZzIGhhZCBiZWVuIHJlbmRlcmVkKS5cclxuXHRcdFx0XHRcdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjc2VjdGlvbiR7cGFnZUFsaWFzfWApLm9mZnNldCgpLnRvcCAtIDUwO1xyXG5cdFx0XHRcdFx0XHRcdFx0VHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSwgNTAwKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdCRyb290U2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZmluZFBhcmVudEdyb3VwIChhbGlhcywgbGlua3MpIHtcclxuXHRcdGZvciAobGV0IGxpbmsgb2YgbGlua3MpIHtcclxuXHRcdFx0aWYgKGxpbmsuYWxpYXMgJiYgbGluay5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBsaW5rO1xyXG5cclxuXHRcdFx0aWYgKGxpbmsuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBsaW5rLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0XHRpZiAoY2hpbGQuYWxpYXMgJiYgY2hpbGQuYWxpYXMgPT0gYWxpYXMpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGxpbms7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIHByb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXIge1xyXG4gICAgc3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyR0aW1lb3V0J107XHJcblxyXG4gICAgc3ViTWVudXMgPSBzdWJNZW51cztcclxuICAgIGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJDbG91ZFwiO1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN1Yk1lbnVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUbyAoZWxlbWVudElkKSB7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCMke2VsZW1lbnRJZH1gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuICAgICAgICAgICAgVHdlZW5MaXRlLnRvKHdpbmRvdywgMSwge3Njcm9sbFRvOnt5OiBzY3JvbGxPZmZzZXR9LCBlYXNlOlBvd2VyMi5lYXNlT3V0fSk7XHJcbiAgICAgICAgfSwgODAwKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3ViTWVudXMgPSBbXHJcbiAgICB7IHRpdGxlOiAnR2nhu5tpIHRoaeG7h3UgY2h1bmcnLCBjb250ZW50SWQ6IFwiZ2lvaXRoaWV1Y2h1bmdcIiB9LFxyXG4gICAgeyB0aXRsZTogJ0PDtG5nIG5naOG7hycsIGNvbnRlbnRJZDogXCJjb25nbmdoZVwiIH0sXHJcbiAgICB7IHRpdGxlOiAnTcOgdSBz4bqvYycsIGNvbnRlbnRJZDogXCJtYXVzYWNcIiAgfSxcclxuICAgIHsgdGl0bGU6ICdUaMO0bmcgc+G7kSBr4bu5IHRodeG6rXQnLCBjb250ZW50SWQ6IFwidGhvbmdzb2t5dGh1YXRcIiAgfSxcclxuXSIsImV4cG9ydCBjbGFzcyBwcm9kdWN0Q29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHdpbmRvdycsICckaHR0cCcsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IoJHJvb3RTY29wZSwgJHdpbmRvdywgJGh0dHAsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0dGhpcy5tb2RhbE9uZUFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb2RhbFR3b0FjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb2RhbFRocmVlQWN0aXZlID0gZmFsc2U7XHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cclxuXHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xyXG5cclxuXHRcdHRoaXMucGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcztcclxuXHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHR0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG5cdFx0aWYgKHRoaXMuc2luZ2xlTW9kZSkge1xyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtkb21haW4sIGFsaWFzOiB0aGlzLnBhZ2VBbGlhc31cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XHJcblx0XHRcdH0pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ3Byb2R1Y3QnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmFsbFByb2R1Y3QgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBzcGxhc2hDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCddO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICRpbnRlcnZhbCwgJHRpbWVvdXQpIHtcclxuXHRcdHRoaXMuJHN0YXRlID0gJHN0YXRlO1xyXG5cdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5za2lwSW50cm8oKSwgMCk7XHJcblx0fVxyXG5cclxuXHRza2lwSW50cm8gKCkge1xyXG5cdFx0dGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKCdob21lJyk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgZml4QW5hbHl0aWNNaXNzaW5nIH0gZnJvbSBcIi4vdXRpbHMvaGVscGVyXCI7XHJcbmltcG9ydCB7YXBwbGljYXRpb25Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2FwcGxpY2F0aW9uQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgcm91dGVyQ29uZmlnIGZyb20gXCIuL3JvdXRlckNvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IHttYWluQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9tYWluQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge3BhZ2VDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhZ2VDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7bmV3c0NvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbmV3c0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwcm9kdWN0Q29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wcm9kdWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQge2NoaWxkcHJvZHVjdENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvY2hpbGRwcm9kdWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQge3NwbGFzaENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvc3BsYXNoQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge3Byb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcGFydGlhbC9wcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyXCI7XHJcblxyXG5cclxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IG5hdmlnYXRpb25MaW5rIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uTGlua1wiO1xyXG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudC9mb290ZXJcIjtcclxuaW1wb3J0IHNpZGViYXIgZnJvbSBcIi4vY29tcG9uZW50L3NpZGViYXJcIjtcclxuaW1wb3J0IHN1YnNjcmlwdGlvbkZvcm0gZnJvbSBcIi4vY29tcG9uZW50L3N1YnNjcmlwdGlvbkZvcm1cIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL2NvbXBvbmVudC9tb2RhbFwiO1xyXG5pbXBvcnQgbW9kYWxPbmUgZnJvbSBcIi4vY29tcG9uZW50L21vZGFsT25lXCI7XHJcbmltcG9ydCBjYXJkIGZyb20gXCIuL2NvbXBvbmVudC9jYXJkXCI7XHJcbmltcG9ydCBwb3B1cCBmcm9tIFwiLi9jb21wb25lbnQvcG9wdXBcIjtcclxuaW1wb3J0IHNsaWRlciBmcm9tIFwiLi9jb21wb25lbnQvc2xpZGVyXCI7XHJcbmltcG9ydCBuZXdzQXJlYSBmcm9tIFwiLi9jb21wb25lbnQvbmV3c0FyZWFcIjtcclxuaW1wb3J0IG1ldGFTZXJ2aWNlIGZyb20gXCIuL21ldGFTZXJ2aWNlXCI7XHJcbmltcG9ydCByZWdpc3RlckZpbHRlciBmcm9tIFwiLi91dGlscy9maWx0ZXJcIjtcclxuXHJcbmdsb2JhbC5maXhBbmFseXRpY01pc3NpbmcgPSBmaXhBbmFseXRpY01pc3Npbmc7XHJcbmxldCBBcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwbGljYXRpb24nLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnLCAnbmdQcm9ncmVzcycsICduZ1RvdWNoJywgJ25nUGFyYWxsYXgnLCAnYW5ndWxhci1zcGlua2l0J10pXHJcblx0LmNvbmZpZyhyb3V0ZXJDb25maWcpXHJcblx0LmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBhcHBsaWNhdGlvbkNvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ21haW5DdHJsJywgbWFpbkNvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3BhZ2VDdHJsJywgcGFnZUNvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ25ld3NDdHJsJywgbmV3c0NvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3Byb2R1Y3RDdHJsJywgcHJvZHVjdENvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ2NoaWxkcHJvZHVjdEN0cmwnLCBjaGlsZHByb2R1Y3RDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdzcGxhc2hDdHJsJywgc3BsYXNoQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcigncHJvZHVjdENhdGVNZW51Q3RybCcsIHByb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXIpXHJcblx0LnNlcnZpY2UoJ21ldGFTZXJ2aWNlJywgbWV0YVNlcnZpY2UpXHJcblx0LmRpcmVjdGl2ZSgncG9wdXAnLCBwb3B1cClcclxuXHQuZGlyZWN0aXZlKCdsaWdodE5hdmlnYXRpb24nLCBuYXZpZ2F0aW9uKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2lkZWJhcicsIHNpZGViYXIpXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRGb290ZXInLCBmb290ZXIpXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRTbGlkZXInLCBzbGlkZXIpXHJcblx0LmRpcmVjdGl2ZSgnbmV3c0FyZWEnLCBuZXdzQXJlYSlcclxuXHQuZGlyZWN0aXZlKCdtb2RhbCcsIG1vZGFsKVxyXG5cdC5kaXJlY3RpdmUoJ21vZGFsT25lJywgbW9kYWxPbmUpXHJcblx0LmRpcmVjdGl2ZSgnY2FyZCcsIGNhcmQpXHJcblx0LmRpcmVjdGl2ZSgnc3Vic2NyaXB0aW9uRm9ybScsIHN1YnNjcmlwdGlvbkZvcm0pXHJcblx0LmRpcmVjdGl2ZSgnbmF2aWdhdGlvbkxpbmsnLCBuYXZpZ2F0aW9uTGluayk7XHJcblxyXG5cclxucmVnaXN0ZXJGaWx0ZXIoQXBwKTtcclxuXHJcbkFwcC5ydW4oKCkgPT4ge1xyXG5cdEZhc3RDbGljay5hdHRhY2goZG9jdW1lbnQuYm9keSk7XHJcbn0pO1xyXG5cclxuQXBwLmZpbHRlcigndW5zYWZlJywgW1xyXG5cdCckc2NlJywgZnVuY3Rpb24gKCRzY2UpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbiAodmFsKSB7XHJcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbCk7XHJcblx0XHR9O1xyXG5cdH1cclxuXSk7XHJcblxyXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudCwgWydhcHBsaWNhdGlvbiddKTsiLCJpbXBvcnQgeyBsYW5ndWFnZXMsIGxvY2FsaXphdGlvbiB9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgJHRpbWVvdXQgKSB7XHJcblx0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmxvYWRNZW51ID0gKGNvbmZpZ3MsIGNvbmZpZ1Jlc29sdmUsIG5hdmlnYXRpb25SZXNvbHZlKSA9PiB7XHJcblx0XHRsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBjb25maWdzIHx8IHRoaXMuY29uZmlncztcclxuXHJcblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vbWVudS9nZXQvanNvbmAsIHtcclxuXHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHR9KS5zdWNjZXNzKChkYXRhKSA9PiB7XHJcblx0XHRcdHRoaXMubGlua3MgPSBkYXRhLnJlc3VsdHM7XHJcblxyXG5cdFx0XHRpZiAobmF2aWdhdGlvblJlc29sdmUpIG5hdmlnYXRpb25SZXNvbHZlKHRoaXMubGlua3MpO1xyXG5cdFx0XHRpZiAoY29uZmlnUmVzb2x2ZSkge1xyXG5cdFx0XHRcdGNvbmZpZ1Jlc29sdmUodGhpcy5jb25maWdzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnbWV0YVNlcnZpY2VSZWFkeScpO1xyXG5cdFx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHR9LCAwKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChjb25maWdSZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdCRyb290U2NvcGUubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZSA9IGxhbmd1YWdlc1swXTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvblskcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmxhbmddO1xyXG5cdFx0JHJvb3RTY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmxvY2FsaXphdGlvbiA9IGxvY2FsaXphdGlvblskcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmxhbmddO1xyXG5cdFx0XHRpZiAoJHJvb3RTY29wZS5jb25maWdzKSB0aGlzLmxvYWRNZW51KCRyb290U2NvcGUuY29uZmlncyk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmNoYW5nZUxhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuXHRcdH07XHJcblxyXG5cdFx0JGh0dHAuZ2V0KCcvY29uZmlncycpLnN1Y2Nlc3MoKGRhdGEpID0+IHtcclxuXHRcdFx0ZGF0YS5kb21haW4gPSBkYXRhLmRvbWFpbiB8fCBsb2NhdGlvbi5ob3N0O1xyXG5cdFx0XHRsZXQgY29uZmlncyA9IGRhdGEsIHsgYXBpSG9zdCwgZG9tYWluIH0gPSBjb25maWdzO1xyXG5cdFx0XHR0aGlzLmNvbmZpZ3MgPSBjb25maWdzO1xyXG5cdFx0XHQkcm9vdFNjb3BlLmNvbmZpZ3MgPSBjb25maWdzO1xyXG5cdFx0XHQvL092ZXJyaWRlIHRyYW5zbGF0aW9uIChpZiBwb3NzaWJsZSkuLlxyXG5cdFx0XHRsYW5ndWFnZXMuZm9yRWFjaCgoe2xhbmd9KSA9PiB7XHJcblx0XHRcdFx0aWYgKGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ10pIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddKSkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbGl6YXRpb25bbGFuZ11ba2V5XSA9IGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ11ba2V5XTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGNvbmZpZ3MubGFuZ3VhZ2VzKSB7ICRyb290U2NvcGUubGFuZ3VhZ2VzID0gY29uZmlncy5sYW5ndWFnZXM7IH1cclxuXHJcblxyXG5cclxuXHRcdFx0bmV3IFByb21pc2UoKG5hdmlnYXRpb25SZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0XHR0aGlzLmxvYWRNZW51KGNvbmZpZ3MsIGNvbmZpZ1Jlc29sdmUsIG5hdmlnYXRpb25SZXNvbHZlKVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG59XTsiLCJpbXBvcnQge3ByZWxvYWRSZXNvbHZlc30gZnJvbSAnLi91dGlscy9oZWxwZXInO1xyXG5cclxubGV0IHJvdXRlckNvbmZpZyA9IFsnJHN0YXRlUHJvdmlkZXInLCAnJHVybFJvdXRlclByb3ZpZGVyJywgJyRjb21waWxlUHJvdmlkZXInLCAnJGh0dHBQcm92aWRlcicsICckbG9jYXRpb25Qcm92aWRlcicsXHJcblx0ZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlciwgJGh0dHBQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuXHRcdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHRcdC5zdGF0ZSgnc3BsYXNoJywgc3BsYXNoUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnaG9tZScsIG1haW5Sb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdwYWdlJywgcGFnZVJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ25ld3MnLCBuZXdzUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnY2hpbGRQcm9kdWN0JywgY2hpbGRwcm9kdWN0Um91dGUpXHJcblx0XHRcdC5zdGF0ZSgnZm9yZEVjb3Nwb3J0JywgZm9yZGVjb3Nwb3J0Um91dGUpXHJcblx0XHRcdC5zdGF0ZSgnZm9yZEV2ZXJlc3QnLCBmb3JkZXZlcmVzdFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRGb2N1cycsIGZvcmRmb2N1c1JvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRSYW5nZXInLCBmb3JkcmFuZ2VyUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnZm9yZFRyYW5zaXQnLCBmb3JkdHJhbnNpdFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ3Byb2R1Y3QnLCBwcm9kdWN0Um91dGUpO1xyXG5cclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9zcGxhc2gnKTtcclxuXHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uID0ge307XHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucG9zdCA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnB1dCA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBhdGNoID0ge307XHJcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XHJcblx0fVxyXG5dO1xyXG5cclxudmFyIHNwbGFzaFJvdXRlID0ge1xyXG5cdHVybDogJy9zcGxhc2gnLFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvZW1wdHlMYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAc3BsYXNoJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL3NwbGFzaC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3NwbGFzaEN0cmwgYXMgc3BsYXNoQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgbWFpblJvdXRlID0ge1xyXG5cdHVybDogJy8nLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBob21lJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbWFpbi5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ21haW5DdHJsIGFzIG1haW5DdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBwYWdlUm91dGUgPSB7XHJcblx0dXJsOiAnLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHBhZ2UnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wYWdlLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAncGFnZUN0cmwgYXMgcGFnZUN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIG5ld3NSb3V0ZSA9IHtcclxuXHR1cmw6ICcvdGluLXR1Yy86YWxpYXMnLFxyXG5yZXNvbHZlOiB7XHJcblx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAbmV3cyc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICduZXdzQ3RybCBhcyBuZXdzQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgcHJvZHVjdFJvdXRlID0ge1xyXG5cdHVybDogJy9zYW4tcGhhbS86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBwcm9kdWN0Jzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcHJvZHVjdC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3Byb2R1Y3RDdHJsIGFzIHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBjaGlsZHByb2R1Y3RSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1maWVzdGEvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAY2hpbGRQcm9kdWN0Jzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2ZvcmRQcm9kdWN0L2NoaWxkUHJvZHVjdC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ2NoaWxkcHJvZHVjdEN0cmwgYXMgY2hpbGRwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgZm9yZGVjb3Nwb3J0Um91dGUgPSB7XHJcblx0dXJsOiAnL2ZvcmQtZWNvc3BvcnQvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZEVjb3Nwb3J0Jzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2ZvcmRQcm9kdWN0L2ZvcmRFY29zcG9ydC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ2NoaWxkcHJvZHVjdEN0cmwgYXMgY2hpbGRwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgZm9yZGV2ZXJlc3RSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1ldmVyZXN0LzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGZvcmRFdmVyZXN0Jzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2ZvcmRQcm9kdWN0L2ZvcmRFdmVyZXN0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkZm9jdXNSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1mb2N1cy86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBmb3JkRm9jdXMnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZEZvY3VzLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkcmFuZ2VyUm91dGUgPSB7XHJcblx0dXJsOiAnL2ZvcmQtcmFuZ2VyLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGZvcmRSYW5nZXInOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZFJhbmdlci5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ2NoaWxkcHJvZHVjdEN0cmwgYXMgY2hpbGRwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgZm9yZHRyYW5zaXRSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC10cmFuc2l0LzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGZvcmRUcmFuc2l0Jzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2ZvcmRQcm9kdWN0L2ZvcmRUcmFuc2l0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyQ29uZmlnOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG1vZHVsZUluc3RhbmNlKSB7XHJcblx0bW9kdWxlSW5zdGFuY2VcclxuXHRcdC5maWx0ZXIoJ25pY2VEYXRlJywgbmljZURhdGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmljZURhdGUgKCkge1xyXG5cdHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0ID0gJ0RELU1NLVlZWVknKSB7XHJcblx0XHRyZXR1cm4gbW9tZW50KGRhdGUpLmZvcm1hdChmb3JtYXQpO1xyXG5cdH07XHJcbn0iLCJleHBvcnQgY29uc3QgYXBpSG9zdCA9ICdodHRwOi8vMTI4LjE5OS4yMjcuMTMyJzsvLydyaXZlcmNpdHk5OS52bic7Ly9odHRwOi8vMTAzLjU2LjE1Ny42Ni9yZWFsZXN0YXRlJztcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnLCAndXNlck5vdGUnLCAndXNlclR5cGUnLCAndXNlckNhdGUnLCAndXNlckRhdGUnXTtcclxuZXhwb3J0IGNvbnN0IGxhbmd1YWdlcyA9IFtcclxuXHR7bGFuZzogXCJ2aWV0bmFtZXNlXCIsIGlkOiAxLCBkaXNwbGF5OiBcIlRp4bq/bmcgVmnhu4d0XCJ9LFxyXG5cdC8vIHtsYW5nOiBcImVuZ2xpc2hcIiwgaWQ6IDIsIGRpc3BsYXk6IFwiRW5nbGlzaFwifVxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCBsb2NhbGl6YXRpb24gPSB7XHJcblx0dmlldG5hbWVzZToge1xyXG5cdFx0cmVnaXN0ZXI6IFwiTEnDik4gSOG7hlwiLFxyXG5cdFx0bmV3czogXCJUSU4gVOG7qENcIixcclxuXHRcdHJlZ2lzdGVyVGl0bGVIZWFkOiBgPHNwYW4+R+G7jWkgPC9zcGFuPmAsXHJcblx0XHRyZWdpc3RlclRpdGxlVGFpbDogYCBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj4gaG/hurdjIGfhu61pIHRow7RuZyB0aW4gxJHhu4Mgbmjhuq1uPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5Cw4FPIEdJw4E8L3NwYW4+XHJcblx0XHRcdDxzcGFuPnThu6s8L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkNI4bumIMSQ4bqmVSBUxq88L3NwYW4+YCxcclxuXHRcdGZ1bGxOYW1lUGxhY2Vob2xkZXI6IFwiSOG7jSB2w6AgdMOqbipcIixcclxuXHRcdHR5cGVQbGFjZWhvbGRlcjogXCJuaOG6rXAgdHlwZVwiLFxyXG5cdFx0cGhvbmVQbGFjZWhvbGRlcjogXCLEkGnhu4duIHRob+G6oWkqXCIsXHJcblx0XHRlbWFpbFBsYWNlaG9sZGVyOiBcIkVtYWlsIChraMO0bmcgYuG6r3QgYnXhu5ljKVwiLFxyXG5cdFx0bm90ZVBsYWNlaG9sZGVyOiBcIkdoaSBjaMO6XCIsXHJcblx0XHRzZW5kOiBcIkfhu61pXCIsXHJcblx0XHRkZXNpZ25lZEJ5OiBcIlRoaeG6v3Qga+G7gyBi4bufaVwiXHJcblx0fSxcclxuXHRlbmdsaXNoOiB7XHJcblx0XHRyZWdpc3RlcjogXCJTVUJTQ1JJQkVcIixcclxuXHRcdG5ld3M6IFwiTkVXU1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5DYWxsIDwvc3Bhbj5gLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZVRhaWw6IGAgXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+IG9yIHN1YnNjcmliZSB0byByZWNlaXZlIDwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+UVVPVEFUSU9OPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj5mcm9tPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5JTlZFU1RPUjwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJGdWxsIG5hbWUqXCIsXHJcblx0XHRwaG9uZVBsYWNlaG9sZGVyOiBcIlBob25lKlwiLFxyXG5cdFx0ZW1haWxQbGFjZWhvbGRlcjogXCJFbWFpbCAob3B0aW9uYWwpXCIsXHJcblx0XHRub3RlUGxhY2Vob2xkZXI6IFwiTm90ZS4uXCIsXHJcblx0XHRzZW5kOiBcIlNlbmRcIixcclxuXHRcdGRlc2lnbmVkQnk6IFwiRGVzaWduZWQgYnlcIlxyXG5cdH1cclxufTtcclxuXHJcbmNvbnN0IGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaXhBbmFseXRpY01pc3NpbmcgKCkge1xyXG5cdGlmICghZ2xvYmFsLmdhKSBnbG9iYWwuZ2EgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmZicSkgZ2xvYmFsLmZicSA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuYW50c191c2VySW5mb0xpc3RlbmVyKSBnbG9iYWwuYW50c191c2VySW5mb0xpc3RlbmVyID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5hbnRzX2FuYWx5dGljKSBnbG9iYWwuYW50c19hbmFseXRpYyA9IFtdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZChzb3VyY2VzLCBwcmVkaWNhdGUpIHtcclxuXHR2YXIgc2VhcmNoS2V5LCBzZWFyY2hWYWx1ZTtcclxuXHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMocHJlZGljYXRlKSkge1xyXG5cdFx0c2VhcmNoS2V5ID0ga2V5O1xyXG5cdFx0c2VhcmNoVmFsdWUgPSBwcmVkaWNhdGVba2V5XTtcclxuXHR9XHJcblxyXG5cdGZvciAobGV0IGluc3RhbmNlIG9mIHNvdXJjZXMpIHtcclxuXHRcdGlmIChpbnN0YW5jZVtzZWFyY2hLZXldID09PSBzZWFyY2hWYWx1ZSkgcmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXJlbnRNZW51QnlBbGlhcyAoYWxpYXMsIGxpbmtzKSB7XHJcblx0Zm9yIChsZXQgZ3JvdXAgb2YgbGlua3MpIHtcclxuXHRcdGlmIChncm91cC5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBncm91cDtcclxuXHRcdGlmIChncm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRmb3IgKGxldCBjaGlsZCBvZiBncm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGlmIChjaGlsZC5hbGlhcyA9PT0gYWxpYXMpIHJldHVybiBncm91cDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxWYWxpZCAoZW1haWwpIHtcclxuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHRyZXR1cm4gcmUudGVzdChlbWFpbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgcHJlbG9hZFJlc29sdmVzID0ge1xyXG5cdGFwcENvbmZpZzogZnVuY3Rpb24oY29uZmlnU2VydmljZSwgY2FsY3VsYXRvclNlcnZpY2UpIHtcclxuXHRcdHJldHVybiBjb25maWdTZXJ2aWNlLnByb21pc2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTnVtYmVyVVVJRCAobGVuZ3RoKSB7XHJcblx0dmFyIHJlc3VsdCA9IFwiXCI7XHJcblx0Zm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblx0XHRyZXN1bHQgKz0gWzAsMSwyLDMsNCw1LDYsNyw4LDldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo5KV07XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYWZlUmFuZ2UgKHZhbHVlLCBtaW4sIG1heCkge1xyXG5cdGlmIChtaW4gIT0gdW5kZWZpbmVkICYmIHZhbHVlIDw9IG1pbikgcmV0dXJuIG1pbjtcclxuXHRpZiAobWF4ICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSBtYXgpIHJldHVybiBtYXg7XHJcblx0cmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLndpZHRoID0gZnVuY3Rpb24oZm9udCkge1xyXG5cdHZhciBmID0gZm9udCB8fCAnMTJweCBhcmlhbCcsXHJcblx0XHRvID0gJCgnPGRpdj4nICsgdGhpcyArICc8L2Rpdj4nKVxyXG5cdFx0XHQuY3NzKHsncG9zaXRpb24nOiAnYWJzb2x1dGUnLCAnZmxvYXQnOiAnbGVmdCcsICd3aGl0ZS1zcGFjZSc6ICdub3dyYXAnLCAndmlzaWJpbGl0eSc6ICdoaWRkZW4nLCAnZm9udCc6IGZ9KVxyXG5cdFx0XHQuYXBwZW5kVG8oJCgnYm9keScpKSxcclxuXHRcdHcgPSBvLndpZHRoKCk7XHJcblxyXG5cdG8ucmVtb3ZlKCk7XHJcblxyXG5cdHJldHVybiB3O1xyXG59O1xyXG5cclxuZ2xvYmFsLnV1aWQgPSBnZW5lcmF0ZU51bWJlclVVSUQ7Il19
