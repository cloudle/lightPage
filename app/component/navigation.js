export default ['$state', function ($state) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ready: '=',
			burgerActive: '=',
			links: '='
		},
		template: `<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">
			<div class="content-wrapper">
				<div class="site-logo" ui-sref="home"></div>
				
				<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>
				<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>
				
				<div class="navigation-menu">
					<navigation-link instance="link" ng-repeat="link in links"></navigation-link>
				</div>
			</div>
			
			<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">
				<div class="backdrop" ng-click="toggleBurger()">
					
				</div>
				<div class="burger-menu">
					<!--<div class="menu-heading" ng-click="toggleBurger()"></div>-->
					<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">
						<div class="menu-item" ng-bind="item.name" ng-click="parentLinkNavigate(item)"></div>
						<div class="sub-menus" ng-if="item.children">
							<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.name" ng-repeat="child in item.children"
								ui-sref="page({id: child.page_id})" ng-click="toggleBurger()"></div>
						</div>
					</div>
				</div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.page_id) {
					$state.go('page', {id: instance.page_id});
				}
				else if (instance.children[0] && instance.children[0].page_id) {
					$state.go('page', {id: instance.children[0].page_id});
				}

				scope.toggleBurger();
			}
		}
	}
}];