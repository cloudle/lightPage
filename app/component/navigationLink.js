let mainFont = "14px 'Open Sans'", childFont = "13px 'Open Sans'", padding = 80;

export default ['$http', '$rootScope', '$state', 'metaService', function ($http, $rootScope, $state, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: `<div class="navigation-link" ng-style="{width: maxWidth+'px'}" ng-class="{active: linkActiveClass(instance)}">
			<div class="parent-link" ng-bind="instance.name" ng-click="parentLinkNavigate(instance)"></div>
			<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">
				<div class="sub-link icon-av-play-arrow" ng-bind="link.name" ng-repeat="link in instance.children"
					ui-sref="page({id: link.page_id})"></div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.active = false;
			scope.maxWidth = scope.instance.name.width(mainFont) + padding;

			if (scope.instance.children && scope.instance.children.length) {
				scope.instance.children.forEach(child => {
					let currentWidth = child.name.width(childFont) + padding;
					if (currentWidth > scope.maxWidth) {
						scope.maxWidth = currentWidth;
					}
				});
			}

			scope.linkActiveClass = function (instance) {
				return $rootScope.activeGroup && $rootScope.activeGroup.id === instance.id;
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.page_id) {
					$state.go('page', {id: instance.page_id});
				}
				else if (instance.children[0] && instance.children[0].page_id) {
					$state.go('page', {id: instance.children[0].page_id});
				}
			};
		}
	}
}]