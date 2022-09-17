$(document).ready(function () {

    var $menu = $(".header");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("moved");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("moved")) {
            $menu.removeClass("moved").addClass("default");
        }
    });


    AOS.init();


    if ($('.faq').length) {
        $(".faq__item-header").click(function () {
            $(this).closest('.faq__item').toggleClass('active');
            $(this).closest('.faq__item').find('.faq__item-content').fadeToggle(300);
        });
    }

    $(".header__burger").click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('locked');
        $('.header__mobile').fadeToggle(300);
    });
    if ($('.customers').length) {
        var customers = new Swiper(".customers__list", {
            slidesPerView: 3,
            spaceBetween: 39,
            pagination: {
                el: ".customers__pagination",
                clickable: true,
            },
        });
    }
});




