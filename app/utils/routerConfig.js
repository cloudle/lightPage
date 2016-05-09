import {preloadResolves} from './helper';

let routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider',
	function($stateProvider, $urlRouterProvider, $compileProvider) {
		$stateProvider
			.state('splash', splashRoute)
			.state('home', mainRoute);

		$urlRouterProvider.otherwise('/splash');
	}
];

var splashRoute = {
	url: '/splash',
	views: {
		'layout': {templateUrl: 'template/emptyLayout.html'},
		'content@splash': {
			templateUrl: 'template/splash.html',
			controller: 'splashCtrl as splashCtrl'
		}
	}
};

var mainRoute = {
	url: '/home',
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@home': {
			templateUrl: 'template/home/main.html',
			controller: 'mainCtrl as mainCtrl'
		}
	}
};

export default routerConfig;