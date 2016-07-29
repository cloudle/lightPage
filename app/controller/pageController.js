export class pageController {
	static $inject = ['$rootScope', '$scope', '$element', '$interval', '$timeout', '$state', '$window', '$http', 'metaService'];

	constructor ($rootScope, $scope, $element, $interval, $timeout, $state, $window, $http, metaService) {
		let { apiHost, domain } = metaService.configs;

		this.modalOneActive = false;
		this.modalTwoActive = false;
		this.modalThreeActive = false;

		//Tracking code..
		ga('send', 'pageview');
		fbq('track', "PageView");
		fbq('track', 'ViewContent');
		this.loadData = () => {
			let pageAlias = $state.params.alias, parentGroup = this.findParentGroup(pageAlias, metaService.links),
				previousGroup = $rootScope.activeGroup; $rootScope.activeGroup = parentGroup;

			if(pageAlias == 'trang-chu') { $state.go('home'); return; }

			//Kick back to the Home page if it's not a link in menu
			if (!parentGroup || !parentGroup.children) {
				$state.go('home');
			} else if (parentGroup === previousGroup) { //If the parent group is already active => scroll to the child section!
				//Scroll after 1 second to have better performance (after stuffs had been rendered).
				$timeout(() => {
					let scrollOffset = angular.element(`#section${pageAlias}`).offset().top - 50;
					TweenLite.to(window, 1, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
				}, 800);
			} else { //Finally, load the page => set page's children content!
				let loadedCount = 0; $rootScope.activeContents = [];
				$window.scrollTo(0, 0); //Reset the scroll if loading from the beginning!
				parentGroup.children.forEach((child, index) => {
					$rootScope.activeContents[index] = {};
					$http.get(`${apiHost}/page/get/json`, { params: { domain, alias: child.alias } }).success(data => {
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
								let scrollOffset = angular.element(`#section${pageAlias}`).offset().top - 50;
								TweenLite.to(window, 1, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
							}, 500);
						}
					});
				});
			}
		}
		this.loadData();
		$rootScope.$watch('activeLanguage', () => {
			this.loadData();
		});

	}

	findParentGroup (alias, links) {
		for (let link of links) {
			if (link.alias && link.alias === alias) return link;

			if (link.children) {
				for (let child of link.children) {
					if (child.alias && child.alias == alias) {
						return link;
					}
				}
			}
		}
	}
}