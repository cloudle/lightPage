import { languages, localization } from './utils/helper';

export default ['$rootScope', '$http', '$timeout', function ($rootScope, $http, $timeout ) {
	this.ready = false;

	this.loadMenu = (configs, configResolve, navigationResolve) => {
		let {apiHost, domain} = configs || this.configs;

		$http.get(`${apiHost}/menu/get/json`, {
			params: { domain, lang: $rootScope.activeLanguage.id }
		}).success((data) => {
			this.links = data.results;

			if (navigationResolve) navigationResolve(this.links);
			if (configResolve) {
				configResolve(this.configs);
			}

			$timeout(() => {
				$rootScope.$broadcast('metaServiceReady');
				this.ready = true;
			}, 0);
		});
	};

	this.promise = new Promise((configResolve, reject) => {
		$rootScope.languages = languages;
		$rootScope.activeLanguage = languages[0];

		$rootScope.localization = localization[$rootScope.activeLanguage.lang];
		$rootScope.$watch('activeLanguage', () => {
			$rootScope.localization = localization[$rootScope.activeLanguage.lang];
			if ($rootScope.configs) this.loadMenu($rootScope.configs);
		});

		$rootScope.changeLanguage = (language) => {
			$rootScope.activeLanguage = language;
		};

		$http.get('/configs').success((data) => {
			data.domain = data.domain || location.host;
			let configs = data, { apiHost, domain } = configs;
			this.configs = configs;
			$rootScope.configs = configs;
			//Override translation (if possible)..
			languages.forEach(({lang}) => {
				if (configs.translation[lang]) {
					for (let key of Object.keys(configs.translation[lang])) {
						localization[lang][key] = configs.translation[lang][key];
					}
				}
			});

			if (configs.languages) { $rootScope.languages = configs.languages; }



			new Promise((navigationResolve, reject) => {
				this.loadMenu(configs, configResolve, navigationResolve)
			});
		});
	});
}];