$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
})

function initPage() {
    var win_w = $(window).width();
    var win_h = $(window).height();

    var disW = win_w - 24 - 20 - 10;
    $(".message .box .dis").width(disW);
}