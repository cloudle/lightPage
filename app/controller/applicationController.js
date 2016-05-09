export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window'];
	developmentMode = false;
	ready = false;
	activePage = 'splash';
	burgerActive = false;

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window) {
		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			this.activePage = toState.name;	this.ready = false;
			$timeout(() => this.ready = true, 250);
		});

		this.name = "Light Page!";
	}
}