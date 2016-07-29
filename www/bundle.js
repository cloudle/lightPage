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

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'fordranger', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			fbq('track', 'ViewContent');

			$rootScope.fordRanger = data.results;
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'fordecosport', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			fbq('track', 'ViewContent');

			$rootScope.fordEcosport = data.results;
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'fordeverest', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			fbq('track', 'ViewContent');

			$rootScope.fordEverest = data.results;
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'fordfocus', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			fbq('track', 'ViewContent');

			$rootScope.fordFocus = data.results;
		});

		$http.get(apiHost + '/banner/get/json', {
			params: { domain: domain, type: 'fordtransit', lang: $rootScope.activeLanguage.id }
		}).success(function (data) {
			fbq('track', 'ViewContent');

			$rootScope.fordTransit = data.results;
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

var childproductController = exports.childproductController = function childproductController($rootScope, $window, $http, $state, metaService) {
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
            params: { domain: domain, type: 'fordfiesta', lang: $rootScope.activeLanguage.id }
        }).success(function (data) {
            fbq('track', 'ViewContent');

            $rootScope.allchildProduct = data.results;
        });
    }
};

childproductController.$inject = ['$rootScope', '$window', '$http', '$state', 'metaService'];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGNvbXBvbmVudFxcY2FyZC5qcyIsImFwcFxcY29tcG9uZW50XFxmb290ZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWwuanMiLCJhcHBcXGNvbXBvbmVudFxcbW9kYWxPbmUuanMiLCJhcHBcXGNvbXBvbmVudFxcbmF2aWdhdGlvbi5qcyIsImFwcFxcY29tcG9uZW50XFxuYXZpZ2F0aW9uTGluay5qcyIsImFwcFxcY29tcG9uZW50XFxuZXdzQXJlYS5qcyIsImFwcFxcY29tcG9uZW50XFxwb3B1cC5qcyIsImFwcFxcY29tcG9uZW50XFxzaWRlYmFyLmpzIiwiYXBwXFxjb21wb25lbnRcXGFwcFxcY29tcG9uZW50XFxzbGlkZXIuanMiLCJhcHBcXGNvbXBvbmVudFxcc3Vic2NyaXB0aW9uRm9ybS5qcyIsImFwcFxcY29udHJvbGxlclxcYXBwXFxjb250cm9sbGVyXFxhcHBsaWNhdGlvbkNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXGNoaWxkcHJvZHVjdENvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXG1haW5Db250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxuZXdzQ29udHJvbGxlci5qcyIsImFwcFxcY29udHJvbGxlclxccGFnZUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHBhcnRpYWxcXHByb2R1Y3RDYXRlTWVudUNvbnRyb2xsZXIuanMiLCJhcHBcXGNvbnRyb2xsZXJcXHByb2R1Y3RDb250cm9sbGVyLmpzIiwiYXBwXFxjb250cm9sbGVyXFxzcGxhc2hDb250cm9sbGVyLmpzIiwiYXBwXFxhcHBcXGVudHJ5LmpzIiwiYXBwXFxtZXRhU2VydmljZS5qcyIsImFwcFxccm91dGVyQ29uZmlnLmpzIiwiYXBwXFx1dGlsc1xcZmlsdGVyLmpzIiwiYXBwXFx1dGlsc1xcYXBwXFx1dGlsc1xcaGVscGVyLmpzIl0sIm5hbWVzIjpb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LEVBQWdDO0FBQy9CLFlBQVUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFzQixLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsS0FBYyxDQUF6QixDQUF0QixDQUFWO0FBQ0E7O0FBRUQsUUFBTyxNQUFQO0FBQ0E7O0FBRU0sU0FBUyxTQUFULENBQW9CLEtBQXBCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLEVBQXFDO0FBQzNDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLEtBQUksT0FBTyxTQUFQLElBQW9CLFNBQVMsR0FBakMsRUFBc0MsT0FBTyxHQUFQO0FBQ3RDLFFBQU8sS0FBUDtBQUNBOztBQUVELE9BQU8sU0FBUCxDQUFpQixLQUFqQixHQUF5QixVQUFTLElBQVQsRUFBZTtBQUN2QyxLQUFJLElBQUksUUFBUSxZQUFoQjtBQUFBLEtBQ0MsSUFBSSxFQUFFLFVBQVUsSUFBVixHQUFpQixRQUFuQixFQUNGLEdBREUsQ0FDRSxFQUFDLFlBQVksVUFBYixFQUF5QixTQUFTLE1BQWxDLEVBQTBDLGVBQWUsUUFBekQsRUFBbUUsY0FBYyxRQUFqRixFQUEyRixRQUFRLENBQW5HLEVBREYsRUFFRixRQUZFLENBRU8sRUFBRSxNQUFGLENBRlAsQ0FETDtBQUFBLEtBSUMsSUFBSSxFQUFFLEtBQUYsRUFKTDs7QUFNQSxHQUFFLE1BQUY7O0FBRUEsUUFBTyxDQUFQO0FBQ0EsQ0FWRDs7QUFZQSxPQUFPLElBQVAsR0FBYyxrQkFBZCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7bW9kYWw6ICdAJywgc3VibWl0VGV4dDogJ0AnfSxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLmNhcmRUaXRsZUhlYWQgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gc3R5bGU9XCJjb2xvcjojZmE4MzIyO1wiIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24uY2FyZFRpdGxlVGFpbCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+ICBcclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgLFxyXG5cclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG4gICAgICAgICAgICBzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgWyckcm9vdFNjb3BlJywgJyRodHRwJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRodHRwKSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgY29sdW1uczogJz0nIH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgaWQ9XCJmb290ZXJcIiBjbGFzcz1cImZvb3RlclwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtbnNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2xcIiBuZy1yZXBlYXQ9XCJjb2x1bW4gaW4gY29sdW1uc1wiIG5nLWJpbmQtaHRtbD1cImNvbHVtbi5Qb3N0LmNvbnRlbnQgfCB1bnNhZmVcIj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29weXJpZ2h0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXJvd1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGFuZ3VhZ2UtY2hvaWNlXCIgbmctcmVwZWF0PVwibGFuZ3VhZ2UgaW4gJHJvb3QubGFuZ3VhZ2VzXCIgXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctY2xhc3M9XCJ7YWN0aXZlOiBsYW5ndWFnZUFjdGl2ZShsYW5ndWFnZSl9XCIgXHJcblx0XHRcdFx0XHRcdFx0XHQgbmctY2xpY2s9XCIkcm9vdC5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZSlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0IG5nLWJpbmQ9XCJsYW5ndWFnZS5kaXNwbGF5XCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5kZXNpZ25lZEJ5XCI+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICA8YSBocmVmPVwiaHR0cDovL3R3aW4udm5cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOiMyRUIzRDM7XCIgdGFyZ2V0PVwiX2JsYW5rXCI+VFdJTiBTb2Z0d2FyZSBTb2x1dGlvbnM8L2E+XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcblx0XHRcdHNjb3BlLmxhbmd1YWdlQWN0aXZlID0gKGluc3RhbmNlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGluc3RhbmNlLmlkID09ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQ7XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fVxyXG59XSIsImltcG9ydCB7IGlzRW1haWxWYWxpZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICBzY29wZTogeyBtb2RhbDogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcclxuICAgICAgICB0ZW1wbGF0ZTogYDxmb3JtIG5nLWNsYXNzPVwibW9kYWxcIiBuZy1zdWJtaXQ9XCJzdWJtaXQoJGV2ZW50KVwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2xvc2UtY29tbWFuZCBpY29uLW5hdmlnYXRpb24tY2xvc2VcIiBuZy1jbGljaz1cImFwcEN0cmwuY2xvc2VSZWdpc3RlckZvcm0oKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPlxyXG5cdFx0XHRcdDxzcGFuIG5nLWJpbmQtaHRtbD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclRpdGxlSGVhZCB8IHVuc2FmZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVUYWlsIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGZpZWxkc2V0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlck5hbWVFcnJvclwiIG5nLWlmPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZnVsbE5hbWVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJOYW1lXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJqb2JcIj5DaOG7jW4gZMOybmcgeGU6ICAgPC9sYWJlbD5cclxuXHRcdFx0PHNlbGVjdCBpZD1cImpvYlwiIG5hbWU9XCJ1c2VyX2pvYlwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyVHlwZVwiPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBGaWVzdGE8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgUmFuZ2VyPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEV2ZXJlc3Q8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgVHJhbnNpdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBOZXcgRm9jdXM8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRWNvU3BvcnQ8L29wdGlvbj5cdFx0XHRcdFxyXG5cdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHJcblx0XHRcdDwhLS08aW5wdXQgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNoZWNrZWQgbmFtZT1cInBheVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiVHLhuqMgR8OzcFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBHw7NwPC9sYWJlbD4tLT5cclxuXHRcdFx0PCEtLTxpbnB1dCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBI4bq/dFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBI4bq/dDwvbGFiZWw+LS0+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ucGhvbmVQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJQaG9uZVwiLz5cclxuXHRcdFx0XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJhcmVhXCI+Q2jhu41uIGtodSB24buxYzogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IHJlcXVpcmVkPVwicmVxdWlyZWRcIiBpZD1cImFyZWFcIiBuYW1lPVwidXNlcl9hcmVhXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJBcmVhXCI+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlRQIEjhu5MgQ2jDrSBNaW5oXCI+VFAgSOG7kyBDaMOtIE1pbmg8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIETGsMahbmc8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPsSQ4buTbmcgTmFpPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6AgUuG7i2EgLSBWxaluZyBUw6B1PC9vcHRpb24+XHRcdFxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggUGjGsOG7m2M8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIFRodeG6rW48L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPlTDonkgTmluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+S2jDoWM8L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiZGF0ZVwiPk5nw6B5IGzDoWkgdGjhu606ICAgPC9sYWJlbD5cclxuXHRcdFx0PGlucHV0IG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyRGF0ZVwiIHR5cGU9XCJkYXRlXCIvPlxyXG5cdFx0XHRcclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5lbWFpbFBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckVtYWlsXCIvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3Itcm93XCIgbmctYmluZD1cImFwcEN0cmwudXNlckVtYWlsRXJyb3JcIiBuZy1pZj1cImFwcEN0cmwudXNlckVtYWlsRXJyb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1hbmRzXCI+XHJcblx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJzb2NpYWwtYnV0dG9uIGZhY2Vib29rXCIgbmctY2xpY2s9XCJmYWNlYm9va0xvZ2luKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZ29vZ2xlXCIgbmctY2xpY2s9XCJnb29nbGVMb2dpbigpXCI+PC9kaXY+LS0+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXRcIiBuZy1iaW5kPVwic3VibWl0VGV4dCB8fCAkcm9vdC5sb2NhbGl6YXRpb24uc2VuZFwiPjwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLTx0ZXh0YXJlYSByb3dzPVwiNFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24ubm90ZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5vdGVcIj48L3RleHRhcmVhPi0tPlxyXG5cdFx0XHQgPC9maWVsZHNldD5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvcm0+YCxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XHJcbiAgICAgICAgICAgIGxldCB7YXBpSG9zdCwgZG9tYWlufSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcbiAgICAgICAgICAgIHNjb3BlLmNvbmZpZ3MgPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG4gICAgICAgICAgICBzY29wZS5hcHBDdHJsID0gJHJvb3RTY29wZS5hcHBDdHJsO1xyXG4gICAgICAgICAgICBzY29wZS5zdWJtaXQgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyO1xyXG5cclxuICAgICAgICAgICAgLy8gc2NvcGUuZ29vZ2xlTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgYW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1dXHJcblxyXG52YXIgZmllbGRzID0gWyd1c2VyTmFtZScsICd1c2VyUGhvbmUnLCd1c2VyRW1haWwnLCAndXNlclR5cGUnLCAndXNlckNhdGUnLCAndXNlckFyZWEnLCd1c2VyRGF0ZSddOyIsImV4cG9ydCBkZWZhdWx0IFtmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgcmVwbGFjZTogdHJ1ZSxcclxuICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxyXG4gICAgICAgIHNjb3BlOiB7IGVuYWJsZTogJz0nIH0sXHJcbiAgICAgICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibW9kYWxPbmUtYmFja2Ryb3BcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIiBuZy1jbGljaz1cImNsb3NlTW9kYWwoKVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWxPbmUtd3JhcHBlclwiIG5nLWNsaWNrPVwidG9nZ2xlKCRldmVudClcIj5cclxuXHRcdFx0ICAgIDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQ8L2Rpdj5gLFxyXG4gICAgICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuICAgICAgICAgICAgc2NvcGUuY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmVuYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzY29wZS50b2dnbGUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZToge1xyXG5cdFx0XHRyZWFkeTogJz0nLFxyXG5cdFx0XHRidXJnZXJBY3RpdmU6ICc9J1xyXG5cdFx0fSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb24td3JhcHBlclwiIG5nLWNsYXNzPVwie2J1cmdlcmluZzogYnVyZ2VyQWN0aXZlLCByZWFkeTogcmVhZHl9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2l0ZS1sb2dvXCIgdWktc3JlZj1cImhvbWVcIj48L2Rpdj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVyZ2VyLW1lbnUtYWN0aXZhdG9yIGljb24tbmF2aWdhdGlvbi1tZW51XCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPjwvZGl2PlxyXG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlUG9wdXAoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3Vic2NyaXB0aW9uLWFjdGl2YXRvclwiIG5nLWNsaWNrPVwidG9nZ2xlTW9kYWxQb3B1cCgpXCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5yZWdpc3RlclwiPjwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLW1lbnVcIj5cclxuXHRcdFx0XHRcdDxuYXZpZ2F0aW9uLWxpbmsgaW5zdGFuY2U9XCJsaW5rXCIgbmctcmVwZWF0PVwibGluayBpbiBsaW5rc1wiPjwvbmF2aWdhdGlvbi1saW5rPlxyXG5cdFx0XHRcdFx0PCEtLTxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IGNoaWxkcHJvZHVjdEFjdGl2ZUNsYXNzKCl9XCI+LS0+XHJcblx0XHRcdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiB1aS1zcmVmPVwiY2hpbGRQcm9kdWN0XCIgbmctYmluZD1cIiRyb290LmxvY2FsaXphdGlvbi5jaGlsZHByb2R1Y3RcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHRcdDwhLS08L2Rpdj4tLT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1jbGFzcz1cInthY3RpdmU6IHByb2R1Y3RBY3RpdmVDbGFzcygpfVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGFyZW50LWxpbmtcIiB1aS1zcmVmPVwicHJvZHVjdFwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ucHJvZHVjdFwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbi1saW5rXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInBhcmVudC1saW5rXCIgdWktc3JlZj1cIm5ld3NcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJidXJnZXItbWVudS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBidXJnZXJBY3RpdmV9XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1cmdlci1tZW51XCI+XHJcblx0XHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cIm1lbnUtaGVhZGluZ1wiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogaXRlbS5hY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBsaW5rc1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWVudS1pdGVtXCIgbmctYmluZD1cIml0ZW0ubmFtZVwiIG5nLWNsaWNrPVwicGFyZW50TGlua05hdmlnYXRlKGl0ZW0pXCI+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbWVudXNcIiBuZy1pZj1cIml0ZW0uY2hpbGRyZW5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwic3ViLW1lbnUgc3ViLWxpbmsgaWNvbi1hdi1wbGF5LWFycm93XCIgbmctYmluZD1cImNoaWxkLm5hbWVcIiBuZy1yZXBlYXQ9XCJjaGlsZCBpbiBpdGVtLmNoaWxkcmVuXCJcclxuXHRcdFx0XHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHthbGlhczogY2hpbGQuYWxpYXN9KVwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW0td3JhcHBlclwiIG5nLWNsYXNzPVwie2FjdGl2ZTogcHJvZHVjdEFjdGl2ZUNsYXNzKCl9XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51LWl0ZW1cIiB1aS1zcmVmPVwicHJvZHVjdFwiIG5nLWNsaWNrPVwidG9nZ2xlQnVyZ2VyKClcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLnByb2R1Y3RcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbS13cmFwcGVyXCIgbmctY2xhc3M9XCJ7YWN0aXZlOiBuZXdzQWN0aXZlQ2xhc3MoKX1cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1lbnUtaXRlbVwiIHVpLXNyZWY9XCJuZXdzXCIgbmctY2xpY2s9XCJ0b2dnbGVCdXJnZXIoKVwiIG5nLWJpbmQ9XCIkcm9vdC5sb2NhbGl6YXRpb24ubmV3c1wiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdHNjb3BlLmxpbmtzID0gbWV0YVNlcnZpY2UubGlua3M7XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVCdXJnZXIgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0c2NvcGUuYnVyZ2VyQWN0aXZlID0gIXNjb3BlLmJ1cmdlckFjdGl2ZTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLnRvZ2dsZVBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5zdWJzY3JpcHRpb25Qb3B1cCA9ICFzY29wZS4kcGFyZW50LmFwcEN0cmwuc3Vic2NyaXB0aW9uUG9wdXA7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS50b2dnbGVNb2RhbFBvcHVwID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLiRwYXJlbnQuYXBwQ3RybC5tb2RhbFBvcHVwID0gIXNjb3BlLiRwYXJlbnQuYXBwQ3RybC5tb2RhbFBvcHVwO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRzY29wZS50b2dnbGVCdXJnZXIoKTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHNjb3BlLm5ld3NBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ25ld3MnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNjb3BlLnByb2R1Y3RBY3RpdmVDbGFzcyA9ICgpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gJHN0YXRlLmN1cnJlbnQubmFtZSA9PT0gJ3Byb2R1Y3QnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNjb3BlLmNoaWxkcHJvZHVjdEFjdGl2ZUNsYXNzID0gKCkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiAkc3RhdGUuY3VycmVudC5uYW1lID09PSAnZm9yZCc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1dOyIsImxldCBtYWluRm9udCA9IFwiMTRweCAnT3BlbiBTYW5zJ1wiLCBjaGlsZEZvbnQgPSBcIjEzcHggJ09wZW4gU2FucydcIiwgcGFkZGluZyA9IDgwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWyckaHR0cCcsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkaHR0cCwgJHJvb3RTY29wZSwgJHN0YXRlLCBtZXRhU2VydmljZSkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHNjb3BlOiB7XHJcblx0XHRcdGluc3RhbmNlOiAnPSdcclxuXHRcdH0sXHJcblx0XHR0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uLWxpbmtcIiBuZy1zdHlsZT1cInt3aWR0aDogbWF4V2lkdGgrJ3B4J31cIiBuZy1jbGFzcz1cInthY3RpdmU6IGxpbmtBY3RpdmVDbGFzcyhpbnN0YW5jZSl9XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJwYXJlbnQtbGlua1wiIG5nLWJpbmQ9XCJpbnN0YW5jZS5uYW1lXCIgbmctY2xpY2s9XCJwYXJlbnRMaW5rTmF2aWdhdGUoaW5zdGFuY2UpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzdWItbmF2aWdhdGlvbnMgaWNvbi1uYXZpZ2F0aW9uLWFycm93LWRyb3AtdXBcIiBuZy1pZj1cImluc3RhbmNlLmNoaWxkcmVuXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInN1Yi1saW5rIGljb24tYXYtcGxheS1hcnJvd1wiIG5nLWJpbmQ9XCJsaW5rLm5hbWVcIiBuZy1yZXBlYXQ9XCJsaW5rIGluIGluc3RhbmNlLmNoaWxkcmVuXCJcclxuXHRcdFx0XHRcdHVpLXNyZWY9XCJwYWdlKHthbGlhczogbGluay5hbGlhc30pXCI+PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdFx0c2NvcGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHNjb3BlLm1heFdpZHRoID0gc2NvcGUuaW5zdGFuY2UubmFtZS53aWR0aChtYWluRm9udCkgKyBwYWRkaW5nO1xyXG5cclxuXHRcdFx0aWYgKHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuICYmIHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmxlbmd0aCkge1xyXG5cdFx0XHRcdHNjb3BlLmluc3RhbmNlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGN1cnJlbnRXaWR0aCA9IGNoaWxkLm5hbWUud2lkdGgoY2hpbGRGb250KSArIHBhZGRpbmc7XHJcblx0XHRcdFx0XHRpZiAoY3VycmVudFdpZHRoID4gc2NvcGUubWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdFx0c2NvcGUubWF4V2lkdGggPSBjdXJyZW50V2lkdGg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjb3BlLmxpbmtBY3RpdmVDbGFzcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG5cdFx0XHRcdHJldHVybiAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwICYmICRyb290U2NvcGUuYWN0aXZlR3JvdXAuaWQgPT09IGluc3RhbmNlLmlkO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c2NvcGUucGFyZW50TGlua05hdmlnYXRlID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XHJcblx0XHRcdFx0aWYgKGluc3RhbmNlLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYgKGluc3RhbmNlLmNoaWxkcmVuWzBdICYmIGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzKSB7XHJcblx0XHRcdFx0XHQkc3RhdGUuZ28oJ3BhZ2UnLCB7YWxpYXM6IGluc3RhbmNlLmNoaWxkcmVuWzBdLmFsaWFzfSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHApIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2VjdGlvbi1jYW52YXMgdG9wLXNlcGFyYXRlZCBuZXdzLWFyZWFcIj5cclxuXHRcdFx0PG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IChzY29wZSwgZWxlbWVudCwgYXR0cnMpID0+IHtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiZXhwb3J0IGRlZmF1bHQgW2Z1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHR0cmFuc2NsdWRlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgZW5hYmxlOiAnPScgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInBvcHVwLXdyYXBwZXJcIiBuZy1jbGFzcz1cInthY3RpdmU6IGVuYWJsZX1cIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInBvcHVwLWJhY2tkcm9wXCIgbmctY2xpY2s9XCJ0b2dnbGUoKVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicG9wdXAtY29udGVudFwiPlxyXG5cdFx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0c2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdHNjb3BlLmVuYWJsZSA9ICFzY29wZS5lbmFibGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiY29uc3QgaW5pdGlhbFRvcE9mZnNldCA9IDEyMTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckdGltZW91dCcsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG5cdHJldHVybiB7XHJcblx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0cmVwbGFjZTogdHJ1ZSxcclxuXHRcdHRyYW5zY2x1ZGU6IHRydWUsXHJcblx0XHRzY29wZTogeyBlbmFibGU6ICc9JyB9LFxyXG5cdFx0dGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic2lkZWJhci13cmFwcGVyXCIgbmctc3R5bGU9XCJ7dHJhbnNmb3JtOiAndHJhbnNsYXRlKDAsJyt0b3BQb3NpdGlvbisncHgpJ31cIj5cclxuXHRcdFx0PCEtLTxzdWJzY3JpcHRpb24tZm9ybSB3cmFwcGVyLWNsYXNzPVwic3Vic2NyaXB0aW9uLWZvcm0gc2lkZWJhclwiPjwvc3Vic2NyaXB0aW9uLWZvcm0+LS0+XHJcblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic21hbGwtYmFubmVyXCI+PC9kaXY+LS0+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdFx0PCEtLTxzdWJzY3JpcHRpb24tZm9ybSBtb2RhbD1cInN1YnNjcmlwdGlvbi1mb3JtIHNpZGViYXJcIj48L3N1YnNjcmlwdGlvbi1mb3JtPi0tPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZWJhci1uZXdzXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImhlYWRpbmdcIiBuZy1iaW5kPVwiJHJvb3QubG9jYWxpemF0aW9uLm5ld3NcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibmV3cy1zdW1tYXJ5XCIgbmctcmVwZWF0PVwibmV3c0l0ZW0gaW4gbmV3c1wiIHVpLXNyZWY9XCJuZXdzKHthbGlhczogbmV3c0l0ZW0uUG9zdC5hbGlhc30pXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGh1bWItaW1hZ2VcIiBuZy1zdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJytuZXdzSXRlbS5Qb3N0LmltYWdlKycpJ31cIj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aXRsZVwiIG5nLWJpbmQ9XCJuZXdzSXRlbS5Qb3N0LnRpdGxlXCI+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0dmFyIHNpZGViYXJIZWlnaHQsIGZvb3RlckhlaWdodDsgc2NvcGUudG9wUG9zaXRpb24gPSAwO1xyXG5cclxuXHRcdFx0Ly9TYWZlbHkgY2FsY3VsYXRlIGVsZW1lbnQncyBzaXplIGFmdGVyIHN0dWZmIGhhdmUgYmVlbiByZW5kZXJlZCFcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHNpZGViYXJIZWlnaHQgPSBlbGVtZW50Lm91dGVySGVpZ2h0KCk7XHJcblx0XHRcdFx0Zm9vdGVySGVpZ2h0ID0gYW5ndWxhci5lbGVtZW50KCcjZm9vdGVyJykub3V0ZXJIZWlnaHQoKTtcclxuXHRcdFx0fSwgNTAwKTtcclxuXHJcblx0XHRcdCRyb290U2NvcGUuJG9uKCdzY3JvbGxDaGFuZ2UnLCAoZXZlbnQsIHNjcm9sbFBvc2l0aW9uKSA9PiB7XHJcblx0XHRcdFx0c2NvcGUubmV3cyA9ICRyb290U2NvcGUubmV3cztcclxuXHJcblx0XHRcdFx0c2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHRcdGxldCBkb2N1bWVudEhlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpLCB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdFx0XHRcdG9mZnNldCA9IGVsZW1lbnQub2Zmc2V0KCk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHNjcm9sbFBvc2l0aW9uLnNjcm9sbGluZ0Rvd24pIHtcclxuXHRcdFx0XHRcdFx0bGV0IHNjcm9sbERvd25Ub3VjaEJvdHRvbSA9IHNjcm9sbFBvc2l0aW9uLnRvcCArIHdpbmRvd0hlaWdodCA+IG9mZnNldC50b3AgKyBzaWRlYmFySGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHRcdHNjcm9sbERvd25PdmVyRm9vdGVyID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0ID4gZG9jdW1lbnRIZWlnaHQgLSBmb290ZXJIZWlnaHQ7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoc2Nyb2xsRG93blRvdWNoQm90dG9tICYmICFzY3JvbGxEb3duT3ZlckZvb3Rlcikge1xyXG5cdFx0XHRcdFx0XHRcdHNjb3BlLnRvcFBvc2l0aW9uID0gc2Nyb2xsUG9zaXRpb24udG9wICsgd2luZG93SGVpZ2h0IC0gc2lkZWJhckhlaWdodCAtIGluaXRpYWxUb3BPZmZzZXQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoc2Nyb2xsUG9zaXRpb24udG9wIDwgb2Zmc2V0LnRvcCAtIGluaXRpYWxUb3BPZmZzZXQpIHtcclxuXHRcdFx0XHRcdFx0c2NvcGUudG9wUG9zaXRpb24gPSBzY3JvbGxQb3NpdGlvbi50b3A7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufV0iLCJleHBvcnQgZGVmYXVsdCBbJyRpbnRlcnZhbCcsICckdGltZW91dCcsIGZ1bmN0aW9uICgkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XHJcblx0cmV0dXJuIHtcclxuXHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRyZXBsYWNlOiB0cnVlLFxyXG5cdFx0c2NvcGU6IHsgaXRlbXM6ICc9JyB9LFxyXG5cdFx0dHJhbnNjbHVkZTogdHJ1ZSxcclxuXHRcdHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxpZ2h0LXNsaWRlciB7e3dyYXBwZXJDbGFzc319XCJcclxuXHRcdFx0bmctc3dpcGUtbGVmdD1cInN3aXBlTGVmdCgkZXZlbnQpXCIgbmctc3dpcGUtcmlnaHQ9XCJzd2lwZVJpZ2h0KCRldmVudClcIj5cclxuXHRcdFx0PGRpdiBpZD1cImN1cnJlbnRTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrYWN0aXZlU2xpZGUuaW1hZ2UrJyknfVwiPjwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGlkPVwicHJldmlvdXNTbGlkZVwiIGNsYXNzPVwiYWN0aXZlLXNsaWRlIHByZXZpb3VzXCIgbmctc3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrcHJldmlvdXNTbGlkZS5pbWFnZSsnKSd9XCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtbmF2aWdhdGlvblwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1uZXh0XCI+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hdmlnYXRlLWJhY2tcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwic2xpZGUtcG9zaXRpb25zXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInBvc2l0aW9uLWl0ZW1cIiBuZy1jbGFzcz1cInthY3RpdmU6IGl0ZW0uaXNBY3RpdmV9XCIgbmctcmVwZWF0PVwiaXRlbSBpbiBpdGVtc1wiIG5nLWNsaWNrPVwibmF2aWdhdGUoaXRlbSlcIj48L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxuZy10cmFuc2NsdWRlPjwvbmctdHJhbnNjbHVkZT5cclxuXHRcdDwvZGl2PmAsXHJcblx0XHRsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSA9PiB7XHJcblx0XHRcdGxldCAkYWN0aXZlU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNjdXJyZW50U2xpZGUnKSwgJHByZXZpb3VzU2xpZGUgPSBlbGVtZW50LmZpbmQoJyNwcmV2aW91c1NsaWRlJyksXHJcblx0XHRcdFx0ZWFzZUVmZmVjdCA9IFNpbmUuZWFzZUluLCB0cmFuc2l0aW9uVGltZSA9IDI7XHJcblxyXG5cdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IDA7XHJcblx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cclxuXHRcdFx0c2NvcGUuJHdhdGNoKCdpdGVtcycsICgpID0+IHtcclxuXHRcdFx0XHRuZXh0U2xpZGUoMCk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCkgJGludGVydmFsLmNhbmNlbChnbG9iYWwuc2xpZGVySW50ZXJ2YWwpO1xyXG5cclxuXHRcdFx0bGV0IG5leHRTbGlkZSA9IGZ1bmN0aW9uIChuZXh0SW5kZXgpIHtcclxuXHRcdFx0XHRzY29wZS5wcmV2aW91c1NsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5wcmV2aW91c1NsaWRlKSBzY29wZS5wcmV2aW91c1NsaWRlLmlzQWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gbmV4dEluZGV4ICE9IHVuZGVmaW5lZCA/IG5leHRJbmRleCA6IHNjb3BlLmFjdGl2ZUluZGV4ICsgMTtcclxuXHRcdFx0XHRpZiAoc2NvcGUuYWN0aXZlSW5kZXggPCAwKSB7XHJcblx0XHRcdFx0XHRzY29wZS5hY3RpdmVJbmRleCA9IHNjb3BlLml0ZW1zLmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChzY29wZS5hY3RpdmVJbmRleCA+PSBzY29wZS5pdGVtcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHNjb3BlLmFjdGl2ZUluZGV4ID0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHNjb3BlLmFjdGl2ZVNsaWRlID0gc2NvcGUuaXRlbXNbc2NvcGUuYWN0aXZlSW5kZXhdO1xyXG5cdFx0XHRcdGlmIChzY29wZS5hY3RpdmVTbGlkZSkgc2NvcGUuYWN0aXZlU2xpZGUuaXNBY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHQvL1BsYXkgdHJhbnNpdGlvbiBhbmltYXRpb24hXHJcblx0XHRcdFx0Ly8gVHdlZW5MaXRlLmZyb21UbygkcHJldmlvdXNTbGlkZSwgdHJhbnNpdGlvblRpbWUsIHtlYXNlOiBlYXNlRWZmZWN0LCB4OiAnMCUnfSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICcxMDAlJ30pO1xyXG5cdFx0XHRcdC8vIFR3ZWVuTGl0ZS5mcm9tVG8oJGFjdGl2ZVNsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIHg6ICctMTAwJSd9LCB7ZWFzZTogZWFzZUVmZmVjdCwgeDogJzAlJ30pO1xyXG5cdFx0XHRcdFR3ZWVuTGl0ZS50bygkYWN0aXZlU2xpZGUsIDAsIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMSd9KTtcclxuXHRcdFx0XHRUd2VlbkxpdGUuZnJvbVRvKCRwcmV2aW91c1NsaWRlLCB0cmFuc2l0aW9uVGltZSwge2Vhc2U6IGVhc2VFZmZlY3QsIG9wYWNpdHk6ICcxJ30sIHtlYXNlOiBlYXNlRWZmZWN0LCBvcGFjaXR5OiAnMCd9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXNldCBpbnRlcnZhbDtcclxuXHRcdFx0XHRpZiAoZ2xvYmFsLnNsaWRlckludGVydmFsKSAkaW50ZXJ2YWwuY2FuY2VsKGdsb2JhbC5zbGlkZXJJbnRlcnZhbCk7XHJcblx0XHRcdFx0Z2xvYmFsLnNsaWRlckludGVydmFsID0gJGludGVydmFsKCgpID0+IG5leHRTbGlkZSgpLCAxMDAwMCk7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5uYXZpZ2F0ZSA9IChpbnN0YW5jZSkgPT4ge1xyXG5cdFx0XHRcdGlmIChpbnN0YW5jZSAhPSBzY29wZS5hY3RpdmVTbGlkZSkge1xyXG5cdFx0XHRcdFx0bmV4dFNsaWRlKHNjb3BlLml0ZW1zLmluZGV4T2YoaW5zdGFuY2UpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzY29wZS5zd2lwZUxlZnQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4ICsgMSk7XHJcblx0XHRcdHNjb3BlLnN3aXBlUmlnaHQgPSAoZSkgPT4gbmV4dFNsaWRlKHNjb3BlLmFjdGl2ZUluZGV4IC0gMSk7XHJcblxyXG5cdFx0XHRnbG9iYWwuc2xpZGVySW50ZXJ2YWwgPSAkaW50ZXJ2YWwoKCkgPT4gbmV4dFNsaWRlKCksIDEwMDAwKTtcclxuXHRcdH1cclxuXHR9XHJcbn1dIiwiaW1wb3J0IHsgaXNFbWFpbFZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFsnJHJvb3RTY29wZScsICckaHR0cCcsICdtZXRhU2VydmljZScsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkaHR0cCwgbWV0YVNlcnZpY2UpIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdHJlcGxhY2U6IHRydWUsXHJcblx0XHRzY29wZTogeyBtb2RhbDogJ0AnLCBzdWJtaXRUZXh0OiAnQCcgfSxcclxuXHRcdHRlbXBsYXRlOiBgPGZvcm0gbmctY2xhc3M9XCJtb2RhbFwiIG5nLXN1Ym1pdD1cInN1Ym1pdCgkZXZlbnQpXCI+XHJcblx0XHRcdFx0XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjbG9zZS1jb21tYW5kIGljb24tbmF2aWdhdGlvbi1jbG9zZVwiIG5nLWNsaWNrPVwiYXBwQ3RybC5jbG9zZVJlZ2lzdGVyRm9ybSgpXCI+PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJoZWFkaW5nXCI+XHJcblx0XHRcdFx0PHNwYW4gbmctYmluZC1odG1sPVwiJHJvb3QubG9jYWxpemF0aW9uLnJlZ2lzdGVyVGl0bGVIZWFkIHwgdW5zYWZlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdDxzcGFuIGNsYXNzPVwidWx0cmEgc3Ryb25nXCIgbmctYmluZD1cImNvbmZpZ3MudHJhbnNsYXRpb24uaG90bGluZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQ8c3BhbiBuZy1iaW5kLWh0bWw9XCIkcm9vdC5sb2NhbGl6YXRpb24ucmVnaXN0ZXJUaXRsZVRhaWwgfCB1bnNhZmVcIj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZmllbGRzZXQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1yb3dcIiBuZy1iaW5kPVwiYXBwQ3RybC51c2VyTmFtZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJOYW1lRXJyb3JcIj48L2Rpdj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5mdWxsTmFtZVBsYWNlaG9sZGVyfX1cIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlck5hbWVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGxhYmVsIGZvcj1cImpvYlwiPkNo4buNbiBkw7JuZyB4ZTogICA8L2xhYmVsPlxyXG5cdFx0XHQ8c2VsZWN0IGlkPVwiam9iXCIgbmFtZT1cInVzZXJfam9iXCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJUeXBlXCI+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIEZpZXN0YTwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBSYW5nZXI8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkZvcmUgRXZlcmVzdDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBUcmFuc2l0PC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Gb3JlIE5ldyBGb2N1czwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+Rm9yZSBFY29TcG9ydDwvb3B0aW9uPlx0XHRcclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFxyXG5cdFx0XHQgXHJcbiAgICAgXHJcbiAgICAgICAgICA8bGFiZWw+SMOsbmggdGjhu6ljIHRoYW5oIHRvw6FuOjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIHR5cGU9XCJyYWRpb1wiIGlkPVwidW5kZXJfMTNcIiB2YWx1ZT1cIlRy4bqjIEfDs3BcIiBuZy1tb2RlbD1cImFwcEN0cmwudXNlckNhdGVcIiBuYW1lPVwidXNlcl9hZ2VcIj48bGFiZWwgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAyMHB4XCIgZm9yPVwidW5kZXJfMTNcIiBjbGFzcz1cImxpZ2h0XCI+VHLhuqMgR8OzcDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJvdmVyXzEzXCIgdmFsdWU9XCJUcuG6oyBI4bq/dFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiIG5hbWU9XCJ1c2VyX2FnZVwiPjxsYWJlbCAgZm9yPVwib3Zlcl8xM1wiIGNsYXNzPVwibGlnaHRcIj5UcuG6oyBo4bq/dDwvbGFiZWw+XHJcbiAgICAgICBcclxuXHRcdFx0XHJcblx0XHRcdDwhLS08aW5wdXQgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiIGNoZWNrZWQgbmFtZT1cInBheVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiVHLhuqMgR8OzcFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBHw7NwPC9sYWJlbD4tLT5cclxuXHRcdFx0PCEtLTxpbnB1dCBuYW1lPVwicGF5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJUcuG6oyBI4bq/dFwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQ2F0ZVwiLz4tLT5cclxuXHRcdFx0PCEtLTxsYWJlbD5UcuG6oyBI4bq/dDwvbGFiZWw+LS0+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJQaG9uZUVycm9yXCI+PC9kaXY+XHJcblx0XHRcdDxpbnB1dCBzdHlsZT1cIm1hcmdpbi10b3A6IDEwcHg7XCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInt7JHJvb3QubG9jYWxpemF0aW9uLnBob25lUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyUGhvbmVcIi8+XHJcblx0XHRcdFxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiYXJlYVwiPkNo4buNbiBraHUgduG7sWM6ICAgPC9sYWJlbD5cclxuXHRcdFx0PHNlbGVjdCByZXF1aXJlZD1cInJlcXVpcmVkXCIgaWQ9XCJhcmVhXCIgbmFtZT1cInVzZXJfYXJlYVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyQXJlYVwiPlxyXG5cdFx0XHRcdDxvcHRpb24+VFAgSOG7kyBDaMOtIE1pbmg8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIETGsMahbmc8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPsSQ4buTbmcgTmFpPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbj5Cw6AgUuG7i2EgLSBWxaluZyBUw6B1PC9vcHRpb24+XHRcdFxyXG5cdFx0XHRcdDxvcHRpb24+QsOsbmggUGjGsOG7m2M8L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPkLDrG5oIFRodeG6rW48L29wdGlvbj5cclxuXHRcdFx0XHQ8b3B0aW9uPlTDonkgTmluaDwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24+S2jDoWM8L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwie3skcm9vdC5sb2NhbGl6YXRpb24uZW1haWxQbGFjZWhvbGRlcn19XCIgbmctbW9kZWw9XCJhcHBDdHJsLnVzZXJFbWFpbFwiLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLXJvd1wiIG5nLWJpbmQ9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCIgbmctaWY9XCJhcHBDdHJsLnVzZXJFbWFpbEVycm9yXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQ8IS0tPHRleHRhcmVhIHJvd3M9XCI0XCIgcGxhY2Vob2xkZXI9XCJ7eyRyb290LmxvY2FsaXphdGlvbi5ub3RlUGxhY2Vob2xkZXJ9fVwiIG5nLW1vZGVsPVwiYXBwQ3RybC51c2VyTm90ZVwiPjwvdGV4dGFyZWE+LS0+XHJcblx0XHRcdCA8ZGl2IGNsYXNzPVwiY29tbWFuZHNcIj5cclxuXHRcdFx0XHQ8IS0tPGRpdiBjbGFzcz1cInNvY2lhbC1idXR0b24gZmFjZWJvb2tcIiBuZy1jbGljaz1cImZhY2Vib29rTG9naW4oKVwiPjwvZGl2Pi0tPlxyXG5cdFx0XHRcdDwhLS08ZGl2IGNsYXNzPVwic29jaWFsLWJ1dHRvbiBnb29nbGVcIiBuZy1jbGljaz1cImdvb2dsZUxvZ2luKClcIj48L2Rpdj4tLT5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdFwiIG5nLWJpbmQ9XCJzdWJtaXRUZXh0IHx8ICRyb290LmxvY2FsaXphdGlvbi5zZW5kXCI+PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQgPC9maWVsZHNldD5cclxuXHRcdFx0XHJcblx0XHQ8L2Zvcm0+YCxcclxuXHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcclxuXHRcdFx0bGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0c2NvcGUuY29uZmlncyA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHRcdHNjb3BlLmFwcEN0cmwgPSAkcm9vdFNjb3BlLmFwcEN0cmw7XHJcblxyXG5cdFx0XHRzY29wZS5zdWJtaXQgPSAkcm9vdFNjb3BlLnN1Ym1pdFJlZ2lzdGVyO1xyXG5cclxuXHRcdC8vIFx0c2NvcGUuZ29vZ2xlTG9naW4gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBcdFx0XHRhbnRzX2dvb2dsZUF1dGhDbGljaygpO1xyXG5cdFx0Ly8gXHRcdH07XHJcbiAgICAgICAgLy9cclxuXHRcdC8vIFx0XHRzY29wZS5mYWNlYm9va0xvZ2luID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Ly8gXHRcdFx0YW50c19mYkF1dGhDbGljaygnbG9naW4nKTtcclxuXHRcdC8vIH07XHJcblx0XHR9XHJcblx0fVxyXG59XVxyXG5cclxudmFyIGZpZWxkcyA9IFsndXNlck5hbWUnLCAndXNlclBob25lJywndXNlckVtYWlsJywgJ3VzZXJUeXBlJywgJ3VzZXJDYXRlJywgJ3VzZXJBcmVhJywndXNlckRhdGUnXTsiLCJpbXBvcnQge1xyXG5cdGdlbmVyYXRlTnVtYmVyVVVJRCxcclxuXHRyZWdpc3RlckZpZWxkcyxcclxuXHRmaW5kUGFyZW50TWVudUJ5QWxpYXMsXHJcblx0bGFuZ3VhZ2VzXHJcbn0gZnJvbSAnLi4vdXRpbHMvaGVscGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBhcHBsaWNhdGlvbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckc3RhdGUnLCAnJHRpbWVvdXQnLCAnJGludGVydmFsJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbmdQcm9ncmVzc0ZhY3RvcnknLCAnbWV0YVNlcnZpY2UnXTtcclxuXHRkZXZlbG9wbWVudE1vZGUgPSBmYWxzZTtcclxuXHRyZWFkeSA9IHRydWU7XHJcblx0YWN0aXZlUGFnZSA9ICdzcGxhc2gnO1xyXG5cdGJ1cmdlckFjdGl2ZSA9IGZhbHNlO1xyXG5cdHN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0c3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xyXG5cdG1vZGFsUG9wdXAgPSBmYWxzZTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkdGltZW91dCwgJGludGVydmFsLCAkd2luZG93LCAkaHR0cCwgIG5nUHJvZ3Jlc3NGYWN0b3J5LCBtZXRhU2VydmljZSkge1xyXG5cdFx0JHJvb3RTY29wZS5jb25maWdzID0gbWV0YVNlcnZpY2UuY29uZmlnczsgLy9XaWxsIGJlIHVuZGVmaW5lZCBhdCBmaXJzdCA9PiBub3Qgc2FmZSBmb3Igbm9ybWFsIHVzYWdlLCBqdXN0IGZvciB0cmFuc2xhdGlvbiFcclxuXHRcdCRyb290U2NvcGUuYXBwQ3RybCA9IHRoaXM7XHJcblxyXG5cdFx0dGhpcy5uYW1lID0gXCJDbG91ZCFcIjtcclxuXHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHMgPSBbXTtcclxuXHRcdHRoaXMucHJvZ3Jlc3MgPSBuZ1Byb2dyZXNzRmFjdG9yeS5jcmVhdGVJbnN0YW5jZSgpO1xyXG5cdFx0dGhpcy5wcm9ncmVzcy5zZXRDb2xvcignI0ZBODMyMicpO1xyXG5cdFx0Z2xvYmFsLiRodHRwID0gJGh0dHA7XHJcblxyXG5cdFx0Z2xvYmFsLnRvZ2dsZU1vZGFsID0gKG5ld1ZhbGwpID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5tb2RhbFBvcHVwID0gbmV3VmFsbCA/IG5ld1ZhbGwgOiAhdGhpcy5tb2RhbFBvcHVwO1xyXG5cdFx0XHR9KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Z2xvYmFsLnRvZ2dsZVBvcHVwID0gKG5ld1ZhbCkgPT4ge1xyXG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gbmV3VmFsID8gbmV3VmFsIDogIXRoaXMuc3Vic2NyaXB0aW9uUG9wdXA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLnRvZ2dsZVN1Y2Nlc3MgPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3VjY2Vzc0dpZkltYWdlID0gYHVybChpbWFnZXMvb25vZmZvbmNlLmdpZj8ke2dlbmVyYXRlTnVtYmVyVVVJRCgxMCl9KWA7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlLCAzMDAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnByb2dyZXNzLnN0YXJ0KCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykgPT4ge1xyXG5cdFx0XHR0aGlzLmFjdGl2ZVBhZ2UgPSB0b1N0YXRlLm5hbWU7XHR0aGlzLnJlYWR5ID0gZmFsc2U7XHJcblx0XHRcdHRoaXMucHJvZ3Jlc3MuY29tcGxldGUoKTtcclxuXHJcblx0XHRcdC8vU2V0IG1ldGEncyBjb250ZW50IGZvciBBVURJRU5DRSBTRUdNRU5UIVxyXG5cdFx0XHRsZXQgY3VycmVudFNlZ21lbnQgPSAnaG9tZSc7XHJcblx0XHRcdGlmICgkc3RhdGUuaXMoJ3BhZ2UnKSkge1xyXG5cdFx0XHRcdGxldCBwYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzLCBwYXJlbnRNZW51ID0gZmluZFBhcmVudE1lbnVCeUFsaWFzKHBhZ2VBbGlhcywgbWV0YVNlcnZpY2UubGlua3MpO1xyXG5cdFx0XHRcdGN1cnJlbnRTZWdtZW50ID0gcGFyZW50TWVudS5uYW1lO1xyXG5cdFx0XHR9IGVsc2UgaWYgKCRzdGF0ZS5pcygnbmV3cycpKSB7XHJcblx0XHRcdFx0Y3VycmVudFNlZ21lbnQgPSAnbmV3cydcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0JCgkKFwibWV0YVtuYW1lPSdhZHg6c2VjdGlvbnMnXVwiKVswXSkuYXR0cignY29udGVudCcsIGN1cnJlbnRTZWdtZW50KTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcdCQoZG9jdW1lbnQpLnRyaWdnZXIoJ3JlYWR5Jyk7IC8vTWFudWFsbHkgdHJpZ2dlciByZWFkeSBldmVudCwgd2hpY2ggaG9wZSBhbHNvIHRyaWdnZXIgQW50cycgc2NyaXB0IVxyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGZldGNoRXNzZW50aWFsRGF0YSA9IChzb3VyY2UpID0+IHtcclxuXHRcdFx0Y29uc29sZS5pbmZvKFwiTG9hZGluZy4uXCIsIHNvdXJjZSk7XHJcblx0XHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnZm9vdGVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5mb290ZXJzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ25ld3MnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkLCBsaW1pdDogNCB9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0JHJvb3RTY29wZS5uZXdzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHJhbmdlcicsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuXHRcdFx0XHQkcm9vdFNjb3BlLmZvcmRSYW5nZXIgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZWNvc3BvcnQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcblx0XHRcdFx0JHJvb3RTY29wZS5mb3JkRWNvc3BvcnQgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdmb3JkZXZlcmVzdCcsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWR9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuXHRcdFx0XHQkcm9vdFNjb3BlLmZvcmRFdmVyZXN0ID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZGZvY3VzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblxyXG5cdFx0XHRcdCRyb290U2NvcGUuZm9yZEZvY3VzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9iYW5uZXIvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7ZG9tYWluLCB0eXBlOiAnZm9yZHRyYW5zaXQnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG5cdFx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHJcblx0XHRcdFx0JHJvb3RTY29wZS5mb3JkVHJhbnNpdCA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChtZXRhU2VydmljZS5yZWFkeSkgZmV0Y2hFc3NlbnRpYWxEYXRhKFwiYmVjYXVzZSB0aGUgZGF0YSBhbHJlYWR5IGZldGNoZWQhXCIpO1xyXG5cdFx0JHJvb3RTY29wZS4kb24oJ21ldGFTZXJ2aWNlUmVhZHknLCAoKSA9PiBmZXRjaEVzc2VudGlhbERhdGEoXCJiZWNhdXNlIG1ldGEgc2VydmljZSByZWFkeSBmaXJlZCFcIikpO1xyXG5cclxuXHRcdHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuXHRcdCQod2luZG93KS5zY3JvbGwoKGV2ZW50KSA9PiB7XHJcblx0XHRcdGxldCB0b3BTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblx0XHRcdCRyb290U2NvcGUuJGJyb2FkY2FzdCgnc2Nyb2xsQ2hhbmdlJywge3RvcDogdG9wU2Nyb2xsLCBzY3JvbGxpbmdEb3duOiB0b3BTY3JvbGwgPiB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbn0pO1xyXG5cdFx0XHR0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHRvcFNjcm9sbDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdCQod2luZG93KS5yZXNpemUoKCkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3NpemVDaGFuZ2UnLCB7XHJcblx0XHRcdFx0aGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCksXHJcblx0XHRcdFx0d2lkdGg6ICQod2luZG93KS53aWR0aCgpXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9SZWdpc3RlciBmb3JtIVxyXG5cdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcblx0XHRcdHRoaXNbZmllbGRdID0gJyc7IHRoaXNbZmllbGQrJ0Vycm9yJ10gPSAnJztcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuY2xvc2VSZWdpc3RlckZvcm0gPSAoKSA9PiB7XHJcblx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uUG9wdXAgPSBmYWxzZTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5yZXNldFJlZ2lzdGVyRm9ybSA9ICgpID0+IHtcclxuXHRcdFx0cmVnaXN0ZXJGaWVsZHMuZm9yRWFjaChmaWVsZCA9PiB0aGlzW2ZpZWxkXSA9ICcnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5yZXNldFJlZ2lzdGVyRXJyb3IgPSAoKSA9PiB7XHJcblx0XHRcdHJlZ2lzdGVyRmllbGRzLmZvckVhY2goZmllbGQgPT4gdGhpc1tmaWVsZCsnRXJyb3InXSA9ICcnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzSGFuZGxlciA9ICgpID0+IHtcclxuXHRcdFx0dGhpcy5zdWNjZXNzR2lmSW1hZ2UgPSBgdXJsKGltYWdlcy9vbm9mZm9uY2UuZ2lmPyR7Z2VuZXJhdGVOdW1iZXJVVUlEKDEwKX0pYDtcclxuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb25TdWNjZXNzID0gdHJ1ZTtcclxuXHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2VzcyA9IGZhbHNlO1xyXG5cdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cdFx0XHR9LCAzMDAwKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5zdWJtaXRSZWdpc3RlciA9ICRyb290U2NvcGUuc3VibWl0UmVnaXN0ZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0bGV0IHsgYXBpSG9zdCwgZG9tYWluLCBwcm9kdWN0aW9uIH0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInByb2R1Y3Rpb24gbW9kZTpcIiwgcHJvZHVjdGlvbik7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHRoaXMucmVzZXRSZWdpc3RlckVycm9yKCk7XHJcblxyXG5cdFx0XHRpZiAodGhpc1sndXNlck5hbWUnXS5sZW5ndGggPCAxKSB0aGlzWyd1c2VyTmFtZUVycm9yJ10gPSAnTmjhuq1wIHTDqm4nO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlclBob25lJ10ubGVuZ3RoIDwgOCkgdGhpc1sndXNlclBob25lRXJyb3InXSA9ICdT4buRIMSRaeG7h24gdGhv4bqhaSBjaMawYSDEkcO6bmcnO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlclR5cGUnXS5sZW5ndGggPCA4KSB0aGlzWyd1c2VyVHlwZUVycm9yJ10gPSAnTmjhuq1wIFR5ZWVlZWUnO1xyXG5cdFx0XHRpZiAodGhpc1sndXNlck5hbWVFcnJvciddIHx8IHRoaXNbJ3VzZXJQaG9uZUVycm9yJ10gfHwgdGhpc1sndXNlclR5cGVFcnJvciddKSByZXR1cm47XHJcblxyXG5cdFx0XHR2YXIgbG9jYWxVc2VySW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJfdXNlckluZm9cIikpLFxyXG5cdFx0XHRcdGZvcm1EYXRhID0ge1xyXG5cdFx0XHRcdFx0Li4ubG9jYWxVc2VySW5mbyxcclxuXHRcdFx0XHRcdGRvbWFpbixcclxuXHRcdFx0XHRcdGZ1bGxOYW1lOiB0aGlzWyd1c2VyTmFtZSddLFxyXG5cdFx0XHRcdFx0bmFtZTogdGhpc1sndXNlck5hbWUnXSxcclxuXHRcdFx0XHRcdHR5cGU6IHRoaXNbJ3VzZXJUeXBlJ10sXHJcblx0XHRcdFx0XHRjYXRlOiB0aGlzWyd1c2VyQ2F0ZSddLFxyXG5cdFx0XHRcdFx0cGhvbmU6IHRoaXNbJ3VzZXJQaG9uZSddLFxyXG5cdFx0XHRcdFx0YXJlYTogdGhpc1sndXNlckFyZWEnXSxcclxuXHRcdFx0XHRcdGRhdGU6IHRoaXNbJ3VzZXJEYXRlJ10sXHJcblx0XHRcdFx0XHRlbWFpbDogdGhpc1sndXNlckVtYWlsJ10sXHJcblx0XHRcdFx0XHRub3RlOiB0aGlzWyd1c2VyTm90ZSddXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdC8vRmlyZSBBbnRzIHRyYWNraW5nR29hbCBob29rIVxyXG5cdFx0XHRpZiAocHJvZHVjdGlvbikgYWR4X2FuYWx5dGljLnRyYWNraW5nR29hbChtZXRhU2VydmljZS5jb25maWdzLmFudHNSZWdpc3RlckdvYWxJZCwgMSwgJ2V2ZW50Jyk7XHJcblx0XHRcdC8vU2VuZCBmb3JtIGluZm9ybWF0aW9uIHRvIEFudHMhXHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhmb3JtRGF0YS5ub3RlKTtcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRhbnRzX3VzZXJJbmZvTGlzdGVuZXIoZm9ybURhdGEsIGZhbHNlLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhhbnRzX3VzZXJJbmZvTGlzdGVuZXIpXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0Ly9GYWNlYm9vayB0cmFja2luZyBMZWFkL0NvbXBsZXRlUmVnaXN0cmF0aW9uIGV2ZW50XHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSBmYnEoJ3RyYWNrJywgJ0xlYWQnKTtcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIGZicSgndHJhY2snLCAnQ29tcGxldGVSZWdpc3RyYXRpb24nKTtcclxuXHJcblx0XHRcdC8vVHJhY2tpbmcgR29vZ2xlIEFuYWx5dGljIGdvYWwhXHJcblx0XHRcdGlmIChwcm9kdWN0aW9uKSB7XHJcblx0XHRcdFx0Z2EoJ3NlbmQnLCB7XHJcblx0XHRcdFx0XHRoaXRUeXBlOiAnZXZlbnQnLFxyXG5cdFx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogJ1N1YnNjcmlwdGlvbicsXHJcblx0XHRcdFx0XHRldmVudEFjdGlvbjogJ1N1Ym1pdCdcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHRhbnRzX2FuYWx5dGljLnB1c2goe1xyXG5cdFx0XHRcdFx0Y29udmVyc2lvbklkIDogbWV0YVNlcnZpY2UuY29uZmlncy5hbnRzQ29udmVyc2lvbklkLFxyXG5cdFx0XHRcdFx0Y3VzdG9tUGFyYW1zIDogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0J2lzX2Vjb21tJzogMCxcclxuXHRcdFx0XHRcdFx0XHQnZWNvbW1fcGFnZXR5cGUnOiAncHVyY2hhc2UnLFxyXG5cdFx0XHRcdFx0XHRcdCdlY29tbV9xdWFudGl0eSc6IDEsXHJcblx0XHRcdFx0XHRcdFx0J2Vjb21tX3RvdGFsdmFsdWUnOiAxXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdF1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGhpcy5yZXNldFJlZ2lzdGVyRm9ybSgpO1xyXG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvblBvcHVwID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubW9kYWxQb3B1cCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0Ly9TZW5kIGZvcm0gdG8gVHdpbidzIHNlcnZlciFcclxuXHRcdFx0aWYgKHByb2R1Y3Rpb24pIHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vY3VzdG9tZXIvaW5zZXJ0L2pzb25gLCB7XHJcblx0XHRcdFx0XHRwYXJhbXM6IGZvcm1EYXRhXHJcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3Vic2NyaXB0aW9uU3VjY2Vzc0hhbmRsZXIoKTtcclxuXHRcdFx0XHRcdCRodHRwLmdldChgJHthcGlIb3N0fS9tYWlsL3NlbnQvanNvbmAsIHtwYXJhbXM6IGZvcm1EYXRhfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VtYWlsLi4uJywgZGF0YSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLnN1YnNjcmlwdGlvblN1Y2Nlc3NIYW5kbGVyKCk7IC8vQXV0byBzdWNjZXNzIG9uIHRlc3QgZW52aXJvbm1lbnQhXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0Z2xvYmFsLmdldF9pbmZvID0gKF91c2VySW5mbykgPT4ge1xyXG5cdFx0XHQkc2NvcGUuJGFwcGx5KCgpID0+IHtcclxuXHRcdFx0XHQvLyB1c2VyIGluZm8gZ2V0IGhlcmVcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImFudCdzIGdldF9pbmZvIGZ1bmN0aW9uOlwiLCBfdXNlckluZm8pO1xyXG5cclxuXHRcdFx0XHQvLyBmaWxsIHVzZXJJbmZvIHRvIEZPUk0gxJHEg25nIGvDvVxyXG5cdFx0XHRcdHRoaXMudXNlck5hbWUgPSBfdXNlckluZm8ubmFtZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJQaG9uZSA9IF91c2VySW5mby5waG9uZSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJFbWFpbCA9IF91c2VySW5mby5lbWFpbCB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJDYXRlID0gX3VzZXJJbmZvLmNhdGUgfHwgJyc7XHJcblx0XHRcdFx0dGhpcy51c2VyVHlwZSA9IF91c2VySW5mby50eXBlIHx8ICcnO1xyXG5cdFx0XHRcdHRoaXMudXNlckFyZWEgPSBfdXNlckluZm8uYXJlYSB8fCAnJztcclxuXHRcdFx0XHR0aGlzLnVzZXJOb3RlID0gX3VzZXJJbmZvLm5vdGUgfHwgJyc7XHJcblxyXG5cdFx0XHRcdC8vU3RvcmUgU29jaWFsIHByb2ZpbGVcclxuXHRcdFx0XHRpZiAoX3VzZXJJbmZvKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIl91c2VySW5mb1wiLCBKU09OLnN0cmluZ2lmeShfdXNlckluZm8pKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgY2hpbGRwcm9kdWN0Q29udHJvbGxlciB7XHJcbiAgICBzdGF0aWMgJGluamVjdCA9IFsnJHJvb3RTY29wZScsICckd2luZG93JywgJyRodHRwJywgJyRzdGF0ZScsICdtZXRhU2VydmljZSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgbGV0IHthcGlIb3N0LCBkb21haW59ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuICAgICAgICB0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2RhbFR3b0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9kYWxUaHJlZUFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vVHJhY2tpbmcgY29kZS4uXHJcbiAgICAgICAgZ2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcclxuICAgICAgICBmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcbiAgICAgICAgJHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucGFnZUFsaWFzID0gJHN0YXRlLnBhcmFtcy5hbGlhcztcclxuICAgICAgICAkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgIHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2luZ2xlTW9kZSkge1xyXG4gICAgICAgICAgICAkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgYWxpYXM6IHRoaXMucGFnZUFsaWFzfVxyXG4gICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOZXdzID0gZGF0YS5yZXN1bHRzWzBdLlBvc3Q7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczoge2RvbWFpbiwgdHlwZTogJ2ZvcmRmaWVzdGEnLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkfVxyXG4gICAgICAgICAgICB9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuYWxsY2hpbGRQcm9kdWN0ID0gZGF0YS5yZXN1bHRzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgbWFpbkNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0ZmVhdHVyZXMgPSBbXTtcclxuXHRzbGlkZXJzID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yICgkcm9vdFNjb3BlLCAkc2NvcGUsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblx0XHR0aGlzLm1vZGFsT25lQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVHdvQWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vZGFsVGhyZWVBY3RpdmUgPSBmYWxzZTtcclxuXHJcblxyXG5cdFx0dGhpcy5zdWJtaXRNb2RhbE9uZSA9ICgpID0+IHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2hlaGVoZWgnKTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gdGhpcy5zaG93TW9kYWxPbmUgID0gKCkgPT4ge1xyXG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcIj8/XCIpO1xyXG5cdFx0Ly8gXHR0aGlzLm1vZGFsT25lQWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIH07XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdHRoaXMuaGlkZGVuID0gZmFsc2U7XHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbWV0YVNlcnZpY2UubGlua3NbMF07ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3BhZ2UvZ2V0L2pzb25gLCB7XHJcblx0XHRcdHBhcmFtczogeyBkb21haW4sIGFsaWFzOiBcInRyYW5nLWNodVwiIH1cclxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtkYXRhLnJlc3VsdHNbMF0uUGFnZV07XHJcblx0XHR9KTtcclxuXHJcblx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vYmFubmVyL2dldC9qc29uYCwge1xyXG5cdFx0XHRwYXJhbXM6IHsgZG9tYWluLCB0eXBlOiAnYmFubmVyJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHR9KS5zdWNjZXNzKGRhdGEgPT4ge1xyXG5cdFx0XHR0aGlzLmZlYXR1cmVzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0cGFyYW1zOiB7IGRvbWFpbiwgdHlwZTogJ0hvbWVTbGlkZXInLCBsYW5nOiAkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlLmlkIH1cclxuXHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdHRoaXMuc2xpZGVycyA9IGRhdGEucmVzdWx0cy5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW0uUG9zdDtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnNsaWRlckhlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKSAtIDcwO1xyXG5cdFx0JHJvb3RTY29wZS4kb24oJ3NpemVDaGFuZ2UnLCAoZXZlbnQsIHNpemUpID0+IHtcclxuXHRcdFx0JHNjb3BlLiRhcHBseSgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zbGlkZXJIZWlnaHQgPSBzaXplLmhlaWdodCA+IDU3MCA/IHNpemUuaGVpZ2h0IC0gNzAgOiA1MDA7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSlcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgbmV3c0NvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckd2luZG93JywgJyRodHRwJywgICckc3RhdGUnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHdpbmRvdywgJGh0dHAsICRzdGF0ZSwgbWV0YVNlcnZpY2UpIHtcclxuXHRcdGxldCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gbWV0YVNlcnZpY2UuY29uZmlncztcclxuXHRcdFxyXG5cclxuXHRcdC8vVHJhY2tpbmcgY29kZS4uXHJcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xyXG5cdFx0ZmJxKCd0cmFjaycsIFwiUGFnZVZpZXdcIik7XHJcblxyXG5cdFx0dGhpcy5sb2FkRGF0YSA9ICgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5hY3RpdmVHcm91cCA9IG51bGw7XHJcblxyXG5cdFx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7ICR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRcdHRoaXMuc2luZ2xlTW9kZSA9IHRoaXMucGFnZUFsaWFzICE9PSAnJztcclxuXHJcblx0XHRcdGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcclxuXHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcG9zdC9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogeyBkb21haW4sIGFsaWFzOiB0aGlzLnBhZ2VBbGlhcyAsIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0XHRpZiAoZGF0YS5yZXN1bHRzWzBdKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYWN0aXZlTmV3cyA9IGRhdGEucmVzdWx0c1swXS5Qb3N0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRcdHBhcmFtczogeyBkb21haW4sIHR5cGU6ICduZXdzJywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZCB9XHJcblx0XHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdFx0XHRcdHRoaXMuYWxsTmV3cyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG5cdFx0JHNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgcGFnZUNvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckZWxlbWVudCcsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnbWV0YVNlcnZpY2UnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJGVsZW1lbnQsICRpbnRlcnZhbCwgJHRpbWVvdXQsICRzdGF0ZSwgJHdpbmRvdywgJGh0dHAsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQgeyBhcGlIb3N0LCBkb21haW4gfSA9IG1ldGFTZXJ2aWNlLmNvbmZpZ3M7XHJcblxyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHRcdGZicSgndHJhY2snLCAnVmlld0NvbnRlbnQnKTtcclxuXHRcdHRoaXMubG9hZERhdGEgPSAoKSA9PiB7XHJcblx0XHRcdGxldCBwYWdlQWxpYXMgPSAkc3RhdGUucGFyYW1zLmFsaWFzLCBwYXJlbnRHcm91cCA9IHRoaXMuZmluZFBhcmVudEdyb3VwKHBhZ2VBbGlhcywgbWV0YVNlcnZpY2UubGlua3MpLFxyXG5cdFx0XHRcdHByZXZpb3VzR3JvdXAgPSAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwOyAkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gcGFyZW50R3JvdXA7XHJcblxyXG5cdFx0XHRpZihwYWdlQWxpYXMgPT0gJ3RyYW5nLWNodScpIHsgJHN0YXRlLmdvKCdob21lJyk7IHJldHVybjsgfVxyXG5cclxuXHRcdFx0Ly9LaWNrIGJhY2sgdG8gdGhlIEhvbWUgcGFnZSBpZiBpdCdzIG5vdCBhIGxpbmsgaW4gbWVudVxyXG5cdFx0XHRpZiAoIXBhcmVudEdyb3VwIHx8ICFwYXJlbnRHcm91cC5jaGlsZHJlbikge1xyXG5cdFx0XHRcdCRzdGF0ZS5nbygnaG9tZScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHBhcmVudEdyb3VwID09PSBwcmV2aW91c0dyb3VwKSB7IC8vSWYgdGhlIHBhcmVudCBncm91cCBpcyBhbHJlYWR5IGFjdGl2ZSA9PiBzY3JvbGwgdG8gdGhlIGNoaWxkIHNlY3Rpb24hXHJcblx0XHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXHJcblx0XHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuXHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG5cdFx0XHRcdH0sIDgwMCk7XHJcblx0XHRcdH0gZWxzZSB7IC8vRmluYWxseSwgbG9hZCB0aGUgcGFnZSA9PiBzZXQgcGFnZSdzIGNoaWxkcmVuIGNvbnRlbnQhXHJcblx0XHRcdFx0bGV0IGxvYWRlZENvdW50ID0gMDsgJHJvb3RTY29wZS5hY3RpdmVDb250ZW50cyA9IFtdO1xyXG5cdFx0XHRcdCR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7IC8vUmVzZXQgdGhlIHNjcm9sbCBpZiBsb2FkaW5nIGZyb20gdGhlIGJlZ2lubmluZyFcclxuXHRcdFx0XHRwYXJlbnRHcm91cC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0ge307XHJcblx0XHRcdFx0XHQkaHR0cC5nZXQoYCR7YXBpSG9zdH0vcGFnZS9nZXQvanNvbmAsIHsgcGFyYW1zOiB7IGRvbWFpbiwgYWxpYXM6IGNoaWxkLmFsaWFzIH0gfSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGNoaWxkUmVzdWx0ID0gZGF0YS5yZXN1bHRzWzBdO1xyXG5cdFx0XHRcdFx0XHRpZiAoY2hpbGRSZXN1bHQgJiYgY2hpbGRSZXN1bHQuUGFnZSkge1xyXG5cdFx0XHRcdFx0XHRcdCRyb290U2NvcGUuYWN0aXZlQ29udGVudHNbaW5kZXhdID0gY2hpbGRSZXN1bHQuUGFnZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSkuZmluYWxseSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxvYWRlZENvdW50Kys7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAobG9hZGVkQ291bnQgPj0gcGFyZW50R3JvdXAuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly9TY3JvbGwgYWZ0ZXIgMSBzZWNvbmQgKGFmdGVyIGFsbCBjb250ZW50IGFyZSByZWFkeSBmcm9tIHNlcnZlciEpXHJcblx0XHRcdFx0XHRcdFx0Ly8gdG8gaGF2ZSBiZXR0ZXIgcGVyZm9ybWFuY2UgKGFmdGVyIHN0dWZmcyBoYWQgYmVlbiByZW5kZXJlZCkuXHJcblx0XHRcdFx0XHRcdFx0JHRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHNjcm9sbE9mZnNldCA9IGFuZ3VsYXIuZWxlbWVudChgI3NlY3Rpb24ke3BhZ2VBbGlhc31gKS5vZmZzZXQoKS50b3AgLSA1MDtcclxuXHRcdFx0XHRcdFx0XHRcdFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0XHQkcm9vdFNjb3BlLiR3YXRjaCgnYWN0aXZlTGFuZ3VhZ2UnLCAoKSA9PiB7XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcblxyXG5cdGZpbmRQYXJlbnRHcm91cCAoYWxpYXMsIGxpbmtzKSB7XHJcblx0XHRmb3IgKGxldCBsaW5rIG9mIGxpbmtzKSB7XHJcblx0XHRcdGlmIChsaW5rLmFsaWFzICYmIGxpbmsuYWxpYXMgPT09IGFsaWFzKSByZXR1cm4gbGluaztcclxuXHJcblx0XHRcdGlmIChsaW5rLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgY2hpbGQgb2YgbGluay5jaGlsZHJlbikge1xyXG5cdFx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzICYmIGNoaWxkLmFsaWFzID09IGFsaWFzKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBsaW5rO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufSIsImV4cG9ydCBjbGFzcyBwcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyIHtcclxuICAgIHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyRzY29wZScsICckdGltZW91dCddO1xyXG5cclxuICAgIHN1Yk1lbnVzID0gc3ViTWVudXM7XHJcbiAgICBjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJHNjb3BlLCAkdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IFwiQ2xvdWRcIjtcclxuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdWJNZW51cyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG8gKGVsZW1lbnRJZCkge1xyXG4gICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2Nyb2xsT2Zmc2V0ID0gYW5ndWxhci5lbGVtZW50KGAjJHtlbGVtZW50SWR9YCkub2Zmc2V0KCkudG9wIC0gNTA7XHJcbiAgICAgICAgICAgIFR3ZWVuTGl0ZS50byh3aW5kb3csIDEsIHtzY3JvbGxUbzp7eTogc2Nyb2xsT2Zmc2V0fSwgZWFzZTpQb3dlcjIuZWFzZU91dH0pO1xyXG4gICAgICAgIH0sIDgwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1Yk1lbnVzID0gW1xyXG4gICAgeyB0aXRsZTogJ0dp4bubaSB0aGnhu4d1IGNodW5nJywgY29udGVudElkOiBcImdpb2l0aGlldWNodW5nXCIgfSxcclxuICAgIHsgdGl0bGU6ICdDw7RuZyBuZ2jhu4cnLCBjb250ZW50SWQ6IFwiY29uZ25naGVcIiB9LFxyXG4gICAgeyB0aXRsZTogJ03DoHUgc+G6r2MnLCBjb250ZW50SWQ6IFwibWF1c2FjXCIgIH0sXHJcbiAgICB7IHRpdGxlOiAnVGjDtG5nIHPhu5Ega+G7uSB0aHXhuq10JywgY29udGVudElkOiBcInRob25nc29reXRodWF0XCIgIH0sXHJcbl0iLCJleHBvcnQgY2xhc3MgcHJvZHVjdENvbnRyb2xsZXIge1xyXG5cdHN0YXRpYyAkaW5qZWN0ID0gWyckcm9vdFNjb3BlJywgJyR3aW5kb3cnLCAnJGh0dHAnLCAnJHN0YXRlJywgJ21ldGFTZXJ2aWNlJ107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCRyb290U2NvcGUsICR3aW5kb3csICRodHRwLCAkc3RhdGUsIG1ldGFTZXJ2aWNlKSB7XHJcblx0XHRsZXQge2FwaUhvc3QsIGRvbWFpbn0gPSBtZXRhU2VydmljZS5jb25maWdzO1xyXG5cclxuXHRcdHRoaXMubW9kYWxPbmVBY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUd29BY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubW9kYWxUaHJlZUFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Ly9UcmFja2luZyBjb2RlLi5cclxuXHRcdGdhKCdzZW5kJywgJ3BhZ2V2aWV3Jyk7XHJcblx0XHRmYnEoJ3RyYWNrJywgXCJQYWdlVmlld1wiKTtcclxuXHJcblx0XHQkcm9vdFNjb3BlLmFjdGl2ZUdyb3VwID0gbnVsbDtcclxuXHJcblx0XHR0aGlzLnBhZ2VBbGlhcyA9ICRzdGF0ZS5wYXJhbXMuYWxpYXM7XHJcblx0XHQkd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0dGhpcy5zaW5nbGVNb2RlID0gdGhpcy5wYWdlQWxpYXMgIT09ICcnO1xyXG5cclxuXHRcdGlmICh0aGlzLnNpbmdsZU1vZGUpIHtcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L3Bvc3QvZ2V0L2pzb25gLCB7XHJcblx0XHRcdFx0cGFyYW1zOiB7ZG9tYWluLCBhbGlhczogdGhpcy5wYWdlQWxpYXN9XHJcblx0XHRcdH0pLnN1Y2Nlc3MoZGF0YSA9PiB7XHJcblx0XHRcdFx0ZmJxKCd0cmFjaycsICdWaWV3Q29udGVudCcpO1xyXG5cdFx0XHRcdHRoaXMuYWN0aXZlTmV3cyA9IGRhdGEucmVzdWx0c1swXS5Qb3N0O1xyXG5cdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L2Jhbm5lci9nZXQvanNvbmAsIHtcclxuXHRcdFx0XHRwYXJhbXM6IHtkb21haW4sIHR5cGU6ICdwcm9kdWN0JywgbGFuZzogJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5pZH1cclxuXHRcdFx0fSkuc3VjY2VzcyhkYXRhID0+IHtcclxuXHRcdFx0XHRmYnEoJ3RyYWNrJywgJ1ZpZXdDb250ZW50Jyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhpcy5hbGxQcm9kdWN0ID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3Mgc3BsYXNoQ29udHJvbGxlciB7XHJcblx0c3RhdGljICRpbmplY3QgPSBbJyRyb290U2NvcGUnLCAnJHNjb3BlJywgJyRzdGF0ZScsICckaW50ZXJ2YWwnLCAnJHRpbWVvdXQnXTtcclxuXHJcblx0Y29uc3RydWN0b3IgKCRyb290U2NvcGUsICRzY29wZSwgJHN0YXRlLCAkaW50ZXJ2YWwsICR0aW1lb3V0KSB7XHJcblx0XHR0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcclxuXHRcdCR0aW1lb3V0KCgpID0+IHRoaXMuc2tpcEludHJvKCksIDApO1xyXG5cdH1cclxuXHJcblx0c2tpcEludHJvICgpIHtcclxuXHRcdHRoaXMuJHN0YXRlLnRyYW5zaXRpb25UbygnaG9tZScpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IGZpeEFuYWx5dGljTWlzc2luZyB9IGZyb20gXCIuL3V0aWxzL2hlbHBlclwiO1xyXG5pbXBvcnQge2FwcGxpY2F0aW9uQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9hcHBsaWNhdGlvbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHJvdXRlckNvbmZpZyBmcm9tIFwiLi9yb3V0ZXJDb25maWdcIjtcclxuXHJcbmltcG9ydCB7bWFpbkNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvbWFpbkNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwYWdlQ29udHJvbGxlcn0gZnJvbSBcIi4vY29udHJvbGxlci9wYWdlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQge25ld3NDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL25ld3NDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7cHJvZHVjdENvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXIvcHJvZHVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtjaGlsZHByb2R1Y3RDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL2NoaWxkcHJvZHVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtzcGxhc2hDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3NwbGFzaENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtwcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyfSBmcm9tIFwiLi9jb250cm9sbGVyL3BhcnRpYWwvcHJvZHVjdENhdGVNZW51Q29udHJvbGxlclwiO1xyXG5cclxuXHJcbmltcG9ydCBuYXZpZ2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBuYXZpZ2F0aW9uTGluayBmcm9tIFwiLi9jb21wb25lbnQvbmF2aWdhdGlvbkxpbmtcIjtcclxuaW1wb3J0IGZvb3RlciBmcm9tIFwiLi9jb21wb25lbnQvZm9vdGVyXCI7XHJcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL2NvbXBvbmVudC9zaWRlYmFyXCI7XHJcbmltcG9ydCBzdWJzY3JpcHRpb25Gb3JtIGZyb20gXCIuL2NvbXBvbmVudC9zdWJzY3JpcHRpb25Gb3JtXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9jb21wb25lbnQvbW9kYWxcIjtcclxuaW1wb3J0IG1vZGFsT25lIGZyb20gXCIuL2NvbXBvbmVudC9tb2RhbE9uZVwiO1xyXG5pbXBvcnQgY2FyZCBmcm9tIFwiLi9jb21wb25lbnQvY2FyZFwiO1xyXG5pbXBvcnQgcG9wdXAgZnJvbSBcIi4vY29tcG9uZW50L3BvcHVwXCI7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50L3NsaWRlclwiO1xyXG5pbXBvcnQgbmV3c0FyZWEgZnJvbSBcIi4vY29tcG9uZW50L25ld3NBcmVhXCI7XHJcbmltcG9ydCBtZXRhU2VydmljZSBmcm9tIFwiLi9tZXRhU2VydmljZVwiO1xyXG5pbXBvcnQgcmVnaXN0ZXJGaWx0ZXIgZnJvbSBcIi4vdXRpbHMvZmlsdGVyXCI7XHJcblxyXG5nbG9iYWwuZml4QW5hbHl0aWNNaXNzaW5nID0gZml4QW5hbHl0aWNNaXNzaW5nO1xyXG5sZXQgQXBwID0gYW5ndWxhci5tb2R1bGUoJ2FwcGxpY2F0aW9uJywgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgJ25nUHJvZ3Jlc3MnLCAnbmdUb3VjaCcsICduZ1BhcmFsbGF4JywgJ2FuZ3VsYXItc3BpbmtpdCddKVxyXG5cdC5jb25maWcocm91dGVyQ29uZmlnKVxyXG5cdC5jb250cm9sbGVyKCdhcHBDdHJsJywgYXBwbGljYXRpb25Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdtYWluQ3RybCcsIG1haW5Db250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwYWdlQ3RybCcsIHBhZ2VDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCduZXdzQ3RybCcsIG5ld3NDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdwcm9kdWN0Q3RybCcsIHByb2R1Y3RDb250cm9sbGVyKVxyXG5cdC5jb250cm9sbGVyKCdjaGlsZHByb2R1Y3RDdHJsJywgY2hpbGRwcm9kdWN0Q29udHJvbGxlcilcclxuXHQuY29udHJvbGxlcignc3BsYXNoQ3RybCcsIHNwbGFzaENvbnRyb2xsZXIpXHJcblx0LmNvbnRyb2xsZXIoJ3Byb2R1Y3RDYXRlTWVudUN0cmwnLCBwcm9kdWN0Q2F0ZU1lbnVDb250cm9sbGVyKVxyXG5cdC5zZXJ2aWNlKCdtZXRhU2VydmljZScsIG1ldGFTZXJ2aWNlKVxyXG5cdC5kaXJlY3RpdmUoJ3BvcHVwJywgcG9wdXApXHJcblx0LmRpcmVjdGl2ZSgnbGlnaHROYXZpZ2F0aW9uJywgbmF2aWdhdGlvbilcclxuXHQuZGlyZWN0aXZlKCdsaWdodFNpZGViYXInLCBzaWRlYmFyKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0Rm9vdGVyJywgZm9vdGVyKVxyXG5cdC5kaXJlY3RpdmUoJ2xpZ2h0U2xpZGVyJywgc2xpZGVyKVxyXG5cdC5kaXJlY3RpdmUoJ25ld3NBcmVhJywgbmV3c0FyZWEpXHJcblx0LmRpcmVjdGl2ZSgnbW9kYWwnLCBtb2RhbClcclxuXHQuZGlyZWN0aXZlKCdtb2RhbE9uZScsIG1vZGFsT25lKVxyXG5cdC5kaXJlY3RpdmUoJ2NhcmQnLCBjYXJkKVxyXG5cdC5kaXJlY3RpdmUoJ3N1YnNjcmlwdGlvbkZvcm0nLCBzdWJzY3JpcHRpb25Gb3JtKVxyXG5cdC5kaXJlY3RpdmUoJ25hdmlnYXRpb25MaW5rJywgbmF2aWdhdGlvbkxpbmspO1xyXG5cclxuXHJcbnJlZ2lzdGVyRmlsdGVyKEFwcCk7XHJcblxyXG5BcHAucnVuKCgpID0+IHtcclxuXHRGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpO1xyXG59KTtcclxuXHJcbkFwcC5maWx0ZXIoJ3Vuc2FmZScsIFtcclxuXHQnJHNjZScsIGZ1bmN0aW9uICgkc2NlKSB7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHZhbCkge1xyXG5cdFx0XHRyZXR1cm4gJHNjZS50cnVzdEFzSHRtbCh2YWwpO1xyXG5cdFx0fTtcclxuXHR9XHJcbl0pO1xyXG5cclxuYW5ndWxhci5ib290c3RyYXAoZG9jdW1lbnQsIFsnYXBwbGljYXRpb24nXSk7IiwiaW1wb3J0IHsgbGFuZ3VhZ2VzLCBsb2NhbGl6YXRpb24gfSBmcm9tICcuL3V0aWxzL2hlbHBlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJGh0dHAsICR0aW1lb3V0ICkge1xyXG5cdHRoaXMucmVhZHkgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5sb2FkTWVudSA9IChjb25maWdzLCBjb25maWdSZXNvbHZlLCBuYXZpZ2F0aW9uUmVzb2x2ZSkgPT4ge1xyXG5cdFx0bGV0IHthcGlIb3N0LCBkb21haW59ID0gY29uZmlncyB8fCB0aGlzLmNvbmZpZ3M7XHJcblxyXG5cdFx0JGh0dHAuZ2V0KGAke2FwaUhvc3R9L21lbnUvZ2V0L2pzb25gLCB7XHJcblx0XHRcdHBhcmFtczogeyBkb21haW4sIGxhbmc6ICRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UuaWQgfVxyXG5cdFx0fSkuc3VjY2VzcygoZGF0YSkgPT4ge1xyXG5cdFx0XHR0aGlzLmxpbmtzID0gZGF0YS5yZXN1bHRzO1xyXG5cclxuXHRcdFx0aWYgKG5hdmlnYXRpb25SZXNvbHZlKSBuYXZpZ2F0aW9uUmVzb2x2ZSh0aGlzLmxpbmtzKTtcclxuXHRcdFx0aWYgKGNvbmZpZ1Jlc29sdmUpIHtcclxuXHRcdFx0XHRjb25maWdSZXNvbHZlKHRoaXMuY29uZmlncyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdCR0aW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ21ldGFTZXJ2aWNlUmVhZHknKTtcclxuXHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuXHRcdFx0fSwgMCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgoY29uZmlnUmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHQkcm9vdFNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuXHRcdCRyb290U2NvcGUuYWN0aXZlTGFuZ3VhZ2UgPSBsYW5ndWFnZXNbMF07XHJcblxyXG5cdFx0JHJvb3RTY29wZS5sb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb25bJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5sYW5nXTtcclxuXHRcdCRyb290U2NvcGUuJHdhdGNoKCdhY3RpdmVMYW5ndWFnZScsICgpID0+IHtcclxuXHRcdFx0JHJvb3RTY29wZS5sb2NhbGl6YXRpb24gPSBsb2NhbGl6YXRpb25bJHJvb3RTY29wZS5hY3RpdmVMYW5ndWFnZS5sYW5nXTtcclxuXHRcdFx0aWYgKCRyb290U2NvcGUuY29uZmlncykgdGhpcy5sb2FkTWVudSgkcm9vdFNjb3BlLmNvbmZpZ3MpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0JHJvb3RTY29wZS5jaGFuZ2VMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG5cdFx0XHQkcm9vdFNjb3BlLmFjdGl2ZUxhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcblx0XHR9O1xyXG5cclxuXHRcdCRodHRwLmdldCgnL2NvbmZpZ3MnKS5zdWNjZXNzKChkYXRhKSA9PiB7XHJcblx0XHRcdGRhdGEuZG9tYWluID0gZGF0YS5kb21haW4gfHwgbG9jYXRpb24uaG9zdDtcclxuXHRcdFx0bGV0IGNvbmZpZ3MgPSBkYXRhLCB7IGFwaUhvc3QsIGRvbWFpbiB9ID0gY29uZmlncztcclxuXHRcdFx0dGhpcy5jb25maWdzID0gY29uZmlncztcclxuXHRcdFx0JHJvb3RTY29wZS5jb25maWdzID0gY29uZmlncztcclxuXHRcdFx0Ly9PdmVycmlkZSB0cmFuc2xhdGlvbiAoaWYgcG9zc2libGUpLi5cclxuXHRcdFx0bGFuZ3VhZ2VzLmZvckVhY2goKHtsYW5nfSkgPT4ge1xyXG5cdFx0XHRcdGlmIChjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoY29uZmlncy50cmFuc2xhdGlvbltsYW5nXSkpIHtcclxuXHRcdFx0XHRcdFx0bG9jYWxpemF0aW9uW2xhbmddW2tleV0gPSBjb25maWdzLnRyYW5zbGF0aW9uW2xhbmddW2tleV07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmIChjb25maWdzLmxhbmd1YWdlcykgeyAkcm9vdFNjb3BlLmxhbmd1YWdlcyA9IGNvbmZpZ3MubGFuZ3VhZ2VzOyB9XHJcblxyXG5cclxuXHJcblx0XHRcdG5ldyBQcm9taXNlKChuYXZpZ2F0aW9uUmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkTWVudShjb25maWdzLCBjb25maWdSZXNvbHZlLCBuYXZpZ2F0aW9uUmVzb2x2ZSlcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufV07IiwiaW1wb3J0IHtwcmVsb2FkUmVzb2x2ZXN9IGZyb20gJy4vdXRpbHMvaGVscGVyJztcclxuXHJcbmxldCByb3V0ZXJDb25maWcgPSBbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsICckY29tcGlsZVByb3ZpZGVyJywgJyRodHRwUHJvdmlkZXInLCAnJGxvY2F0aW9uUHJvdmlkZXInLFxyXG5cdGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRjb21waWxlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ3NwbGFzaCcsIHNwbGFzaFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCBtYWluUm91dGUpXHJcblx0XHRcdC5zdGF0ZSgncGFnZScsIHBhZ2VSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCduZXdzJywgbmV3c1JvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2NoaWxkUHJvZHVjdCcsIGNoaWxkcHJvZHVjdFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRFY29zcG9ydCcsIGZvcmRlY29zcG9ydFJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRFdmVyZXN0JywgZm9yZGV2ZXJlc3RSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkRm9jdXMnLCBmb3JkZm9jdXNSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdmb3JkUmFuZ2VyJywgZm9yZHJhbmdlclJvdXRlKVxyXG5cdFx0XHQuc3RhdGUoJ2ZvcmRUcmFuc2l0JywgZm9yZHRyYW5zaXRSb3V0ZSlcclxuXHRcdFx0LnN0YXRlKCdwcm9kdWN0JywgcHJvZHVjdFJvdXRlKTtcclxuXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvc3BsYXNoJyk7XHJcblxyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHt9O1xyXG5cdFx0JGh0dHBQcm92aWRlci5kZWZhdWx0cy5oZWFkZXJzLnBvc3QgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wdXQgPSB7fTtcclxuXHRcdCRodHRwUHJvdmlkZXIuZGVmYXVsdHMuaGVhZGVycy5wYXRjaCA9IHt9O1xyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHRydWUpO1xyXG5cdH1cclxuXTtcclxuXHJcbnZhciBzcGxhc2hSb3V0ZSA9IHtcclxuXHR1cmw6ICcvc3BsYXNoJyxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2VtcHR5TGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHNwbGFzaCc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9zcGxhc2guaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdzcGxhc2hDdHJsIGFzIHNwbGFzaEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIG1haW5Sb3V0ZSA9IHtcclxuXHR1cmw6ICcvJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAaG9tZSc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL21haW4uaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdtYWluQ3RybCBhcyBtYWluQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG52YXIgcGFnZVJvdXRlID0ge1xyXG5cdHVybDogJy86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBwYWdlJzoge1xyXG5cdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL2hvbWUvcGFnZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogJ3BhZ2VDdHJsIGFzIHBhZ2VDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBuZXdzUm91dGUgPSB7XHJcblx0dXJsOiAnL3Rpbi10dWMvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAbmV3cyc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9ob21lL25ld3MuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICduZXdzQ3RybCBhcyBuZXdzQ3RybCdcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcbnZhciBwcm9kdWN0Um91dGUgPSB7XHJcblx0dXJsOiAnL3Nhbi1waGFtLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QHByb2R1Y3QnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvaG9tZS9wcm9kdWN0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAncHJvZHVjdEN0cmwgYXMgcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGNoaWxkcHJvZHVjdFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWZpZXN0YS86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBjaGlsZFByb2R1Y3QnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvY2hpbGRQcm9kdWN0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkZWNvc3BvcnRSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1lY29zcG9ydC86YWxpYXMnLFxyXG5cdHJlc29sdmU6IHtcclxuXHRcdG1ldGE6IChtZXRhU2VydmljZSkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gbWV0YVNlcnZpY2UucHJvbWlzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdzOiB7XHJcblx0XHQnbGF5b3V0Jzoge3RlbXBsYXRlVXJsOiAndGVtcGxhdGUvbWFpbkxheW91dC5odG1sJ30sXHJcblx0XHQnY29udGVudEBmb3JkRWNvc3BvcnQnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZEVjb3Nwb3J0Lmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkZXZlcmVzdFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWV2ZXJlc3QvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZEV2ZXJlc3QnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZEV2ZXJlc3QuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmRmb2N1c1JvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLWZvY3VzLzphbGlhcycsXHJcblx0cmVzb2x2ZToge1xyXG5cdFx0bWV0YTogKG1ldGFTZXJ2aWNlKSA9PiB7XHJcblx0XHRcdHJldHVybiBtZXRhU2VydmljZS5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld3M6IHtcclxuXHRcdCdsYXlvdXQnOiB7dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9tYWluTGF5b3V0Lmh0bWwnfSxcclxuXHRcdCdjb250ZW50QGZvcmRGb2N1cyc6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkRm9jdXMuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxudmFyIGZvcmRyYW5nZXJSb3V0ZSA9IHtcclxuXHR1cmw6ICcvZm9yZC1yYW5nZXIvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZFJhbmdlcic6IHtcclxuXHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW1wbGF0ZS9mb3JkUHJvZHVjdC9mb3JkUmFuZ2VyLmh0bWwnLFxyXG5cdFx0XHRjb250cm9sbGVyOiAnY2hpbGRwcm9kdWN0Q3RybCBhcyBjaGlsZHByb2R1Y3RDdHJsJ1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuXHJcbnZhciBmb3JkdHJhbnNpdFJvdXRlID0ge1xyXG5cdHVybDogJy9mb3JkLXRyYW5zaXQvOmFsaWFzJyxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRtZXRhOiAobWV0YVNlcnZpY2UpID0+IHtcclxuXHRcdFx0cmV0dXJuIG1ldGFTZXJ2aWNlLnByb21pc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHR2aWV3czoge1xyXG5cdFx0J2xheW91dCc6IHt0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlL21haW5MYXlvdXQuaHRtbCd9LFxyXG5cdFx0J2NvbnRlbnRAZm9yZFRyYW5zaXQnOiB7XHJcblx0XHRcdHRlbXBsYXRlVXJsOiAndGVtcGxhdGUvZm9yZFByb2R1Y3QvZm9yZFRyYW5zaXQuaHRtbCcsXHJcblx0XHRcdGNvbnRyb2xsZXI6ICdjaGlsZHByb2R1Y3RDdHJsIGFzIGNoaWxkcHJvZHVjdEN0cmwnXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJDb25maWc7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVnaXN0ZXIobW9kdWxlSW5zdGFuY2UpIHtcclxuXHRtb2R1bGVJbnN0YW5jZVxyXG5cdFx0LmZpbHRlcignbmljZURhdGUnLCBuaWNlRGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuaWNlRGF0ZSAoKSB7XHJcblx0cmV0dXJuIGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQgPSAnREQtTU0tWVlZWScpIHtcclxuXHRcdHJldHVybiBtb21lbnQoZGF0ZSkuZm9ybWF0KGZvcm1hdCk7XHJcblx0fTtcclxufSIsImV4cG9ydCBjb25zdCBhcGlIb3N0ID0gJ2h0dHA6Ly8xMjguMTk5LjIyNy4xMzInOy8vJ3JpdmVyY2l0eTk5LnZuJzsvL2h0dHA6Ly8xMDMuNTYuMTU3LjY2L3JlYWxlc3RhdGUnO1xyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJGaWVsZHMgPSBbJ3VzZXJOYW1lJywgJ3VzZXJQaG9uZScsJ3VzZXJFbWFpbCcsICd1c2VyTm90ZScsICd1c2VyVHlwZScsICd1c2VyQ2F0ZScsICd1c2VyRGF0ZSddO1xyXG5leHBvcnQgY29uc3QgbGFuZ3VhZ2VzID0gW1xyXG5cdHtsYW5nOiBcInZpZXRuYW1lc2VcIiwgaWQ6IDEsIGRpc3BsYXk6IFwiVGnhur9uZyBWaeG7h3RcIn0sXHJcblx0Ly8ge2xhbmc6IFwiZW5nbGlzaFwiLCBpZDogMiwgZGlzcGxheTogXCJFbmdsaXNoXCJ9XHJcbl07XHJcblxyXG5leHBvcnQgbGV0IGxvY2FsaXphdGlvbiA9IHtcclxuXHR2aWV0bmFtZXNlOiB7XHJcblx0XHRyZWdpc3RlcjogXCJMScOKTiBI4buGXCIsXHJcblx0XHRuZXdzOiBcIlRJTiBU4buoQ1wiLFxyXG5cdFx0cmVnaXN0ZXJUaXRsZUhlYWQ6IGA8c3Bhbj5H4buNaSA8L3NwYW4+YCxcclxuXHRcdHJlZ2lzdGVyVGl0bGVUYWlsOiBgIFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInVsdHJhIHN0cm9uZ1wiIG5nLWJpbmQ9XCJjb25maWdzLnRyYW5zbGF0aW9uLmhvdGxpbmVcIj48L3NwYW4+XHJcblx0XHRcdDxzcGFuPiBob+G6t2MgZ+G7rWkgdGjDtG5nIHRpbiDEkeG7gyBuaOG6rW48L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPkLDgU8gR0nDgTwvc3Bhbj5cclxuXHRcdFx0PHNwYW4+dOG7qzwvc3Bhbj4gXHJcblx0XHRcdDxzcGFuIGNsYXNzPVwic3Ryb25nXCI+Q0jhu6YgxJDhuqZVIFTGrzwvc3Bhbj5gLFxyXG5cdFx0ZnVsbE5hbWVQbGFjZWhvbGRlcjogXCJI4buNIHbDoCB0w6puKlwiLFxyXG5cdFx0dHlwZVBsYWNlaG9sZGVyOiBcIm5o4bqtcCB0eXBlXCIsXHJcblx0XHRwaG9uZVBsYWNlaG9sZGVyOiBcIsSQaeG7h24gdGhv4bqhaSpcIixcclxuXHRcdGVtYWlsUGxhY2Vob2xkZXI6IFwiRW1haWwgKGtow7RuZyBi4bqvdCBideG7mWMpXCIsXHJcblx0XHRub3RlUGxhY2Vob2xkZXI6IFwiR2hpIGNow7pcIixcclxuXHRcdHNlbmQ6IFwiR+G7rWlcIixcclxuXHRcdGRlc2lnbmVkQnk6IFwiVGhp4bq/dCBr4buDIGLhu59pXCJcclxuXHR9LFxyXG5cdGVuZ2xpc2g6IHtcclxuXHRcdHJlZ2lzdGVyOiBcIlNVQlNDUklCRVwiLFxyXG5cdFx0bmV3czogXCJORVdTXCIsXHJcblx0XHRyZWdpc3RlclRpdGxlSGVhZDogYDxzcGFuPkNhbGwgPC9zcGFuPmAsXHJcblx0XHRyZWdpc3RlclRpdGxlVGFpbDogYCBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJ1bHRyYSBzdHJvbmdcIiBuZy1iaW5kPVwiY29uZmlncy50cmFuc2xhdGlvbi5ob3RsaW5lXCI+PC9zcGFuPlxyXG5cdFx0XHQ8c3Bhbj4gb3Igc3Vic2NyaWJlIHRvIHJlY2VpdmUgPC9zcGFuPiBcclxuXHRcdFx0PHNwYW4gY2xhc3M9XCJzdHJvbmdcIj5RVU9UQVRJT048L3NwYW4+XHJcblx0XHRcdDxzcGFuPmZyb208L3NwYW4+IFxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cInN0cm9uZ1wiPklOVkVTVE9SPC9zcGFuPmAsXHJcblx0XHRmdWxsTmFtZVBsYWNlaG9sZGVyOiBcIkZ1bGwgbmFtZSpcIixcclxuXHRcdHBob25lUGxhY2Vob2xkZXI6IFwiUGhvbmUqXCIsXHJcblx0XHRlbWFpbFBsYWNlaG9sZGVyOiBcIkVtYWlsIChvcHRpb25hbClcIixcclxuXHRcdG5vdGVQbGFjZWhvbGRlcjogXCJOb3RlLi5cIixcclxuXHRcdHNlbmQ6IFwiU2VuZFwiLFxyXG5cdFx0ZGVzaWduZWRCeTogXCJEZXNpZ25lZCBieVwiXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpeEFuYWx5dGljTWlzc2luZyAoKSB7XHJcblx0aWYgKCFnbG9iYWwuZ2EpIGdsb2JhbC5nYSA9IGVtcHR5RnVuY3Rpb247XHJcblx0aWYgKCFnbG9iYWwuZmJxKSBnbG9iYWwuZmJxID0gZW1wdHlGdW5jdGlvbjtcclxuXHRpZiAoIWdsb2JhbC5hbnRzX3VzZXJJbmZvTGlzdGVuZXIpIGdsb2JhbC5hbnRzX3VzZXJJbmZvTGlzdGVuZXIgPSBlbXB0eUZ1bmN0aW9uO1xyXG5cdGlmICghZ2xvYmFsLmFudHNfYW5hbHl0aWMpIGdsb2JhbC5hbnRzX2FuYWx5dGljID0gW107XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kKHNvdXJjZXMsIHByZWRpY2F0ZSkge1xyXG5cdHZhciBzZWFyY2hLZXksIHNlYXJjaFZhbHVlO1xyXG5cdGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhwcmVkaWNhdGUpKSB7XHJcblx0XHRzZWFyY2hLZXkgPSBrZXk7XHJcblx0XHRzZWFyY2hWYWx1ZSA9IHByZWRpY2F0ZVtrZXldO1xyXG5cdH1cclxuXHJcblx0Zm9yIChsZXQgaW5zdGFuY2Ugb2Ygc291cmNlcykge1xyXG5cdFx0aWYgKGluc3RhbmNlW3NlYXJjaEtleV0gPT09IHNlYXJjaFZhbHVlKSByZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhcmVudE1lbnVCeUFsaWFzIChhbGlhcywgbGlua3MpIHtcclxuXHRmb3IgKGxldCBncm91cCBvZiBsaW5rcykge1xyXG5cdFx0aWYgKGdyb3VwLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGdyb3VwO1xyXG5cdFx0aWYgKGdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdGZvciAobGV0IGNoaWxkIG9mIGdyb3VwLmNoaWxkcmVuKSB7XHJcblx0XHRcdFx0aWYgKGNoaWxkLmFsaWFzID09PSBhbGlhcykgcmV0dXJuIGdyb3VwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbFZhbGlkIChlbWFpbCkge1xyXG5cdHZhciByZSA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xyXG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBwcmVsb2FkUmVzb2x2ZXMgPSB7XHJcblx0YXBwQ29uZmlnOiBmdW5jdGlvbihjb25maWdTZXJ2aWNlLCBjYWxjdWxhdG9yU2VydmljZSkge1xyXG5cdFx0cmV0dXJuIGNvbmZpZ1NlcnZpY2UucHJvbWlzZTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVOdW1iZXJVVUlEIChsZW5ndGgpIHtcclxuXHR2YXIgcmVzdWx0ID0gXCJcIjtcclxuXHRmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdHJlc3VsdCArPSBbMCwxLDIsMyw0LDUsNiw3LDgsOV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjkpXTtcclxuXHR9XHJcblxyXG5cdHJldHVybiByZXN1bHRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVSYW5nZSAodmFsdWUsIG1pbiwgbWF4KSB7XHJcblx0aWYgKG1pbiAhPSB1bmRlZmluZWQgJiYgdmFsdWUgPD0gbWluKSByZXR1cm4gbWluO1xyXG5cdGlmIChtYXggIT0gdW5kZWZpbmVkICYmIHZhbHVlID49IG1heCkgcmV0dXJuIG1heDtcclxuXHRyZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcblN0cmluZy5wcm90b3R5cGUud2lkdGggPSBmdW5jdGlvbihmb250KSB7XHJcblx0dmFyIGYgPSBmb250IHx8ICcxMnB4IGFyaWFsJyxcclxuXHRcdG8gPSAkKCc8ZGl2PicgKyB0aGlzICsgJzwvZGl2PicpXHJcblx0XHRcdC5jc3Moeydwb3NpdGlvbic6ICdhYnNvbHV0ZScsICdmbG9hdCc6ICdsZWZ0JywgJ3doaXRlLXNwYWNlJzogJ25vd3JhcCcsICd2aXNpYmlsaXR5JzogJ2hpZGRlbicsICdmb250JzogZn0pXHJcblx0XHRcdC5hcHBlbmRUbygkKCdib2R5JykpLFxyXG5cdFx0dyA9IG8ud2lkdGgoKTtcclxuXHJcblx0by5yZW1vdmUoKTtcclxuXHJcblx0cmV0dXJuIHc7XHJcbn07XHJcblxyXG5nbG9iYWwudXVpZCA9IGdlbmVyYXRlTnVtYmVyVVVJRDsiXX0=
