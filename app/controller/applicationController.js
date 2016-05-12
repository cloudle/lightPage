export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory'];
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

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window, $http,  ngProgressFactory) {
		this.progress = ngProgressFactory.createInstance();
		this.progress.setColor('#FA8322');

		$rootScope.$on('$stateChangeStart', () => {
			this.progress.start();
		});

		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			this.activePage = toState.name;	this.ready = false;
			$window.scrollTo(0, 0); this.progress.complete();
			$timeout(() => this.ready = true, 250);
		});

		this.name = "Light Page!";

		$http.get('http://128.199.227.132/menu/get/json', {
			params: { site: location.host }
		}).success((data) => {
			this.links = data.results;
		});

		$http.get('http://128.199.227.132/banner/get/json', {
			params: { type: 'footer' }
		}).success(data => {
			this.footers = data.results;
		});
	}
}
