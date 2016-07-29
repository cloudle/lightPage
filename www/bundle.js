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
		template: '<form ng-class="modal" ng-submit="submit($event)">\n\t\t\t\t\n\t\t\t<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>\n\t\t\t<div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>\n\t\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>\n\t\t\t</div>\n\t\t\t<fieldset>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>\n\t\t\t\n\t\t\t\n\t\t\t<label for="job">Chọn dòng xe:   </label>\n\t\t\t<select id="job" name="user_job" ng-model="appCtrl.userType">\n\t\t\t\t<option>Fore Fiesta</option>\n\t\t\t\t<option>Fore Ranger</option>\n\t\t\t\t<option>Fore Everest</option>\n\t\t\t\t<option>Fore Transit</option>\n\t\t\t\t<option>Fore New Focus</option>\n\t\t\t\t<option>Fore EcoSport</option>\t\t\t\t\n\t\t\t</select>\n\t\t\t\n\t\t\t<!--<input required="required" checked name="pay" type="radio" value="Trả Góp" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Góp</label>-->\n\t\t\t<!--<input name="pay" type="radio" value="Trả Hết" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Hết</label>-->\n\t\t\t\n\t\t\t\n\t\t\t<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>\n\t\t\t\n\t\t\t<label for="area">Chọn khu vực:   </label>\n\t\t\t<select required="required" id="area" name="user_area" ng-model="appCtrl.userArea">\n\t\t\t\t<option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>\n\t\t\t\t<option>Bình Dương</option>\n\t\t\t\t<option>Đồng Nai</option>\n\t\t\t\t<option>Bà Rịa - Vũng Tàu</option>\t\t\n\t\t\t\t<option>Bình Phước</option>\n\t\t\t\t<option>Bình Thuận</option>\n\t\t\t\t<option>Tây Ninh</option>\n\t\t\t\t<option>Khác</option>\n\t\t\t</select>\n\t\t\t\n\t\t\t<label for="date">Ngày lái thử:   </label>\n\t\t\t<input ng-model="appCtrl.userDate" type="date"/>\n\t\t\t\n\t\t\t<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>\n            <div class="commands">\n\t\t\t\t<!--<div class="social-button facebook" ng-click="facebookLogin()"></div>-->\n\t\t\t\t<!--<div class="social-button google" ng-click="googleLogin()"></div>-->\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>\n\t\t\t</div>\n\t\t\t<!--<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>-->\n\t\t\t </fieldset>\n\t\t\t\n\t\t</form>',
		link: function link(scope, element, attrs) {
			var _metaService$configs = metaService.configs;
			var apiHost = _metaService$configs.apiHost;
			var domain = _metaService$configs.domain;

			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;
			scope.submit = $rootScope.submitRegister;

			// scope.googleLogin = function () {
			//     ants_googleAuthClick();
			// };
			//
			// scope.facebookLogin = function () {
			//     ants_fbAuthClick('login');
			// };
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
		template: '<form ng-class="modal" ng-submit="submit($event)">\n\t\t\t\t\n\t\t\t<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>\n\t\t\t<div class="heading">\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>\n\t\t\t\t<span class="ultra strong" ng-bind="configs.translation.hotline"></span>\n\t\t\t\t<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>\n\t\t\t</div>\n\t\t\t<fieldset>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>\n\t\t\t<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>\n\t\t\t\n\t\t\t\n\t\t\t<label for="job">Chọn dòng xe:   </label>\n\t\t\t<select id="job" name="user_job" ng-model="appCtrl.userType">\n\t\t\t\t<option>Fore Fiesta</option>\n\t\t\t\t<option>Fore Ranger</option>\n\t\t\t\t<option>Fore Everest</option>\n\t\t\t\t<option>Fore Transit</option>\n\t\t\t\t<option>Fore New Focus</option>\n\t\t\t\t<option>Fore EcoSport</option>\t\t\n\t\t\t</select>\n\t\t\t\n\t\t\t \n     \n          <label>Hình thức thanh toán:</label>\n          <input required="required" type="radio" id="under_13" value="Trả Góp" ng-model="appCtrl.userCate" name="user_age"><label style="padding-right: 20px" for="under_13" class="light">Trả Góp</label>\n          <input type="radio" id="over_13" value="Trả Hết" ng-model="appCtrl.userCate" name="user_age"><label  for="over_13" class="light">Trả hết</label>\n       \n\t\t\t\n\t\t\t<!--<input required="required" checked name="pay" type="radio" value="Trả Góp" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Góp</label>-->\n\t\t\t<!--<input name="pay" type="radio" value="Trả Hết" ng-model="appCtrl.userCate"/>-->\n\t\t\t<!--<label>Trả Hết</label>-->\n\t\t\t\n\t\t\t\n\t\t\t<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>\n\t\t\t<input style="margin-top: 10px;" type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>\n\t\t\t\n\t\t\t<label for="area">Chọn khu vực:   </label>\n\t\t\t<select required="required" id="area" name="user_area" ng-model="appCtrl.userArea">\n\t\t\t\t<option>TP Hồ Chí Minh</option>\n\t\t\t\t<option>Bình Dương</option>\n\t\t\t\t<option>Đồng Nai</option>\n\t\t\t\t<option>Bà Rịa - Vũng Tàu</option>\t\t\n\t\t\t\t<option>Bình Phước</option>\n\t\t\t\t<option>Bình Thuận</option>\n\t\t\t\t<option>Tây Ninh</option>\n\t\t\t\t<option>Khác</option>\n\t\t\t</select>\n\t\t\t\n\t\t\t\n\t\t\t\n\t\t\t<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>\n\t\t\t<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>\n\n\t\t\t<!--<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>-->\n\t\t\t <div class="commands">\n\t\t\t\t<!--<div class="social-button facebook" ng-click="facebookLogin()"></div>-->\n\t\t\t\t<!--<div class="social-button google" ng-click="googleLogin()"></div>-->\n\t\t\t\t<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>\n\t\t\t</div>\n\t\t\t </fieldset>\n\t\t\t\n\t\t</form>',
		link: function link(scope, element, attrs) {
			var _metaService$configs = metaService.configs;
			var apiHost = _metaService$configs.apiHost;
			var domain = _metaService$configs.domain;

			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;

			// 	scope.googleLogin = function () {
			// 			ants_googleAuthClick();
			// 		};
			//
			// 		scope.facebookLogin = function () {
			// 			ants_fbAuthClick('login');
			// };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcY2FyZC5qcyIsImFwcFxcY29tcG9uZW50XFxmb290ZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWwuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWxPbmUuanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbi5qcyIsImFwcFxcY29tcG9uZW50XFxuYXZpZ2F0aW9uTGluay5qcyIsImFwcFxcY29tcG9uZW50XFxuZXdzQXJlYS5qcyIsImFwcFxcY29tcG9uZW50XFxwb3B1cC5qcyIsImFwcFxcY29tcG9uZW50XFxzaWRlYmFyLmpzIiwiYXBwXFxjb21wb25lbnRcXGFwcFxcY29tcG9uZW50XFxzbGlkZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcc3Vic2NyaXB0aW9uRm9ybS5qcyIsImFwcFxcY29udHJvbGxlclxcYXBwXFxjb250cm9sbGVyXFxhcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXGNoaWxkcHJvZHVjdENvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXG1haW5Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxuZXdzQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxccGFnZUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhcnRpYWxcXHByb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHByb2R1Y3RDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpb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LENBQWpCLEVBQW1CLENBQW5CLEVBQXNCLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxLQUFjLENBQXpCLENBQXRCLENBQVY7QUFDQTs7QUFFRCxRQUFPLE1BQVA7QUFDQTs7QUFFTSxTQUFTLFNBQVQsQ0FBb0IsS0FBcEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsRUFBcUM7QUFDM0MsS0FBSSxPQUFPLFNBQVAsSUFBb0IsU0FBUyxHQUFqQyxFQUFzQyxPQUFPLEdBQVA7QUFDdEMsS0FBSSxPQUFPLFNBQVAsSUFBb0IsU0FBUyxHQUFqQyxFQUFzQyxPQUFPLEdBQVA7QUFDdEMsUUFBTyxLQUFQO0FBQ0E7O0FBRUQsT0FBTyxTQUFQLENBQWlCLEtBQWpCLEdBQXlCLFVBQVMsSUFBVCxFQUFlO0FBQ3ZDLEtBQUksSUFBSSxRQUFRLFlBQWhCO0FBQUEsS0FDQyxJQUFJLEVBQUUsVUFBVSxJQUFWLEdBQWlCLFFBQW5CLEVBQ0YsR0FERSxDQUNFLEVBQUMsWUFBWSxVQUFiLEVBQXlCLFNBQVMsTUFBbEMsRUFBMEMsZUFBZSxRQUF6RCxFQUFtRSxjQUFjLFFBQWpGLEVBQTJGLFFBQVEsQ0FBbkcsRUFERixFQUVGLFFBRkUsQ0FFTyxFQUFFLE1BQUYsQ0FGUCxDQURMO0FBQUEsS0FJQyxJQUFJLEVBQUUsS0FBRixFQUpMOztBQU1BLEdBQUUsTUFBRjs7QUFFQSxRQUFPLENBQVA7QUFDQSxDQVZEOztBQVlBLE9BQU8sSUFBUCxHQUFjLGtCQUFkIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXHJcbiAgICAgICAgc2NvcGU6IHttb2RhbDogJ0AnLCBzdWJtaXRUZXh0OiAnQCd9LFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRpbmdcIj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24uY2FyZFRpdGxlSGVhZCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBzdHlsZT1cImNvbG9yOiNmYTgzMjI7XCIgY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5jYXJkVGl0bGVUYWlsIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGAsXHJcblxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgbGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuICAgICAgICAgICAgc2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmFwcEN0cmwgPSAkcm9vdFNjb3BlLmFwcEN0cmw7XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBjb2x1bW5zOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBpZD1cImZvb3RlclwiIGNsYXNzPVwiZm9vdGVyXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbFwiIG5nLXJlcGVhdD1cImNvbHVtbiBpbiBjb2x1bW5zXCIgbmctYmluZC1odG1sPVwiY29sdW1uLlBvc3QuY29udGVudCB8IHVuc2FmZVwiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtcm93XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsYW5ndWFnZS1jaG9pY2VcIiBuZy1yZXBlYXQ9XCJsYW5ndWFnZSBpbiAkcm9vdC5sYW5ndWFnZXNcIiBcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1jbGFzcz1cInthY3RpdmU6IGxhbmd1YWdlQWN0aXZlKGxhbmd1YWdlKX1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdCBuZy1jbGljaz1cIiRyb290LmNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctYmluZD1cImxhbmd1YWdlLmRpc3BsYXlcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLmRlc2lnbmVkQnlcIj48L3NwYW4+XHJcblx0XHRcdFx0ICAgIDxhIGhyZWY9XCJodHRwOi8vdHdpbi52blwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOm5vbmU7Y29sb3I6IzJFQjNEMztcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UV0lOIFNvZnR3YXJlIFNvbHV0aW9uczwvYT5cdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0c2NvcGUubGFuZ3VhZ2VBY3RpdmUgPSAoaW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gaW5zdGFuY2UuaWQgPT0gJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZDtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7IG1vZGFsOiAnQCcsIHN1Ym1pdFRleHQ6ICdAJyB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJtb2RhbFwiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XHJcblx0XHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiYXBwQ3RybC5jbG9zZVJlZ2lzdGVyRm9ybSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVIZWFkIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZVRhaWwgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5mdWxsTmFtZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5hbWVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImpvYlwiPkNo4buNbiBkw7JuZyB4ZTogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IGlkPVwiam9iXCIgbmFtZT1cInVzZXJfam9iXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJUeXBlXCI+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEZpZXN0YTwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBSYW5nZXI8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRXZlcmVzdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBUcmFuc2l0PC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIE5ldyBGb2N1czwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBFY29TcG9ydDwvb3B0aW9uPlx0XHRcdFx0XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLTxpbnB1dCByZXF1aXJlZD1cInJlcXVpcmVkXCIgY2hlY2tlZCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBHw7NwXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIvPi0tPlxyXG5cdFx0XHQ8IS0tPGxhYmVsPlRy4bqjIEfDs3A8L2xhYmVsPi0tPlxyXG5cdFx0XHQ8IS0tPGlucHV0IG5hbWU9XCJwYXlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlRy4bqjIEjhur90XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIvPi0tPlxyXG5cdFx0XHQ8IS0tPGxhYmVsPlRy4bqjIEjhur90PC9sYWJlbD4tLT5cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlclBob25lRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlclBob25lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5waG9uZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlclBob25lXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImFyZWFcIj5DaOG7jW4ga2h1IHbhu7FjOiAgIDwvbGFiZWw+XHJcblx0XHRcdDxzZWxlY3QgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGlkPVwiYXJlYVwiIG5hbWU9XCJ1c2VyX2FyZWFcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckFyZWFcIj5cclxuXHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiVFAgSOG7kyBDaMOtIE1pbmhcIj5UUCBI4buTIENow60gTWluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggRMawxqFuZzwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+xJDhu5NuZyBOYWk8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDoCBS4buLYSAtIFbFqW5nIFTDoHU8L29wdGlvbj5cdFx0XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6xuaCBQaMaw4bubYzwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggVGh14bqtbjwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+VMOieSBOaW5oPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5LaMOhYzwvb3B0aW9uPlxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJkYXRlXCI+TmfDoHkgbMOhaSB0aOG7rTogICA8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJEYXRlXCIgdHlwZT1cImRhdGVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmVtYWlsUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRW1haWxcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZmFjZWJvb2tcIiBuZy1jbGljaz1cImZhY2Vib29rTG9naW4oKVwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICRyb290LmxvY2FsaXphdGlvbi5zZW5kXCI+PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tPHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5ub3RlUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XHJcblx0XHRcdCA8L2ZpZWxkc2V0PlxyXG5cdFx0XHRcclxuXHRcdDwvZm9ybT5gLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgbGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuICAgICAgICAgICAgc2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmFwcEN0cmwgPSAkcm9vdFNjb3BlLmFwcEN0cmw7XHJcbiAgICAgICAgICAgIHNjb3BlLnN1Ym1pdCA9ICRyb290U2NvcGUuc3VibWl0UmVnaXN0ZXI7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gc2NvcGUuZ29vZ2xlTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgYW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1dXHJcblxyXG52YXIgZmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnLCAndXNlclR5cGUnLCAndXNlckNhdGUnLCAndXNlckFyZWEnLCd1c2VyRGF0ZSddOyIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibW9kYWxPbmUtYmFja2Ryb3BcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIiBuZy1jbGljaz1cImNsb3NlTW9kYWwoKVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWxPbmUtd3JhcHBlclwiIG5nLWNsaWNrPVwidG9nZ2xlKCRldmVudClcIj5cclxuXHRcdFx0ICAgIDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgc2NvcGUuY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzY29wZS50b2dnbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRyZWFkeTogJz0nLFxyXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCIgdWktc3JlZj1cImhvbWVcIj48L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlUG9wdXAoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlTW9kYWxQb3B1cCgpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cclxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxyXG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IGNoaWxkcHJvZHVjdEFjdGl2ZUNsYXNzKCl9XCI+LS0+XHJcblx0XHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiB1aS1zcmVmPVwiY2hpbGRQcm9kdWN0XCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5jaGlsZHByb2R1Y3RcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHRcdDwhLS08L2Rpdj4tLT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IHByb2R1Y3RBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiB1aS1zcmVmPVwicHJvZHVjdFwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ucHJvZHVjdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cIm5ld3NcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51XCI+XHJcblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cIm1lbnUtaGVhZGluZ1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgbmctYmluZD1cIml0ZW0ubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudXNcIiBuZy1pZj1cIml0ZW0uY2hpbGRyZW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnUgc3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImNoaWxkLm5hbWVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCJcclxuXHRcdFx0XHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHthbGlhczogY2hpbGQuYWxpYXN9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogcHJvZHVjdEFjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiB1aS1zcmVmPVwicHJvZHVjdFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnByb2R1Y3RcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJuZXdzXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdHNjb3BlLmxpbmtzID0gbWV0YVNlcnZpY2UubGlua3M7XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuYnVyZ2VyQWN0aXZlID0gIXNjb3BlLmJ1cmdlckFjdGl2ZTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnRvZ2dsZVBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXA7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVNb2RhbFBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5tb2RhbFBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5tb2RhbFBvcHVwO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS50b2dnbGVCdXJnZXIoKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLm5ld3NBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ25ld3MnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNjb3BlLnByb2R1Y3RBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ3Byb2R1Y3QnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNjb3BlLmNoaWxkcHJvZHVjdEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09PSAnZm9yZCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1dOyIsImxldCBtYWluRm9udCA9IFwiMTRweCAnT3BlbiBTYW5zJ1wiLCBjaGlsZEZvbnQgPSBcIjEzcHggJ09wZW4gU2FucydcIiwgcGFkZGluZyA9IDgwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCwgJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7XHJcblx0XHRcdGluc3RhbmNlOiAnPSdcclxuXHRcdH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1zdHlsZT1cInt3aWR0aDogbWF4V2lkdGgrJ3B4J31cIiBuZy1jbGFzcz1cInthY3RpdmU6IGxpbmtBY3RpdmVDbGFzcyhpbnN0YW5jZSl9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIG5nLWJpbmQ9XCJpbnN0YW5jZS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaW5zdGFuY2UpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJsaW5rLm5hbWVcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGluc3RhbmNlLmNoaWxkcmVuXCJcclxuXHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHthbGlhczogbGluay5hbGlhc30pXCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHNjb3BlLm1heFdpZHRoID0gc2NvcGUuaW5zdGFuY2UubmFtZS53aWR0aChtYWluRm9udCkgKyBwYWRkaW5nO1xyXG5cclxuXHRcdFx0aWYgKHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuICYmIHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGN1cnJlbnRXaWR0aCA9IGNoaWxkLm5hbWUud2lkdGgoY2hpbGRGb250KSArIHBhZGRpbmc7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFdpZHRoID4gc2NvcGUubWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdFx0c2NvcGUubWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjb3BlLmxpbmtBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwICYmICRyb290U2NvcGUuYWN0aXZlR3JvdXAuaWQgPT09IGluc3RhbmNlLmlkO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYW52YXMgdG9wLXNlcGFyYXRlZCBuZXdzLWFyZWFcIj5cclxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxyXG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0c2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmVuYWJsZSA9ICFzY29wZS5lbmFibGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiY29uc3QgaW5pdGlhbFRvcE9mZnNldCA9IDEyMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCIgbmctc3R5bGU9XCJ7dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyt0b3BQb3NpdGlvbisncHgpJ31cIj5cclxuXHRcdFx0PCEtLTxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+LS0+XHJcblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic21hbGwtYmFubmVyXCI+PC9kaXY+LS0+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdFx0PCEtLTxzdWJzY3JpcHRpb24tZm9ybSBtb2RhbD1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPi0tPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZWJhci1uZXdzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmV3cy1zdW1tYXJ5XCIgbmctcmVwZWF0PVwibmV3c0l0ZW0gaW4gbmV3c1wiIHVpLXNyZWY9XCJuZXdzKHthbGlhczogbmV3c0l0ZW0uUG9zdC5hbGlhc30pXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2VcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZVwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LnRpdGxlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0dmFyIHNpZGViYXJIZWlnaHQsIGZvb3RlckhlaWdodDsgc2NvcGUudG9wUG9zaXRpb24gPSAwO1xyXG5cclxuXHRcdFx0Ly9TYWZlbHkgY2FsY3VsYXRlIGVsZW1lbnQncyBzaXplIGFmdGVyIHN0dWZmIGhhdmUgYmVlbiByZW5kZXJlZCFcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZGViYXJIZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdFx0Zm9vdGVySGVpZ2h0ID0gYW5ndWxhci5lbGVtZW50KCcjZm9vdGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHRcdCRyb290U2NvcGUuJG9uKCdzY3JvbGxDaGFuZ2UnLCAoZXZlbnQsIHNjcm9sbFBvc2l0aW9uKSA9PiB7XHJcblx0XHRcdFx0c2NvcGUubmV3cyA9ICRyb290U2NvcGUubmV3cztcclxuXHJcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBkb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpLCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdFx0XHRcdG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbFBvc2l0aW9uLnNjcm9sbGluZ0Rvd24pIHtcclxuXHRcdFx0XHRcdFx0bGV0IHNjcm9sbERvd25Ub3VjaEJvdHRvbSA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IG9mZnNldC50b3AgKyBzaWRlYmFySGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbERvd25PdmVyRm9vdGVyID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gZG9jdW1lbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoc2Nyb2xsRG93blRvdWNoQm90dG9tICYmICFzY3JvbGxEb3duT3ZlckZvb3Rlcikge1xyXG5cdFx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0IC0gc2lkZWJhckhlaWdodCAtIGluaXRpYWxUb3BPZmZzZXQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24udG9wIDwgb2Zmc2V0LnRvcCAtIGluaXRpYWxUb3BPZmZzZXQpIHtcclxuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3A7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRpbnRlcnZhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgaXRlbXM6ICc9JyB9LFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCJcclxuXHRcdFx0bmctc3dpcGUtbGVmdD1cInN3aXBlTGVmdCgkZXZlbnQpXCIgbmctc3dpcGUtcmlnaHQ9XCJzd2lwZVJpZ2h0KCRldmVudClcIj5cclxuXHRcdFx0PGRpdiBpZD1cImN1cnJlbnRTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtbmF2aWdhdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1uZXh0XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLWJhY2tcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWl0ZW1cIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uaXNBY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiIG5nLWNsaWNrPVwibmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdGxldCAkYWN0aXZlU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNjdXJyZW50U2xpZGUnKSwgJHByZXZpb3VzU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNwcmV2aW91c1NsaWRlJyksXHJcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XHJcblxyXG5cdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cclxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpdGVtcycsICgpID0+IHtcclxuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcclxuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5wcmV2aW91c1NsaWRlKSBzY29wZS5wcmV2aW91c1NsaWRlLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4ICE9IHVuZGVmaW5lZCA/IG5leHRJbmRleCA6IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcclxuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPCAwKSB7XHJcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IHNjb3BlLml0ZW1zLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzY29wZS5hY3RpdmVJbmRleCA+PSBzY29wZS5pdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVTbGlkZSkgc2NvcGUuYWN0aXZlU2xpZGUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXHJcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xyXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJGFjdGl2ZVNsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICctMTAwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30pO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcclxuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXNldCBpbnRlcnZhbDtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XHJcblx0XHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uYXZpZ2F0ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZSAhPSBzY29wZS5hY3RpdmVTbGlkZSkge1xyXG5cdFx0XHRcdFx0bmV4dFNsaWRlKHNjb3BlLml0ZW1zLmluZGV4T2YoaW5zdGFuY2UpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5zd2lwZUxlZnQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4ICsgMSk7XHJcblx0XHRcdHNjb3BlLnN3aXBlUmlnaHQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4IC0gMSk7XHJcblxyXG5cdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBtb2RhbDogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJtb2RhbFwiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XHJcblx0XHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiYXBwQ3RybC5jbG9zZVJlZ2lzdGVyRm9ybSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVIZWFkIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZVRhaWwgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5mdWxsTmFtZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5hbWVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImpvYlwiPkNo4buNbiBkw7JuZyB4ZTogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IGlkPVwiam9iXCIgbmFtZT1cInVzZXJfam9iXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJUeXBlXCI+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEZpZXN0YTwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBSYW5nZXI8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRXZlcmVzdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBUcmFuc2l0PC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIE5ldyBGb2N1czwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBFY29TcG9ydDwvb3B0aW9uPlx0XHRcclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFxyXG5cdFx0XHQgXHJcbiAgICAgXHJcbiAgICAgICAgICA8bGFiZWw+SMOsbmggdGjhu6ljIHRoYW5oIHRvw6FuOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwidW5kZXJfMTNcIiB2YWx1ZT1cIlRy4bqjIEfDs3BcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckNhdGVcIiBuYW1lPVwidXNlcl9hZ2VcIj48bGFiZWwgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAyMHB4XCIgZm9yPVwidW5kZXJfMTNcIiBjbGFzcz1cImxpZ2h0XCI+VHLhuqMgR8OzcDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJvdmVyXzEzXCIgdmFsdWU9XCJUcuG6oyBI4bq/dFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiIG5hbWU9XCJ1c2VyX2FnZVwiPjxsYWJlbCAgZm9yPVwib3Zlcl8xM1wiIGNsYXNzPVwibGlnaHRcIj5UcuG6oyBo4bq/dDwvbGFiZWw+XHJcbiAgICAgICBcclxuXHRcdFx0XHJcblx0XHRcdDwhLS08aW5wdXQgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNoZWNrZWQgbmFtZT1cInBheVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiVHLhuqMgR8OzcFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBHw7NwPC9sYWJlbD4tLT5cclxuXHRcdFx0PCEtLTxpbnB1dCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBI4bq/dFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBI4bq/dDwvbGFiZWw+LS0+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLnBob25lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyUGhvbmVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiYXJlYVwiPkNo4buNbiBraHUgduG7sWM6ICAgPC9sYWJlbD5cclxuXHRcdFx0PHNlbGVjdCByZXF1aXJlZD1cInJlcXVpcmVkXCIgaWQ9XCJhcmVhXCIgbmFtZT1cInVzZXJfYXJlYVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQXJlYVwiPlxyXG5cdFx0XHRcdDxvcHRpb24+VFAgSOG7kyBDaMOtIE1pbmg8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIETGsMahbmc8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPsSQ4buTbmcgTmFpPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6AgUuG7i2EgLSBWxaluZyBUw6B1PC9vcHRpb24+XHRcdFxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggUGjGsOG7m2M8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIFRodeG6rW48L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPlTDonkgTmluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+S2jDoWM8L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZW1haWxQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJFbWFpbFwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8IS0tPHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5ub3RlUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XHJcblx0XHRcdCA8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZmFjZWJvb2tcIiBuZy1jbGljaz1cImZhY2Vib29rTG9naW4oKVwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICRyb290LmxvY2FsaXphdGlvbi5zZW5kXCI+PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgPC9maWVsZHNldD5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvcm0+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0bGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0c2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdHNjb3BlLmFwcEN0cmwgPSAkcm9vdFNjb3BlLmFwcEN0cmw7XHJcblxyXG5cdFx0XHRzY29wZS5zdWJtaXQgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyO1xyXG5cclxuXHJcblx0XHQvLyBcdHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gXHRcdFx0YW50c19nb29nbGVBdXRoQ2xpY2soKTtcclxuXHRcdC8vIFx0XHR9O1xyXG4gICAgICAgIC8vXHJcblx0XHQvLyBcdFx0c2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIFx0XHRcdGFudHNfZmJBdXRoQ2xpY2soJ2xvZ2luJyk7XHJcblx0XHQvLyB9O1xyXG5cdFx0fVxyXG5cdH1cclxufV1cclxuXHJcbnZhciBmaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCcsICd1c2VyVHlwZScsICd1c2VyQ2F0ZScsICd1c2VyQXJlYScsJ3VzZXJEYXRlJ107IiwiaW1wb3J0IHtcclxuXHRnZW5lcmF0ZU51bWJlclVVSUQsXHJcblx0cmVnaXN0ZXJGaWVsZHMsXHJcblx0ZmluZFBhcmVudE1lbnVCeUFsaWFzLFxyXG5cdGxhbmd1YWdlc1xyXG59IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgYXBwbGljYXRpb25Db250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHN0YXRlJywgJyR0aW1lb3V0JywgJyRpbnRlcnZhbCcsICckd2luZG93JywgJyRodHRwJywgJ25nUHJvZ3Jlc3NGYWN0b3J5JywgJ21ldGFTZXJ2aWNlJ107XHJcblx0ZGV2ZWxvcG1lbnRNb2RlID0gZmFsc2U7XHJcblx0cmVhZHkgPSB0cnVlO1xyXG5cdGFjdGl2ZVBhZ2UgPSAnc3BsYXNoJztcclxuXHRidXJnZXJBY3RpdmUgPSBmYWxzZTtcclxuXHRzdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZTtcclxuXHRtb2RhbFBvcHVwID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQsICRpbnRlcnZhbCwgJHdpbmRvdywgJGh0dHAsICBuZ1Byb2dyZXNzRmFjdG9yeSwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdCRyb290U2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7IC8vV2lsbCBiZSB1bmRlZmluZWQgYXQgZmlyc3QgPT4gbm90IHNhZmUgZm9yIG5vcm1hbCB1c2FnZSwganVzdCBmb3IgdHJhbnNsYXRpb24hXHJcblx0XHQkcm9vdFNjb3BlLmFwcEN0cmwgPSB0aGlzO1xyXG5cclxuXHRcdHRoaXMubW9kYWxPbmVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUd29BY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUaHJlZUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdHRoaXMubmFtZSA9IFwiQ2xvdWQhXCI7XHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW107XHJcblx0XHR0aGlzLnByb2dyZXNzID0gbmdQcm9ncmVzc0ZhY3RvcnkuY3JlYXRlSW5zdGFuY2UoKTtcclxuXHRcdHRoaXMucHJvZ3Jlc3Muc2V0Q29sb3IoJyNGQTgzMjInKTtcclxuXHRcdGdsb2JhbC4kaHR0cCA9ICRodHRwO1xyXG5cclxuXHRcdGdsb2JhbC50b2dnbGVNb2RhbCA9IChuZXdWYWxsKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubW9kYWxQb3B1cCA9IG5ld1ZhbGwgPyBuZXdWYWxsIDogIXRoaXMubW9kYWxQb3B1cDtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGdsb2JhbC50b2dnbGVQb3B1cCA9IChuZXdWYWwpID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IG5ld1ZhbCA/IG5ld1ZhbCA6ICF0aGlzLnN1YnNjcmlwdGlvblBvcHVwO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy50b2dnbGVTdWNjZXNzID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSBmYWxzZSwgMzAwMCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsICgpID0+IHtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5zdGFydCgpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpID0+IHtcclxuXHRcdFx0dGhpcy5hY3RpdmVQYWdlID0gdG9TdGF0ZS5uYW1lO1x0dGhpcy5yZWFkeSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLnByb2dyZXNzLmNvbXBsZXRlKCk7XHJcblxyXG5cdFx0XHQvL1NldCBtZXRhJ3MgY29udGVudCBmb3IgQVVESUVOQ0UgU0VHTUVOVCFcclxuXHRcdFx0bGV0IGN1cnJlbnRTZWdtZW50ID0gJ2hvbWUnO1xyXG5cdFx0XHRpZiAoJHN0YXRlLmlzKCdwYWdlJykpIHtcclxuXHRcdFx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50TWVudSA9IGZpbmRQYXJlbnRNZW51QnlBbGlhcyhwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKTtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9IHBhcmVudE1lbnUubmFtZTtcclxuXHRcdFx0fSBlbHNlIGlmICgkc3RhdGUuaXMoJ25ld3MnKSkge1xyXG5cdFx0XHRcdGN1cnJlbnRTZWdtZW50ID0gJ25ld3MnXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCQoJChcIm1ldGFbbmFtZT0nYWR4OnNlY3Rpb25zJ11cIilbMF0pLmF0dHIoJ2NvbnRlbnQnLCBjdXJyZW50U2VnbWVudCk7XHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS50cmlnZ2VyKCdyZWFkeScpOyAvL01hbnVhbGx5IHRyaWdnZXIgcmVhZHkgZXZlbnQsIHdoaWNoIGhvcGUgYWxzbyB0cmlnZ2VyIEFudHMnIHNjcmlwdCFcclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdH0pO1xyXG5cclxuXHJcblx0XHRsZXQgZmV0Y2hFc3NlbnRpYWxEYXRhID0gKHNvdXJjZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmluZm8oXCJMb2FkaW5nLi5cIiwgc291cmNlKTtcclxuXHRcdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICdmb290ZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmZvb3RlcnMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnbmV3cycsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQsIGxpbWl0OiA0IH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHQkcm9vdFNjb3BlLm5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG1ldGFTZXJ2aWNlLnJlYWR5KSBmZXRjaEVzc2VudGlhbERhdGEoXCJiZWNhdXNlIHRoZSBkYXRhIGFscmVhZHkgZmV0Y2hlZCFcIik7XHJcblx0XHQkcm9vdFNjb3BlLiRvbignbWV0YVNlcnZpY2VSZWFkeScsICgpID0+IGZldGNoRXNzZW50aWFsRGF0YShcImJlY2F1c2UgbWV0YSBzZXJ2aWNlIHJlYWR5IGZpcmVkIVwiKSk7XHJcblxyXG5cdFx0dGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSAwO1xyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbCgoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHRvcFNjcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdzY3JvbGxDaGFuZ2UnLCB7dG9wOiB0b3BTY3JvbGwsIHNjcm9sbGluZ0Rvd246IHRvcFNjcm9sbCA+IHRoaXMubGFzdFNjcm9sbFBvc2l0aW9ufSk7XHJcblx0XHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gdG9wU2Nyb2xsO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JCh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2l6ZUNoYW5nZScsIHtcclxuXHRcdFx0XHRoZWlnaHQ6ICQod2luZG93KS5oZWlnaHQoKSxcclxuXHRcdFx0XHR3aWR0aDogJCh3aW5kb3cpLndpZHRoKClcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL1JlZ2lzdGVyIGZvcm0hXHJcblx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuXHRcdFx0dGhpc1tmaWVsZF0gPSAnJzsgdGhpc1tmaWVsZCsnRXJyb3InXSA9ICcnO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5jbG9zZVJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25Qb3B1cCA9IGZhbHNlO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJGb3JtID0gKCkgPT4ge1xyXG5cdFx0XHRyZWdpc3RlckZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHRoaXNbZmllbGRdID0gJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJFcnJvciA9ICgpID0+IHtcclxuXHRcdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB0aGlzW2ZpZWxkKydFcnJvciddID0gJycpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnN1Y2Nlc3NHaWZJbWFnZSA9IGB1cmwoaW1hZ2VzL29ub2Zmb25jZS5naWY/JHtnZW5lcmF0ZU51bWJlclVVSUQoMTApfSlgO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2U7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblx0XHRcdH0sIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnN1Ym1pdFJlZ2lzdGVyID0gJHJvb3RTY29wZS5zdWJtaXRSZWdpc3RlciA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4sIHByb2R1Y3Rpb24gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicHJvZHVjdGlvbiBtb2RlOlwiLCBwcm9kdWN0aW9uKTtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgdGhpcy5yZXNldFJlZ2lzdGVyRXJyb3IoKTtcclxuXHJcblx0XHRcdGlmICh0aGlzWyd1c2VyTmFtZSddLmxlbmd0aCA8IDEpIHRoaXNbJ3VzZXJOYW1lRXJyb3InXSA9ICdOaOG6rXAgdMOqbic7XHJcblx0XHRcdGlmICh0aGlzWyd1c2VyUGhvbmUnXS5sZW5ndGggPCA4KSB0aGlzWyd1c2VyUGhvbmVFcnJvciddID0gJ1Phu5EgxJFp4buHbiB0aG/huqFpIGNoxrBhIMSRw7puZyc7XHJcblx0XHRcdGlmICh0aGlzWyd1c2VyVHlwZSddLmxlbmd0aCA8IDgpIHRoaXNbJ3VzZXJUeXBlRXJyb3InXSA9ICdOaOG6rXAgVHllZWVlZSc7XHJcblx0XHRcdGlmICh0aGlzWyd1c2VyTmFtZUVycm9yJ10gfHwgdGhpc1sndXNlclBob25lRXJyb3InXSB8fCB0aGlzWyd1c2VyVHlwZUVycm9yJ10pIHJldHVybjtcclxuXHJcblx0XHRcdHZhciBsb2NhbFVzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIl91c2VySW5mb1wiKSksXHJcblx0XHRcdFx0Zm9ybURhdGEgPSB7XHJcblx0XHRcdFx0XHQuLi5sb2NhbFVzZXJJbmZvLFxyXG5cdFx0XHRcdFx0ZG9tYWluLFxyXG5cdFx0XHRcdFx0ZnVsbE5hbWU6IHRoaXNbJ3VzZXJOYW1lJ10sXHJcblx0XHRcdFx0XHRuYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdFx0dHlwZTogdGhpc1sndXNlclR5cGUnXSxcclxuXHRcdFx0XHRcdGNhdGU6IHRoaXNbJ3VzZXJDYXRlJ10sXHJcblx0XHRcdFx0XHRwaG9uZTogdGhpc1sndXNlclBob25lJ10sXHJcblx0XHRcdFx0XHRhcmVhOiB0aGlzWyd1c2VyQXJlYSddLFxyXG5cdFx0XHRcdFx0ZGF0ZTogdGhpc1sndXNlckRhdGUnXSxcclxuXHRcdFx0XHRcdGVtYWlsOiB0aGlzWyd1c2VyRW1haWwnXSxcclxuXHRcdFx0XHRcdG5vdGU6IHRoaXNbJ3VzZXJOb3RlJ11cclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly9GaXJlIEFudHMgdHJhY2tpbmdHb2FsIGhvb2shXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSBhZHhfYW5hbHl0aWMudHJhY2tpbmdHb2FsKG1ldGFTZXJ2aWNlLmNvbmZpZ3MuYW50c1JlZ2lzdGVyR29hbElkLCAxLCAnZXZlbnQnKTtcclxuXHRcdFx0Ly9TZW5kIGZvcm0gaW5mb3JtYXRpb24gdG8gQW50cyFcclxuXHJcblx0XHRcdGNvbnNvbGUubG9nKGZvcm1EYXRhLm5vdGUpO1xyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdGFudHNfdXNlckluZm9MaXN0ZW5lcihmb3JtRGF0YSwgZmFsc2UsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGFudHNfdXNlckluZm9MaXN0ZW5lcilcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblxyXG5cdFx0XHQvL0ZhY2Vib29rIHRyYWNraW5nIExlYWQvQ29tcGxldGVSZWdpc3RyYXRpb24gZXZlbnRcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnTGVhZCcpO1xyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgZmJxKCd0cmFjaycsICdDb21wbGV0ZVJlZ2lzdHJhdGlvbicpO1xyXG5cclxuXHRcdFx0Ly9UcmFja2luZyBHb29nbGUgQW5hbHl0aWMgZ29hbCFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRnYSgnc2VuZCcsIHtcclxuXHRcdFx0XHRcdGhpdFR5cGU6ICdldmVudCcsXHJcblx0XHRcdFx0XHRldmVudENhdGVnb3J5OiAnU3Vic2NyaXB0aW9uJyxcclxuXHRcdFx0XHRcdGV2ZW50QWN0aW9uOiAnU3VibWl0J1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdGFudHNfYW5hbHl0aWMucHVzaCh7XHJcblx0XHRcdFx0XHRjb252ZXJzaW9uSWQgOiBtZXRhU2VydmljZS5jb25maWdzLmFudHNDb252ZXJzaW9uSWQsXHJcblx0XHRcdFx0XHRjdXN0b21QYXJhbXMgOiBbXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHQnaXNfZWNvbW0nOiAwLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV9wYWdldHlwZSc6ICdwdXJjaGFzZScsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3F1YW50aXR5JzogMSxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fdG90YWx2YWx1ZSc6IDFcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0aGlzLnJlc2V0UmVnaXN0ZXJGb3JtKCk7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5tb2RhbFBvcHVwID0gZmFsc2U7XHJcblxyXG5cdFx0XHQvL1NlbmQgZm9ybSB0byBUd2luJ3Mgc2VydmVyIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9jdXN0b21lci9pbnNlcnQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogZm9ybURhdGFcclxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlcigpO1xyXG5cdFx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21haWwvc2VudC9qc29uYCwge3BhcmFtczogZm9ybURhdGF9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZW1haWwuLi4nLCBkYXRhKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIoKTsgLy9BdXRvIHN1Y2Nlc3Mgb24gdGVzdCBlbnZpcm9ubWVudCFcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHRnbG9iYWwuZ2V0X2luZm8gPSAoX3VzZXJJbmZvKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdC8vIHVzZXIgaW5mbyBnZXQgaGVyZVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiYW50J3MgZ2V0X2luZm8gZnVuY3Rpb246XCIsIF91c2VySW5mbyk7XHJcblxyXG5cdFx0XHRcdC8vIGZpbGwgdXNlckluZm8gdG8gRk9STSDEkcSDbmcga8O9XHJcblx0XHRcdFx0dGhpcy51c2VyTmFtZSA9IF91c2VySW5mby5uYW1lIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlclBob25lID0gX3VzZXJJbmZvLnBob25lIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlckVtYWlsID0gX3VzZXJJbmZvLmVtYWlsIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlckNhdGUgPSBfdXNlckluZm8uY2F0ZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJUeXBlID0gX3VzZXJJbmZvLnR5cGUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyQXJlYSA9IF91c2VySW5mby5hcmVhIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlck5vdGUgPSBfdXNlckluZm8ubm90ZSB8fCAnJztcclxuXHJcblx0XHRcdFx0Ly9TdG9yZSBTb2NpYWwgcHJvZmlsZVxyXG5cdFx0XHRcdGlmIChfdXNlckluZm8pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiX3VzZXJJbmZvXCIsIEpTT04uc3RyaW5naWZ5KF91c2VySW5mbykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblx0fVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBjaGlsZHByb2R1Y3RDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckd2luZG93JywgJyRodHRwJywgICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkd2luZG93LCAkaHR0cCwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG4gICAgICAgIGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHJcblxyXG4gICAgICAgIC8vVHJhY2tpbmcgY29kZS4uXHJcbiAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuICAgICAgICBmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9wb3N0L2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBkb21haW4sIGFsaWFzOiB0aGlzLnBhZ2VBbGlhcyAsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEucmVzdWx0c1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZpZXN0YScsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRmllID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkcmFuZ2VyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRSYW4gPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmRldmVyZXN0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRFdmUgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmRlY29zcG9ydCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRWNvID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkdHJhbnNpdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkVHJhID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZm9jdXMnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEZvYyA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsTmV3cyA9IGRhdGEucmVzdWx0cztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZWNvc3BvcnQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEVjb3Nwb3J0ID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkcmFuZ2VyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRSYW5nZXIgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmRldmVyZXN0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRFdmVyZXN0ID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZmllc3RhJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRGaWVzdGEgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmR0cmFuc2l0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRUcmFuc2l0ID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZm9jdXMnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEZvY2N1cyA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICAkc2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBtYWluQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRpbnRlcnZhbCcsICckdGltZW91dCcsICckc3RhdGUnLCAnJHdpbmRvdycsICckaHR0cCcsICdtZXRhU2VydmljZSddO1xyXG5cclxuXHRmZWF0dXJlcyA9IFtdO1xyXG5cdHNsaWRlcnMgPSBbXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGludGVydmFsLCAkdGltZW91dCwgJHN0YXRlLCAkd2luZG93LCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdHRoaXMubW9kYWxPbmVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUd29BY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUaHJlZUFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHJcblx0XHR0aGlzLnN1Ym1pdE1vZGFsT25lID0gKCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnaGVoZWhlaCcpO1xyXG5cdFx0fTtcclxuXHJcblx0XHQvLyB0aGlzLnNob3dNb2RhbE9uZSAgPSAoKSA9PiB7XHJcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwiPz9cIik7XHJcblx0XHQvLyBcdHRoaXMubW9kYWxPbmVBY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gfTtcclxuXHJcblx0XHQvL1RyYWNraW5nIGNvZGUuLlxyXG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuXHRcdGZicSgndHJhY2snLCBcIlBhZ2VWaWV3XCIpO1xyXG5cdFx0dGhpcy5oaWRkZW4gPSBmYWxzZTtcclxuXHRcdCRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBtZXRhU2VydmljZS5saW5rc1swXTsgJHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHtcclxuXHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgYWxpYXM6IFwidHJhbmctY2h1XCIgfVxyXG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzID0gW2RhdGEucmVzdWx0c1swXS5QYWdlXTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICdiYW5uZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuZmVhdHVyZXMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnSG9tZVNsaWRlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0dGhpcy5zbGlkZXJzID0gZGF0YS5yZXN1bHRzLm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gaXRlbS5Qb3N0O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuc2xpZGVySGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gNzA7XHJcblx0XHQkcm9vdFNjb3BlLiRvbignc2l6ZUNoYW5nZScsIChldmVudCwgc2l6ZSkgPT4ge1xyXG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNsaWRlckhlaWdodCA9IHNpemUuaGVpZ2h0ID4gNTcwID8gc2l6ZS5oZWlnaHQgLSA3MCA6IDUwMDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBuZXdzQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAgJyRzdGF0ZScsICdtZXRhU2VydmljZSddO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkd2luZG93LCAkaHR0cCwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHR0aGlzLmxvYWREYXRhID0gKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbnVsbDtcclxuXHJcblx0XHRcdHRoaXMucGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhczsgJHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdFx0dGhpcy5zaW5nbGVNb2RlID0gdGhpcy5wYWdlQWxpYXMgIT09ICcnO1xyXG5cclxuXHRcdFx0aWYgKHRoaXMuc2luZ2xlTW9kZSkge1xyXG5cdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wb3N0L2dldC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgYWxpYXM6IHRoaXMucGFnZUFsaWFzICwgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHRcdGlmIChkYXRhLnJlc3VsdHNbMF0pIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdFx0dGhpcy5hbGxOZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0JHNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGVsZW1lbnQsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdHRoaXMubG9hZERhdGEgPSAoKSA9PiB7XHJcblx0XHRcdGxldCBwYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzLCBwYXJlbnRHcm91cCA9IHRoaXMuZmluZFBhcmVudEdyb3VwKHBhZ2VBbGlhcywgbWV0YVNlcnZpY2UubGlua3MpLFxyXG5cdFx0XHRcdHByZXZpb3VzR3JvdXAgPSAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwOyAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gcGFyZW50R3JvdXA7XHJcblxyXG5cdFx0XHRpZihwYWdlQWxpYXMgPT0gJ3RyYW5nLWNodScpIHsgJHN0YXRlLmdvKCdob21lJyk7IHJldHVybjsgfVxyXG5cclxuXHRcdFx0Ly9LaWNrIGJhY2sgdG8gdGhlIEhvbWUgcGFnZSBpZiBpdCdzIG5vdCBhIGxpbmsgaW4gbWVudVxyXG5cdFx0XHRpZiAoIXBhcmVudEdyb3VwIHx8ICFwYXJlbnRHcm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcmVudEdyb3VwID09PSBwcmV2aW91c0dyb3VwKSB7IC8vSWYgdGhlIHBhcmVudCBncm91cCBpcyBhbHJlYWR5IGFjdGl2ZSA9PiBzY3JvbGwgdG8gdGhlIGNoaWxkIHNlY3Rpb24hXHJcblx0XHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXHJcblx0XHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuXHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG5cdFx0XHRcdH0sIDgwMCk7XHJcblx0XHRcdH0gZWxzZSB7IC8vRmluYWxseSwgbG9hZCB0aGUgcGFnZSA9PiBzZXQgcGFnZSdzIGNoaWxkcmVuIGNvbnRlbnQhXHJcblx0XHRcdFx0bGV0IGxvYWRlZENvdW50ID0gMDsgJHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vUmVzZXQgdGhlIHNjcm9sbCBpZiBsb2FkaW5nIGZyb20gdGhlIGJlZ2lubmluZyFcclxuXHRcdFx0XHRwYXJlbnRHcm91cC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0ge307XHJcblx0XHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHsgcGFyYW1zOiB7IGRvbWFpbiwgYWxpYXM6IGNoaWxkLmFsaWFzIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGNoaWxkUmVzdWx0ID0gZGF0YS5yZXN1bHRzWzBdO1xyXG5cdFx0XHRcdFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xyXG5cdFx0XHRcdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0gY2hpbGRSZXN1bHQuUGFnZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSkuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxvYWRlZENvdW50Kys7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobG9hZGVkQ291bnQgPj0gcGFyZW50R3JvdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgKGFmdGVyIGFsbCBjb250ZW50IGFyZSByZWFkeSBmcm9tIHNlcnZlciEpXHJcblx0XHRcdFx0XHRcdFx0Ly8gdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXHJcblx0XHRcdFx0XHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuXHRcdFx0XHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHQkcm9vdFNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGZpbmRQYXJlbnRHcm91cCAoYWxpYXMsIGxpbmtzKSB7XHJcblx0XHRmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdGlmIChsaW5rLmFsaWFzICYmIGxpbmsuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gbGluaztcclxuXHJcblx0XHRcdGlmIChsaW5rLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGluay5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzICYmIGNoaWxkLmFsaWFzID09IGFsaWFzKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsaW5rO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBwcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckdGltZW91dCddO1xyXG5cclxuICAgIHN1Yk1lbnVzID0gc3ViTWVudXM7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ2xvdWRcIjtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJNZW51cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8gKGVsZW1lbnRJZCkge1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjJHtlbGVtZW50SWR9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Yk1lbnVzID0gW1xyXG4gICAgeyB0aXRsZTogJ0dp4bubaSB0aGnhu4d1IGNodW5nJywgY29udGVudElkOiBcImdpb2l0aGlldWNodW5nXCIgfSxcclxuICAgIHsgdGl0bGU6ICdDw7RuZyBuZ2jhu4cnLCBjb250ZW50SWQ6IFwiY29uZ25naGVcIiB9LFxyXG4gICAgeyB0aXRsZTogJ03DoHUgc+G6r2MnLCBjb250ZW50SWQ6IFwibWF1c2FjXCIgIH0sXHJcbiAgICB7IHRpdGxlOiAnVGjDtG5nIHPhu5Ega+G7uSB0aHXhuq10JywgY29udGVudElkOiBcInRob25nc29reXRodWF0XCIgIH0sXHJcbl0iLCJleHBvcnQgY2xhc3MgcHJvZHVjdENvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cclxuXHRcdHRoaXMubW9kYWxPbmVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUd29BY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUaHJlZUFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7XHJcblx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0dGhpcy5zaW5nbGVNb2RlID0gdGhpcy5wYWdlQWxpYXMgIT09ICcnO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3Bvc3QvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7ZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXN9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlTmV3cyA9IGRhdGEucmVzdWx0c1swXS5Qb3N0O1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdwcm9kdWN0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5hbGxQcm9kdWN0ID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XHJcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xyXG5cdH1cclxuXHJcblx0c2tpcEludHJvICgpIHtcclxuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IGZpeEFuYWx5dGljTWlzc2luZyB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcclxuXHJcbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge25ld3NDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL25ld3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7cHJvZHVjdENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcHJvZHVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtjaGlsZHByb2R1Y3RDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2NoaWxkcHJvZHVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhcnRpYWwvcHJvZHVjdENhdGVNZW51Q29udHJvbGxlclwiO1xyXG5cclxuXHJcbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcclxuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnQvZm9vdGVyXCI7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudC9zaWRlYmFyXCI7XHJcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9jb21wb25lbnQvbW9kYWxcIjtcclxuaW1wb3J0IG1vZGFsT25lIGZyb20gXCIuL2NvbXBvbmVudC9tb2RhbE9uZVwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jb21wb25lbnQvY2FyZFwiO1xyXG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xyXG5pbXBvcnQgbmV3c0FyZWEgZnJvbSBcIi4vY29tcG9uZW50L25ld3NBcmVhXCI7XHJcbmltcG9ydCBtZXRhU2VydmljZSBmcm9tIFwiLi9tZXRhU2VydmljZVwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJGaWx0ZXIgZnJvbSBcIi4vdXRpbHMvZmlsdGVyXCI7XHJcblxyXG5nbG9iYWwuZml4QW5hbHl0aWNNaXNzaW5nID0gZml4QW5hbHl0aWNNaXNzaW5nO1xyXG5sZXQgQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcGxpY2F0aW9uJywgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ25nUHJvZ3Jlc3MnLCAnbmdUb3VjaCcsICduZ1BhcmFsbGF4JywgJ2FuZ3VsYXItc3BpbmtpdCddKVxyXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxyXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCduZXdzQ3RybCcsIG5ld3NDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwcm9kdWN0Q3RybCcsIHByb2R1Y3RDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdjaGlsZHByb2R1Y3RDdHJsJywgY2hpbGRwcm9kdWN0Q29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3Byb2R1Y3RDYXRlTWVudUN0cmwnLCBwcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyKVxyXG5cdC5zZXJ2aWNlKCdtZXRhU2VydmljZScsIG1ldGFTZXJ2aWNlKVxyXG5cdC5kaXJlY3RpdmUoJ3BvcHVwJywgcG9wdXApXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcclxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0Rm9vdGVyJywgZm9vdGVyKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2xpZGVyJywgc2xpZGVyKVxyXG5cdC5kaXJlY3RpdmUoJ25ld3NBcmVhJywgbmV3c0FyZWEpXHJcblx0LmRpcmVjdGl2ZSgnbW9kYWwnLCBtb2RhbClcclxuXHQuZGlyZWN0aXZlKCdtb2RhbE9uZScsIG1vZGFsT25lKVxyXG5cdC5kaXJlY3RpdmUoJ2NhcmQnLCBjYXJkKVxyXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxyXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xyXG5cclxuXHJcbnJlZ2lzdGVyRmlsdGVyKEFwcCk7XHJcblxyXG5BcHAucnVuKCgpID0+IHtcclxuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xyXG59KTtcclxuXHJcbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcclxuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xyXG5cdFx0fTtcclxuXHR9XHJcbl0pO1xyXG5cclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwbGljYXRpb24nXSk7IiwiaW1wb3J0IHsgbGFuZ3VhZ2VzLCBsb2NhbGl6YXRpb24gfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsICR0aW1lb3V0ICkge1xyXG5cdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5sb2FkTWVudSA9IChjb25maWdzLCBjb25maWdSZXNvbHZlLCBuYXZpZ2F0aW9uUmVzb2x2ZSkgPT4ge1xyXG5cdFx0bGV0IHthcGlIb3N0LCBkb21haW59ID0gY29uZmlncyB8fCB0aGlzLmNvbmZpZ3M7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21lbnUvZ2V0L2pzb25gLCB7XHJcblx0XHRcdHBhcmFtczogeyBkb21haW4sIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxpbmtzID0gZGF0YS5yZXN1bHRzO1xyXG5cclxuXHRcdFx0aWYgKG5hdmlnYXRpb25SZXNvbHZlKSBuYXZpZ2F0aW9uUmVzb2x2ZSh0aGlzLmxpbmtzKTtcclxuXHRcdFx0aWYgKGNvbmZpZ1Jlc29sdmUpIHtcclxuXHRcdFx0XHRjb25maWdSZXNvbHZlKHRoaXMuY29uZmlncyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21ldGFTZXJ2aWNlUmVhZHknKTtcclxuXHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgoY29uZmlnUmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHQkcm9vdFNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuXHRcdCRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZXNbMF07XHJcblxyXG5cdFx0JHJvb3RTY29wZS5sb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb25bJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5sYW5nXTtcclxuXHRcdCRyb290U2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5sb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb25bJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5sYW5nXTtcclxuXHRcdFx0aWYgKCRyb290U2NvcGUuY29uZmlncykgdGhpcy5sb2FkTWVudSgkcm9vdFNjb3BlLmNvbmZpZ3MpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHJvb3RTY29wZS5jaGFuZ2VMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdCRodHRwLmdldCgnL2NvbmZpZ3MnKS5zdWNjZXNzKChkYXRhKSA9PiB7XHJcblx0XHRcdGRhdGEuZG9tYWluID0gZGF0YS5kb21haW4gfHwgbG9jYXRpb24uaG9zdDtcclxuXHRcdFx0bGV0IGNvbmZpZ3MgPSBkYXRhLCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gY29uZmlncztcclxuXHRcdFx0dGhpcy5jb25maWdzID0gY29uZmlncztcclxuXHRcdFx0JHJvb3RTY29wZS5jb25maWdzID0gY29uZmlncztcclxuXHRcdFx0Ly9PdmVycmlkZSB0cmFuc2xhdGlvbiAoaWYgcG9zc2libGUpLi5cclxuXHRcdFx0bGFuZ3VhZ2VzLmZvckVhY2goKHtsYW5nfSkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlncy50cmFuc2xhdGlvbltsYW5nXSkpIHtcclxuXHRcdFx0XHRcdFx0bG9jYWxpemF0aW9uW2xhbmddW2tleV0gPSBjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddW2tleV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChjb25maWdzLmxhbmd1YWdlcykgeyAkcm9vdFNjb3BlLmxhbmd1YWdlcyA9IGNvbmZpZ3MubGFuZ3VhZ2VzOyB9XHJcblxyXG5cclxuXHJcblx0XHRcdG5ldyBQcm9taXNlKChuYXZpZ2F0aW9uUmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkTWVudShjb25maWdzLCBjb25maWdSZXNvbHZlLCBuYXZpZ2F0aW9uUmVzb2x2ZSlcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufV07IiwiaW1wb3J0IHtwcmVsb2FkUmVzb2x2ZXN9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLFxyXG5cdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgncGFnZScsIHBhZ2VSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCduZXdzJywgbmV3c1JvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2NoaWxkUHJvZHVjdCcsIGNoaWxkcHJvZHVjdFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRFY29zcG9ydCcsIGZvcmRlY29zcG9ydFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRFdmVyZXN0JywgZm9yZGV2ZXJlc3RSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkRm9jdXMnLCBmb3JkZm9jdXNSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkUmFuZ2VyJywgZm9yZHJhbmdlclJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRUcmFuc2l0JywgZm9yZHRyYW5zaXRSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdwcm9kdWN0JywgcHJvZHVjdFJvdXRlKTtcclxuXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc3BsYXNoJyk7XHJcblxyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG5cdH1cclxuXTtcclxuXHJcbnZhciBzcGxhc2hSb3V0ZSA9IHtcclxuXHR1cmw6ICcvc3BsYXNoJyxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2VtcHR5TGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdzcGxhc2hDdHJsIGFzIHNwbGFzaEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIG1haW5Sb3V0ZSA9IHtcclxuXHR1cmw6ICcvJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgcGFnZVJvdXRlID0ge1xyXG5cdHVybDogJy86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBwYWdlJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcGFnZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBuZXdzUm91dGUgPSB7XHJcblx0dXJsOiAnL3Rpbi10dWMvOmFsaWFzJyxcclxucmVzb2x2ZToge1xyXG5cdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QG5ld3MnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9uZXdzLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnbmV3c0N0cmwgYXMgbmV3c0N0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIHByb2R1Y3RSb3V0ZSA9IHtcclxuXHR1cmw6ICcvc2FuLXBoYW0vOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAcHJvZHVjdCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL3Byb2R1Y3QuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdwcm9kdWN0Q3RybCBhcyBwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgY2hpbGRwcm9kdWN0Um91dGUgPSB7XHJcblx0dXJsOiAnL2ZvcmQtZmllc3RhLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGNoaWxkUHJvZHVjdCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9jaGlsZFByb2R1Y3QuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmRlY29zcG9ydFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWVjb3Nwb3J0LzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGZvcmRFY29zcG9ydCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkRWNvc3BvcnQuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmRldmVyZXN0Um91dGUgPSB7XHJcblx0dXJsOiAnL2ZvcmQtZXZlcmVzdC86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBmb3JkRXZlcmVzdCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkRXZlcmVzdC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ2NoaWxkcHJvZHVjdEN0cmwgYXMgY2hpbGRwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgZm9yZGZvY3VzUm91dGUgPSB7XHJcblx0dXJsOiAnL2ZvcmQtZm9jdXMvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZEZvY3VzJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2ZvcmRQcm9kdWN0L2ZvcmRGb2N1cy5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ2NoaWxkcHJvZHVjdEN0cmwgYXMgY2hpbGRwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgZm9yZHJhbmdlclJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLXJhbmdlci86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBmb3JkUmFuZ2VyJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2ZvcmRQcm9kdWN0L2ZvcmRSYW5nZXIuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmR0cmFuc2l0Um91dGUgPSB7XHJcblx0dXJsOiAnL2ZvcmQtdHJhbnNpdC86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBmb3JkVHJhbnNpdCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkVHJhbnNpdC5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ2NoaWxkcHJvZHVjdEN0cmwgYXMgY2hpbGRwcm9kdWN0Q3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlckNvbmZpZzsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3Rlcihtb2R1bGVJbnN0YW5jZSkge1xyXG5cdG1vZHVsZUluc3RhbmNlXHJcblx0XHQuZmlsdGVyKCduaWNlRGF0ZScsIG5pY2VEYXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5pY2VEYXRlICgpIHtcclxuXHRyZXR1cm4gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCA9ICdERC1NTS1ZWVlZJykge1xyXG5cdFx0cmV0dXJuIG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcclxuXHR9O1xyXG59IiwiZXhwb3J0IGNvbnN0IGFwaUhvc3QgPSAnaHR0cDovLzEyOC4xOTkuMjI3LjEzMic7Ly8ncml2ZXJjaXR5OTkudm4nOy8vaHR0cDovLzEwMy41Ni4xNTcuNjYvcmVhbGVzdGF0ZSc7XHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJywgJ3VzZXJOb3RlJywgJ3VzZXJUeXBlJywgJ3VzZXJDYXRlJywgJ3VzZXJEYXRlJ107XHJcbmV4cG9ydCBjb25zdCBsYW5ndWFnZXMgPSBbXHJcblx0e2xhbmc6IFwidmlldG5hbWVzZVwiLCBpZDogMSwgZGlzcGxheTogXCJUaeG6v25nIFZp4buHdFwifSxcclxuXHQvLyB7bGFuZzogXCJlbmdsaXNoXCIsIGlkOiAyLCBkaXNwbGF5OiBcIkVuZ2xpc2hcIn1cclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgbG9jYWxpemF0aW9uID0ge1xyXG5cdHZpZXRuYW1lc2U6IHtcclxuXHRcdHJlZ2lzdGVyOiBcIkxJw4pOIEjhu4ZcIixcclxuXHRcdG5ld3M6IFwiVElOIFThu6hDXCIsXHJcblx0XHRyZWdpc3RlclRpdGxlSGVhZDogYDxzcGFuPkfhu41pIDwvc3Bhbj5gLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZVRhaWw6IGAgXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+IGhv4bq3YyBn4butaSB0aMO0bmcgdGluIMSR4buDIG5o4bqtbjwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+QsOBTyBHScOBPC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj504burPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5DSOG7piDEkOG6plUgVMavPC9zcGFuPmAsXHJcblx0XHRmdWxsTmFtZVBsYWNlaG9sZGVyOiBcIkjhu40gdsOgIHTDqm4qXCIsXHJcblx0XHR0eXBlUGxhY2Vob2xkZXI6IFwibmjhuq1wIHR5cGVcIixcclxuXHRcdHBob25lUGxhY2Vob2xkZXI6IFwixJBp4buHbiB0aG/huqFpKlwiLFxyXG5cdFx0ZW1haWxQbGFjZWhvbGRlcjogXCJFbWFpbCAoa2jDtG5nIGLhuq90IGJ14buZYylcIixcclxuXHRcdG5vdGVQbGFjZWhvbGRlcjogXCJHaGkgY2jDulwiLFxyXG5cdFx0c2VuZDogXCJH4butaVwiLFxyXG5cdFx0ZGVzaWduZWRCeTogXCJUaGnhur90IGvhu4MgYuG7n2lcIlxyXG5cdH0sXHJcblx0ZW5nbGlzaDoge1xyXG5cdFx0cmVnaXN0ZXI6IFwiU1VCU0NSSUJFXCIsXHJcblx0XHRuZXdzOiBcIk5FV1NcIixcclxuXHRcdHJlZ2lzdGVyVGl0bGVIZWFkOiBgPHNwYW4+Q2FsbCA8L3NwYW4+YCxcclxuXHRcdHJlZ2lzdGVyVGl0bGVUYWlsOiBgIFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdDxzcGFuPiBvciBzdWJzY3JpYmUgdG8gcmVjZWl2ZSA8L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPlFVT1RBVElPTjwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+ZnJvbTwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+SU5WRVNUT1I8L3NwYW4+YCxcclxuXHRcdGZ1bGxOYW1lUGxhY2Vob2xkZXI6IFwiRnVsbCBuYW1lKlwiLFxyXG5cdFx0cGhvbmVQbGFjZWhvbGRlcjogXCJQaG9uZSpcIixcclxuXHRcdGVtYWlsUGxhY2Vob2xkZXI6IFwiRW1haWwgKG9wdGlvbmFsKVwiLFxyXG5cdFx0bm90ZVBsYWNlaG9sZGVyOiBcIk5vdGUuLlwiLFxyXG5cdFx0c2VuZDogXCJTZW5kXCIsXHJcblx0XHRkZXNpZ25lZEJ5OiBcIkRlc2lnbmVkIGJ5XCJcclxuXHR9XHJcbn07XHJcblxyXG5jb25zdCBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gKCkge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZml4QW5hbHl0aWNNaXNzaW5nICgpIHtcclxuXHRpZiAoIWdsb2JhbC5nYSkgZ2xvYmFsLmdhID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5mYnEpIGdsb2JhbC5mYnEgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmFudHNfdXNlckluZm9MaXN0ZW5lcikgZ2xvYmFsLmFudHNfdXNlckluZm9MaXN0ZW5lciA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuYW50c19hbmFseXRpYykgZ2xvYmFsLmFudHNfYW5hbHl0aWMgPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmQoc291cmNlcywgcHJlZGljYXRlKSB7XHJcblx0dmFyIHNlYXJjaEtleSwgc2VhcmNoVmFsdWU7XHJcblx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHByZWRpY2F0ZSkpIHtcclxuXHRcdHNlYXJjaEtleSA9IGtleTtcclxuXHRcdHNlYXJjaFZhbHVlID0gcHJlZGljYXRlW2tleV07XHJcblx0fVxyXG5cclxuXHRmb3IgKGxldCBpbnN0YW5jZSBvZiBzb3VyY2VzKSB7XHJcblx0XHRpZiAoaW5zdGFuY2Vbc2VhcmNoS2V5XSA9PT0gc2VhcmNoVmFsdWUpIHJldHVybiBpbnN0YW5jZTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGFyZW50TWVudUJ5QWxpYXMgKGFsaWFzLCBsaW5rcykge1xyXG5cdGZvciAobGV0IGdyb3VwIG9mIGxpbmtzKSB7XHJcblx0XHRpZiAoZ3JvdXAuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gZ3JvdXA7XHJcblx0XHRpZiAoZ3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgZ3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRpZiAoY2hpbGQuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gZ3JvdXA7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsVmFsaWQgKGVtYWlsKSB7XHJcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblx0cmV0dXJuIHJlLnRlc3QoZW1haWwpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIHByZWxvYWRSZXNvbHZlcyA9IHtcclxuXHRhcHBDb25maWc6IGZ1bmN0aW9uKGNvbmZpZ1NlcnZpY2UsIGNhbGN1bGF0b3JTZXJ2aWNlKSB7XHJcblx0XHRyZXR1cm4gY29uZmlnU2VydmljZS5wcm9taXNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU51bWJlclVVSUQgKGxlbmd0aCkge1xyXG5cdHZhciByZXN1bHQgPSBcIlwiO1xyXG5cdGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG5cdFx0cmVzdWx0ICs9IFswLDEsMiwzLDQsNSw2LDcsOCw5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqOSldO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2FmZVJhbmdlICh2YWx1ZSwgbWluLCBtYXgpIHtcclxuXHRpZiAobWluICE9IHVuZGVmaW5lZCAmJiB2YWx1ZSA8PSBtaW4pIHJldHVybiBtaW47XHJcblx0aWYgKG1heCAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gbWF4KSByZXR1cm4gbWF4O1xyXG5cdHJldHVybiB2YWx1ZTtcclxufVxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGZvbnQpIHtcclxuXHR2YXIgZiA9IGZvbnQgfHwgJzEycHggYXJpYWwnLFxyXG5cdFx0byA9ICQoJzxkaXY+JyArIHRoaXMgKyAnPC9kaXY+JylcclxuXHRcdFx0LmNzcyh7J3Bvc2l0aW9uJzogJ2Fic29sdXRlJywgJ2Zsb2F0JzogJ2xlZnQnLCAnd2hpdGUtc3BhY2UnOiAnbm93cmFwJywgJ3Zpc2liaWxpdHknOiAnaGlkZGVuJywgJ2ZvbnQnOiBmfSlcclxuXHRcdFx0LmFwcGVuZFRvKCQoJ2JvZHknKSksXHJcblx0XHR3ID0gby53aWR0aCgpO1xyXG5cclxuXHRvLnJlbW92ZSgpO1xyXG5cclxuXHRyZXR1cm4gdztcclxufTtcclxuXHJcbmdsb2JhbC51dWlkID0gZ2VuZXJhdGVOdW1iZXJVVUlEOyJdfQ==
