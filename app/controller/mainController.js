export class mainController {
	static $inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];
	features = [];

	constructor ($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
		$http.get('http://128.199.227.132/page/get/json', { params: { page_id: "1" } }).success(data => {
			$rootScope.activePage = data.results[0].Page;
		});

		$http.get('http://128.199.227.132/banner/get/json', {
			params: { type: 'banner' }
		}).success(data => {
			this.features = data.results;
		});

		this.sliders = [{
			image: 'images/riverside-inside.jpg'
		},{
			image: 'images/riverside-inside2.jpg'
		},{
			image: 'images/riverside-inside3.jpg'
		}];
	}
}