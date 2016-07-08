module.exports = {
	domain: "anphaland.com.vn",
	siteName: "Anphaland",
	siteFav: "images/logo_anphaland_new.png",
	serverPort: 7024,
	production: true,
	apiHost: "http://103.56.157.66/realestate",
	scriptPatch: "./app/patches/anphaland.js",
	cssPatch: "./app/style/patches/anphaland.scss",
	googleAnalyticId: "UA-77901914-4",
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