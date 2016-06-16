module.exports = {
	domain: "xedaukeonhapkhau.vn",
	siteName: "Xedaukeo",
	siteFav: "images/xedaukeo_favicon.png",
	serverPort: 7025,
	production: true,
	apiHost: "http://103.56.157.66/realestate",
	// scriptPatch: "./app/patches/anphaland.js",
	cssPatch: "./app/style/patches/xedaukeo.scss",
	googleAnalyticId: "",
	facebookAppId: "",
	facebookPixelId: "",
	antsSiteId: "",
	antsRegisterGoalId: "",
	antsConversionId: "",
	translation: {
		hotline: "0932 662 068",
		vietnamese: {
			news: 'TIN TỨC',
			product: 'SẢN PHẨM',
			registerTitleHead: `
				<span>Liên hệ chúng tôi</span>
				<br>
				<span>Gọi: </span>`,
			registerTitleTail: `
				<br>
				<span>Hoặc để lại thông tin</span>`
		}
	}
};