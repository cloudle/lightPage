export default ['$rootScope', '$http', function ($rootScope, $http) {
	return {
		restrict: 'E',
		transclude: true,
		replace: true,
		template: `<div class="section-canvas top-separated news-area">
			<ng-transclude></ng-transclude>
		</div>`,
		link: (scope, element, attrs) => {
		}
	}
}]