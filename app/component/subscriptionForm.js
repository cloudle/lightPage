export default [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@' },
		template: `<div ng-class="wrapperClass">
			<div class="heading">
				<span>Gọi ngay</span> <span class="ultra strong">0906 631 691</span>
				<span>(24/7) hoặc</span> <span class="strong">ĐĂNG KÝ</span> <span>để nhận</span> <span class="strong">BÁO GIÁ</span>
				<span>từ</span> <span class="strong">CHỦ ĐẦU TƯ</span>
			</div>
			
			<input type="text" placeholder="Họ và tên*"/>
			<input type="text" placeholder="Điện thoại*"/>
			<input type="text" placeholder="Email (không bắt buộc)"/>
			<textarea rows="4" placeholder="Nội dung chi tiết"></textarea>
			
			<div class="submit">ĐĂNG KÝ NGAY</div>
		</div>`,
		link: function (scope, element, attrs) {

		}
	}
}]