$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
})

function initPage() {
    var win_w = $(window).width();
    //其他页面的搜索自适应
    var spanW = win_w - 70 - 20;
    $(".addressEdit ul li span").width(spanW);
}