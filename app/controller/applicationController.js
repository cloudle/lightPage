import { generateNumberUUID } from '../utils/helper';

export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory', 'metaService'];
	developmentMode = false;
	ready = true;
	activePage = 'splash';
	burgerActive = false;
	subscriptionPopup = false;
	subscriptionSuccess = false;

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window, $http,  ngProgressFactory, metaService) {
		$rootScope.configs = metaService.configs; //Will be undefined at first => not safe for normal usage, just for translation!

		$rootScope.activeContents = [];
		this.progress = ngProgressFactory.createInstance();
		this.progress.setColor('#FA8322');
		global.$http = $http;

		global.togglePopup = (newVal) => {
			$scope.$apply(() => {
				this.subscriptionPopup = newVal ? newVal : !this.subscriptionPopup;
			});
		};

		this.toggleSuccess = () => {
			this.successGifImage = `url(images/onoffonce.gif?${generateNumberUUID(10)})`;
			this.subscriptionSuccess = true;
			$timeout(() => this.subscriptionSuccess = false, 3000);
		};

		$rootScope.$on('subscriptionSent', () => {
			this.subscriptionPopup = false;
		});

		$rootScope.$on('subscriptionSuccess', () => {
			this.successGifImage = `url(images/onoffonce.gif?${generateNumberUUID(10)})`;
			this.subscriptionSuccess = true;
			$timeout(() => this.subscriptionSuccess = false, 3000);
		});

		$rootScope.$on('$stateChangeStart', () => {
			this.progress.start();
		});

		$rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
			this.activePage = toState.name;	this.ready = false;
			this.progress.complete();
			$timeout(() => this.ready = true, 250);
		});

		let fetchEssentialData = (source) => {
			let { apiHost, domain } = metaService.configs;

			$http.get(`${apiHost}/banner/get/json`, {
				params: { domain, type: 'footer' }
			}).success(data => {
				this.footers = data.results;
			});

			$http.get(`${apiHost}/banner/get/json`, {
				params: { domain, type: 'news', limit: 4 }
			}).success(data => {
				$rootScope.news = data.results;
			});
		};

		if (metaService.ready) fetchEssentialData();
		$rootScope.$on('metaServiceReady', fetchEssentialData);

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
