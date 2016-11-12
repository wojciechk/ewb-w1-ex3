(function ($) {
"use strict"
    
    var subMenu=$("#my-submenu");
    var hbg = $("#my-hamburger");
    hbg.on("click", function (e) {
        e.preventDefault();        
        // subMenu.toggleClass("open");
        $(".dropdown-menu").animate({
             display:"block"
         });
    });
})(jQuery);