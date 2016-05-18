import { generateNumberUUID, apiHost } from '../utils/helper';

export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory', 'metaService'];
	developmentMode = false;
	ready = true;
	activePage = 'splash';
	burgerActive = false;
	subscriptionPopup = false;
	subscriptionSuccess = false;

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window, $http,  ngProgressFactory, metaService) {
		$rootScope.activeContents = [];
		this.progress = ngProgressFactory.createInstance();
		this.progress.setColor('#FA8322');
		global.$http = $http;

		global.togglePopup = () => {
			$scope.$apply(() => {
				this.subscriptionPopup = !this.subscriptionPopup;
			});
		};

		this.toggleSuccess = () => {
			this.successGifImage = `url(images/onoffonce.gif?${generateNumberUUID(10)})`;
			this.subscriptionSuccess = true;
			$timeout(() => this.subscriptionSuccess = false, 3000);
		};

		$rootScope.$on('$stateChangeStart', () => {
			this.progress.start();
		});

		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			console.log('ready!');
			this.activePage = toState.name;	this.ready = false;
			this.progress.complete();
			$timeout(() => this.ready = true, 250);
		});

		$http.get(`${apiHost}/banner/get/json`, {
			params: { type: 'footer' }
		}).success(data => {
			this.footers = data.results;
		});

		$http.get(`${apiHost}/banner/get/json`, {
			params: { type: 'news', limit: 4 }
		}).success(data => {
			$rootScope.news = data.results;
		});

		this.lastScrollPosition = 0;
		$(window).scroll((event) => {
			let topScroll = $(window).scrollTop();
			$rootScope.$broadcast('scrollChange', {top: topScroll, scrollingDown: topScroll > this.lastScrollPosition});
			this.lastScrollPosition = topScroll;
		});

		$(window).resize(() => {
			$rootScope.$broadcast('sizeChange', {
				height: $(window).height(),
				width: $(window).width()
			});
		});
	}
}
