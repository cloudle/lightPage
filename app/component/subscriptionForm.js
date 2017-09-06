import { isEmailValid } from '../utils/helper';

export default ['$rootScope', '$http', 'metaService', function ($rootScope, $http, metaService) {
	return {
		restrict: 'E',
		replace: true,
		scope: { wrapperClass: '@', submitText: '@' },
		template: `
			<div style="height:100%;">
				<iframe id="iframeTwinGAGoal"  style='border:none; width: 100%; height: 100%; overflow-x: hidden; overflow-y: hidden; -ms-overflow-style: scrollbar' src='https://crm.twin.vn/twForm/20170903223844n6TZg'></iframe>
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
					var trackingId = tracker.get('clientId');
					var gaId = ga.getAll()[0].b.data.values[':trackingId'];
					var location = window.location.href;



					element.context.children[0].contentWindow.postMessage({
						"action": "GA_Data",
						"gaId": gaId,
						"trackingId": trackingId,
						"location": location
					}, "*");

					window.__lc = window.__lc || {};
					window.__lc.license = 9045060;
					window.__lc.params = [
						{ name: 'gaId', value: gaId },
						{ name: 'trackingId', value: trackingId },
						{ name: 'location', value: location }
					];
					(function() {
						var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
						lc.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
						var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
					})();
				});
			},false);

			scope.facebookLogin = function () {
				ants_fbAuthClick('login');
			};
		}
	}
}]

var fields = ['userName', 'userPhone','userEmail'];