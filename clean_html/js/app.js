$(document).ready(function () {

    $("body, .left_side").niceScroll({
        horizrailenabled : false
    });

    $(".toggle_menu").click(function () {
        $(".sandwich").toggleClass("active");
        $(".left_side").toggleClass("active");
    });

    var wall = new freewall(".gallery");
    wall.reset({
        selector: "a",
        animate: true,
        cellW: 150,
        cellH: "auto",
        gutterX: 5,
        gutterY: 5,
        onResize: function () {
            wall.fitWidth();
        }
    });

    var images = wall.container.find("a");
    images.find("img").on('load', function () {
        wall.fitWidth();
    });

    $(".filter_label").click(function () {
        $(".filter_label").removeClass("active");
        var filter = $(this).addClass("active").data("filter");
        wall.filter(filter);
        setTimeout(function () {
            $(window).resize();
            wall.fitWidth();
        }, 400);
    });

    $(".gallery img").lazyload({
        effect: "fadeIn",
        threshold: 1000
    }).parent().hover(function () {
        $(".gallery a").css("opacity", ".6");
        $(this).css("opacity", "1");
    }, function () {
        $(".gallery a").css("opacity", "1");
    });


});

$(window).on('load', function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});