export default ['$rootScope', '$http', '$timeout', function ($rootScope, $http, $timeout) {
	this.ready = false;

	this.promise = new Promise((configResolve, reject) => {
		$http.get('/configs').success((data) => {
			data.domain = data.domain || location.host;
			console.log(data.domain);
			let configs = data, { apiHost, domain } = configs;

			new Promise((navigationResolve, reject) => {
				$http.get(`${apiHost}/menu/get/json`, {
					params: { domain }
				}).success((data) => {
					this.links = data.results; this.configs = configs;
					navigationResolve(this.links);
					configResolve(this.configs);
					$timeout(() => {
						$rootScope.$broadcast('metaServiceReady');
						this.ready = true;
					},0);
				});
			});
		});
	});
}];