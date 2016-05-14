export default ['$http', function ($http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { columns: '=' },
		template: `<div class="footer">
			<div class="content-wrapper">
				<div class="columns">
					<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>
					<!--<div class="col">-->
						<!--<div class="heading">LIÊN HỆ</div>-->
						<!--<div>Liên hệ tham quan dự án và chọn những vị trí đẹp nhất ngay từ bây giờ, Chúng tôi sẽ hỗ trợ nhiệt tình cho Quý Khách 24/7.</div>-->
						<!---->
					<!--</div>-->
		
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