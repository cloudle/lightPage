import { apiHost } from "../utils/helper";

export class newsController {
	static $inject = ['$rootScope', '$window', '$http',  '$state'];

	constructor ($rootScope, $window, $http, $state) {
		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");

		this.postId = $state.params.id; $window.scrollTo(0, 0);
		this.singleMode = !isNaN(this.postId);

		if (this.singleMode) {
			$http.get(`${apiHost}/post/get/json`, { params: { id: this.postId } }).success(data => {
				fbq('track', 'ViewContent');
				this.activeNews = data.results[0].Post;
				console.log(this.activeNews);
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