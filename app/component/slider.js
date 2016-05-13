export default ['$interval', '$timeout', function ($interval, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		scope: { items: '=' },
		transclude: true,
		template: `<div class="light-slider {{wrapperClass}}">
			<div class="active-slide" ng-style="{'background-image': 'url('+activeSlide.image+')'}"></div>
			<div class="slide-positions">
				<div class="position-item" ng-repeat="item in items"></div>
			</div>
			<ng-transclude></ng-transclude>
		</div>`,
		link: (scope, element, attrs) => {
			scope.activeIndex = 0;
			scope.activeSlide = scope.items[scope.activeIndex];

			scope.$watch('items', () => {
				scope.activeIndex = 0;
				nextSlide();
			});

			if (global.sliderInterval) $interval.cancel(global.sliderInterval);

			let nextSlide = function () {
				scope.activeIndex++;
				if (scope.activeIndex >= scope.items.length) {
					scope.activeIndex = 0;
				}

				scope.activeSlide = scope.items[scope.activeIndex];
			};

			global.sliderInterval = $interval(() => nextSlide(), 10000);
		}
	}
}]