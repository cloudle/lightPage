import { apiHost } from "../utils/helper";

export class mainController {
	static $inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

	features = [];
	sliders = [];

	constructor ($rootScope, $scope, $interval, $timeout, $state, $window, $http, metaService) {
		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");

		$rootScope.activeGroup = metaService.links[0]; $window.scrollTo(0, 0);

		$http.get(`${apiHost}/page/get/json`, { params: { alias: "trang-chu" } }).success(data => {
			fbq('track', 'ViewContent');
			$rootScope.activeContents = [data.results[0].Page];
			console.log($rootScope.activeContents);
		});

		$http.get(`${apiHost}/banner/get/json`, {
			params: { type: 'banner' }
		}).success(data => {
			this.features = data.results;
		});

		$http.get(`${apiHost}/banner/get/json`, {
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