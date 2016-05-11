export default [function () {
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
			<textarea rows="4" placeholder="Nội dung chi tiết" ng-model="userNote"></textarea>
			
			<button type="submit" class="submit">ĐĂNG KÝ NGAY</button>
		</form>`,
		link: function (scope, element, attrs) {
			scope.submit = (event) => {
				event.preventDefault();

				//Fire Ants trackingGoal hook!
				adx_analytic.trackingGoal('578664668', 1, 'event');
				//Send form information to Ants!
				var formData = {
					name: scope.userName,
					phone: scope.userPhone,
					email: scope.userEmail,
					description: scope.userNote
				};

				ants_userInfoListener(formData, false, true);
			}
		}
	}
}]