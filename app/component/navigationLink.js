export default [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: `<div class="navigation-link" ng-class="{active: instance.active}">
			<span ng-bind="instance.name"></span>
			<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">
				<div class="sub-link icon-av-play-arrow" ng-bind="link.name" ng-repeat="link in instance.children"></div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.active = false;
		}
	}
}]