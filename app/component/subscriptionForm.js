import { isEmailValid } from '../utils/helper';

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
			
			<input type="text" placeholder="Họ và tên*" ng-model="appCtrl.userName"/>
			<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>
			<input type="text" placeholder="Điện thoại*" ng-model="appCtrl.userPhone"/>
			<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>
			<input type="text" placeholder="Email (không bắt buộc)" ng-model="appCtrl.userEmail"/>
			<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>
		
			<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->
			
			<div class="commands">
				<div class="social-button facebook" ng-click="facebookLogin()"></div>
				<div class="social-button google" ng-click="googleLogin()"></div>
				<button type="submit" class="submit" ng-bind="submitText || 'GỬI'"></button>
			</div>
		</form>`,
		link: function (scope, element, attrs) {
			let {apiHost, domain} = metaService.configs;
			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail'];