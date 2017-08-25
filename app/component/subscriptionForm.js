import { isEmailValid } from '../utils/helper';

export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: `
			<div style="height:100%;">
				<iframe id="iframeTwinGAGoal"  style='border:none; width: 100%; height: 100%; overflow-x: hidden; overflow-y: hidden; -ms-overflow-style: scrollbar' src='https://crm.twin.vn/FormManagement/Share?code=TForm0006'></iframe>
			</div>
		`,
		link: function (scope, element, attrs) {
			let {apiHost, domain} = metaService.configs;
			scope.configs = metaService.configs;
			scope.appCtrl = $rootScope.appCtrl;

			scope.submit = $rootScope.submitRegister;

			scope.googleLogin = function () {
				ants_googleAuthClick();
			};

			element.context.children[0].addEventListener("load",function(){
				ga(function (tracker) {
					var clientId = tracker.get('clientId');
					element.context.children[0].contentWindow.postMessage({"action":"GA_Client_ID","gaCid": clientId ,"href":window.location.href}, "*");
				});
			},false);

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail'];