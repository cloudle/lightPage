export class splashController {
	static $inject = ['$rootScope', '$scope', '$state', '$interval', '$timeout'];

	constructor ($rootScope, $scope, $state, $interval, $timeout) {
		this.$state = $state;
		$timeout(() => this.skipIntro(), 0);

		if (global.resetContDownInterval) $interval.cancel(global.resetContDownInterval);
	}

	skipIntro () {
		this.$state.transitionTo('home');
	}
}