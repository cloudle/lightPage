module.exports = {
	domain: "anphaland.com.vn",
	siteName: "Anphaland",
	siteFav: "images/logo_anphaland_new.png",
	serverPort: 7024,
	production: true,
	// apiHost: "http://103.56.157.66/realestate",
	// apiHost: "http://125.212.248.9/realestate",
	apiHost: "http://cmsbackend.twin.vn/",
	scriptPatch: "./app/patches/anphaland.js",
	cssPatch: "./app/style/patches/anphaland.scss",
	googleAnalyticId: "UA-77901914-4",
	facebookAppId: "",
	facebookPixelId: "",
	antsSiteId: "579648082",
	antsRegisterGoalId: "579648085",
	antsConversionId: "",
	translation: {
		hotline: "098 113 8333",
		vietnamese: {
			designCompany: `<a style="text-decoration:none;color:#2EB3D3;" target="_blank">TWIN Software Solutions</a>`,

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