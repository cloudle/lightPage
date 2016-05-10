export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http'];
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

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window, $http) {
		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			this.activePage = toState.name;	this.ready = false;
			$timeout(() => this.ready = true, 250);
		});

		this.name = "Light Page!";

		$http.get('http://128.199.227.132/menu/get/json').success((data) => {
			console.log(data.results);
			this.links = data.results;
		})
	}
}
