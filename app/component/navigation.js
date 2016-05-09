export default [function () {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			burgerActive: '='
		},
		template: `<div class="navigation-wrapper" ng-class="{burgering: burgerActive}">
			<div class="content-wrapper">
				<div class="site-logo"></div>
				
				<div class="burger-menu-activator icon-action-subject" ng-click="toggleBurger()"></div>
				<div class="subscription-activator" ng-click="togglePopup()">ĐĂNG KÝ</div>
				
				<div class="navigation-menu">
					<navigation-link instance="link" ng-repeat="link in links"></navigation-link>
				</div>
			</div>
			
			<div class="burger-menu-wrapper" ng-class="{active: burgerActive}">
				<div class="backdrop" ng-click="toggleBurger()">
					
				</div>
				<div class="burger-menu">
					<div class="menu-heading" ng-click="toggleBurger()"></div>
					<div class="menu-item-wrapper" ng-class="{active: item.active}" ng-repeat="item in links">
						<div class="menu-item" ng-bind="item.title"></div>
						<div class="sub-menus" ng-if="item.children">
							<div class="sub-menu sub-link icon-av-play-arrow" ng-bind="child.title" ng-repeat="child in item.children"></div>
						</div>
					</div>
				</div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.links = [{
				title: 'trang chủ',
				active: true
			}, {
				title: 'vị trí và tiện ích',
				children: [
					{title: 'vị trí'},
					{title: 'tiện ích khu vực'},
					{title: 'tiện ích nội khu'}
				]
			}, {
				title: 'ưu đãi thanh toán'
			}, {
				title: 'mặt bằng'
			}];

			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
			};
		}
	}
}];