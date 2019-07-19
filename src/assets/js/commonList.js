function initPage() {
    var win_w = $(window).width();
    
    var classMenuW = win_w*2;
    $(".classMenu").width(classMenuW);
    $(".classMenu ul").width(win_w);
    var shop_nameW = win_w - 80 - 20 - 10;
    if(win_w > 600){
        shop_nameW = shop_nameW - 20;
        $(".top .shop .shop_name").width(shop_nameW);
    }else{
        $(".top .shop .shop_name").width(shop_nameW);
    }
    
    var commonList_right_disW = win_w*0.5 - 80 - 10;
    $(".commonList .con .list ul li .right .content .dis").width(commonList_right_disW);
    var shop_name_fontW = shop_nameW - 38;
    $(".top .shop .shop_name span font").width(shop_name_fontW);
}
$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
	
	//触屏滑动显示删除按钮
	var startX = 0; 
	$(".classMenu").on("touchstart", function(e) {
	
		//如果提供了事件对象，则这是一个非IE浏览器 
		if(e && e.stopPropagation)
			//因此它支持W3C的stopPropagation()方法 
			e.stopPropagation();
		else
			//否则，我们需要使用IE的方式来取消事件冒泡 
			window.event.cancelBubble = true;
	
		startX = e.originalEvent.changedTouches[0].pageX;
	});
	$(".classMenu").on("touchend", function(e) {
		//如果提供了事件对象，则这是一个非IE浏览器 
		if(e && e.stopPropagation)
			//因此它支持W3C的stopPropagation()方法 
			e.stopPropagation();
		else
			//否则，我们需要使用IE的方式来取消事件冒泡 
			window.event.cancelBubble = true;
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			X = moveEndX - startX;
			
		if(X > 0) {
			//测试滑动效果是向左滑动
			$(this).children().eq(0).animate({
				marginLeft: '0px'
			}, 500);
		}
		if(X < 0) {
			//测试滑动效果是向右滑动
			$(this).children().eq(0).animate({
				marginLeft: '-'+$(this).find("ul").width()+'px'
			}, 500);
		}
	});
	
})

function classifyUIR(id,num) {
    sessionStorage.setItem("classifyID",id);
    sessionStorage.setItem("navbarscrolldefaultSelect",num);
	location.href = "classify.html";
}

var city = 0;
//获取天气
function getW(x,y){
	//如果没有坐标默认四川成都的坐标
	if(x == 0 && y == 0){
		x = 104.056873;
		y = 30.673471;
	}
	city = getAdcode(x,y);
	$.ajax({
		type: "get",
		url: "http://restapi.amap.com/v3/weather/weatherInfo?city="+city+"&key=bcacc17a7b37937b40bd9e943a0f176e",
		dataType: 'JSON',
		success: function(data){
			var weatherStr = data.lives[0].weather;
			$("#weather i").attr("class","iconfont "+getWeatherICO(weatherStr));
			$("#weather p").text(weatherStr+" "+data.lives[0].temperature+"℃");
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log('获取天气失败！' + errorThrown);
		}
	});
}
//逆地理编码获取adcode
function getAdcode(x,y){
	
	$.ajax({
		type: "get",
		url: "http://restapi.amap.com/v3/geocode/regeo?key=bcacc17a7b37937b40bd9e943a0f176e&location="+x+","+y,
		dataType: 'JSON',
		async: false,
		success: function(data){
			city = data.regeocode.addressComponent.adcode;
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			console.log('逆地理编码获取adcode失败！' + errorThrown);
		}
	});
	return city;
}
//比对天气图标
function getWeatherICO(weatherStr){
	var ico = [
		{
			name:"雨雪",
			icon:"icon-yuxue"
		},
		{
			name:"雾",
			icon:"icon-wu"
		},
		{
			name:"霾",
			icon:"icon-mai"
		},
		{
			name:"风",
			icon:"icon-feng"
		},
		{
			name:"冰雹",
			icon:"icon-bingbao"
		},
		{
			name:"中雨",
			icon:"icon-zhongyu"
		},
		{
			name:"中雪",
			icon:"icon-zhongxue"
		},
		{
			name:"阵雨",
			icon:"icon-zhenyu"
		},
		{
			name:"阵雪",
			icon:"icon-zhenxue"
		},
		{
			name:"阴",
			icon:"icon-yin"
		},
		{
			name:"小雨",
			icon:"icon-xiaoyu"
		},
		{
			name:"小雪",
			icon:"icon-xiaoxue"
		},
		{
			name:"晴",
			icon:"icon-qing"
		},
		{
			name:"闪电",
			icon:"icon-leidian"
		},
		{
			name:"多云",
			icon:"icon-duoyun"
		},
		{
			name:"暴雨",
			icon:"icon-baoyu"
		},
		{
			name:"暴雪",
			icon:"icon-baoxue"
		},
		{
			name:"其他",
			icon:"icon-qita"
		}
	];
	
	var nums = ico.length;
	for (var i = 0; i < nums; i++) {
		if(weatherStr.indexOf(ico[i].name) >= 0){
			return ico[i].icon;
		}
	}
	return ico[nums-1].icon;
}
