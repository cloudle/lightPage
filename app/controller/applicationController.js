import {
	generateNumberUUID,
	registerFields,
	findParentMenuByAlias
} from '../utils/helper';

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

			//Set meta's content for AUDIENCE SEGMENT!
			let currentSegment = 'home';
			if ($state.is('page')) {
				let pageAlias = $state.params.alias, parentMenu = findParentMenuByAlias(pageAlias, metaService.links);
				currentSegment = parentMenu.name;
			} else if ($state.is('news')) {
				currentSegment = 'news'
			}

			$($("meta[name='adx:sections']")[0]).attr('content', currentSegment);
			$timeout(() => {
				this.ready = true;
				$(document).trigger('ready'); //Manually trigger ready event, which hope also trigger Ants' script!
			}, 250);
		});

		let fetchEssentialData = (source) => {
			let { apiHost, domain } = metaService.configs;
			$http.get(`${apiHost}/banner/get/json`, {
				params: { domain, type: 'footer', lang: $rootScope.activeLanguage.id }
			}).success(data => {
				this.footers = data.results;
			});

			$http.get(`${apiHost}/banner/get/json`, {
				params: { domain, type: 'news', lang: $rootScope.activeLanguage.id, limit: 4 }
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

		this.closeRegisterForm = () => {
			this.subscriptionPopup = false;
		};

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
			let { apiHost, domain, production } = metaService.configs;
			console.log("production mode:", production);
			event.preventDefault(); this.resetRegisterError();

			if (this['userName'].length < 1) this['userNameError'] = 'Nhập tên';
			if (this['userPhone'].length < 8) this['userPhoneError'] = 'Số điện thoại chưa đúng';
			if (this['userNameError'] || this['userPhoneError']) return;

			var data = {
					email : this['userEmail'],
					phone: this['userPhone'],
					name: this['userName'],
					address: '',
					action: 'text - explain',
					your_key1: this['userNote'],
					your_key2: ''

			}

			var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
				formData = {
					...localUserInfo,
					domain,
					fullName: this['userName'],
					name: this['userName'],
					phone: this['userPhone'],
					email: this['userEmail'],
					note: this['userNote']
				};

			//Sent form Tracking Note
			// if(production) new UActL({}).syncWithParams(data);

			//Fire Ants trackingGoal hook!
			if (production) adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId, 1, 'event');
			//Send form information to Ants!
			if (production) {
				ants_userInfoListener(formData, false, true);
			} else {
				console.log(ants_userInfoListener)
			}

			//Facebook tracking Lead/CompleteRegistration event
			if (production) fbq('track', 'Lead');
			if (production) fbq('track', 'CompleteRegistration');

			//Tracking Google Analytic goal!
			if (production) {
				ga('send', {
					hitType: 'event',
					eventCategory: 'Subscription',
					eventAction: 'Submit'
				});
			}

			if (production) {
				ants_analytic.push({
					conversionId : metaService.configs.antsConversionId,
					customParams : [
						{
							'is_ecomm': 0,
							'ecomm_pagetype': 'purchase',
							'ecomm_quantity': 1,
							'ecomm_totalvalue': 1
						}
					]
				});
			}

			this.resetRegisterForm();
			this.subscriptionPopup = false;

			//Send form to Twin's server!
			if (production) {
				$http.get(`${apiHost}/customer/insert/json`, {
					params: formData
				}).success(data => {
					this.subscriptionSuccessHandler();
					$http.get(`${apiHost}/mail/sent/json`, {params: formData}).success(data => {
						console.log('email...', data);
					});
				});
			} else {
				this.subscriptionSuccessHandler(); //Auto success on test environment!
			}
		};

		global.get_info = (_userInfo) => {
			$scope.$apply(() => {
				// user info get here
				console.log("ant's get_info function:", _userInfo);

				// fill userInfo to FORM đăng ký
				this.userName = _userInfo.name || '';
				this.userPhone = _userInfo.phone || '';
				this.userEmail = _userInfo.email || '';
				this.userNote = _userInfo.note || '';

				//Store Social profile
				if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
			});
		};
	}
}
