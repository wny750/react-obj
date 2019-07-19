$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
    
	//校验
    $(".checkLoginBut, .loginName").on("keyup blur",function(){
    	var name = $(".loginName").val();
    	var password = $(".checkLoginBut").val();
    	if(name == null || name.trim() == ""){
	    	$(".loginBut").css("background-color","#eee").css("color","#999").attr("disabled",true);
    		return;
    	}
    	if(password == null || password == ""){
	    	$(".loginBut").css("background-color","#eee").css("color","#999").attr("disabled",true);
    		return;
    	}
	    $(".loginBut").css("background-color","#aace52").css("color","#FFF").attr("disabled",false);
    });
})

function initPage() {
    var win_h = $(window).height();
    var win_w = $(window).width();
    $(".login").height(win_h);

    $(".login .box").height(625*win_w/749);
}
