export class childproductController {
  static $inject = ['$rootScope', '$scope', '$window', '$http',  '$state', 'metaService'];

  constructor ($rootScope, $scope, $window, $http, $state, metaService) {
    let { apiHost, domain } = metaService.configs;

    this.modalOneActive = false;
    this.modalTwoActive = false;
    this.modalThreeActive = false;

    //Tracking code..
    ga('send', 'pageview');
    fbq('track', "PageView");

    this.loadData = () => {
      $rootScope.activeGroup = null;

      this.pageAlias = $state.params.alias; $window.scrollTo(0, 0);
      this.singleMode = this.pageAlias !== '';

      if (this.singleMode) {
        $http.get(`${apiHost}/post/get/json`, {
          params: { domain, alias: this.pageAlias , lang: $rootScope.activeLanguage.id }
        }).success(data => {
          fbq('track', 'ViewContent');
          if (data.results[0]) {
            this.activeNews = data.results[0].Post;
          }
        })

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordfiesta', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordFie = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordranger', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordRan = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordeverest', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordEve = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordecosport', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordEco = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordtransit', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordTra = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordfocus', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordFoc = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordexplorer', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordExp = data.results;
        });

      } else {
        $http.get(`${apiHost}/banner/get/json`, {
          params: { domain, type: 'news', lang: $rootScope.activeLanguage.id }
        }).success(data => {
          fbq('track', 'ViewContent');
          this.allNews = data.results;


        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordecosport', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordEcosport = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordranger', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordRanger = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordeverest', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordEverest = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordfiesta', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordFiesta = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordtransit', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordTransit = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordfocus', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordFocus = data.results;
        });

        $http.get(`${apiHost}/banner/get/json`, {
          params: {domain, type: 'fordexplorer', lang: $rootScope.activeLanguage.id}
        }).success(data => {
          fbq('track', 'ViewContent');

          this.allfordExplorer = data.results;
        });
      }
    }
    this.loadData();
    $scope.$watch('activeLanguage', () => {

      this.loadData();
    });
  }
}