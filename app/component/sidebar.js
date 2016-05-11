export default [function () {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: { enable: '=' },
		template: `<div class="sidebar">
			<div class="small-banner"></div>
		</div>`,
		link: function (scope, element, attrs) {

		}
	}
}]