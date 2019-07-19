<script src="jquery-1.11.3.min"></script>
function initPage() {
    var win_w = $(window).width();
    
    var shop_namePW = win_w - 20 - 21;
    $(".top .shop .shop_name span font").width(shop_namePW);
    
}
$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
	
	//监听滚动事件
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		//搜索栏固定
		if(scrollTop >= 60){
			$(".top").css({
				"height":"60px"
			});
			$(".top .shop").hide();
			$(".top .search i").css({
				"top":"20px",
				"left":"20px"
			});
			$(".lbt").css("padding-top","60px");
			$(".top .search").css({
				"padding":"10px",
				"background-color":"rgba(255,255,255,.9)",
				"position":"fixed",
				"top":"0px",
				"left":"0px",
				"z-index":"99999"
			});
			$(".top .search input").css({
				"background-color":"rgba(204,204,204,.7)"
			});
		}else{
			$(".top").css({
				"height":"90px"
			});
			$(".top .shop").show();
			$(".top .search i").css({
				"top":"10px",
				"left":"10px"
			});
			$(".lbt").css("padding-top","0px");
			$(".top .search").css({
				"padding":"0",
				"background-color":"transparent",
				"position":"relative",
				"top":"0px",
				"left":"0px",
				"z-index":"auto"
			});
			$(".top .search input").css({
				"background-color":"#FFF"
			});
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
		x = 106.253853;
		y = 38.51445;
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
