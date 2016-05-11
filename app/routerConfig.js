import {preloadResolves} from './utils/helper';

let routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider',
	function($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider) {
		$stateProvider
			.state('splash', splashRoute)
			.state('home', mainRoute)
			.state('page', pageRoute);

		$urlRouterProvider.otherwise('/splash');

		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {};
		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};
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

var pageRoute = {
	url: '/page/:id',
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@page': {
			templateUrl: 'template/home/page.html',
			controller: 'pageCtrl as pageCtrl'
		}
	}
};

export default routerConfig;