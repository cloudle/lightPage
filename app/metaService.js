import { apiHost } from "./utils/helper";

export default ['$rootScope', '$http', function ($rootScope, $http) {
	this.promise = $http.get(`${apiHost}/menu/get/json`, {
		params: { site: location.host }
	}).success((data) => {
		this.links = data.results;
		console.info("metaService ready!");
	});
}];