export default ['$http', function ($http) {
	return {
		restrict: 'E',
		replace: true,
		scope: { columns: '=' },
		template: `<div id="footer" class="footer">
			<div class="content-wrapper">
				<div class="columns">
					<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>
			</div>
			<div class="content-wrapper">
				<div class="copyright">
					<span>Designed by</span>
				 	<a href="http://twin.vn" style="text-decoration:none;color:#2EB3D3;" target="_blank">TWIN Software Solutions</a>
				</div>
			</div>
		</div>`,
		link: function (scope, element, attrs) {

		}
	}
}]