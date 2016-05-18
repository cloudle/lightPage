const initialTopOffset = 121;

export default ['$rootScope', '$timeout', function ($rootScope, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: `<div class="sidebar-wrapper" ng-style="{transform: 'translate(0,'+topPosition+'px)'}">
			<subscription-form wrapper-class="subscription-form sidebar"></subscription-form>
			<!--<div class="small-banner"></div>-->
			<div class="sidebar-news">
				<div class="heading">Tin tức</div>
				<div class="news-summary" ng-repeat="newsItem in news" ui-sref="news({alias: newsItem.Post.alias})">
					<div class="thumb-image" ng-style="{'background-image': 'url('+newsItem.Post.image+')'}"></div>
					<div class="title" ng-bind="newsItem.Post.title"></div>
				</div>
			</div>
		</div>`,
		link: function (scope, element, attrs) {
			var sidebarHeight, footerHeight; scope.topPosition = 0;

			//Safely calculate element's size after stuff have been rendered!
			$timeout(() => {
				sidebarHeight = element.outerHeight();
				footerHeight = angular.element('#footer').outerHeight();
			}, 500);

			$rootScope.$on('scrollChange', (event, scrollPosition) => {
				scope.news = $rootScope.news;

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
						scope.topPosition = scrollPosition.top;
					}
				});
			});
		}
	}
}]