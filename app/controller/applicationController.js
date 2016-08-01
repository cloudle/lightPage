import {
	generateNumberUUID,
	registerFields,
	findParentMenuByAlias,
	languages
} from '../utils/helper';

export class applicationController {
	static $inject = ['$rootScope', '$scope', '$state', '$timeout', '$interval', '$window', '$http', 'ngProgressFactory', 'metaService'];
	developmentMode = false;
	ready = true;
	activePage = 'splash';
	burgerActive = false;
	subscriptionPopup = false;
	subscriptionSuccess = false;
	modalPopup = false;

	constructor ($rootScope, $scope, $state, $timeout, $interval, $window, $http,  ngProgressFactory, metaService) {
		$rootScope.configs = metaService.configs; //Will be undefined at first => not safe for normal usage, just for translation!
		$rootScope.appCtrl = this;

		this.modalOneActive = false;
		this.modalTwoActive = false;
		this.modalThreeActive = false;

		//Fire Ants trackingGoal hook!




		this.convertcall = () => {
			ga('send', {'hitType': 'event', 'eventCategory': 'Cuoc Goi', 'eventAction': 'Call', 'eventLabel': 'Cuoc Goi' });
		}

		this.testdriver = () => {
			ga('send', {'hitType': 'event', 'eventCategory': 'Test Driver', 'eventAction': 'Click', 'eventLabel': 'Test driver' });
			this.modalThreeActive = true;
		}

		this.price = () => {
			ga('send', {'hitType': 'event', 'eventCategory': 'Bang Gia', 'eventAction': 'Click', 'eventLabel': 'Bang Gia' });
			this.modalOneActive = true;
		}

		this.price2 = () => {
			ga('send', {'hitType': 'event', 'eventCategory': 'Bang Gia', 'eventAction': 'Click', 'eventLabel': 'Bang Gia' });
			this.modalTwoActive = true;
		}

		this.name = "Cloud!";
		$rootScope.activeContents = [];
		this.progress = ngProgressFactory.createInstance();
		this.progress.setColor('#FA8322');
		global.$http = $http;

		global.toggleModal = (newVall) => {
			$scope.$apply(() => {
				this.modalPopup = newVall ? newVall : !this.modalPopup;
			});
		};

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
			console.info("Loading..", source);
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

		if (metaService.ready) fetchEssentialData("because the data already fetched!");
		$rootScope.$on('metaServiceReady', () => fetchEssentialData("because meta service ready fired!"));

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
			this.modalOneActive = false;
			this.modalTwoActive = false;
			this.modalThreeActive = false;
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
			if (this['userType'].length < 8) this['userTypeError'] = 'Nhập Tyeeeee';
			if (this['userNameError'] || this['userPhoneError'] || this['userTypeError']) return;

			var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
				formData = {
					...localUserInfo,
					domain,
					fullName: this['userName'],
					name: this['userName'],
					type: this['userType'],
					cate: this['userCate'],
					phone: this['userPhone'],
					area: this['userArea'],
					date: this['userDate'],
					email: this['userEmail'],
					note: this['userNote']
				};


			//Send form information to Ants!

			console.log(formData.note);
			if (production) {
				ants_userInfoListener(formData, false, true);
			} else {
				console.log(ants_userInfoListener)
			}

			if (production) adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId1, 1, 'event');

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
			this.modalPopup = false;

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

		this.submitModal = $rootScope.submitModal = (event) => {
			let { apiHost, domain, production } = metaService.configs;
			console.log("production mode:", production);
			event.preventDefault(); this.resetRegisterError();

			if (this['userName'].length < 1) this['userNameError'] = 'Nhập tên';
			if (this['userPhone'].length < 8) this['userPhoneError'] = 'Số điện thoại chưa đúng';
			if (this['userType'].length < 8) this['userTypeError'] = 'Nhập Tyeeeee';
			if (this['userNameError'] || this['userPhoneError'] || this['userTypeError']) return;

			var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
				formData = {
					...localUserInfo,
					domain,
					fullName: this['userName'],
					name: this['userName'],
					type: this['userType'],
					cate: this['userCate'],
					phone: this['userPhone'],
					area: this['userArea'],
					date: this['userDate'],
					email: this['userEmail'],
					note: this['userNote']
				};


			//Send form information to Ants!

			//console.log(formData.date);

				var vehicleType = this['userType'];
				var userRegion = this['userArea'];
				var userDate = this['userDate'];

				//Send form information to Ants!

				//console.log(formData.date);
				if (production) {

					/* Ants Insight Goal Tracking: "Đăng ký lái thử Ford Gia đình" */

					adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId3, 1, 'event');

					/* Ants Insight Form Tracking: "Đăng ký lái thử Ford Gia đình" */

					var infoCustomTargetKey = [

						{ field: 'vehicle_type', value: vehicleType },

						{ field: 'day_to_drive', value: userDate },

						{ field: 'region', value: userRegion }

					];

					var userInfo = {

						name:this['userName'],

						phone: this['userPhone'],

						email: this['userEmail'],

						description: this['userNote'], // Ghi chú khác nếu có

						others: JSON2.stringify(infoCustomTargetKey)

					};

					adx_analytic.trackingEvent('tup', userInfo, true);
					//ants_userInfoListener(formData, false, true);// Được thay bằng dòng trên . Cái này Version củ
			} else {
				console.log(ants_userInfoListener)
			}

