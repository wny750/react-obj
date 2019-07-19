$(function(){
	var win_w = $(window).width();

	$(".list ul").width(win_w);
    $(".list ul li").width(win_w + 50);
    //计算完成li的宽度后在show删除按钮
    $(".delBut").show();
	$(".goods").width(win_w).css("padding"," 10px");
	var disW = win_w - 120;
	$(".settlement .dis").width(disW);
	var totalW = disW - 55 - 20;
	$(".settlement .dis .total").width(totalW);
	var rightW = win_w - 20 - 27 - 80 - 5;
	$(".list ul li .right").width(rightW);
	var disW = rightW - 80;
	$(".list ul li .right .dis").width(disW);

	//单个商品的选中按钮
	$(".list ul li .choose i").click(function(){
		goodsChoose($(this));
		$("#allTotal").text("¥"+total($(".list"))+"元");
	});

	//初始化小计价格
	init($(".list"));
	//计算货物小计价格

    $(".reduceButOnly").click(function(){
        goodsNumOnly("-",$(this));
    });
	$(".addBut, .reduceButOnly").click(function(){
		samllTotal($(this).parent().parent().parent().parent());
		$("#allTotal").text("¥"+total($(".list"))+"元");
	});
	$(".nums").blur(function(){
		samllTotal($(this).parent().parent().parent().parent());
		$("#allTotal").text("¥"+total($(".list"))+"元");
	});

	//全选功能
	$(".chooseAll i").click(function(){
		var nums = $(".list ul li").length;
		if($(this).attr("class") == "iconfont icon-icon"){
			$(this).addClass("active");
			for (var i = 0; i < nums; i++) {
				$(".list ul").children().eq(i).find(".choose i").addClass("active");
				$(".list ul").children().eq(i).find(".choose i").siblings("input").val("1");
			}
		}else{
			$(this).removeClass("active");
			for (var i = 0; i < nums; i++) {
				$(".list ul").children().eq(i).find(".choose i").removeClass("active");
				$(".list ul").children().eq(i).find(".choose i").siblings("input").val("0");
			}
		}
		
		$("#allTotal").text("¥"+total($(".list"))+"元");
	});
	
	//触屏滑动显示删除按钮
	var startX = 0; 
	$(".list ul li").on("touchstart", function(e) {
	
		//如果提供了事件对象，则这是一个非IE浏览器 
		if(e && e.stopPropagation)
			//因此它支持W3C的stopPropagation()方法 
			e.stopPropagation();
		else
			//否则，我们需要使用IE的方式来取消事件冒泡 
			window.event.cancelBubble = true;
	
		startX = e.originalEvent.changedTouches[0].pageX;
	});
	$(".list ul li").on("touchend", function(e) {
		//如果提供了事件对象，则这是一个非IE浏览器 
		if(e && e.stopPropagation)
			//因此它支持W3C的stopPropagation()方法 
			e.stopPropagation();
		else
			//否则，我们需要使用IE的方式来取消事件冒泡 
			window.event.cancelBubble = true;
		moveEndX = e.originalEvent.changedTouches[0].pageX,
			X = moveEndX - startX;

		var delBut = 0;
		if(X > 50) {
            delBut = 0;
		}
		if(X < -50) {
            delBut = -50;
		}
        $(this).find(".goods").animate({
            marginLeft: delBut+'px'
        }, 300);
        $(this).siblings().find(".goods").animate({
            marginLeft: '0px'
        }, 300);
	});
});
function goodsNumOnly(tag, _this){
    var minNums = 0;
    var maxNums = 99;
    var nums = _this.siblings(".nums").val();
    if(tag == "+"){
        if(nums < 99){
            nums++;
        }else{
            alert("商品数量不能大于"+maxNums+"。")
        }
    }else{
        if(nums > 0){
            //解决0.5--的问题
            if(nums > 1){
                nums--;
            }
            nums = parseFloat(nums).toFixed(1);
        }else{
            alert("商品数量不能小于"+minNums+"。")
        }
    }
    _this.siblings(".nums").val(nums);
}
//初始化
function init(_list){
	var nums = _list.find("ul li").length;
	for (var i = 0; i < nums; i++) {
		samllTotal(_list.find("ul").children().eq(i));
		//如果默认选中的商品需要计算总价
		if(_list.find("ul").children().eq(i).find(".choose input") == 1){
			
		}
	}
}
//合计
function total(_list){
	var allTotal = 0;
	var nums = _list.find("ul li").length;
	for (var i = 0; i < nums; i++) {
		//选中的商品需要计算总价
		var _li = _list.find("ul").children().eq(i);
		if(_li.find(".choose input").val() == "1"){
			var goodsNums =  parseFloat(_li.find(".right .car .nums").val());
			var price = parseFloat(_li.find(".right .car .price").val());
			allTotal += parseFloat((goodsNums*price).toFixed(2));
		}
	}
    allTotal = allTotal.toFixed(2);
	return allTotal;
}
//单个商品选中功能
function goodsChoose(_this){
	if(_this.siblings("input").val() == "0"){
		_this.addClass("active");
		_this.siblings("input").val("1");
		//选中单个商品需要遍历整个商品列表，判断是否所有的商品都被选中，如果都选中全选按钮active，否则相反
		if(checkChoose($(".list"))){
			$(".chooseAll i").addClass("active");
		}
	}else{
		_this.removeClass("active");
		_this.siblings("input").val("0");
		
		$(".chooseAll i").removeClass("active");
	}
}
//选中功能遍历
function checkChoose(_list){
	
	var nums = _list.find("ul li").length;
	for (var i = 0; i < nums; i++) {
		var _li = _list.find("ul").children().eq(i);
		if(_li.find(".choose input").val() != "1"){
			return false;
		}
	}
	return true;
	
}
//小计
function samllTotal(_this){
	
	var nums = parseFloat(_this.find(".right .car .nums").val());
	var price = parseFloat(_this.find(".right .car .price").val());
	
	_this.find(".right .dis").children().eq(2).find("font").text("¥"+(nums*price).toFixed(2)+"元");
	
}
