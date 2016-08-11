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
			
			<!--<input required="required" checked name="pay" type="radio" value="Trả Góp" ng-model="appCtrl.userCate"/>-->
			<!--<label>Trả Góp</label>-->
			<!--<input name="pay" type="radio" value="Trả Hết" ng-model="appCtrl.userCate"/>-->
			<!--<label>Trả Hết</label>-->
			
			
			<div class="error-row" ng-bind="appCtrl.userPhoneError" ng-if="appCtrl.userPhoneError"></div>
			<input type="text" placeholder="{{$root.localization.phonePlaceholder}}" ng-model="appCtrl.userPhone"/>
			
			<label for="area">Chọn khu vực:   </label>
			<select required="required" id="area" name="user_area" ng-model="appCtrl.userArea">
				<option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
				<option>Bình Dương</option>
				<option>Đồng Nai</option>
				<option>Bà Rịa - Vũng Tàu</option>		
				<option>Bình Phước</option>
				<option>Bình Thuận</option>
				<option>Tây Ninh</option>
				<option>Khác</option>
			</select>
			
			<label for="date">Ngày lái thử:   </label>
			<input ng-model="appCtrl.userDate" type="date"/>
			
			<input type="text" placeholder="{{$root.localization.emailPlaceholder}}" ng-model="appCtrl.userEmail"/>
			<div class="error-row" ng-bind="appCtrl.userEmailError" ng-if="appCtrl.userEmailError"></div>
            <div class="commands">
				<!--<div class="social-button facebook" ng-click="facebookLogin()"></div>-->
				<!--<div class="social-button google" ng-click="googleLogin()"></div>-->
				<button type="submit" class="submit" ng-bind="submitText || $root.localization.send"></button>
			</div>
			<!--<textarea rows="4" placeholder="{{$root.localization.notePlaceholder}}" ng-model="appCtrl.userNote"></textarea>-->
			 </fieldset>
			
		</form>`,
        link: function (scope, element, attrs) {
            let {apiHost, domain} = metaService.configs;
            scope.configs = metaService.configs;
            scope.appCtrl = $rootScope.appCtrl;
            scope.submit = $rootScope.submitModal;


            // scope.googleLogin = function () {
            //     ants_googleAuthClick();
            // };
            //
            // scope.facebookLogin = function () {
            //     ants_fbAuthClick('login');
            // };
        }
    }
}]

var fields = ['userName', 'userPhone','userEmail', 'userType', 'userCate', 'userArea','userDate'];