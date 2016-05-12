export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'cfpLoadingBar'];
	developmentMode = false;
	ready = false;
	activePage = 'splash';
	burgerActive = false;
	subscriptionPopup = false;

	links = [{
		name: 'trang chủ',
		active: true
	}, {
		name: 'vị trí và tiện ích',
		children: [
			{name: 'vị trí'},
			{name: 'tiện ích khu vực'},
			{name: 'tiện ích nội khu'}
		]
	}, {
		name: 'ưu đãi thanh toán'
	}, {
		name: 'mặt bằng'
	}];

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window, $http, cfpLoadingBar) {
		$rootScope.$on('$stateChangeStart', () => {
			cfpLoadingBar.start();
		});

		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			this.activePage = toState.name;	this.ready = false;
			cfpLoadingBar.complete();
			$window.scrollTo(0, 0);
			$timeout(() => this.ready = true, 250);
		});

		$http.get('http://128.199.227.132/menu/get/json', {
			params: { site: location.host }
		}).success((data) => {
			this.links = data.results;
		})
	}
}
