$(function(){
    initPage();
    $(window).resize(function () {
        initPage();
    });
})

function initPage() {
    var win_w = $(window).width();
    var win_h = $(window).height();

    var disW = win_w - 10 - 110;
    $(".cashCoupon .box .midd .dis").width(disW);
}