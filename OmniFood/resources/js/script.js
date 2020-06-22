$(document).ready(function () {

    /* Sticky Nav */
    $('.js-section').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Scroll Button */
    $('.scroll-to-plan').click(function () {
        $('html,body').animate({
            scrollTop: $('.section-plans').offset().top
        }, 1000)
    });

    $('.scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js-section').offset().top
        }, 1000)
    });

    /* Animations on scroll */
    $('.js-wp-1').waypoint(function (direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Mobile NAV */
    $('.mobile-nav-icon').click(function(){
        var nav = $('.main-nav');
        nav.slideToggle(200);
        var icon = $('.mobile-nav-icon i');
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })

});