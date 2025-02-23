$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if(scrollTop > 0) {
        $('header').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
    }
});

$(document).ready(function() {
    $(".mobile-menu-icon").on('click', function() {
        var el = $(this);
        el.addClass("active");
        $(".mobile-menu-lists").slideToggle();

        var menu_icon = el.find('i');
        if(menu_icon.hasClass('fa-bars')) {
            menu_icon.removeClass('fa-bars').addClass('fa-close');
        } else {
            menu_icon.removeClass('fa-close').addClass('fa-bars');
        }
    });
});