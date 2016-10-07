module.exports = {
  domain: "hungphatsilverstar.com",
  siteName: "Hưng Phát Silver Star",
  siteFav: "images/vaviconhungphat.png",
  serverPort: 7034,
  production: false,
  cssPatch: "./app/style/patches/hungphatsilverstar.scss",
  // marquee: {
  // 	etext0: "Đặc biệt mở bán ",
  // 	etext1: "1 NGÀY DUY NHẤT 23/7 ",
  // 	etext2: "cho vị trí 1, 2, 23 được ",
  // 	etext3: "TẶNG 2 LƯỢNG VÀNG",
  // 	img: "images/1-luong-vang.gif"
  // },
  apiHost: "http://103.56.157.66/realestate",
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