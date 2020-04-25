(function ($) {
    "use strict"; //use of strict

    $(document).ready( function () {

        var nav = document.querySelector('.header-menu-content');
        var topOfNav = nav.offsetTop;

        $(window).on('scroll', function () {
            //header fixed animation and control
            if ($(window).scrollTop() >= topOfNav) {
                document.body.style.paddingTop = nav.offsetHeight + 'px';
                document.body.classList.add('fixed-nav');
            }
            else {
                document.body.style.paddingTop = 0;
                document.body.classList.remove('fixed-nav');
            }
        });

        /*=========== language-menu-dropdown ============*/
        $('.hover-menu li').hover(function () {
            $(this).children('.hover-menu-dropdown').stop(true, false, true).fadeToggle(300);
        });
         /*=========== search-form open ============*/
        $(document).on('click', '.search-icon', function () {
            $('.search-form').fadeToggle(200);
        });

        /*=========== search-form-close ============*/
        $(document).on('click', '.search-form-close', function () {
            $('.search-form').fadeOut(200);
        });

        /*==== homepage-slide 1 =====*/
        $('.homepage-slide-1').owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            autoplay: true,
            loop: true,
            smartSpeed: 6000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        });

        $('.homepage-slide-1').on('translate.owl.carousel', function(){
            $('.single-slide-item .banner-content').removeClass('animated pulse').css('opacity', '0');
        });

        $('.homepage-slide-1').on('translated.owl.carousel', function(){
            $('.single-slide-item .banner-content').addClass('animated pulse').css('opacity', '1');
        });

        /*==== service-carousel =====*/
        $('.service-carousel').owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            dots: false,
            smartSpeed: 500,
            autoplay: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive:{
                320:{
                    items:1,
                },
                992:{
                    items:3,
                }
            }
        });

    });
})(jQuery);
