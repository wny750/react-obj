//新增购物车数据 加减按钮改变购物车数量的前端接口 - 仅供购物车页面使用
function changeDataOnlyGoodsCar(goodsid, tag) {
    var image = $("#image"+goodsid).val();
    var goodsname = $("#goodsname"+goodsid).val();
    var price = $("#price"+goodsid).val();
    var spectype = $("#spectype"+goodsid).val();
    var goodsnum = 0;

    if(tag == "+"){
        goodsnum = parseFloat($("#goodsnum"+goodsid).val())+1;
        if(goodsnum>999){
            return;
        }
    }else{
        goodsnum = parseFloat($("#goodsnum"+goodsid).val());
        if((parseFloat($("#goodsnum"+goodsid).val())-1) <= 0){
            openTc('delGoods','是否删除该商品？','javascript:delNum(\''+goodsid+'\')','否','是');
            // delNum(goodsid);
        }else{
            goodsnum = goodsnum - 1;
            goodsnum = parseFloat(goodsnum).toFixed(1);
            //解决0.5--的问题
            if(goodsnum < 0){
                goodsnum = 0;
            }
        }
    }

    $.ajax({
        type: "post",
        data: {
            "image": image,
            "goodsid": goodsid,
            "goodsname": goodsname,
            "price": price,
            "spectype": spectype,
            "goodsnum": goodsnum
        },
        url: "",
        dataType: 'json',
        success: function(data){

            $("#menuGoodsNum").text(data.data.shoppingNum);
            if(data.data.shoppingNum == 0){
                $("#menuGoodsNum").hide();
            }else{
                $("#menuGoodsNum").show();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('访问网络失败！' + errorThrown);
        }
    });
}

//新增购物车数据 加减按钮改变购物车数量的前端接口 - 其他页面公共的方法
function changeDataGoodsCar(goodsid, tag) {
    var image = $("#image"+goodsid).val();
    var goodsname = $("#goodsname"+goodsid).val();
    var price = $("#price"+goodsid).val();
    var spectype = $("#spectype"+goodsid).val();
    var goodsnum = parseFloat($("#goodsnum"+goodsid).val());
    var goodsnumOld = goodsnum;

    if(tag == "+"){
        goodsnum = goodsnum + 1;
        if(goodsnum>999){
            return;
        }
    }else{
        if(goodsnum > 0){
            goodsnum = goodsnum - 1;
            goodsnum = parseFloat(goodsnum).toFixed(1);
            //解决0.5--的问题
            if(goodsnum < 0){
                goodsnum = 0;
            }
        }
    }
    $.ajax({
        type: "post",
        data: {
            "image": image,
            "goodsid": goodsid,
            "goodsname": goodsname,
            "price": price,
            "spectype": spectype,
            "goodsnum": goodsnum
        },
        url: "",
        dataType: 'json',
        success: function(data){

            $("#menuGoodsNum").text(data.data.shoppingNum);
            if(data.data.shoppingNum == 0){
                $("#menuGoodsNum").hide();
            }else{
                $("#menuGoodsNum").show();
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('访问网络失败！' + errorThrown);
            $("#goodsnum"+goodsid).val(goodsnumOld)
        }
    });
}
//新增购物车数据 加减按钮改变购物车数量的前端接口 - 数字input输入框
function changeDataGoodsCarInput(goodsid, _this) {
    //光标离开后如果input没有值，则归零，别且不执行接口功能
    var num = $(_this).val();
    if(num == null || num == ""){
        $(_this).val("0");
        return;
    }

    var image = $("#image"+goodsid).val();
    var goodsname = $("#goodsname"+goodsid).val();
    var price = $("#price"+goodsid).val();
    var spectype = $("#spectype"+goodsid).val();
    var goodsnum = parseFloat($("#goodsnum"+goodsid).val());

    $.ajax({
        type: "post",
        data: {
            "image": image,
            "goodsid": goodsid,
            "goodsname": goodsname,
            "price": price,
            "spectype": spectype,
            "goodsnum": goodsnum
        },
        url: "",
        dataType: 'json',
        success: function(data){
            $("#menuGoodsNum").text(data.data.shoppingNum);
            if(data.data.shoppingNum == 0){
                $("#menuGoodsNum").hide();
            }else{
                $("#menuGoodsNum").show();
            }
            // location.reload(true);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('访问网络失败！' + errorThrown);
        }
    });
}

//去结算页面的方法
function goJiesuan() {
    //查看所有被选中的商品，获取到id，存储为一个数组
    var list = $(".list ul li");
    var nums = $(".list ul li").length;
    var ids = new Array();
    for(var i = 0; i < nums; i++){
        if(list.eq(i).find(".goods .choose input").val() == "1"){
            ids.push(list.eq(i).find(".goodsid").val());
        }
    }
   // console.log('/wap/orderSubmit?ids='+ids)
    if(ids.length==0){
        alert("请勾选商品后结算！");

    }else{
        location.href ='/wap/orderSubmit?ids='+ids;
    }
}


//购物车删除的方法
function delNum(goodsid) {
    $.ajax({
        type: "post",
        data: {
            "goodsid": goodsid
        },
        url: "?goodsid="+goodsid,
        dataType: 'json',
        success: function(data){
            location.reload(true);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('访问网络失败！' + errorThrown);
        }
    });
}

function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return;
    }
    f = Math.round(x*100)/100;
    return f;
}

