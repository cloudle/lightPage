export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {modal: '@', submitText: '@'},
        template: `<form>
                    <div class="heading">
				<span ng-bind-html="$root.localization.cardTitleHead | unsafe"></span>
				<a style="font-weight: bold; text-decoration: none;" href="tel:0938110139" ng-click="appCtrl.convertcall();">
				<span style="color:#fa8322;" class="ultra strong" ng-bind="configs.translation.hotline"></span>
				</a>
				<span ng-bind-html="$root.localization.cardTitleTail | unsafe"></span>
				
			</div>  
                </form>
        `,

        link: function (scope, element, attrs) {
            let {apiHost, domain} = metaService.configs;
            scope.configs = metaService.configs;
            scope.appCtrl = $rootScope.appCtrl;
            }
    }
}]