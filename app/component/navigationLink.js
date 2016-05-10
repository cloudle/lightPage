let mainFont = "14px 'Open Sans'", childFont = "13px 'Open Sans'", padding = 80;

export default [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: `<div class="navigation-link" ng-style="{width: maxWidth+'px'}" ng-class="{active: instance.active}">
			<span ng-bind="instance.name"></span>
			<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">
				<div class="sub-link icon-av-play-arrow" ng-bind="link.name" ng-repeat="link in instance.children"></div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.active = false;
			scope.maxWidth = scope.instance.name.width(mainFont) + padding;

			scope.$watch('instance', instance => {
				console.log("instance changes", instance.children ? instance.children : '');
				if (instance.children && instance.children.length) {

					instance.children.forEach(child => {
						let currentWidth = child.name.width(childFont) + padding + 10;

						console.log('tada', scope.maxWidth, currentWidth, child.name);
						if (currentWidth > scope.maxWidth) {
							scope.maxWidth = currentWidth;
						}
					});

					console.log(scope.maxWidth);
				}
			});
		}
	}
}]