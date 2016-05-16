export class mainController {
	static $inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

	features = [];
	sliders = [];

	constructor ($rootScope, $scope, $interval, $timeout, $state, $window, $http, metaService) {
		fbq('track', 'ViewContent'); //Facebook tracking code..
		$rootScope.activeGroup = metaService.links[0]; $window.scrollTo(0, 0);

		$http.get('http://128.199.227.132/page/get/json', { params: { page_id: "1" } }).success(data => {
			$rootScope.activeContents = [data.results[0].Page];
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
				this.sliderHeight = size.height > 570 ? size.height - 70 : 500;
			});
		})
	}
}