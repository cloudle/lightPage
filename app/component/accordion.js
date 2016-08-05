export default ['$rootScope', '$timeout', ($rootScope, $timeout) => {
  return {
    template: `<div class="menu-item" ng-class="wrapperClass" ng-style="{height: elementHeight+'px'}">
        <div class="title" ng-class="headingClass" ng-bind="title" ng-click="toggle()"></div>
        <ng-transclude></ng-transclude>
    </div>`,
    replace: true,
    transclude: true,
    scope: {
      wrapperClass: '@',
      headingClass: '@',
      collapse: '=',
      title: '='
    },
    link: (scope, element, attrs) => {
      let $titleElement = element.find('.title');
      //console.log($titleElement);
      scope.collapse = false;

      scope.toggle = (flag) => {
        if (flag == undefined) {
          scope.collapse = !scope.collapse;
        } else scope.collapse = flag;

        updateComponentHeight();
      }

      function updateComponentHeight () {
        scope.elementHeight = scope.collapse ? scope.originalHeight : scope.headingHeight;
      }

      $timeout(() => {
        scope.elementHeight = element.outerHeight();
        scope.headingHeight = $titleElement.outerHeight();
        scope.originalHeight = scope.elementHeight;
        updateComponentHeight();
      }, 500)
    }
  }
}]