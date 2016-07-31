export default ['$rootScope', '$state', 'metaService', function ($rootScope, $state, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ready: '=',
			burgerActive: '='
		},
		template: `<div class="navigation-wrapper" ng-class="{burgering: burgerActive, ready: ready}">
			<div class="content-wrapper">
				<div class="site-logo" ui-sref="home"></div>
				
				<div class="burger-menu-activator icon-navigation-menu" ng-click="toggleBurger()"></div>
				<!--<div class="subscription-activator" ng-click="togglePopup()" ng-bind="$root.localization.register"></div>-->
				<!--<div class="subscription-activator" ui-sref="news({alias: 'lien-he'})" ng-bind="$root.localization.register"></div>-->
				<div class="navigation-menu">
					<navigation-link instance="link" ng-repeat="link in links"></navigation-link>
					<!--<div class="navigation-link" ng-class="{active: childproductActiveClass()}">-->
						<!--<div class="parent-link" ui-sref="home" ng-bind="$root.localization.home"></div>-->
					<!--</div>-->
					<div class="navigation-link" ng-class="{active: productActiveClass()}">
						<div class="parent-link" ui-sref="product" ng-bind="$root.localization.product"></div>
					</div>
					<div class="navigation-link" ng-class="{active: newsActiveClass()}">
						<div class="parent-link" ui-sref="news" ng-bind="$root.localization.news"></div>
					</div>
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
								ui-sref="page({alias: child.alias})" ng-click="toggleBurger()"></div>
						</div>
					</div>
					<div class="menu-item-wrapper" ng-class="{active: productActiveClass()}">
						<div class="menu-item" ui-sref="product" ng-click="toggleBurger()" ng-bind="$root.localization.product"></div>
					</div>
					<div class="menu-item-wrapper" ng-class="{active: newsActiveClass()}">
						<div class="menu-item" ui-sref="news" ng-click="toggleBurger()" ng-bind="$root.localization.news"></div>
						
					</div>
				</div>
			</div>
		</div>`,
		link: (scope, element, attrs) => {
			scope.links = metaService.links;

			scope.toggleBurger = function () {
				scope.burgerActive = !scope.burgerActive;
			};

			scope.togglePopup = function () {
				scope.$parent.appCtrl.subscriptionPopup = !scope.$parent.appCtrl.subscriptionPopup;
			};

			scope.toggleModalPopup = function () {
				scope.$parent.appCtrl.modalPopup = !scope.$parent.appCtrl.modalPopup;
			};

			scope.parentLinkNavigate = function (instance) {
				if (instance.alias) {
					$state.go('page', {alias: instance.alias});
				}
				else if (instance.children[0] && instance.children[0].alias) {
					$state.go('page', {alias: instance.children[0].alias});
				}

				scope.toggleBurger();
			};

			scope.newsActiveClass = () => {
				return $state.current.name === 'news';
			}
			scope.productActiveClass = () => {
				return $state.current.name === 'product';
			}
			scope.childproductActiveClass = () => {
				return $state.current.name === 'ford';
			}
		}
	}
}];