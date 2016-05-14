export default ['$interval', '$timeout', function ($interval, $timeout) {
	return {
		restrict: 'E',
		replace: true,
		scope: { items: '=' },
		transclude: true,
		template: `<div class="light-slider {{wrapperClass}}"
			ng-swipe-left="swipeLeft($event)" ng-swipe-right="swipeRight($event)">
			<div id="currentSlide" class="active-slide" ng-style="{'background-image': 'url('+activeSlide.image+')'}"></div>
			<div id="previousSlide" class="active-slide previous" ng-style="{'background-image': 'url('+previousSlide.image+')'}"></div>

			<div class="slide-navigation">
				<div class="navigate-next"></div>
				<div class="navigate-back"></div>
			</div>

			<div class="slide-positions">
				<div class="position-item" ng-class="{active: item.isActive}" ng-repeat="item in items" ng-click="navigate(item)"></div>
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
				if (scope.previousSlide) scope.previousSlide.isActive = false;

				scope.activeIndex = nextIndex != undefined ? nextIndex : scope.activeIndex + 1;
				if (scope.activeIndex < 0) {
					scope.activeIndex = scope.items.length - 1;
				} else if (scope.activeIndex >= scope.items.length) {
					scope.activeIndex = 0;
				}

				scope.activeSlide = scope.items[scope.activeIndex];
				if (scope.activeSlide) scope.activeSlide.isActive = true;

				//Play transition animation!
				// TweenLite.fromTo($previousSlide, transitionTime, {ease: easeEffect, x: '0%'}, {ease: easeEffect, x: '100%'});
				// TweenLite.fromTo($activeSlide, transitionTime, {ease: easeEffect, x: '-100%'}, {ease: easeEffect, x: '0%'});
				TweenLite.to($activeSlide, 0, {ease: easeEffect, opacity: '1'});
				TweenLite.fromTo($previousSlide, transitionTime, {ease: easeEffect, opacity: '1'}, {ease: easeEffect, opacity: '0'});

				//Reset interval;
				if (global.sliderInterval) $interval.cancel(global.sliderInterval);
				global.sliderInterval = $interval(() => nextSlide(), 10000);
			};

			scope.navigate = (instance) => {
				if (instance != scope.activeSlide) {
					nextSlide(scope.items.indexOf(instance));
				}
			};

			scope.swipeLeft = (e) => nextSlide(scope.activeIndex + 1);
			scope.swipeRight = (e) => nextSlide(scope.activeIndex - 1);

			global.sliderInterval = $interval(() => nextSlide(), 10000);
		}
	}
}]