export default ['$rootScope', '$http', function ($rootScope, $http) {
	return {
		restrict: 'E',
		replace: true,
		template: `<div class="section-canvas top-separated news-area">
			<div class="content-wrapper">
				<div class="light-heading section"><span class="highlight">TIN TỨC</span></div>
				<div class="light-row quatro">
					<div class="column light-column click-able" ng-repeat="newsItem in news" ui-sref="newsItem({alias: newsItem.Post.alias})">
						<div class="title" ng-bind="newsItem.Post.title"></div>
						<div class="thumb-image-wrapper">
							<div class="image image-hover-effect-zoom-120" ng-style="{'background-image': 'url('+newsItem.Post.image+')'}"></div>
						</div>
						<div class="description" ng-bind="newsItem.Post.description"></div>
					</div>
				</div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
		}
	}
}]