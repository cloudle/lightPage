import {preloadResolves} from './utils/helper';

let routerConfig = ['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', '$locationProvider',
	function($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, $locationProvider) {
		$stateProvider
			.state('splash', splashRoute)
			.state('home', mainRoute)
			.state('page', pageRoute)
			.state('news', newsRoute)
			.state('childProduct', childproductRoute)
			.state('fordEcosport', fordecosportRoute)
			.state('fordEverest', fordeverestRoute)
			.state('fordFocus', fordfocusRoute)
			.state('fordExplorer', fordexplorerRoute)
			.state('fordRanger', fordrangerRoute)
			.state('fordTransit', fordtransitRoute)
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

var childproductRoute = {
	url: '/san-pham/ford-fiesta/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@childProduct': {
			templateUrl: 'template/fordProduct/childProduct.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordecosportRoute = {
	url: '/san-pham/ford-ecosport/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@fordEcosport': {
			templateUrl: 'template/fordProduct/fordEcosport.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordeverestRoute = {
	url: '/san-pham/ford-everest/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@fordEverest': {
			templateUrl: 'template/fordProduct/fordEverest.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordfocusRoute = {
	url: '/san-pham/ford-focus/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@fordFocus': {
			templateUrl: 'template/fordProduct/fordFocus.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordexplorerRoute = {
	url: '/san-pham/ford-explorer/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@fordExplorer': {
			templateUrl: 'template/fordProduct/fordExplorer.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordrangerRoute = {
	url: '/san-pham/ford-ranger/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@fordRanger': {
			templateUrl: 'template/fordProduct/fordRanger.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};

var fordtransitRoute = {
	url: '/san-pham/ford-transit/:alias',
	resolve: {
		meta: (metaService) => {
			return metaService.promise;
		}
	},
	views: {
		'layout': {templateUrl: 'template/mainLayout.html'},
		'content@fordTransit': {
			templateUrl: 'template/fordProduct/fordTransit.html',
			controller: 'childproductCtrl as childproductCtrl'
		}
	}
};
export default routerConfig;