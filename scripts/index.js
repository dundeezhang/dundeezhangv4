let height = screen.height;

$(".cover-page").click(function() {
    $(".profile-picture, .cover-page, .see-more").animate({
        opacity: 0.7
    }, 100);

    $('html, body').animate({
        scrollTop: $(".content").offset().top
    }, 100);

    $("html, body").css({
        "overflow":"visible"
    });
});

