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
			
			<button type="submit" class="submit">ĐĂNG KÝ NGAY</button>
		</form>`,
		link: function (scope, element, attrs) {
			scope.resetForm = () => {
				scope.userName = "";
				scope.userPhone = "";
				scope.userEmail = "";
			};

			scope.submit = (event) => {
				event.preventDefault();

				var formData = {
					// site: location.host,
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
		}
	}
}]