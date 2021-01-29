var test = window.location.href;
	console.log("url:"+test);
	var index= test.indexOf("?v=");
	console.log("index:"+index);
	if(index==-1){
	var url=test+"?v="+new Date().getTime();
	console.log("newUrl:"+url);
	window.location.href=url;
	}