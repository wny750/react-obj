$(function(){
	//备注光标进出
	$("#feedbackText").focus(function(){
		var remarks = $(this).val();
		if(remarks == null || remarks == "" || remarks == "请输入您的反馈意见(字数150字以内)"){
			$(this).val("");
		}
	});
	$("#feedbackText").blur(function(){
		var remarks = $(this).val();
		if(remarks == null || remarks == "" || remarks == "请输入您的反馈意见(字数150字以内)"){
			$(this).val("请输入您的反馈意见(字数150字以内)");
		}
	});
})

function calcNums(_this) {
	var str = $(_this).val();
	var nowNums = str.length;
    if(nowNums > 0){
        $(".rechargeBut").css("background-color","#aace52").css("color","#FFF");
    }else{
        $(".rechargeBut").css("background-color","#ccc").css("color","#FFF");
	}
    if(nowNums > 150){
        str = str.substring(0,150);
        $(_this).val(str);
        nowNums = str.length;
    }
    $("#nowNums").text(nowNums);
}