$(function(){

    initPage();
    $(window).resize(function () {
        initPage();
    });

	//备注光标进出
	$(".remarks").focus(function(){
		var remarks = $(this).val();
		if(remarks == null || remarks == "" || remarks == "请输入订单备注"){
			$(this).val("");
		}
	});
	$(".remarks").blur(function(){
		var remarks = $(this).val();
		if(remarks == null || remarks == "" || remarks == "请输入订单备注"){
			$(this).val("请输入订单备注");
		}
	});
})

function initPage() {
    var win_w = $(window).width();
    var win_h = $(window).height();

    var addressW = win_w - 68;
    $(".position .address").width(addressW);
    var disW = win_w - 60 - 20 - 20;
    $(".goodsList ul li .dis").width(disW);
    var userDis_spanW = win_w - 70 - 20;
    $(".userDis p span").width(userDis_spanW);
}


