$(function () {
    //ham영역
    //원도우 너비 구하기
    let wWidth = $(window).innerWidth();
    //
    $(window).on("resize", function () {
        wWidth = $(window).innerWidth();
        $(".sub").slideUp(100);
        $(".nav-wrap").css("left", "-100%");
        if (wWidth >= 1279) {
            $(".sub").css("height", 200);
        }
        else {
            $(".sub").css("height", "auto");
        }
    })

    $(".ham-btn").on("click", function () {
        $(".nav-wrap").stop().animate({
            left: 0
        }, 300)
    })


    $(".close-btn").on("click", function () {
        $(".nav-wrap").stop().animate({
            left: "-100%"
        }, 300)
    })
    $(".nav>li>a").on({
        "mouseover": function () {
            if (wWidth >= 1279) {
                $(".sub").stop().slideDown(300);
                $(".sub-bg").stop().slideDown(300);
            }
        },
        "mouseout": function () { },
        "click": function () {
            if (wWidth < 1279) {
                $(this).next(".sub").stop().slideToggle(300);
            }
        }
    })
    $("header").on({
        "mouseleave": function () {
            if (wWidth >= 1279) {
                $(".sub,.sub-bg").stop().slideUp(300);
            }
        }
    })

    // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            console.log($(this).scrollTop())
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    // Top 버튼 클릭시 페이지 상단으로 이동
    $('#top-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

})
