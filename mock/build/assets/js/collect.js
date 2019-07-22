$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
	
	//初始化小计价格
	samllTotal($(".collect"));
	
});

function initPage() {
    var win_w = $(window).width();

    var disW = win_w - 120;
    $(".settlement .dis").width(disW);
}

//合计
var totalNums = 0;
function total(){
	$(".settlement .dis .total font").text("¥ "+totalNums+"元");
}
//小计
function samllTotal(_this){
	var l = _this.find("tr").length;
	for(var i = 0; i < l; i++){
		var nums = _this.find("table tbody").children().eq(i).find("td.nums").text();
		nums = parseFloat(nums.substring(3,nums.length));
		
		var price = _this.find("table tbody").children().eq(i).find("td.price").text();
		price = parseFloat(price.substring(0,price.length-3));
		
		_this.find("table tbody").children().eq(i).find("td.total").text("¥ "+(nums*price).toFixed(2)+"元");
		totalNums += parseFloat((nums*price).toFixed(2));
	}
    totalNums = totalNums.toFixed(2);
	//合计
	total();
}
