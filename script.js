var week1=(function ($) {

    var menu,
        config={ "foo": "#", bar: "#" };
        clicked=false;

    function createMenu(cfg) {
        var ul = $("<ul></ul>", {
            "id": "menu",
            "class": "dropdown-menu",
            "css": {
                "display": "none"
            }
        });


        $.each(cfg, function (key, value) {
            var li = $("<li></li>", {

            });
            var a = $("<a></a>", {
                "text": value,
                "href": key

            })
            li.append(a).appendTo(ul);
        });
        return ul;
    }

    menu=menu||createMenu(config);

    var hbg = $("#my-hamburger");
    hbg.append(menu);

    hbg.on("click", function (e) {

        
    });
return {
    "menu":menu
}

})(jQuery);