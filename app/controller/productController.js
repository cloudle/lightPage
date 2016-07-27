export class productController {
	static $inject = ['$rootScope', '$window', '$http', '$state', 'metaService'];

	constructor($rootScope, $window, $http, $state, metaService) {
		let {apiHost, domain} = metaService.configs;

		this.modalOneActive = false;
		this.modalTwoActive = false;
		this.modalThreeActive = false;
		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");

		$rootScope.activeGroup = null;

		this.pageAlias = $state.params.alias;
		$window.scrollTo(0, 0);
		this.singleMode = this.pageAlias !== '';

		if (this.singleMode) {
			$http.get(`${apiHost}/post/get/json`, {
				params: {domain, alias: this.pageAlias}
			}).success(data => {
				fbq('track', 'ViewContent');
				this.activeNews = data.results[0].Post;
			})
		} else {
			$http.get(`${apiHost}/banner/get/json`, {
				params: {domain, type: 'product', lang: $rootScope.activeLanguage.id}
			}).success(data => {
				fbq('track', 'ViewContent');
				
				this.allProduct = data.results;
			});
		}
	}
}