import { apiHost } from "./utils/helper";

export default ['$rootScope', '$http', function ($rootScope, $http) {
	let configsPromise = new Promise((resolve, reject) => {
		$http.get(`${apiHost}/menu/get/json`, { params: { site: location.host } }).success((data) => {
			this.links = data.results; resolve(this.links);
		});
	});

	let navigationPromise = new Promise((resolve, reject) => {
		$http.get('/configs').success((data) =>{
			this.configs = data; resolve(this.configs);
		});
	});

	this.promise = new Promise((resolve, reject) => {
		Promise.all([navigationPromise, configsPromise]).then(values => {
			console.info("metaService ready!", this.links, this.configs);
			resolve({links: this.links, configs: this.configs});
		});
	});
}];