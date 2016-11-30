module.exports = {
    domain: "goldviewquan4.com",
    siteName: "Gold View Quan 4",
    siteFav: "images/goldviewfavicon.png",
    serverPort: 7036,
    production: true,
    cssPatch: "./app/style/patches/goldviewquan4.scss",
    facebookPixelId: "",
    googleAnalyticId: "UA-88118502-1",
    iframeCodeNew: "run",
    // googleConversionHungPhatSilverStar: "871639554",
    // antsInsightHungPhatSilverStar: "580521513",
    // antsRegisterGoalId: "580521516",
    // marquee: {
    // 	etext0: "Đặc biệt mở bán ",
    // 	etext1: "1 NGÀY DUY NHẤT 23/7 ",
    // 	etext2: "cho vị trí 1, 2, 23 được ",
    // 	etext3: "TẶNG 2 LƯỢNG VÀNG",
    // 	img: "images/1-luong-vang.gif"
    // },
    // apiHost: "http://103.56.157.66/realestate",K
    // apiHost: "http://cms.twin.vn/",
    apiHost: "http://cmsbackend.twin.vn/",
    // languages: [
    // 	{lang: "vietnamese", id: 1, display: "Tiếng Việt"},
    // 	{lang: "english", id: 2, display: "한국의"}
    // ],
    translation: {
        hotline: "0934 027 558",
        vietnamese:{
            registerTitleTail: `<span class="ultra strong" ng-bind="configs.translation.hotline"></span>
			<span> hoặc gửi thông tin để</span> 
			<span class="strong">NHẬN BÁO GIÁ</span>`

        }
    }
};