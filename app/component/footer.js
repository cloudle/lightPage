export default [function () {
	return {
		restrict: 'E',
		replace: true,
		template: `<div class="footer">
			<div class="content-wrapper">
				<div class="columns">
					<div class="col">
						<div class="heading">CHỦ ĐẦU TƯ</div>
						<ul>
							<li>An Gia Investment</li>
							<li>Creed Group Nhật Bản</li>
							<li>CTCP PT BĐS Phát Đạt</li>
						</ul>
					</div>
					<div class="col">
						<div class="heading">LIÊN HỆ</div>
						<div>Liên hệ tham quan dự án và chọn những vị trí đẹp nhất ngay từ bây giờ, Chúng tôi sẽ hỗ trợ nhiệt tình cho Quý Khách 24/7.</div>
						
						<div class="fb-like" data-href="https://www.facebook.com/rivercity99/" data-width="100" data-layout="standard" data-action="like" data-show-faces="true" data-share="true" data-colorscheme="dark"></div>
					</div>
		
				<!--<div class="footer-links">-->
					<!--<div class="link-item">HOME</div>-->
					<!--<div class="link-item">PORTFOLIO</div>-->
					<!--<div class="link-item">SERVICES</div>-->
					<!--<div class="link-item">TEAM MEMBER</div>-->
					<!--<div class="link-item">CLIENT</div>-->
					<!--<div class="link-item">CONTACT</div>-->
				<!--</div>-->
			</div>
		</div>`,
		link: function (scope, element, attrs) {

		}
	}
}]