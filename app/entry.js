import {applicationController} from "./controller/applicationController";
import routerConfig from "./routerConfig";

import {mainController} from "./controller/mainController";
import {pageController} from "./controller/pageController";
import {splashController} from "./controller/splashController";

import navigation from "./component/navigation";
import navigationLink from "./component/navigationLink";
import footer from "./component/footer";
import sidebar from "./component/sidebar";
import subscriptionForm from "./component/subscriptionForm";
import popup from "./component/popup";

let App = angular.module('application', ['ui.router', 'hmTouchEvents', 'ngParallax'])
	.config(routerConfig)
	.controller('appCtrl', applicationController)
	.controller('mainCtrl', mainController)
	.controller('pageCtrl', pageController)
	.controller('splashCtrl', splashController)
	.directive('popup', popup)
	.directive('lightNavigation', navigation)
	.directive('lightSidebar', sidebar)
	.directive('lightFooter', footer)
	.directive('subscriptionForm', subscriptionForm)
	.directive('navigationLink', navigationLink);

App.run(() => {
	FastClick.attach(document.body);
});

App.filter('unsafe', [
	'$sce', function ($sce) {
		return function (val) {
			return $sce.trustAsHtml(val);
		};
	}
]);

angular.bootstrap(document, ['application']);