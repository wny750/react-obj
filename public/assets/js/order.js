$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
	
	$(".menu a").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});

    //单个商品的选中按钮
    $(".list ul li .con .orderOperation i").click(function(){
        goodsChoose($(this));
        $("#allTotal").text("¥"+total($(".list"))+"元");
    });

    //全选功能
    $(".chooseAll i").click(function(){
        var nums = $(".list ul li").length;
        if($(this).attr("class") == "iconfont icon-icon"){
            $(this).addClass("active");
            for (var i = 0; i < nums; i++) {
                $(".list ul").children().eq(i).find(".con .orderOperation i").addClass("active");
                $(".list ul").children().eq(i).find(".con .orderOperation i").siblings("input").val("1");
            }
        }else{
            $(this).removeClass("active");
            for (var i = 0; i < nums; i++) {
                $(".list ul").children().eq(i).find(".con .orderOperation i").removeClass("active");
                $(".list ul").children().eq(i).find(".con .orderOperation i").siblings("input").val("0");
            }
        }

        $("#allTotal").text("¥"+total($(".list"))+"元");
    });
})

//合计
function total(_list){
    var allTotal = 0;
    var nums = _list.find("ul li").length;
    for (var i = 0; i < nums; i++) {
        //选中的商品需要计算总价
        var _li = _list.find("ul").children().eq(i);
        if(_li.find(".con .orderOperation .chooseTF").val() == "1"){
            console.log(_li.find(".con .orderOperation font input").val())
            allTotal += parseFloat((parseFloat(_li.find(".con .orderOperation font input").val())).toFixed(2));
        }
    }
    allTotal = allTotal.toFixed(2);
    return allTotal;
}

function initPage() {
    var win_w = $(window).width();
    var win_h = $(window).height();

    var orderGoodsaW = win_w - 220 - 20;
    $(".list ul li .con .orderGoods a").width(orderGoodsaW);
    var orderStateW = win_w - 50 - 20;
    $(".list ul li .con .orderState span").width(orderStateW);
    
    var orderGoodsDisW = win_w - 50 - 40;
    $(".list ul li .con .orderGoods ul li .dis").width(orderGoodsDisW);
}

//单个商品选中功能
function goodsChoose(_this){
    if(_this.siblings(".chooseTF").val() == "0"){
        _this.addClass("active");
        _this.siblings(".chooseTF").val("1");
        //选中单个商品需要遍历整个商品列表，判断是否所有的商品都被选中，如果都选中全选按钮active，否则相反
        if(checkChoose($(".list"))){
            $(".chooseAll i").addClass("active");
        }
    }else{
        _this.removeClass("active");
        _this.siblings(".chooseTF").val("0");

        $(".chooseAll i").removeClass("active");
    }
}
//选中功能遍历
function checkChoose(_list){

    var nums = _list.find("ul li").length;
    for (var i = 0; i < nums; i++) {
        var _li = _list.find("ul").children().eq(i);
        if(_li.find(".orderOperation .chooseTF").val() != "1"){
            return false;
        }
    }
    return true;

}