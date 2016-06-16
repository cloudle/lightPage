import {preloadResolves} from './utils/helper';

let routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider) {
		$stateProvider
			.state('splash', splashRoute)
			.state('home', mainRoute)
			.state('page', pageRoute)
			.state('news', newsRoute)
			.state('product', productRoute);

		$urlRouterProvider.otherwise('/splash');

		$httpProvider.defaults.headers.common = {};
		$httpProvider.defaults.headers.post = {};
		$httpProvider.defaults.headers.put = {};
		$httpProvider.defaults.headers.patch = {};
		$locationProvider.html5Mode(true);
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
	url: '/',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@home': {
			templateUrl: 'template/home/main.html',
			controller: 'mainCtrl as mainCtrl'
		}
	}
};

var pageRoute = {
	url: '/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@page': {
			templateUrl: 'template/home/page.html',
			controller: 'pageCtrl as pageCtrl'
		}
	}
};

var newsRoute = {
	url: '/tin-tuc/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@news': {
			templateUrl: 'template/home/news.html',
			controller: 'newsCtrl as newsCtrl'
		}
	}
};
var productRoute = {
	url: '/san-pham/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@product': {
			templateUrl: 'template/home/product.html',
			controller: 'productCtrl as productCtrl'
		}
	}
};

export default routerConfig;