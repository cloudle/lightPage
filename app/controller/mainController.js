export class mainController {
	static $inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

	features = [];
	sliders = [];

	constructor ($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
		$http.get('http://128.199.227.132/page/get/json', { params: { page_id: "1" } }).success(data => {
			$rootScope.activePage = data.results[0].Page;
		});

		$http.get('http://128.199.227.132/banner/get/json', {
			params: { type: 'banner' }
		}).success(data => {
			this.features = data.results;
		});

		$http.get('http://128.199.227.132/banner/get/json', {
			params: { type: 'HomeSlider' }
		}).success(data => {
			this.sliders = data.results.map(item => {
				return item.Post;
			});
		});

		this.sliderHeight = $(window).height() - 70;
		$rootScope.$on('sizeChange', (event, size) => {
			$scope.$apply(() => {
				this.sliderHeight = size.height - 70;
			});
		})
	}
}