export class newsController {
	static $inject = ['$rootScope', '$scope', '$window', '$http',  '$state', 'metaService'];

	constructor ($rootScope, $scope, $window, $http, $state, metaService) {
		let { apiHost, domain } = metaService.configs;
		this.modalOneActive = false;
		this.modalTwoActive = false;
		this.modalThreeActive = false;

		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");

		this.loadData = () => {
			$rootScope.activeGroup = null;

			this.pageAlias = $state.params.alias; $window.scrollTo(0, 0);
			this.singleMode = this.pageAlias !== '';

			if (this.singleMode) {
				$http.get(`${apiHost}/post/get/json`, {
					params: { domain, alias: this.pageAlias , lang: $rootScope.activeLanguage.id }
				}).success(data => {
					fbq('track', 'ViewContent');
					if (data.results[0]) {
						this.activeNews = data.results[0].Post;
					}
				})
			} else {
				$http.get(`${apiHost}/banner/get/json`, {
					params: { domain, type: 'news', lang: $rootScope.activeLanguage.id }
				}).success(data => {
					fbq('track', 'ViewContent');
					this.allNews = data.results;
				});

			}
		}
		this.loadData();
		$scope.$watch('activeLanguage', () => {
			
			this.loadData();
		});
	}
}