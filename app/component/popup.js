export default [function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: `<div class="popup-wrapper" ng-class="{active: enable}">
			<div class="popup-backdrop" ng-click="toggle()"></div>
			<div class="popup-content">
				<ng-transclude></ng-transclude>
			</div>
		</div>`,
		link: function (scope, element, attrs) {
			scope.toggle = function () {
				scope.enable = !scope.enable;
			}
		}
	}
}]