import { apiHost } from "../utils/helper";

export class newsController {
	static $inject = ['$rootScope', '$window', '$http',  '$state'];

	constructor ($rootScope, $window, $http, $state) {
		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");
		$rootScope.activeGroup = null;

		this.pageAlias = $state.params.alias; $window.scrollTo(0, 0);
		this.singleMode = this.pageAlias !== '';

		if (this.singleMode) {
			$http.get(`${apiHost}/post/get/json`, { params: { alias: this.pageAlias } }).success(data => {
				fbq('track', 'ViewContent');
				this.activeNews = data.results[0].Post;
			})
		} else {
			$http.get(`${apiHost}/banner/get/json`, {	params: { type: 'news' } }).success(data => {
				fbq('track', 'ViewContent');
				this.allNews = data.results;
				console.log(this.allNews);
			});
		}
	}
}