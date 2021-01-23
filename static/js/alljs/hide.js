/*$(document).ready(function(){//wx.hideOptionMenu();
		 wx.hideMenuItems({
		menuList:[
        "menuItem:share:appMessage", // 阅读模式
        "menuItem:share:timeline", // 分享到朋友圈
        "menuItem:share:qq", // 复制链接
		"menuItem:copyUrl",
		"menuItem:originPage",
		"menuItem:readMode"
      ]
    }); 
	 wx.hideAllNonBaseMenuItem({
      success: function () {
        alert('已隐藏所有非基本菜单项');
      }
    });}*/
	
document.body.addEventListener('touchmove', function (e) {
  e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
}, {passive: false}); 
wx.ready(function(){
    wx.hideOptionMenu();
})
pushHistory();
        window.addEventListener("popstate", function (e) {
            WeixinJSBridge.call('closeWindow');
        }, false);
        function pushHistory() {
            var state = {
                title: "title",
                url: "#"
            };
            window.history.pushState(state, "title", "#");
        }
