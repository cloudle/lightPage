export default ['$rootScope', function ($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: `<div class="sidebar-wrapper" ng-style="{transform: 'translate(0,'+topPosition+'px)'}">
			<subscription-form wrapper-class="subscription-form sidebar" submit-text="GỬI"></subscription-form>
			<!--<div class="small-banner"></div>-->
		</div>`,
		link: function (scope, element, attrs) {
			scope.topPosition = 0;

			$rootScope.$on('scrollChange', (event, position) => {
				scope.$apply(() => {
					if (position.top > 100) {
						scope.topPosition = position.top - 30;
					} else {
						scope.topPosition = 0;
					}
				});
			});
		}
	}
}]