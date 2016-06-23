module.exports = {
	domain: "viettaste.vn",
	siteName: "Viettaste",
	siteFav: "images/viettaste_favicon.png",
	serverPort: 7026,
	production: true,
	apiHost: "http://103.56.157.66/realestate",
	// scriptPatch: "./app/patches/viettaste.js",
	cssPatch: "./app/style/patches/viettaste.scss",
	disableZopim: true,
	googleAnalyticId: "",
	facebookAppId: "",
	facebookPixelId: "",
	antsSiteId: "",
	antsRegisterGoalId: "",
	antsConversionId: "",
	translation: {
		hotline: "0932 662 068",
		vietnamese: {
			register: "LIÊN HỆ",
			news: 'TIN TỨC',
			registerTitleHead: `
				<span>Liên hệ chúng tôi</span>
				<br>
				<span>Gọi: </span>`,
			registerTitleTail: `
				<br>
				<span> hoặc để lại thông tin</span>`,
			designedBy: '',
			designCompany: `
				<a style="text-decoration:none;color:#ffb736;" target="_blank">
				© Copyright VIETTASTE. All rights reserved</a>`
		}
	}
};