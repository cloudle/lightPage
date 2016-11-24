export default ['$rootScope', '$http', function ($rootScope, $http) {


	return {
		restrict: 'E',
		replace: true,
		scope: { columns: '=' },
		template: `<div id="footer" class="footer">
			<div class="content-wrapper">
				<div class="columns">
					<div class="col" ng-repeat="column in columns" ng-bind-html="column.Post.content | unsafe"></div>
				</div>
			</div>
			
			<div class="copyright">
				<div class="light-row">
					<div class="column">
						<div class="language-choice" ng-repeat="language in $root.languages" 
								 ng-class="{active: languageActive(language)}" 
								 ng-click="$root.changeLanguage(language)"
								 ng-bind="language.display"></div>
					</div>
					<!--<div class="column">-->
						<!--<span ng-bind="$root.localization.designedBy"></span>-->
						<!--<a ng-bind-html="$root.localization.designCompany | unsafe"></a>	-->
					<!--</div>-->
				</div>
			</div>
		</div>`,
		link: function (scope, element, attrs) {
			scope.languageActive = (instance) => {
				return instance.id == $rootScope.activeLanguage.id;
			};
		}
	}
}]