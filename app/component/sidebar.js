const sidebarTopMargin = 200,
	sidebarBottomMargin = 670;

export default ['$rootScope', function ($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: `<div class="sidebar-wrapper" ng-style="{transform: 'translate(0,'+topPosition+'px)'}">
			<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>
			<div class="small-banner"></div>
		</div>`,
		link: function (scope, element, attrs) {
			scope.topPosition = 0;
			let bannerHeight = element.outerHeight();

			$rootScope.$on('scrollChange', (event, position) => {
				scope.$apply(() => {
					let sidebarTouchBottom = ($(window).scrollTop() + $(window).height() > $(document).height() - sidebarBottomMargin);
					// if($(window).scrollTop() + $(window).height() > $(document).height() - sidebarBottomMargin) {
					// 	console.log("near bottom!");
					// }

					if (sidebarTouchBottom) {
						scope.topPosition = $(document).height() - (sidebarBottomMargin + bannerHeight);
						console.log("near bottom!", scope.topPosition);
					} else if (position.top > 100) {
						scope.topPosition = position.top - 30;
					}  else {
						scope.topPosition = 0;
					}
				});
			});
		}
	}
}]