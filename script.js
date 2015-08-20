/*jslint browser: true*/
/*jslint node: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    var $window = $(window);
    var scrollTime = 0.1;
    var scrollDistance = 70;

    var previousScroll = 0;
    var changeNavColor = 1;
    var navChange = $('.firstSection').offset().top;
    navChange = navChange - 90;
    navChange = Math.floor(navChange);

    $(document).on('scroll', function(event) {
        var currentScroll = $(window).scrollTop();

        if(currentScroll <= previousScroll && changeNavColor == 0) {
            if(currentScroll < navChange) {
                $(document).trigger('navTransparent');
                changeNavColor = 1;
            }
        } else {
            if(currentScroll > navChange && changeNavColor == 1) {
                $(document).trigger('navBlack');
                changeNavColor = 0;
            }
        }
        previousScroll = currentScroll;
    });

    $(document).on('navTransparent', function() {
        $('nav').css('background-color', 'transparent');
    });

    $(document).on('navBlack', function() {
        $('nav').css('background-color', '#111');
    });

    $window.on("mousewheel DOMMouseScroll", function(event){

        event.preventDefault();

        var delta = event.originalEvent.wheelDelta/80 || -event.originalEvent.detail/3;
        var scrollTop = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
            });

    });

    $('.moreButton').on('click', function(event) {
        $(this).siblings('.more').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).siblings('.lessButton').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).slideToggle('100');
    });

    $('.lessButton').on('click', function(event) {
        $(this).siblings('.more').slideToggle('400');
        $(this).siblings('.moreButton').slideToggle('400', function() {
            $(this).css('display', 'block');
        });
        $(this).slideToggle('100');
    });
});