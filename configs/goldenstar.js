module.exports = {
	domain: "goldenstar.top",
	siteName: "Golden Star",
	siteFav: "images/favicon-the-golden-star.ico",
	serverPort: 7039,
	production: true,
	cssPatch: "./app/style/patches/goldenstar.scss",
	facebookPixelId: "1762625813992970",
	// googleConversionHungPhatSilverStar: "871639554",
	// antsInsightHungPhatSilverStar: "580521513",
	// antsRegisterGoalId: "580521516",
	googleAnalyticId: "UA-35891435-16",
	// marquee: {
	// 	etext0: "Đặc biệt mở bán ",
	// 	etext1: "1 NGÀY DUY NHẤT 23/7 ",
	// 	etext2: "cho vị trí 1, 2, 23 được ",
	// 	etext3: "TẶNG 2 LƯỢNG VÀNG",
	// 	img: "images/1-luong-vang.gif"
	// },
	// apiHost: "http://103.56.157.66/realestate",
	// apiHost: "http://cms.twin.vn/",
	// apiHost: "http://cmsbackend.twin.vn/",
	apiHost: "http://backend.goldenstar.top/",
	// languages: [
	// 	{lang: "vietnamese", id: 1, display: "Tiếng Việt"},
	// 	{lang: "english", id: 2, display: "한국의"}
	// ],
	translation: {
		vietnamese:{
			registerTitleHead: `<span>Gửi thông tin để nhận</span>`,
			registerTitleTail: `<br><span style="color: #FA8322;">BÁO GIÁ CHÍNH THỨC</span>`
		}
	}
};