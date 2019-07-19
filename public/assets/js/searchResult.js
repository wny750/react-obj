$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
})

function initPage() {
    var win_w = $(window).width();
    var win_h = $(window).height();

    var disW = win_w - 20 - 60 - 10;
    $(".resultList ul li .dis").width(disW);
    var fontW = disW - 70 - 10;
    $(".resultList ul li .dis .operation font").width(fontW);
}