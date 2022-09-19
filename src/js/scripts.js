$(document).ready(function () {

    var $menu = $(".header");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {
            $menu.removeClass("default").addClass("moved");
        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("moved")) {
            $menu.removeClass("moved").addClass("default");
        }
    });


    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    if ($('.faq').length) {
        $(".faq__item-header").click(function () {
            $(this).closest('.faq__item').toggleClass('active');
            $(this).closest('.faq__item').find('.faq__item-content').fadeToggle(300);
        });
    }

    $(".header__mobile-burger").click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('locked');
        $('.header__container').fadeToggle().css('display', 'flex');
    });
    if ($('.customers').length) {
        var customers = new Swiper(".customers__list", {
            slidesPerView: 3,
            spaceBetween: 39,
            pagination: {
                el: ".customers__pagination",
                clickable: true,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                640: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 40
                }
            }
        });
    }
});




