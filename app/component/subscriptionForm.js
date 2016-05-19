import { isEmailValid, apiHost } from '../utils/helper';

export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: `<form ng-class="wrapperClass" ng-submit="submit($event)">
			<!--<div class="close-command icon-navigation-close" ng-click="closeForm()"></div>-->
			<div class="heading">
				<span>Gọi </span> 
				<span class="ultra strong" ng-bind="configs.translation.hotline"></span>
				<span> hoặc gửi thông tin để nhận</span> 
				<span class="strong">BÁO GIÁ</span>
				<span>từ</span> 
				<span class="strong">CHỦ ĐẦU TƯ</span>
			</div>
			
			<input type="text" placeholder="Họ và tên*" ng-model="userName"/>
			<div class="error-row" ng-bind="userNameError" ng-if="userNameError"></div>
			<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>
			<div class="error-row" ng-bind="userPhoneError" ng-if="userPhoneError"></div>
			<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>
			<div class="error-row" ng-bind="userEmailError" ng-if="userEmailError"></div>
		
			<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->
			
			<div class="commands">
				<div class="social-button facebook" ng-click="facebookLogin()"></div>
				<div class="social-button google" ng-click="googleLogin()"></div>
				<button type="submit" class="submit" ng-bind="submitText || 'GỬI'"></button>
			</div>

		</form>`,
		link: function (scope, element, attrs) {
			scope.configs = metaService.configs;
			fields.forEach(field => { scope[field+'Error'] = ''; scope[field] = '';	});

			scope.resetForm = () => {
				fields.forEach(field => scope[field] = '');
			};

			scope.closeForm = () => {
				scope.$parent.appCtrl.subscriptionPopup = false;
			};

			scope.submit = (event) => {
				event.preventDefault();
				fields.forEach(field => scope[field+'Error'] = '');

				if (scope.userName.length < 1) scope.userNameError = 'Nhập tên';
				if (scope.userPhone.length < 8) scope.userPhoneError = 'Số điện thoại chưa đúng';

				if (scope.userNameError || scope.userPhoneError) return;

				var localUserInfo = JSON.parse(localStorage.getItem("_userInfo")),
					formData = {
					...localUserInfo,
					site: location.host,
					fullName: scope.userName,
					name: scope.userName,
					phone: scope.userPhone,
					email: scope.userEmail
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

				//Instantly reset the form!
				scope.resetForm();
				$rootScope.$broadcast('subscriptionSent');

				//Send form to Twin's server!
				$http.get(`${apiHost}/customer/insert/json`, {
					params: formData
				}).success(data => {
					$rootScope.$broadcast('subscriptionSuccess');
					$http.get(`${apiHost}/mail/sent/json`, {params: formData}).success(data => {
						console.log('email...', data);
					});
				});
			};

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};

			global.get_info = function(_userInfo){
				scope.$apply(() => {
					// user info get here
					console.log(_userInfo, "called!!");

					// fill userInfo to FORM đăng ký
					scope.userName = _userInfo.name;
					scope.userPhone = _userInfo.phone;
					scope.userEmail = _userInfo.email || '';

					//Store Social profile
					if (_userInfo) localStorage.setItem("_userInfo", JSON.stringify(_userInfo));
				});
			};
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail'];