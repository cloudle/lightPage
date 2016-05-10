let mainFont = "14px 'Open Sans'", childFont = "13px 'Open Sans'", padding = 100;

export default ['$http', '$rootScope', function ($http, $rootScope) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			instance: '='
		},
		template: `<div class="navigation-link" ng-style="{width: maxWidth+'px'}" ng-class="{active: instance.active}">
			<span ng-bind="instance.name"></span>
			<div class="sub-navigations icon-navigation-arrow-drop-up" ng-if="instance.children">
				<div class="sub-link icon-av-play-arrow" ng-bind="link.name" ng-repeat="link in instance.children"
					ng-click="getPageContent(link)"></div>
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

			scope.getPageContent = function (link) {
				if (!link.page_id) return;

				$http.get('http://128.199.227.132/page/get/json', { params: { page_id: link.page_id } }).success(data => {
					$rootScope.pageContent = data.results[0].Page.content;
				})
			}
		}
	}
}]