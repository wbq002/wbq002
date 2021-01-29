imgurl = "https://wbq002.github.io/wbq002/wz/white.jpg";
var desc="";
var title=content;
document.addEventListener('touchmove', function (e) {
e.preventDefault()
}, false);document.title = " ";
document.getElementsByTagName('title')[0].innerHTML = '&zwj;';
wx.config({
			debug: false,
			appId: 'wxf3e240441e7829c3',
timestamp:1517888221,
nonceStr: 'yLtpcdt5MQ59Hfox',
signature: '5778a00a7152438d8c9651d9e79d24614788ea93',
jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
});

wx.ready(function() {

	var shareData = {
		'title':title, //分享标题
		'desc': desc, //分享描述
		'link': '', //分享链接
		'imgUrl': imgurl, //分享图标
		'type': '', //分享类型,music、video或link，不填默认为link
		'dataUrl': '' // 如果type是music或video，则要提供数据链接，默认为空
	};
	wx.onMenuShareTimeline({
		title: title,
		link: "",
		desc:desc, //分享描述
		imgUrl: imgurl,
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}

	});
	wx.onMenuShareAppMessage({
		title:title,
		link: "",
		desc:desc, //分享描述
		imgUrl: imgurl,
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}
	});
	wx.onMenuShareQQ({
		title:title,
		link: "",
		desc:desc, //分享描述
		imgUrl: imgurl,
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}
	});
	wx.onMenuShareWeibo({
		title:title,
		link: "",
		desc:desc, //分享描述
		imgUrl: imgurl,
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}
	});
	wx.onMenuShareQZone({
		title:title,
		link: "",
		desc:desc, //分享描述
		imgUrl: imgurl,
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}
	});

});