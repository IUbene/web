$(function () {
    //선택한 요소가 누구인지
    let selectNum = 0;
    //큰요소의 너비
    let big = $(".accord-list>li:first").outerWidth();
    //작은요소의 너비
    let small = $(".accord-list>li:last").outerWidth();
    $(".accord-list>li").on("click", function () {
        selectNum = $(this).index();
        
        $(this).siblings().stop().animate({
            width: small
        }, 500);

        $(this).stop().animate({
            width: big
        }, 500)

        $(this).addClass("active").siblings().removeClass("active");
    })
})