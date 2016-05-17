import { apiHost } from "../utils/helper";

export class newsController {
	static $inject = ['$rootScope', '$window', '$http',  '$state'];

	constructor ($rootScope, $window, $http, $state) {
		this.postId = $state.params.id; $window.scrollTo(0, 0);
		this.singleMode = !isNaN(this.postId);

		if (this.singleMode) {
			$http.get(`${apiHost}/post/get/json`, { params: { id: this.postId } }).success(data => {
				this.activeNews = data.results[0].Post;
				console.log(this.activeNews);
			})
		} else {
			$http.get(`${apiHost}/banner/get/json`, {	params: { type: 'news' } }).success(data => {
				this.allNews = data.results;
				console.log(this.allNews);
			});
		}
	}
}