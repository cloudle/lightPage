let mainFont = "14px 'Open Sans'", childFont = "13px 'Open Sans'", padding = 80;

export default ['$http', '$rootScope', '$state', function ($http, $rootScope, $state) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: `<div class="navigation-link" ng-style="{width: maxWidth+'px'}" ng-class="{active: linkActiveClass(instance)}"
				ng-click="parentLinkNavigate(instance)">
			<span ng-bind="instance.name"></span>
			<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">
				<div class="sub-link icon-av-play-arrow" ng-bind="link.name" ng-repeat="link in instance.children"
					ui-sref="page({id: link.page_id})"></div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.active = false;
			scope.maxWidth = scope.instance.name.width(mainFont) + padding;

			scope.$watch('instance', instance => {
				if (instance.children && instance.children.length) {

					instance.children.forEach(child => {
						let currentWidth = child.name.width(childFont) + padding;
						if (currentWidth > scope.maxWidth) {
							scope.maxWidth = currentWidth;
						}
					});
				}
			});

			scope.linkActiveClass = function (instance) {
				if ($rootScope.activePage) {
					if (instance.children) {
						return _.findWhere(instance.children, {page_id: $rootScope.activePage.id}) != undefined;
					} else {
						return $rootScope.activePage.id === instance.page_id;
					}
				}
				return $rootScope.activePage && $rootScope.activePage.id === pageId ? 'active' : '';
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.page_id) {
					$state.go('page', {id: instance.page_id});
				}
				else if (instance.children[0] && instance.children[0].page_id) {
					$state.go('page', {id: instance.children[0].page_id});
				}
			}
		}
	}
}]