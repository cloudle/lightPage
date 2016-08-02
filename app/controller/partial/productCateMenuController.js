export class productCateMenuController {
    static $inject = ['$rootScope', '$scope', '$timeout'];

    subMenus = subMenus;
    constructor ($rootScope, $scope, $timeout) {
        this.name = "Cloud";
        this.$timeout = $timeout;
        console.log(this.subMenus);
    }

    scrollTo (elementId) {
        this.$timeout(() => {
            let scrollOffset = angular.element(`#${elementId}`).offset().top - 50;
            TweenLite.to(window, 0.5, {scrollTo:{y: scrollOffset}, ease:Power2.easeOut});
        }, 800);
    }
}

const subMenus = [
    { title: 'Giới thiệu chung', contentId: "gioithieuchung" },
    { title: 'Màu sắc', contentId: "mausac"  },
    { title: 'Thông số kỹ thuật', contentId: "thongsokythuat"  },
    { title: 'Phiên bản', contentId: "phienban" },
]