import { fixAnalyticMissing } from "./utils/helper";
import {applicationController} from "./controller/applicationController";
import routerConfig from "./routerConfig";

import {mainController} from "./controller/mainController";
import {pageController} from "./controller/pageController";
import {newsController} from "./controller/newsController";
import {productController} from "./controller/productController";
import {splashController} from "./controller/splashController";

import navigation from "./component/navigation";
import navigationLink from "./component/navigationLink";
import footer from "./component/footer";
import sidebar from "./component/sidebar";
import subscriptionForm from "./component/subscriptionForm";
import popup from "./component/popup";
import slider from "./component/slider";
import newsArea from "./component/newsArea";
import metaService from "./metaService";
import registerFilter from "./utils/filter";

global.fixAnalyticMissing = fixAnalyticMissing;
let App = angular.module('application', ['ui.router', 'ngAnimate', 'ngProgress', 'ngTouch', 'ngParallax', 'angular-spinkit'])
	.config(routerConfig)
	.controller('appCtrl', applicationController)
	.controller('mainCtrl', mainController)
	.controller('pageCtrl', pageController)
	.controller('newsCtrl', newsController)
	.controller('productCtrl', productController)
	.controller('splashCtrl', splashController)
	.service('metaService', metaService)
	.directive('popup', popup)
	.directive('lightNavigation', navigation)
	.directive('lightSidebar', sidebar)
	.directive('lightFooter', footer)
	.directive('lightSlider', slider)
	.directive('newsArea', newsArea)
	.directive('subscriptionForm', subscriptionForm)
	.directive('navigationLink', navigationLink);

registerFilter(App);

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