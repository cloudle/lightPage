export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: `<div class="popup-wrapper" ng-class="{active: enable}">
			<div class="popup-backdrop" ng-click="toggle()"></div>
			<div class="popup-content">
				<div class="subscription-form-newcontact">
					<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>
</div>
				<ng-transclude></ng-transclude>
			</div>
		</div>`,
		link: function (scope, element, attrs) {
			let {apiHost, domain} = metaService.configs;
			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.toggle = function () {
				scope.enable = !scope.enable;
			}
		}
	}
}]