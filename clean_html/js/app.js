$(document).ready(function () {
    $("body").niceScroll({
        horizrailenabled: false
    });

    $(".toggle_menu").click(function() {
        $(".sandwich").toggleClass("active");
        $(".left_side").toggleClass("active");
    });


});