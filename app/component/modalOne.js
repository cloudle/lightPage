export default [function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: { enable: '=' },
        template: `<div class="modalOne-backdrop" ng-class="{active: enable}" ng-click="closeModal()">
			<div class="modalOne-wrapper" ng-click="toggle($event)">
			    <ng-transclude></ng-transclude>
            </div>
		</div>`,
        link: function (scope, element, attrs) {
            scope.closeModal = () => {
                scope.enable = false;
            }

            scope.toggle = (e) => {
                e.stopPropagation();
            }
        }
    }
}]