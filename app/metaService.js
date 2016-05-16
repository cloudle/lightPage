export default ['$rootScope', '$http', function ($rootScope, $http) {
	this.promise = $http.get('http://128.199.227.132/menu/get/json', {
		params: { site: location.host }
	}).success((data) => {
		this.links = data.results;
		console.info("metaService ready!", this.links);
	});
}];