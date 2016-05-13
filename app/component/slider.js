export default ['$interval', '$timeout', function ($interval, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		scope: { items: '=' },
		transclude: true,
		template: `<div class="light-slider {{wrapperClass}}">	
			<div id="currentSlide" class="active-slide" ng-style="{'background-image': 'url('+activeSlide.image+')'}"></div>
			<div id="previousSlide" class="active-slide previous" ng-style="{'background-image': 'url('+previousSlide.image+')'}"></div>
	
			<div class="slide-positions">
				<div class="position-item" ng-repeat="item in items"></div>
			</div>
			<ng-transclude></ng-transclude>
		</div>`,
		link: (scope, element, attrs) => {
			let $activeSlide = element.find('#currentSlide'), $previousSlide = element.find('#previousSlide'),
				easeEffect = Sine.easeIn, transitionTime = 2;

			scope.activeIndex = 0;
			scope.activeSlide = scope.items[scope.activeIndex];

			scope.$watch('items', () => {
				nextSlide(0);
			});

			if (global.sliderInterval) $interval.cancel(global.sliderInterval);

			let nextSlide = function (nextIndex) {
				scope.previousSlide = scope.items[scope.activeIndex];

				scope.activeIndex = nextIndex || scope.activeIndex + 1;
				if (scope.activeIndex >= scope.items.length || scope.activeIndex < 0) {
					scope.activeIndex = 0;
				}

				scope.activeSlide = scope.items[scope.activeIndex];

				//Play transition animation!
				// TweenLite.fromTo($previousSlide, transitionTime, {ease: easeEffect, x: '0%'}, {ease: easeEffect, x: '100%'});
				// TweenLite.fromTo($activeSlide, transitionTime, {ease: easeEffect, x: '-100%'}, {ease: easeEffect, x: '0%'});
				TweenLite.to($activeSlide, 0, {ease: easeEffect, opacity: '1'});
				TweenLite.fromTo($previousSlide, transitionTime, {ease: easeEffect, opacity: '1'}, {ease: easeEffect, opacity: '0'})
			};

			global.sliderInterval = $interval(() => nextSlide(), 10000);
		}
	}
}]