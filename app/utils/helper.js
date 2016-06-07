export const apiHost = 'http://128.199.227.132';//'rivercity99.vn';//http://103.56.157.66/realestate';
export const registerFields = ['userName', 'userPhone','userEmail', 'userNote'];
export const languages = [
	{lang: "vietnamese", id: 1, display: "Tiếng Việt"},
	// {lang: "english", id: 2, display: "English"}
];

export let localization = {
	vietnamese: {
		register: "ĐĂNG KÝ",
		news: "TIN TỨC",
		registerTitleHead: `<span>Gọi </span>`,
		registerTitleTail: ` 
			<span class="ultra strong" ng-bind="configs.translation.hotline"></span>
			<span> hoặc gửi thông tin để nhận</span> 
			<span class="strong">BÁO GIÁ</span>
			<span>từ</span> 
			<span class="strong">CHỦ ĐẦU TƯ</span>`,
		fullNamePlaceholder: "Họ và tên*",
		phonePlaceholder: "Điện thoại*",
		emailPlaceholder: "Email (không bắt buộc)",
		notePlaceholder: "Ghi chú",
		send: "Gửi",
		designedBy: "Thiết kể bởi"
	},
	english: {
		register: "SUBSCRIBE",
		news: "NEWS",
		registerTitleHead: `<span>Call </span>`,
		registerTitleTail: ` 
			<span class="ultra strong" ng-bind="configs.translation.hotline"></span>
			<span> or subscribe to receive </span> 
			<span class="strong">QUOTATION</span>
			<span>from</span> 
			<span class="strong">INVESTOR</span>`,
		fullNamePlaceholder: "Full name*",
		phonePlaceholder: "Phone*",
		emailPlaceholder: "Email (optional)",
		notePlaceholder: "Note..",
		send: "Send",
		designedBy: "Designed by"
	}
};

const emptyFunction = function () {};

export function fixAnalyticMissing () {
	if (!global.ga) global.ga = emptyFunction;
	if (!global.fbq) global.fbq = emptyFunction;
	if (!global.ants_userInfoListener) global.ants_userInfoListener = emptyFunction;
	if (!global.ants_analytic) global.ants_analytic = [];
}

export function find(sources, predicate) {
	var searchKey, searchValue;
	for (let key of Object.keys(predicate)) {
		searchKey = key;
		searchValue = predicate[key];
	}

	for (let instance of sources) {
		if (instance[searchKey] === searchValue) return instance;
	}
}

export function findParentMenuByAlias (alias, links) {
	for (let group of links) {
		if (group.alias === alias) return group;
		if (group.children) {
			for (let child of group.children) {
				if (child.alias === alias) return group;
			}
		}
	}
}

export function isEmailValid (email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

export var preloadResolves = {
	appConfig: function(configService, calculatorService) {
		return configService.promise;
	}
};

export function generateNumberUUID (length) {
	var result = "";
	for(let i = 0; i < length; i++) {
		result += [0,1,2,3,4,5,6,7,8,9][Math.floor(Math.random()*9)];
	}

	return result
}

export function safeRange (value, min, max) {
	if (min != undefined && value <= min) return min;
	if (max != undefined && value >= max) return max;
	return value;
}

String.prototype.width = function(font) {
	var f = font || '12px arial',
		o = $('<div>' + this + '</div>')
			.css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
			.appendTo($('body')),
		w = o.width();

	o.remove();

	return w;
};

global.uuid = generateNumberUUID;