$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
})

function initPage() {
    var win_w = $(window).width();
    var win_h = $(window).height();
    
    var twoClassify_listW = win_w - 100;
    var twoClassify_menuH = win_h - 50 - 41 - 58;
    $(".twoClassify .menu").height(twoClassify_menuH);
    $(".twoClassify .list").width(twoClassify_listW).height(twoClassify_menuH);

    var commonList_rightW = win_w - 180 - 10;
    if(win_w > 420){
        commonList_rightW = win_w - 180 - 30;
    }
    $(".twoClassify .list ul li .dis").width(commonList_rightW);
    var commonList_right_disW = commonList_rightW - 82;
    $(".twoClassify .list ul li .dis .operation font").width(commonList_right_disW);

    $(".twoClassify .menu ul li a").click(function(){
        $(this).css("background-color","#FFF");
        $(this).parent().siblings().find("a").css("background-color","transparent");
    });
}