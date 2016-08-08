import { languages, localization } from './utils/helper';

export default ['$rootScope', '$http', '$timeout', function ($rootScope, $http, $timeout) {
	this.ready = false;

	this.promise = new Promise((configResolve, reject) => {
		$rootScope.languages = languages;
		$rootScope.activeLanguage = languages[0];

		$rootScope.localization = localization[$rootScope.activeLanguage.lang];
		$rootScope.$watch('activeLanguage', () => {
			$rootScope.localization = localization[$rootScope.activeLanguage.lang];
			//console.log($rootScope.localization);
		});

		$rootScope.changeLanguage = (language) => {
			$rootScope.activeLanguage = language;
		};

		$http.get('/configs').success((data) => {
			data.domain = data.domain || location.host;
			let configs = data, { apiHost, domain } = configs;
			//Override translation (if possible)..
			languages.forEach(({lang}) => {
				if (configs.translation[lang]) {
					for (let key of Object.keys(configs.translation[lang])) {
						localization[lang][key] = configs.translation[lang][key];
					}
				}
			});

			new Promise((navigationResolve, reject) => {
				$http.get(`${apiHost}/menu/get/json`, {
					params: { domain, lang: $rootScope.activeLanguage.id }
				}).success((data) => {
					this.links = data.results; this.configs = configs;
					navigationResolve(this.links);
					configResolve(this.configs);
					//console.log(this.links);
					$timeout(() => {
						$rootScope.$broadcast('metaServiceReady');
						this.ready = true;
					},0);
				});
			});
		});
	});
}];