import { apiHost } from "../utils/helper";

export class pageController {
	static $inject = ['$rootScope', '$scope', '$element', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

	constructor ($rootScope, $scope, $element, $interval, $timeout, $state, $window, $http, metaService) {
		fbq('track', 'ViewContent'); //Facebook tracking code..

		let pageId = $state.params.id, parentGroup = this.findParentGroup(pageId, metaService.links),
			previousGroup = $rootScope.activeGroup;
		if(pageId == 1) { $state.go('home'); return; }

		$rootScope.activeGroup = parentGroup;
		//Kick back to the Home page if it's not a link in menu
		if (!parentGroup || !parentGroup.children) {
			$state.go('home');
		} else if (parentGroup === previousGroup) { //If the parent group is already active => scroll to the child section!
			//Scroll after 1 second to have better performance (after stuffs had been rendered).
			$timeout(() => {
				let scrollOffset = angular.element(`#section${pageId}`).offset().top - 50;
				TweenLite.to(window, 1, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
			}, 800);
		} else { //Finally, load the page => set page's children content!
			let loadedCount = 0; $rootScope.activeContents = [];
			$window.scrollTo(0, 0); //Reset the scroll if loading from the beginning!
			parentGroup.children.forEach((child, index) => {
				$rootScope.activeContents[index] = {};
				$http.get(`${apiHost}/page/get/json`, { params: { page_id: child.page_id } }).success(data => {
					let childResult = data.results[0];
					if (childResult && childResult.Page) {
						$rootScope.activeContents[index] = childResult.Page;
					}
				}).finally(() => {
					loadedCount++;

					if (loadedCount >= parentGroup.children.length) {
						//Scroll after 1 second (after all content are ready from server!)
						// to have better performance (after stuffs had been rendered).
						$timeout(() => {
							let scrollOffset = angular.element(`#section${pageId}`).offset().top - 50;
							TweenLite.to(window, 1, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
						}, 500);
					}
				});
			});
		}
	}

	findParentGroup (pageId, links) {
		for (let link of links) {
			if (link.page_id && link.page_id === pageId) return link;

			if (link.children) {
				for (let child of link.children) {
					if (child.page_id && child.page_id == pageId) {
						return link;
					}
				}
			}
		}
	}
}