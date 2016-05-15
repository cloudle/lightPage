const initialTopOffset = 121;

export default ['$rootScope', '$timeout', function ($rootScope, $timeout) {
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
			var sidebarHeight, footerHeight; scope.topPosition = 0;

			//Safely calculate element's size after stuff have been rendered!
			$timeout(() => {
				sidebarHeight = element.outerHeight();
				footerHeight = angular.element('#footer').outerHeight();
			}, 500);

			$rootScope.$on('scrollChange', (event, scrollPosition) => {
				scope.$apply(() => {
					let documentHeight = $(document).height(), windowHeight = $(window).height(),
						offset = element.offset();

					if (scrollPosition.scrollingDown) {
						let scrollDownTouchBottom = scrollPosition.top + windowHeight > offset.top + sidebarHeight,
							scrollDownOverFooter = scrollPosition.top + windowHeight > documentHeight - footerHeight;

						if (scrollDownTouchBottom && !scrollDownOverFooter) {
							scope.topPosition = scrollPosition.top + windowHeight - sidebarHeight - initialTopOffset;
						}
					} else if (scrollPosition.top < offset.top - initialTopOffset) {
						console.log(scrollPosition.top, offset.top);
						scope.topPosition = scrollPosition.top;
					}

					// if (sidebarTouchBottom) {
					// 	scope.topPosition = $(document).height() - (sidebarBottomMargin + bannerHeight);
					// } else if (position.top > 100) {
					// 	scope.topPosition = position.top - 30;
					// }  else {
					// 	scope.topPosition = 0;
					// }
				});
			});
		}
	}
}]