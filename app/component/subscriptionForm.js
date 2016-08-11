import { isEmailValid } from '../utils/helper';

export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { modal: '@', submitText: '@' },
		template: `<form ng-class="modal" ng-submit="submit($event)">
				
			<div class="close-command icon-navigation-close" ng-click="appCtrl.closeRegisterForm()"></div>
			<div class="heading">
				<span ng-bind-html="$root.localization.registerTitleHead | unsafe"></span>
				<span class="ultra strong" ng-bind="configs.translation.hotline"></span>
				<span ng-bind-html="$root.localization.registerTitleTail | unsafe"></span>
			</div>
			<fieldset>
			<div class="error-row" ng-bind="appCtrl.userNameError" ng-if="appCtrl.userNameError"></div>
			<input type="text" placeholder="{{$root.localization.fullNamePlaceholder}}" ng-model="appCtrl.userName"/>
			
			
			<label for="job">Chọn dòng xe:   </label>
			<select id="job" name="user_job" ng-model="appCtrl.userType">
				<option>Ford Fiesta</option>
				<option>Ford Ranger</option>
				<option>Ford Everest</option>
				<option>Ford Transit</option>
				<option>Ford New Focus</option>
				<option>Ford EcoSport</option>		
			</select>
			
			 
     
          <label>Hình thức thanh toán:</label>
          <input required="required" type="radio" id="under_13" value="Trả Góp" ng-model="appCtrl.userCate" name="user_age"><label style="padding-right: 20px" for="under_13" class="light">Trả Góp</label>
          <input type="radio" id="over_13" value="Trả Hết" ng-model="appCtrl.userCate" name="user_age"><label  for="over_13" class="light">Trả hết</label>
       
			
			<!--<input required="required" checked name="pay" type="radio" value="Trả Góp" ng-model="appCtrl.userCate"/>-->
			<!--<label>Trả Góp</label>-->
			<!--<input name="pay" type="radio" value="Trả Hết" ng-model="appCtrl.userCate"/>-->
			<!--<label>Trả Hết</label>-->
			
			
			<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>
			<input style="margin-top: 10px;" type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>
			
			<label for="area">Chọn khu vực:   </label>
			<select required="required" id="area" name="user_area" ng-model="appCtrl.userArea">
				<option>TP Hồ Chí Minh</option>
				<option>Bình Dương</option>
				<option>Đồng Nai</option>
				<option>Bà Rịa - Vũng Tàu</option>		
				<option>Bình Phước</option>
				<option>Bình Thuận</option>
				<option>Tây Ninh</option>
				<option>Khác</option>
			</select>
			
			
			
			<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>
			<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>

			<!--<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>-->
			 <div class="commands">
				<!--<div class="social-button facebook" ng-click="facebookLogin()"></div>-->
				<!--<div class="social-button google" ng-click="googleLogin()"></div>-->
				<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>
			</div>
			 </fieldset>
			
		</form>`,
		link: function (scope, element, attrs) {
			let {apiHost, domain} = metaService.configs;
			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;


		// 	scope.googleLogin = function () {
		// 			ants_googleAuthClick();
		// 		};
        //
		// 		scope.facebookLogin = function () {
		// 			ants_fbAuthClick('login');
		// };
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail', 'userType', 'userCate', 'userArea','userDate'];