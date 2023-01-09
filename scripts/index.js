let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

let vmax = Math.max(h, w);
let pictureNewSize = vmax * 0.20;
let nameNewSize = vmax * 2.5;
$(".cover-page").click(function () {
    $(".profile-picture, .cover-page").animate({
        opacity: 0.7
    }, 100);

    $(".see-more").animate({
        opacity: 0
    }, 100);

    $(".profile-picture").animate({
        width: pictureNewSize
    }, 100);

    $(".name").animate({
        fontsize: nameNewSize
    }, 100);

    $('html, body').animate({
        scrollTop: $(".introduction").offset().top
    }, 100);

    $("html, body").css({
        "overflow": "visible"
    });
});

