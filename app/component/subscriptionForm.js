export default ['$http', function ($http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@' },
		template: `<form ng-class="wrapperClass" ng-submit="submit($event)">
			<div class="heading">
				<span>Gọi ngay</span> <span class="ultra strong">0906 631 691</span>
				<span>(24/7) hoặc</span> <span class="strong">ĐĂNG KÝ</span> <span>để nhận</span> <span class="strong">BÁO GIÁ</span>
				<span>từ</span> <span class="strong">CHỦ ĐẦU TƯ</span>
			</div>
			
			<input type="text" placeholder="Họ và tên*" ng-model="userName"/>
			<input type="text" placeholder="Điện thoại*" ng-model="userPhone"/>
			<input type="text" placeholder="Email (không bắt buộc)" ng-model="userEmail"/>
			<!--<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>-->
			
			<div class="commands">
				<button type="submit" class="submit">ĐĂNG KÝ NGAY</button>
				<div class="social-button facebook" ng-click="facebookLogin()"></div>
				<div class="social-button google" ng-click="googleLogin()"></div>
			</div>

		</form>`,
		link: function (scope, element, attrs) {
			scope.resetForm = () => {
				scope.userName = "";
				scope.userPhone = "";
				scope.userEmail = "";
			};

			scope.submit = (event) => {
				event.preventDefault();

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
				adx_analytic.trackingGoal('578664668', 1, 'event');
				//Send form information to Ants!
				ants_userInfoListener(formData, false, true);
				//Send form to Twin's server!
				$http.get('http://128.199.227.132/customer/insert/json', {
					params: formData
				}).success(data => {
					console.log(data);
					scope.$parent.appCtrl.subscriptionPopup = false;
					scope.resetForm();
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