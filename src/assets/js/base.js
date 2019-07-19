$(function(){
    initBasePage();
    $(window).resize(function () {
        initBasePage();
    });
	
	//计算货物数量
	$(".addBut").click(function(){
		//动画特效，加入购物车飞入效果
//		if(goodsCarImgFly_TAG == 1){
//			if(($(this).parent().parent().parent().siblings("img").length != 0)){
//				goodsCarImgFly($(this).parent().parent().parent().siblings("img"));
//			}
//		}
		
		goodsNum("+",$(this));
	});
	$(".reduceBut").click(function(){
		goodsNum("-",$(this));
	});
		
});

function initBasePage() {
    var win_w = $(window).width();
    //其他页面的搜索自适应
    var otherTop_searchW = win_w - 52 - 52 - 20;
    $(".otherTop .search").width(otherTop_searchW);
    $(".otherTop .title").width(otherTop_searchW);
}

var goodsCarImgFly_TAG = 1;	//只有完成一个完整的动画后才能继续下次动画
//动画特效，加入购物车飞入效果
function goodsCarImgFly(_this){
	goodsCarImgFly_TAG = 0;
	var loc = _this.offset();
	_this.parent().append('<img id="tempGoods" style="position: fixed; top: '+(loc.top - $(window).scrollTop())+'px; left: '+loc.left+'px; z-index: 10000;" src="'+_this.attr("src")+'">');
	var car = $("#menuGoodsNum").offset();
	if(car.left == 0){
        car = $("#menuGoodsNumTag").offset();
	}
	$("#tempGoods").animate({
		opacity:'0.8',
	    top:(car.top - $(window).scrollTop())+'px',
	    left:car.left+'px',
	    width: "10px",
	    height: "10px"
	},500,function(){
		$(this).remove();
		goodsCarImgFly_TAG = 1;
	});
//	console.log((car.top - $(window).scrollTop())+"-"+car.left);
}

function openTc(id,con,url,but1,but2){
	var str = '<div id="'+id+'" class="tc">'+
			'<div class="box">'+
				'<div class="con">'+con+'</div>'+
				'<div class="but">'+
					'<a class="cancelBut" href="javascript:cancelTc(\''+id+'\')">'+but1+'</a>'+
					'<a class="callBut" href="'+url+'" onclick="cancelTc(\''+id+'\')">'+but2+'</a>'+
				'</div>'+
			'</div>'+
		'</div>';
	$("body").append(str);
	var win_h = $(window).height();
	$("#"+id).height(win_h);
}

function cancelTc(id){
	$("#"+id).remove();
}

var minNums = 0;	//购物最小数量
var maxNums = 999;//购物最大数量
function goodsNum(tag, _this){
	var nums = _this.siblings(".nums").val();
	if(tag == "+"){
        nums++;
		if(nums > maxNums){
            nums--;
			alert("商品数量不能大于"+maxNums+"。")
		}
	}else{
		if(nums > 0){
            nums--;
            nums = parseFloat(nums.toFixed(1));
            //解决0.5--的问题
			if(nums < 0){
                nums = 0;
			}
		}else{
			alert("商品数量不能小于"+minNums+"。")
		}
	}
	_this.siblings(".nums").val(nums);
}

//图片加载失败后默认图片
function errorImg(_this){
	_this.src = 'images/imgError.png';
	_this.onerror=null;
}

//检测只能输入数字
function numCheck(_this){
	var num = $(_this).val();
    if(parseFloat(num)>maxNums){
        $(_this).val(maxNums);
    }
    if(parseFloat(num)<0){
        $(_this).val(0);
    }
    num = num.split(".");
	if(num.length == 2){
		num = num[0]+"."+num[1].substring(0,1);
        $(_this).val(num);
	}
}

//检测inupt如果光标进入，并且数字为零，则清空等待输入
function numCheckZero(_this) {
    var num = $(_this).val();
    if(parseFloat(num) == 0){
        $(_this).val("");
    }
}
