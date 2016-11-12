(function ($) {
"use strict"
    
    var subMenu=$("#my-submenu");
    var hbg = $("#my-hamburger");
    var dropMenu=$("#dropdown-menu")
    hbg.on("click", function (e) {
        $(this).next('.dropdown-menu').slideToggle(500);
    });
})(jQuery);