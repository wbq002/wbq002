imgurl = "http://wechat.myjnxj.top/static/img/white/white.jpg";
var desc="";
var title=content;
document.addEventListener("touchmove", function (a) {
    a.preventDefault()
}, !1);
document.title = " ";
document.getElementsByTagName("title")[0].innerHTML = "&zwj;";
wx.config({
    debug: !1,
    appId: "wxf3e240441e7829c3",
    timestamp: 1517891726,
    nonceStr: "XVdM6MnDAU481Vda",
    signature: "fcb637ac409a14014382cbd27bbb8c15d0117a17",
    jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
});
wx.ready(function () {
    wx.onMenuShareTimeline({
        title: " ",
        link: "",
        desc: "\u3000",
        imgUrl: "imgurl",
        success: function () {},
        cancel: function () {}
    });
    wx.onMenuShareAppMessage({
        title:" ",
        link: "",
        desc:title,
        imgUrl: imgurl,
        success: function () {},
        cancel: function () {}
    });
    wx.onMenuShareQQ({
        title: " ",
        link: "",
        desc: "\u3000",
        imgUrl: imgurl,
        success: function () {},
        cancel: function () {}
    });
    wx.onMenuShareWeibo({
        title: " ",
        link: "",
        desc: "\u3000",
        imgUrl: imgurl,
        success: function () {},
        cancel: function () {}
    });
    wx.onMenuShareQZone({
        title: " ",
        link: "",
        desc: "\u3000",
        imgUrl: imgurl,
        success: function () {},
        cancel: function () {}
    })
});