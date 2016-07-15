module.exports = {
	domain: "urv.vn",
	siteName: "URV",
	siteFav: "images/urv-favicon.png",
	serverPort: 7022,
	production: true,
	marquee: {
		etext0: "Đặc biệt mở bán ",
		etext1: "1 NGÀY DUY NHẤT 23/7 ",
		etext2: "cho vị trí 1, 2, 23 được ",
		etext3: "TẶNG 2 LƯỢNG VÀNG",
		img: "images/1-luong-vang.gif"
	},
	apiHost: "http://103.56.157.66/realestate",
	cssPatch: "./app/style/patches/urv.scss",
	googleAnalyticId: "UA-77901914-3",
	facebookAppId: "",
	facebookPixelId: "",
	antsSiteId: "",
	antsRegisterGoalId: "",
	antsConversionId: "",
	ogTitle: "United Realtors Vietnam - HỆ THỐNG PHÂN PHỐI BẤT ĐỘNG SẢN SỬ DỤNG CÔNG NGHỆ VƯỢT TRỘI",
	ogImage: "https://c4.staticflickr.com/8/7425/27299346851_b454219c5a_o.jpg",
	ogDescription: `Công ty UNITED REALTORS Việt Nam tự hào ứng dụng công nghệ siêu việt, đọc hiểu nhu cầu mua nhà của khách hàng quan tâm các dự án căn hộ Hot nhất khu Nam Sài Gòn.
		Mỗi ngày hệ thống tiếp nhận hàng trăm lượt đăng ký quan tâm mua căn hộ.
		Anh chị em tư vấn viên có nhiều năm kinh nghiệm và am hiểu thị trường Quận 7 hãy liên hệ ngay với chúng tôi để được cài đặt ứng dụng & nhận khách để bán hàng.`,
	translation: {
		hotline: "0932 047 383 – 0932 047 313",
		vietnamese: {
			registerTitleTail: `
			<span class="ultra strong" ng-bind="configs.translation.hotline"></span>
			<span> hoặc gửi thông tin để</span> 
			<span class="strong">THAM GIA</span>
			<span>làm</span> 
			<span class="strong">CỘNG TÁC VIÊN</span>`
		}
	}
};