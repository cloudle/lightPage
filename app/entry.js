import {applicationController} from "./controller/applicationController";
import routerConfig from "./utils/routerConfig";

import {mainController} from "./controller/mainController";
import {splashController} from "./controller/splashController";

import navigation from "./component/navigation";
import navigationLink from "./component/navigationLink";
import subscriptionForm from "./component/subscriptionForm";
import popup from "./component/popup";

let App = angular.module('application', ['ui.router', 'hmTouchEvents'])
	.config(routerConfig)
	.controller('appCtrl', applicationController)
	.controller('mainCtrl', mainController)
	.controller('splashCtrl', splashController)
	.directive('popup', popup)
	.directive('lightNavigation', navigation)
	.directive('subscriptionForm', subscriptionForm)
	.directive('navigationLink', navigationLink);

App.run(() => {
	FastClick.attach(document.body);
});

angular.bootstrap(document, ['application']);