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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcY2FyZC5qcyIsImFwcFxcY29tcG9uZW50XFxmb290ZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWwuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWxPbmUuanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbi5qcyIsImFwcFxcY29tcG9uZW50XFxuYXZpZ2F0aW9uTGluay5qcyIsImFwcFxcY29tcG9uZW50XFxuZXdzQXJlYS5qcyIsImFwcFxcY29tcG9uZW50XFxwb3B1cC5qcyIsImFwcFxcY29tcG9uZW50XFxzaWRlYmFyLmpzIiwiYXBwXFxjb21wb25lbnRcXGFwcFxcY29tcG9uZW50XFxzbGlkZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcc3Vic2NyaXB0aW9uRm9ybS5qcyIsImFwcFxcY29udHJvbGxlclxcYXBwXFxjb250cm9sbGVyXFxhcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXGNoaWxkcHJvZHVjdENvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXG1haW5Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxuZXdzQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxccGFnZUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhcnRpYWxcXHByb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHByb2R1Y3RDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpb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UUFBTyxNQUFQO0FBQ0E7O0FBRU0sU0FBUyxTQUFULENBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQzNDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLFFBQU8sS0FBUDtBQUNBOztBQUVELE9BQU8sU0FBUCxDQUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtBQUFBLEtBQ0MsSUFBSSxFQUFFLFVBQVUsSUFBVixHQUFpQixRQUFuQixFQUNGLEdBREUsQ0FDRSxFQUFDLFlBQVksVUFBYixFQUF5QixTQUFTLE1BQWxDLEVBQTBDLGVBQWUsUUFBekQsRUFBbUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtBQUFBLEtBSUMsSUFBSSxFQUFFLEtBQUYsRUFKTDs7QUFNQSxHQUFFLE1BQUY7O0FBRUEsUUFBTyxDQUFQO0FBQ0EsQ0FWRDs7QUFZQSxPQUFPLElBQVAsR0FBYyxrQkFBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7bW9kYWw6ICdAJywgc3VibWl0VGV4dDogJ0AnfSxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLmNhcmRUaXRsZUhlYWQgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9XCJjb2xvcjojZmE4MzIyO1wiIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24uY2FyZFRpdGxlVGFpbCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgLFxyXG5cclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG4gICAgICAgICAgICBzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgY29sdW1uczogJz0nIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzcz1cImZvb3RlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2xcIiBuZy1yZXBlYXQ9XCJjb2x1bW4gaW4gY29sdW1uc1wiIG5nLWJpbmQtaHRtbD1cImNvbHVtbi5Qb3N0LmNvbnRlbnQgfCB1bnNhZmVcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29weXJpZ2h0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGFuZ3VhZ2UtY2hvaWNlXCIgbmctcmVwZWF0PVwibGFuZ3VhZ2UgaW4gJHJvb3QubGFuZ3VhZ2VzXCIgXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctY2xhc3M9XCJ7YWN0aXZlOiBsYW5ndWFnZUFjdGl2ZShsYW5ndWFnZSl9XCIgXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctY2xpY2s9XCIkcm9vdC5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWJpbmQ9XCJsYW5ndWFnZS5kaXNwbGF5XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5kZXNpZ25lZEJ5XCI+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICA8YSBocmVmPVwiaHR0cDovL3R3aW4udm5cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyRUIzRDM7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VFdJTiBTb2Z0d2FyZSBTb2x1dGlvbnM8L2E+XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLmxhbmd1YWdlQWN0aXZlID0gKGluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlLmlkID09ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQ7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZTogeyBtb2RhbDogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwibW9kYWxcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xvc2UtY29tbWFuZCBpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBuZy1jbGljaz1cImFwcEN0cmwuY2xvc2VSZWdpc3RlckZvcm0oKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlSGVhZCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVUYWlsIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZnVsbE5hbWVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOYW1lXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJqb2JcIj5DaOG7jW4gZMOybmcgeGU6ICAgPC9sYWJlbD5cclxuXHRcdFx0PHNlbGVjdCBpZD1cImpvYlwiIG5hbWU9XCJ1c2VyX2pvYlwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyVHlwZVwiPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBGaWVzdGE8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgUmFuZ2VyPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEV2ZXJlc3Q8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgVHJhbnNpdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBOZXcgRm9jdXM8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRWNvU3BvcnQ8L29wdGlvbj5cdFx0XHRcdFxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS08aW5wdXQgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNoZWNrZWQgbmFtZT1cInBheVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiVHLhuqMgR8OzcFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBHw7NwPC9sYWJlbD4tLT5cclxuXHRcdFx0PCEtLTxpbnB1dCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBI4bq/dFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBI4bq/dDwvbGFiZWw+LS0+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ucGhvbmVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJQaG9uZVwiLz5cclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJhcmVhXCI+Q2jhu41uIGtodSB24buxYzogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBpZD1cImFyZWFcIiBuYW1lPVwidXNlcl9hcmVhXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJBcmVhXCI+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlRQIEjhu5MgQ2jDrSBNaW5oXCI+VFAgSOG7kyBDaMOtIE1pbmg8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIETGsMahbmc8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPsSQ4buTbmcgTmFpPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6AgUuG7i2EgLSBWxaluZyBUw6B1PC9vcHRpb24+XHRcdFxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggUGjGsOG7m2M8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIFRodeG6rW48L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPlTDonkgTmluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+S2jDoWM8L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiZGF0ZVwiPk5nw6B5IGzDoWkgdGjhu606ICAgPC9sYWJlbD5cclxuXHRcdFx0PGlucHV0IG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRGF0ZVwiIHR5cGU9XCJkYXRlXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5lbWFpbFBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckVtYWlsXCIvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlckVtYWlsRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlckVtYWlsRXJyb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmRzXCI+XHJcblx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAkcm9vdC5sb2NhbGl6YXRpb24uc2VuZFwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ubm90ZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxyXG5cdFx0XHQgPC9maWVsZHNldD5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvcm0+YCxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG4gICAgICAgICAgICBzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG4gICAgICAgICAgICBzY29wZS5zdWJtaXQgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIHNjb3BlLmdvb2dsZUxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgYW50c19nb29nbGVBdXRoQ2xpY2soKTtcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgLy8gc2NvcGUuZmFjZWJvb2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIGFudHNfZmJBdXRoQ2xpY2soJ2xvZ2luJyk7XHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XVxyXG5cclxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJywgJ3VzZXJUeXBlJywgJ3VzZXJDYXRlJywgJ3VzZXJBcmVhJywndXNlckRhdGUnXTsiLCJleHBvcnQgZGVmYXVsdCBbZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXN0cmljdDogJ0UnLFxyXG4gICAgICAgIHJlcGxhY2U6IHRydWUsXHJcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcclxuICAgICAgICBzY29wZTogeyBlbmFibGU6ICc9JyB9LFxyXG4gICAgICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1vZGFsT25lLWJhY2tkcm9wXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCIgbmctY2xpY2s9XCJjbG9zZU1vZGFsKClcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsT25lLXdyYXBwZXJcIiBuZy1jbGljaz1cInRvZ2dsZSgkZXZlbnQpXCI+XHJcblx0XHRcdCAgICA8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLmNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5lbmFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2NvcGUudG9nZ2xlID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRzdGF0ZScsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHtcclxuXHRcdFx0cmVhZHk6ICc9JyxcclxuXHRcdFx0YnVyZ2VyQWN0aXZlOiAnPSdcclxuXHRcdH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLXdyYXBwZXJcIiBuZy1jbGFzcz1cIntidXJnZXJpbmc6IGJ1cmdlckFjdGl2ZSwgcmVhZHk6IHJlYWR5fVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpdGUtbG9nb1wiIHVpLXNyZWY9XCJob21lXCI+PC9kaXY+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51LWFjdGl2YXRvciBpY29uLW5hdmlnYXRpb24tbWVudVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZVBvcHVwKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1YnNjcmlwdGlvbi1hY3RpdmF0b3JcIiBuZy1jbGljaz1cInRvZ2dsZU1vZGFsUG9wdXAoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1tZW51XCI+XHJcblx0XHRcdFx0XHQ8bmF2aWdhdGlvbi1saW5rIGluc3RhbmNlPVwibGlua1wiIG5nLXJlcGVhdD1cImxpbmsgaW4gbGlua3NcIj48L25hdmlnYXRpb24tbGluaz5cclxuXHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBjaGlsZHByb2R1Y3RBY3RpdmVDbGFzcygpfVwiPi0tPlxyXG5cdFx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cImNoaWxkUHJvZHVjdFwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24uY2hpbGRwcm9kdWN0XCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0XHQ8IS0tPC9kaXY+LS0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBwcm9kdWN0QWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cInByb2R1Y3RcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnByb2R1Y3RcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRpb24tbGlua1wiIG5nLWNsYXNzPVwie2FjdGl2ZTogbmV3c0FjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIHVpLXNyZWY9XCJuZXdzXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtd3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogYnVyZ2VyQWN0aXZlfVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudVwiPlxyXG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJtZW51LWhlYWRpbmdcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uYWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlua3NcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIG5nLWJpbmQ9XCJpdGVtLm5hbWVcIiBuZy1jbGljaz1cInBhcmVudExpbmtOYXZpZ2F0ZShpdGVtKVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnVzXCIgbmctaWY9XCJpdGVtLmNoaWxkcmVuXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1tZW51IHN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJjaGlsZC5uYW1lXCIgbmctcmVwZWF0PVwiY2hpbGQgaW4gaXRlbS5jaGlsZHJlblwiXHJcblx0XHRcdFx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGNoaWxkLmFsaWFzfSlcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IHByb2R1Y3RBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgdWktc3JlZj1cInByb2R1Y3RcIiBuZy1jbGljaz1cInRvZ2dsZUJ1cmdlcigpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5wcm9kdWN0XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogbmV3c0FjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiB1aS1zcmVmPVwibmV3c1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRzY29wZS5saW5rcyA9IG1ldGFTZXJ2aWNlLmxpbmtzO1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmJ1cmdlckFjdGl2ZSA9ICFzY29wZS5idXJnZXJBY3RpdmU7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXAgPSAhc2NvcGUuJHBhcmVudC5hcHBDdHJsLnN1YnNjcmlwdGlvblBvcHVwO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUudG9nZ2xlTW9kYWxQb3B1cCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS4kcGFyZW50LmFwcEN0cmwubW9kYWxQb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwubW9kYWxQb3B1cDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0c2NvcGUudG9nZ2xlQnVyZ2VyKCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uZXdzQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICduZXdzJztcclxuXHRcdFx0fVxyXG5cdFx0XHRzY29wZS5wcm9kdWN0QWN0aXZlQ2xhc3MgPSAoKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuICRzdGF0ZS5jdXJyZW50Lm5hbWUgPT09ICdwcm9kdWN0JztcclxuXHRcdFx0fVxyXG5cdFx0XHRzY29wZS5jaGlsZHByb2R1Y3RBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ2ZvcmQnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XTsiLCJsZXQgbWFpbkZvbnQgPSBcIjE0cHggJ09wZW4gU2FucydcIiwgY2hpbGRGb250ID0gXCIxM3B4ICdPcGVuIFNhbnMnXCIsIHBhZGRpbmcgPSA4MDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJGh0dHAnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJGh0dHAsICRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRpbnN0YW5jZTogJz0nXHJcblx0XHR9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctc3R5bGU9XCJ7d2lkdGg6IG1heFdpZHRoKydweCd9XCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBsaW5rQWN0aXZlQ2xhc3MoaW5zdGFuY2UpfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiBuZy1iaW5kPVwiaW5zdGFuY2UubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGluc3RhbmNlKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW5hdmlnYXRpb25zIGljb24tbmF2aWdhdGlvbi1hcnJvdy1kcm9wLXVwXCIgbmctaWY9XCJpbnN0YW5jZS5jaGlsZHJlblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbGluayBpY29uLWF2LXBsYXktYXJyb3dcIiBuZy1iaW5kPVwibGluay5uYW1lXCIgbmctcmVwZWF0PVwibGluayBpbiBpbnN0YW5jZS5jaGlsZHJlblwiXHJcblx0XHRcdFx0XHR1aS1zcmVmPVwicGFnZSh7YWxpYXM6IGxpbmsuYWxpYXN9KVwiPjwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRzY29wZS5tYXhXaWR0aCA9IHNjb3BlLmluc3RhbmNlLm5hbWUud2lkdGgobWFpbkZvbnQpICsgcGFkZGluZztcclxuXHJcblx0XHRcdGlmIChzY29wZS5pbnN0YW5jZS5jaGlsZHJlbiAmJiBzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5sZW5ndGgpIHtcclxuXHRcdFx0XHRzY29wZS5pbnN0YW5jZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuXHRcdFx0XHRcdGxldCBjdXJyZW50V2lkdGggPSBjaGlsZC5uYW1lLndpZHRoKGNoaWxkRm9udCkgKyBwYWRkaW5nO1xyXG5cdFx0XHRcdFx0aWYgKGN1cnJlbnRXaWR0aCA+IHNjb3BlLm1heFdpZHRoKSB7XHJcblx0XHRcdFx0XHRcdHNjb3BlLm1heFdpZHRoID0gY3VycmVudFdpZHRoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY29wZS5saW5rQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gJHJvb3RTY29wZS5hY3RpdmVHcm91cCAmJiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwLmlkID09PSBpbnN0YW5jZS5pZDtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnBhcmVudExpbmtOYXZpZ2F0ZSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChpbnN0YW5jZS5jaGlsZHJlblswXSAmJiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhcykge1xyXG5cdFx0XHRcdFx0JHN0YXRlLmdvKCdwYWdlJywge2FsaWFzOiBpbnN0YW5jZS5jaGlsZHJlblswXS5hbGlhc30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNlY3Rpb24tY2FudmFzIHRvcC1zZXBhcmF0ZWQgbmV3cy1hcmVhXCI+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJwb3B1cC13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBlbmFibGV9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwb3B1cC1iYWNrZHJvcFwiIG5nLWNsaWNrPVwidG9nZ2xlKClcIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRzY29wZS5lbmFibGUgPSAhc2NvcGUuZW5hYmxlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImNvbnN0IGluaXRpYWxUb3BPZmZzZXQgPSAxMjE7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInNpZGViYXItd3JhcHBlclwiIG5nLXN0eWxlPVwie3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCcrdG9wUG9zaXRpb24rJ3B4KSd9XCI+XHJcblx0XHRcdDwhLS08c3Vic2NyaXB0aW9uLWZvcm0gd3JhcHBlci1jbGFzcz1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPi0tPlxyXG5cdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNtYWxsLWJhbm5lclwiPjwvZGl2Pi0tPlxyXG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XHJcblx0XHRcdDwhLS08c3Vic2NyaXB0aW9uLWZvcm0gbW9kYWw9XCJzdWJzY3JpcHRpb24tZm9ybSBzaWRlYmFyXCI+PC9zdWJzY3JpcHRpb24tZm9ybT4tLT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNpZGViYXItbmV3c1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5uZXdzXCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5ld3Mtc3VtbWFyeVwiIG5nLXJlcGVhdD1cIm5ld3NJdGVtIGluIG5ld3NcIiB1aS1zcmVmPVwibmV3cyh7YWxpYXM6IG5ld3NJdGVtLlBvc3QuYWxpYXN9KVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRodW1iLWltYWdlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrbmV3c0l0ZW0uUG9zdC5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGl0bGVcIiBuZy1iaW5kPVwibmV3c0l0ZW0uUG9zdC50aXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHZhciBzaWRlYmFySGVpZ2h0LCBmb290ZXJIZWlnaHQ7IHNjb3BlLnRvcFBvc2l0aW9uID0gMDtcclxuXHJcblx0XHRcdC8vU2FmZWx5IGNhbGN1bGF0ZSBlbGVtZW50J3Mgc2l6ZSBhZnRlciBzdHVmZiBoYXZlIGJlZW4gcmVuZGVyZWQhXHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRzaWRlYmFySGVpZ2h0ID0gZWxlbWVudC5vdXRlckhlaWdodCgpO1xyXG5cdFx0XHRcdGZvb3RlckhlaWdodCA9IGFuZ3VsYXIuZWxlbWVudCgnI2Zvb3RlcicpLm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdH0sIDUwMCk7XHJcblxyXG5cdFx0XHQkcm9vdFNjb3BlLiRvbignc2Nyb2xsQ2hhbmdlJywgKGV2ZW50LCBzY3JvbGxQb3NpdGlvbikgPT4ge1xyXG5cdFx0XHRcdHNjb3BlLm5ld3MgPSAkcm9vdFNjb3BlLm5ld3M7XHJcblxyXG5cdFx0XHRcdHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgZG9jdW1lbnRIZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSwgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpLFxyXG5cdFx0XHRcdFx0XHRvZmZzZXQgPSBlbGVtZW50Lm9mZnNldCgpO1xyXG5cclxuXHRcdFx0XHRcdGlmIChzY3JvbGxQb3NpdGlvbi5zY3JvbGxpbmdEb3duKSB7XHJcblx0XHRcdFx0XHRcdGxldCBzY3JvbGxEb3duVG91Y2hCb3R0b20gPSBzY3JvbGxQb3NpdGlvbi50b3AgKyB3aW5kb3dIZWlnaHQgPiBvZmZzZXQudG9wICsgc2lkZWJhckhlaWdodCxcclxuXHRcdFx0XHRcdFx0XHRzY3JvbGxEb3duT3ZlckZvb3RlciA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IGRvY3VtZW50SGVpZ2h0IC0gZm9vdGVySGVpZ2h0O1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHNjcm9sbERvd25Ub3VjaEJvdHRvbSAmJiAhc2Nyb2xsRG93bk92ZXJGb290ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRzY29wZS50b3BQb3NpdGlvbiA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCAtIHNpZGViYXJIZWlnaHQgLSBpbml0aWFsVG9wT2Zmc2V0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHNjcm9sbFBvc2l0aW9uLnRvcCA8IG9mZnNldC50b3AgLSBpbml0aWFsVG9wT2Zmc2V0KSB7XHJcblx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJGludGVydmFsLCAkdGltZW91dCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7IGl0ZW1zOiAnPScgfSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsaWdodC1zbGlkZXIge3t3cmFwcGVyQ2xhc3N9fVwiXHJcblx0XHRcdG5nLXN3aXBlLWxlZnQ9XCJzd2lwZUxlZnQoJGV2ZW50KVwiIG5nLXN3aXBlLXJpZ2h0PVwic3dpcGVSaWdodCgkZXZlbnQpXCI+XHJcblx0XHRcdDxkaXYgaWQ9XCJjdXJyZW50U2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZVwiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK2FjdGl2ZVNsaWRlLmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0PGRpdiBpZD1cInByZXZpb3VzU2xpZGVcIiBjbGFzcz1cImFjdGl2ZS1zbGlkZSBwcmV2aW91c1wiIG5nLXN0eWxlPVwieydiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnK3ByZXZpb3VzU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLW5hdmlnYXRpb25cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGUtbmV4dFwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1iYWNrXCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInNsaWRlLXBvc2l0aW9uc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1pdGVtXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBpdGVtLmlzQWN0aXZlfVwiIG5nLXJlcGVhdD1cIml0ZW0gaW4gaXRlbXNcIiBuZy1jbGljaz1cIm5hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8bmctdHJhbnNjbHVkZT48L25nLXRyYW5zY2x1ZGU+XHJcblx0XHQ8L2Rpdj5gLFxyXG5cdFx0bGluazogKHNjb3BlLCBlbGVtZW50LCBhdHRycykgPT4ge1xyXG5cdFx0XHRsZXQgJGFjdGl2ZVNsaWRlID0gZWxlbWVudC5maW5kKCcjY3VycmVudFNsaWRlJyksICRwcmV2aW91c1NsaWRlID0gZWxlbWVudC5maW5kKCcjcHJldmlvdXNTbGlkZScpLFxyXG5cdFx0XHRcdGVhc2VFZmZlY3QgPSBTaW5lLmVhc2VJbiwgdHJhbnNpdGlvblRpbWUgPSAyO1xyXG5cclxuXHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSAwO1xyXG5cdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcclxuXHJcblx0XHRcdHNjb3BlLiR3YXRjaCgnaXRlbXMnLCAoKSA9PiB7XHJcblx0XHRcdFx0bmV4dFNsaWRlKDApO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpICRpbnRlcnZhbC5jYW5jZWwoZ2xvYmFsLnNsaWRlckludGVydmFsKTtcclxuXHJcblx0XHRcdGxldCBuZXh0U2xpZGUgPSBmdW5jdGlvbiAobmV4dEluZGV4KSB7XHJcblx0XHRcdFx0c2NvcGUucHJldmlvdXNTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcclxuXHRcdFx0XHRpZiAoc2NvcGUucHJldmlvdXNTbGlkZSkgc2NvcGUucHJldmlvdXNTbGlkZS5pc0FjdGl2ZSA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IG5leHRJbmRleCAhPSB1bmRlZmluZWQgPyBuZXh0SW5kZXggOiBzY29wZS5hY3RpdmVJbmRleCArIDE7XHJcblx0XHRcdFx0aWYgKHNjb3BlLmFjdGl2ZUluZGV4IDwgMCkge1xyXG5cdFx0XHRcdFx0c2NvcGUuYWN0aXZlSW5kZXggPSBzY29wZS5pdGVtcy5sZW5ndGggLSAxO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuYWN0aXZlSW5kZXggPj0gc2NvcGUuaXRlbXMubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS5hY3RpdmVTbGlkZSA9IHNjb3BlLml0ZW1zW3Njb3BlLmFjdGl2ZUluZGV4XTtcclxuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlU2xpZGUpIHNjb3BlLmFjdGl2ZVNsaWRlLmlzQWN0aXZlID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Ly9QbGF5IHRyYW5zaXRpb24gYW5pbWF0aW9uIVxyXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJHByZXZpb3VzU2xpZGUsIHRyYW5zaXRpb25UaW1lLCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMTAwJSd9KTtcclxuXHRcdFx0XHQvLyBUd2VlbkxpdGUuZnJvbVRvKCRhY3RpdmVTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnLTEwMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcwJSd9KTtcclxuXHRcdFx0XHRUd2VlbkxpdGUudG8oJGFjdGl2ZVNsaWRlLCAwLCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzEnfSk7XHJcblx0XHRcdFx0VHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgb3BhY2l0eTogJzAnfSk7XHJcblxyXG5cdFx0XHRcdC8vUmVzZXQgaW50ZXJ2YWw7XHJcblx0XHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xyXG5cdFx0XHRcdGdsb2JhbC5zbGlkZXJJbnRlcnZhbCA9ICRpbnRlcnZhbCgoKSA9PiBuZXh0U2xpZGUoKSwgMTAwMDApO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUubmF2aWdhdGUgPSAoaW5zdGFuY2UpID0+IHtcclxuXHRcdFx0XHRpZiAoaW5zdGFuY2UgIT0gc2NvcGUuYWN0aXZlU2xpZGUpIHtcclxuXHRcdFx0XHRcdG5leHRTbGlkZShzY29wZS5pdGVtcy5pbmRleE9mKGluc3RhbmNlKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUuc3dpcGVMZWZ0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCArIDEpO1xyXG5cdFx0XHRzY29wZS5zd2lwZVJpZ2h0ID0gKGUpID0+IG5leHRTbGlkZShzY29wZS5hY3RpdmVJbmRleCAtIDEpO1xyXG5cclxuXHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgbW9kYWw6ICdAJywgc3VibWl0VGV4dDogJ0AnIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwibW9kYWxcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xvc2UtY29tbWFuZCBpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBuZy1jbGljaz1cImFwcEN0cmwuY2xvc2VSZWdpc3RlckZvcm0oKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlSGVhZCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVUYWlsIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZnVsbE5hbWVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOYW1lXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJqb2JcIj5DaOG7jW4gZMOybmcgeGU6ICAgPC9sYWJlbD5cclxuXHRcdFx0PHNlbGVjdCBpZD1cImpvYlwiIG5hbWU9XCJ1c2VyX2pvYlwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyVHlwZVwiPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBGaWVzdGE8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgUmFuZ2VyPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEV2ZXJlc3Q8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgVHJhbnNpdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBOZXcgRm9jdXM8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRWNvU3BvcnQ8L29wdGlvbj5cdFx0XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcclxuXHRcdFx0IFxyXG4gICAgIFxyXG4gICAgICAgICAgPGxhYmVsPkjDrG5oIHRo4bupYyB0aGFuaCB0b8Ohbjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkPVwicmVxdWlyZWRcIiB0eXBlPVwicmFkaW9cIiBpZD1cInVuZGVyXzEzXCIgdmFsdWU9XCJUcuG6oyBHw7NwXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJDYXRlXCIgbmFtZT1cInVzZXJfYWdlXCI+PGxhYmVsIHN0eWxlPVwicGFkZGluZy1yaWdodDogMjBweFwiIGZvcj1cInVuZGVyXzEzXCIgY2xhc3M9XCJsaWdodFwiPlRy4bqjIEfDs3A8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwib3Zlcl8xM1wiIHZhbHVlPVwiVHLhuqMgSOG6v3RcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckNhdGVcIiBuYW1lPVwidXNlcl9hZ2VcIj48bGFiZWwgIGZvcj1cIm92ZXJfMTNcIiBjbGFzcz1cImxpZ2h0XCI+VHLhuqMgaOG6v3Q8L2xhYmVsPlxyXG4gICAgICAgXHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tPGlucHV0IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBjaGVja2VkIG5hbWU9XCJwYXlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cIlRy4bqjIEfDs3BcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckNhdGVcIi8+LS0+XHJcblx0XHRcdDwhLS08bGFiZWw+VHLhuqMgR8OzcDwvbGFiZWw+LS0+XHJcblx0XHRcdDwhLS08aW5wdXQgbmFtZT1cInBheVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiVHLhuqMgSOG6v3RcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckNhdGVcIi8+LS0+XHJcblx0XHRcdDwhLS08bGFiZWw+VHLhuqMgSOG6v3Q8L2xhYmVsPi0tPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyUGhvbmVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyUGhvbmVFcnJvclwiPjwvZGl2PlxyXG5cdFx0XHQ8aW5wdXQgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5waG9uZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlclBob25lXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImFyZWFcIj5DaOG7jW4ga2h1IHbhu7FjOiAgIDwvbGFiZWw+XHJcblx0XHRcdDxzZWxlY3QgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGlkPVwiYXJlYVwiIG5hbWU9XCJ1c2VyX2FyZWFcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckFyZWFcIj5cclxuXHRcdFx0XHQ8b3B0aW9uPlRQIEjhu5MgQ2jDrSBNaW5oPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6xuaCBExrDGoW5nPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj7EkOG7k25nIE5haTwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+QsOgIFLhu4thIC0gVsWpbmcgVMOgdTwvb3B0aW9uPlx0XHRcclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIFBoxrDhu5tjPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6xuaCBUaHXhuq1uPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Uw6J5IE5pbmg8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPktow6FjPC9vcHRpb24+XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLmVtYWlsUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRW1haWxcIi8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyRW1haWxFcnJvclwiPjwvZGl2PlxyXG5cclxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ubm90ZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxyXG5cdFx0XHQgPGRpdiBjbGFzcz1cImNvbW1hbmRzXCI+XHJcblx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAkcm9vdC5sb2NhbGl6YXRpb24uc2VuZFwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0IDwvZmllbGRzZXQ+XHJcblx0XHRcdFxyXG5cdFx0PC9mb3JtPmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG5cclxuXHRcdFx0c2NvcGUuc3VibWl0ID0gJHJvb3RTY29wZS5zdWJtaXRSZWdpc3RlcjtcclxuXHJcblxyXG5cdFx0Ly8gXHRzY29wZS5nb29nbGVMb2dpbiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdC8vIFx0XHRcdGFudHNfZ29vZ2xlQXV0aENsaWNrKCk7XHJcblx0XHQvLyBcdFx0fTtcclxuICAgICAgICAvL1xyXG5cdFx0Ly8gXHRcdHNjb3BlLmZhY2Vib29rTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBcdFx0XHRhbnRzX2ZiQXV0aENsaWNrKCdsb2dpbicpO1xyXG5cdFx0Ly8gfTtcclxuXHRcdH1cclxuXHR9XHJcbn1dXHJcblxyXG52YXIgZmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnLCAndXNlclR5cGUnLCAndXNlckNhdGUnLCAndXNlckFyZWEnLCd1c2VyRGF0ZSddOyIsImltcG9ydCB7XHJcblx0Z2VuZXJhdGVOdW1iZXJVVUlELFxyXG5cdHJlZ2lzdGVyRmllbGRzLFxyXG5cdGZpbmRQYXJlbnRNZW51QnlBbGlhcyxcclxuXHRsYW5ndWFnZXNcclxufSBmcm9tICcuLi91dGlscy9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIGFwcGxpY2F0aW9uQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckdGltZW91dCcsICckaW50ZXJ2YWwnLCAnJHdpbmRvdycsICckaHR0cCcsICduZ1Byb2dyZXNzRmFjdG9yeScsICdtZXRhU2VydmljZSddO1xyXG5cdGRldmVsb3BtZW50TW9kZSA9IGZhbHNlO1xyXG5cdHJlYWR5ID0gdHJ1ZTtcclxuXHRhY3RpdmVQYWdlID0gJ3NwbGFzaCc7XHJcblx0YnVyZ2VyQWN0aXZlID0gZmFsc2U7XHJcblx0c3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcclxuXHRzdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2U7XHJcblx0bW9kYWxQb3B1cCA9IGZhbHNlO1xyXG5cclxuXHRjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkc3RhdGUsICR0aW1lb3V0LCAkaW50ZXJ2YWwsICR3aW5kb3csICRodHRwLCAgbmdQcm9ncmVzc0ZhY3RvcnksIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHQkcm9vdFNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzOyAvL1dpbGwgYmUgdW5kZWZpbmVkIGF0IGZpcnN0ID0+IG5vdCBzYWZlIGZvciBub3JtYWwgdXNhZ2UsIGp1c3QgZm9yIHRyYW5zbGF0aW9uIVxyXG5cdFx0JHJvb3RTY29wZS5hcHBDdHJsID0gdGhpcztcclxuXHJcblx0XHR0aGlzLm5hbWUgPSBcIkNsb3VkIVwiO1xyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0dGhpcy5wcm9ncmVzcyA9IG5nUHJvZ3Jlc3NGYWN0b3J5LmNyZWF0ZUluc3RhbmNlKCk7XHJcblx0XHR0aGlzLnByb2dyZXNzLnNldENvbG9yKCcjRkE4MzIyJyk7XHJcblx0XHRnbG9iYWwuJGh0dHAgPSAkaHR0cDtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlTW9kYWwgPSAobmV3VmFsbCkgPT4ge1xyXG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLm1vZGFsUG9wdXAgPSBuZXdWYWxsID8gbmV3VmFsbCA6ICF0aGlzLm1vZGFsUG9wdXA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHRnbG9iYWwudG9nZ2xlUG9wdXAgPSAobmV3VmFsKSA9PiB7XHJcblx0XHRcdCRzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBuZXdWYWwgPyBuZXdWYWwgOiAhdGhpcy5zdWJzY3JpcHRpb25Qb3B1cDtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudG9nZ2xlU3VjY2VzcyA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4gdGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gZmFsc2UsIDMwMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMucHJvZ3Jlc3Muc3RhcnQoKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XHJcblx0XHRcdHRoaXMuYWN0aXZlUGFnZSA9IHRvU3RhdGUubmFtZTtcdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5wcm9ncmVzcy5jb21wbGV0ZSgpO1xyXG5cclxuXHRcdFx0Ly9TZXQgbWV0YSdzIGNvbnRlbnQgZm9yIEFVRElFTkNFIFNFR01FTlQhXHJcblx0XHRcdGxldCBjdXJyZW50U2VnbWVudCA9ICdob21lJztcclxuXHRcdFx0aWYgKCRzdGF0ZS5pcygncGFnZScpKSB7XHJcblx0XHRcdFx0bGV0IHBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXMsIHBhcmVudE1lbnUgPSBmaW5kUGFyZW50TWVudUJ5QWxpYXMocGFnZUFsaWFzLCBtZXRhU2VydmljZS5saW5rcyk7XHJcblx0XHRcdFx0Y3VycmVudFNlZ21lbnQgPSBwYXJlbnRNZW51Lm5hbWU7XHJcblx0XHRcdH0gZWxzZSBpZiAoJHN0YXRlLmlzKCduZXdzJykpIHtcclxuXHRcdFx0XHRjdXJyZW50U2VnbWVudCA9ICduZXdzJ1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkKCQoXCJtZXRhW25hbWU9J2FkeDpzZWN0aW9ucyddXCIpWzBdKS5hdHRyKCdjb250ZW50JywgY3VycmVudFNlZ21lbnQpO1xyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdFx0JChkb2N1bWVudCkudHJpZ2dlcigncmVhZHknKTsgLy9NYW51YWxseSB0cmlnZ2VyIHJlYWR5IGV2ZW50LCB3aGljaCBob3BlIGFsc28gdHJpZ2dlciBBbnRzJyBzY3JpcHQhXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9KTtcclxuXHJcblxyXG5cdFx0bGV0IGZldGNoRXNzZW50aWFsRGF0YSA9IChzb3VyY2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5pbmZvKFwiTG9hZGluZy4uXCIsIHNvdXJjZSk7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnZm9vdGVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5mb290ZXJzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkLCBsaW1pdDogNCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0JHJvb3RTY29wZS5uZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChtZXRhU2VydmljZS5yZWFkeSkgZmV0Y2hFc3NlbnRpYWxEYXRhKFwiYmVjYXVzZSB0aGUgZGF0YSBhbHJlYWR5IGZldGNoZWQhXCIpO1xyXG5cdFx0JHJvb3RTY29wZS4kb24oJ21ldGFTZXJ2aWNlUmVhZHknLCAoKSA9PiBmZXRjaEVzc2VudGlhbERhdGEoXCJiZWNhdXNlIG1ldGEgc2VydmljZSByZWFkeSBmaXJlZCFcIikpO1xyXG5cclxuXHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuXHRcdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsQ2hhbmdlJywge3RvcDogdG9wU2Nyb2xsLCBzY3JvbGxpbmdEb3duOiB0b3BTY3JvbGwgPiB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbn0pO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHRvcFNjcm9sbDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5yZXNpemUoKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpemVDaGFuZ2UnLCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdFx0d2lkdGg6ICQod2luZG93KS53aWR0aCgpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9SZWdpc3RlciBmb3JtIVxyXG5cdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcblx0XHRcdHRoaXNbZmllbGRdID0gJyc7IHRoaXNbZmllbGQrJ0Vycm9yJ10gPSAnJztcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY2xvc2VSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5yZXNldFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHRcdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB0aGlzW2ZpZWxkXSA9ICcnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5yZXNldFJlZ2lzdGVyRXJyb3IgPSAoKSA9PiB7XHJcblx0XHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4gdGhpc1tmaWVsZCsnRXJyb3InXSA9ICcnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xyXG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9LCAzMDAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zdWJtaXRSZWdpc3RlciA9ICRyb290U2NvcGUuc3VibWl0UmVnaXN0ZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluLCBwcm9kdWN0aW9uIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInByb2R1Y3Rpb24gbW9kZTpcIiwgcHJvZHVjdGlvbik7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMucmVzZXRSZWdpc3RlckVycm9yKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpc1sndXNlck5hbWUnXS5sZW5ndGggPCAxKSB0aGlzWyd1c2VyTmFtZUVycm9yJ10gPSAnTmjhuq1wIHTDqm4nO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlclBob25lJ10ubGVuZ3RoIDwgOCkgdGhpc1sndXNlclBob25lRXJyb3InXSA9ICdT4buRIMSRaeG7h24gdGhv4bqhaSBjaMawYSDEkcO6bmcnO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlclR5cGUnXS5sZW5ndGggPCA4KSB0aGlzWyd1c2VyVHlwZUVycm9yJ10gPSAnTmjhuq1wIFR5ZWVlZWUnO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlck5hbWVFcnJvciddIHx8IHRoaXNbJ3VzZXJQaG9uZUVycm9yJ10gfHwgdGhpc1sndXNlclR5cGVFcnJvciddKSByZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxyXG5cdFx0XHRcdGZvcm1EYXRhID0ge1xyXG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcclxuXHRcdFx0XHRcdGRvbWFpbixcclxuXHRcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdFx0bmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRcdHR5cGU6IHRoaXNbJ3VzZXJUeXBlJ10sXHJcblx0XHRcdFx0XHRjYXRlOiB0aGlzWyd1c2VyQ2F0ZSddLFxyXG5cdFx0XHRcdFx0cGhvbmU6IHRoaXNbJ3VzZXJQaG9uZSddLFxyXG5cdFx0XHRcdFx0YXJlYTogdGhpc1sndXNlckFyZWEnXSxcclxuXHRcdFx0XHRcdGRhdGU6IHRoaXNbJ3VzZXJEYXRlJ10sXHJcblx0XHRcdFx0XHRlbWFpbDogdGhpc1sndXNlckVtYWlsJ10sXHJcblx0XHRcdFx0XHRub3RlOiB0aGlzWyd1c2VyTm90ZSddXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgYWR4X2FuYWx5dGljLnRyYWNraW5nR29hbChtZXRhU2VydmljZS5jb25maWdzLmFudHNSZWdpc3RlckdvYWxJZCwgMSwgJ2V2ZW50Jyk7XHJcblx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhmb3JtRGF0YS5ub3RlKTtcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRhbnRzX3VzZXJJbmZvTGlzdGVuZXIoZm9ybURhdGEsIGZhbHNlLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhhbnRzX3VzZXJJbmZvTGlzdGVuZXIpXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0Ly9GYWNlYm9vayB0cmFja2luZyBMZWFkL0NvbXBsZXRlUmVnaXN0cmF0aW9uIGV2ZW50XHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSBmYnEoJ3RyYWNrJywgJ0xlYWQnKTtcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnQ29tcGxldGVSZWdpc3RyYXRpb24nKTtcclxuXHJcblx0XHRcdC8vVHJhY2tpbmcgR29vZ2xlIEFuYWx5dGljIGdvYWwhXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0Z2EoJ3NlbmQnLCB7XHJcblx0XHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxyXG5cdFx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogJ1N1YnNjcmlwdGlvbicsXHJcblx0XHRcdFx0XHRldmVudEFjdGlvbjogJ1N1Ym1pdCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRhbnRzX2FuYWx5dGljLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29udmVyc2lvbklkIDogbWV0YVNlcnZpY2UuY29uZmlncy5hbnRzQ29udmVyc2lvbklkLFxyXG5cdFx0XHRcdFx0Y3VzdG9tUGFyYW1zIDogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0J2lzX2Vjb21tJzogMCxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fcGFnZXR5cGUnOiAncHVyY2hhc2UnLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV9xdWFudGl0eSc6IDEsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3RvdGFsdmFsdWUnOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZXNldFJlZ2lzdGVyRm9ybSgpO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubW9kYWxQb3B1cCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly9TZW5kIGZvcm0gdG8gVHdpbidzIHNlcnZlciFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vY3VzdG9tZXIvaW5zZXJ0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXHJcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIoKTtcclxuXHRcdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tYWlsL3NlbnQvanNvbmAsIHtwYXJhbXM6IGZvcm1EYXRhfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VtYWlsLi4uJywgZGF0YSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyKCk7IC8vQXV0byBzdWNjZXNzIG9uIHRlc3QgZW52aXJvbm1lbnQhXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Z2xvYmFsLmdldF9pbmZvID0gKF91c2VySW5mbykgPT4ge1xyXG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHQvLyB1c2VyIGluZm8gZ2V0IGhlcmVcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImFudCdzIGdldF9pbmZvIGZ1bmN0aW9uOlwiLCBfdXNlckluZm8pO1xyXG5cclxuXHRcdFx0XHQvLyBmaWxsIHVzZXJJbmZvIHRvIEZPUk0gxJHEg25nIGvDvVxyXG5cdFx0XHRcdHRoaXMudXNlck5hbWUgPSBfdXNlckluZm8ubmFtZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJFbWFpbCA9IF91c2VySW5mby5lbWFpbCB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJDYXRlID0gX3VzZXJJbmZvLmNhdGUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyVHlwZSA9IF91c2VySW5mby50eXBlIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlckFyZWEgPSBfdXNlckluZm8uYXJlYSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJOb3RlID0gX3VzZXJJbmZvLm5vdGUgfHwgJyc7XHJcblxyXG5cdFx0XHRcdC8vU3RvcmUgU29jaWFsIHByb2ZpbGVcclxuXHRcdFx0XHRpZiAoX3VzZXJJbmZvKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl91c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeShfdXNlckluZm8pKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgY2hpbGRwcm9kdWN0Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHdpbmRvdycsICckaHR0cCcsICAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHdpbmRvdywgJGh0dHAsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuICAgICAgICBsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cclxuICAgICAgICAvL1RyYWNraW5nIGNvZGUuLlxyXG4gICAgICAgIGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcbiAgICAgICAgZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICRyb290U2NvcGUuYWN0aXZlR3JvdXAgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzOyAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZU1vZGUgPSB0aGlzLnBhZ2VBbGlhcyAhPT0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXMgLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlc3VsdHNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmRmaWVzdGEnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEZpZSA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHJhbmdlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkUmFuID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZXZlcmVzdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRXZlID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZWNvc3BvcnQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZEVjbyA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHRyYW5zaXQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICAgICAgfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsZm9yZFRyYSA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZvY3VzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRGb2MgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBkb21haW4sIHR5cGU6ICduZXdzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE5ld3MgPSBkYXRhLnJlc3VsdHM7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGVjb3Nwb3J0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRFY29zcG9ydCA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHJhbmdlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkUmFuZ2VyID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZXZlcmVzdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRXZlcmVzdCA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZpZXN0YScsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkRmllc3RhID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkdHJhbnNpdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcbiAgICAgICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxmb3JkVHJhbnNpdCA9IGRhdGEucmVzdWx0cztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZvY3VzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuICAgICAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbGZvcmRGb2NjdXMgPSBkYXRhLnJlc3VsdHM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0ZmVhdHVyZXMgPSBbXTtcclxuXHRzbGlkZXJzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHR0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVHdvQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5zdWJtaXRNb2RhbE9uZSA9ICgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2hlaGVoZWgnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gdGhpcy5zaG93TW9kYWxPbmUgID0gKCkgPT4ge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcIj8/XCIpO1xyXG5cdFx0Ly8gXHR0aGlzLm1vZGFsT25lQWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIH07XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbWV0YVNlcnZpY2UubGlua3NbMF07ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7XHJcblx0XHRcdHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBcInRyYW5nLWNodVwiIH1cclxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtkYXRhLnJlc3VsdHNbMF0uUGFnZV07XHJcblx0XHR9KTtcclxuXHJcblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnYmFubmVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZlYXR1cmVzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ0hvbWVTbGlkZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW0uUG9zdDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnNsaWRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDcwO1xyXG5cdFx0JHJvb3RTY29wZS4kb24oJ3NpemVDaGFuZ2UnLCAoZXZlbnQsIHNpemUpID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSBzaXplLmhlaWdodCA+IDU3MCA/IHNpemUuaGVpZ2h0IC0gNzAgOiA1MDA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgbmV3c0NvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckd2luZG93JywgJyRodHRwJywgICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHdpbmRvdywgJGh0dHAsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFxyXG5cclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblxyXG5cdFx0dGhpcy5sb2FkRGF0YSA9ICgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRcdHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogeyBkb21haW4sIGFsaWFzOiB0aGlzLnBhZ2VBbGlhcyAsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0XHRpZiAoZGF0YS5yZXN1bHRzWzBdKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWN0aXZlTmV3cyA9IGRhdGEucmVzdWx0c1swXS5Qb3N0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICduZXdzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHRcdHRoaXMuYWxsTmV3cyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdCRzY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIHBhZ2VDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJGludGVydmFsJywgJyR0aW1lb3V0JywgJyRzdGF0ZScsICckd2luZG93JywgJyRodHRwJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRlbGVtZW50LCAkaW50ZXJ2YWwsICR0aW1lb3V0LCAkc3RhdGUsICR3aW5kb3csICRodHRwLCBtZXRhU2VydmljZSkge1xyXG5cdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHR0aGlzLmxvYWREYXRhID0gKCkgPT4ge1xyXG5cdFx0XHRsZXQgcGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcywgcGFyZW50R3JvdXAgPSB0aGlzLmZpbmRQYXJlbnRHcm91cChwYWdlQWxpYXMsIG1ldGFTZXJ2aWNlLmxpbmtzKSxcclxuXHRcdFx0XHRwcmV2aW91c0dyb3VwID0gJHJvb3RTY29wZS5hY3RpdmVHcm91cDsgJHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IHBhcmVudEdyb3VwO1xyXG5cclxuXHRcdFx0aWYocGFnZUFsaWFzID09ICd0cmFuZy1jaHUnKSB7ICRzdGF0ZS5nbygnaG9tZScpOyByZXR1cm47IH1cclxuXHJcblx0XHRcdC8vS2ljayBiYWNrIHRvIHRoZSBIb21lIHBhZ2UgaWYgaXQncyBub3QgYSBsaW5rIGluIG1lbnVcclxuXHRcdFx0aWYgKCFwYXJlbnRHcm91cCB8fCAhcGFyZW50R3JvdXAuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcclxuXHRcdFx0fSBlbHNlIGlmIChwYXJlbnRHcm91cCA9PT0gcHJldmlvdXNHcm91cCkgeyAvL0lmIHRoZSBwYXJlbnQgZ3JvdXAgaXMgYWxyZWFkeSBhY3RpdmUgPT4gc2Nyb2xsIHRvIHRoZSBjaGlsZCBzZWN0aW9uIVxyXG5cdFx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxyXG5cdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblx0XHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuXHRcdFx0XHR9LCA4MDApO1xyXG5cdFx0XHR9IGVsc2UgeyAvL0ZpbmFsbHksIGxvYWQgdGhlIHBhZ2UgPT4gc2V0IHBhZ2UncyBjaGlsZHJlbiBjb250ZW50IVxyXG5cdFx0XHRcdGxldCBsb2FkZWRDb3VudCA9IDA7ICRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbXTtcclxuXHRcdFx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApOyAvL1Jlc2V0IHRoZSBzY3JvbGwgaWYgbG9hZGluZyBmcm9tIHRoZSBiZWdpbm5pbmchXHJcblx0XHRcdFx0cGFyZW50R3JvdXAuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IHt9O1xyXG5cdFx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7IHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBjaGlsZC5hbGlhcyB9IH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBjaGlsZFJlc3VsdCA9IGRhdGEucmVzdWx0c1swXTtcclxuXHRcdFx0XHRcdFx0aWYgKGNoaWxkUmVzdWx0ICYmIGNoaWxkUmVzdWx0LlBhZ2UpIHtcclxuXHRcdFx0XHRcdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUNvbnRlbnRzW2luZGV4XSA9IGNoaWxkUmVzdWx0LlBhZ2U7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pLmZpbmFsbHkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsb2FkZWRDb3VudCsrO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKGxvYWRlZENvdW50ID49IHBhcmVudEdyb3VwLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdC8vU2Nyb2xsIGFmdGVyIDEgc2Vjb25kIChhZnRlciBhbGwgY29udGVudCBhcmUgcmVhZHkgZnJvbSBzZXJ2ZXIhKVxyXG5cdFx0XHRcdFx0XHRcdC8vIHRvIGhhdmUgYmV0dGVyIHBlcmZvcm1hbmNlIChhZnRlciBzdHVmZnMgaGFkIGJlZW4gcmVuZGVyZWQpLlxyXG5cdFx0XHRcdFx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBzY3JvbGxPZmZzZXQgPSBhbmd1bGFyLmVsZW1lbnQoYCNzZWN0aW9uJHtwYWdlQWxpYXN9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcblx0XHRcdFx0XHRcdFx0XHRUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuXHRcdFx0XHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0JHJvb3RTY29wZS4kd2F0Y2goJ2FjdGl2ZUxhbmd1YWdlJywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9KTtcclxuXHJcblx0fVxyXG5cclxuXHRmaW5kUGFyZW50R3JvdXAgKGFsaWFzLCBsaW5rcykge1xyXG5cdFx0Zm9yIChsZXQgbGluayBvZiBsaW5rcykge1xyXG5cdFx0XHRpZiAobGluay5hbGlhcyAmJiBsaW5rLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGxpbms7XHJcblxyXG5cdFx0XHRpZiAobGluay5jaGlsZHJlbikge1xyXG5cdFx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGxpbmsuY2hpbGRyZW4pIHtcclxuXHRcdFx0XHRcdGlmIChjaGlsZC5hbGlhcyAmJiBjaGlsZC5hbGlhcyA9PSBhbGlhcykge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbGluaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgcHJvZHVjdENhdGVNZW51Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckc2NvcGUnLCAnJHRpbWVvdXQnXTtcclxuXHJcbiAgICBzdWJNZW51cyA9IHN1Yk1lbnVzO1xyXG4gICAgY29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBcIkNsb3VkXCI7XHJcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3ViTWVudXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvIChlbGVtZW50SWQpIHtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgIyR7ZWxlbWVudElkfWApLm9mZnNldCgpLnRvcCAtIDUwO1xyXG4gICAgICAgICAgICBUd2VlbkxpdGUudG8od2luZG93LCAxLCB7c2Nyb2xsVG86e3k6IHNjcm9sbE9mZnNldH0sIGVhc2U6UG93ZXIyLmVhc2VPdXR9KTtcclxuICAgICAgICB9LCA4MDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJNZW51cyA9IFtcclxuICAgIHsgdGl0bGU6ICdHaeG7m2kgdGhp4buHdSBjaHVuZycsIGNvbnRlbnRJZDogXCJnaW9pdGhpZXVjaHVuZ1wiIH0sXHJcbiAgICB7IHRpdGxlOiAnQ8O0bmcgbmdo4buHJywgY29udGVudElkOiBcImNvbmduZ2hlXCIgfSxcclxuICAgIHsgdGl0bGU6ICdNw6B1IHPhuq9jJywgY29udGVudElkOiBcIm1hdXNhY1wiICB9LFxyXG4gICAgeyB0aXRsZTogJ1Row7RuZyBz4buRIGvhu7kgdGh14bqtdCcsIGNvbnRlbnRJZDogXCJ0aG9uZ3Nva3l0aHVhdFwiICB9LFxyXG5dIiwiZXhwb3J0IGNsYXNzIHByb2R1Y3RDb250cm9sbGVyIHtcclxuXHRzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93JywgJyRodHRwJywgJyRzdGF0ZScsICdtZXRhU2VydmljZSddO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcigkcm9vdFNjb3BlLCAkd2luZG93LCAkaHR0cCwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdFx0bGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHJcblx0XHR0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVHdvQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblxyXG5cdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0dGhpcy5wYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzO1xyXG5cdFx0JHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcclxuXHJcblx0XHRpZiAodGhpcy5zaW5nbGVNb2RlKSB7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9wb3N0L2dldC9qc29uYCwge1xyXG5cdFx0XHRcdHBhcmFtczoge2RvbWFpbiwgYWxpYXM6IHRoaXMucGFnZUFsaWFzfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHR0aGlzLmFjdGl2ZU5ld3MgPSBkYXRhLnJlc3VsdHNbMF0uUG9zdDtcclxuXHRcdFx0fSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAncHJvZHVjdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuYWxsUHJvZHVjdCA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIHNwbGFzaENvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJGludGVydmFsJywgJyR0aW1lb3V0J107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRzdGF0ZSwgJGludGVydmFsLCAkdGltZW91dCkge1xyXG5cdFx0dGhpcy4kc3RhdGUgPSAkc3RhdGU7XHJcblx0XHQkdGltZW91dCgoKSA9PiB0aGlzLnNraXBJbnRybygpLCAwKTtcclxuXHR9XHJcblxyXG5cdHNraXBJbnRybyAoKSB7XHJcblx0XHR0aGlzLiRzdGF0ZS50cmFuc2l0aW9uVG8oJ2hvbWUnKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBmaXhBbmFseXRpY01pc3NpbmcgfSBmcm9tIFwiLi91dGlscy9oZWxwZXJcIjtcclxuaW1wb3J0IHthcHBsaWNhdGlvbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvYXBwbGljYXRpb25Db250cm9sbGVyXCI7XHJcbmltcG9ydCByb3V0ZXJDb25maWcgZnJvbSBcIi4vcm91dGVyQ29uZmlnXCI7XHJcblxyXG5pbXBvcnQge21haW5Db250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL21haW5Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7cGFnZUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcGFnZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtuZXdzQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9uZXdzQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge3Byb2R1Y3RDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3Byb2R1Y3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7Y2hpbGRwcm9kdWN0Q29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9jaGlsZHByb2R1Y3RDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7c3BsYXNoQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9zcGxhc2hDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7cHJvZHVjdENhdGVNZW51Q29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYXJ0aWFsL3Byb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXJcIjtcclxuXHJcblxyXG5pbXBvcnQgbmF2aWdhdGlvbiBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgbmF2aWdhdGlvbkxpbmsgZnJvbSBcIi4vY29tcG9uZW50L25hdmlnYXRpb25MaW5rXCI7XHJcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vY29tcG9uZW50L2Zvb3RlclwiO1xyXG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9jb21wb25lbnQvc2lkZWJhclwiO1xyXG5pbXBvcnQgc3Vic2NyaXB0aW9uRm9ybSBmcm9tIFwiLi9jb21wb25lbnQvc3Vic2NyaXB0aW9uRm9ybVwiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vY29tcG9uZW50L21vZGFsXCI7XHJcbmltcG9ydCBtb2RhbE9uZSBmcm9tIFwiLi9jb21wb25lbnQvbW9kYWxPbmVcIjtcclxuaW1wb3J0IGNhcmQgZnJvbSBcIi4vY29tcG9uZW50L2NhcmRcIjtcclxuaW1wb3J0IHBvcHVwIGZyb20gXCIuL2NvbXBvbmVudC9wb3B1cFwiO1xyXG5pbXBvcnQgc2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudC9zbGlkZXJcIjtcclxuaW1wb3J0IG5ld3NBcmVhIGZyb20gXCIuL2NvbXBvbmVudC9uZXdzQXJlYVwiO1xyXG5pbXBvcnQgbWV0YVNlcnZpY2UgZnJvbSBcIi4vbWV0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHJlZ2lzdGVyRmlsdGVyIGZyb20gXCIuL3V0aWxzL2ZpbHRlclwiO1xyXG5cclxuZ2xvYmFsLmZpeEFuYWx5dGljTWlzc2luZyA9IGZpeEFuYWx5dGljTWlzc2luZztcclxubGV0IEFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHBsaWNhdGlvbicsIFsndWkucm91dGVyJywgJ25nQW5pbWF0ZScsICduZ1Byb2dyZXNzJywgJ25nVG91Y2gnLCAnbmdQYXJhbGxheCcsICdhbmd1bGFyLXNwaW5raXQnXSlcclxuXHQuY29uZmlnKHJvdXRlckNvbmZpZylcclxuXHQuY29udHJvbGxlcignYXBwQ3RybCcsIGFwcGxpY2F0aW9uQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignbWFpbkN0cmwnLCBtYWluQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcigncGFnZUN0cmwnLCBwYWdlQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignbmV3c0N0cmwnLCBuZXdzQ29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcigncHJvZHVjdEN0cmwnLCBwcm9kdWN0Q29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignY2hpbGRwcm9kdWN0Q3RybCcsIGNoaWxkcHJvZHVjdENvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3NwbGFzaEN0cmwnLCBzcGxhc2hDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwcm9kdWN0Q2F0ZU1lbnVDdHJsJywgcHJvZHVjdENhdGVNZW51Q29udHJvbGxlcilcclxuXHQuc2VydmljZSgnbWV0YVNlcnZpY2UnLCBtZXRhU2VydmljZSlcclxuXHQuZGlyZWN0aXZlKCdwb3B1cCcsIHBvcHVwKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0TmF2aWdhdGlvbicsIG5hdmlnYXRpb24pXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHRTaWRlYmFyJywgc2lkZWJhcilcclxuXHQuZGlyZWN0aXZlKCdsaWdodEZvb3RlcicsIGZvb3RlcilcclxuXHQuZGlyZWN0aXZlKCdsaWdodFNsaWRlcicsIHNsaWRlcilcclxuXHQuZGlyZWN0aXZlKCduZXdzQXJlYScsIG5ld3NBcmVhKVxyXG5cdC5kaXJlY3RpdmUoJ21vZGFsJywgbW9kYWwpXHJcblx0LmRpcmVjdGl2ZSgnbW9kYWxPbmUnLCBtb2RhbE9uZSlcclxuXHQuZGlyZWN0aXZlKCdjYXJkJywgY2FyZClcclxuXHQuZGlyZWN0aXZlKCdzdWJzY3JpcHRpb25Gb3JtJywgc3Vic2NyaXB0aW9uRm9ybSlcclxuXHQuZGlyZWN0aXZlKCduYXZpZ2F0aW9uTGluaycsIG5hdmlnYXRpb25MaW5rKTtcclxuXHJcblxyXG5yZWdpc3RlckZpbHRlcihBcHApO1xyXG5cclxuQXBwLnJ1bigoKSA9PiB7XHJcblx0RmFzdENsaWNrLmF0dGFjaChkb2N1bWVudC5ib2R5KTtcclxufSk7XHJcblxyXG5BcHAuZmlsdGVyKCd1bnNhZmUnLCBbXHJcblx0JyRzY2UnLCBmdW5jdGlvbiAoJHNjZSkge1xyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uICh2YWwpIHtcclxuXHRcdFx0cmV0dXJuICRzY2UudHJ1c3RBc0h0bWwodmFsKTtcclxuXHRcdH07XHJcblx0fVxyXG5dKTtcclxuXHJcbmFuZ3VsYXIuYm9vdHN0cmFwKGRvY3VtZW50LCBbJ2FwcGxpY2F0aW9uJ10pOyIsImltcG9ydCB7IGxhbmd1YWdlcywgbG9jYWxpemF0aW9uIH0gZnJvbSAnLi91dGlscy9oZWxwZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgJyR0aW1lb3V0JywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwLCAkdGltZW91dCApIHtcclxuXHR0aGlzLnJlYWR5ID0gZmFsc2U7XHJcblxyXG5cdHRoaXMubG9hZE1lbnUgPSAoY29uZmlncywgY29uZmlnUmVzb2x2ZSwgbmF2aWdhdGlvblJlc29sdmUpID0+IHtcclxuXHRcdGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IGNvbmZpZ3MgfHwgdGhpcy5jb25maWdzO1xyXG5cclxuXHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tZW51L2dldC9qc29uYCwge1xyXG5cdFx0XHRwYXJhbXM6IHsgZG9tYWluLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdH0pLnN1Y2Nlc3MoKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5saW5rcyA9IGRhdGEucmVzdWx0cztcclxuXHJcblx0XHRcdGlmIChuYXZpZ2F0aW9uUmVzb2x2ZSkgbmF2aWdhdGlvblJlc29sdmUodGhpcy5saW5rcyk7XHJcblx0XHRcdGlmIChjb25maWdSZXNvbHZlKSB7XHJcblx0XHRcdFx0Y29uZmlnUmVzb2x2ZSh0aGlzLmNvbmZpZ3MpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQkdGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0JHJvb3RTY29wZS4kYnJvYWRjYXN0KCdtZXRhU2VydmljZVJlYWR5Jyk7XHJcblx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWU7XHJcblx0XHRcdH0sIDApO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKGNvbmZpZ1Jlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0JHJvb3RTY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlID0gbGFuZ3VhZ2VzWzBdO1xyXG5cclxuXHRcdCRyb290U2NvcGUubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uWyRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UubGFuZ107XHJcblx0XHQkcm9vdFNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdCRyb290U2NvcGUubG9jYWxpemF0aW9uID0gbG9jYWxpemF0aW9uWyRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UubGFuZ107XHJcblx0XHRcdGlmICgkcm9vdFNjb3BlLmNvbmZpZ3MpIHRoaXMubG9hZE1lbnUoJHJvb3RTY29wZS5jb25maWdzKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCRyb290U2NvcGUuY2hhbmdlTGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkaHR0cC5nZXQoJy9jb25maWdzJykuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHRkYXRhLmRvbWFpbiA9IGRhdGEuZG9tYWluIHx8IGxvY2F0aW9uLmhvc3Q7XHJcblx0XHRcdGxldCBjb25maWdzID0gZGF0YSwgeyBhcGlIb3N0LCBkb21haW4gfSA9IGNvbmZpZ3M7XHJcblx0XHRcdHRoaXMuY29uZmlncyA9IGNvbmZpZ3M7XHJcblx0XHRcdCRyb290U2NvcGUuY29uZmlncyA9IGNvbmZpZ3M7XHJcblx0XHRcdC8vT3ZlcnJpZGUgdHJhbnNsYXRpb24gKGlmIHBvc3NpYmxlKS4uXHJcblx0XHRcdGxhbmd1YWdlcy5mb3JFYWNoKCh7bGFuZ30pID0+IHtcclxuXHRcdFx0XHRpZiAoY29uZmlncy50cmFuc2xhdGlvbltsYW5nXSkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGNvbmZpZ3MudHJhbnNsYXRpb25bbGFuZ10pKSB7XHJcblx0XHRcdFx0XHRcdGxvY2FsaXphdGlvbltsYW5nXVtrZXldID0gY29uZmlncy50cmFuc2xhdGlvbltsYW5nXVtrZXldO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoY29uZmlncy5sYW5ndWFnZXMpIHsgJHJvb3RTY29wZS5sYW5ndWFnZXMgPSBjb25maWdzLmxhbmd1YWdlczsgfVxyXG5cclxuXHJcblxyXG5cdFx0XHRuZXcgUHJvbWlzZSgobmF2aWdhdGlvblJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMubG9hZE1lbnUoY29uZmlncywgY29uZmlnUmVzb2x2ZSwgbmF2aWdhdGlvblJlc29sdmUpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1dOyIsImltcG9ydCB7cHJlbG9hZFJlc29sdmVzfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XHJcblxyXG5sZXQgcm91dGVyQ29uZmlnID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCAnJGNvbXBpbGVQcm92aWRlcicsICckaHR0cFByb3ZpZGVyJywgJyRsb2NhdGlvblByb3ZpZGVyJyxcclxuXHRmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkY29tcGlsZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG5cdFx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdFx0LnN0YXRlKCdzcGxhc2gnLCBzcGxhc2hSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdob21lJywgbWFpblJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ3BhZ2UnLCBwYWdlUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnbmV3cycsIG5ld3NSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdjaGlsZFByb2R1Y3QnLCBjaGlsZHByb2R1Y3RSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkRWNvc3BvcnQnLCBmb3JkZWNvc3BvcnRSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkRXZlcmVzdCcsIGZvcmRldmVyZXN0Um91dGUpXHJcblx0XHRcdC5zdGF0ZSgnZm9yZEZvY3VzJywgZm9yZGZvY3VzUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgnZm9yZFJhbmdlcicsIGZvcmRyYW5nZXJSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkVHJhbnNpdCcsIGZvcmR0cmFuc2l0Um91dGUpXHJcblx0XHRcdC5zdGF0ZSgncHJvZHVjdCcsIHByb2R1Y3RSb3V0ZSk7XHJcblxyXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3NwbGFzaCcpO1xyXG5cclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wb3N0ID0ge307XHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucHV0ID0ge307XHJcblx0XHQkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLmhlYWRlcnMucGF0Y2ggPSB7fTtcclxuXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcclxuXHR9XHJcbl07XHJcblxyXG52YXIgc3BsYXNoUm91dGUgPSB7XHJcblx0dXJsOiAnL3NwbGFzaCcsXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9lbXB0eUxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBzcGxhc2gnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvc3BsYXNoLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnc3BsYXNoQ3RybCBhcyBzcGxhc2hDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBtYWluUm91dGUgPSB7XHJcblx0dXJsOiAnLycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGhvbWUnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9tYWluLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnbWFpbkN0cmwgYXMgbWFpbkN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIHBhZ2VSb3V0ZSA9IHtcclxuXHR1cmw6ICcvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAcGFnZSc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL3BhZ2UuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdwYWdlQ3RybCBhcyBwYWdlQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgbmV3c1JvdXRlID0ge1xyXG5cdHVybDogJy90aW4tdHVjLzphbGlhcycsXHJcbnJlc29sdmU6IHtcclxuXHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBuZXdzJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvbmV3cy5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ25ld3NDdHJsIGFzIG5ld3NDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBwcm9kdWN0Um91dGUgPSB7XHJcblx0dXJsOiAnL3Nhbi1waGFtLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHByb2R1Y3QnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wcm9kdWN0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAncHJvZHVjdEN0cmwgYXMgcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGNoaWxkcHJvZHVjdFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWZpZXN0YS86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBjaGlsZFByb2R1Y3QnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvY2hpbGRQcm9kdWN0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkZWNvc3BvcnRSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1lY29zcG9ydC86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBmb3JkRWNvc3BvcnQnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZEVjb3Nwb3J0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkZXZlcmVzdFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWV2ZXJlc3QvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZEV2ZXJlc3QnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZEV2ZXJlc3QuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmRmb2N1c1JvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWZvY3VzLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGZvcmRGb2N1cyc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkRm9jdXMuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmRyYW5nZXJSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1yYW5nZXIvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZFJhbmdlcic6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkUmFuZ2VyLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkdHJhbnNpdFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLXRyYW5zaXQvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZFRyYW5zaXQnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZFRyYW5zaXQuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcclxuXHRtb2R1bGVJbnN0YW5jZVxyXG5cdFx0LmZpbHRlcignbmljZURhdGUnLCBuaWNlRGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuaWNlRGF0ZSAoKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcclxuXHRcdHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XHJcblx0fTtcclxufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzInOy8vJ3JpdmVyY2l0eTk5LnZuJzsvL2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCcsICd1c2VyTm90ZScsICd1c2VyVHlwZScsICd1c2VyQ2F0ZScsICd1c2VyRGF0ZSddO1xyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gW1xyXG5cdHtsYW5nOiBcInZpZXRuYW1lc2VcIiwgaWQ6IDEsIGRpc3BsYXk6IFwiVGnhur9uZyBWaeG7h3RcIn0sXHJcblx0Ly8ge2xhbmc6IFwiZW5nbGlzaFwiLCBpZDogMiwgZGlzcGxheTogXCJFbmdsaXNoXCJ9XHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvY2FsaXphdGlvbiA9IHtcclxuXHR2aWV0bmFtZXNlOiB7XHJcblx0XHRyZWdpc3RlcjogXCJMScOKTiBI4buGXCIsXHJcblx0XHRuZXdzOiBcIlRJTiBU4buoQ1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5H4buNaSA8L3NwYW4+YCxcclxuXHRcdHJlZ2lzdGVyVGl0bGVUYWlsOiBgIFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdDxzcGFuPiBob+G6t2MgZ+G7rWkgdGjDtG5nIHRpbiDEkeG7gyBuaOG6rW48L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkLDgU8gR0nDgTwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+dOG7qzwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJI4buNIHbDoCB0w6puKlwiLFxyXG5cdFx0dHlwZVBsYWNlaG9sZGVyOiBcIm5o4bqtcCB0eXBlXCIsXHJcblx0XHRwaG9uZVBsYWNlaG9sZGVyOiBcIsSQaeG7h24gdGhv4bqhaSpcIixcclxuXHRcdGVtYWlsUGxhY2Vob2xkZXI6IFwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIsXHJcblx0XHRub3RlUGxhY2Vob2xkZXI6IFwiR2hpIGNow7pcIixcclxuXHRcdHNlbmQ6IFwiR+G7rWlcIixcclxuXHRcdGRlc2lnbmVkQnk6IFwiVGhp4bq/dCBr4buDIGLhu59pXCJcclxuXHR9LFxyXG5cdGVuZ2xpc2g6IHtcclxuXHRcdHJlZ2lzdGVyOiBcIlNVQlNDUklCRVwiLFxyXG5cdFx0bmV3czogXCJORVdTXCIsXHJcblx0XHRyZWdpc3RlclRpdGxlSGVhZDogYDxzcGFuPkNhbGwgPC9zcGFuPmAsXHJcblx0XHRyZWdpc3RlclRpdGxlVGFpbDogYCBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj4gb3Igc3Vic2NyaWJlIHRvIHJlY2VpdmUgPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5RVU9UQVRJT048L3NwYW4+XHJcblx0XHRcdDxzcGFuPmZyb208L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPklOVkVTVE9SPC9zcGFuPmAsXHJcblx0XHRmdWxsTmFtZVBsYWNlaG9sZGVyOiBcIkZ1bGwgbmFtZSpcIixcclxuXHRcdHBob25lUGxhY2Vob2xkZXI6IFwiUGhvbmUqXCIsXHJcblx0XHRlbWFpbFBsYWNlaG9sZGVyOiBcIkVtYWlsIChvcHRpb25hbClcIixcclxuXHRcdG5vdGVQbGFjZWhvbGRlcjogXCJOb3RlLi5cIixcclxuXHRcdHNlbmQ6IFwiU2VuZFwiLFxyXG5cdFx0ZGVzaWduZWRCeTogXCJEZXNpZ25lZCBieVwiXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeEFuYWx5dGljTWlzc2luZyAoKSB7XHJcblx0aWYgKCFnbG9iYWwuZ2EpIGdsb2JhbC5nYSA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuZmJxKSBnbG9iYWwuZmJxID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5hbnRzX3VzZXJJbmZvTGlzdGVuZXIpIGdsb2JhbC5hbnRzX3VzZXJJbmZvTGlzdGVuZXIgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmFudHNfYW5hbHl0aWMpIGdsb2JhbC5hbnRzX2FuYWx5dGljID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xyXG5cdHZhciBzZWFyY2hLZXksIHNlYXJjaFZhbHVlO1xyXG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XHJcblx0XHRzZWFyY2hLZXkgPSBrZXk7XHJcblx0XHRzZWFyY2hWYWx1ZSA9IHByZWRpY2F0ZVtrZXldO1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaW5zdGFuY2Ugb2Ygc291cmNlcykge1xyXG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudE1lbnVCeUFsaWFzIChhbGlhcywgbGlua3MpIHtcclxuXHRmb3IgKGxldCBncm91cCBvZiBsaW5rcykge1xyXG5cdFx0aWYgKGdyb3VwLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGdyb3VwO1xyXG5cdFx0aWYgKGdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGdyb3VwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xyXG5cdHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XHJcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xyXG5cdFx0cmV0dXJuIGNvbmZpZ1NlcnZpY2UucHJvbWlzZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcclxuXHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XHJcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xyXG5cdGlmIChtYXggIT0gdW5kZWZpbmVkICYmIHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XHJcblx0dmFyIGYgPSBmb250IHx8ICcxMnB4IGFyaWFsJyxcclxuXHRcdG8gPSAkKCc8ZGl2PicgKyB0aGlzICsgJzwvZGl2PicpXHJcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXHJcblx0XHRcdC5hcHBlbmRUbygkKCdib2R5JykpLFxyXG5cdFx0dyA9IG8ud2lkdGgoKTtcclxuXHJcblx0by5yZW1vdmUoKTtcclxuXHJcblx0cmV0dXJuIHc7XHJcbn07XHJcblxyXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
