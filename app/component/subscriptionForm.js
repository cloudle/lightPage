import { isEmailValid } from '../utils/helper';

export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: `
			<div id="iframeTwinGAGoal" style="height:100%;"></div>`,
		link: function (scope, element, attrs) {
			let {apiHost, domain} = metaService.configs;
			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};
			console.log(element, );

			ga(function (tracker) {
				var clientId = tracker.get('clientId');
				element.context.innerHTML = `<iframe style='border:none; width: 100%; height: 100%; overflow-x: hidden; overflow-y: hidden; -ms-overflow-style: scrollbar' src='https://crm.twin.vn/FormManagement/Embed?code=TForm0006&clientId=${clientId}'></iframe>`
			});


			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail'];