export class pageController {
	static $inject = ['$rootScope', '$scope', '$interval', '$timeout', '$state', '$window', '$http'];

	constructor ($rootScope, $scope, $interval, $timeout, $state, $window, $http) {
		let pageId = $state.params.id;

		$http.get('http://128.199.227.132/page/get/json', { params: { page_id: pageId } }).success(data => {
			$rootScope.activePage = data.results[0].Page;
		});

		if(pageId == 1) $state.go('home');
	}
}