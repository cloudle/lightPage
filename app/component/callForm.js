import { isEmailValid } from '../utils/helper';

export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: `
			<div id="iframeTwinCall" style="height:100%;"></div>
		`,
		link: function (scope, element, attrs) {
			let {apiHost, domain} = metaService.configs;
			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};

			ga(function (tracker) {
				var clientId = tracker.get('clientId');
				var trackingId = tracker.get('clientId');
				var gaId = ga.getAll()[0].b.data.values[':trackingId'];
				var location = window.location.href;

				element.context.innerHTML = `<iframe src='http://demo.cloudteam.vn/googleapi/ifr/index.html?trackingId=${trackingId}&gaId=${gaId}&location=${encodeURIComponent(location)}' width="120px" height="50px" style="width: 300px;height: 100px;border: none;"></iframe>`
			});

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail'];
