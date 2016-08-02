export class mainController {
	static $inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

	features = [];
	sliders = [];

	constructor ($rootScope, $scope, $interval, $timeout, $state, $window, $http, metaService) {
		let { apiHost, domain } = metaService.configs;
		this.modalOneActive = false;
		this.modalTwoActive = false;
		this.modalThreeActive = false;


		this.submitModalOne = () => {
			console.log('heheheh');
		};

		// this.showModalOne  = () => {
		// 	console.log("??");
		// 	this.modalOneActive = true;
		// };

		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");
		this.hidden = false;
		$rootScope.activeGroup = metaService.links[-1]; $window.scrollTo(0, 0);

		$http.get(`${apiHost}/page/get/json`, {
			params: { domain, alias: "trang-chu" }
		}).success(data => {
			fbq('track', 'ViewContent');
			$rootScope.activeContents = [data.results[0].Page];
		});

		$http.get(`${apiHost}/banner/get/json`, {
			params: { domain, type: 'banner', lang: $rootScope.activeLanguage.id }
		}).success(data => {
			this.features = data.results;
		});

		$http.get(`${apiHost}/banner/get/json`, {
			params: { domain, type: 'HomeSlider', lang: $rootScope.activeLanguage.id }
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