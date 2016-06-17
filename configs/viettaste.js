module.exports = {
	domain: "viettaste.vn",
	siteName: "Viettaste",
	siteFav: "images/anphaland_logo.png",
	serverPort: 7026,
	production: false,
	apiHost: "http://103.56.157.66/realestate",
	scriptPatch: "./app/patches/anphaland.js",
	cssPatch: "./app/style/patches/anphaland.scss",
	googleAnalyticId: "",
	facebookAppId: "",
	facebookPixelId: "",
	antsSiteId: "",
	antsRegisterGoalId: "",
	antsConversionId: "",
	translation: {
		hotline: "098 113 8333",
		vietnamese: {
			register: "LIÊN HỆ",
			news: 'TIN TỨC',
			registerTitleHead: `
				<span>Liên hệ chúng tôi</span>
				<br>
				<span>Gọi: </span>`,
			registerTitleTail: `
				<br>
				<span> hoặc để lại thông tin</span>`
		}
	}
};