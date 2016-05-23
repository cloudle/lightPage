import { generateNumberUUID, registerFields } from '../utils/helper';

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
		$rootScope.appCtrl = this;

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

		//Register form!
		registerFields.forEach(field => {
			this[field] = ''; this[field+'Error'] = '';
		});

		this.resetRegisterForm = () => {
			registerFields.forEach(field => this[field] = '');
		};

		this.resetRegisterError = () => {
			registerFields.forEach(field => this[field+'Error'] = '');
		};

		this.subscriptionSuccessHandler = () => {
			this.successGifImage = `url(images/onoffonce.gif?${generateNumberUUID(10)})`;
			this.subscriptionSuccess = true;
			$timeout(() => {
				this.subscriptionSuccess = false;
				location.reload();
			}, 3000);
		};

		this.submitRegister = $rootScope.submitRegister = (event) => {
			let { apiHost, domain } = metaService.configs;
			event.preventDefault(); this.resetRegisterError();

			if (this['userName'].length < 1) this['userNameError'] = 'Nhập tên';
			if (this['userPhone'].length < 8) this['userPhoneError'] = 'Số điện thoại chưa đúng';
			if (this['userNameError'] || this['userPhoneError']) return;

			var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
				formData = {
					...localUserInfo,
					domain,
					fullName: this['userName'],
					name: this['userName'],
					phone: this['userPhone'],
					email: this['userEmail']
				};

			//Fire Ants trackingGoal hook!
			adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId, 1, 'event');
			//Send form information to Ants!
			ants_userInfoListener(formData, false, true);

			//Facebook tracking Lead/CompleteRegistration event
			fbq('track', 'Lead');
			fbq('track', 'CompleteRegistration');

			//Tracking Google Analytic goal!
			ga('send', {
				hitType: 'event',
				eventCategory: 'Subscription',
				eventAction: 'Submit'
			});

			this.resetRegisterForm();
			this.subscriptionPopup = false;

			//Send form to Twin's server!
			$http.get(`${apiHost}/customer/insert/json`, {
				params: formData
			}).success(data => {
				this.subscriptionSuccessHandler();
				$http.get(`${apiHost}/mail/sent/json`, {params: formData}).success(data => {
					console.log('email...', data);
				});
			});
		};

		global.get_info = (_userInfo) => {
			$scope.$apply(() => {
				// user info get here
				console.log("ant's get_info function:", _userInfo);

				// fill userInfo to FORM đăng ký
				this.userName = _userInfo.name || '';
				this.userPhone = _userInfo.phone || '';
				this.userEmail = _userInfo.email || '';

				//Store Social profile
				if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
			});
		};
	}
}