			//if (production) adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId3, 1, 'event');

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
			this.modalPopup = false;

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

		// this.submitModal_old = $rootScope.submitModal = (event) => {
		// 	let { apiHost, domain, production } = metaService.configs;
		// 	console.log("production mode:", production);
		// 	event.preventDefault(); this.resetRegisterError();
        //
		// 	if (this['userName'].length < 1) this['userNameError'] = 'Nhập tên';
		// 	if (this['userPhone'].length < 8) this['userPhoneError'] = 'Số điện thoại chưa đúng';
		// 	if (this['userType'].length < 8) this['userTypeError'] = 'Nhập Tyeeeee';
		// 	if (this['userNameError'] || this['userPhoneError'] || this['userTypeError']) return;
        //
		// 	var vehicleType = this['userType'];
		// 	var userRegion = this['userArea'];
		// 	var userDate = this['userDate'];
        //
		// 	//Send form information to Ants!
        //
		// 	console.log(formData.date);
		// 	if (production) {
        //
		// 		/* Ants Insight Goal Tracking: "Đăng ký lái thử Ford Gia đình" */
        //
		// 		adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId3, 1, 'event');
        //
		// 		/* Ants Insight Form Tracking: "Đăng ký lái thử Ford Gia đình" */
        //
		// 		var infoCustomTargetKey = [
        //
		// 			{ field: 'vehicle_type', value: vehicleType },
        //
		// 			{ field: 'day_to_drive', value: userDate },
        //
		// 			{ field: 'region', value: userRegion }
        //
		// 		];
        //
		// 		var userInfo = {
        //
		// 			name:this['userName'],
        //
		// 			phone: this['userPhone'],
        //
		// 			email: this['userEmail'],
        //
		// 			description: this['userNote'], // Ghi chú khác nếu có
        //
		// 			others: JSON2.stringify(infoCustomTargetKey)
        //
		// 		};
        //
		// 		adx_analytic.trackingEvent('tup', userInfo, true);
        //
		// 		// ants_userInfoListener(forData, false, true);-> This is OLD Version
		// 	} else {
		// 		console.log(ants_userInfoListener)
		// 	}
        //
		// 	//Facebook tracking Lead/CompleteRegistration event
		// 	if (production) fbq('track', 'Lead');
		// 	if (production) fbq('track', 'CompleteRegistration');
        //
		// 	//Tracking Google Analytic goal!
		// 	if (production) {
		// 		ga('send', {
		// 			hitType: 'event',
		// 			eventCategory: 'Subscription',
		// 			eventAction: 'Submit'
		// 		});
		// 	}
        //
		// 	if (production) {
		// 		ants_analytic.push({
		// 			conversionId : metaService.configs.antsConversionId,
		// 			customParams : [
		// 				{
		// 					'is_ecomm': 0,
		// 					'ecomm_pagetype': 'purchase',
		// 					'ecomm_quantity': 1,
		// 					'ecomm_totalvalue': 1
		// 				}
		// 			]
		// 		});
		// 	}
        //
		// 	this.resetRegisterForm();
		// 	this.subscriptionPopup = false;
		// 	this.modalPopup = false;
        //
		// 	//Send form to Twin's server!
		// 	if (production) {
		// 		$http.get(`${apiHost}/customer/insert/json`, {
		// 			params: formData
		// 		}).success(data => {
		// 			this.subscriptionSuccessHandler();
		// 			$http.get(`${apiHost}/mail/sent/json`, {params: formData}).success(data => {
		// 				console.log('email...', data);
		// 			});
		// 		});
		// 	} else {
		// 		this.subscriptionSuccessHandler(); //Auto success on test environment!
		// 	}
		// };

		this.submitModal2 = $rootScope.submitModal2 = (event) => {
			let { apiHost, domain, production } = metaService.configs;
			console.log("production mode:", production);
			event.preventDefault(); this.resetRegisterError();

			if (this['userName'].length < 1) this['userNameError'] = 'Nhập tên';
			if (this['userPhone'].length < 8) this['userPhoneError'] = 'Số điện thoại chưa đúng';
			if (this['userType'].length < 8) this['userTypeError'] = 'Nhập Tyeeeee';
			if (this['userNameError'] || this['userPhoneError'] || this['userTypeError']) return;

			var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
				formData = {
					...localUserInfo,
					domain,
					fullName: this['userName'],
					name: this['userName'],
					type: this['userType'],
					cate: this['userCate'],
					phone: this['userPhone'],
					area: this['userArea'],
					date: this['userDate'],
					email: this['userEmail'],
					note: this['userNote']
				};


			//Send form information to Ants!


			if (production) {
				ants_userInfoListener(formData, false, true);
			} else {
				console.log(ants_userInfoListener)
			}

			if (production) adx_analytic.trackingGoal(metaService.configs.antsRegisterGoalId2, 1, 'event');

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
			this.modalPopup = false;

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
				this.userCate = _userInfo.cate || '';
				this.userType = _userInfo.type || '';
				this.userArea = _userInfo.area || '';
				this.userNote = _userInfo.note || '';

				//Store Social profile
				if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
			});
		};
	}
}
